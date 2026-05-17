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
  AccuracyExponent: number;
  ShotMaxRangeMultiplier: number;
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
  MoveRange: 1,

  /** Hit radius for shot resolution: unit scale for accuracy falloff (px) */
  ShotHitRadius: 20,

  /** 視界外の敵を非表示にするか */
  FogOfWarEnabled: false,

  /** 命中確率の減衰カーブ: 1=線形 / >1=中心寄り急峻 / <1=広め */
  AccuracyExponent: 1.5,

  /** ShotHitRadius × この値 が実効最大射程 */
  ShotMaxRangeMultiplier: 3,
};

/**
 * Number of human players in local-play mode.
 * 0 = 観戦モード（全員NPC）
 */
export const LOCAL_PLAYER_COUNT = 0;

/** チーム数 */
export const LOCAL_TEAM_COUNT = 6;

/** チームごとのNPC数 */
export const LOCAL_NPC_PER_TEAM = 10;

/**
 * Number of NPC opponents in local-play mode.
 */
export const LOCAL_NPC_COUNT = LOCAL_TEAM_COUNT * LOCAL_NPC_PER_TEAM;

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
 * All human-controlled player IDs in local-play mode
 */
export const HUMAN_PLAYER_IDS: string[] = Array.from(
  { length: LOCAL_PLAYER_COUNT },
  (_, i) => createPlayerId(i)
);

/**
 * Player-related constants
 */
export const PLAYER_CONSTANTS = {
  DEFAULT_ACTIVE_PLAYER: ENTITY_IDS.PLAYER_1,
  ACTIVE_SCALE: 1.2,
  NORMAL_SCALE: 1.0,
} as const;
