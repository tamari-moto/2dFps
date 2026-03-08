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

  /** Damage dealt per shot (3 shots to eliminate a player with 100 HP) */
  DamagePerShot: 34,
} as const;

/**
 * Node/Circle visualization configuration
 */
export const NodeConfig = {
  /** Circle radius for nodes */
  CircleSize: 10,

  /** Number of segments in circle geometry */
  CircleSegments: 100,

  /** Default node color (dark tactical green) */
  DefaultColor: 0x1a3a2a,

  /** Visible node color (bright cyan) */
  VisibleColor: 0x00e5cc,

  /** Selected node color (dark orange) */
  SelectedColor: 0xff8c00,

  /** Next move node color (neon green) */
  NextMoveColor: 0x39ff14,

  /** Shot target node color (red) */
  ShotTargetColor: 0xff2020,
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

  /** Line color for obstacles (muted teal) */
  LineColor: 0x00bfbf,
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
 * View angle visualization configuration
 */
export const ViewAngleVisualizationConfig = {
  /** Enable view angle edges visualization */
  ShowViewAngleEdges: false,

  /** Color for view angle edges (cyan, matches VisibleColor) */
  EdgeColor: 0x00e5cc,

  /** Opacity for view angle edges */
  EdgeOpacity: 0.45,

  /** Line width for view angle edges */
  EdgeLineWidth: 2,
} as const;

/**
 * Render / visual theme configuration
 */
export const RenderConfig = {
  /** Background clear color (very dark navy) */
  BackgroundColor: 0x050d12,

  /** Grid line color for background grid */
  GridLineColor: 0x0d2b20,

  /** Grid line opacity */
  GridLineOpacity: 0.6,

  /** Player diamond marker size */
  PlayerMarkerSize: 20,

  /** GLTF player model scale factor */
  PlayerModelScale: 15,

  /** GLTF player model Z rotation offset in radians */
  PlayerModelRotationZ: Math.PI / 2,

  /** Y rotation offset applied to all player models so the face points forward (radians) */
  PlayerFacingOffset: Math.PI / 2,

  // --- Primitive player geometry ---
  /** Radial segments for player body cylinder (smoother = higher) */
  PlayerBodySegments: 24,
  /** Radial/height segments for player head sphere */
  PlayerHeadSegments: 24,
  /** PBR roughness for player body */
  PlayerBodyRoughness: 0.55,
  /** PBR metalness for player body */
  PlayerBodyMetalness: 0.05,
  /** PBR roughness for player head */
  PlayerHeadRoughness: 0.45,
  /** PBR metalness for player head */
  PlayerHeadMetalness: 0.10,

  // --- Nose (small cone on face front) ---
  /** Nose cone base radius = PlayerMarkerSize * this */
  PlayerNoseRadiusRatio: 0.04,
  /** Nose cone height = PlayerMarkerSize * this */
  PlayerNoseHeightRatio: 0.12,
  /** Radial segments for nose cone */
  PlayerNoseSegments: 8,
  /** PBR roughness for nose */
  PlayerNoseRoughness: 0.50,
  /** PBR metalness for nose */
  PlayerNoseMetalness: 0.05,

  // --- Arms ---
  /** Arm cylinder radius = PlayerMarkerSize * this */
  PlayerArmRadius: 0.04,
  /** Arm cylinder length = PlayerMarkerSize * this */
  PlayerArmLength: 0.35,
  /** Radial segments for arms */
  PlayerArmSegments: 8,
  /** PBR roughness for arms */
  PlayerArmRoughness: 0.55,
  /** PBR metalness for arms */
  PlayerArmMetalness: 0.05,
  /** Arm X offset from center = PlayerMarkerSize * this */
  PlayerArmOffsetX: 0.22,
  /** Arm Y position = PlayerMarkerSize * this */
  PlayerArmOffsetY: 0.30,

  // --- Eyes (white sclera) ---
  /** Eye sphere radius = PlayerMarkerSize * this */
  PlayerEyeRadius: 0.055,
  /** Segments for eye sphere */
  PlayerEyeSegments: 8,
  /** Eye X offset (left/right) = PlayerMarkerSize * this */
  PlayerEyeOffsetX: 0.08,
  /** Eye Y position = PlayerMarkerSize * this */
  PlayerEyeOffsetY: 0.70,
  /** Eye Z offset (forward on head) = PlayerMarkerSize * this */
  PlayerEyeOffsetZ: 0.12,

  // --- Pupils ---
  /** Pupil sphere radius = PlayerMarkerSize * this */
  PlayerPupilRadius: 0.03,
  /** Segments for pupil sphere */
  PlayerPupilSegments: 6,
  /** Pupil Z offset (in front of eye) = PlayerMarkerSize * this */
  PlayerPupilOffsetZ: 0.165,

  // --- Glow ring ---
  /** Ring inner radius = PlayerMarkerSize * this */
  PlayerGlowRingInnerRatio: 0.17,
  /** Ring outer radius = PlayerMarkerSize * this */
  PlayerGlowRingOuterRatio: 0.28,
  /** Radial segments for glow ring */
  PlayerGlowRingSegments: 32,
  /** Emissive intensity for glow ring */
  PlayerGlowRingEmissiveIntensity: 0.8,
  /** PBR roughness for glow ring */
  PlayerGlowRingRoughness: 0.30,
  /** PBR metalness for glow ring */
  PlayerGlowRingMetalness: 0.0,
} as const;

/**
 * Lighting configuration
 */
export const LightingConfig = {
  /** Ambient light intensity */
  AmbientIntensity: 0.3,
  /** Hemisphere light sky color */
  HemisphereSkyColor: 0x223344,
  /** Hemisphere light ground color */
  HemisphereGroundColor: 0x0d2b20,
  /** Hemisphere light intensity */
  HemisphereIntensity: 0.7,
  /** Main directional light intensity */
  DirectionalIntensity: 1.2,
  /** Main directional light X position */
  DirectionalX: 30,
  /** Main directional light Y position */
  DirectionalY: 20,
  /** Main directional light Z position */
  DirectionalZ: 100,
  /** Rim light color (cool blue) */
  RimLightColor: 0x4488cc,
  /** Rim light intensity */
  RimLightIntensity: 0.4,
  /** Rim light X position */
  RimLightX: -50,
  /** Rim light Y position */
  RimLightY: -50,
  /** Rim light Z position */
  RimLightZ: 60,
} as const;

/**
 * Wall (3D obstacle) visual configuration
 */
export const WallConfig = {
  /** Wall extrusion height in world units */
  Height: 8,
  /** Wall base Z position */
  ZOffset: 0,
  /** Wall depth (screen-width of the wall slab) */
  Depth: 4,
  /** Wall color (dark tactical blue-grey) */
  Color: 0x1a2e38,
  /** PBR roughness for walls */
  Roughness: 0.85,
  /** PBR metalness for walls */
  Metalness: 0.05,
  /** Emissive color for walls */
  EmissiveColor: 0x0a1520,
  /** Emissive intensity for walls */
  EmissiveIntensity: 0.15,
  /** userData key used to identify wall meshes during scene traversal */
  UserDataTag: 'isWall',
} as const;

/**
 * Node (grid tile) visual configuration
 */
export const NodeVisualConfig = {
  /** PBR roughness for node circles */
  Roughness: 0.7,
  /** PBR metalness for node circles */
  Metalness: 0.0,
  /** Emissive intensity for default (invisible) nodes */
  EmissiveDefaultIntensity: 0.0,
  /** Emissive intensity for visible nodes */
  EmissiveVisibleIntensity: 0.25,
  /** Emissive intensity for selected node */
  EmissiveSelectedIntensity: 0.4,
  /** Emissive intensity for next-move node */
  EmissiveNextIntensity: 0.3,
  /** Emissive intensity for shot-target node */
  EmissiveShotIntensity: 0.5,
} as const;

/**
 * Post-processing configuration
 */
export const PostProcessConfig = {
  /** Enable bloom post-processing */
  EnableBloom: true,
  /** Bloom effect strength */
  BloomStrength: 0.4,
  /** Bloom effect radius */
  BloomRadius: 0.3,
  /** Bloom threshold (only pixels brighter than this bloom) */
  BloomThreshold: 0.35,
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
