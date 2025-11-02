import { node } from './node';
import { Graph } from './Graph';
import { createRectangleSegments, LineSegment, removeEdgesIfIntersected } from './LineSegment';
import type { ObstacleData } from './ObstacleExporter';
import { MapConfig, PlayerConfig, ObstacleConfig, ComplexMapConfig, CalculatedConfig } from '../config/GameConfig';

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
   * @param count - Number of obstacles to generate (default: 3)
   * @param minWidth - Minimum width of obstacles (default: 60)
   * @param maxWidth - Maximum width of obstacles (default: 150)
   * @param minHeight - Minimum height of obstacles (default: 60)
   * @param maxHeight - Maximum height of obstacles (default: 150)
   */
  private generateRandomObstaclesInternal(
    count: number = ObstacleConfig.DefaultCount,
    minWidth: number = ObstacleConfig.MinWidth,
    maxWidth: number = ObstacleConfig.MaxWidth,
    minHeight: number = ObstacleConfig.MinHeight,
    maxHeight: number = ObstacleConfig.MaxHeight
  ): void {
    // Calculate map boundaries
    const mapSize = CalculatedConfig.MapSize;
    const margin = MapConfig.ObstacleMargin; // Minimum distance from map edges

    // Generate random obstacles
    for (let i = 0; i < count; i++) {
      const width = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
      const height = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

      // Ensure obstacles don't overlap with edges
      const x = Math.floor(Math.random() * (mapSize - width - margin * 2)) + margin;
      const y = Math.floor(Math.random() * (mapSize - height - margin * 2)) + margin;

      const obstacleSegments = createRectangleSegments(x, y, width, height);
      this.obstacles.push({ id: i + 1, segments: obstacleSegments });

      obstacleSegments.forEach(element => {
        this.Lines.push(element);
      });
    }

    // Remove edges that intersect with obstacles
    removeEdgesIfIntersected(this.Edges, this.nodeList, this.Lines);
  }

  /**
   * Generates random obstacles on the map and resets edges.
   * This method is called when regenerating obstacles during gameplay.
   * @param count - Number of obstacles to generate (default: 3)
   * @param minWidth - Minimum width of obstacles (default: 60)
   * @param maxWidth - Maximum width of obstacles (default: 150)
   * @param minHeight - Minimum height of obstacles (default: 60)
   * @param maxHeight - Maximum height of obstacles (default: 150)
   */
  public generateRandomObstacles(
    count: number = ObstacleConfig.DefaultCount,
    minWidth: number = ObstacleConfig.MinWidth,
    maxWidth: number = ObstacleConfig.MaxWidth,
    minHeight: number = ObstacleConfig.MinHeight,
    maxHeight: number = ObstacleConfig.MaxHeight
  ): void {
    // Clear existing obstacles
    this.Lines = [];
    this.obstacles = [];

    // Reset edges to original state
    this.resetGraphEdges();

    // Generate random obstacles using internal method
    this.generateRandomObstaclesInternal(count, minWidth, maxWidth, minHeight, maxHeight);
  }

  /**
   * Imports obstacles from obstacle data and resets edges.
   * @param obstaclesData - Array of obstacle data to import
   */
  public importObstacles(obstaclesData: ObstacleData[]): void {
    // Clear existing obstacles
    this.Lines = [];
    this.obstacles = [];

    // Reset edges to original state
    this.resetGraphEdges();

    // Import obstacles from data
    for (const obstacleData of obstaclesData) {
      const segments: LineSegment[] = [];

      for (const segmentData of obstacleData.segments) {
        const segment = new LineSegment(
          segmentData.start.x,
          segmentData.start.y,
          segmentData.end.x,
          segmentData.end.y
        );
        segments.push(segment);
        this.Lines.push(segment);
      }

      this.obstacles.push({
        id: obstacleData.id,
        segments: segments
      });
    }

    // Remove edges that intersect with obstacles
    removeEdgesIfIntersected(this.Edges, this.nodeList, this.Lines);
  }

  /**
   * Generates a complex map with various obstacle patterns.
   * Patterns include: maze-like corridors, rooms, scattered obstacles, and strategic cover points.
   */
  public generateComplexMap(): void {
    // Clear existing obstacles
    this.Lines = [];
    this.obstacles = [];

    // Reset edges to original state
    this.resetGraphEdges();

    const mapSize = CalculatedConfig.MapSize;
    let obstacleId = 1;

    // Choose a random map pattern
    const patterns = ['maze', 'rooms', 'scattered', 'symmetric', 'corridors'];
    const selectedPattern = patterns[Math.floor(Math.random() * patterns.length)];

    switch (selectedPattern) {
      case 'maze':
        // Maze-like pattern with multiple walls
        this.generateMazePattern(obstacleId, mapSize);
        break;

      case 'rooms':
        // Multiple rooms with doorways
        this.generateRoomsPattern(obstacleId, mapSize);
        break;

      case 'scattered':
        // Scattered cover points
        this.generateScatteredPattern(obstacleId, mapSize);
        break;

      case 'symmetric':
        // Symmetric obstacle placement
        this.generateSymmetricPattern(obstacleId, mapSize);
        break;

      case 'corridors':
        // Long corridors with intersections
        this.generateCorridorsPattern(obstacleId, mapSize);
        break;
    }

    // Remove edges that intersect with obstacles
    removeEdgesIfIntersected(this.Edges, this.nodeList, this.Lines);
  }

  /**
   * Generates a maze-like pattern
   */
  private generateMazePattern(startId: number, mapSize: number): void {
    let id = startId;
    const wallThickness = ObstacleConfig.WallThickness;

    // Horizontal walls
    for (let i = 0; i < ComplexMapConfig.MazeHorizontalWalls; i++) {
      const y = ComplexMapConfig.MazeBaseOffset + i * ComplexMapConfig.MazeWallSpacing;
      const startX = ComplexMapConfig.MazeRandomOffsetStart + Math.random() * ComplexMapConfig.MazeRandomOffsetRange;
      const width = ComplexMapConfig.MazeMinWallLength + Math.random() * ComplexMapConfig.MazeRandomWallLengthRange;

      const segments = createRectangleSegments(startX, y, width, wallThickness);
      this.obstacles.push({ id: id++, segments });
      segments.forEach(s => this.Lines.push(s));
    }

    // Vertical walls
    for (let i = 0; i < ComplexMapConfig.MazeVerticalWalls; i++) {
      const x = ComplexMapConfig.MazeBaseOffset + i * ComplexMapConfig.MazeWallSpacing;
      const startY = ComplexMapConfig.MazeRandomOffsetStart + Math.random() * ComplexMapConfig.MazeRandomOffsetRange;
      const height = ComplexMapConfig.MazeMinWallLength + Math.random() * ComplexMapConfig.MazeRandomWallLengthRange;

      const segments = createRectangleSegments(x, startY, wallThickness, height);
      this.obstacles.push({ id: id++, segments });
      segments.forEach(s => this.Lines.push(s));
    }
  }

  /**
   * Generates rooms with doorways
   */
  private generateRoomsPattern(startId: number, mapSize: number): void {
    let id = startId;
    const roomCount = ComplexMapConfig.RoomCount;

    for (let i = 0; i < roomCount; i++) {
      const roomX = ComplexMapConfig.RoomBaseOffset + (i % 2) * ComplexMapConfig.RoomSpacingMultiplier;
      const roomY = ComplexMapConfig.RoomBaseOffset + Math.floor(i / 2) * ComplexMapConfig.RoomSpacingMultiplier;
      const roomWidth = ComplexMapConfig.RoomWidth;
      const roomHeight = ComplexMapConfig.RoomHeight;
      const wallThickness = ObstacleConfig.RoomWallThickness;
      const doorWidth = ObstacleConfig.RoomDoorWidth;

      // Top wall with doorway
      const topLeftWidth = (roomWidth - doorWidth) / 2;
      const topRightStart = roomX + topLeftWidth + doorWidth;
      const topRightWidth = roomWidth - topLeftWidth - doorWidth;

      this.obstacles.push({ id: id++, segments: createRectangleSegments(roomX, roomY, topLeftWidth, wallThickness) });
      this.Lines.push(...this.obstacles[this.obstacles.length - 1].segments);

      this.obstacles.push({ id: id++, segments: createRectangleSegments(topRightStart, roomY, topRightWidth, wallThickness) });
      this.Lines.push(...this.obstacles[this.obstacles.length - 1].segments);

      // Right wall
      this.obstacles.push({ id: id++, segments: createRectangleSegments(roomX + roomWidth - wallThickness, roomY, wallThickness, roomHeight) });
      this.Lines.push(...this.obstacles[this.obstacles.length - 1].segments);

      // Bottom wall
      this.obstacles.push({ id: id++, segments: createRectangleSegments(roomX, roomY + roomHeight - wallThickness, roomWidth, wallThickness) });
      this.Lines.push(...this.obstacles[this.obstacles.length - 1].segments);

      // Left wall with doorway
      const leftTopHeight = (roomHeight - doorWidth) / 2;
      const leftBottomStart = roomY + leftTopHeight + doorWidth;
      const leftBottomHeight = roomHeight - leftTopHeight - doorWidth;

      this.obstacles.push({ id: id++, segments: createRectangleSegments(roomX, roomY, wallThickness, leftTopHeight) });
      this.Lines.push(...this.obstacles[this.obstacles.length - 1].segments);

      this.obstacles.push({ id: id++, segments: createRectangleSegments(roomX, leftBottomStart, wallThickness, leftBottomHeight) });
      this.Lines.push(...this.obstacles[this.obstacles.length - 1].segments);
    }
  }

  /**
   * Generates scattered cover points
   */
  private generateScatteredPattern(startId: number, mapSize: number): void {
    let id = startId;
    const coverCount = ComplexMapConfig.ScatteredMinCount + Math.floor(Math.random() * ComplexMapConfig.ScatteredRandomCountRange);

    for (let i = 0; i < coverCount; i++) {
      const width = ComplexMapConfig.ScatteredMinSize + Math.random() * ComplexMapConfig.ScatteredRandomSizeRange;
      const height = ComplexMapConfig.ScatteredMinSize + Math.random() * ComplexMapConfig.ScatteredRandomSizeRange;
      const x = ComplexMapConfig.ScatteredBaseOffset + Math.random() * (mapSize - width - ComplexMapConfig.ScatteredSpacingBuffer);
      const y = ComplexMapConfig.ScatteredBaseOffset + Math.random() * (mapSize - height - ComplexMapConfig.ScatteredSpacingBuffer);

      const segments = createRectangleSegments(x, y, width, height);
      this.obstacles.push({ id: id++, segments });
      segments.forEach(s => this.Lines.push(s));
    }
  }

  /**
   * Generates symmetric obstacle placement
   */
  private generateSymmetricPattern(startId: number, mapSize: number): void {
    let id = startId;
    const centerX = mapSize / 2;
    const centerY = mapSize / 2;
    const obstacleCount = ComplexMapConfig.SymmetricObstacleCount;

    for (let i = 0; i < obstacleCount; i++) {
      const width = ComplexMapConfig.SymmetricMinSize + Math.random() * ComplexMapConfig.SymmetricRandomSizeRange;
      const height = ComplexMapConfig.SymmetricMinSize + Math.random() * ComplexMapConfig.SymmetricRandomSizeRange;
      const offsetX = ComplexMapConfig.SymmetricMinOffset + Math.random() * ComplexMapConfig.SymmetricRandomOffsetRange;
      const offsetY = ComplexMapConfig.SymmetricMinOffset + Math.random() * ComplexMapConfig.SymmetricRandomOffsetRange;

      // Four symmetric positions
      const positions = [
        { x: centerX + offsetX, y: centerY + offsetY },
        { x: centerX - offsetX - width, y: centerY + offsetY },
        { x: centerX + offsetX, y: centerY - offsetY - height },
        { x: centerX - offsetX - width, y: centerY - offsetY - height }
      ];

      positions.forEach(pos => {
        if (pos.x >= MapConfig.ObstacleMargin && pos.y >= MapConfig.ObstacleMargin && pos.x + width <= mapSize - MapConfig.ObstacleMargin && pos.y + height <= mapSize - MapConfig.ObstacleMargin) {
          const segments = createRectangleSegments(pos.x, pos.y, width, height);
          this.obstacles.push({ id: id++, segments });
          segments.forEach(s => this.Lines.push(s));
        }
      });
    }

    // Central obstacle
    const centralSize = ComplexMapConfig.SymmetricCentralMinSize + Math.random() * ComplexMapConfig.SymmetricCentralRandomSizeRange;
    const centralSegments = createRectangleSegments(centerX - centralSize / 2, centerY - centralSize / 2, centralSize, centralSize);
    this.obstacles.push({ id: id++, segments: centralSegments });
    centralSegments.forEach(s => this.Lines.push(s));
  }

  /**
   * Generates corridors with intersections
   */
  private generateCorridorsPattern(startId: number, mapSize: number): void {
    let id = startId;
    const wallThickness = ObstacleConfig.CorridorWallThickness;

    // Main cross corridors
    const corridorWidth = ObstacleConfig.CorridorWidth;
    const centerX = mapSize / 2;
    const centerY = mapSize / 2;

    // Vertical corridor walls
    const vLeftX = centerX - corridorWidth / 2;
    const vRightX = centerX + corridorWidth / 2;

    this.obstacles.push({ id: id++, segments: createRectangleSegments(vLeftX - wallThickness, MapConfig.ObstacleMargin, wallThickness, mapSize - MapConfig.ObstacleMargin * 2) });
    this.Lines.push(...this.obstacles[this.obstacles.length - 1].segments);

    this.obstacles.push({ id: id++, segments: createRectangleSegments(vRightX, MapConfig.ObstacleMargin, wallThickness, mapSize - MapConfig.ObstacleMargin * 2) });
    this.Lines.push(...this.obstacles[this.obstacles.length - 1].segments);

    // Horizontal corridor walls
    const hTopY = centerY - corridorWidth / 2;
    const hBottomY = centerY + corridorWidth / 2;

    this.obstacles.push({ id: id++, segments: createRectangleSegments(MapConfig.ObstacleMargin, hTopY - wallThickness, mapSize - MapConfig.ObstacleMargin * 2, wallThickness) });
    this.Lines.push(...this.obstacles[this.obstacles.length - 1].segments);

    this.obstacles.push({ id: id++, segments: createRectangleSegments(MapConfig.ObstacleMargin, hBottomY, mapSize - MapConfig.ObstacleMargin * 2, wallThickness) });
    this.Lines.push(...this.obstacles[this.obstacles.length - 1].segments);

    // Add some obstacles in the quadrants
    const quadrantObstacles = ComplexMapConfig.CorridorsQuadrantObstacles;
    for (let i = 0; i < quadrantObstacles; i++) {
      const quadrant = i % 4;
      let qx, qy;

      switch (quadrant) {
        case 0: qx = ComplexMapConfig.CorridorsQuadrantBasePosition; qy = ComplexMapConfig.CorridorsQuadrantBasePosition; break;
        case 1: qx = mapSize - ComplexMapConfig.CorridorsQuadrantOppositeOffset; qy = ComplexMapConfig.CorridorsQuadrantBasePosition; break;
        case 2: qx = ComplexMapConfig.CorridorsQuadrantBasePosition; qy = mapSize - ComplexMapConfig.CorridorsQuadrantOppositeOffset; break;
        case 3: qx = mapSize - ComplexMapConfig.CorridorsQuadrantOppositeOffset; qy = mapSize - ComplexMapConfig.CorridorsQuadrantOppositeOffset; break;
        default: qx = ComplexMapConfig.CorridorsQuadrantBasePosition; qy = ComplexMapConfig.CorridorsQuadrantBasePosition;
      }

      const segments = createRectangleSegments(qx, qy, ComplexMapConfig.CorridorsQuadrantMinSize + Math.random() * ComplexMapConfig.CorridorsQuadrantRandomSizeRange, ComplexMapConfig.CorridorsQuadrantMinSize + Math.random() * ComplexMapConfig.CorridorsQuadrantRandomSizeRange);
      this.obstacles.push({ id: id++, segments });
      segments.forEach(s => this.Lines.push(s));
    }
  }

}

export { Model };