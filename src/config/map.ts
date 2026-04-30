/**
 * Map configuration
 */
export const MapConfig: {
  NodesInGridSize: number;
  NodeSpacing: number;
  ObstacleMargin: number;
} = {
  /** Number of nodes in grid (map will be NodesInGridSize x NodesInGridSize) */
  NodesInGridSize: 50,

  /** Spacing between nodes in pixels */
  NodeSpacing: 30,

  /** Minimum margin from map edges for obstacles */
  ObstacleMargin: 30,
};

/**
 * BSP map generation configuration
 */
export const BSPMapConfig = {
  /** Maximum BSP recursion depth */
  MaxDepth: 8,

  /** Minimum cell size (px) before stopping subdivision */
  MinCellSize: 200,

  /** Split ratio range minimum (prevents extreme thin cells) */
  SplitMinRatio: 0.35,

  /** Split ratio range maximum */
  SplitMaxRatio: 0.65,

  /** Minimum room width/height */
  RoomMinSize: 180,

  /** Room can be at most this fraction of cell dimension */
  RoomMaxRatio: 0.85,

  /** Minimum padding from cell edge to room edge */
  RoomPadding: 30,

  /** Wall thickness for room boundaries */
  WallThickness: 15,

  /** Door opening width in room walls */
  DoorWidth: 60,

  /** Corridor width (open path between rooms) */
  CorridorWidth: 60,

  /** Corridor wall thickness */
  CorridorWallThickness: 5,

  /** Tactical pillar size (square) */
  PillarSize: 60,

  /** Minimum room area (px^2) to receive a pillar */
  PillarMinRoomArea: 40000,

  /** Maximum pillars per room */
  PillarMaxPerRoom: 3,

  /** Half-wall length (near doorways) */
  HalfWallLength: 75,

  /** Half-wall thickness */
  HalfWallThickness: 15,

  /** Corridor cover spacing (one cover object per this many px) */
  CorridorCoverSpacing: 300,

  /** Corridor cover size */
  CorridorCoverSize: 45,
} as const;

/**
 * Calculated values (derived from other config values)
 */
export const CalculatedConfig = {
  /** Total map size in pixels */
  get MapSize(): number {
    return (MapConfig.NodesInGridSize - 1) * MapConfig.NodeSpacing;
  },
} as const;
