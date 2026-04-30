import * as THREE from 'three';
import { gsap } from 'gsap';
import { Model } from '../../model/model';
import { RenderConfig } from '../../config/GameConfig';
import { PlayerAnimator } from './PlayerAnimator';

/**
 * One-shot visual effects on player meshes (hit pulse, death fade).
 * Lifecycle (creation / visibility / transform) lives in PlayerLifecycleManager;
 * keep these effects separate so each module has a single responsibility.
 */
export class PlayerEffects {
  constructor(
    private playerMeshes: Map<string, THREE.Object3D>,
    private animator: PlayerAnimator,
    private model: Model,
  ) {}

  /** Pulse the mesh and flash hit color, then revert to player color. */
  showHitEffect(playerId: string): void {
    const obj = this.playerMeshes.get(playerId);
    if (!obj) return;

    setMeshColor(obj, RenderConfig.PlayerHitColor);

    gsap.timeline()
      .to(obj.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 0.1, ease: 'power2.out' })
      .to(obj.scale, { x: 1.0, y: 1.0, z: 1.0, duration: 0.2, ease: 'elastic.out(1, 0.3)' });

    setTimeout(() => {
      const player = this.model.getPlayer(playerId);
      if (player) setMeshColor(obj, player.color);
    }, 300);
  }

  /** Scale to zero + fade material opacity, then hide. */
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
}

function setMeshColor(obj: THREE.Object3D, color: number): void {
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
