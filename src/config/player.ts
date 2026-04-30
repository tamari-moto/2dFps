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
 * Player-related constants
 */
export const PLAYER_CONSTANTS = {
  DEFAULT_ACTIVE_PLAYER: ENTITY_IDS.PLAYER_1,
  ACTIVE_SCALE: 1.2,
  NORMAL_SCALE: 1.0,
} as const;
