import * as THREE from 'three';
import { EffectComposer } from 'three-stdlib';
import { CameraConfig, MapConfig, RenderConfig } from '../../config/GameConfig';
import { LightingRig } from './LightingRig';
import { applyFogToScene, applyShadowToRenderer, setupPostProcessing } from './PostProcessing';
import { BackgroundGrid } from './BackgroundGrid';

/**
 * Owns the Three.js renderer / scene / camera and the per-frame render loop.
 * Scene-decoration concerns (lighting, post-processing, fog, background grid)
 * are delegated to dedicated modules in `./` core. Camera input (orbit /
 * wheel / pan) lives in `cameras/CameraInputController`.
 */
export class SceneManager {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private composer: EffectComposer | null;
  private backgroundGrid: BackgroundGrid;
  private boundHandleResize: () => void;
  private tickCallbacks: Set<() => void> = new Set();

  constructor(canvas: HTMLCanvasElement) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(RenderConfig.BackgroundColor);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    applyShadowToRenderer(this.renderer);

    this.scene = new THREE.Scene();
    applyFogToScene(this.scene);

    this.camera = new THREE.PerspectiveCamera(CameraConfig.FOV, 1.0);
    this.camera.aspect = width / height;
    this.camera.position.set(
      -CameraConfig.BackDistance,
      CameraConfig.OffsetZ,
      0,
    );
    this.camera.up.set(0, 1, 0);
    this.camera.updateProjectionMatrix();

    this.backgroundGrid = new BackgroundGrid(this.scene);

    // Origin axes helper (red=+X, green=+Y, blue=+Z) for debugging
    this.scene.add(new THREE.AxesHelper(MapConfig.NodeSpacing * 3));

    new LightingRig(this.scene, (cb) => this.addTickCallback(cb));

    this.composer = setupPostProcessing(this.renderer, this.scene, this.camera, width, height);

    this.boundHandleResize = this.handleResize.bind(this);
    window.addEventListener('resize', this.boundHandleResize);
  }

  // ── Frame loop ────────────────────────────────────────────────────────────

  addTickCallback(cb: () => void): void {
    this.tickCallbacks.add(cb);
  }

  removeTickCallback(cb: () => void): void {
    this.tickCallbacks.delete(cb);
  }

  render(): void {
    for (const cb of this.tickCallbacks) cb();
    if (this.composer) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  private handleResize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.composer?.setSize(width, height);
  }

  // ── Scene access ──────────────────────────────────────────────────────────

  addToScene(object: THREE.Object3D): void {
    this.scene.add(object);
  }

  removeFromScene(object: THREE.Object3D): void {
    this.scene.remove(object);
  }

  getScene(): THREE.Scene {
    return this.scene;
  }

  getCamera(): THREE.PerspectiveCamera {
    return this.camera;
  }

  getRenderer(): THREE.WebGLRenderer {
    return this.renderer;
  }

  /** Toggles the background grid visibility. */
  toggleGrid(): void {
    this.backgroundGrid.toggle();
  }

  dispose(): void {
    window.removeEventListener('resize', this.boundHandleResize);
    this.renderer.dispose();
  }
}
