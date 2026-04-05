import { MapSchema } from '@colyseus/schema';
import { PlayerState } from '../schema/GameState';
import { MapConfig, PlayerConfig, BSPMapConfig } from '../config/GameConfig';

// ---- BSP map generation types -----------------------------------------------

interface BSPNode {
  x: number; y: number; width: number; height: number;
  left?: BSPNode; right?: BSPNode;
  room?: BSPRoom;
}

interface BSPRoom {
  x: number; y: number; width: number; height: number;
}

interface Seg {
  start: { x: number; y: number };
  end:   { x: number; y: number };
}

interface IdCounter { value: number; }

type WallSide = 'top' | 'bottom' | 'left' | 'right';

// ---- BSP generation helpers (standalone, no client deps) --------------------

function hashString(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

function makePrng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s += 0x6D2B79F5;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeRect(x: number, y: number, w: number, h: number): Seg[] {
  return [
    { start: { x, y },         end: { x: x + w, y } },
    { start: { x: x + w, y },  end: { x: x + w, y: y + h } },
    { start: { x: x + w, y: y + h }, end: { x, y: y + h } },
    { start: { x, y: y + h },  end: { x, y } },
  ];
}

function buildBSPTree(x: number, y: number, width: number, height: number, depth: number, rng: () => number): BSPNode {
  const node: BSPNode = { x, y, width, height };
  if (depth >= BSPMapConfig.MaxDepth || width < BSPMapConfig.MinCellSize * 2 || height < BSPMapConfig.MinCellSize * 2) return node;
  const splitH = height > width ? true : width > height ? false : rng() > 0.5;
  const ratio = BSPMapConfig.SplitMinRatio + rng() * (BSPMapConfig.SplitMaxRatio - BSPMapConfig.SplitMinRatio);
  if (splitH) {
    const sh = height * ratio;
    node.left  = buildBSPTree(x, y,      width, sh,          depth + 1, rng);
    node.right = buildBSPTree(x, y + sh, width, height - sh, depth + 1, rng);
  } else {
    const sw = width * ratio;
    node.left  = buildBSPTree(x,      y, sw,         height, depth + 1, rng);
    node.right = buildBSPTree(x + sw, y, width - sw, height, depth + 1, rng);
  }
  return node;
}

function placeRooms(node: BSPNode, rng: () => number): void {
  if (node.left && node.right) { placeRooms(node.left, rng); placeRooms(node.right, rng); return; }
  const p = BSPMapConfig.RoomPadding, min = BSPMapConfig.RoomMinSize, mr = BSPMapConfig.RoomMaxRatio;
  const rw = Math.max(min, min + rng() * (node.width * mr - min));
  const rh = Math.max(min, min + rng() * (node.height * mr - min));
  const ax = node.width - rw - p * 2, ay = node.height - rh - p * 2;
  node.room = { x: node.x + p + (ax > 0 ? rng() * ax : 0), y: node.y + p + (ay > 0 ? rng() * ay : 0), width: rw, height: rh };
}

function getAllRooms(node: BSPNode): BSPRoom[] {
  if (node.room) return [node.room];
  const r: BSPRoom[] = [];
  if (node.left)  r.push(...getAllRooms(node.left));
  if (node.right) r.push(...getAllRooms(node.right));
  return r;
}

function findClosestPair(a: BSPRoom[], b: BSPRoom[]): [BSPRoom, BSPRoom] {
  let best = Infinity, ra = a[0], rb = b[0];
  for (const x of a) for (const y of b) {
    const d = (x.x + x.width / 2 - (y.x + y.width / 2)) ** 2 + (x.y + x.height / 2 - (y.y + y.height / 2)) ** 2;
    if (d < best) { best = d; ra = x; rb = y; }
  }
  return [ra, rb];
}

function getDoorPos(room: BSPRoom, side: WallSide): { x: number; y: number } {
  switch (side) {
    case 'top':    return { x: room.x + room.width / 2,  y: room.y };
    case 'bottom': return { x: room.x + room.width / 2,  y: room.y + room.height };
    case 'left':   return { x: room.x,                   y: room.y + room.height / 2 };
    case 'right':  return { x: room.x + room.width,      y: room.y + room.height / 2 };
  }
}

function selectSides(a: BSPRoom, b: BSPRoom): [WallSide, WallSide] {
  const dx = (b.x + b.width / 2) - (a.x + a.width / 2);
  const dy = (b.y + b.height / 2) - (a.y + a.height / 2);
  if (Math.abs(dx) >= Math.abs(dy)) return dx >= 0 ? ['right', 'left'] : ['left', 'right'];
  return dy >= 0 ? ['bottom', 'top'] : ['top', 'bottom'];
}

function addDiagonalCorridor(x1: number, y1: number, x2: number, y2: number, obstacles: ObstaclePayload[], idc: IdCounter): void {
  const dx = x2 - x1, dy = y2 - y1, len = Math.sqrt(dx * dx + dy * dy);
  if (len < 1) return;
  const nx = -dy / len, ny = dx / len;
  const off = BSPMapConfig.CorridorWidth / 2 + BSPMapConfig.CorridorWallThickness;
  obstacles.push({ id: idc.value++, segments: [{ start: { x: x1 + nx * off, y: y1 + ny * off }, end: { x: x2 + nx * off, y: y2 + ny * off } }] });
  obstacles.push({ id: idc.value++, segments: [{ start: { x: x1 - nx * off, y: y1 - ny * off }, end: { x: x2 - nx * off, y: y2 - ny * off } }] });
}

function addRoomWalls(room: BSPRoom, obstacles: ObstaclePayload[], idc: IdCounter): void {
  const { x, y, width, height } = room;
  const t = BSPMapConfig.WallThickness, door = BSPMapConfig.DoorWidth;
  const tlw = (width - door) / 2;
  if (tlw > 0) {
    obstacles.push({ id: idc.value++, segments: makeRect(x, y, tlw, t) });
    obstacles.push({ id: idc.value++, segments: makeRect(x + tlw + door, y, width - tlw - door, t) });
    const by = y + height - t;
    obstacles.push({ id: idc.value++, segments: makeRect(x, by, tlw, t) });
    obstacles.push({ id: idc.value++, segments: makeRect(x + tlw + door, by, width - tlw - door, t) });
  }
  const lth = (height - door) / 2;
  if (lth > 0) {
    obstacles.push({ id: idc.value++, segments: makeRect(x, y, t, lth) });
    obstacles.push({ id: idc.value++, segments: makeRect(x, y + lth + door, t, height - lth - door) });
    const rx = x + width - t;
    obstacles.push({ id: idc.value++, segments: makeRect(rx, y, t, lth) });
    obstacles.push({ id: idc.value++, segments: makeRect(rx, y + lth + door, t, height - lth - door) });
  }
}

function addTacticalElements(rooms: BSPRoom[], obstacles: ObstaclePayload[], idc: IdCounter, rng: () => number): void {
  for (const room of rooms) {
    if (room.width * room.height < BSPMapConfig.PillarMinRoomArea) continue;
    const count = 1 + Math.floor(rng() * BSPMapConfig.PillarMaxPerRoom);
    const ps = BSPMapConfig.PillarSize, inset = BSPMapConfig.WallThickness + BSPMapConfig.DoorWidth;
    for (let i = 0; i < count; i++) {
      const px = room.x + inset + rng() * (room.width  - inset * 2 - ps);
      const py = room.y + inset + rng() * (room.height - inset * 2 - ps);
      obstacles.push({ id: idc.value++, segments: makeRect(px, py, ps, ps) });
    }
    const hw = BSPMapConfig.HalfWallLength, ht = BSPMapConfig.HalfWallThickness;
    if (rng() > 0.4) {
      const hx = room.x + room.width / 2 + BSPMapConfig.DoorWidth / 2 + 10;
      const hy = room.y + BSPMapConfig.WallThickness + 10;
      if (hx + hw < room.x + room.width - BSPMapConfig.WallThickness)
        obstacles.push({ id: idc.value++, segments: makeRect(hx, hy, hw, ht) });
    }
  }
}

function mirrorObstacles(obstacles: ObstaclePayload[], centerX: number, idc: IdCounter): void {
  const orig = obstacles.length;
  for (let i = 0; i < orig; i++) {
    const mirrored: Seg[] = obstacles[i].segments.map(s => ({
      start: { x: 2 * centerX - s.end.x,   y: s.end.y },
      end:   { x: 2 * centerX - s.start.x, y: s.start.y },
    }));
    obstacles.push({ id: idc.value++, segments: mirrored });
  }
}

function connectRooms(node: BSPNode, obstacles: ObstaclePayload[], idc: IdCounter, rng: () => number): void {
  if (!node.left || !node.right) return;
  connectRooms(node.left,  obstacles, idc, rng);
  connectRooms(node.right, obstacles, idc, rng);
  const [ra, rb] = findClosestPair(getAllRooms(node.left), getAllRooms(node.right));
  const [sa, sb] = selectSides(ra, rb);
  const da = getDoorPos(ra, sa), db = getDoorPos(rb, sb);
  addDiagonalCorridor(da.x, da.y, db.x, db.y, obstacles, idc);
}

function generateBSPMap(seed?: string): { obstacles: ObstaclePayload[]; seed: string } {
  const resolvedSeed = seed ?? String(Math.floor(Math.random() * 0xFFFFFFFF));
  const rng = makePrng(hashString(resolvedSeed));
  const obstacles: ObstaclePayload[] = [];
  const idc: IdCounter = { value: 1 };
  const mapSize = (MapConfig.NodesInGridSize - 1) * MapConfig.NodeSpacing;
  const margin = 30;
  const centerX = mapSize / 2;

  const root = buildBSPTree(margin, margin, centerX - margin, mapSize - margin * 2, 0, rng);
  placeRooms(root, rng);

  const allRooms = getAllRooms(root);
  for (const room of allRooms) addRoomWalls(room, obstacles, idc);
  connectRooms(root, obstacles, idc, rng);
  addTacticalElements(allRooms, obstacles, idc, rng);
  mirrorObstacles(obstacles, centerX, idc);

  return { obstacles, seed: resolvedSeed };
}

// ---- minimal node / geometry types ----------------------------------------

interface NodePos {
  id: number;
  x: number;
  y: number;
}

interface HitResult {
  targetId: string;
  damage: number;
  isEliminated: boolean;
}

export interface TurnAction {
  playerId: string;
  moveToNodeId: number;
  shotAtNodeId: number | undefined;
}

export interface TurnResult {
  movingPlayerId: string;
  newNodeId: number;
  newAngle: number;
  hits: HitResult[];
}

export interface ObstacleSegmentData {
  start: { x: number; y: number };
  end: { x: number; y: number };
}

export interface ObstaclePayload {
  id: number;
  segments: ObstacleSegmentData[];
}

// ---- ServerGameLogic -------------------------------------------------------

export class ServerGameLogic {
  private nodes: NodePos[];
  private adjacency: number[][];   // adjacency[nodeId] = connected node ids
  private generatedObstacles: ObstaclePayload[] = [];

  constructor() {
    this.nodes = this.buildNodes();
    this.adjacency = this.buildAdjacency();
  }

  // ---- map building ---------------------------------------------------------

  private buildNodes(): NodePos[] {
    const nodes: NodePos[] = [];
    let id = 0;
    for (let i = 0; i < MapConfig.NodesInGridSize; i++) {
      for (let j = 0; j < MapConfig.NodesInGridSize; j++) {
        nodes.push({ id: id++, x: i * MapConfig.NodeSpacing, y: j * MapConfig.NodeSpacing });
      }
    }
    return nodes;
  }

  private buildAdjacency(): number[][] {
    const adj: number[][] = Array.from({ length: this.nodes.length }, () => []);
    const size = MapConfig.NodesInGridSize;

    // 4-directional grid connectivity
    for (const n of this.nodes) {
      if ((n.id + 1) % size !== 0) adj[n.id].push(n.id + 1);
      if (n.id % size !== 0) adj[n.id].push(n.id - 1);
      if (n.id + size < size * size) adj[n.id].push(n.id + size);
      if (n.id - size >= 0) adj[n.id].push(n.id - size);
    }

    return adj;
  }

  private getReachableNodes(startId: number, maxSteps: number): Set<number> {
    const visited = new Set<number>([startId]);
    const reachable = new Set<number>();
    const queue: Array<{ nodeId: number; dist: number }> = [{ nodeId: startId, dist: 0 }];
    while (queue.length > 0) {
      const { nodeId, dist } = queue.shift()!;
      if (dist >= maxSteps) continue;
      for (const neighbor of this.adjacency[nodeId] ?? []) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          reachable.add(neighbor);
          queue.push({ nodeId: neighbor, dist: dist + 1 });
        }
      }
    }
    return reachable;
  }

  // ---- geometry helpers -----------------------------------------------------

  private distance(a: NodePos, b: NodePos): number {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  private angleBetween(from: NodePos, to: NodePos): number {
    return Math.atan2(to.y - from.y, to.x - from.x);
  }

  private angleFromDirection(
    center: NodePos,
    target: NodePos,
    dirX: number,
    dirY: number,
  ): number {
    const dx = target.x - center.x;
    const dy = target.y - center.y;
    const dist = this.distance(center, target);
    if (dist === 0) return 0;
    const dot = (dx * dirX + dy * dirY) / dist;
    return Math.acos(Math.max(-1, Math.min(1, dot))) * (180 / Math.PI);
  }

  // ---- obstacle generation --------------------------------------------------

  generateObstacles(): void {
    const { obstacles } = generateBSPMap();
    this.generatedObstacles = obstacles;
  }

  getObstacles(): ObstaclePayload[] {
    return this.generatedObstacles;
  }

  // ---- initial placement ----------------------------------------------------

  /**
   * Assigns each player a starting node (index-based) and a deterministic color.
   */
  initializePlayers(players: MapSchema<PlayerState>): void {
    const ids: string[] = [];
    players.forEach((_p, id) => ids.push(id));

    ids.forEach((id, i) => {
      const p = players.get(id)!;
      p.nodeId = i; // first N nodes
      p.angle = 0;
      p.health = 100;
      p.isAlive = true;
      p.color = this.hslToHex((i / ids.length) * 360, 100, 50);
    });

  }

  // ---- turn processing ------------------------------------------------------

  processTurn(
    action: TurnAction,
    players: MapSchema<PlayerState>,
  ): TurnResult | null {
    const actor = players.get(action.playerId);
    if (!actor || !actor.isAlive) return null;

    // --- move ---
    const fromNode = this.nodes[actor.nodeId];
    const toNode = this.nodes[action.moveToNodeId];
    if (!toNode) return null;

    // Validate move: destination must be reachable within MOVE_RANGE steps
    if (action.moveToNodeId !== actor.nodeId) {
      const reachable = this.getReachableNodes(actor.nodeId, PlayerConfig.MoveRange);
      if (!reachable.has(action.moveToNodeId)) {
        return null;
      }
    }

    actor.nodeId = action.moveToNodeId;

    // Update angle: toward shot target if provided, else toward move destination
    if (action.shotAtNodeId !== undefined) {
      const shotNode = this.nodes[action.shotAtNodeId];
      if (shotNode) {
        actor.angle = this.angleBetween(toNode, shotNode) * (180 / Math.PI);
      }
    } else if (action.moveToNodeId !== fromNode.id) {
      actor.angle = this.angleBetween(fromNode, toNode) * (180 / Math.PI);
    }

    // --- shot ---
    const hits: HitResult[] = [];

    if (action.shotAtNodeId !== undefined) {
      const shotNode = this.nodes[action.shotAtNodeId];
      if (shotNode) {
        const actorNode = this.nodes[actor.nodeId];
        const dirX = Math.cos(actor.angle * Math.PI / 180);
        const dirY = Math.sin(actor.angle * Math.PI / 180);

        players.forEach((target, targetId) => {
          if (targetId === action.playerId || !target.isAlive) return;

          const targetNode = this.nodes[target.nodeId];
          if (!targetNode) return;

          const dist = this.distance(actorNode, targetNode);
          if (dist > PlayerConfig.MaxViewDistance) return;

          const angleOff = this.angleFromDirection(actorNode, targetNode, dirX, dirY);
          if (angleOff >= PlayerConfig.ViewAngle) return;

          // Check if the target is on or near the shot node
          const distToShotNode = this.distance(targetNode, shotNode);
          if (distToShotNode > PlayerConfig.ShotHitRadius) return;

          target.health = Math.max(0, target.health - PlayerConfig.DamagePerShot);
          const isEliminated = target.health <= 0;
          if (isEliminated) target.isAlive = false;

          hits.push({ targetId, damage: PlayerConfig.DamagePerShot, isEliminated });
        });
      }
    }

    return {
      movingPlayerId: action.playerId,
      newNodeId: actor.nodeId,
      newAngle: actor.angle,
      hits,
    };
  }

  // ---- color helper ---------------------------------------------------------

  private hslToHex(h: number, s: number, l: number): number {
    s /= 100;
    l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
    if (h < 60)       { r = c; g = x; b = 0; }
    else if (h < 120) { r = x; g = c; b = 0; }
    else if (h < 180) { r = 0; g = c; b = x; }
    else if (h < 240) { r = 0; g = x; b = c; }
    else if (h < 300) { r = x; g = 0; b = c; }
    else              { r = c; g = 0; b = x; }
    const ri = Math.round((r + m) * 255);
    const gi = Math.round((g + m) * 255);
    const bi = Math.round((b + m) * 255);
    return (ri << 16) | (gi << 8) | bi;
  }
}
