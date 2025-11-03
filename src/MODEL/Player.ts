import { node } from './node';
import { Entity, EntityType } from './entities/Entity';
import { StateMachine } from '../GRF/StateMachine';

/**
 * Player entity with state machine for turn-based actions
 */
export class Player extends Entity {
  stateMachine: StateMachine;

  constructor(id: string, initialNode: node, color: number) {
    super(id, EntityType.PLAYER, initialNode, color, 0);
    this.stateMachine = new StateMachine();
  }
}
