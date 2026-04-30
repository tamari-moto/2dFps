import * as THREE from 'three';
import { CameraConfig, CalculatedConfig } from '../../config/GameConfig';

/**
 * MAP全体を固定俯瞰表示する OrthographicCamera コントローラー。
 * O キーで通常の PerspectiveCamera と切り替える。
 * ホイールで halfSize を変更してズームイン/アウトできる。
 */
export class OrthoMapController {
  private camera: THREE.OrthographicCamera;
  private enabled = false;

  constructor() {
    const mapSize = CalculatedConfig.MapSize;
    const cx = mapSize / 2;
    const aspect = window.innerWidth / window.innerHeight;
    const h = CameraConfig.OrthoViewHalfSize;
    this.camera = new THREE.OrthographicCamera(
      -h * aspect, h * aspect,
       h, -h,
      CameraConfig.MinDistance,
      CameraConfig.MaxDistance,
    );
    this.camera.position.set(cx, CameraConfig.OffsetZ, cx);
    // Three.js XZ平面を真上から見るとき、up=(0,1,0) + lookAt(真下) はジンバルロックする
    // → up を -Z にして回避
    this.camera.up.set(0, 0, -1);
    this.camera.lookAt(cx, 0, cx);
    this.camera.updateProjectionMatrix();
  }

  getCamera(): THREE.OrthographicCamera {
    return this.camera;
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  enable(): void {
    this.enabled = true;
  }

  disable(): void {
    this.enabled = false;
  }

  handleResize(): void {
    const aspect = window.innerWidth / window.innerHeight;
    const h = this.camera.top;
    this.camera.left  = -h * aspect;
    this.camera.right =  h * aspect;
    this.camera.updateProjectionMatrix();
  }

  zoom(delta: number): void {
    const newH = Math.max(
      CameraConfig.OrthoViewHalfSizeMin,
      Math.min(CameraConfig.OrthoViewHalfSizeMax, this.camera.top + delta),
    );
    const aspect = this.camera.right / this.camera.top;
    this.camera.left   = -newH * aspect;
    this.camera.right  =  newH * aspect;
    this.camera.top    =  newH;
    this.camera.bottom = -newH;
    this.camera.updateProjectionMatrix();
  }
}
