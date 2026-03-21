import * as THREE from 'three';
import { gsap } from 'gsap';
import { AnimationConfig, RenderConfig } from '../config/GameConfig';
import type { CharacterPartNames } from './PlayerMeshFactory';

type AnimState = 'idle' | 'walk' | 'attack';

/**
 * Manages body part animations (idle / walk / attack) for all player meshes.
 * Reads part names from mesh group userData.partNames so no character-type strings
 * are hardcoded here.
 */
export class PlayerAnimator {
  private animStates:  Map<string, AnimState>                               = new Map();
  private bodyAnims:   Map<string, Array<gsap.core.Tween | gsap.core.Timeline>> = new Map();
  private playerMeshes: Map<string, THREE.Object3D>;

  constructor(playerMeshes: Map<string, THREE.Object3D>) {
    this.playerMeshes = playerMeshes;
  }

  getState(playerId: string): AnimState | undefined {
    return this.animStates.get(playerId);
  }

  killAll(playerId: string): void {
    const anims = this.bodyAnims.get(playerId) ?? [];
    anims.forEach(a => a.kill());
    this.bodyAnims.set(playerId, []);
    this.animStates.delete(playerId);
  }

  startIdle(playerId: string): void {
    if (this.animStates.get(playerId) === 'idle') return;

    this.killAll(playerId);
    this.animStates.set(playerId, 'idle');

    const obj = this.playerMeshes.get(playerId);
    if (!obj) return;

    const anims: Array<gsap.core.Tween | gsap.core.Timeline> = [];

    const parts = this.getPartNames(obj);
    const head = this.getPart(obj, parts?.head ?? 'head');
    if (head) {
      const s  = RenderConfig.PlayerMarkerSize;
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

    this.bodyAnims.set(playerId, anims);
  }

  startWalk(playerId: string): void {
    if (this.animStates.get(playerId) === 'walk') return;

    this.killAll(playerId);
    this.animStates.set(playerId, 'walk');

    const obj = this.playerMeshes.get(playerId);
    if (!obj) return;

    const parts = this.getPartNames(obj);
    const anims: Array<gsap.core.Tween | gsap.core.Timeline> = [];
    const sway = AnimationConfig.WalkArmSwayY;
    const half = AnimationConfig.WalkArmSwayHalfDuration;

    const partL = this.getPart(obj, parts?.walkPartL ?? '');
    const partR = this.getPart(obj, parts?.walkPartR ?? '');

    if (partL) {
      anims.push(gsap.fromTo(partL.position,
        { y: -sway },
        { y: sway, duration: half, ease: 'sine.inOut', yoyo: true, repeat: -1 }
      ));
    }
    if (partR) {
      anims.push(gsap.fromTo(partR.position,
        { y: sway },
        { y: -sway, duration: half, ease: 'sine.inOut', yoyo: true, repeat: -1 }
      ));
    }

    this.bodyAnims.set(playerId, anims);

    // Revert to idle after movement completes
    setTimeout(() => {
      if (this.animStates.get(playerId) === 'walk') {
        this.startIdle(playerId);
      }
    }, AnimationConfig.MovementDuration * 1000);
  }

  startAttack(playerId: string): void {
    this.killAll(playerId);
    this.animStates.set(playerId, 'attack');

    const obj = this.playerMeshes.get(playerId);
    if (!obj) return;

    const parts = this.getPartNames(obj);
    const s = RenderConfig.PlayerMarkerSize;
    const thrust = s * AnimationConfig.AttackBarrelForwardRatio;
    const outDur = AnimationConfig.AttackBarrelOutDuration;
    const retDur = AnimationConfig.AttackBarrelReturnDuration;

    const barrel = this.getPart(obj, parts?.barrel ?? 'barrel');

    const tl = gsap.timeline({
      onComplete: () => this.startIdle(playerId),
    });

    if (barrel) {
      tl.to(barrel.position, { y: `+=${thrust}`, duration: outDur, ease: 'power3.out' }, 0)
        .to(barrel.position, { y: `-=${thrust}`, duration: retDur, ease: 'power2.in' });
    }

    this.bodyAnims.set(playerId, [tl]);
  }

  // ── Private helpers ────────────────────────────────────────────────────────

  private getPart(obj: THREE.Object3D, name: string): THREE.Object3D | undefined {
    if (!name) return undefined;
    let found: THREE.Object3D | undefined;
    obj.traverse(child => {
      if (!found && child.userData.partName === name) found = child;
    });
    return found;
  }

  private getPartNames(obj: THREE.Object3D): CharacterPartNames | undefined {
    return obj.userData.partNames as CharacterPartNames | undefined;
  }
}
