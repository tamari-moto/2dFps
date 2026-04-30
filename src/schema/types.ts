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
  /** BFS path node IDs from start to destination (inclusive). Missing = straight-line fallback. */
  pathNodeIds?: number[];
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
