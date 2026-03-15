import * as THREE from 'three';
import { Model } from '../model/model';
import { State, GameEvent, StateMachine } from './StateMachine';
import { VisualizationSync } from '../rendering/VisualizationSync';
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
  private visualizationSync: VisualizationSync;
  private eventBus: GameEventBus;
  private activePlayerId: string;
  private networkAdapter: INetworkAdapter;

  constructor(
    model: Model,
    visualizationSync: VisualizationSync,
    eventBus: GameEventBus,
    activePlayerId: string,
    networkAdapter: INetworkAdapter
  ) {
    this.model = model;
    this.visualizationSync = visualizationSync;
    this.eventBus = eventBus;
    this.activePlayerId = activePlayerId;
    this.networkAdapter = networkAdapter;

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
   * Handles node click events
   */
  private handleNodeClick(data: { nodeId: number; position: { x: number; y: number } }): void {
    const activePlayer = this.model.getPlayer(this.activePlayerId);
    if (!activePlayer) return;

    const sm = activePlayer.stateMachine;
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

    this.visualizationSync.updateView();
  }

  /**
   * Handles clicks in Idle state
   */
  private handleIdleStateClick(activePlayer: Player, clickedNode: node, sm: StateMachine): void {
    if (activePlayer.node.id === clickedNode.id) {
      sm.transition(GameEvent.SelectPlayer);
      const mesh = this.findMeshByNodeId(clickedNode.id);
      if (mesh) this.visualizationSync.setPlayerSelectMesh(mesh);
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
      this.applyNextMesh(clickedNode.id);
    }
  }

  /**
   * Handles clicks in Move state
   */
  private handleMoveStateClick(activePlayer: Player, clickedNode: node, sm: StateMachine): void {
    if (this.tryShotTarget(activePlayer, clickedNode, sm)) return;
  }

  /**
   * Handles clicks in Shot state
   */
  private handleShotStateClick(activePlayer: Player, clickedNode: node, sm: StateMachine): void {
    const shotNodeId = this.getMeshToNodeMap().get(this.visualizationSync.getPlayerShotMesh().id);

    if (shotNodeId === clickedNode.id) {
      this.executeTurn(sm);
    } else {
      this.tryShotTarget(activePlayer, clickedNode, sm);
    }
  }

  /**
   * Checks if a node is visible from the next move position and sets it as the shot target.
   * Returns true if the shot target was successfully set.
   */
  private tryShotTarget(activePlayer: Player, clickedNode: node, sm: StateMachine): boolean {
    const nextNodeId = this.getMeshToNodeMap().get(this.visualizationSync.getPlayerNextMesh().id);
    if (nextNodeId === undefined) return false;

    const nextNode = this.model.nodeList[nextNodeId];
    const isVisible = this.model
      .getVisibleNodesAtAngle(nextNode, activePlayer.angle, PlayerConfig.MaxViewDistance)
      .some(n => n.id === clickedNode.id);

    if (isVisible) {
      sm.transition(GameEvent.ShotPlayer);
      this.applyShotMesh(clickedNode.id);
      return true;
    }
    return false;
  }

  /**
   * Executes a complete turn by delegating to the network adapter.
   * LocalAdapter runs the logic in-process; ColyseusAdapter sends it to the server.
   */
  private executeTurn(sm: StateMachine): void {
    sm.transition(GameEvent.Complete);

    const nextMesh = this.visualizationSync.getPlayerNextMesh();
    const shotMesh = this.visualizationSync.getPlayerShotMesh();
    const nextNodeId = this.getMeshToNodeMap().get(nextMesh.id);
    const shotNodeId = this.getMeshToNodeMap().get(shotMesh.id);

    if (nextNodeId === undefined) return;

    // Reset visual state immediately
    sm.transition(GameEvent.SelectPlayer);
    this.visualizationSync.setPlayerSelectMesh(nextMesh);
    this.visualizationSync.setPlayerNextMesh(this.visualizationSync.getUndefinedMesh());
    this.visualizationSync.setPlayerShotMesh(this.visualizationSync.getUndefinedMesh());

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
   * Called by LocalAdapter synchronously, or by ColyseusAdapter after server response.
   */
  private applyTurnResult(result: TurnResult): void {
    // Update moving player's position and angle (already done inside LocalAdapter,
    // but we keep this for ColyseusAdapter where the model is updated here)
    const movingPlayer = this.model.getPlayer(result.movingPlayerId);
    if (movingPlayer) {
      this.model.setPlayerRef(result.movingPlayerId, this.model.nodeList[result.newNodeId]);
      movingPlayer.setAngle(result.newAngle);
    }

    // Apply hit results
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
    const activePlayer = this.model.getPlayer(this.activePlayerId);
    if (!activePlayer) return;

    const sm = activePlayer.stateMachine;
    sm.transition(GameEvent.Cancel);
    this.visualizationSync.setPlayerShotMesh(this.visualizationSync.getUndefinedMesh());
    this.visualizationSync.setPlayerNextMesh(this.visualizationSync.getUndefinedMesh());
    sm.transition(GameEvent.SelectPlayer);
    this.visualizationSync.updateView();
  }

  /**
   * Handles player switching
   */
  private handlePlayerSwitch(data: { currentPlayerId: string }): void {
    this.activePlayerId = data.currentPlayerId;
    this.visualizationSync.setActivePlayer(data.currentPlayerId);
    console.log(`Switched to ${data.currentPlayerId}`);
  }

  /**
   * Handles view angle toggle
   */
  private handleViewAngleToggle(): void {
    const isVisible = this.visualizationSync.toggleViewAngle();
    console.log(`View angle edges: ${isVisible ? 'ON' : 'OFF'}`);
  }

  /**
   * Handles hit detection events (damage already applied by the adapter).
   * Responsible for visual feedback only.
   */
  private handleHitDetected(data: { attackerId: string; targetId: string; nodeId: number }): void {
    console.log(`💥 ${data.attackerId} hit ${data.targetId} at node ${data.nodeId}!`);

    const targetPlayer = this.model.getPlayer(data.targetId);
    if (targetPlayer) {
      console.log(`${data.targetId} HP: ${targetPlayer.health}/${targetPlayer.maxHealth}`);
      this.visualizationSync.showHitEffect(data.targetId);

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

    // Hide the eliminated player's mesh
    this.visualizationSync.hidePlayer(playerId);

    // Check for game over (only one player remaining)
    const alivePlayers = Array.from(this.model.players.values()).filter(p => p.isAlive);
    if (alivePlayers.length === 1) {
      console.log(`🏆 ${alivePlayers[0].id} wins!`);
    }
  }

  /**
   * Sets the next move mesh by node ID
   */
  private applyNextMesh(nodeId: number): void {
    const mesh = this.findMeshByNodeId(nodeId);
    if (mesh) this.visualizationSync.setPlayerNextMesh(mesh);
  }

  /**
   * Sets the shot target mesh by node ID
   */
  private applyShotMesh(nodeId: number): void {
    const mesh = this.findMeshByNodeId(nodeId);
    if (mesh) this.visualizationSync.setPlayerShotMesh(mesh);
  }

  /**
   * Finds a mesh by node ID
   */
  private findMeshByNodeId(nodeId: number): THREE.Mesh | undefined {
    const meshList = this.visualizationSync.getMeshList();
    const meshToNodeMap = this.getMeshToNodeMap();
    return meshList.find(m => meshToNodeMap.get(m.id) === nodeId);
  }

  /**
   * Gets the mesh-to-node mapping
   */
  private getMeshToNodeMap(): Map<number, number> {
    return this.visualizationSync.getMeshToNodeMap();
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
    this.visualizationSync.updateObstacles();
  }

  /**
   * Imports obstacles
   */
  importObstacles(obstaclesData: any[]): void {
    this.model.importObstacles(obstaclesData);
    this.visualizationSync.updateObstacles();
  }

  /**
   * Generates complex map
   */
  generateComplexMap(): void {
    this.model.generateComplexMap();
    this.visualizationSync.updateObstacles();
  }
}
