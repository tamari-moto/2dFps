import { Node } from '../node';

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
  node: Node;
  color: number;
  angle: number;

  constructor(
    id: string,
    type: EntityType,
    initialNode: Node,
    color: number,
    initialAngle: number = 0
  ) {
    this.id = id;
    this.type = type;
    this.node = new Node(initialNode.id, initialNode.x, initialNode.y);
    this.color = color;
    this.angle = initialAngle;
  }

  /**
   * Updates the entity's position to a new node
   */
  setNode(newNode: Node): void {
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

}
