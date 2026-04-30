import * as THREE from 'three';
import { LightingConfig, ShadowConfig } from '../../config/GameConfig';

/**
 * Adds ambient, hemisphere, and directional lights (with optional shadows
 * and orbit animation) to the given scene. The directional light orbits the
 * origin via a tick callback registered through `registerTick`.
 */
export class LightingRig {
  constructor(scene: THREE.Scene, registerTick: (cb: () => void) => void) {
    const ambient = new THREE.AmbientLight(0xffffff, LightingConfig.AmbientIntensity);
    scene.add(ambient);

    const hemi = new THREE.HemisphereLight(
      LightingConfig.HemisphereSkyColor,
      LightingConfig.HemisphereGroundColor,
      LightingConfig.HemisphereIntensity,
    );
    scene.add(hemi);

    const dir = new THREE.DirectionalLight(0xffffff, LightingConfig.DirectionalIntensity);
    dir.position.set(LightingConfig.DirectionalOrbitRadius, LightingConfig.DirectionalY, 0);
    if (ShadowConfig.Enabled) {
      dir.castShadow = true;
      dir.shadow.mapSize.set(ShadowConfig.MapSize, ShadowConfig.MapSize);
      dir.shadow.camera.near = ShadowConfig.CameraNear;
      dir.shadow.camera.far = ShadowConfig.CameraFar;
      dir.shadow.camera.left = -ShadowConfig.CameraSize;
      dir.shadow.camera.right = ShadowConfig.CameraSize;
      dir.shadow.camera.top = ShadowConfig.CameraSize;
      dir.shadow.camera.bottom = -ShadowConfig.CameraSize;
    }
    scene.add(dir);

    let elapsed = 0;
    let lastTime = performance.now();
    registerTick(() => {
      const now = performance.now();
      elapsed += (now - lastTime) * 0.001;
      lastTime = now;
      const r = LightingConfig.DirectionalOrbitRadius;
      const angle = elapsed * LightingConfig.DirectionalOrbitSpeed;
      dir.position.x = r * Math.cos(angle);
      dir.position.z = r * Math.sin(angle);
    });
  }
}
