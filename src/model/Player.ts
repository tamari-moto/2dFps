import { Node } from './node';
import { Entity, EntityType } from './entities/Entity';

/**
 * Player entity with health and alive state
 */
export class Player extends Entity {
  health: number;
  maxHealth: number;
  isAlive: boolean;

  constructor(id: string, initialNode: Node, color: number, maxHealth: number = 100) {
    super(id, EntityType.PLAYER, initialNode, color, 0);
    this.maxHealth = maxHealth;
    this.health = maxHealth;
    this.isAlive = true;
  }

  /**
   * Applies damage to the player
   */
  takeDamage(damage: number): void {
    if (!this.isAlive) return;

    this.health = Math.max(0, this.health - damage);

    if (this.health <= 0) {
      this.isAlive = false;
      console.log(`💀 ${this.id} has been eliminated!`);
    }
  }

}
