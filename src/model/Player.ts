import { node } from './node';
import { Entity, EntityType } from './entities/Entity';

/**
 * Player entity with health and alive state
 */
export class Player extends Entity {
  health: number;
  maxHealth: number;
  isAlive: boolean;

  constructor(id: string, initialNode: node, color: number, maxHealth: number = 100) {
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

  /**
   * Heals the player
   */
  heal(amount: number): void {
    if (!this.isAlive) return;
    this.health = Math.min(this.maxHealth, this.health + amount);
  }

  /**
   * Gets the health percentage (0-1)
   */
  getHealthPercentage(): number {
    return this.health / this.maxHealth;
  }
}
