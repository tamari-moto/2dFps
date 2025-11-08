import { node } from '../node';

/**
 * Entity type enumeration
 */
export enum EntityType {
  PLAYER = 'player',
}

/**
 * Base class for all game entities (players)
 * Provides common functionality for position, color, and angle management
 */
export abstract class Entity {
  id: string;
  type: EntityType;
  node: node;
  color: number;
  angle: number;

  constructor(
    id: string,
    type: EntityType,
    initialNode: node,
    color: number,
    initialAngle: number = 0
  ) {
    this.id = id;
    this.type = type;
    this.node = new node();
    this.node.id = initialNode.id;
    this.node.x = initialNode.x;
    this.node.y = initialNode.y;
    this.color = color;
    this.angle = initialAngle;
  }

  /**
   * Updates the entity's position to a new node
   */
  setNode(newNode: node): void {
    this.node.id = newNode.id;
    this.node.x = newNode.x;
    this.node.y = newNode.y;
  }

  /**
   * Updates the entity's facing angle
   */
  setAngle(angle: number): void {
    this.angle = angle;
  }

  /**
   * Gets the entity's current position
   */
  getPosition(): { x: number; y: number } {
    return { x: this.node.x, y: this.node.y };
  }

  /**
   * Checks if this entity is at the same position as another entity
   */
  isAtSamePositionAs(other: Entity): boolean {
    return this.node.id === other.node.id;
  }
}
