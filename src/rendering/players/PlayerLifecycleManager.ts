import * as THREE from 'three';
import { gsap } from 'gsap';
import { Model } from '../../model/model';
import { SceneManager } from '../core/SceneManager';
import { PlayerAnimator } from './PlayerAnimator';
import { createVariantPlayer } from './PlayerMeshFactory';
import { AnimationConfig, RenderConfig, PLAYER_CONSTANTS } from '../../config/GameConfig';
import { gameToWorld } from '../utils/MeshUtils';
import { GameEventBus, GameEventType } from '../../core/GameEventBus';
import { HPBarManager } from './HPBarManager';

/**
 * Manages the lifecycle of player mesh objects:
 * creation, visibility, position/rotation/scale transforms.
 *
 * One-shot effects (hit pulse, death fade) live in PlayerEffects.
 */
export class PlayerLifecycleManager {
  readonly playerMeshes: Map<string, THREE.Object3D>;
  private readonly pathAnimatingPlayers: Set<string> = new Set();

  constructor(
    private sceneManager: SceneManager,
    private animator: PlayerAnimator,
    private model: Model,
    meshMap: Map<string, THREE.Object3D>,
    private eventBus: GameEventBus,
    private hpBarManager: HPBarManager,
  ) {
    this.playerMeshes = meshMap;
  }

  // ── Initialization ─────────────────────────────────────────────────────────

  initializePlayers(): void {
    for (const [playerId, player] of this.model.players) {
      const obj = createVariantPlayer(player.color);
      this.sceneManager.addToScene(obj);
      this.playerMeshes.set(playerId, obj);
      this.hpBarManager.attachBar(playerId, obj, player.isNPC);
      this.animator.startIdle(playerId);
    }
  }

  /** Adds a mesh for a player that joined after initialization (online mode). */
  addPlayer(playerId: string, color: number): void {
    if (this.playerMeshes.has(playerId)) return;
    const obj = createVariantPlayer(color);
    this.sceneManager.addToScene(obj);
    this.playerMeshes.set(playerId, obj);
    const player = this.model.getPlayer(playerId);
    this.hpBarManager.attachBar(playerId, obj, player?.isNPC ?? false);
    this.animator.startIdle(playerId);
  }

  isPathAnimating(playerId: string): boolean {
    return this.pathAnimatingPlayers.has(playerId);
  }

  setVisible(playerId: string, visible: boolean): void {
    const obj = this.playerMeshes.get(playerId);
    if (!obj) return;
    obj.visible = visible;
  }

  // ── Transform update ───────────────────────────────────────────────────────

  /**
   * Applies position (animated), rotation, and scale to a player mesh.
   * Returns true if the player is moving (so the caller can trigger camera follow).
   *
   * Angle convention (game space, atan2(dy, dx) * 180/π):
   *   0° = +X (right), 90° = +Y, counter-clockwise positive.
   * Mapping to Three.js rotation.y:
   *   game(x, y) → world(x, 0, y); model forward is local +Z.
   *   To face game angle θ, rotation.y = atan2(cosθ, sinθ) = π/2 − θ_rad
   *   = −θ_rad + PlayerFacingOffset (PlayerFacingOffset = π/2).
   */
  /**
   * Animates a player mesh step-by-step through the given node ID path.
   * Each step takes AnimationConfig.MovementDuration seconds.
   * The active player's camera follows each intermediate node via the onStep callback.
   */
  animateAlongPath(playerId: string, nodeIds: number[], finalAngle: number): void {
    if (nodeIds.length < 2) return;
    const obj = this.playerMeshes.get(playerId);
    if (!obj) return;

    const dur = AnimationConfig.MovementDuration;
    this.pathAnimatingPlayers.add(playerId);

    const tl = gsap.timeline({
      onComplete: () => {
        this.pathAnimatingPlayers.delete(playerId);
        if (this.animator.getState(playerId) === 'walk') {
          this.animator.startIdle(playerId);
        }
        this.eventBus.emit(GameEventType.VIS_PATH_ANIM_COMPLETE, { playerId });
      },
    });

    this.animator.startWalk(playerId);

    for (let i = 1; i < nodeIds.length; i++) {
      const node = this.model.nodeList[nodeIds[i]];
      if (!node) continue;

      const worldTarget = gameToWorld(node.x, node.y, RenderConfig.PlayerZOffset);
      tl.to(obj.position, {
        x: worldTarget.x,
        y: worldTarget.y,
        z: worldTarget.z,
        duration: dur,
        ease: 'none',
      });
    }

    // Turn to face shot target simultaneously with movement
    tl.to(obj.rotation, {
      y: -(finalAngle * Math.PI / 180) + RenderConfig.PlayerFacingOffset,
      duration: dur,
      ease: 'power2.out',
    }, '<');
  }

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
    obj.rotation.y = -(angle * Math.PI / 180) + RenderConfig.PlayerFacingOffset;
    obj.rotation.z = 0;

    const scale = isActive ? PLAYER_CONSTANTS.ACTIVE_SCALE : PLAYER_CONSTANTS.NORMAL_SCALE;
    obj.scale.set(scale, scale, scale);

    return moving;
  }
}
