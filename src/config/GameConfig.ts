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
  HUMAN_PLAYER_IDS,
  LOCAL_PLAYER_COUNT,
  LOCAL_NPC_COUNT,
  LOCAL_TEAM_COUNT,
  LOCAL_NPC_PER_TEAM,
  createPlayerId,
} from './player';
export { AIConfig } from './ai';
export { CameraConfig, FPSConfig } from './camera';
export { KEYBOARD_KEYS } from './input';
export { AnimationConfig, TextBurstEffectConfig } from './animation';
export { RenderConfig, NodeConfig, NodeVisualConfig, WallConfig, HPBarConfig } from './rendering';
export { LightingConfig, FogConfig, ShadowConfig, PostProcessConfig } from './scene';
export { applyServerConfig } from './server-sync';
export type { TeamId } from './team';
export { TeamConfig, TEAM_COLORS } from './team';
