import * as THREE from 'three';
import { EffectComposer, RenderPass, UnrealBloomPass } from 'three-stdlib';
import { FogConfig, PostProcessConfig, ShadowConfig } from '../../config/GameConfig';

/**
 * Configures the renderer for shadows. Call once during scene setup.
 */
export function applyShadowToRenderer(renderer: THREE.WebGLRenderer): void {
  if (ShadowConfig.Enabled) {
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  }
}

/**
 * Applies exponential fog to the scene if enabled in config.
 */
export function applyFogToScene(scene: THREE.Scene): void {
  if (FogConfig.Enabled) {
    scene.fog = new THREE.FogExp2(FogConfig.Color, FogConfig.Density);
  }
}

/**
 * Builds an EffectComposer with bloom if enabled, otherwise returns null.
 * Caller is responsible for calling `composer.setSize()` on resize.
 */
export function setupPostProcessing(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  width: number,
  height: number,
): EffectComposer | null {
  if (!PostProcessConfig.EnableBloom) return null;

  const renderPass = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(width, height),
    PostProcessConfig.BloomStrength,
    PostProcessConfig.BloomRadius,
    PostProcessConfig.BloomThreshold,
  );
  const composer = new EffectComposer(renderer);
  composer.addPass(renderPass);
  composer.addPass(bloomPass);
  return composer;
}
