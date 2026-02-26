import { Schema, MapSchema, ArraySchema, type } from '@colyseus/schema';

/** Synchronized player state (delta-encoded by Colyseus) */
export class PlayerState extends Schema {
  @type('string') id: string = '';
  @type('number') nodeId: number = 0;
  @type('number') angle: number = 0;
  @type('number') health: number = 100;
  @type('boolean') isAlive: boolean = true;
  @type('number') color: number = 0;
}

/** Top-level game state synchronized to all clients */
export class GameState extends Schema {
  /** 'waiting' | 'playing' | 'ended' */
  @type('string') phase: string = 'waiting';

  /** Player ID whose turn it currently is */
  @type('string') currentTurnPlayerId: string = '';

  @type('number') turnNumber: number = 0;

  @type({ map: PlayerState }) players = new MapSchema<PlayerState>();

  /**
   * Flat array encoding obstacle rectangles: [x, y, w, h, x, y, w, h, ...]
   * Sent once on game start; clients rebuild LineSegments from it.
   */
  @type(['number']) obstacleRects = new ArraySchema<number>();
}
