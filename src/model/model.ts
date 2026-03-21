import { Node } from './node';
import { Graph } from './Graph';
import { LineSegment } from './LineSegment';
import type { ObstacleData } from './ObstacleExporter';
import { MapConfig, PlayerConfig } from '../config/GameConfig';
import { LOCAL_PLAYER_COUNT, createPlayerId } from '../config/GameConstants';
import { MapGenerator } from './MapGenerator';
import { Player } from './Player';

class Model {
  public nodeList: Node[] = [];
  public players: Map<string, Player> = new Map();
  public Edges: Graph = new Graph();
  private viewAngle: number = PlayerConfig.ViewAngle;
  private NodesInGridSize: number = MapConfig.NodesInGridSize;
  public Lines: LineSegment[] = [];
  private obstacles: ObstacleData[] = [];
  private lastSeed: string = '';

  public getLastSeed(): string {
    return this.lastSeed;
  }

  constructor() {
    this.initGrid();
    this.initLocalPlayers();
  }

  /**
   * Initializes the grid: Nodes, edges, and obstacles.
   * Called by the constructor and by LocalAdapter.
   */
  public initGrid(): void {
    const size = this.NodesInGridSize;
    let count = 0;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const tmp = new Node(count, i * MapConfig.NodeSpacing, j * MapConfig.NodeSpacing);

        this.nodeList.push(tmp);
        this.Edges.addVertex(count);
        count++;
      }
    }
    this.addDirectionalEdges();

    // ランダムな障害物を生成
    this.generateRandomObstaclesInternal();
  }

  /**
   * Initializes local players (used in local-play mode).
   * In online mode this is replaced by applyServerState().
   */
  public initLocalPlayers(): void {
    const playerColors = this.generatePlayerColors(LOCAL_PLAYER_COUNT);
    for (let i = 0; i < LOCAL_PLAYER_COUNT && i < this.nodeList.length; i++) {
      const playerId = createPlayerId(i);
      this.players.set(playerId, new Player(playerId, this.nodeList[i], playerColors[i]));
    }
  }

  /**
   * Calculates the distance between two nodes.
   * @param node1 - The first node.
   * @param node2 - The second node.
   * @returns The distance between the two nodes.
   */
  public getNodeDistance(node1: Node, node2: Node): number {
    const dx = node1.x - node2.x;
    const dy = node1.y - node2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * Sets the player reference to a new node.
   * @param playerId - The player ID.
   * @param newNode - The new node.
   */
  public setPlayerRef(playerId: string, newNode: Node): void {
    const player = this.players.get(playerId);
    if (player) {
      player.setNode(newNode);
    }
  }

  /**
   * Gets a player by ID.
   * @param playerId - The player ID.
   * @returns The player object or undefined.
   */
  public getPlayer(playerId: string): Player | undefined {
    return this.players.get(playerId);
  }

  /**
   * Calculates the angle between two nodes.
   * @param node1 - The first node.
   * @param node2 - The second node.
   * @returns The angle between the two nodes in degrees.
   */
  public getAngleBetweenNodes(node1: Node, node2: Node): number {
    const dx = node2.x - node1.x;
    const dy = node2.y - node1.y;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI); // Convert radians to degrees
    return angle;
  }

  /**
   * Checks if there is a clear line of sight between two nodes (no obstacles blocking).
   * @param node1 - The first node.
   * @param node2 - The second node.
   * @returns True if there is a clear line of sight, false if blocked by obstacles.
   */
  public hasLineOfSight(node1: Node, node2: Node): boolean {
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
   * Calculates the angle (in degrees) between a direction vector and a node relative to a center node.
   * Uses dot product formula; clamps to [-1, 1] to guard against floating-point errors.
   */
  private getAngleFromDirection(
    centerNode: Node,
    targetNode: Node,
    dirX: number,
    dirY: number
  ): number {
    const dx = targetNode.x - centerNode.x;
    const dy = targetNode.y - centerNode.y;
    const nodeDistance = this.getNodeDistance(centerNode, targetNode);
    if (nodeDistance === 0) return 0;
    const dot = (dx * dirX + dy * dirY) / nodeDistance;
    return Math.acos(Math.max(-1, Math.min(1, dot))) * (180 / Math.PI);
  }

  /**
   * Gets all nodes within angle and distance from center node, using line-of-sight check.
   * This method checks visibility based on obstacles, not just graph connectivity.
   * @param centerNode - The center node.
   * @param angle - The angle in degrees.
   * @param distance - The distance to search.
   * @returns An array of nodes that are visible from the center node.
   */
  public getVisibleNodesAtAngle(centerNode: Node, angle: number, distance: number): Node[] {
    const dirX = Math.cos(angle * Math.PI / 180);
    const dirY = Math.sin(angle * Math.PI / 180);
    const gridSize = this.NodesInGridSize;
    const spacing = MapConfig.NodeSpacing;

    // グリッド座標を算出（initGrid: id = col * gridSize + row）
    const centerCol = Math.floor(centerNode.id / gridSize);
    const centerRow = centerNode.id % gridSize;
    const maxSteps = Math.ceil(distance / spacing);

    // 視野範囲のバウンディングボックス内のノードだけを走査
    const colMin = Math.max(0, centerCol - maxSteps);
    const colMax = Math.min(gridSize - 1, centerCol + maxSteps);
    const rowMin = Math.max(0, centerRow - maxSteps);
    const rowMax = Math.min(gridSize - 1, centerRow + maxSteps);

    const result: Node[] = [];
    for (let c = colMin; c <= colMax; c++) {
      for (let r = rowMin; r <= rowMax; r++) {
        const nodeId = c * gridSize + r;
        if (nodeId === centerNode.id) continue;

        const node = this.nodeList[nodeId];
        const nodeDistance = this.getNodeDistance(centerNode, node);
        if (nodeDistance > distance) continue;

        const nodeAngle = this.getAngleFromDirection(centerNode, node, dirX, dirY);
        if (nodeAngle >= this.viewAngle) continue;

        if (this.hasLineOfSight(centerNode, node)) {
          result.push(node);
        }
      }
    }
    return result;
  }
  /**

  *  Checks if two nodes are connected.
  *  @param node1 - The first node.
  *  @param node2 - The second node.
  *  @description - 2つのノードが接続されているかどうかを確認します。計算量はO(1)です。
  *  @returns True if the nodes are connected, otherwise false.
  */
  public areNodesConnected(node1: Node, node2: Node): boolean {
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

    this.addDirectionalEdges();
  }

  /**
   * Adds directed edges for the 4 cardinal directions between grid nodes.
   * Shared by initGrid() and resetGraphEdges().
   */
  private addDirectionalEdges(): void {
    const size = this.NodesInGridSize;
    for (const node of this.nodeList) {
      if ((node.id + 1) % size != 0) this.Edges.addEdgeDirected(node.id, node.id + 1);
      if (node.id % size != 0)       this.Edges.addEdgeDirected(node.id, node.id - 1);
      if (node.id + size < size * size) this.Edges.addEdgeDirected(node.id, node.id + size);
      if (node.id - size >= 0)       this.Edges.addEdgeDirected(node.id, node.id - size);
    }
  }

  /**
   * Internal method to generate random obstacles without resetting edges.
   * Used during initialization.
   */
  private generateRandomObstaclesInternal(): void {
    const result = MapGenerator.generateRandomObstacles();
    this.lastSeed = result.seed;
    this.obstacles = result.obstacles;
    this.Lines = result.lines;

    // Remove edges that intersect with obstacles
    MapGenerator.applyObstaclesToGraph(this.Edges, this.nodeList, this.Lines);
  }

  /**
   * Applies a generated obstacle layout: resets edges, stores results, removes blocked edges.
   */
  private applyObstacleLayout(result: { obstacles: ObstacleData[]; lines: LineSegment[] }): void {
    this.resetGraphEdges();
    this.obstacles = result.obstacles;
    this.Lines = result.lines;
    MapGenerator.applyObstaclesToGraph(this.Edges, this.nodeList, this.Lines);
  }

  /**
   * Generates random obstacles on the map and resets edges.
   * This method is called when regenerating obstacles during gameplay.
   */
  public generateRandomObstacles(
    count?: number,
    minWidth?: number,
    maxWidth?: number,
    minHeight?: number,
    maxHeight?: number,
    seed?: string
  ): void {
    const result = MapGenerator.generateRandomObstacles(count, minWidth, maxWidth, minHeight, maxHeight, seed);
    this.lastSeed = result.seed;
    this.applyObstacleLayout(result);
  }

  /**
   * Imports obstacles from obstacle data and resets edges.
   * @param obstaclesData - Array of obstacle data to import
   */
  public importObstacles(obstaclesData: ObstacleData[]): void {
    this.applyObstacleLayout(MapGenerator.importObstacles(obstaclesData));
  }

  /**
   * Generates a complex map with various obstacle patterns.
   * Patterns include: maze-like corridors, rooms, scattered obstacles, and strategic cover points.
   */
  public generateComplexMap(seed?: string): void {
    const result = MapGenerator.generateComplexMap(seed);
    this.lastSeed = result.seed;
    this.applyObstacleLayout(result);
  }

  /**
   * Generates evenly distributed colors for players using HSL color space
   * @param count - Number of colors to generate
   * @returns Array of hex color values
   */
  private generatePlayerColors(count: number): number[] {
    const colors: number[] = [];
    for (let i = 0; i < count; i++) {
      const hue = (i / count) * 360;
      colors.push(this.hslToHex(hue, 100, 50));
    }
    return colors;
  }

  /**
   * Converts HSL color values to hex color
   * @param h - Hue (0-360)
   * @param s - Saturation (0-100)
   * @param l - Lightness (0-100)
   * @returns Hex color value
   */
  private hslToHex(h: number, s: number, l: number): number {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }

    const ri = Math.round((r + m) * 255);
    const gi = Math.round((g + m) * 255);
    const bi = Math.round((b + m) * 255);

    return (ri << 16) | (gi << 8) | bi;
  }

}

export { Model };