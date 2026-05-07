/**
 * Bomb defusal game mode configuration
 */
export const BombConfig = {
  /** Turns required to complete a plant action */
  PlantTurns: 1,

  /** Consecutive turns required to complete a defuse */
  DefuseTurns: 2,

  /** Turns after planting before the bomb explodes */
  ExplodeAfterTurns: 5,

  /** Rounds a team must win to win the match */
  WinsPerMatch: 7,

  /** Delay in ms between round end and next round start */
  RespawnDelayMs: 1500,
} as const;
