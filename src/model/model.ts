import { Node } from './node';
import { Graph } from './Graph';
import { LineSegment } from './LineSegment';
import type { ObstacleData } from './ObstacleExporter';
import { MapConfig, PlayerConfig, TeamId } from '../config/GameConfig';
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

  constructor(generateObstacles: boolean = true) {
    this.initGrid(generateObstacles);
    this.initLocalPlayers();
  }

  /**
   * Initializes the grid: Nodes, edges, and optionally obstacles.
   * Called by the constructor and by LocalAdapter.
   * @param generateObstacles - If true (default), generates BSP map. If false, skips obstacle generation.
   *                            Used in online mode to allow server-provided obstacles.
   */
  public initGrid(generateObstacles: boolean = true): void {
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

    if (generateObstacles) {
      // BSP マップを生成（デフォルト）
      const bspResult = MapGenerator.generateComplexMap();
      this.lastSeed = bspResult.seed;
      this.obstacles = bspResult.obstacles;
      this.Lines = bspResult.lines;
      MapGenerator.applyObstaclesToGraph(this.Edges, this.nodeList, this.Lines);
    }
  }

  /**
   * Initializes local players (used in local-play mode).
   * In online mode this is replaced by applyServerState().
   */
  public initLocalPlayers(): void {
    const usedNodeIds = new Set<number>();

    for (let i = 0; i < LOCAL_PLAYER_COUNT && i < this.nodeList.length; i++) {
      const playerId = createPlayerId(i);
      const isNPC = i > 0;
      const team: TeamId = (i % 2) as TeamId;

      let nodeIndex: number;
      if (isNPC) {
        // NPC: pick a random unoccupied node
        do {
          nodeIndex = Math.floor(Math.random() * this.nodeList.length);
        } while (usedNodeIds.has(nodeIndex));
      } else {
        nodeIndex = i;
      }

      usedNodeIds.add(nodeIndex);
      this.players.set(playerId, new Player(playerId, this.nodeList[nodeIndex], team, 100, isNPC));
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
   * Returns the set of node IDs reachable from the given node within maxSteps.
   */
  public getReachableNodes(fromNodeId: number, maxSteps: number): Set<number> {
    return this.Edges.getReachableNodes(fromNodeId, maxSteps);
  }

  /**
   * Returns the shortest path (node ID array) from fromNodeId to toNodeId, or null if unreachable.
   */
  public getPathToNode(fromNodeId: number, toNodeId: number, maxSteps: number): number[] | null {
    return this.Edges.getShortestPath(fromNodeId, toNodeId, maxSteps);
  }

  /**
   * Returns all alive players on the opposing team(s) of the given player.
   */
  public getEnemyPlayers(playerId: string): Player[] {
    const self = this.players.get(playerId);
    if (!self) return [];
    return Array.from(this.players.values())
      .filter(p => p.team !== self.team && p.isAlive);
  }

  /**
   * Returns the union of all nodes visible by any alive teammate of the given player.
   * Used for shared team fog-of-war.
   */
  public getTeamVisibleNodes(playerId: string): Set<number> {
    const player = this.players.get(playerId);
    if (!player) return new Set();

    const visibleIds = new Set<number>();
    visibleIds.add(player.node.id);

    for (const [, teammate] of this.players) {
      if (!teammate.isAlive) continue;
      if (teammate.team !== player.team) continue;

      const nodes = this.getVisibleNodesAtAngle(
        teammate.node, teammate.angle, PlayerConfig.MaxViewDistance,
      );
      for (const n of nodes) visibleIds.add(n.id);
      visibleIds.add(teammate.node.id);
    }

    return visibleIds;
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


}

export { Model };