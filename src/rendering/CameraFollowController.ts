import { gsap } from 'gsap';
import { CameraConfig } from '../config/GameConfig';
import type { SceneManager } from './SceneManager';

/**
 * Manages camera follow behaviour: smooth pan animations and instant snap.
 */
export class CameraFollowController {
  private followTimeline: gsap.core.Timeline | null = null;

  constructor(private sceneManager: SceneManager) {}

  /** Compute XY camera offset from player angle (degrees) so camera sits behind the player. */
  private calcOffset(angle: number): { ox: number; oy: number } {
    const rad = angle * Math.PI / 180;
    return {
      ox: -Math.cos(rad) * CameraConfig.BackDistance,
      oy: -Math.sin(rad) * CameraConfig.BackDistance,
    };
  }

  /** Immediately position the camera behind (x, y) facing angle, with no animation. */
  snapTo(x: number, y: number, angle: number): void {
    const camera = this.sceneManager.getCamera();
    const { ox, oy } = this.calcOffset(angle);
    camera.up.set(0, 0, 1);
    camera.position.set(x + ox, y + oy, CameraConfig.OffsetZ);
    camera.lookAt(x, y, 0);
  }

  /**
   * Smoothly pan the camera behind (x, y) facing angle.
   * Animates camera.position and calls lookAt each frame via onUpdate.
   */
  panTo(x: number, y: number, angle: number, duration: number, ease: string): void {
    if (this.followTimeline) {
      this.followTimeline.kill();
    }

    const camera = this.sceneManager.getCamera();
    camera.up.set(0, 0, 1);
    const { ox, oy } = this.calcOffset(angle);

    const tl = gsap.timeline({ onComplete: () => { this.followTimeline = null; } });
    tl.to(camera.position, {
      x: x + ox,
      y: y + oy,
      z: CameraConfig.OffsetZ,
      duration,
      ease,
      onUpdate: () => camera.lookAt(x, y, 0),
    }, 0);

    this.followTimeline = tl;
  }
}
