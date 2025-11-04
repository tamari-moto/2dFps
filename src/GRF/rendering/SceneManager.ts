import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';
import { Vector3 } from 'three';
import { CameraConfig } from '../../config/GameConfig';

/**
 * Manages Three.js scene, camera, renderer, and controls setup
 * Responsible for initialization and providing access to core Three.js objects
 */
export class SceneManager {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private orbitControls: OrbitControls;
  private boundHandleResize: () => void;

  constructor(canvas: HTMLCanvasElement) {
    // Setup renderer
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x000000);

    // Setup scene
    this.scene = new THREE.Scene();

    // Setup camera
    this.camera = new THREE.PerspectiveCamera(CameraConfig.FOV, 1.0);
    this.camera.aspect = width / height;
    this.camera.position.set(0, 0, CameraConfig.InitialZPosition);
    this.camera.updateProjectionMatrix();

    // Setup controls
    this.orbitControls = new OrbitControls(this.camera, canvas);
    this.orbitControls.target = new Vector3(0, 0, 0);
    this.orbitControls.minDistance = CameraConfig.MinDistance;
    this.orbitControls.maxDistance = CameraConfig.MaxDistance;
    this.orbitControls.enableRotate = CameraConfig.EnableRotate;

    // Handle window resize - store bound function to enable proper cleanup
    this.boundHandleResize = this.handleResize.bind(this);
    window.addEventListener('resize', this.boundHandleResize);
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
  }

  /**
   * Updates controls (should be called in render loop)
   */
  updateControls(): void {
    this.orbitControls.update();
  }

  /**
   * Renders the scene
   */
  render(): void {
    this.renderer.render(this.scene, this.camera);
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
   * Cleans up resources
   */
  dispose(): void {
    window.removeEventListener('resize', this.boundHandleResize);
    this.orbitControls.dispose();
    this.renderer.dispose();
  }
}
