import { Model } from '../model/model';
import type { ObstacleData } from '../model/MapGenerator';
import { GameEvent, StateMachine } from './StateMachine';
import { GameEventBus, GameEventType } from '../core/GameEventBus';
import { AIConfig, AnimationConfig, PlayerConfig } from '../config/GameConfig';
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
  private reachableNodes: Set<number> = new Set();
  private currentNextNodeId: number | undefined;
  private currentShotNodeId: number | undefined;

  /** True while sendRoundActions callbacks are being processed; suppresses per-result VIS_UPDATE_VIEW */
  private batchProcessing = false;

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

    this.turnManager = new TurnManager(model);

    this.networkAdapter.onTurnResult(this.applyTurnResult.bind(this));
    this.networkAdapter.onGameStarted(this.handleGameStarted.bind(this));
    this.setupEventListeners();

    this.inputCommandHandler = new InputCommandHandler({
      model: this.model,
      eventBus: this.eventBus,
      getActivePlayerId: () => this.activePlayerId,
      setActivePlayerId: (id) => { this.activePlayerId = id; },
      getStateMachine: (id) => this.getStateMachine(id),
      getReachableNodes: () => this.reachableNodes,
      setReachableNodes: (s) => { this.reachableNodes = s; },
      getCurrentNextNodeId: () => this.currentNextNodeId,
      setCurrentNextNodeId: (v) => { this.currentNextNodeId = v; },
      getCurrentShotNodeId: () => this.currentShotNodeId,
      setCurrentShotNodeId: (v) => { this.currentShotNodeId = v; },
      isInputLocked: () => this.inputLocked,
      executeTurn: (sm) => this.executeTurn(sm),
    });
    this.inputCommandHandler.attach();
  }

  private setupEventListeners(): void {
    this.eventBus.on(GameEventType.HIT_DETECTED, this.handleHitDetected.bind(this));
    this.eventBus.on(GameEventType.INPUT_LOCKED, (data: { locked: boolean }) => {
      this.inputLocked = data.locked;
    });
  }

  private getStateMachine(playerId: string): StateMachine {
    if (!this.stateMachines.has(playerId)) {
      this.stateMachines.set(playerId, new StateMachine());
    }
    return this.stateMachines.get(playerId)!;
  }

  /**
   * Executes a simultaneous round:
   * 1. Resolves paths with collision detection (PathResolver)
   * 2. Rewrites each action's moveToNodeId to the collision-adjusted final node
   * 3. Sends to the adapter (which teleports each player to final node atomically)
   * 4. Fires VIS_UPDATE_VIEW once + per-player VIS_ANIMATE_ALONG_PATH for multi-step moves
   * 5. Delays input re-enable by the longest path animation duration
   */
  private executeTurn(sm: StateMachine): void {
    sm.transition(GameEvent.Complete);

    const nextNodeId = this.currentNextNodeId;
    const shotNodeId = this.currentShotNodeId;

    if (nextNodeId === undefined) return;

    sm.transition(GameEvent.SelectPlayer);
    this.eventBus.emit(GameEventType.VIS_SET_SELECT_MESH, { nodeId: nextNodeId });
    this.currentNextNodeId = undefined;
    this.currentShotNodeId = undefined;
    this.eventBus.emit(GameEventType.VIS_CLEAR_NEXT_MESH);
    this.eventBus.emit(GameEventType.VIS_CLEAR_SHOT_MESH);
    this.eventBus.emit(GameEventType.VIS_CLEAR_MOVE_PATH);

    const allActions: TurnAction[] = [
      { playerId: this.activePlayerId, moveToNodeId: nextNodeId, shotAtNodeId: shotNodeId },
    ];
    if (this.networkAdapter.supportsNPC()) {
      allActions.push(...this.turnManager.collectNPCActions());
    }

    // Resolve paths with collision detection before sending to adapter
    const resolved = resolveRoundPaths(allActions, this.model, PlayerConfig.MoveRange);

    // Store paths so applyTurnResult can emit per-player animation events
    this.pendingPaths = new Map(resolved.map(r => [r.playerId, r.path]));

    // Rewrite actions to collision-adjusted final nodes
    const rewrittenActions: TurnAction[] = resolved.map(r => ({
      playerId: r.playerId,
      moveToNodeId: r.finalNodeId,
      shotAtNodeId: r.shotAtNodeId,
    }));

    this.reachableNodes = this.model.getReachableNodes(nextNodeId, PlayerConfig.MoveRange);
    this.eventBus.emit(GameEventType.VIS_SET_REACHABLE_NODES, {
      nodeIds: Array.from(this.reachableNodes),
    });

    this.eventBus.emit(GameEventType.INPUT_LOCKED, { locked: true });
    this.batchProcessing = true;
    this.networkAdapter.sendRoundActions(rewrittenActions);
    this.batchProcessing = false;

    this.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);

    // Delay input re-enable by the longest path animation duration + buffer
    const maxSteps = resolved.reduce((acc, r) => Math.max(acc, r.path.length - 1), 0);
    const animDelay = maxSteps * AnimationConfig.MovementDuration * 1000 ;
    this.delay(animDelay).then(() => {
      this.eventBus.emit(GameEventType.VIS_SET_ACTIVE_PLAYER, { playerId: this.activePlayerId });
      this.eventBus.emit(GameEventType.INPUT_LOCKED, { locked: false });
    });
  }

  private handleGameStarted(): void {
    console.log(`▶ Game started! (${this.networkAdapter.getMyPlayerId()})`);
    this.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);
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

    // Emit path animation event for multi-step moves
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

    if (result.hits.length === 0) {
      console.log(`❌ ${result.movingPlayerId} missed!`);
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

  importObstacles(obstaclesData: ObstacleData[]): void {
    this.model.importObstacles(obstaclesData);
    this.eventBus.emit(GameEventType.VIS_UPDATE_OBSTACLES);
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
