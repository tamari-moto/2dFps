import { Graph } from './Graph';
import { Node } from './node';
import { createRectangleSegments, LineSegment, removeEdgesIfIntersected } from './LineSegment';
import type { ObstacleData } from './ObstacleExporter';
import { MapConfig, ObstacleConfig, BSPMapConfig, CalculatedConfig } from '../config/GameConfig';

/** BSP ツリーのノード */
interface BSPNode {
  x: number;
  y: number;
  width: number;
  height: number;
  left?: BSPNode;
  right?: BSPNode;
  room?: Room;
}

/** 部屋の矩形情報 */
interface Room {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** 障害物追加用のカウンタ（参照渡しで ID を管理） */
interface IdCounter {
  value: number;
}

/** ドア位置の壁方向 */
type WallSide = 'top' | 'bottom' | 'left' | 'right';

/**
 * MapGenerator class handles all map and obstacle generation logic.
 * Uses BSP (Binary Space Partitioning) for complex map generation.
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
   * BSP アルゴリズムによるマップ生成。
   * 左半分を BSP で分割・部屋配置・通路接続し、右半分にミラーリング。
   * 中央チョークポイントと戦術要素（ピラー・ハーフウォール）を追加。
   */
  public static generateComplexMap(seed?: string): { obstacles: ObstacleData[], lines: LineSegment[], pattern: string, seed: string } {
    const resolvedSeed = seed ?? MapGenerator.generateSeed();
    const rng = MapGenerator.makePrng(MapGenerator.hashString(resolvedSeed));

    const obstacles: ObstacleData[] = [];
    const lines: LineSegment[] = [];
    const mapSize = CalculatedConfig.MapSize;
    const margin = MapConfig.ObstacleMargin;
    const idCounter: IdCounter = { value: 1 };

    const centerX = mapSize / 2;

    // Phase 1: BSP で左半分を分割
    const leftHalfWidth = centerX - margin;
    const root = this.buildBSPTree(margin, margin, leftHalfWidth, mapSize - margin * 2, 0, rng);

    // Phase 2: リーフセルに部屋を配置
    this.placeRooms(root, rng);

    // Phase 3: 部屋の壁を生成（ドア付き）
    const allRooms = this.getAllRooms(root);
    for (const room of allRooms) {
      this.addRoomWalls(room, obstacles, lines, idCounter);
    }

    // Phase 4: 兄弟サブツリー間を通路で接続
    this.connectRooms(root, obstacles, lines, idCounter, rng);

    // Phase 5: 戦術要素（ピラー・ハーフウォール）を左半分に追加
    this.addTacticalElements(allRooms, obstacles, lines, idCounter, rng);

    // Phase 6: 左半分を右半分にミラーリング
    this.mirrorObstacles(obstacles, lines, centerX, idCounter);

    return { obstacles, lines, pattern: 'bsp', seed: resolvedSeed };
  }

  /**
   * Converts imported obstacle data to internal format.
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
   */
  public static applyObstaclesToGraph(edges: Graph, nodeList: Node[], lines: LineSegment[]): void {
    removeEdgesIfIntersected(edges, nodeList, lines);
  }

  // ─── BSP Private Methods ─────────────────────────────────────

  /** 再帰的に空間を二分割して BSP ツリーを構築 */
  private static buildBSPTree(
    x: number, y: number, width: number, height: number,
    depth: number, rng: () => number
  ): BSPNode {
    const node: BSPNode = { x, y, width, height };

    if (depth >= BSPMapConfig.MaxDepth ||
        width < BSPMapConfig.MinCellSize * 2 ||
        height < BSPMapConfig.MinCellSize * 2) {
      return node; // リーフ
    }

    // 長い方の軸で分割（同等ならランダム）
    const splitHorizontally = height > width ? true : width > height ? false : rng() > 0.5;

    const ratio = BSPMapConfig.SplitMinRatio + rng() * (BSPMapConfig.SplitMaxRatio - BSPMapConfig.SplitMinRatio);

    if (splitHorizontally) {
      const splitH = height * ratio;
      node.left = this.buildBSPTree(x, y, width, splitH, depth + 1, rng);
      node.right = this.buildBSPTree(x, y + splitH, width, height - splitH, depth + 1, rng);
    } else {
      const splitW = width * ratio;
      node.left = this.buildBSPTree(x, y, splitW, height, depth + 1, rng);
      node.right = this.buildBSPTree(x + splitW, y, width - splitW, height, depth + 1, rng);
    }

    return node;
  }

  /** リーフセルに部屋を配置 */
  private static placeRooms(node: BSPNode, rng: () => number): void {
    if (node.left && node.right) {
      this.placeRooms(node.left, rng);
      this.placeRooms(node.right, rng);
      return;
    }

    // リーフノード: 部屋を配置
    const padding = BSPMapConfig.RoomPadding;
    const minSize = BSPMapConfig.RoomMinSize;
    const maxRatio = BSPMapConfig.RoomMaxRatio;

    const maxW = node.width * maxRatio;
    const maxH = node.height * maxRatio;
    const roomW = Math.max(minSize, minSize + rng() * (maxW - minSize));
    const roomH = Math.max(minSize, minSize + rng() * (maxH - minSize));

    const availX = node.width - roomW - padding * 2;
    const availY = node.height - roomH - padding * 2;
    const roomX = node.x + padding + (availX > 0 ? rng() * availX : 0);
    const roomY = node.y + padding + (availY > 0 ? rng() * availY : 0);

    node.room = { x: roomX, y: roomY, width: roomW, height: roomH };
  }

  /** サブツリーから全部屋を収集 */
  private static getAllRooms(node: BSPNode): Room[] {
    if (node.room) return [node.room];
    const rooms: Room[] = [];
    if (node.left) rooms.push(...this.getAllRooms(node.left));
    if (node.right) rooms.push(...this.getAllRooms(node.right));
    return rooms;
  }

  /** 2 つの部屋リストから最も近いペアを探索 */
  private static findClosestRoomPair(roomsA: Room[], roomsB: Room[]): [Room, Room] {
    let bestDist = Infinity;
    let bestA = roomsA[0];
    let bestB = roomsB[0];

    for (const a of roomsA) {
      const acx = a.x + a.width / 2;
      const acy = a.y + a.height / 2;
      for (const b of roomsB) {
        const bcx = b.x + b.width / 2;
        const bcy = b.y + b.height / 2;
        const dist = (acx - bcx) ** 2 + (acy - bcy) ** 2;
        if (dist < bestDist) {
          bestDist = dist;
          bestA = a;
          bestB = b;
        }
      }
    }

    return [bestA, bestB];
  }

  /** 指定された壁のドア外面座標を返す（通路接続点） */
  private static getDoorPosition(room: Room, side: WallSide): { x: number; y: number } {
    switch (side) {
      case 'top':    return { x: room.x + room.width / 2,  y: room.y };
      case 'bottom': return { x: room.x + room.width / 2,  y: room.y + room.height };
      case 'left':   return { x: room.x,                   y: room.y + room.height / 2 };
      case 'right':  return { x: room.x + room.width,      y: room.y + room.height / 2 };
    }
  }

  /** 2部屋の相対位置から接続すべき壁のペアを返す */
  private static selectDoorSides(roomA: Room, roomB: Room): [WallSide, WallSide] {
    const dx = (roomB.x + roomB.width / 2) - (roomA.x + roomA.width / 2);
    const dy = (roomB.y + roomB.height / 2) - (roomA.y + roomA.height / 2);

    if (Math.abs(dx) >= Math.abs(dy)) {
      return dx >= 0 ? ['right', 'left'] : ['left', 'right'];
    } else {
      return dy >= 0 ? ['bottom', 'top'] : ['top', 'bottom'];
    }
  }

  /** 兄弟サブツリー間を L 字型通路で接続（再帰） */
  private static connectRooms(
    node: BSPNode,
    obstacles: ObstacleData[],
    lines: LineSegment[],
    idCounter: IdCounter,
    rng: () => number
  ): void {
    if (!node.left || !node.right) return;

    // 子ノードを先に再帰処理
    this.connectRooms(node.left, obstacles, lines, idCounter, rng);
    this.connectRooms(node.right, obstacles, lines, idCounter, rng);

    // 左右サブツリーの最近接部屋ペアを探索
    const leftRooms = this.getAllRooms(node.left);
    const rightRooms = this.getAllRooms(node.right);
    const [roomA, roomB] = this.findClosestRoomPair(leftRooms, rightRooms);

    // 相対位置から最適な壁を選択
    const [sideA, sideB] = this.selectDoorSides(roomA, roomB);

    // 各部屋の選択された壁のドア位置を取得
    const doorA = this.getDoorPosition(roomA, sideA);
    const doorB = this.getDoorPosition(roomB, sideB);

    const cw = BSPMapConfig.CorridorWidth;
    const ct = BSPMapConfig.CorridorWallThickness;

    // 斜め直線通路を生成
    this.addDiagonalCorridorSegments(doorA.x, doorA.y, doorB.x, doorB.y, cw, ct, obstacles, lines, idCounter);
  }

  /** 2 点間の斜め廊下壁を生成（対角線直接接続） */
  private static addDiagonalCorridorSegments(
    x1: number, y1: number, x2: number, y2: number,
    corridorWidth: number, wallThickness: number,
    obstacles: ObstacleData[], lines: LineSegment[], idCounter: IdCounter
  ): void {
    const dx: number = x2 - x1;
    const dy: number = y2 - y1;
    const len: number = Math.sqrt(dx * dx + dy * dy);

    // 2点が同一座標またはほぼ同一の場合はスキップ
    if (len < 1) return;

    const ux: number = dx / len;
    const uy: number = dy / len;
    // 中心軸に対する左側垂直単位ベクトル
    const nx: number = -uy;
    const ny: number = ux;

    const offset: number = corridorWidth / 2 + wallThickness;

    // 左壁
    const leftWall = new LineSegment(
      x1 + nx * offset, y1 + ny * offset,
      x2 + nx * offset, y2 + ny * offset
    );
    obstacles.push({ id: idCounter.value++, segments: [leftWall] });
    lines.push(leftWall);

    // 右壁
    const rightWall = new LineSegment(
      x1 - nx * offset, y1 - ny * offset,
      x2 - nx * offset, y2 - ny * offset
    );
    obstacles.push({ id: idCounter.value++, segments: [rightWall] });
    lines.push(rightWall);
  }

  /** 部屋の壁をドア付きで生成（各壁の中央にドア開口） */
  private static addRoomWalls(
    room: Room,
    obstacles: ObstacleData[],
    lines: LineSegment[],
    idCounter: IdCounter
  ): void {
    const { x, y, width, height } = room;
    const t = BSPMapConfig.WallThickness;
    const door = BSPMapConfig.DoorWidth;

    // 上壁（中央にドア）
    const topLeftW = (width - door) / 2;
    if (topLeftW > 0) {
      const s1 = createRectangleSegments(x, y, topLeftW, t);
      obstacles.push({ id: idCounter.value++, segments: s1 });
      lines.push(...s1);

      const s2 = createRectangleSegments(x + topLeftW + door, y, width - topLeftW - door, t);
      obstacles.push({ id: idCounter.value++, segments: s2 });
      lines.push(...s2);
    }

    // 下壁（中央にドア）
    const botY = y + height - t;
    if (topLeftW > 0) {
      const s1 = createRectangleSegments(x, botY, topLeftW, t);
      obstacles.push({ id: idCounter.value++, segments: s1 });
      lines.push(...s1);

      const s2 = createRectangleSegments(x + topLeftW + door, botY, width - topLeftW - door, t);
      obstacles.push({ id: idCounter.value++, segments: s2 });
      lines.push(...s2);
    }

    // 左壁（中央にドア）
    const leftTopH = (height - door) / 2;
    if (leftTopH > 0) {
      const s1 = createRectangleSegments(x, y, t, leftTopH);
      obstacles.push({ id: idCounter.value++, segments: s1 });
      lines.push(...s1);

      const s2 = createRectangleSegments(x, y + leftTopH + door, t, height - leftTopH - door);
      obstacles.push({ id: idCounter.value++, segments: s2 });
      lines.push(...s2);
    }

    // 右壁（中央にドア）
    const rightX = x + width - t;
    if (leftTopH > 0) {
      const s1 = createRectangleSegments(rightX, y, t, leftTopH);
      obstacles.push({ id: idCounter.value++, segments: s1 });
      lines.push(...s1);

      const s2 = createRectangleSegments(rightX, y + leftTopH + door, t, height - leftTopH - door);
      obstacles.push({ id: idCounter.value++, segments: s2 });
      lines.push(...s2);
    }
  }

  /** 戦術要素: ピラーとハーフウォールを部屋内に追加 */
  private static addTacticalElements(
    rooms: Room[],
    obstacles: ObstacleData[],
    lines: LineSegment[],
    idCounter: IdCounter,
    rng: () => number
  ): void {
    for (const room of rooms) {
      const area = room.width * room.height;
      if (area < BSPMapConfig.PillarMinRoomArea) continue;

      // ピラー配置
      const pillarCount = 1 + Math.floor(rng() * BSPMapConfig.PillarMaxPerRoom);
      const pillarSize = BSPMapConfig.PillarSize;
      const inset = BSPMapConfig.WallThickness + BSPMapConfig.DoorWidth; // ドア付近を避ける

      for (let i = 0; i < pillarCount; i++) {
        const px = room.x + inset + rng() * (room.width - inset * 2 - pillarSize);
        const py = room.y + inset + rng() * (room.height - inset * 2 - pillarSize);

        const segs = createRectangleSegments(px, py, pillarSize, pillarSize);
        obstacles.push({ id: idCounter.value++, segments: segs });
        lines.push(...segs);
      }

      // ハーフウォール（各ドア付近に 1 つ）
      const hw = BSPMapConfig.HalfWallLength;
      const ht = BSPMapConfig.HalfWallThickness;
      const doorCenter = room.width / 2;

      // 上ドア横にハーフウォール
      if (rng() > 0.4) {
        const hx = room.x + doorCenter + BSPMapConfig.DoorWidth / 2 + 10;
        const hy = room.y + BSPMapConfig.WallThickness + 10;
        if (hx + hw < room.x + room.width - BSPMapConfig.WallThickness) {
          const segs = createRectangleSegments(hx, hy, hw, ht);
          obstacles.push({ id: idCounter.value++, segments: segs });
          lines.push(...segs);
        }
      }
    }
  }

  /** 左半分の障害物を右半分にミラーリング */
  private static mirrorObstacles(
    obstacles: ObstacleData[],
    lines: LineSegment[],
    centerX: number,
    idCounter: IdCounter
  ): void {
    const originalCount = obstacles.length;

    for (let i = 0; i < originalCount; i++) {
      const original = obstacles[i];
      const mirroredSegments: LineSegment[] = [];

      for (const seg of original.segments) {
        // 各線分の X 座標をミラーリング（start と end を入れ替えて方向を維持）
        const mirroredSeg = new LineSegment(
          2 * centerX - seg.end.x, seg.end.y,
          2 * centerX - seg.start.x, seg.start.y
        );
        mirroredSegments.push(mirroredSeg);
        lines.push(mirroredSeg);
      }

      obstacles.push({ id: idCounter.value++, segments: mirroredSegments });
    }
  }

}
