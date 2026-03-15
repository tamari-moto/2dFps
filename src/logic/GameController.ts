import { Model } from '../model/model';
import type { ObstacleData } from '../model/ObstacleExporter';
import { State, GameEvent, StateMachine } from './StateMachine';
import { GameEventBus, GameEventType } from '../core/GameEventBus';
import { PlayerConfig } from '../config/GameConfig';
import { Player } from '../model/Player';
import { node } from '../model/node';
import { INetworkAdapter } from '../network/INetworkAdapter';
import type { TurnResult } from '../schema/types';

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
    this.eventBus.on(GameEventType.PLAYER_SWITCHED, this.handlePlayerSwitch.bind(this));
    this.eventBus.on(GameEventType.VIEW_ANGLE_TOGGLED, this.handleViewAngleToggle.bind(this));
    this.eventBus.on(GameEventType.HIT_DETECTED, this.handleHitDetected.bind(this));
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
   * Handles node click events
   */
  private handleNodeClick(data: { nodeId: number; position: { x: number; y: number } }): void {
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
  private handleIdleStateClick(activePlayer: Player, clickedNode: node, sm: StateMachine): void {
    if (activePlayer.node.id === clickedNode.id) {
      sm.transition(GameEvent.SelectPlayer);
      this.eventBus.emit(GameEventType.VIS_SET_SELECT_MESH, { nodeId: clickedNode.id });
    }
  }

  /**
   * Handles clicks in Select state
   */
  private handleSelectStateClick(activePlayer: Player, clickedNode: node, sm: StateMachine): void {
    const canMove = activePlayer.node.id === clickedNode.id ||
                    this.model.areNodesConnected(activePlayer.node, clickedNode);
    if (canMove) {
      sm.transition(GameEvent.MovePlayer);
      this.currentNextNodeId = clickedNode.id;
      this.eventBus.emit(GameEventType.VIS_SET_NEXT_MESH, { nodeId: clickedNode.id });
    }
  }

  /**
   * Handles clicks in Move state
   */
  private handleMoveStateClick(activePlayer: Player, clickedNode: node, sm: StateMachine): void {
    this.tryShotTarget(activePlayer, clickedNode, sm);
  }

  /**
   * Handles clicks in Shot state
   */
  private handleShotStateClick(activePlayer: Player, clickedNode: node, sm: StateMachine): void {
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
  private tryShotTarget(activePlayer: Player, clickedNode: node, sm: StateMachine): boolean {
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
   * Executes a complete turn by delegating to the network adapter.
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

    // Delegate logic to adapter; result is applied via applyTurnResult callback
    this.networkAdapter.sendTurnAction({
      playerId: this.activePlayerId,
      moveToNodeId: nextNodeId,
      shotAtNodeId: shotNodeId,
    });
  }

  /**
   * Called when the game starts (≥2 players connected).
   */
  private handleGameStarted(): void {
    console.log(`▶ Game started! (${this.networkAdapter.getMyPlayerId()})`);
    this.visualizationSync.updateView();
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

    for (const hit of result.hits) {
      console.log(`🎯 ${result.movingPlayerId} HIT ${hit.targetId}!`);
      this.eventBus.emit(GameEventType.HIT_DETECTED, {
        attackerId: result.movingPlayerId,
        targetId: hit.targetId,
        nodeId: result.newNodeId,
      });
    }

    if (result.hits.length === 0) {
      console.log(`❌ ${result.movingPlayerId} missed!`);
    }

    this.visualizationSync.updateView();
  }

  /**
   * Handles empty canvas clicks (cancel action)
   */
  private handleCanvasEmptyClick(): void {
    const sm = this.getStateMachine(this.activePlayerId);
    sm.transition(GameEvent.Cancel);
    this.currentShotNodeId = undefined;
    this.currentNextNodeId = undefined;
    this.eventBus.emit(GameEventType.VIS_CLEAR_SHOT_MESH);
    this.eventBus.emit(GameEventType.VIS_CLEAR_NEXT_MESH);
    sm.transition(GameEvent.SelectPlayer);
    this.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);
  }

  /**
   * Handles player switching
   */
  private handlePlayerSwitch(data: { currentPlayerId: string }): void {
    this.activePlayerId = data.currentPlayerId;
    this.eventBus.emit(GameEventType.VIS_SET_ACTIVE_PLAYER, { playerId: data.currentPlayerId });
    console.log(`Switched to ${data.currentPlayerId}`);
  }

  /**
   * Handles view angle toggle
   */
  private handleViewAngleToggle(): void {
    this.eventBus.emit(GameEventType.VIS_TOGGLE_VIEW_ANGLE);
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
   * Regenerates obstacles
   */
  regenerateObstacles(): void {
    this.model.generateRandomObstacles();
    this.eventBus.emit(GameEventType.VIS_UPDATE_OBSTACLES);
  }

  /**
   * Imports obstacles
   */
  importObstacles(obstaclesData: ObstacleData[]): void {
    this.model.importObstacles(obstaclesData);
    this.eventBus.emit(GameEventType.VIS_UPDATE_OBSTACLES);
  }

  /**
   * Generates complex map
   */
  generateComplexMap(): void {
    this.model.generateComplexMap();
    this.eventBus.emit(GameEventType.VIS_UPDATE_OBSTACLES);
  }
}
