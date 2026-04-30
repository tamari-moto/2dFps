/**
 * Game configuration barrel.
 * 全シンボルを per-component ファイルから再エクスポートする。
 * インポート側は `from '../config/GameConfig'` のままで動作する。
 */
export { MapConfig, BSPMapConfig, CalculatedConfig } from './map';
export {
  PlayerConfig,
  PLAYER_CONSTANTS,
  ENTITY_IDS,
  HUMAN_PLAYER_ID,
  LOCAL_PLAYER_COUNT,
  createPlayerId,
} from './player';
export { AIConfig } from './ai';
export { CameraConfig, FPSConfig } from './camera';
export { KEYBOARD_KEYS } from './input';
export { AnimationConfig, TextBurstEffectConfig } from './animation';
export { RenderConfig, NodeConfig, NodeVisualConfig, WallConfig } from './rendering';
export { LightingConfig, FogConfig, ShadowConfig, PostProcessConfig } from './scene';
export { applyServerConfig } from './server-sync';
