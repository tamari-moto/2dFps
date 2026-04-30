import { gsap } from 'gsap';
import { CameraConfig } from '../../config/GameConfig';
import type { SceneManager } from '../core/SceneManager';
import { gameToWorld } from '../utils/MeshUtils';

/**
 * Manages camera follow behaviour: smooth pan animations and instant snap.
 */
export class CameraFollowController {
  private followTimeline: gsap.core.Timeline | null = null;

  constructor(private sceneManager: SceneManager) {}

  /** Compute XZ camera offset from player angle (degrees) so camera sits behind the player. */
  private calcOffset(angle: number): { ox: number; oz: number } {
    const rad = angle * Math.PI / 180;
    return {
      ox: -Math.cos(rad) * CameraConfig.BackDistance,
      oz: -Math.sin(rad) * CameraConfig.BackDistance,
    };
  }

  /** Immediately position the camera behind (gx, gy) facing angle, with no animation. */
  snapTo(gx: number, gy: number, angle: number): void {
    const camera = this.sceneManager.getCamera();
    const { ox, oz } = this.calcOffset(angle);
    const target = gameToWorld(gx, gy);
    camera.up.set(0, 1, 0);
    camera.position.set(target.x + ox, CameraConfig.OffsetZ, target.z + oz);
    camera.lookAt(target);
  }

  /**
   * Smoothly pan the camera behind (gx, gy) facing angle.
   * Animates camera.position and calls lookAt each frame via onUpdate.
   */
  panTo(gx: number, gy: number, angle: number, duration: number, ease: string): void {
    if (this.followTimeline) {
      this.followTimeline.kill();
    }

    const camera = this.sceneManager.getCamera();
    camera.up.set(0, 1, 0);
    const { ox, oz } = this.calcOffset(angle);
    const target = gameToWorld(gx, gy);

    const tl = gsap.timeline({ onComplete: () => { this.followTimeline = null; } });
    tl.to(camera.position, {
      x: target.x + ox,
      y: CameraConfig.OffsetZ,
      z: target.z + oz,
      duration,
      ease,
      onUpdate: () => camera.lookAt(target),
    }, 0);

    this.followTimeline = tl;
  }
}
