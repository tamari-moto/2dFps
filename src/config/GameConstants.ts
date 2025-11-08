/**
 * Game-wide constants for entity IDs, keyboard keys, and other magic values.
 * Using constants instead of magic strings improves maintainability and reduces errors.
 */

/**
 * Number of players in the game
 */
export const PLAYER_COUNT = 10;

/**
 * Generate a player ID from an index
 */
export const createPlayerId = (index: number): string => `player${index + 1}`;

/**
 * Entity ID constants for players
 */
export const ENTITY_IDS = {
  PLAYER_1: 'player1',
  PLAYER_2: 'player2',
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
} as const;

/**
 * Player-related constants
 */
export const PLAYER_CONSTANTS = {
  DEFAULT_ACTIVE_PLAYER: ENTITY_IDS.PLAYER_1,
  ACTIVE_SCALE: 1.2,
  NORMAL_SCALE: 1.0,
} as const;
