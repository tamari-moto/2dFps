import * as THREE from 'three';
import { gsap } from 'gsap';
import { Model } from '../model/model';
import { ViewAngleVisualizer } from './ViewAngleVisualizer';
import { MeshFactory } from './MeshFactory';
import { SceneManager } from './SceneManager';
import { NodeConfig, AnimationConfig, PlayerConfig } from '../config/GameConfig';
import { PLAYER_CONSTANTS } from '../config/GameConstants';
import { Player } from '../model/Player';
import { GameEventBus, GameEventType } from '../core/GameEventBus';

/**
 * Synchronizes game model state with Three.js visualization
 * Handles mesh updates, animations, and visual effects
 */
export class VisualizationSync {
  private sceneManager: SceneManager;
  private model: Model;
  private viewAngleVisualizer: ViewAngleVisualizer;

  // Mesh collections
  private meshList: THREE.Mesh[] = [];
  private playerMeshes: Map<string, THREE.Mesh> = new Map();

  // Mapping between meshes and nodes
  private meshToNodeMap: Map<number, number> = new Map();
  private nodeToMeshMap: Map<number, number> = new Map();

  // Special meshes for game states
  private playerSelectMesh: THREE.Mesh;
  private playerNextMesh: THREE.Mesh;
  private playerShotMesh: THREE.Mesh;
  private undefinedMesh: THREE.Mesh;

  // Active selections
  private activePlayerId: string;

  constructor(
    sceneManager: SceneManager,
    model: Model,
    activePlayerId: string,
    eventBus: GameEventBus
  ) {
    this.sceneManager = sceneManager;
    this.model = model;
    this.activePlayerId = activePlayerId;

    this.viewAngleVisualizer = new ViewAngleVisualizer(sceneManager.getScene());

    // Create placeholder meshes
    this.playerSelectMesh = MeshFactory.createUndefinedMesh();
    this.playerNextMesh = MeshFactory.createUndefinedMesh();
    this.playerShotMesh = MeshFactory.createUndefinedMesh();
    this.undefinedMesh = MeshFactory.createUndefinedMesh();

    this.initializeVisualization();
    this.subscribeToEvents(eventBus);
  }

  /**
   * Subscribes to visualization command events from GameController
   */
  private subscribeToEvents(eventBus: GameEventBus): void {
    eventBus.on(GameEventType.VIS_UPDATE_VIEW, () => this.updateView());
    eventBus.on(GameEventType.VIS_SET_ACTIVE_PLAYER, (data: { playerId: string }) => {
      this.activePlayerId = data.playerId;
      this.updateView();
    });
    eventBus.on(GameEventType.VIS_SET_SELECT_MESH, (data: { nodeId: number }) => {
      const mesh = this.findMeshByNodeId(data.nodeId);
      if (mesh) this.playerSelectMesh = mesh;
    });
    eventBus.on(GameEventType.VIS_SET_NEXT_MESH, (data: { nodeId: number }) => {
      const mesh = this.findMeshByNodeId(data.nodeId);
      if (mesh) this.playerNextMesh = mesh;
    });
    eventBus.on(GameEventType.VIS_SET_SHOT_MESH, (data: { nodeId: number }) => {
      const mesh = this.findMeshByNodeId(data.nodeId);
      if (mesh) this.playerShotMesh = mesh;
    });
    eventBus.on(GameEventType.VIS_CLEAR_NEXT_MESH, () => {
      this.playerNextMesh = this.undefinedMesh;
    });
    eventBus.on(GameEventType.VIS_CLEAR_SHOT_MESH, () => {
      this.playerShotMesh = this.undefinedMesh;
    });
    eventBus.on(GameEventType.VIS_SHOW_HIT_EFFECT, (data: { playerId: string }) => {
      this.showHitEffect(data.playerId);
    });
    eventBus.on(GameEventType.VIS_HIDE_PLAYER, (data: { playerId: string }) => {
      this.hidePlayer(data.playerId);
    });
    eventBus.on(GameEventType.VIS_TOGGLE_VIEW_ANGLE, () => {
      const isVisible = this.viewAngleVisualizer.toggle();
      this.updateView();
      console.log(`View angle edges: ${isVisible ? 'ON' : 'OFF'}`);
    });
    eventBus.on(GameEventType.VIS_UPDATE_OBSTACLES, () => this.updateObstacles());
  }

  /**
   * Finds a mesh by node ID
   */
  private findMeshByNodeId(nodeId: number): THREE.Mesh | undefined {
    return this.meshList.find(m => this.meshToNodeMap.get(m.id) === nodeId);
  }

  /**
   * Initializes all visualization elements
   */
  private initializeVisualization(): void {
    // Create node meshes
    for (const node of this.model.nodeList) {
      const mesh = MeshFactory.createNodeCircle(node.x, node.y);
      this.sceneManager.addToScene(mesh);
      this.meshList.push(mesh);
      this.meshToNodeMap.set(mesh.id, node.id);
      this.nodeToMeshMap.set(node.id, mesh.id);
    }

    // Create obstacle line segments
    for (const line of this.model.Lines) {
      const lineSegment = MeshFactory.createLineSegment(
        line.start.x,
        line.start.y,
        line.end.x,
        line.end.y
      );
      this.sceneManager.addToScene(lineSegment);
    }

    // Create player meshes
    for (const [playerId, player] of this.model.players) {
      const mesh = MeshFactory.createPlayer(player.color);
      this.sceneManager.addToScene(mesh);
      this.playerMeshes.set(playerId, mesh);
    }
  }

  /**
   * Updates the entire visualization based on current model state
   */
  updateView(): void {
    const activePlayer = this.model.getPlayer(this.activePlayerId);
    if (!activePlayer) return;

    // Update player positions
    this.updatePlayers();

    // Reset all node colors
    this.resetNodeColors();

    // Draw view angle visualization
    this.viewAngleVisualizer.draw(activePlayer.node, activePlayer.angle);

    // Update visible nodes
    this.updateVisibleNodes(activePlayer);

    // Update special node colors (must be after updateVisibleNodes to prevent override)
    this.updateSpecialNodes();
  }

  /**
   * Updates player mesh positions and scales
   */
  private updatePlayers(): void {
    for (const [playerId, player] of this.model.players) {
      const mesh = this.playerMeshes.get(playerId);
      if (mesh) {
        gsap.to(mesh.position, {
          x: player.node.x,
          y: player.node.y,
          duration: AnimationConfig.MovementDuration,
        });

        // Highlight active player
        const scale = playerId === this.activePlayerId
          ? PLAYER_CONSTANTS.ACTIVE_SCALE
          : PLAYER_CONSTANTS.NORMAL_SCALE;
        mesh.scale.set(scale, scale, scale);
      }
    }
  }

  /**
   * Resets all node meshes to default color
   */
  private resetNodeColors(): void {
    this.meshList.forEach(mesh => {
      MeshFactory.setMeshColor(mesh, NodeConfig.DefaultColor);
    });
  }

  /**
   * Updates colors for special nodes (selected, next, shot)
   */
  private updateSpecialNodes(): void {
    if (this.playerShotMesh && this.playerShotMesh !== this.undefinedMesh) {
      MeshFactory.setMeshColor(this.playerShotMesh, NodeConfig.ShotTargetColor);
      gsap.fromTo(
        this.playerShotMesh.scale,
        { x: 1, y: 1 },
        {
          x: AnimationConfig.ShotPulseScale,
          y: AnimationConfig.ShotPulseScale,
          duration: AnimationConfig.ShotPulseDuration,
          yoyo: true,
          repeat: 1,
          repeatDelay: AnimationConfig.ShotPulseRepeatDelay,
          ease: AnimationConfig.ShotPulseEase,
          overwrite: 'auto',
        }
      );
    }

    if (this.playerSelectMesh && this.playerSelectMesh !== this.undefinedMesh) {
      MeshFactory.setMeshColor(this.playerSelectMesh, NodeConfig.SelectedColor);
    }

    if (this.playerNextMesh && this.playerNextMesh !== this.undefinedMesh) {
      MeshFactory.setMeshColor(this.playerNextMesh, NodeConfig.NextMoveColor);
    }
  }

  /**
   * Updates visible nodes and enemy visibility based on player's view
   */
  private updateVisibleNodes(activePlayer: Player): void {
    const visibleNodes = this.model.getVisibleNodesAtAngle(
      activePlayer.node,
      activePlayer.angle,
      PlayerConfig.MaxViewDistance
    );

    for (const node of visibleNodes) {
      const mesh = this.meshList.find(
        m => this.meshToNodeMap.get(m.id) === node.id
      );
      if (mesh) {
        MeshFactory.setMeshColor(mesh, NodeConfig.VisibleColor);
      }
    }
  }

  /**
   * Updates obstacles in the scene
   */
  updateObstacles(): void {
    // Remove existing obstacle lines
    const scene = this.sceneManager.getScene();
    const linesToRemove: THREE.Line[] = [];
    scene.traverse((object) => {
      if (object instanceof THREE.Line) {
        linesToRemove.push(object);
      }
    });
    linesToRemove.forEach(line => this.sceneManager.removeFromScene(line));

    // Add new obstacle lines
    for (const line of this.model.Lines) {
      const lineSegment = MeshFactory.createLineSegment(
        line.start.x,
        line.start.y,
        line.end.x,
        line.end.y
      );
      this.sceneManager.addToScene(lineSegment);
    }

    this.updateView();
  }

  /**
   * Shows hit effect on a player
   */
  showHitEffect(playerId: string): void {
    const mesh = this.playerMeshes.get(playerId);
    if (!mesh) return;

    // Flash red
    // const originalColor = (mesh.material as THREE.MeshBasicMaterial).color.getHex();
    MeshFactory.setMeshColor(mesh, 0xff0000);

    // Scale up and down
    gsap.timeline()
      .to(mesh.scale, {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        duration: 0.1,
        ease: 'power2.out',
      })
      .to(mesh.scale, {
        x: 1.0,
        y: 1.0,
        z: 1.0,
        duration: 0.2,
        ease: 'elastic.out(1, 0.3)',
      });

    // Restore color after flash
    setTimeout(() => {
      const player = this.model.getPlayer(playerId);
      if (player) {
        MeshFactory.setMeshColor(mesh, player.color);
      }
    }, 300);
  }

  /**
   * Hides a player's mesh (when eliminated)
   */
  hidePlayer(playerId: string): void {
    const mesh = this.playerMeshes.get(playerId);
    if (!mesh) return;

    // Fade out and shrink animation
    gsap.timeline()
      .to(mesh.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.5,
        ease: 'power2.in',
      })
      .call(() => {
        mesh.visible = false;
      });

    // Make material transparent
    const material = mesh.material as THREE.MeshBasicMaterial;
    gsap.to(material, {
      opacity: 0,
      duration: 0.5,
      onStart: () => {
        material.transparent = true;
      },
    });
  }

  /**
   * Gets the mesh list for raycasting
   */
  getMeshList(): THREE.Mesh[] {
    return this.meshList;
  }

  /**
   * Gets the mesh-to-node mapping
   */
  getMeshToNodeMap(): Map<number, number> {
    return this.meshToNodeMap;
  }

  /**
   * Adds a mesh for a player that joined after initialization (online mode).
   */
  addPlayerMesh(playerId: string, color: number): void {
    if (this.playerMeshes.has(playerId)) return;
    const mesh = MeshFactory.createPlayer(color);
    this.sceneManager.addToScene(mesh);
    this.playerMeshes.set(playerId, mesh);
  }
}
