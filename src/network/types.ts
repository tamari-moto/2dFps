/**
 * Shared types for the network adapter layer.
 * Used by both LocalAdapter and ColyseusAdapter (Phase 2+).
 */

/** Action sent from client to server (or processed locally) */
export interface TurnAction {
  playerId: string;
  moveToNodeId: number;
  shotAtNodeId: number | undefined;
}

/** Result returned after a turn is executed */
export interface TurnResult {
  movingPlayerId: string;
  newNodeId: number;
  newAngle: number;
  hits: Array<{ targetId: string; damage: number; isEliminated: boolean }>;
  nextTurnPlayerId: string;
}
