import { node } from './node';
import { Entity, EntityType } from './entities/Entity';

/**
 * Enemy entity
 * Currently has simple random movement AI
 */
export class Enemy extends Entity {
  constructor(id: string, initialNode: node, color: number) {
    super(id, EntityType.ENEMY, initialNode, color, 0);
  }
}
