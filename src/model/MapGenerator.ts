import { Graph } from './Graph';
import { Node } from './node';
import { createRectangleSegments, LineSegment, removeEdgesIfIntersected } from './LineSegment';
import type { ObstacleData } from './ObstacleExporter';
import { MapConfig, ObstacleConfig, ComplexMapConfig, CalculatedConfig } from '../config/GameConfig';

/**
 * MapGenerator class handles all map and obstacle generation logic.
 * This class is responsible for creating various map patterns and obstacle configurations.
 */
export class MapGenerator {
  /** FNV-1a: 文字列 → uint32 */
  private static hashString(seed: string): number {
    let h = 2166136261;
    for (let i = 0; i < seed.length; i++) {
      h ^= seed.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return h >>> 0;
  }

  /** mulberry32: uint32 → () => float [0,1) */
  private static makePrng(seed: number): () => number {
    let s = seed >>> 0;
    return () => {
      s += 0x6D2B79F5;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /** ランダムなシード文字列を生成する（唯一の Math.random() 呼び出し） */
  public static generateSeed(): string {
    return String(Math.floor(Math.random() * 0xFFFFFFFF));
  }

  /**
   * Generates random obstacles on the map.
   * @param count - Number of obstacles to generate
   * @param minWidth - Minimum width of obstacles
   * @param maxWidth - Maximum width of obstacles
   * @param minHeight - Minimum height of obstacles
   * @param maxHeight - Maximum height of obstacles
   * @param seed - Optional seed string for reproducible generation
   * @returns Object containing generated obstacles, line segments, and used seed
   */
  public static generateRandomObstacles(
    count: number = ObstacleConfig.DefaultCount,
    minWidth: number = ObstacleConfig.MinWidth,
    maxWidth: number = ObstacleConfig.MaxWidth,
    minHeight: number = ObstacleConfig.MinHeight,
    maxHeight: number = ObstacleConfig.MaxHeight,
    seed?: string
  ): { obstacles: ObstacleData[], lines: LineSegment[], seed: string } {
    const resolvedSeed = seed ?? MapGenerator.generateSeed();
    const rng = MapGenerator.makePrng(MapGenerator.hashString(resolvedSeed));
    const obstacles: ObstacleData[] = [];
    const lines: LineSegment[] = [];

    // Calculate map boundaries
    const mapSize = CalculatedConfig.MapSize;
    const margin = MapConfig.ObstacleMargin; // Minimum distance from map edges

    // Generate random obstacles
    for (let i = 0; i < count; i++) {
      const width = Math.floor(rng() * (maxWidth - minWidth + 1)) + minWidth;
      const height = Math.floor(rng() * (maxHeight - minHeight + 1)) + minHeight;

      // Ensure obstacles don't overlap with edges
      const x = Math.floor(rng() * (mapSize - width - margin * 2)) + margin;
      const y = Math.floor(rng() * (mapSize - height - margin * 2)) + margin;

      const obstacleSegments = createRectangleSegments(x, y, width, height);
      obstacles.push({ id: i + 1, segments: obstacleSegments });

      obstacleSegments.forEach(element => {
        lines.push(element);
      });
    }

    return { obstacles, lines, seed: resolvedSeed };
  }

  /**
   * Generates a complex map with various obstacle patterns.
   * Patterns include: maze-like corridors, rooms, scattered obstacles, and strategic cover points.
   * @returns Object containing generated obstacles, line segments, and pattern name
   */
  public static generateComplexMap(seed?: string): { obstacles: ObstacleData[], lines: LineSegment[], pattern: string, seed: string } {
    const resolvedSeed = seed ?? MapGenerator.generateSeed();
    const rng = MapGenerator.makePrng(MapGenerator.hashString(resolvedSeed));

    const obstacles: ObstacleData[] = [];
    const lines: LineSegment[] = [];
    const mapSize = CalculatedConfig.MapSize;
    let obstacleId = 1;

    // Choose a random map pattern
    const patterns = ['maze', 'rooms', 'scattered', 'symmetric', 'corridors'] as const;
    const selectedPattern = patterns[Math.floor(rng() * patterns.length)];

    switch (selectedPattern) {
      case 'maze':
        // Maze-like pattern with multiple walls
        this.generateMazePattern(obstacleId, mapSize, obstacles, lines, rng);
        break;

      case 'rooms':
        // Multiple rooms with doorways
        this.generateRoomsPattern(obstacleId, mapSize, obstacles, lines);
        break;

      case 'scattered':
        // Scattered cover points
        this.generateScatteredPattern(obstacleId, mapSize, obstacles, lines, rng);
        break;

      case 'symmetric':
        // Symmetric obstacle placement
        this.generateSymmetricPattern(obstacleId, mapSize, obstacles, lines, rng);
        break;

      case 'corridors':
        // Long corridors with intersections
        this.generateCorridorsPattern(obstacleId, mapSize, obstacles, lines, rng);
        break;
    }

    return { obstacles, lines, pattern: selectedPattern, seed: resolvedSeed };
  }

  /**
   * Converts imported obstacle data to internal format.
   * @param obstaclesData - Array of obstacle data to import
   * @returns Object containing obstacles and line segments
   */
  public static importObstacles(obstaclesData: ObstacleData[]): { obstacles: ObstacleData[], lines: LineSegment[] } {
    const obstacles: ObstacleData[] = [];
    const lines: LineSegment[] = [];

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
        lines.push(segment);
      }

      obstacles.push({
        id: obstacleData.id,
        segments: segments
      });
    }

    return { obstacles, lines };
  }

  /**
   * Applies obstacles to the graph by removing intersecting edges.
   * @param edges - The graph to modify
   * @param nodeList - List of all nodes
   * @param lines - Line segments representing obstacles
   */
  public static applyObstaclesToGraph(edges: Graph, nodeList: Node[], lines: LineSegment[]): void {
    removeEdgesIfIntersected(edges, nodeList, lines);
  }

  /**
   * Generates a maze-like pattern
   * @private
   */
  private static generateMazePattern(
    startId: number,
    _mapSize: number,
    obstacles: ObstacleData[],
    lines: LineSegment[],
    rng: () => number
  ): void {
    let id = startId;
    const wallThickness = ObstacleConfig.WallThickness;

    // Horizontal walls
    for (let i = 0; i < ComplexMapConfig.MazeHorizontalWalls; i++) {
      const y = ComplexMapConfig.MazeBaseOffset + i * ComplexMapConfig.MazeWallSpacing;
      const startX = ComplexMapConfig.MazeRandomOffsetStart + rng() * ComplexMapConfig.MazeRandomOffsetRange;
      const width = ComplexMapConfig.MazeMinWallLength + rng() * ComplexMapConfig.MazeRandomWallLengthRange;

      const segments = createRectangleSegments(startX, y, width, wallThickness);
      obstacles.push({ id: id++, segments });
      segments.forEach(s => lines.push(s));
    }

    // Vertical walls
    for (let i = 0; i < ComplexMapConfig.MazeVerticalWalls; i++) {
      const x = ComplexMapConfig.MazeBaseOffset + i * ComplexMapConfig.MazeWallSpacing;
      const startY = ComplexMapConfig.MazeRandomOffsetStart + rng() * ComplexMapConfig.MazeRandomOffsetRange;
      const height = ComplexMapConfig.MazeMinWallLength + rng() * ComplexMapConfig.MazeRandomWallLengthRange;

      const segments = createRectangleSegments(x, startY, wallThickness, height);
      obstacles.push({ id: id++, segments });
      segments.forEach(s => lines.push(s));
    }
  }

  /**
   * Generates rooms with doorways
   * @private
   */
  private static generateRoomsPattern(
    startId: number,
    _mapSize: number,
    obstacles: ObstacleData[],
    lines: LineSegment[]
  ): void {
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

      const topLeft = { id: id++, segments: createRectangleSegments(roomX, roomY, topLeftWidth, wallThickness) };
      obstacles.push(topLeft);
      lines.push(...topLeft.segments);

      const topRight = { id: id++, segments: createRectangleSegments(topRightStart, roomY, topRightWidth, wallThickness) };
      obstacles.push(topRight);
      lines.push(...topRight.segments);

      // Right wall
      const rightWall = { id: id++, segments: createRectangleSegments(roomX + roomWidth - wallThickness, roomY, wallThickness, roomHeight) };
      obstacles.push(rightWall);
      lines.push(...rightWall.segments);

      // Bottom wall
      const bottomWall = { id: id++, segments: createRectangleSegments(roomX, roomY + roomHeight - wallThickness, roomWidth, wallThickness) };
      obstacles.push(bottomWall);
      lines.push(...bottomWall.segments);

      // Left wall with doorway
      const leftTopHeight = (roomHeight - doorWidth) / 2;
      const leftBottomStart = roomY + leftTopHeight + doorWidth;
      const leftBottomHeight = roomHeight - leftTopHeight - doorWidth;

      const leftTop = { id: id++, segments: createRectangleSegments(roomX, roomY, wallThickness, leftTopHeight) };
      obstacles.push(leftTop);
      lines.push(...leftTop.segments);

      const leftBottom = { id: id++, segments: createRectangleSegments(roomX, leftBottomStart, wallThickness, leftBottomHeight) };
      obstacles.push(leftBottom);
      lines.push(...leftBottom.segments);
    }
  }

  /**
   * Generates scattered cover points
   * @private
   */
  private static generateScatteredPattern(
    startId: number,
    mapSize: number,
    obstacles: ObstacleData[],
    lines: LineSegment[],
    rng: () => number
  ): void {
    let id = startId;
    const coverCount = ComplexMapConfig.ScatteredMinCount + Math.floor(rng() * ComplexMapConfig.ScatteredRandomCountRange);

    for (let i = 0; i < coverCount; i++) {
      const width = ComplexMapConfig.ScatteredMinSize + rng() * ComplexMapConfig.ScatteredRandomSizeRange;
      const height = ComplexMapConfig.ScatteredMinSize + rng() * ComplexMapConfig.ScatteredRandomSizeRange;
      const x = ComplexMapConfig.ScatteredBaseOffset + rng() * (mapSize - width - ComplexMapConfig.ScatteredSpacingBuffer);
      const y = ComplexMapConfig.ScatteredBaseOffset + rng() * (mapSize - height - ComplexMapConfig.ScatteredSpacingBuffer);

      const segments = createRectangleSegments(x, y, width, height);
      obstacles.push({ id: id++, segments });
      segments.forEach(s => lines.push(s));
    }
  }

  /**
   * Generates symmetric obstacle placement
   * @private
   */
  private static generateSymmetricPattern(
    startId: number,
    mapSize: number,
    obstacles: ObstacleData[],
    lines: LineSegment[],
    rng: () => number
  ): void {
    let id = startId;
    const centerX = mapSize / 2;
    const centerY = mapSize / 2;
    const obstacleCount = ComplexMapConfig.SymmetricObstacleCount;

    for (let i = 0; i < obstacleCount; i++) {
      const width = ComplexMapConfig.SymmetricMinSize + rng() * ComplexMapConfig.SymmetricRandomSizeRange;
      const height = ComplexMapConfig.SymmetricMinSize + rng() * ComplexMapConfig.SymmetricRandomSizeRange;
      const offsetX = ComplexMapConfig.SymmetricMinOffset + rng() * ComplexMapConfig.SymmetricRandomOffsetRange;
      const offsetY = ComplexMapConfig.SymmetricMinOffset + rng() * ComplexMapConfig.SymmetricRandomOffsetRange;

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
          obstacles.push({ id: id++, segments });
          segments.forEach(s => lines.push(s));
        }
      });
    }

    // Central obstacle
    const centralSize = ComplexMapConfig.SymmetricCentralMinSize + rng() * ComplexMapConfig.SymmetricCentralRandomSizeRange;
    const centralSegments = createRectangleSegments(centerX - centralSize / 2, centerY - centralSize / 2, centralSize, centralSize);
    obstacles.push({ id: id++, segments: centralSegments });
    centralSegments.forEach(s => lines.push(s));
  }

  /**
   * Generates corridors with intersections
   * @private
   */
  private static generateCorridorsPattern(
    startId: number,
    mapSize: number,
    obstacles: ObstacleData[],
    lines: LineSegment[],
    rng: () => number
  ): void {
    let id = startId;
    const wallThickness = ObstacleConfig.CorridorWallThickness;

    // Main cross corridors
    const corridorWidth = ObstacleConfig.CorridorWidth;
    const centerX = mapSize / 2;
    const centerY = mapSize / 2;

    // Vertical corridor walls
    const vLeftX = centerX - corridorWidth / 2;
    const vRightX = centerX + corridorWidth / 2;

    const vLeftWall = { id: id++, segments: createRectangleSegments(vLeftX - wallThickness, MapConfig.ObstacleMargin, wallThickness, mapSize - MapConfig.ObstacleMargin * 2) };
    obstacles.push(vLeftWall);
    lines.push(...vLeftWall.segments);

    const vRightWall = { id: id++, segments: createRectangleSegments(vRightX, MapConfig.ObstacleMargin, wallThickness, mapSize - MapConfig.ObstacleMargin * 2) };
    obstacles.push(vRightWall);
    lines.push(...vRightWall.segments);

    // Horizontal corridor walls
    const hTopY = centerY - corridorWidth / 2;
    const hBottomY = centerY + corridorWidth / 2;

    const hTopWall = { id: id++, segments: createRectangleSegments(MapConfig.ObstacleMargin, hTopY - wallThickness, mapSize - MapConfig.ObstacleMargin * 2, wallThickness) };
    obstacles.push(hTopWall);
    lines.push(...hTopWall.segments);

    const hBottomWall = { id: id++, segments: createRectangleSegments(MapConfig.ObstacleMargin, hBottomY, mapSize - MapConfig.ObstacleMargin * 2, wallThickness) };
    obstacles.push(hBottomWall);
    lines.push(...hBottomWall.segments);

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

      const segments = createRectangleSegments(qx, qy, ComplexMapConfig.CorridorsQuadrantMinSize + rng() * ComplexMapConfig.CorridorsQuadrantRandomSizeRange, ComplexMapConfig.CorridorsQuadrantMinSize + rng() * ComplexMapConfig.CorridorsQuadrantRandomSizeRange);
      obstacles.push({ id: id++, segments });
      segments.forEach(s => lines.push(s));
    }
  }
}
