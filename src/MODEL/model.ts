import { node } from './node';
import { Graph } from './Graph';
import { LineSegment } from './LineSegment';
import type { ObstacleData } from './ObstacleExporter';
import { MapConfig, PlayerConfig } from '../config/GameConfig';
import { MapGenerator } from './MapGenerator';

class Model {
  public nodeList: node[] = [];
  public player: node = new node;
  public emeny: node = new node;
  public Edges: Graph = new Graph();
  private kakudo: number = PlayerConfig.ViewAngle;
  private NodesInGridSize: number = MapConfig.NodesInGridSize;
  public Lines: LineSegment[] = [];
  private obstacles: ObstacleData[] = [];

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
        tmp.x = i * MapConfig.NodeSpacing;
        tmp.y = j * MapConfig.NodeSpacing;

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

    // ランダムな障害物を生成
    this.generateRandomObstaclesInternal();


  }

  /**
   * Connects nodes that are within a certain distance of each other.
   */
  private connectNearNodes() {
    for (let i = 0; i < this.nodeList.length; i++) {
      for (let j = i + 1; j < this.nodeList.length; j++) {
        if(this.getNodeDistance(this.nodeList[i], this.nodeList[j]) < PlayerConfig.MaxViewDistance) {
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
   * Checks if there is a clear line of sight between two nodes (no obstacles blocking).
   * @param node1 - The first node.
   * @param node2 - The second node.
   * @returns True if there is a clear line of sight, false if blocked by obstacles.
   */
  public hasLineOfSight(node1: node, node2: node): boolean {
    const p1 = { x: node1.x, y: node1.y };
    const p2 = { x: node2.x, y: node2.y };

    // Check if the line between nodes intersects with any obstacle segments
    for (const segment of this.Lines) {
      if (segment.intersects(p1, p2)) {
        return false; // Line of sight is blocked
      }
    }

    return true; // Clear line of sight
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
   * Gets all nodes within angle and distance from center node, using line-of-sight check.
   * This method checks visibility based on obstacles, not just graph connectivity.
   * @param centerNode - The center node.
   * @param angle - The angle in degrees.
   * @param distance - The distance to search.
   * @returns An array of nodes that are visible from the center node.
   */
  public getVisibleNodesAtAngle(centerNode: node, angle: number, distance: number): node[] {
    const targetVector = {
      x: Math.cos(angle * Math.PI / 180),
      y: Math.sin(angle * Math.PI / 180)
    };

    return this.nodeList.filter(node => {
      // Skip the center node itself
      if (node.id === centerNode.id) return false;

      const nodeVector = {
        x: node.x - centerNode.x,
        y: node.y - centerNode.y
      };
      const nodeDistance = this.getNodeDistance(centerNode, node);

      // Check distance
      if (nodeDistance > distance) return false;

      // Check angle
      const dotProduct = (nodeVector.x * targetVector.x + nodeVector.y * targetVector.y) / (nodeDistance * Math.sqrt(targetVector.x * targetVector.x + targetVector.y * targetVector.y));
      const nodeAngle = Math.acos(Math.max(-1, Math.min(1, dotProduct))) * (180 / Math.PI);

      if (nodeAngle >= this.kakudo) return false;

      // Check line of sight
      return this.hasLineOfSight(centerNode, node);
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

  /**
   * Gets the obstacles data
   * @returns Array of obstacle data
   */
  public getObstacles(): ObstacleData[] {
    return [...this.obstacles];
  }

  /**
   * Resets the graph edges to the original grid state.
   * Clears all existing edges and rebuilds the grid connectivity.
   */
  private resetGraphEdges(): void {
    // Reset edges to original state
    this.Edges = new Graph();
    for (let i = 0; i < this.nodeList.length; i++) {
      this.Edges.addVertex(i);
    }

    const size = this.NodesInGridSize;
    for (const node of this.nodeList) {
      if ((node.id + 1) % size != 0) this.Edges.addEdgeDirected(node.id, node.id + 1);
      if (node.id % size != 0) this.Edges.addEdgeDirected(node.id, node.id - 1);
      if (node.id + size < size * size) this.Edges.addEdgeDirected(node.id, node.id + size);
      if (node.id - size >= 0) this.Edges.addEdgeDirected(node.id, node.id - size);
    }
  }

  /**
   * Internal method to generate random obstacles without resetting edges.
   * Used during initialization.
   */
  private generateRandomObstaclesInternal(): void {
    const result = MapGenerator.generateRandomObstacles();
    this.obstacles = result.obstacles;
    this.Lines = result.lines;

    // Remove edges that intersect with obstacles
    MapGenerator.applyObstaclesToGraph(this.Edges, this.nodeList, this.Lines);
  }

  /**
   * Generates random obstacles on the map and resets edges.
   * This method is called when regenerating obstacles during gameplay.
   * @param count - Number of obstacles to generate
   * @param minWidth - Minimum width of obstacles
   * @param maxWidth - Maximum width of obstacles
   * @param minHeight - Minimum height of obstacles
   * @param maxHeight - Maximum height of obstacles
   */
  public generateRandomObstacles(
    count?: number,
    minWidth?: number,
    maxWidth?: number,
    minHeight?: number,
    maxHeight?: number
  ): void {
    // Reset edges to original state
    this.resetGraphEdges();

    // Generate random obstacles using MapGenerator
    const result = MapGenerator.generateRandomObstacles(count, minWidth, maxWidth, minHeight, maxHeight);
    this.obstacles = result.obstacles;
    this.Lines = result.lines;

    // Remove edges that intersect with obstacles
    MapGenerator.applyObstaclesToGraph(this.Edges, this.nodeList, this.Lines);
  }

  /**
   * Imports obstacles from obstacle data and resets edges.
   * @param obstaclesData - Array of obstacle data to import
   */
  public importObstacles(obstaclesData: ObstacleData[]): void {
    // Reset edges to original state
    this.resetGraphEdges();

    // Import obstacles using MapGenerator
    const result = MapGenerator.importObstacles(obstaclesData);
    this.obstacles = result.obstacles;
    this.Lines = result.lines;

    // Remove edges that intersect with obstacles
    MapGenerator.applyObstaclesToGraph(this.Edges, this.nodeList, this.Lines);
  }

  /**
   * Generates a complex map with various obstacle patterns.
   * Patterns include: maze-like corridors, rooms, scattered obstacles, and strategic cover points.
   */
  public generateComplexMap(): void {
    // Reset edges to original state
    this.resetGraphEdges();

    // Generate complex map using MapGenerator
    const result = MapGenerator.generateComplexMap();
    this.obstacles = result.obstacles;
    this.Lines = result.lines;

    // Remove edges that intersect with obstacles
    MapGenerator.applyObstaclesToGraph(this.Edges, this.nodeList, this.Lines);
  }

}

export { Model };