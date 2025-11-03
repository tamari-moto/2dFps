/**
 * Game-wide constants for entity IDs, keyboard keys, and other magic values.
 * Using constants instead of magic strings improves maintainability and reduces errors.
 */

/**
 * Entity ID constants for players and enemies
 */
export const ENTITY_IDS = {
  PLAYER_1: 'player1',
  PLAYER_2: 'player2',
  ENEMY_1: 'enemy1',
  ENEMY_2: 'enemy2',
} as const;

/**
 * Type-safe entity ID type
 */
export type EntityId = typeof ENTITY_IDS[keyof typeof ENTITY_IDS];

/**
 * Keyboard key constants for game controls
 */
export const KEYBOARD_KEYS = {
  TOGGLE_VIEW_ANGLE: 'v',
  TOGGLE_VIEW_ANGLE_UPPER: 'V',
  SELECT_PLAYER_1: '1',
  SELECT_PLAYER_2: '2',
  SELECT_ENEMY_1: '3',
  SELECT_ENEMY_2: '4',
} as const;

/**
 * Player-related constants
 */
export const PLAYER_CONSTANTS = {
  DEFAULT_ACTIVE_PLAYER: ENTITY_IDS.PLAYER_1,
  ACTIVE_SCALE: 1.2,
  NORMAL_SCALE: 1.0,
} as const;

/**
 * Enemy-related constants
 */
export const ENEMY_CONSTANTS = {
  DEFAULT_ACTIVE_ENEMY: ENTITY_IDS.ENEMY_1,
  ACTIVE_SCALE: 1.2,
  NORMAL_SCALE: 1.0,
} as const;
