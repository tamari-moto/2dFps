import { Node } from './node';
import { Entity, EntityType } from './entities/Entity';
import { NPCPersonality, CoordinationConfig } from '../config/GameConfig';

/**
 * Memory entry for a last-known enemy position
 */
export interface EnemyMemoryEntry {
  nodeId: number;
  turnsAgo: number;
}

/**
 * Player entity with health and alive state
 */
export class Player extends Entity {
  health: number;
  maxHealth: number;
  isAlive: boolean;
  isNPC: boolean;
  personality: NPCPersonality;
  enemyMemory: Map<string, EnemyMemoryEntry>;

  constructor(
    id: string,
    initialNode: Node,
    color: number,
    maxHealth: number = 100,
    isNPC: boolean = false,
    personality: NPCPersonality = 'aggressive',
  ) {
    super(id, EntityType.PLAYER, initialNode, color, 0);
    this.maxHealth = maxHealth;
    this.health = maxHealth;
    this.isAlive = true;
    this.isNPC = isNPC;
    this.personality = personality;
    this.enemyMemory = new Map();
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
   * Updates enemy memory based on currently visible enemies.
   * Visible enemies get fresh entries; unseen enemies age by one turn;
   * entries older than MemoryDuration are purged.
   */
  updateMemory(visibleEnemyIds: Set<string>, allEnemies: Player[]): void {
    const visibleMap = new Map<string, number>();
    for (const enemy of allEnemies) {
      if (visibleEnemyIds.has(enemy.id)) {
        visibleMap.set(enemy.id, enemy.node.id);
      }
    }

    // Update visible enemies
    for (const [enemyId, nodeId] of visibleMap) {
      this.enemyMemory.set(enemyId, { nodeId, turnsAgo: 0 });
    }

    // Age unseen enemies and purge expired
    for (const [enemyId, entry] of this.enemyMemory) {
      if (visibleMap.has(enemyId)) continue;
      entry.turnsAgo++;
      if (entry.turnsAgo > CoordinationConfig.MemoryDuration) {
        this.enemyMemory.delete(enemyId);
      }
    }
  }

}
