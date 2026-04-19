import * as THREE from 'three';
import { gsap } from 'gsap';
import { Model } from '../model/model';
import { SceneManager } from './SceneManager';
import { PlayerAnimator } from './PlayerAnimator';
import { createVariantPlayer } from './PlayerMeshFactory';
import { AnimationConfig, RenderConfig } from '../config/GameConfig';
import { PLAYER_CONSTANTS } from '../config/GameConfig';
import { gameToWorld } from './MeshUtils';

/**
 * Manages the lifecycle of player mesh objects:
 * creation, color, hit/death effects, position/rotation/scale transforms.
 */
export class PlayerLifecycleManager {
  readonly playerMeshes: Map<string, THREE.Object3D>;

  constructor(
    private sceneManager: SceneManager,
    private animator: PlayerAnimator,
    private model: Model,
    meshMap: Map<string, THREE.Object3D>,
  ) {
    this.playerMeshes = meshMap;
  }

  // ── Initialization ─────────────────────────────────────────────────────────

  initializePlayers(): void {
    for (const [playerId, player] of this.model.players) {
      const obj = createVariantPlayer(player.color);
      this.sceneManager.addToScene(obj);
      this.playerMeshes.set(playerId, obj);
      this.animator.startIdle(playerId);
    }
  }

  /** Adds a mesh for a player that joined after initialization (online mode). */
  addPlayer(playerId: string, color: number): void {
    if (this.playerMeshes.has(playerId)) return;
    const obj = createVariantPlayer(color);
    this.sceneManager.addToScene(obj);
    this.playerMeshes.set(playerId, obj);
    this.animator.startIdle(playerId);
  }

  // ── Visual effects ─────────────────────────────────────────────────────────

  showHitEffect(playerId: string): void {
    const obj = this.playerMeshes.get(playerId);
    if (!obj) return;

    this.setPlayerColor(obj, 0xff0000);

    gsap.timeline()
      .to(obj.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 0.1, ease: 'power2.out' })
      .to(obj.scale, { x: 1.0, y: 1.0, z: 1.0, duration: 0.2, ease: 'elastic.out(1, 0.3)' });

    setTimeout(() => {
      const player = this.model.getPlayer(playerId);
      if (player) this.setPlayerColor(obj, player.color);
    }, 300);
  }

  setVisible(playerId: string, visible: boolean): void {
    const obj = this.playerMeshes.get(playerId);
    if (!obj) return;
    obj.visible = visible;
  }

  hidePlayer(playerId: string): void {
    const obj = this.playerMeshes.get(playerId);
    if (!obj) return;

    this.animator.killAll(playerId);

    gsap.timeline()
      .to(obj.scale, { x: 0, y: 0, z: 0, duration: 0.5, ease: 'power2.in' })
      .call(() => { obj.visible = false; });

    obj.traverse(child => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshBasicMaterial;
        gsap.to(material, {
          opacity: 0,
          duration: 0.5,
          onStart: () => { material.transparent = true; },
        });
      }
    });
  }

  // ── Color management ───────────────────────────────────────────────────────

  setPlayerColor(obj: THREE.Object3D, color: number): void {
    obj.traverse(child => {
      if (child instanceof THREE.Mesh && !child.userData.fixedColor) {
        const mat = child.material as THREE.MeshStandardMaterial;
        if ('color' in mat) mat.color.setHex(color);
        if ('emissive' in mat && mat.emissiveIntensity > 0) {
          mat.emissive.setHex(color);
        }
      }
    });
  }

  // ── Transform update ───────────────────────────────────────────────────────

  /**
   * Applies position (animated), rotation, and scale to a player mesh.
   * Returns true if the player is moving (so the caller can trigger camera follow).
   */
  applyTransform(
    playerId: string,
    targetX: number,
    targetY: number,
    angle: number,
    isActive: boolean,
  ): boolean {
    const obj = this.playerMeshes.get(playerId);
    if (!obj) return false;

    const worldTarget = gameToWorld(targetX, targetY, RenderConfig.PlayerZOffset);
    const dx = obj.position.x - worldTarget.x;
    const dz = obj.position.z - worldTarget.z;
    const moving = Math.sqrt(dx * dx + dz * dz) > 0.5;

    if (moving && this.animator.getState(playerId) === 'idle') {
      this.animator.startWalk(playerId);
    }

    gsap.to(obj.position, {
      x: worldTarget.x,
      y: worldTarget.y,
      z: worldTarget.z,
      duration: AnimationConfig.MovementDuration,
    });

    obj.rotation.x = 0;
    obj.rotation.y = -((angle * Math.PI / 180) + RenderConfig.PlayerFacingOffset);
    obj.rotation.z = 0;

    const scale = isActive ? PLAYER_CONSTANTS.ACTIVE_SCALE : PLAYER_CONSTANTS.NORMAL_SCALE;
    obj.scale.set(scale, scale, scale);

    return moving;
  }
}
