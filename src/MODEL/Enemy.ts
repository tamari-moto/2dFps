import { node } from './node';

export class Enemy {
  id: string;
  node: node;
  color: number;

  constructor(id: string, initialNode: node, color: number) {
    this.id = id;
    this.node = new node();
    this.node.id = initialNode.id;
    this.node.x = initialNode.x;
    this.node.y = initialNode.y;
    this.color = color;
  }

  setNode(newNode: node): void {
    this.node.id = newNode.id;
    this.node.x = newNode.x;
    this.node.y = newNode.y;
  }
}
