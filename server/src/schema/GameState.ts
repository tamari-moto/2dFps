import { Schema, MapSchema, type } from '@colyseus/schema';

export class PlayerState extends Schema {
  @type('string') id: string = '';
  @type('number') nodeId: number = 0;
  @type('number') angle: number = 0;
  @type('number') health: number = 100;
  @type('boolean') isAlive: boolean = true;
  @type('number') color: number = 0xffffff;
}

export class GameState extends Schema {
  @type({ map: PlayerState }) players = new MapSchema<PlayerState>();
  @type('string') currentTurnPlayerId: string = '';
  @type('boolean') gameStarted: boolean = false;
}
