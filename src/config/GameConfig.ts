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

  /** Default node color (charcoal) */
  DefaultColor: 0x1c1c1c,

  /** Visible node color (muted gold) */
  VisibleColor: 0xc8a96e,

  /** Selected node color (copper) */
  SelectedColor: 0xb87333,

  /** Next move node color (sage green) */
  NextMoveColor: 0x8fbc8f,

  /** Shot target node color (dark red) */
  ShotTargetColor: 0xc0392b,

  /** Reachable node color (dark grey) */
  ReachableColor: 0x3d3d3d,
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
 * Render / visual theme configuration
 */
export const RenderConfig = {
  /** Background clear color (near black) */
  BackgroundColor: 0x0a0a0a,

  /** Grid line color for background grid */
  GridLineColor: 0x1a1a1a,

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

  // --- Player body material ---
  /** PBR roughness for player body */
  PlayerBodyRoughness: 0.6,
  /** PBR metalness for player body */
  PlayerBodyMetalness: 0.3,

  // --- Humanoid variant: handgun ---
  /** Default player color when none is specified */
  PlayerDefaultColor: 0xffff00,
  /** Player color during hit effect */
  PlayerHitColor: 0xff0000,
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
 * Wall (3D obstacle) visual configuration
 */
export const WallConfig = {
  /** Wall extrusion height in world units */
  Height: 8,
  /** Wall base Z position */
  ZOffset: 0,
  /** Wall depth (screen-width of the wall slab) */
  Depth: 4,
  /** Wall color (dark brown) */
  Color: 0x2a2420,
  /** PBR roughness for walls */
  Roughness: 0.85,
  /** PBR metalness for walls */
  Metalness: 0.05,
  /** Emissive color for walls */
  EmissiveColor: 0x100e0c,
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
  BloomStrength: 0.8,
  /** Bloom effect radius */
  BloomRadius: 0.5,
  /** Bloom threshold (only pixels brighter than this bloom) */
  BloomThreshold: 0.2,
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
 * NPC AI configuration
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

  /** Waiting time after a simultaneous round resolves before re-enabling input (ms) */
  RoundAnimationDelayMs: 1500,
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

// ============================================================
// 以下 GameConstants.ts から統合
// ============================================================

/**
 * Number of players in local-play mode.
 * Online mode uses the room's participant count instead.
 */
export const LOCAL_PLAYER_COUNT = 5;

/**
 * Generate a player ID from an index
 */
export const createPlayerId = (index: number): string => `player${index + 1}`;

/**
 * Entity ID constants for players
 */
export const ENTITY_IDS = {
  PLAYER_1: 'player1',
} as const;

/**
 * Human-controlled player ID
 */
export const HUMAN_PLAYER_ID = ENTITY_IDS.PLAYER_1;

/**
 * Keyboard key constants for game controls
 */
export const KEYBOARD_KEYS = {
  DANCE: 'd',
  DANCE_UPPER: 'D',
} as const;

/**
 * Player-related constants
 */
export const PLAYER_CONSTANTS = {
  DEFAULT_ACTIVE_PLAYER: ENTITY_IDS.PLAYER_1,
  ACTIVE_SCALE: 1.2,
  NORMAL_SCALE: 1.0,
} as const;

// ============================================================

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
