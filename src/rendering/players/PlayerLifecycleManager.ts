import * as THREE from 'three';
import { gsap } from 'gsap';
import { Model } from '../../model/model';
import { SceneManager } from '../core/SceneManager';
import { PlayerAnimator } from './PlayerAnimator';
import { createVariantPlayer } from './PlayerMeshFactory';
import { AnimationConfig, RenderConfig, PLAYER_CONSTANTS } from '../../config/GameConfig';
import { gameToWorld } from '../utils/MeshUtils';

/**
 * Manages the lifecycle of player mesh objects:
 * creation, visibility, position/rotation/scale transforms.
 *
 * One-shot effects (hit pulse, death fade) live in PlayerEffects.
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
   * Animates a player along a multi-node BFS path using a GSAP timeline.
   * Each segment faces toward the next waypoint; the final segment uses finalAngle.
   * Falls back to applyTransform when path has fewer than 2 nodes.
   */
  applyPathTransform(
    playerId: string,
    pathNodeIds: number[],
    finalAngle: number,
    isActive: boolean,
  ): boolean {
    const obj = this.playerMeshes.get(playerId);
    if (!obj) return false;

    const waypoints = pathNodeIds.map(id => this.model.nodeList[id]).filter(Boolean);
    if (waypoints.length < 2) {
      const dest = waypoints[waypoints.length - 1];
      if (!dest) return false;
      return this.applyTransform(playerId, dest.x, dest.y, finalAngle, isActive);
    }

    const segmentDuration = AnimationConfig.MovementDuration / (waypoints.length - 1);
    this.animator.killAll(playerId);
    this.animator.startWalk(playerId);

    const tl = gsap.timeline({
      onComplete: () => { this.animator.startIdle(playerId); },
    });

    for (let i = 1; i < waypoints.length; i++) {
      const node = waypoints[i];
      const worldTarget = gameToWorld(node.x, node.y, RenderConfig.PlayerZOffset);
      const segAngle = i < waypoints.length - 1
        ? this.model.getAngleBetweenNodes(waypoints[i - 1], node)
        : finalAngle;
      const rotY = -(segAngle * Math.PI / 180) + RenderConfig.PlayerFacingOffset;
      const offset = (i - 1) * segmentDuration;
      tl.to(obj.position, { x: worldTarget.x, y: worldTarget.y, z: worldTarget.z, duration: segmentDuration }, offset);
      tl.to(obj.rotation, { y: rotY, duration: segmentDuration * 0.25 }, offset);
    }

    const scale = isActive ? PLAYER_CONSTANTS.ACTIVE_SCALE : PLAYER_CONSTANTS.NORMAL_SCALE;
    obj.scale.set(scale, scale, scale);

    return true;
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
