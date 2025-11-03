import { node } from './node';
import { StateMachine } from '../GRF/StateMachine';

export class Player {
  id: string;
  node: node;
  angle: number;
  color: number;
  stateMachine: StateMachine;

  constructor(id: string, initialNode: node, color: number) {
    this.id = id;
    this.node = new node();
    this.node.id = initialNode.id;
    this.node.x = initialNode.x;
    this.node.y = initialNode.y;
    this.angle = 0;
    this.color = color;
    this.stateMachine = new StateMachine();
  }

  setNode(newNode: node): void {
    this.node.id = newNode.id;
    this.node.x = newNode.x;
    this.node.y = newNode.y;
  }

  setAngle(angle: number): void {
    this.angle = angle;
  }
}
