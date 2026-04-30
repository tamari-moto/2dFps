import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';
import { CameraConfig } from '../../config/GameConfig';

/**
 * Owns camera input: OrbitControls (rotate / pan), wheel-driven FOV zoom,
 * and screen-space pan helper. Keeps these concerns out of SceneManager.
 */
export class CameraInputController {
  private orbitControls: OrbitControls;
  private boundHandleWheel: (e: WheelEvent) => void;
  private camera: THREE.PerspectiveCamera;
  private canvas: HTMLCanvasElement;

  constructor(camera: THREE.PerspectiveCamera, canvas: HTMLCanvasElement) {
    this.camera = camera;
    this.canvas = canvas;

    this.orbitControls = new OrbitControls(camera, canvas);
    this.orbitControls.target = new THREE.Vector3(0, 0, 0);
    this.orbitControls.minDistance = CameraConfig.MinDistance;
    this.orbitControls.maxDistance = CameraConfig.MaxDistance;
    this.orbitControls.enableRotate = CameraConfig.EnableRotate;
    this.orbitControls.enablePan = CameraConfig.EnablePan;
    this.orbitControls.enableZoom = false;

    this.boundHandleWheel = this.handleWheel.bind(this);
    canvas.addEventListener('wheel', this.boundHandleWheel, { passive: false });
  }

  /** Wheel-driven FOV adjustment (clamped). */
  private handleWheel(e: WheelEvent): void {
    e.preventDefault();
    const delta = e.deltaY > 0 ? CameraConfig.FOVWheelStep : -CameraConfig.FOVWheelStep;
    this.camera.fov = Math.max(
      CameraConfig.FOVMin,
      Math.min(CameraConfig.FOVMax, this.camera.fov + delta),
    );
    this.camera.updateProjectionMatrix();
  }

  /**
   * Pans the camera by screen-space pixel delta.
   * Translates both camera position and look-at target so the view shifts without rotating.
   */
  panCamera(screenDx: number, screenDy: number, sensitivity: number): void {
    const wx = screenDx * sensitivity;
    const wz = screenDy * sensitivity;
    this.camera.position.x += wx;
    this.camera.position.z += wz;
    this.orbitControls.target.x += wx;
    this.orbitControls.target.z += wz;
    this.orbitControls.update();
  }

  /** Per-frame OrbitControls update; call from the render loop. */
  update(): void {
    this.orbitControls.update();
  }

  getControls(): OrbitControls {
    return this.orbitControls;
  }

  dispose(): void {
    this.canvas.removeEventListener('wheel', this.boundHandleWheel);
    this.orbitControls.dispose();
  }
}
