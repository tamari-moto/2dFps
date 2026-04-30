import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';
import { CameraConfig } from '../../config/GameConfig';
import type { OrthoMapController } from './OrthoMapController';

/**
 * Owns camera input: OrbitControls (rotate / pan), wheel-driven FOV zoom,
 * and screen-space pan helper. Keeps these concerns out of SceneManager.
 */
export class CameraInputController {
  private orbitControls: OrbitControls;
  private boundHandleWheel: (e: WheelEvent) => void;
  private camera: THREE.PerspectiveCamera;
  private canvas: HTMLCanvasElement;
  private orthoController: OrthoMapController | null = null;
  private orthoActive = false;

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

  setOrthoController(ctrl: OrthoMapController): void {
    this.orthoController = ctrl;
  }

  setOrthoActive(active: boolean): void {
    this.orthoActive = active;
  }

  /** Wheel-driven zoom: Ortho モード時は halfSize 調整、Perspective 時は FOV 調整。 */
  private handleWheel(e: WheelEvent): void {
    e.preventDefault();
    if (this.orthoActive && this.orthoController) {
      const delta = e.deltaY > 0 ? CameraConfig.OrthoWheelStep : -CameraConfig.OrthoWheelStep;
      this.orthoController.zoom(delta);
    } else {
      const delta = e.deltaY > 0 ? CameraConfig.FOVWheelStep : -CameraConfig.FOVWheelStep;
      this.camera.fov = Math.max(
        CameraConfig.FOVMin,
        Math.min(CameraConfig.FOVMax, this.camera.fov + delta),
      );
      this.camera.updateProjectionMatrix();
    }
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
