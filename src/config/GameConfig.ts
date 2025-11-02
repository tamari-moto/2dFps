/**
 * Game configuration constants
 * This file contains all configurable constants used throughout the game.
 * Modify these values to adjust game behavior without changing source code.
 */

/**
 * Map configuration
 */
export const MapConfig = {
  /** Number of nodes in grid (map will be NodesInGridSize x NodesInGridSize) */
  NodesInGridSize: 20,

  /** Spacing between nodes in pixels */
  NodeSpacing: 30,

  /** Minimum margin from map edges for obstacles */
  ObstacleMargin: 30,
} as const;

/**
 * Player configuration
 */
export const PlayerConfig = {
  /** Player's field of view angle in degrees */
  ViewAngle: 60,

  /** Maximum view distance */
  MaxViewDistance: 1000,

  /** Player cube size */
  CubeSize: 10,
} as const;

/**
 * Enemy configuration
 */
export const EnemyConfig = {
  /** Enemy cube size */
  CubeSize: 10,
} as const;

/**
 * Node/Circle visualization configuration
 */
export const NodeConfig = {
  /** Circle radius for nodes */
  CircleSize: 10,

  /** Number of segments in circle geometry */
  CircleSegments: 100,

  /** Default node color (gray) */
  DefaultColor: 0xA0A0A0,

  /** Visible node color (white) */
  VisibleColor: 0xffffff,

  /** Selected node color (blue) */
  SelectedColor: 0x0000ff,

  /** Next move node color (green) */
  NextMoveColor: 0x00ff00,

  /** Shot target node color (red) */
  ShotTargetColor: 0xff0000,
} as const;

/**
 * Obstacle generation configuration
 */
export const ObstacleConfig = {
  /** Default number of random obstacles */
  DefaultCount: 3,

  /** Minimum obstacle width */
  MinWidth: 60,

  /** Maximum obstacle width */
  MaxWidth: 150,

  /** Minimum obstacle height */
  MinHeight: 60,

  /** Maximum obstacle height */
  MaxHeight: 150,

  /** Wall thickness for maze patterns */
  WallThickness: 20,

  /** Wall thickness for room patterns */
  RoomWallThickness: 15,

  /** Room door width */
  RoomDoorWidth: 60,

  /** Corridor wall thickness */
  CorridorWallThickness: 25,

  /** Corridor width */
  CorridorWidth: 120,

  /** Line color for obstacles (cyan) */
  LineColor: 0x00ffff,
} as const;

/**
 * Complex map generation configuration
 */
export const ComplexMapConfig = {
  /** Maze pattern: number of horizontal walls */
  MazeHorizontalWalls: 4,

  /** Maze pattern: number of vertical walls */
  MazeVerticalWalls: 4,

  /** Maze pattern: base offset for walls */
  MazeBaseOffset: 100,

  /** Maze pattern: spacing between walls */
  MazeWallSpacing: 150,

  /** Maze pattern: random offset range start */
  MazeRandomOffsetStart: 60,

  /** Maze pattern: random offset range */
  MazeRandomOffsetRange: 100,

  /** Maze pattern: minimum wall length */
  MazeMinWallLength: 200,

  /** Maze pattern: random wall length range */
  MazeRandomWallLengthRange: 150,

  /** Rooms pattern: number of rooms */
  RoomCount: 3,

  /** Rooms pattern: base room offset */
  RoomBaseOffset: 60,

  /** Rooms pattern: room spacing multiplier */
  RoomSpacingMultiplier: 250,

  /** Rooms pattern: room width */
  RoomWidth: 180,

  /** Rooms pattern: room height */
  RoomHeight: 180,

  /** Scattered pattern: minimum number of cover points */
  ScatteredMinCount: 8,

  /** Scattered pattern: random count range */
  ScatteredRandomCountRange: 5,

  /** Scattered pattern: minimum cover size */
  ScatteredMinSize: 40,

  /** Scattered pattern: random size range */
  ScatteredRandomSizeRange: 80,

  /** Scattered pattern: base offset */
  ScatteredBaseOffset: 60,

  /** Scattered pattern: spacing buffer */
  ScatteredSpacingBuffer: 120,

  /** Symmetric pattern: number of obstacle groups */
  SymmetricObstacleCount: 4,

  /** Symmetric pattern: minimum obstacle size */
  SymmetricMinSize: 60,

  /** Symmetric pattern: random size range */
  SymmetricRandomSizeRange: 60,

  /** Symmetric pattern: minimum offset from center */
  SymmetricMinOffset: 80,

  /** Symmetric pattern: random offset range */
  SymmetricRandomOffsetRange: 120,

  /** Symmetric pattern: minimum central obstacle size */
  SymmetricCentralMinSize: 60,

  /** Symmetric pattern: random central size range */
  SymmetricCentralRandomSizeRange: 40,

  /** Corridors pattern: number of quadrant obstacles */
  CorridorsQuadrantObstacles: 4,

  /** Corridors pattern: quadrant obstacle base position */
  CorridorsQuadrantBasePosition: 80,

  /** Corridors pattern: quadrant obstacle offset for opposite side */
  CorridorsQuadrantOppositeOffset: 150,

  /** Corridors pattern: minimum quadrant obstacle size */
  CorridorsQuadrantMinSize: 60,

  /** Corridors pattern: random quadrant obstacle size range */
  CorridorsQuadrantRandomSizeRange: 40,
} as const;

/**
 * Animation configuration
 */
export const AnimationConfig = {
  /** Duration for player/enemy movement animations in seconds */
  MovementDuration: 1,

  /** Shot target pulse scale */
  ShotPulseScale: 1.3,

  /** Shot pulse animation duration in seconds */
  ShotPulseDuration: 0.5,

  /** Shot pulse repeat delay in seconds */
  ShotPulseRepeatDelay: 0.02,

  /** Shot pulse ease function */
  ShotPulseEase: "elastic.out(1, 0.3)",
} as const;

/**
 * Camera configuration
 */
export const CameraConfig = {
  /** Field of view angle */
  FOV: 90,

  /** Camera initial Z position */
  InitialZPosition: 10,

  /** Orbit controls minimum distance */
  MinDistance: 2.0,

  /** Orbit controls maximum distance */
  MaxDistance: 1000.0,

  /** Enable rotation control */
  EnableRotate: false,
} as const;

/**
 * Calculated values (derived from other config values)
 */
export const CalculatedConfig = {
  /** Total map size in pixels */
  get MapSize(): number {
    return (MapConfig.NodesInGridSize - 1) * MapConfig.NodeSpacing;
  },

  /** Total number of nodes in the map */
  get TotalNodes(): number {
    return MapConfig.NodesInGridSize * MapConfig.NodesInGridSize;
  },
} as const;
