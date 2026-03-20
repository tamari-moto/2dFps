import * as THREE from 'three';
import { gsap } from 'gsap';
import { Model } from '../model/model';
import { ViewAngleVisualizer } from './ViewAngleVisualizer';
import { createVariantPlayer } from './PlayerMeshFactory';
import { createNodeCircle, createWallMesh } from './NodeWallMeshFactory';
import { createUndefinedMesh, setNodeColor } from './MeshUtils';
import { SceneManager } from './SceneManager';
import { NodeConfig, NodeVisualConfig, AnimationConfig, PlayerConfig, RenderConfig, WallConfig } from '../config/GameConfig';
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
  private playerMeshes: Map<string, THREE.Object3D> = new Map();

  // Mapping between meshes and nodes
  private meshToNodeMap: Map<number, number> = new Map();
  private nodeToMeshMap: Map<number, number> = new Map();

  // Special meshes for game states
  private playerSelectMesh: THREE.Mesh;
  private playerNextMesh: THREE.Mesh;
  private playerShotMesh: THREE.Mesh;
  private undefinedMesh: THREE.Mesh;

  // Primitive character animation state per player
  private playerAnimState: Map<string, 'idle' | 'walk' | 'attack'> = new Map();
  private playerBodyAnims: Map<string, Array<gsap.core.Tween | gsap.core.Timeline>> = new Map();

  // Active selections
  private activePlayerId: string;

  constructor(
    sceneManager: SceneManager,
    model: Model,
    activePlayerId: string,
    eventBus: GameEventBus,
  ) {
    this.sceneManager = sceneManager;
    this.model = model;
    this.activePlayerId = activePlayerId;

    this.viewAngleVisualizer = new ViewAngleVisualizer(sceneManager.getScene());

    // Create placeholder meshes
    this.playerSelectMesh = createUndefinedMesh();
    this.playerNextMesh = createUndefinedMesh();
    this.playerShotMesh = createUndefinedMesh();
    this.undefinedMesh = createUndefinedMesh();

    this.initializeVisualization();
    this.subscribeToEvents(eventBus);
  }

  private createPlayerObject(color: number): THREE.Object3D {
    return createVariantPlayer(color);
  }

  /**
   * Sets color on a player Object3D (handles both Mesh and Group)
   */
  private setPlayerColor(obj: THREE.Object3D, color: number): void {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh && !child.userData.fixedColor) {
        const mat = child.material as THREE.MeshStandardMaterial;
        if ('color' in mat) mat.color.setHex(color);
        if ('emissive' in mat && mat.emissiveIntensity > 0) {
          mat.emissive.setHex(color);
        }
      }
    });
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
      this.startAttackAnim(this.activePlayerId);
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
      const mesh = createNodeCircle(node.x, node.y);
      this.sceneManager.addToScene(mesh);
      this.meshList.push(mesh);
      this.meshToNodeMap.set(mesh.id, node.id);
      this.nodeToMeshMap.set(node.id, mesh.id);
    }

    // Create obstacle wall meshes
    for (const line of this.model.Lines) {
      const wall = createWallMesh(
        line.start.x,
        line.start.y,
        line.end.x,
        line.end.y
      );
      this.sceneManager.addToScene(wall);
    }

    // Create player meshes
    for (const [playerId, player] of this.model.players) {
      const obj = this.createPlayerObject(player.color);
      this.sceneManager.addToScene(obj);
      this.playerMeshes.set(playerId, obj);
      this.startIdleAnim(playerId);
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
      const obj = this.playerMeshes.get(playerId);
      if (obj) {
        const dx = obj.position.x - player.node.x;
        const dy = obj.position.y - player.node.y;
        const moving = Math.sqrt(dx * dx + dy * dy) > 0.5;
        if (moving && this.playerAnimState.get(playerId) === 'idle') {
          this.startWalkAnim(playerId);
        }

        gsap.to(obj.position, {
          x: player.node.x,
          y: player.node.y,
          duration: AnimationConfig.MovementDuration,
        });
        obj.position.z = RenderConfig.PlayerZOffset;

        // Rotate to match player facing angle (+X-forward model, Y-up rotation)
        obj.rotation.x = Math.PI / 2;
        obj.rotation.y = (player.angle * Math.PI / 180) + RenderConfig.PlayerFacingOffset;
        obj.rotation.z = 0;

        const baseScale = 1;
        const scale = (playerId === this.activePlayerId
          ? PLAYER_CONSTANTS.ACTIVE_SCALE
          : PLAYER_CONSTANTS.NORMAL_SCALE) * baseScale;
        obj.scale.set(scale, scale, scale);
      }
    }
  }

  /**
   * Resets all node meshes to default color
   */
  private resetNodeColors(): void {
    this.meshList.forEach(mesh => {
      setNodeColor(mesh, NodeConfig.DefaultColor, NodeVisualConfig.EmissiveDefaultIntensity);
    });
  }

  /**
   * Updates colors for special nodes (selected, next, shot)
   */
  private updateSpecialNodes(): void {
    if (this.playerShotMesh && this.playerShotMesh !== this.undefinedMesh) {
      setNodeColor(this.playerShotMesh, NodeConfig.ShotTargetColor, NodeVisualConfig.EmissiveShotIntensity);
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
      setNodeColor(this.playerSelectMesh, NodeConfig.SelectedColor, NodeVisualConfig.EmissiveSelectedIntensity);
    }

    if (this.playerNextMesh && this.playerNextMesh !== this.undefinedMesh) {
      setNodeColor(this.playerNextMesh, NodeConfig.NextMoveColor, NodeVisualConfig.EmissiveNextIntensity);
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
        setNodeColor(mesh, NodeConfig.VisibleColor, NodeVisualConfig.EmissiveVisibleIntensity);
      }
    }
  }

  /**
   * Updates obstacles in the scene
   */
  updateObstacles(): void {
    // Remove existing obstacle wall meshes
    const scene = this.sceneManager.getScene();
    const wallsToRemove: THREE.Mesh[] = [];
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh && object.userData[WallConfig.UserDataTag]) {
        wallsToRemove.push(object);
      }
    });
    wallsToRemove.forEach(wall => this.sceneManager.removeFromScene(wall));

    // Add new obstacle wall meshes
    for (const line of this.model.Lines) {
      const wall = createWallMesh(
        line.start.x,
        line.start.y,
        line.end.x,
        line.end.y
      );
      this.sceneManager.addToScene(wall);
    }

    this.updateView();
  }

  /**
   * Shows hit effect on a player
   */
  showHitEffect(playerId: string): void {
    const obj = this.playerMeshes.get(playerId);
    if (!obj) return;

    // Flash red
    this.setPlayerColor(obj, 0xff0000);

    // Scale up and down
    gsap.timeline()
      .to(obj.scale, {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        duration: 0.1,
        ease: 'power2.out',
      })
      .to(obj.scale, {
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
        this.setPlayerColor(obj, player.color);
      }
    }, 300);
  }

  /**
   * Hides a player's mesh (when eliminated)
   */
  hidePlayer(playerId: string): void {
    const obj = this.playerMeshes.get(playerId);
    if (!obj) return;

    this.killBodyAnims(playerId);

    // Fade out and shrink animation
    gsap.timeline()
      .to(obj.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.5,
        ease: 'power2.in',
      })
      .call(() => {
        obj.visible = false;
      });

    // Make material(s) transparent
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshBasicMaterial;
        gsap.to(material, {
          opacity: 0,
          duration: 0.5,
          onStart: () => {
            material.transparent = true;
          },
        });
      }
    });
  }

  // ------------------------------------------------------------------ //
  //  Primitive character body animation helpers
  // ------------------------------------------------------------------ //

  /** Find a named child part within a player Object3D */
  private getPlayerPart(obj: THREE.Object3D, partName: string): THREE.Object3D | undefined {
    let found: THREE.Object3D | undefined;
    obj.traverse(child => {
      if (!found && child.userData.partName === partName) found = child;
    });
    return found;
  }

  /** Kill all running body animations for a player */
  private killBodyAnims(playerId: string): void {
    const anims = this.playerBodyAnims.get(playerId) ?? [];
    anims.forEach(a => a.kill());
    this.playerBodyAnims.set(playerId, []);
    this.playerAnimState.delete(playerId);
  }

  /** Start looping idle animation (head bob) */
  private startIdleAnim(playerId: string): void {
    if (this.playerAnimState.get(playerId) === 'idle') return;

    this.killBodyAnims(playerId);
    this.playerAnimState.set(playerId, 'idle');

    const obj = this.playerMeshes.get(playerId);
    if (!obj) return;

    const anims: Array<gsap.core.Tween | gsap.core.Timeline> = [];

    // Head bob
    const head = this.getPlayerPart(obj, 'head');
    if (head) {
      const s = RenderConfig.PlayerMarkerSize;
      const HS = s / 6.4;
      const baseY = HS * 1.3;
      anims.push(gsap.fromTo(head.position,
        { y: baseY },
        {
          y: baseY + HS * AnimationConfig.IdleHeadBobAmount,
          duration: AnimationConfig.IdleCockpitPulseDuration / 2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        }
      ));
    }

    this.playerBodyAnims.set(playerId, anims);
  }

  /** Trigger walk thruster-sway animation; reverts to idle after movement completes */
  private startWalkAnim(playerId: string): void {
    if (this.playerAnimState.get(playerId) === 'walk') return;

    this.killBodyAnims(playerId);
    this.playerAnimState.set(playerId, 'walk');

    const obj = this.playerMeshes.get(playerId);
    if (!obj) return;

    const anims: Array<gsap.core.Tween | gsap.core.Timeline> = [];
    const sway = AnimationConfig.WalkThrusterSwayY;
    const half = AnimationConfig.WalkThrusterSwayHalfDuration;

    const thrusterL = this.getPlayerPart(obj, 'thrusterL');
    const thrusterR = this.getPlayerPart(obj, 'thrusterR');

    if (thrusterL) {
      anims.push(gsap.fromTo(thrusterL.position,
        { y: -sway },
        { y: sway, duration: half, ease: 'sine.inOut', yoyo: true, repeat: -1 }
      ));
    }
    if (thrusterR) {
      anims.push(gsap.fromTo(thrusterR.position,
        { y: sway },
        { y: -sway, duration: half, ease: 'sine.inOut', yoyo: true, repeat: -1 }
      ));
    }

    this.playerBodyAnims.set(playerId, anims);

    // Revert to idle after movement duration
    setTimeout(() => {
      if (this.playerAnimState.get(playerId) === 'walk') {
        this.startIdleAnim(playerId);
      }
    }, AnimationConfig.MovementDuration * 1000);
  }

  /** Trigger attack (barrel recoil + cockpit flash) animation; reverts to idle when done */
  private startAttackAnim(playerId: string): void {

    this.killBodyAnims(playerId);
    this.playerAnimState.set(playerId, 'attack');

    const obj = this.playerMeshes.get(playerId);
    if (!obj) return;

    const s = RenderConfig.PlayerMarkerSize;
    const thrust = s * AnimationConfig.AttackBarrelForwardRatio;
    const outDur = AnimationConfig.AttackBarrelOutDuration;
    const retDur = AnimationConfig.AttackBarrelReturnDuration;

    const barrel = this.getPlayerPart(obj, 'barrel');

    const tl = gsap.timeline({
      onComplete: () => this.startIdleAnim(playerId),
    });

    if (barrel) {
      tl.to(barrel.position, { y: `+=${thrust}`, duration: outDur, ease: 'power3.out' }, 0)
        .to(barrel.position, { y: `-=${thrust}`, duration: retDur, ease: 'power2.in' });
    }

    this.playerBodyAnims.set(playerId, [tl]);
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
    const obj = this.createPlayerObject(color);
    this.sceneManager.addToScene(obj);
    this.playerMeshes.set(playerId, obj);
    this.startIdleAnim(playerId);
  }
}
