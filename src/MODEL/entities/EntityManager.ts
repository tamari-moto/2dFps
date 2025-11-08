import { Entity, EntityType } from './Entity';
import { Player } from '../Player';

/**
 * Manages all game entities (players)
 * Provides centralized access to entity collections
 */
export class EntityManager {
  private entities: Map<string, Entity> = new Map();

  /**
   * Adds an entity to the manager
   */
  addEntity(entity: Entity): void {
    this.entities.set(entity.id, entity);
  }

  /**
   * Removes an entity from the manager
   */
  removeEntity(id: string): void {
    this.entities.delete(id);
  }

  /**
   * Gets an entity by ID
   */
  getEntity(id: string): Entity | undefined {
    return this.entities.get(id);
  }

  /**
   * Gets all entities
   */
  getAllEntities(): Entity[] {
    return Array.from(this.entities.values());
  }

  /**
   * Gets entities by type
   */
  getEntitiesByType(type: EntityType): Entity[] {
    return Array.from(this.entities.values()).filter(
      entity => entity.type === type
    );
  }

  /**
   * Gets all players
   */
  getAllPlayers(): Player[] {
    return this.getEntitiesByType(EntityType.PLAYER) as Player[];
  }

  /**
   * Gets a player by ID
   */
  getPlayer(id: string): Player | undefined {
    const entity = this.entities.get(id);
    return entity?.type === EntityType.PLAYER ? (entity as Player) : undefined;
  }

  /**
   * Checks if an entity exists
   */
  hasEntity(id: string): boolean {
    return this.entities.has(id);
  }

  /**
   * Gets the total number of entities
   */
  getEntityCount(): number {
    return this.entities.size;
  }

  /**
   * Clears all entities
   */
  clear(): void {
    this.entities.clear();
  }

  /**
   * Gets entities at a specific node ID
   */
  getEntitiesAtNode(nodeId: number): Entity[] {
    return Array.from(this.entities.values()).filter(
      entity => entity.node.id === nodeId
    );
  }
}
