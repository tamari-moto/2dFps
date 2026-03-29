/**
 * Server-side game configuration constants.
 * Values marked "must match client" must stay in sync with src/config/GameConfig.ts.
 */

export const MapConfig = {
  /** must match client MapConfig.NodesInGridSize */
  NodesInGridSize: 50,
  /** must match client MapConfig.NodeSpacing */
  NodeSpacing: 30,
} as const;

export const PlayerConfig = {
  /** must match client PlayerConfig.MoveRange */
  MoveRange: 3,
  /** must match client PlayerConfig.ViewAngle */
  ViewAngle: 60,
  /** must match client PlayerConfig.MaxViewDistance */
  MaxViewDistance: 1000,
  /** must match client PlayerConfig.DamagePerShot */
  DamagePerShot: 34,
  /** must match client PlayerConfig.ShotHitRadius */
  ShotHitRadius: 45,
} as const;
