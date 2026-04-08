import { Node } from './node';
import { Entity, EntityType } from './entities/Entity';
import { TeamConfig, TeamId } from '../config/GameConfig';

/**
 * Player entity with health and alive state
 */
export class Player extends Entity {
  health: number;
  maxHealth: number;
  isAlive: boolean;
  isNPC: boolean;
  team: TeamId;

  constructor(id: string, initialNode: Node, team: TeamId, maxHealth: number = 100, isNPC: boolean = false) {
    const color = team === 0 ? TeamConfig.Team0Color : TeamConfig.Team1Color;
    super(id, EntityType.PLAYER, initialNode, color, 0);
    this.maxHealth = maxHealth;
    this.health = maxHealth;
    this.isAlive = true;
    this.isNPC = isNPC;
    this.team = team;
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
