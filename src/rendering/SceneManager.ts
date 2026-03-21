import * as THREE from 'three';
import { EffectComposer, OrbitControls, RenderPass, UnrealBloomPass } from 'three-stdlib';
import { Vector3 } from 'three';
import { CameraConfig, LightingConfig, MapConfig, PostProcessConfig, RenderConfig } from '../config/GameConfig';

/**
 * Manages Three.js scene, camera, renderer, and controls setup
 * Responsible for initialization and providing access to core Three.js objects
 */
export class SceneManager {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private orbitControls: OrbitControls;
  private composer: EffectComposer | null = null;
  private boundHandleResize: () => void;

  constructor(canvas: HTMLCanvasElement) {
    // Setup renderer
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(RenderConfig.BackgroundColor);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;

    // Setup scene
    this.scene = new THREE.Scene();

    // Setup camera
    this.camera = new THREE.PerspectiveCamera(CameraConfig.FOV, 1.0);
    this.camera.aspect = width / height;
    this.camera.position.set(
      CameraConfig.OffsetX,
      CameraConfig.OffsetY,
      CameraConfig.OffsetZ,
    );
    this.camera.updateProjectionMatrix();

    // Setup controls
    this.orbitControls = new OrbitControls(this.camera, canvas);
    this.orbitControls.target = new Vector3(0, 0, 0);
    this.orbitControls.minDistance = CameraConfig.MinDistance;
    this.orbitControls.maxDistance = CameraConfig.MaxDistance;
    this.orbitControls.enableRotate = CameraConfig.EnableRotate;
    this.orbitControls.enablePan = CameraConfig.EnablePan;

    // Add background grid
    this.createBackgroundGrid();

    // Add lights
    this.addLighting();

    // Setup post-processing (bloom)
    if (PostProcessConfig.EnableBloom) {
      const renderPass = new RenderPass(this.scene, this.camera);
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(width, height),
        PostProcessConfig.BloomStrength,
        PostProcessConfig.BloomRadius,
        PostProcessConfig.BloomThreshold
      );
      this.composer = new EffectComposer(this.renderer);
      this.composer.addPass(renderPass);
      this.composer.addPass(bloomPass);
    }

    // Handle window resize - store bound function to enable proper cleanup
    this.boundHandleResize = this.handleResize.bind(this);
    window.addEventListener('resize', this.boundHandleResize);
  }

  /**
   * Adds ambient, hemisphere, directional and rim lights to the scene
   */
  private addLighting(): void {
    const ambient = new THREE.AmbientLight(0xffffff, LightingConfig.AmbientIntensity);
    this.scene.add(ambient);

    const hemi = new THREE.HemisphereLight(
      LightingConfig.HemisphereSkyColor,
      LightingConfig.HemisphereGroundColor,
      LightingConfig.HemisphereIntensity
    );
    this.scene.add(hemi);

    const dir = new THREE.DirectionalLight(0xffffff, LightingConfig.DirectionalIntensity);
    dir.position.set(LightingConfig.DirectionalX, LightingConfig.DirectionalY, LightingConfig.DirectionalZ);
    this.scene.add(dir);

    const rim = new THREE.DirectionalLight(LightingConfig.RimLightColor, LightingConfig.RimLightIntensity);
    rim.position.set(LightingConfig.RimLightX, LightingConfig.RimLightY, LightingConfig.RimLightZ);
    this.scene.add(rim);
  }

  /**
   * Creates a subtle background grid aligned to node positions
   */
  private createBackgroundGrid(): void {
    const size = MapConfig.NodesInGridSize;
    const spacing = MapConfig.NodeSpacing;
    const total = (size - 1) * spacing;

    const material = new THREE.LineBasicMaterial({
      color: RenderConfig.GridLineColor,
      transparent: true,
      opacity: RenderConfig.GridLineOpacity,
    });

    for (let i = 0; i < size; i++) {
      const x = i * spacing;
      const vPts = [new THREE.Vector3(x, 0, -0.5), new THREE.Vector3(x, total, -0.5)];
      const vLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(vPts), material);
      vLine.userData['isGrid'] = true;
      this.scene.add(vLine);
    }

    for (let i = 0; i < size; i++) {
      const y = i * spacing;
      const hPts = [new THREE.Vector3(0, y, -0.5), new THREE.Vector3(total, y, -0.5)];
      const hLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(hPts), material);
      hLine.userData['isGrid'] = true;
      this.scene.add(hLine);
    }
  }

  /**
   * Handles window resize events
   */
  private handleResize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.composer?.setSize(width, height);
  }

  /**
   * Updates controls (should be called in render loop)
   */
  updateControls(): void {
    this.orbitControls.update();
  }

  /**
   * Renders the scene (via EffectComposer if bloom is enabled)
   */
  render(): void {
    if (this.composer) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  /**
   * Adds an object to the scene
   */
  addToScene(object: THREE.Object3D): void {
    this.scene.add(object);
  }

  /**
   * Removes an object from the scene
   */
  removeFromScene(object: THREE.Object3D): void {
    this.scene.remove(object);
  }

  /**
   * Gets the scene
   */
  getScene(): THREE.Scene {
    return this.scene;
  }

  /**
   * Gets the camera
   */
  getCamera(): THREE.PerspectiveCamera {
    return this.camera;
  }

  /**
   * Gets the renderer
   */
  getRenderer(): THREE.WebGLRenderer {
    return this.renderer;
  }

  /**
   * Gets the orbit controls
   */
  getControls(): OrbitControls {
    return this.orbitControls;
  }

  /**
   * Toggles background grid visibility
   */
  toggleGrid(): void {
    this.scene.traverse((object) => {
      if (object instanceof THREE.Line && object.userData['isGrid']) {
        object.visible = !object.visible;
      }
    });
  }

  /**
   * Cleans up resources
   */
  dispose(): void {
    window.removeEventListener('resize', this.boundHandleResize);
    this.orbitControls.dispose();
    this.renderer.dispose();
  }
}
