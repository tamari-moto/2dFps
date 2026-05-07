import { Model } from '../model/model';
import type { ObstacleData } from '../model/MapGenerator';
import { GameEvent, State, StateMachine } from './StateMachine';
import { GameEventBus, GameEventType } from '../core/GameEventBus';
import { PlayerConfig, BombConfig, HUMAN_PLAYER_IDS } from '../config/GameConfig';
import { INetworkAdapter } from '../network/INetworkAdapter';
import type { TurnAction, TurnResult, RoundResult } from '../schema/types';
import { TurnManager } from './TurnManager';
import { InputCommandHandler } from './InputCommandHandler';
import { resolveRoundPaths } from './PathResolver';

export class GameController {
  private model: Model;
  private eventBus: GameEventBus;
  private activePlayerId: string;
  private networkAdapter: INetworkAdapter;
  private stateMachines: Map<string, StateMachine> = new Map();
  private turnManager: TurnManager;
  private inputLocked: boolean = false;

  private allHumanPlayerIds: string[] = [];
  private pendingNextNodeId: Map<string, number | undefined> = new Map();
  private pendingShotNodeId: Map<string, number | undefined> = new Map();
  private reachableNodesPerPlayer: Map<string, Set<number>> = new Map();
  private confirmedActions: Map<string, TurnAction> = new Map();

  /** True while sendRoundActions callbacks are being processed; suppresses per-result VIS_UPDATE_VIEW */
  private batchProcessing = false;

  /** Number of path animations still in progress; input unlocks when this reaches 0 */
  private pendingAnimCount = 0;

  private inputCommandHandler: InputCommandHandler;
  private pendingPaths: Map<string, number[]> = new Map();

  constructor(
    model: Model,
    eventBus: GameEventBus,
    activePlayerId: string,
    networkAdapter: INetworkAdapter
  ) {
    this.model = model;
    this.eventBus = eventBus;
    this.activePlayerId = activePlayerId;
    this.networkAdapter = networkAdapter;

    for (const playerId of model.players.keys()) {
      this.stateMachines.set(playerId, new StateMachine());
    }

    this.allHumanPlayerIds = HUMAN_PLAYER_IDS.filter((id: string) => model.players.has(id));
    for (const id of this.allHumanPlayerIds) {
      this.pendingNextNodeId.set(id, undefined);
      this.pendingShotNodeId.set(id, undefined);
      this.reachableNodesPerPlayer.set(id, new Set());
    }

    this.turnManager = new TurnManager(model);

    this.networkAdapter.onTurnResult(this.applyTurnResult.bind(this));
    this.networkAdapter.onGameStarted(this.handleGameStarted.bind(this));
    this.networkAdapter.onRoundResult(this.handleRoundEnded.bind(this));
    this.setupEventListeners();

    this.inputCommandHandler = new InputCommandHandler({
      model: this.model,
      eventBus: this.eventBus,
      getActivePlayerId: () => this.activePlayerId,
      setActivePlayerId: (id) => { this.activePlayerId = id; },
      getStateMachine: (id) => this.getStateMachine(id),
      getReachableNodesForPlayer: (id) => this.reachableNodesPerPlayer.get(id) ?? new Set(),
      setReachableNodesForPlayer: (id, s) => { this.reachableNodesPerPlayer.set(id, s); },
      getPendingNextNodeIdForPlayer: (id) => this.pendingNextNodeId.get(id),
      setPendingNextNodeIdForPlayer: (id, v) => { this.pendingNextNodeId.set(id, v); },
      getPendingShotNodeIdForPlayer: (id) => this.pendingShotNodeId.get(id),
      setPendingShotNodeIdForPlayer: (id, v) => { this.pendingShotNodeId.set(id, v); },
      isInputLocked: () => this.inputLocked,
      confirmPlayerAction: (sm) => this.confirmPlayerAction(sm),
    });
    this.inputCommandHandler.attach();

    // Start in bomb defusal mode immediately
    this.model.initRound();
    this.eventBus.emit(GameEventType.ROUND_STARTED, { roundNumber: this.model.roundNumber });
    this.eventBus.emit(GameEventType.VIS_HIGHLIGHT_BOMB_SITES, { nodeIds: this.model.bombSiteNodeIds });
  }

  private setupEventListeners(): void {
    this.eventBus.on(GameEventType.HIT_DETECTED, this.handleHitDetected.bind(this));
    this.eventBus.on(GameEventType.INPUT_LOCKED, (data: { locked: boolean }) => {
      this.inputLocked = data.locked;
    });
    this.eventBus.on(GameEventType.NPC_ONLY_TURN, () => {
      if (this.inputLocked) return;
      this.executeNPCOnlyTurn();
    });
    this.eventBus.on(GameEventType.VIS_PATH_ANIM_COMPLETE, () => {
      this.pendingAnimCount--;
      if (this.pendingAnimCount <= 0) {
        this.pendingAnimCount = 0;
        this.eventBus.emit(GameEventType.VIS_SET_ACTIVE_PLAYER, { playerId: this.activePlayerId });
        this.eventBus.emit(GameEventType.INPUT_LOCKED, { locked: false });
        this.resetAllStateMachines();
        this.enterSelectMode(this.allHumanPlayerIds[0] ?? this.activePlayerId);
      }
    });
  }

  private getStateMachine(playerId: string): StateMachine {
    if (!this.stateMachines.has(playerId)) {
      this.stateMachines.set(playerId, new StateMachine());
    }
    return this.stateMachines.get(playerId)!;
  }

  /**
   * Called when a human player confirms their action (move + optional shot/plant/defuse).
   */
  confirmPlayerAction(sm: StateMachine): void {
    const currentState = sm.getState();
    // Determine bomb action from SM state before transitioning
    const bombAction = currentState === State.Plant ? 'plant' as const
                     : currentState === State.Defuse ? 'defuse' as const
                     : 'none' as const;

    sm.transition(GameEvent.Complete) || sm.transition(GameEvent.Cancel);

    const playerId = this.activePlayerId;
    const nextNodeId = this.pendingNextNodeId.get(playerId);
    const shotNodeId = this.pendingShotNodeId.get(playerId);

    if (nextNodeId === undefined) return;

    sm.transition(GameEvent.SelectPlayer);
    this.eventBus.emit(GameEventType.VIS_SET_SELECT_MESH, { nodeId: nextNodeId });
    this.pendingNextNodeId.set(playerId, undefined);
    this.pendingShotNodeId.set(playerId, undefined);
    this.eventBus.emit(GameEventType.VIS_CLEAR_NEXT_MESH);
    this.eventBus.emit(GameEventType.VIS_CLEAR_SHOT_MESH);
    this.eventBus.emit(GameEventType.VIS_CLEAR_MOVE_PATH);

    this.confirmedActions.set(playerId, {
      playerId,
      moveToNodeId: nextNodeId,
      shotAtNodeId: bombAction !== 'none' ? undefined : shotNodeId,
      bombAction,
    });

    const player = this.model.getPlayer(playerId);
    this.eventBus.emit(GameEventType.PLAYER_ACTION_CONFIRMED, {
      playerId,
      moveToNodeId: nextNodeId,
      shotAtNodeId: bombAction !== 'none' ? undefined : shotNodeId,
      angle: player?.angle ?? 0,
      color: player?.color ?? 0xffffff,
    });

    if (this.areAllPlayersConfirmed()) {
      this.executeRound();
    } else {
      this.switchToNextUnconfirmed();
    }
  }

  private areAllPlayersConfirmed(): boolean {
    return this.allHumanPlayerIds.every(id => {
      const p = this.model.getPlayer(id);
      return !p || !p.isAlive || this.confirmedActions.has(id);
    });
  }

  private switchToNextUnconfirmed(): void {
    const next = this.allHumanPlayerIds.find(id => {
      const p = this.model.getPlayer(id);
      return p && p.isAlive && !this.confirmedActions.has(id);
    });
    if (next) {
      this.enterSelectMode(next);
    }
  }

  private enterSelectMode(playerId: string): void {
    this.activePlayerId = playerId;
    this.eventBus.emit(GameEventType.VIS_SET_ACTIVE_PLAYER, { playerId });

    const sm = this.getStateMachine(playerId);
    const player = this.model.getPlayer(playerId);
    if (!player) return;

    const reachable = this.model.getReachableNodes(player.node.id, PlayerConfig.MoveRange);
    this.reachableNodesPerPlayer.set(playerId, reachable);
    this.eventBus.emit(GameEventType.VIS_SET_REACHABLE_NODES, { nodeIds: Array.from(reachable) });
    this.eventBus.emit(GameEventType.VIS_SET_SELECT_MESH, { nodeId: player.node.id });

    sm.transition(GameEvent.Cancel);
    sm.transition(GameEvent.SelectPlayer);
  }

  /**
   * Executes all confirmed actions simultaneously once every human player has confirmed.
   */
  private executeRound(): void {
    const allActions: TurnAction[] = Array.from(this.confirmedActions.values());

    if (this.networkAdapter.supportsNPC()) {
      allActions.push(...this.turnManager.collectNPCActions());
    }

    const resolved = resolveRoundPaths(allActions, this.model, PlayerConfig.MoveRange);
    this.pendingPaths = new Map(resolved.map(r => [r.playerId, r.path]));

    const rewrittenActions: TurnAction[] = resolved.map(r => ({
      playerId: r.playerId,
      moveToNodeId: r.finalNodeId,
      shotAtNodeId: r.shotAtNodeId,
      bombAction: allActions.find(a => a.playerId === r.playerId)?.bombAction ?? 'none',
    }));

    this.eventBus.emit(GameEventType.INPUT_LOCKED, { locked: true });
    this.batchProcessing = true;
    this.networkAdapter.sendRoundActions(rewrittenActions);
    this.batchProcessing = false;

    // Emit bomb events based on model state after resolution
    this.emitPostRoundBombEvents();

    this.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);

    this.pendingAnimCount = resolved.filter(r => r.path.length > 1).length;
    if (this.pendingAnimCount === 0) {
      this.eventBus.emit(GameEventType.VIS_SET_ACTIVE_PLAYER, { playerId: this.activePlayerId });
      this.eventBus.emit(GameEventType.INPUT_LOCKED, { locked: false });
      this.resetAllStateMachines();
      this.enterSelectMode(this.allHumanPlayerIds[0] ?? this.activePlayerId);
    }
  }

  private emitPostRoundBombEvents(): void {
    const bomb = this.model.bombState;
    if (bomb.status === 'planted' && bomb.plantedAtNodeId !== undefined) {
      const turnsRemaining = BombConfig.ExplodeAfterTurns - (this.model.globalTurnIndex - bomb.plantedOnTurn);
      this.eventBus.emit(GameEventType.BOMB_PLANTED, {
        planterId: bomb.planterPlayerId ?? '',
        nodeId: bomb.plantedAtNodeId,
        turnsUntilExplosion: turnsRemaining,
      });
      this.eventBus.emit(GameEventType.VIS_BOMB_SITE_PLANTED, { nodeId: bomb.plantedAtNodeId });
    } else if (bomb.status === 'defused') {
      this.eventBus.emit(GameEventType.BOMB_DEFUSED, {
        defuserId: '',
        nodeId: bomb.plantedAtNodeId ?? 0,
      });
    } else if (bomb.status === 'exploded') {
      this.eventBus.emit(GameEventType.BOMB_EXPLODED, { nodeId: bomb.plantedAtNodeId ?? 0 });
    }
  }

  private resetAllStateMachines(): void {
    this.confirmedActions.clear();
    for (const id of this.allHumanPlayerIds) {
      this.pendingNextNodeId.set(id, undefined);
      this.pendingShotNodeId.set(id, undefined);
      const sm = this.stateMachines.get(id);
      if (sm) sm.transition(GameEvent.Cancel);
    }
  }

  private executeNPCOnlyTurn(): void {
    if (!this.networkAdapter.supportsNPC()) return;

    const activePlayer = this.model.getPlayer(this.activePlayerId);
    if (!activePlayer) return;

    const stayAction: TurnAction = {
      playerId: this.activePlayerId,
      moveToNodeId: activePlayer.node.id,
      shotAtNodeId: undefined,
      bombAction: 'none',
    };
    const allActions: TurnAction[] = [stayAction, ...this.turnManager.collectNPCActions()];

    const resolved = resolveRoundPaths(allActions, this.model, PlayerConfig.MoveRange);
    this.pendingPaths = new Map(resolved.map(r => [r.playerId, r.path]));

    const rewrittenActions: TurnAction[] = resolved.map(r => ({
      playerId: r.playerId,
      moveToNodeId: r.finalNodeId,
      shotAtNodeId: r.shotAtNodeId,
      bombAction: allActions.find(a => a.playerId === r.playerId)?.bombAction ?? 'none',
    }));

    this.eventBus.emit(GameEventType.INPUT_LOCKED, { locked: true });
    this.batchProcessing = true;
    this.networkAdapter.sendRoundActions(rewrittenActions);
    this.batchProcessing = false;

    this.emitPostRoundBombEvents();
    this.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);

    this.pendingAnimCount = resolved.filter(r => r.path.length > 1).length;
    if (this.pendingAnimCount === 0) {
      this.eventBus.emit(GameEventType.VIS_SET_ACTIVE_PLAYER, { playerId: this.activePlayerId });
      this.eventBus.emit(GameEventType.INPUT_LOCKED, { locked: false });
    }
  }

  private handleGameStarted(): void {
    console.log(`▶ Game started! (${this.networkAdapter.getMyPlayerId()})`);
    this.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);
    this.enterSelectMode(this.allHumanPlayerIds[0] ?? this.activePlayerId);
  }

  /**
   * Applies a turn result received from the network adapter.
   */
  private applyTurnResult(result: TurnResult): void {
    const movingPlayer = this.model.getPlayer(result.movingPlayerId);
    if (movingPlayer) {
      this.model.setPlayerRef(result.movingPlayerId, this.model.nodeList[result.newNodeId]);
      movingPlayer.setAngle(result.newAngle);
    }

    const path = this.pendingPaths.get(result.movingPlayerId);
    if (path && path.length > 1) {
      this.eventBus.emit(GameEventType.VIS_ANIMATE_ALONG_PATH, {
        playerId: result.movingPlayerId,
        path,
        finalAngle: result.newAngle,
      });
    }

    for (const hit of result.hits) {
      const targetPlayer = this.model.getPlayer(hit.targetId);
      if (targetPlayer) {
        targetPlayer.takeDamage(hit.damage);
      }

      this.eventBus.emit(GameEventType.HIT_DETECTED, {
        attackerId: result.movingPlayerId,
        targetId: hit.targetId,
        nodeId: result.newNodeId,
      });
    }

    if (!this.batchProcessing) {
      this.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);
    }
  }

  private handleHitDetected(data: { attackerId: string; targetId: string; nodeId: number }): void {
    console.log(`💥 ${data.attackerId} hit ${data.targetId} at node ${data.nodeId}!`);

    const targetPlayer = this.model.getPlayer(data.targetId);
    if (targetPlayer) {
      console.log(`${data.targetId} HP: ${targetPlayer.health}/${targetPlayer.maxHealth}`);
      this.eventBus.emit(GameEventType.VIS_SHOW_HIT_EFFECT, { playerId: data.targetId });

      if (!targetPlayer.isAlive) {
        this.handlePlayerElimination(data.targetId);
      }
    }
  }

  private handlePlayerElimination(playerId: string): void {
    console.log(`⚰️ ${playerId} has been eliminated!`);
    this.eventBus.emit(GameEventType.VIS_HIDE_PLAYER, { playerId });
  }

  /**
   * Called when a round ends (from LocalAdapter via onRoundResult callback).
   */
  private handleRoundEnded(result: RoundResult): void {
    console.log(`🏁 Round ${result.roundNumber} ended: ${result.winner} win (${result.reason})`);

    if (result.winner === 'attackers') {
      this.model.teamScores[0]++;
    } else {
      this.model.teamScores[1]++;
    }

    this.eventBus.emit(GameEventType.ROUND_ENDED, {
      winner: result.winner,
      reason: result.reason,
      scores: [...this.model.teamScores] as [number, number],
    });

    // Check match win condition
    if (
      this.model.teamScores[0] >= BombConfig.WinsPerMatch ||
      this.model.teamScores[1] >= BombConfig.WinsPerMatch
    ) {
      const winnerTeam: 0 | 1 = this.model.teamScores[0] >= BombConfig.WinsPerMatch ? 0 : 1;
      this.model.matchOver = true;
      this.eventBus.emit(GameEventType.MATCH_OVER, {
        winnerTeam,
        scores: [...this.model.teamScores] as [number, number],
      });
      console.log(`🏆 Match over! Team ${winnerTeam} wins!`);
      return;
    }

    // Start next round after delay
    setTimeout(() => this.startNextRound(), BombConfig.RespawnDelayMs);
  }

  private startNextRound(): void {
    this.model.initRound();
    this.eventBus.emit(GameEventType.ROUND_STARTED, { roundNumber: this.model.roundNumber });
    this.eventBus.emit(GameEventType.VIS_RESPAWN_ALL_PLAYERS);
    this.eventBus.emit(GameEventType.VIS_HIGHLIGHT_BOMB_SITES, { nodeIds: this.model.bombSiteNodeIds });
    this.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);
    this.resetAllStateMachines();

    // Re-initialize player HUD states
    for (const id of this.allHumanPlayerIds) {
      this.reachableNodesPerPlayer.set(id, new Set());
    }

    this.enterSelectMode(this.allHumanPlayerIds[0] ?? this.activePlayerId);
  }

  getModel(): Model {
    return this.model;
  }

  importObstacles(obstaclesData: ObstacleData[]): void {
    this.model.importObstacles(obstaclesData);
    this.eventBus.emit(GameEventType.VIS_UPDATE_OBSTACLES);
  }

}
