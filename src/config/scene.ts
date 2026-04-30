/**
 * Lighting configuration
 */
export const LightingConfig = {
  /** Ambient light intensity */
  AmbientIntensity: 0.8,
  /** Hemisphere light sky color */
  HemisphereSkyColor: 0x1a1510,
  /** Hemisphere light ground color */
  HemisphereGroundColor: 0x0d0b08,
  /** Hemisphere light intensity */
  HemisphereIntensity: 1.2,
  /** Main directional light intensity */
  DirectionalIntensity: 2.0,
  /** Main directional light Y height (fixed during orbit) */
  DirectionalY: 20,
  /** Orbit radius of directional light in XZ plane */
  DirectionalOrbitRadius: 10,
  /** Orbit speed of directional light (radians per second) */
  DirectionalOrbitSpeed: 0.3,
} as const;

/**
 * Fog configuration
 */
export const FogConfig = {
  /** Enable exponential fog */
  Enabled: true,
  /** Fog color (matches background) */
  Color: 0x0a0a0a,
  /** Fog density (higher = thicker) */
  Density: 0.0008,
} as const;

/**
 * Shadow configuration
 */
export const ShadowConfig = {
  /** Enable shadow maps */
  Enabled: true,
  /** Shadow map size (higher = sharper, more expensive) */
  MapSize: 2048,
  /** Shadow camera near clip */
  CameraNear: 1,
  /** Shadow camera far clip */
  CameraFar: 2000,
  /** Shadow camera orthographic half-size */
  CameraSize: 800,
} as const;

/**
 * Post-processing configuration
 */
export const PostProcessConfig = {
  /** Enable bloom post-processing */
  EnableBloom: true,
  /** Bloom effect strength */
  BloomStrength: 0.8,
  /** Bloom effect radius */
  BloomRadius: 0.5,
  /** Bloom threshold (only pixels brighter than this bloom) */
  BloomThreshold: 0.2,
} as const;
