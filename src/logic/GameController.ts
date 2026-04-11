import { Model } from '../model/model';
import type { ObstacleData } from '../model/MapGenerator';
import { State, GameEvent, StateMachine } from './StateMachine';
import { GameEventBus, GameEventType } from '../core/GameEventBus';
import { AIConfig, PlayerConfig, KEYBOARD_KEYS } from '../config/GameConfig';
import { Player } from '../model/Player';
import { Node } from '../model/node';
import { INetworkAdapter } from '../network/INetworkAdapter';
import type { TurnAction, TurnResult } from '../schema/types';
import { TurnManager } from './TurnManager';

/**
 * Controls game logic and state transitions
 * Handles player actions and combat resolution
 */
export class GameController {
  private model: Model;
  private eventBus: GameEventBus;
  private activePlayerId: string;
  private networkAdapter: INetworkAdapter;
  private stateMachines: Map<string, StateMachine> = new Map();
  private turnManager: TurnManager;
  private inputLocked: boolean = false;
  private reachableNodes: Set<number> = new Set();

  /** True while sendRoundActions callbacks are being processed; suppresses per-result VIS_UPDATE_VIEW */
  private batchProcessing = false;

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

    // Create a StateMachine for each player
    for (const playerId of model.players.keys()) {
      this.stateMachines.set(playerId, new StateMachine());
    }

    this.turnManager = new TurnManager(model);

    this.networkAdapter.onTurnResult(this.applyTurnResult.bind(this));
    this.networkAdapter.onGameStarted(this.handleGameStarted.bind(this));
    this.setupEventListeners();
  }

  /**
   * Sets up event listeners for game events
   */
  private setupEventListeners(): void {
    this.eventBus.on(GameEventType.NODE_CLICKED, this.handleNodeClick.bind(this));
    this.eventBus.on(GameEventType.CANVAS_CLICKED_EMPTY, this.handleCanvasEmptyClick.bind(this));
    this.eventBus.on(GameEventType.KEY_PRESSED, this.handleKeyPress.bind(this));
    this.eventBus.on(GameEventType.PLAYER_SWITCHED, this.handlePlayerSwitch.bind(this));
    this.eventBus.on(GameEventType.HIT_DETECTED, this.handleHitDetected.bind(this));
    this.eventBus.on(GameEventType.INPUT_LOCKED, (data: { locked: boolean }) => {
      this.inputLocked = data.locked;
    });
  }

  /**
   * Gets or creates a StateMachine for the given player
   */
  private getStateMachine(playerId: string): StateMachine {
    if (!this.stateMachines.has(playerId)) {
      this.stateMachines.set(playerId, new StateMachine());
    }
    return this.stateMachines.get(playerId)!;
  }

  /**
   * Handles keyboard input for WASD movement, Enter confirm, and Escape cancel.
   */
  private handleKeyPress(data: { key: string }): void {
    if (this.inputLocked) return;

    const activePlayer = this.model.getPlayer(this.activePlayerId);
    if (!activePlayer) return;

    const sm = this.getStateMachine(this.activePlayerId);
    const currentState = sm.getState();

    if (data.key === KEYBOARD_KEYS.CONFIRM_TURN) {
      if (currentState === State.Move || currentState === State.Shot) {
        this.executeTurn(sm);
      }
      return;
    }

    if (data.key === KEYBOARD_KEYS.CANCEL) {
      this.handleCanvasEmptyClick();
      return;
    }

    const wasdNode = this.getWASDTargetNode(activePlayer, data.key);
    if (wasdNode === null) return;

    if (currentState === State.Idle) {
      sm.transition(GameEvent.SelectPlayer);
      this.eventBus.emit(GameEventType.VIS_SET_SELECT_MESH, { nodeId: activePlayer.node.id });
      this.reachableNodes = this.model.getReachableNodes(activePlayer.node.id, PlayerConfig.MoveRange);
      this.eventBus.emit(GameEventType.VIS_SET_REACHABLE_NODES, {
        nodeIds: Array.from(this.reachableNodes),
      });
    }

    const stateAfterIdle = sm.getState();
    if (stateAfterIdle === State.Select || stateAfterIdle === State.Move) {
      if (this.reachableNodes.has(wasdNode.id)) {
        if (stateAfterIdle === State.Select) {
          sm.transition(GameEvent.MovePlayer);
        }
        // Move状態では自己遷移なし: currentNextNodeId を直接上書き
        this.currentNextNodeId = wasdNode.id;
        this.eventBus.emit(GameEventType.VIS_SET_NEXT_MESH, { nodeId: wasdNode.id });
      }
    }

    this.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);
  }

  /**
   * Returns the neighboring node closest to the given WASD direction,
   * relative to the player's current angle.
   * Uses graph edges (x, y coordinates) rather than grid ID arithmetic.
   */
  private getWASDTargetNode(player: Player, key: string): Node | null {
    const angle = player.angle;

    let relAngle: number | null = null;
    if (key === KEYBOARD_KEYS.MOVE_UP    || key === KEYBOARD_KEYS.MOVE_UP_UPPER)    relAngle = 0;
    if (key === KEYBOARD_KEYS.MOVE_DOWN  || key === KEYBOARD_KEYS.MOVE_DOWN_UPPER)  relAngle = 180;
    if (key === KEYBOARD_KEYS.MOVE_LEFT  || key === KEYBOARD_KEYS.MOVE_LEFT_UPPER)  relAngle = 90;
    if (key === KEYBOARD_KEYS.MOVE_RIGHT || key === KEYBOARD_KEYS.MOVE_RIGHT_UPPER) relAngle = -90;
    if (relAngle === null) return null;

    const targetAngle = ((angle + relAngle) % 360 + 360) % 360;

    const neighborIds: number[] = this.model.Edges.List[player.node.id] ?? [];
    const currentNode = player.node;

    let bestNode: Node | null = null;
    let bestDiff = Infinity;

    for (const neighborId of neighborIds) {
      const neighbor = this.model.nodeList[neighborId];
      if (!neighbor) continue;

      const dx = neighbor.x - currentNode.x;
      const dy = neighbor.y - currentNode.y;
      const neighborAngle = ((Math.atan2(dy, dx) * 180 / Math.PI) % 360 + 360) % 360;

      let diff = Math.abs(neighborAngle - targetAngle);
      if (diff > 180) diff = 360 - diff;

      if (diff < bestDiff) {
        bestDiff = diff;
        bestNode = neighbor;
      }
    }

    return bestNode;
  }

  /**
   * Handles node click events
   */
  private handleNodeClick(data: { nodeId: number; position: { x: number; y: number } }): void {
    if (this.inputLocked) return;

    const activePlayer = this.model.getPlayer(this.activePlayerId);
    if (!activePlayer) return;

    const sm = this.getStateMachine(this.activePlayerId);
    const clickedNode = this.model.nodeList[data.nodeId];

    if (!clickedNode) return;

    const currentState = sm.getState();

    if (currentState === State.Idle) {
      this.handleIdleStateClick(activePlayer, clickedNode, sm);
    } else if (currentState === State.Select) {
      this.handleSelectStateClick(activePlayer, clickedNode, sm);
    } else if (currentState === State.Move) {
      this.handleMoveStateClick(activePlayer, clickedNode, sm);
    } else if (currentState === State.Shot) {
      this.handleShotStateClick(activePlayer, clickedNode, sm);
    }

    this.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);
  }

  /**
   * Handles clicks in Idle state
   */
  private handleIdleStateClick(activePlayer: Player, clickedNode: Node, sm: StateMachine): void {
    if (activePlayer.node.id === clickedNode.id) {
      sm.transition(GameEvent.SelectPlayer);
      this.eventBus.emit(GameEventType.VIS_SET_SELECT_MESH, { nodeId: clickedNode.id });

      // Compute and emit reachable nodes
      this.reachableNodes = this.model.getReachableNodes(activePlayer.node.id, PlayerConfig.MoveRange);
      this.eventBus.emit(GameEventType.VIS_SET_REACHABLE_NODES, {
        nodeIds: Array.from(this.reachableNodes),
      });
    }
  }

  /**
   * Handles clicks in Select state
   */
  private handleSelectStateClick(activePlayer: Player, clickedNode: Node, sm: StateMachine): void {
    const canMove = activePlayer.node.id === clickedNode.id ||
                    this.reachableNodes.has(clickedNode.id);
    if (canMove) {
      sm.transition(GameEvent.MovePlayer);
      this.currentNextNodeId = clickedNode.id;
      this.eventBus.emit(GameEventType.VIS_SET_NEXT_MESH, { nodeId: clickedNode.id });
    }
  }

  /**
   * Handles clicks in Move state
   */
  private handleMoveStateClick(activePlayer: Player, clickedNode: Node, sm: StateMachine): void {
    this.tryShotTarget(activePlayer, clickedNode, sm);
  }

  /**
   * Handles clicks in Shot state
   */
  private handleShotStateClick(activePlayer: Player, clickedNode: Node, sm: StateMachine): void {
    if (this.currentShotNodeId === clickedNode.id) {
      this.executeTurn(sm);
    } else {
      this.tryShotTarget(activePlayer, clickedNode, sm);
    }
  }

  // Tracks the currently selected next/shot node IDs (replaces VisualizationSync mesh queries)
  private currentNextNodeId: number | undefined;
  private currentShotNodeId: number | undefined;

  /**
   * Checks if a node is visible from the next move position and sets it as the shot target.
   */
  private tryShotTarget(activePlayer: Player, clickedNode: Node, sm: StateMachine): boolean {
    if (this.currentNextNodeId === undefined) return false;

    const nextNode = this.model.nodeList[this.currentNextNodeId];
    const isVisible = this.model
      .getVisibleNodesAtAngle(nextNode, activePlayer.angle, PlayerConfig.MaxViewDistance)
      .some(n => n.id === clickedNode.id);

    if (isVisible) {
      sm.transition(GameEvent.ShotPlayer);
      this.currentShotNodeId = clickedNode.id;
      this.eventBus.emit(GameEventType.VIS_SET_SHOT_MESH, { nodeId: clickedNode.id });
      return true;
    }
    return false;
  }

  /**
   * Executes a simultaneous round: collects all player actions, resolves them atomically,
   * then fires a single VIS_UPDATE_VIEW so all animations play in parallel.
   */
  private executeTurn(sm: StateMachine): void {
    sm.transition(GameEvent.Complete);

    const nextNodeId = this.currentNextNodeId;
    const shotNodeId = this.currentShotNodeId;

    if (nextNodeId === undefined) return;

    // Reset visual state immediately
    sm.transition(GameEvent.SelectPlayer);
    this.eventBus.emit(GameEventType.VIS_SET_SELECT_MESH, { nodeId: nextNodeId });
    this.currentNextNodeId = undefined;
    this.currentShotNodeId = undefined;
    this.eventBus.emit(GameEventType.VIS_CLEAR_NEXT_MESH);
    this.eventBus.emit(GameEventType.VIS_CLEAR_SHOT_MESH);

    // Recompute reachable nodes from the new position
    this.reachableNodes = this.model.getReachableNodes(nextNodeId, PlayerConfig.MoveRange);
    this.eventBus.emit(GameEventType.VIS_SET_REACHABLE_NODES, {
      nodeIds: Array.from(this.reachableNodes),
    });

    // Collect human action + all NPC actions (NPCs decide from current model state)
    const allActions: TurnAction[] = [
      { playerId: this.activePlayerId, moveToNodeId: nextNodeId, shotAtNodeId: shotNodeId },
    ];
    if (this.networkAdapter.supportsNPC()) {
      allActions.push(...this.turnManager.collectNPCActions());
    }

    // Resolve all actions atomically; applyTurnResult is called for each result
    // but VIS_UPDATE_VIEW is suppressed until all results are applied
    this.eventBus.emit(GameEventType.INPUT_LOCKED, { locked: true });
    this.batchProcessing = true;
    this.networkAdapter.sendRoundActions(allActions);
    this.batchProcessing = false;

    // Single VIS_UPDATE_VIEW fires all animations simultaneously
    this.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);

    // Re-enable input after animations complete
    this.delay(AIConfig.RoundAnimationDelayMs).then(() => {
      this.eventBus.emit(GameEventType.VIS_SET_ACTIVE_PLAYER, { playerId: this.activePlayerId });
      this.eventBus.emit(GameEventType.INPUT_LOCKED, { locked: false });
    });
  }

  /**
   * Called when the game starts (≥2 players connected).
   */
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

    // During batch processing the caller emits one VIS_UPDATE_VIEW after all results
    if (!this.batchProcessing) {
      this.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);
    }
  }

  /**
   * Handles empty canvas clicks (cancel action)
   */
  private handleCanvasEmptyClick(): void {
    if (this.inputLocked) return;

    const sm = this.getStateMachine(this.activePlayerId);
    sm.transition(GameEvent.Cancel);
    this.currentShotNodeId = undefined;
    this.currentNextNodeId = undefined;
    this.eventBus.emit(GameEventType.VIS_CLEAR_SHOT_MESH);
    this.eventBus.emit(GameEventType.VIS_CLEAR_NEXT_MESH);

    // Recompute reachable nodes from current position
    const activePlayer = this.model.getPlayer(this.activePlayerId);
    if (activePlayer) {
      this.reachableNodes = this.model.getReachableNodes(activePlayer.node.id, PlayerConfig.MoveRange);
      this.eventBus.emit(GameEventType.VIS_SET_REACHABLE_NODES, {
        nodeIds: Array.from(this.reachableNodes),
      });
    }

    sm.transition(GameEvent.SelectPlayer);
    this.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);
  }

  /**
   * Handles player switching
   */
  private handlePlayerSwitch(data: { currentPlayerId: string }): void {
    if (this.inputLocked) return;

    // Block switching to NPC-controlled players
    const targetPlayer = this.model.getPlayer(data.currentPlayerId);
    if (targetPlayer?.isNPC) return;

    this.activePlayerId = data.currentPlayerId;
    this.eventBus.emit(GameEventType.VIS_SET_ACTIVE_PLAYER, { playerId: data.currentPlayerId });
    console.log(`Switched to ${data.currentPlayerId}`);
  }

  /**
   * Handles hit detection events.
   */
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

  /**
   * Handles player elimination
   */
  private handlePlayerElimination(playerId: string): void {
    console.log(`⚰️ ${playerId} has been eliminated!`);
    this.eventBus.emit(GameEventType.VIS_HIDE_PLAYER, { playerId });

    const alivePlayers = Array.from(this.model.players.values()).filter(p => p.isAlive);
    if (alivePlayers.length === 1) {
      console.log(`🏆 ${alivePlayers[0].id} wins!`);
    }
  }

  /**
   * Gets the current model
   */
  getModel(): Model {
    return this.model;
  }

  /**
   * Imports obstacles
   */
  importObstacles(obstaclesData: ObstacleData[]): void {
    this.model.importObstacles(obstaclesData);
    this.eventBus.emit(GameEventType.VIS_UPDATE_OBSTACLES);
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
