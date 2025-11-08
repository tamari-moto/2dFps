import * as THREE from 'three';
import { Model } from '../../MODEL/model';
import { State, GameEvent, StateMachine } from '../StateMachine';
import { VisualizationSync } from '../rendering/VisualizationSync';
import { GameEventBus, GameEventType } from '../../core/events/GameEventBus';
import { PlayerConfig } from '../../config/GameConfig';
import { Player } from '../../MODEL/Player';
import { node } from '../../MODEL/node';
/**
 * Controls game logic and state transitions
 * Handles player actions and combat resolution
 */
export class GameController {
  private model: Model;
  private visualizationSync: VisualizationSync;
  private eventBus: GameEventBus;
  private activePlayerId: string;

  constructor(
    model: Model,
    visualizationSync: VisualizationSync,
    eventBus: GameEventBus,
    activePlayerId: string
  ) {
    this.model = model;
    this.visualizationSync = visualizationSync;
    this.eventBus = eventBus;
    this.activePlayerId = activePlayerId;

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
      if (mesh) {
        this.visualizationSync.setPlayerSelectMesh(mesh);
      }
    }
  }

  /**
   * Handles clicks in Select state
   */
  private handleSelectStateClick(activePlayer: Player, clickedNode: node, sm: StateMachine): void {
    if (activePlayer.node.id === clickedNode.id) {
      sm.transition(GameEvent.MovePlayer);
      const mesh = this.findMeshByNodeId(clickedNode.id);
      if (mesh) {
        this.visualizationSync.setPlayerNextMesh(mesh);
      }
    } else if (this.model.areNodesConnected(activePlayer.node, clickedNode)) {
      sm.transition(GameEvent.MovePlayer);
      const mesh = this.findMeshByNodeId(clickedNode.id);
      if (mesh) {
        this.visualizationSync.setPlayerNextMesh(mesh);
      }
    }
  }

  /**
   * Handles clicks in Move state
   */
  private handleMoveStateClick(activePlayer: Player, clickedNode: node, sm: StateMachine): void {
    const nextMesh = this.visualizationSync.getPlayerNextMesh();
    const nextNodeId = this.getMeshToNodeMap().get(nextMesh.id);

    if (nextNodeId !== undefined) {
      const nextNode = this.model.nodeList[nextNodeId];
      const visibleNodes = this.model.getVisibleNodesAtAngle(
        nextNode,
        activePlayer.angle,
        PlayerConfig.MaxViewDistance
      );

      const isVisible = visibleNodes.some(n => n.id === clickedNode.id);
      if (isVisible) {
        sm.transition(GameEvent.ShotPlayer);
        const mesh = this.findMeshByNodeId(clickedNode.id);
        if (mesh) {
          this.visualizationSync.setPlayerShotMesh(mesh);
        }
      }
    }
  }

  /**
   * Handles clicks in Shot state
   */
  private handleShotStateClick(activePlayer: Player, clickedNode: node, sm: StateMachine): void {
    const shotMesh = this.visualizationSync.getPlayerShotMesh();
    const shotNodeId = this.getMeshToNodeMap().get(shotMesh.id);

    if (shotNodeId === clickedNode.id) {
      // Execute shot
      this.executeTurn(activePlayer, sm);
    } else {
      // Change shot target
      const nextMesh = this.visualizationSync.getPlayerNextMesh();
      const nextNodeId = this.getMeshToNodeMap().get(nextMesh.id);

      if (nextNodeId !== undefined) {
        const nextNode = this.model.nodeList[nextNodeId];
        const visibleNodes = this.model.getVisibleNodesAtAngle(
          nextNode,
          activePlayer.angle,
          PlayerConfig.MaxViewDistance
        );

        const isVisible = visibleNodes.some(n => n.id === clickedNode.id);
        if (isVisible) {
          sm.transition(GameEvent.ShotPlayer);
          const mesh = this.findMeshByNodeId(clickedNode.id);
          if (mesh) {
            this.visualizationSync.setPlayerShotMesh(mesh);
          }
        }
      }
    }
  }

  /**
   * Executes a complete turn (move, shoot, enemy response)
   */
  private executeTurn(activePlayer: Player, sm: StateMachine): void {
    sm.transition(GameEvent.Complete);

    // Move player
    const nextMesh = this.visualizationSync.getPlayerNextMesh();
    const nextNodeId = this.getMeshToNodeMap().get(nextMesh.id);
    if (nextNodeId !== undefined) {
      this.model.setPlayerRef(this.activePlayerId, this.model.nodeList[nextNodeId]);
    }

    // Check player's shot
    const shotMesh = this.visualizationSync.getPlayerShotMesh();
    const shotNodeId = this.getMeshToNodeMap().get(shotMesh.id);
    this.checkPlayerShot(shotNodeId);

    // Update player angle
    const playerNextNodeId = this.getMeshToNodeMap().get(nextMesh.id);
    const playerShotNodeId = this.getMeshToNodeMap().get(shotMesh.id);
    if (playerNextNodeId !== undefined && playerShotNodeId !== undefined) {
      const newAngle = this.model.getAngleBetweenNodes(
        this.model.nodeList[playerNextNodeId],
        this.model.nodeList[playerShotNodeId]
      );
      activePlayer.setAngle(newAngle);
    }

    // Reset state
    sm.transition(GameEvent.SelectPlayer);
    this.visualizationSync.setPlayerSelectMesh(nextMesh);
    this.visualizationSync.setPlayerNextMesh(this.visualizationSync.getUndefinedMesh());
    this.visualizationSync.setPlayerShotMesh(this.visualizationSync.getUndefinedMesh());
  }

  /**
   * Checks if player's shot hit another player
   */
  private checkPlayerShot(shotNodeId: number | undefined): boolean {
    if (shotNodeId === undefined) return false;

    // Check if any other player is at the shot node
    for (const [playerId, player] of this.model.players) {
      // Skip the active player (can't hit yourself)
      if (playerId === this.activePlayerId) continue;

      if (shotNodeId === player.node.id) {
        console.log(`🎯 ${this.activePlayerId} HIT ${playerId}!`);
        this.eventBus.emit(GameEventType.HIT_DETECTED, {
          attackerId: this.activePlayerId,
          targetId: playerId,
          nodeId: shotNodeId,
        } as any);
        return true;
      }
    }

    console.log(`❌ ${this.activePlayerId} missed!`);
    this.eventBus.emit(GameEventType.MISS_DETECTED, {
      attackerId: this.activePlayerId,
      nodeId: shotNodeId,
    } as any);
    return false;
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
   * Handles hit detection events
   */
  private handleHitDetected(data: { attackerId: string; targetId: string; nodeId: number }): void {
    console.log(`💥 ${data.attackerId} hit ${data.targetId} at node ${data.nodeId}!`);

    // Apply damage to the target player
    const targetPlayer = this.model.getPlayer(data.targetId);
    if (targetPlayer) {
      targetPlayer.takeDamage(34); // One-shot kill (100 / 3 = ~33.3, so 34 damage means 3 shots to kill)

      console.log(`${data.targetId} HP: ${targetPlayer.health}/${targetPlayer.maxHealth}`);

      // Show visual feedback
      this.visualizationSync.showHitEffect(data.targetId);

      // Check if player was eliminated
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
