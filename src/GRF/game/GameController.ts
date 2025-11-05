import * as THREE from 'three';
import { Model } from '../../MODEL/model';
import { State, GameEvent, StateMachine } from '../StateMachine';
import { VisualizationSync } from '../rendering/VisualizationSync';
import { GameEventBus, GameEventType } from '../../core/events/GameEventBus';
import { PlayerConfig } from '../../config/GameConfig';
import { Player } from '../../MODEL/Player';
import { node } from '../../MODEL/node';
import { EnemyAI, AIBehavior } from '../../AI/EnemyAI';

/**
 * Controls game logic and state transitions
 * Handles player actions, enemy AI, and combat resolution
 */
export class GameController {
  private model: Model;
  private visualizationSync: VisualizationSync;
  private eventBus: GameEventBus;
  private activePlayerId: string;
  private enemyAI: EnemyAI;

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
    // Use PATROL as default for better performance, can be changed via setAIBehavior()
    this.enemyAI = new EnemyAI(model, AIBehavior.DEFENSIVE);

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

    // Execute AI turns for all enemies
    this.executeEnemyTurns();

    // Check combat results
    this.checkCombatResults();

    // Reset state
    sm.transition(GameEvent.SelectPlayer);
    this.visualizationSync.setPlayerSelectMesh(nextMesh);
    this.visualizationSync.setPlayerNextMesh(this.visualizationSync.getUndefinedMesh());
    this.visualizationSync.setPlayerShotMesh(this.visualizationSync.getUndefinedMesh());
  }

  /**
   * Executes AI turns for all enemies
   */
  private executeEnemyTurns(): void {
    for (const [enemyId, enemy] of this.model.enemies) {
      const decision = this.enemyAI.makeDecision(enemy, this.model.players);

      // Move enemy
      if (decision.moveToNode && decision.moveToNode.id !== enemy.node.id) {
        this.model.setEnemyRef(enemyId, decision.moveToNode);
      }

      // Update enemy angle
      enemy.setAngle(decision.targetAngle);

      // Enemy shoots
      if (decision.shootAtNode) {
        // Check if any player was hit
        for (const [playerId, player] of this.model.players) {
          if (player.node.id === decision.shootAtNode.id) {
            console.log(`${enemyId} HIT ${playerId}!`);
            // TODO: Implement player health/death system
          }
        }
      }
    }
  }

  /**
   * Checks if player's shot hit an enemy
   */
  private checkPlayerShot(shotNodeId: number | undefined): boolean {
    if (shotNodeId === undefined) return false;

    for (const [enemyId, enemy] of this.model.enemies) {
      if (shotNodeId === enemy.node.id) {
        console.log(`${this.activePlayerId} HIT ${enemyId}!`);
        // TODO: Implement enemy health/death system
        return true;
      }
    }

    console.log(`${this.activePlayerId} missed!`);
    return false;
  }

  /**
   * Checks combat results (collision detection)
   */
  private checkCombatResults(): void {
    // Check if any player is at same position as enemy (lose condition)
    for (const [playerId, player] of this.model.players) {
      for (const [enemyId, enemy] of this.model.enemies) {
        if (player.node.id === enemy.node.id) {
          console.log(`${playerId} encountered ${enemyId} at node ${player.node.id}!`);
          // TODO: Implement proper collision resolution
        }
      }
    }
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

  /**
   * Sets AI behavior type
   */
  setAIBehavior(behavior: AIBehavior): void {
    this.enemyAI.setBehavior(behavior);
    console.log(`AI behavior set to: ${behavior}`);
  }

  /**
   * Gets current AI behavior type
   */
  getAIBehavior(): AIBehavior {
    return this.enemyAI.getBehavior();
  }
}
