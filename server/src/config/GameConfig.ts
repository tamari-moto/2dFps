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
  MoveRange: 8,
  /** must match client PlayerConfig.ViewAngle */
  ViewAngle: 60,
  /** must match client PlayerConfig.MaxViewDistance */
  MaxViewDistance: 1000,
  /** must match client PlayerConfig.DamagePerShot */
  DamagePerShot: 34,
  /** must match client PlayerConfig.ShotHitRadius */
  ShotHitRadius: 20,
} as const;

export const BSPMapConfig = {
  MaxDepth: 8,
  MinCellSize: 200,
  SplitMinRatio: 0.35,
  SplitMaxRatio: 0.65,
  RoomMinSize: 180,
  RoomMaxRatio: 0.85,
  RoomPadding: 30,
  WallThickness: 15,
  DoorWidth: 60,
  CorridorWidth: 60,
  CorridorWallThickness: 5,
  PillarSize: 60,
  PillarMinRoomArea: 40000,
  PillarMaxPerRoom: 3,
  HalfWallLength: 75,
  HalfWallThickness: 15,
} as const;
