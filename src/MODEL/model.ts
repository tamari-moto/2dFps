import { node } from './node';
import { Graph } from './Graph';
import { createRectangleSegments, LineSegment, removeEdgesIfIntersected } from './LineSegment';

class Model {
  public nodeList: node[] = [];
  public player: node = new node;
  public emeny: node = new node;
  public Edges: Graph = new Graph();
  private kakudo: number = 50;
  private NodesInGridSize: number = 50;
  public Lines: LineSegment[] = [];

  constructor() {
    this.Init_model();
  }

  /**
   * Initializes the model by creating nodes and edges.
   */
  public Init_model() {
    const size = this.NodesInGridSize;
    let count = 0;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let tmp = new node();
        tmp.id = count;
        tmp.x = i * 30;
        tmp.y = j * 30;

        this.nodeList.push(tmp);
        this.Edges.addVertex(count);
        count++;
      }
    }
    this.connectNearNodes();
    this.setPlayerRef(this.nodeList[0]);
    this.setEmenyRef(this.nodeList[2]);
    for (const node of this.nodeList) {
      if ((node.id + 1) % size != 0) this.Edges.addEdgeDirected(node.id, node.id + 1);
      if (node.id % size != 0) this.Edges.addEdgeDirected(node.id, node.id - 1);
      if (node.id + size < size * size) this.Edges.addEdgeDirected(node.id, node.id + size);
      if (node.id - size >= 0) this.Edges.addEdgeDirected(node.id, node.id - size);
    }

    createRectangleSegments( 10, 10, 100, 100).forEach(element => {
      this.Lines.push(element);
    });
    createRectangleSegments( 10, 150, 150, 100).forEach(element => {
      this.Lines.push(element);
    });
    createRectangleSegments( 150, 10, 100, 100).forEach(element => {
      this.Lines.push(element);
    });
    removeEdgesIfIntersected(this.Edges, this.nodeList, this.Lines);


  }

  /**
   * Connects all nodes to each other.
   */
  public connectAllNodes() {
    for (let i = 0; i < this.nodeList.length; i++) {
      for (let j = i + 1; j < this.nodeList.length; j++) {
        this.Edges.addEdgeDirected(this.nodeList[i].id, this.nodeList[j].id);
        this.Edges.addEdgeDirected(this.nodeList[j].id, this.nodeList[i].id);
      }
    }
  }

  /**
   * Connects nodes that are within a certain distance of each other.
   */
  public connectNearNodes() {
    for (let i = 0; i < this.nodeList.length; i++) {
      for (let j = i + 1; j < this.nodeList.length; j++) {
        if(this.getNodeDistance(this.nodeList[i], this.nodeList[j]) < 1000) {
          this.Edges.addEdgeDirected(this.nodeList[i].id, this.nodeList[j].id);
          this.Edges.addEdgeDirected(this.nodeList[j].id, this.nodeList[i].id);
        }
      }
    }
  }

  /**
   * Calculates the distance between two nodes.
   * @param node1 - The first node.
   * @param node2 - The second node.
   * @returns The distance between the two nodes.
   */
  public getNodeDistance(node1: node, node2: node): number {
    const dx = node1.x - node2.x;
    const dy = node1.y - node2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * Finds the closest node in a given direction from the origin node.
   * @param origin - The origin node.
   * @param angle - The angle in degrees.
   * @param distance - The distance to search.
   * @returns The closest node in the given direction, or null if no node is found.
   */
  public getNodeInDirection(origin: node, angle: number, distance: number): node | null {
    const targetX = origin.x + distance * Math.cos(angle);
    const targetY = origin.y + distance * Math.sin(angle);

    let closestNode: node | null = null;
    let minDistance = Infinity;

    for (const n of this.nodeList) {
      const dx = n.x - targetX;
      const dy = n.y - targetY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < minDistance) {
        minDistance = dist;
        closestNode = n;
      }
    }

    return closestNode;
  }

  /**
   * Sets the player reference to a new node.
   * @param newPlayer - The new player node.
   */
  public setPlayerRef(newPlayer: node): void {
    this.player.id = newPlayer.id;
    this.player.x = newPlayer.x;
    this.player.y = newPlayer.y;
  }

  /**
   * Sets the enemy reference to a new node.
   * @param newEmeny - The new enemy node.
   */
  public setEmenyRef(newEmeny: node): void {
    this.emeny.id = newEmeny.id;
    this.emeny.x = newEmeny.x;
    this.emeny.y = newEmeny.y;
  }

  /**
   * Connects nodes in a grid pattern.
   * @param size - The size of the grid.
   */
  public connectNodesInGrid(size: number) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let nodeId = i * size + j;
        if (j + 1 < size) this.Edges.addEdgeDirected(nodeId, nodeId + 1); // 右のノードに接続
        if (i + 1 < size) this.Edges.addEdgeDirected(nodeId, nodeId + size); // 下のノードに接続
      }
    }
  }

  /**
   * Gets nodes at a specific angle and distance from the center node.
   * @param centerNode - The center node.
   * @param angle - The angle in degrees.
   * @param distance - The distance to search.
   * @returns An array of nodes that are at the specified angle and distance from the center node.
   */
  public getNodesAtAngle(centerNode: node, angle: number, distance: number): node[] {
    return this.nodeList.filter(node => {
      const nodeAngle = this.getAngleBetweenNodes(centerNode, node);
      return Math.abs(nodeAngle - angle) < this.kakudo && this.getNodeDistance(centerNode, node) <= distance;
    });
  }

  /**
   * Calculates the angle between two nodes.
   * @param node1 - The first node.
   * @param node2 - The second node.
   * @returns The angle between the two nodes in degrees.
   */
  public getAngleBetweenNodes(node1: node, node2: node): number {
    const dx = node2.x - node1.x;
    const dy = node2.y - node1.y;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI); // ラジアンを度に変換
    return angle;
  }

  /**
   * Gets nodes that are connected to the target node.
   * @param targetNode - The target node.
   * @returns An array of nodes that are connected to the target node.
   */
  public getConnectedNodes(targetNode: node): node[] {
    const connectedNodes: node[] = [];
    const edges = this.Edges.List[targetNode.id];
    for (const nodeId of edges) {
      const connectedNode = this.nodeList.find(node => node.id === nodeId);
      if (connectedNode) {
        connectedNodes.push(connectedNode);
      }
    }
    return connectedNodes;
  }

  /**
   * Gets nodes that are connected to the center node and are at a specific angle and distance.
   * @param centerNode - The center node.
   * @param angle - The angle in degrees.
   * @param distance - The distance to search.
   * @returns An array of nodes that are connected to the center node and are at the specified angle and distance.
   */
  public getConnectedNodesAtAngle(centerNode: node, angle: number, distance: number): node[] {
    const connectedNodes = this.getConnectedNodes(centerNode);
    const targetVector = {
      x: Math.cos(angle * Math.PI / 180),
      y: Math.sin(angle * Math.PI / 180)
    };
  
    return connectedNodes.filter(node => {
      const nodeVector = {
        x: node.x - centerNode.x,
        y: node.y - centerNode.y
      };
      const nodeDistance = this.getNodeDistance(centerNode, node);
      const dotProduct = (nodeVector.x * targetVector.x + nodeVector.y * targetVector.y) / (nodeDistance * Math.sqrt(targetVector.x * targetVector.x + targetVector.y * targetVector.y));
      const nodeAngle = Math.acos(dotProduct) * (180 / Math.PI);
  
      return nodeAngle < this.kakudo && nodeDistance <= distance;
    });
  }
  /**

  *  Checks if two nodes are connected.
  *  @param node1 - The first node.
  *  @param node2 - The second node.
  *  @description - 2つのノードが接続されているかどうかを確認します。計算量はO(1)です。
  *  @returns True if the nodes are connected, otherwise false.
  */
  public areNodesConnected(node1: node, node2: node): boolean {
    return this.Edges.List[node1.id].includes(node2.id);
  }
  
}

export { Model };