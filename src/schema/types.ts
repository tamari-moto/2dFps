/**
 * Shared types for the network adapter layer.
 * Used by both LocalAdapter and ColyseusAdapter (Phase 2+).
 */

/** Bomb-related action type within a turn */
export type BombActionType = 'plant' | 'defuse' | 'none';

/** Action sent from client to server (or processed locally) */
export interface TurnAction {
  playerId: string;
  moveToNodeId: number;
  shotAtNodeId: number | undefined;
  bombAction: BombActionType;
}

/** Result returned after a turn is executed */
export interface TurnResult {
  movingPlayerId: string;
  newNodeId: number;
  newAngle: number;
  hits: Array<{ targetId: string; damage: number; isEliminated: boolean }>;
  bombPlanted?: boolean;
  bombDefused?: boolean;
}

/** Round outcome for bomb defusal mode */
export type RoundWinner = 'attackers' | 'defenders';

export interface RoundResult {
  winner: RoundWinner;
  reason: 'bomb_exploded' | 'bomb_defused' | 'attackers_eliminated' | 'defenders_eliminated';
  roundNumber: number;
}

/** Obstacle segment data transferred over the network */
export interface ObstacleSegmentData {
  start: { x: number; y: number };
  end: { x: number; y: number };
}

/** Single obstacle data transferred over the network */
export interface ObstaclePayload {
  id: number;
  segments: ObstacleSegmentData[];
}

/** Payload for the obstacles_ready message */
export interface ObstaclesReadyPayload {
  obstacles: ObstaclePayload[];
}

/** Server-authoritative config payload sent to client after join */
export interface ServerConfigPayload {
  mapConfig: {
    NodesInGridSize: number;
    NodeSpacing: number;
  };
  playerConfig: {
    MoveRange: number;
    ViewAngle: number;
    MaxViewDistance: number;
    DamagePerShot: number;
    ShotHitRadius: number;
  };
}
