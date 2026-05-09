import { Model } from '../model/model';
import { Player } from '../model/Player';
import type { ObstacleData } from '../model/MapGenerator';
import { GameEvent, StateMachine } from './StateMachine';
import { GameEventBus, GameEventType } from '../core/GameEventBus';
import { PlayerConfig, HUMAN_PLAYER_IDS, AIConfig } from '../config/GameConfig';
import { scoreNode } from './ai/NodeScorer';
import { INetworkAdapter } from '../network/INetworkAdapter';
import type { TurnAction, TurnResult } from '../schema/types';
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
  private autoLoop: boolean = true;

  private allHumanPlayerIds: string[] = [];
  private pendingNextNodeId: Map<string, number | undefined> = new Map();
  private pendingShotNodeId: Map<string, number | undefined> = new Map();
  private reachableNodesPerPlayer: Map<string, Set<number>> = new Map();
  private confirmedActions: Map<string, TurnAction> = new Map();

  /** True while sendRoundActions callbacks are being processed; suppresses per-result VIS_UPDATE_VIEW */
  private batchProcessing = false;

  /** Number of path animations still in progress; input unlocks when this reaches 0 */
  private pendingAnimCount = 0;

  /** Monotonically increasing round counter, injected into TurnManager for ThreatMap. */
  private roundNumber: number = 0;

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

    this.turnManager = new TurnManager(model, () => this.roundNumber, eventBus);

    this.networkAdapter.onTurnResult(this.applyTurnResult.bind(this));
    this.networkAdapter.onGameStarted(this.handleGameStarted.bind(this));
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
  }

  private setupEventListeners(): void {
    this.eventBus.on(GameEventType.HIT_DETECTED, this.handleHitDetected.bind(this));
    this.eventBus.on(GameEventType.INPUT_LOCKED, (data: { locked: boolean }) => {
      this.inputLocked = data.locked;
    });
    this.eventBus.on(GameEventType.SPECTATOR_SET_AUTO_LOOP, ({ enabled }) => {
      this.autoLoop = enabled;
      this.eventBus.emit(GameEventType.SPECTATOR_AUTO_LOOP_CHANGED, { enabled });
      if (enabled) this.startAutoLoop();
    });
    this.eventBus.on(GameEventType.SPECTATOR_SELECT_PLAYER, ({ playerId }) => {
      if (this.inputLocked) return;
      const player = this.model.getPlayer(playerId);
      if (!player || !player.isAlive) return;
      this.activePlayerId = playerId;
      this.eventBus.emit(GameEventType.VIS_SET_ACTIVE_PLAYER, { playerId });

      if (player.isNPC) {
        const scores = this.computeScoreNodeLabels(player);
        this.eventBus.emit(GameEventType.VIS_SCORENODE_LABELS, { scores });
      } else {
        this.eventBus.emit(GameEventType.VIS_SCORENODE_LABELS, { scores: null });
      }
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
        if (this.allHumanPlayerIds.length > 0) {
          this.enterSelectMode(this.allHumanPlayerIds[0]);
        } else {
          this.startAutoLoop();
        }
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
   * Called when a human player confirms their action (move + optional shot).
   * Records the action and either switches to the next unconfirmed player
   * or executes the round if all players have confirmed.
   */
  confirmPlayerAction(sm: StateMachine): void {
    // Shot→Idle (Complete) or Move→Idle (Cancel)
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
      shotAtNodeId: shotNodeId,
    });

    const player = this.model.getPlayer(playerId);
    this.eventBus.emit(GameEventType.PLAYER_ACTION_CONFIRMED, {
      playerId,
      moveToNodeId: nextNodeId,
      shotAtNodeId: shotNodeId,
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
    ++this.roundNumber;
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
    }));

    this.eventBus.emit(GameEventType.INPUT_LOCKED, { locked: true });
    this.batchProcessing = true;
    this.networkAdapter.sendRoundActions(rewrittenActions);
    this.batchProcessing = false;

    this.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);

    this.pendingAnimCount = resolved.filter(r => r.path.length > 1).length;
    if (this.pendingAnimCount === 0) {
      this.eventBus.emit(GameEventType.VIS_SET_ACTIVE_PLAYER, { playerId: this.activePlayerId });
      this.eventBus.emit(GameEventType.INPUT_LOCKED, { locked: false });
      this.resetAllStateMachines();
      if (this.allHumanPlayerIds.length > 0) {
        this.enterSelectMode(this.allHumanPlayerIds[0]);
      } else {
        this.startAutoLoop();
      }
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
    ++this.roundNumber;

    const activePlayer = this.model.getPlayer(this.activePlayerId);
    const stayActions: TurnAction[] = activePlayer ? [{
      playerId: this.activePlayerId,
      moveToNodeId: activePlayer.node.id,
      shotAtNodeId: undefined,
    }] : [];
    const allActions: TurnAction[] = [...stayActions, ...this.turnManager.collectNPCActions()];

    const resolved = resolveRoundPaths(allActions, this.model, PlayerConfig.MoveRange);
    this.pendingPaths = new Map(resolved.map(r => [r.playerId, r.path]));

    const rewrittenActions: TurnAction[] = resolved.map(r => ({
      playerId: r.playerId,
      moveToNodeId: r.finalNodeId,
      shotAtNodeId: r.shotAtNodeId,
    }));

    this.eventBus.emit(GameEventType.INPUT_LOCKED, { locked: true });
    this.batchProcessing = true;
    this.networkAdapter.sendRoundActions(rewrittenActions);
    this.batchProcessing = false;

    this.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);

    this.pendingAnimCount = resolved.filter(r => r.path.length > 1).length;
    if (this.pendingAnimCount === 0) {
      this.eventBus.emit(GameEventType.VIS_SET_ACTIVE_PLAYER, { playerId: this.activePlayerId });
      this.eventBus.emit(GameEventType.INPUT_LOCKED, { locked: false });
      this.startAutoLoop();
    }
  }

  private startAutoLoop(): void {
    if (this.allHumanPlayerIds.length === 0 && this.autoLoop) {
      setTimeout(() => this.eventBus.emit(GameEventType.NPC_ONLY_TURN), 0);
    }
  }

  private handleGameStarted(): void {
    console.log(`▶ Game started! (${this.networkAdapter.getMyPlayerId()})`);
    this.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);
    if (this.allHumanPlayerIds.length > 0) {
      this.enterSelectMode(this.allHumanPlayerIds[0]);
    } else {
      this.startAutoLoop();
    }
  }

  /**
   * Applies a turn result received from the network adapter.
   * During batch (simultaneous) processing, VIS_UPDATE_VIEW is deferred to the caller.
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

    const alivePlayers = Array.from(this.model.players.values()).filter(p => p.isAlive);
    if (alivePlayers.length === 1) {
      console.log(`🏆 ${alivePlayers[0].id} wins!`);
    }
  }

  getModel(): Model {
    return this.model;
  }

  private computeScoreNodeLabels(npc: Player): Map<number, number> {
    const enemies = this.model.getEnemyPlayers(npc.id);
    const reachable = this.model.getReachableNodes(npc.node.id, AIConfig.GoalSearchRadius);
    const teamVisibleNodeIds = this.model.getTeamVisibleNodes(npc.id);
    const threatMap = this.turnManager.getThreatMapForTeam(npc.team);
    const result = new Map<number, number>();
    for (const nodeId of reachable) {
      result.set(nodeId, scoreNode(this.model, npc, nodeId, enemies, threatMap, teamVisibleNodeIds));
    }
    return result;
  }

  importObstacles(obstaclesData: ObstacleData[]): void {
    this.model.importObstacles(obstaclesData);
    this.eventBus.emit(GameEventType.VIS_UPDATE_OBSTACLES);
  }

}
