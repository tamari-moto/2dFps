import { gsap } from 'gsap';
import { CameraConfig } from '../config/GameConfig';
import type { SceneManager } from './SceneManager';

/**
 * Manages camera follow behaviour: smooth pan animations and instant snap.
 */
export class CameraFollowController {
  private followTween: gsap.core.Tween | null = null;

  constructor(private sceneManager: SceneManager) {}

  /** Immediately position the camera over (x, y) with no animation. */
  snapTo(x: number, y: number): void {
    const controls = this.sceneManager.getControls();
    const camera   = this.sceneManager.getCamera();
    controls.target.set(x, y, 0);
    camera.position.set(
      x + CameraConfig.OffsetX,
      y + CameraConfig.OffsetY,
      CameraConfig.OffsetZ,
    );
    controls.update();
  }

  /**
   * Smoothly pan the camera to (x, y).
   * Animates both OrbitControls target and camera.position together
   * to maintain the 3D oblique angle.
   */
  panTo(x: number, y: number, duration: number, ease: string): void {
    if (this.followTween) {
      this.followTween.kill();
    }

    const controls = this.sceneManager.getControls();
    const camera   = this.sceneManager.getCamera();
    const target   = controls.target;

    const offsetX = camera.position.x - target.x;
    const offsetY = camera.position.y - target.y;
    const offsetZ = camera.position.z - target.z;

    const tl = gsap.timeline({ onComplete: () => { this.followTween = null; } });
    tl.to(target, { x, y, duration, ease }, 0);
    tl.to(camera.position, {
      x: x + offsetX,
      y: y + offsetY,
      z: offsetZ + target.z,
      duration,
      ease,
    }, 0);

    this.followTween = tl.getChildren()[0] as gsap.core.Tween;
  }
}
