/**
 * Game configuration constants
 * This file contains all configurable constants used throughout the game.
 * Modify these values to adjust game behavior without changing source code.
 */

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
 * Player configuration
 */
export const PlayerConfig: {
  ViewAngle: number;
  MaxViewDistance: number;
  CubeSize: number;
  DamagePerShot: number;
  MoveRange: number;
  ShotHitRadius: number;
  FogOfWarEnabled: boolean;
} = {
  /** Player's field of view angle in degrees */
  ViewAngle: 60,

  /** Maximum view distance */
  MaxViewDistance: 1000,

  /** Player cube size */
  CubeSize: 10,

  /** Damage dealt per shot (3 shots to eliminate a player with 100 HP) */
  DamagePerShot: 34,

  /** Maximum number of grid steps a player can move per turn */
  MoveRange: 8,

  /** Hit radius for shot resolution: target must be within this distance of the shot node (px) */
  ShotHitRadius: 20,

  /** 視界外の敵を非表示にするか */
  FogOfWarEnabled: true,
};

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

  /** Reachable node color (soft teal) */
  ReachableColor: 0x2a7a6a,
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

  /** Line color for obstacles (muted teal) */
  LineColor: 0x00bfbf,
} as const;

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

  // --- Scout (humanoid) body animations ---
  /** head Y-bob amplitude in HS units during idle */
  IdleHeadBobAmount: 0.15,
  /** seconds per idle head-bob half-period */
  IdleCockpitPulseDuration: 1.2,
  /** arm Y sway amplitude in world units during walk */
  WalkArmSwayY: 1.5,
  /** seconds per half-period of arm sway during walk */
  WalkArmSwayHalfDuration: 0.15,
  /** barrel forward recoil distance = PlayerMarkerSize × this ratio */
  AttackBarrelForwardRatio: 0.30,
  /** seconds for barrel thrust out */
  AttackBarrelOutDuration: 0.10,
  /** seconds for barrel return after recoil */
  AttackBarrelReturnDuration: 0.25,

  // --- Dance (full-body bop) ---
  /** body Y bounce amplitude in world units */
  DanceBodyBounceAmount: 2.0,
  /** seconds per half-period of body bounce */
  DanceBodyBounceDuration: 0.25,
  /** head nod amplitude in HS units (≈2× idle bob) */
  DanceHeadNodAmount: 0.35,
  /** seconds per half-period of head nod */
  DanceHeadNodDuration: 0.25,
  /** arm sway amplitude in world units (≈2.5× walk sway) */
  DanceArmSwayAmount: 4.0,
  /** seconds per half-period of arm sway */
  DanceArmSwayDuration: 0.25,
  /** number of full bounce loops before reverting to idle */
  DanceLoopCount: 2,
} as const;

/**
 * Camera configuration
 */
export const CameraConfig = {
  /** Field of view angle (default) */
  FOV: 90,

  /** FOV minimum (most zoomed in) */
  FOVMin: 20,

  /** FOV maximum (most zoomed out) */
  FOVMax: 120,

  /** FOV change per wheel tick */
  FOVWheelStep: 5,

  /** Camera initial Z position */
  InitialZPosition: 10,

  /** Orbit controls minimum distance */
  MinDistance: 2.0,

  /** Orbit controls maximum distance */
  MaxDistance: 1000.0,

  /** Enable rotation control */
  EnableRotate: false,

  /** TPS後方追従: プレイヤー後方のXY距離（プレイヤーの向きの逆方向へ配置） */
  BackDistance: 60,

  /** TPS後方追従: カメラの Z オフセット（高さ）。小さいほどFPS寄り */
  OffsetZ: 500,

  /** パン操作を無効化（カメラは自動追従） */
  EnablePan: false,

  /** プレイヤー切り替え時のカメラパン秒数 */
  FollowPanDuration: 0.8,

  /** 移動追従時のカメラパン秒数（MovementDuration と同値） */
  FollowMoveDuration: 1.0,

  /** プレイヤー切り替え時の ease */
  FollowPanEase: 'power2.inOut',

  /** 移動追従時の ease */
  FollowMoveEase: 'power2.out',
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

  /** Y rotation offset applied to all player models so the face points forward (radians) */
  PlayerFacingOffset: Math.PI / 2,

  /** Z offset applied to player mesh groups to vertically center the Scout model over the node circle.
   *  After rotation.x = π/2, local Y maps to world Z. The model's visual center is below Y=0,
   *  so we lift by HS * 0.7 (HS = PlayerMarkerSize / 6.4). */
  PlayerZOffset: (20 / 6.4) * 3.21,

  // --- Primitive drone player geometry ---
  /** Radial segments for body octagon */
  PlayerBodySegments: 8,
  /** Body radius = PlayerMarkerSize * this */
  PlayerBodyRadius: 0.45,
  /** Body height (thin slab) = PlayerMarkerSize * this */
  PlayerBodyThickness: 0.05,
  /** PBR roughness for body */
  PlayerBodyRoughness: 0.6,
  /** PBR metalness for body */
  PlayerBodyMetalness: 0.3,

  // --- Cockpit (forward direction indicator) ---
  /** Cockpit circle radius = PlayerMarkerSize * this */
  PlayerCockpitRadius: 0.15,
  /** Cockpit Y offset toward front = PlayerMarkerSize * this */
  PlayerCockpitOffsetY: 0.20,
  /** Cockpit emissive glow intensity */
  PlayerCockpitEmissiveIntensity: 1.5,

  // --- Barrel (gun pointing forward) ---
  /** Barrel width = PlayerMarkerSize * this */
  PlayerBarrelWidth: 0.10,
  /** Barrel length along Y = PlayerMarkerSize * this */
  PlayerBarrelLength: 0.55,
  /** Barrel Y center offset = PlayerMarkerSize * this */
  PlayerBarrelOffsetY: 0.55,
  /** Barrel color (fixed dark metallic, independent of player color) */
  PlayerBarrelColor: 0x1a1a2e,

  // --- Thrusters (left & right) ---
  /** Thruster width = PlayerMarkerSize * this */
  PlayerThrusterWidth: 0.18,
  /** Thruster length = PlayerMarkerSize * this */
  PlayerThrusterLength: 0.30,
  /** Thruster X offset from center = PlayerMarkerSize * this */
  PlayerThrusterOffsetX: 0.48,

  // --- Humanoid variant: handgun ---
  /** Handgun barrel color (dark metallic) */
  PlayerGunBarrelColor: 0x222233,

  // --- Humanoid variant: head ---
  /** PBR roughness for head sphere */
  PlayerHeadRoughness: 0.7,
  /** PBR metalness for head sphere */
  PlayerHeadMetalness: 0.1,
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
  /** Emissive intensity for reachable nodes */
  EmissiveReachableIntensity: 0.15,
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
 * NPC personality types
 */
export type NPCPersonality = 'aggressive' | 'defensive' | 'ambusher';

/**
 * Weight overrides per NPC personality
 */
export interface PersonalityWeightSet {
  coverWeight: number;
  enemyLOSPenalty: number;
  distanceWeight: number;
  ambushBonus: number;
  retreatHPThreshold: number;
  retreatCoverMultiplier: number;
  shotLowHPPriority: number;
}

export const PersonalityWeights: Record<NPCPersonality, PersonalityWeightSet> = {
  aggressive: {
    coverWeight: 15,
    enemyLOSPenalty: -10,
    distanceWeight: -5,
    ambushBonus: 5,
    retreatHPThreshold: 20,
    retreatCoverMultiplier: 1.5,
    shotLowHPPriority: 5,
  },
  defensive: {
    coverWeight: 50,
    enemyLOSPenalty: -30,
    distanceWeight: -1,
    ambushBonus: 10,
    retreatHPThreshold: 60,
    retreatCoverMultiplier: 3,
    shotLowHPPriority: 15,
  },
  ambusher: {
    coverWeight: 20,
    enemyLOSPenalty: -15,
    distanceWeight: 0,
    ambushBonus: 40,
    retreatHPThreshold: 40,
    retreatCoverMultiplier: 2,
    shotLowHPPriority: 10,
  },
};

/**
 * NPC coordination configuration
 */
export const CoordinationConfig = {
  /** Angle difference (degrees) to consider a flanking position */
  FlankAngleThreshold: 60,
  /** Score bonus for flanking positions */
  FlankBonus: 20,
  /** Penalty when too close to another NPC */
  ClusterPenalty: -15,
  /** Manhattan distance threshold for cluster penalty */
  ClusterDistance: 3,
  /** Enemy HP ratio below which focus fire activates */
  FocusFireHPThreshold: 0.5,
  /** Shot score bonus for focus fire targets */
  FocusFireBonus: 10,
  /** Number of turns to remember enemy positions */
  MemoryDuration: 3,
  /** Bonus for moving toward last known enemy position */
  SeekLastKnownBonus: 10,
} as const;

/**
 * NPC AI configuration (default / fallback values)
 */
export const AIConfig = {
  /** Bonus for nodes adjacent to walls (fewer graph edges = more cover) */
  CoverWeight: 30,

  /** Penalty per enemy that has line of sight to the candidate node */
  EnemyLOSPenalty: -20,

  /** Penalty per grid step distance to nearest enemy (approach bias) */
  DistanceWeight: -2,

  /** Bonus when NPC has LOS to enemy but enemy lacks LOS back */
  AmbushBonus: 15,

  /** HP threshold below which NPC prioritizes cover over aggression */
  RetreatHPThreshold: 40,

  /** Cover weight multiplier when HP is below retreat threshold */
  RetreatCoverMultiplier: 2,

  /** Bonus for targeting low-HP enemies */
  ShotLowHPPriority: 10,

  /** Delay between NPC turns in ms (must exceed MovementDuration) */
  NPCTurnDelayMs: 1200,
} as const;

/**
 * Mobile UI configuration
 */
export const MobileUIConfig = {
  /** Virtual button size in px */
  ButtonSize: 56,
  /** Virtual button panel opacity */
  ButtonOpacity: 0.75,
  /** Max finger movement in px to still count as a tap (not a flick/pan) */
  TapThreshold: 10,
  /** World units per screen pixel for camera pan */
  PanSensitivity: 0.15,
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

/**
 * Applies server-authoritative config values to the runtime config objects.
 * Only fields present on the server are overridden; client-only fields are untouched.
 * Called by ColyseusAdapter when a server_config message is received.
 */
export function applyServerConfig(payload: {
  mapConfig: { NodesInGridSize: number; NodeSpacing: number };
  playerConfig: { MoveRange: number; ViewAngle: number; MaxViewDistance: number; DamagePerShot: number; ShotHitRadius: number };
}): void {
  MapConfig.NodesInGridSize    = payload.mapConfig.NodesInGridSize;
  MapConfig.NodeSpacing        = payload.mapConfig.NodeSpacing;
  PlayerConfig.MoveRange       = payload.playerConfig.MoveRange;
  PlayerConfig.ViewAngle       = payload.playerConfig.ViewAngle;
  PlayerConfig.MaxViewDistance = payload.playerConfig.MaxViewDistance;
  PlayerConfig.DamagePerShot   = payload.playerConfig.DamagePerShot;
  PlayerConfig.ShotHitRadius   = payload.playerConfig.ShotHitRadius;
}
