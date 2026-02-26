import { GameState } from '../schema/GameState';

// ---- Shared constants (mirrors src/config/GameConfig.ts) ----
const GRID_SIZE = 20;
const NODE_SPACING = 30;
const VIEW_ANGLE_DEG = 60;
const MAX_VIEW_DISTANCE = 1000;
const DAMAGE_PER_SHOT = 34;

// ---- Minimal geometry types ----
interface Point { x: number; y: number }
interface NodePos { id: number; x: number; y: number }
interface Segment { start: Point; end: Point }

/** CCW test for line-segment intersection */
function ccw(A: Point, B: Point, C: Point): boolean {
  return (C.y - A.y) * (B.x - A.x) > (B.y - A.y) * (C.x - A.x);
}
function segmentsIntersect(p1: Point, p2: Point, s: Segment): boolean {
  return (
    ccw(s.start, p1, p2) !== ccw(s.end, p1, p2) &&
    ccw(s.start, s.end, p1) !== ccw(s.start, s.end, p2)
  );
}

/**
 * Server-authoritative game logic.
 * Mirrors the relevant parts of src/MODEL/model.ts and src/network/LocalAdapter.ts.
 */
export class ServerGameLogic {
  private nodes: NodePos[] = [];
  /** adjacency list: nodeId → neighbour node IDs */
  private edges: number[][] = [];
  private obstacles: Segment[] = [];

  constructor(private state: GameState) {
    this.buildGrid();
  }

  // ---- Grid initialization ------------------------------------------------

  private buildGrid(): void {
    let count = 0;
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        this.nodes.push({ id: count, x: i * NODE_SPACING, y: j * NODE_SPACING });
        this.edges.push([]);
        count++;
      }
    }
    // Connect adjacent grid nodes
    const size = GRID_SIZE;
    for (const n of this.nodes) {
      if ((n.id + 1) % size !== 0) this.edges[n.id].push(n.id + 1);
      if (n.id % size !== 0)       this.edges[n.id].push(n.id - 1);
      if (n.id + size < size * size) this.edges[n.id].push(n.id + size);
      if (n.id - size >= 0)          this.edges[n.id].push(n.id - size);
    }
    // Connect near nodes (same as connectNearNodes in model.ts)
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        if (this.distance(this.nodes[i], this.nodes[j]) < MAX_VIEW_DISTANCE) {
          this.edges[i].push(j);
          this.edges[j].push(i);
        }
      }
    }
  }

  /**
   * Load obstacle rectangles from the state (flat [x,y,w,h,...] array)
   * and rebuild edge graph accordingly.
   */
  applyObstacles(): void {
    this.obstacles = [];
    const arr = this.state.obstacleRects.toArray();
    for (let i = 0; i + 3 < arr.length; i += 4) {
      const [x, y, w, h] = arr.slice(i, i + 4);
      this.obstacles.push(
        { start: { x, y },         end: { x: x + w, y } },
        { start: { x: x + w, y },  end: { x: x + w, y: y + h } },
        { start: { x: x + w, y: y + h }, end: { x, y: y + h } },
        { start: { x, y: y + h },  end: { x, y } },
      );
    }
    // Remove edges that cross an obstacle
    for (let id = 0; id < this.nodes.length; id++) {
      this.edges[id] = this.edges[id].filter(nid => {
        const a = this.nodes[id];
        const b = this.nodes[nid];
        return !this.obstacles.some(seg => segmentsIntersect(a, b, seg));
      });
    }
  }

  // ---- Player placement --------------------------------------------------

  /** Returns a start node for the n-th player (spread around the grid) */
  assignStartNode(playerIndex: number): number {
    // Space players across the diagonal of the grid
    const step = Math.floor(this.nodes.length / 10);
    return (playerIndex * step) % this.nodes.length;
  }

  /** Generate an HSL-based color for a player index */
  assignColor(playerIndex: number, total: number): number {
    const hue = (playerIndex / Math.max(total, 1)) * 360;
    return this.hslToHex(hue, 100, 50);
  }

  // ---- Turn execution ----------------------------------------------------

  executeTurn(
    playerId: string,
    moveToNodeId: number,
    shotAtNodeId: number | undefined
  ): { ok: boolean; hits: Array<{ targetId: string; damage: number; isEliminated: boolean }> } {
    const player = this.state.players.get(playerId);
    if (!player || !player.isAlive) return { ok: false, hits: [] };

    // Validate move (must be a neighbour or staying in place)
    if (moveToNodeId !== player.nodeId &&
        !this.edges[player.nodeId]?.includes(moveToNodeId)) {
      return { ok: false, hits: [] };
    }

    // Apply move
    player.nodeId = moveToNodeId;

    // Update angle
    if (shotAtNodeId !== undefined) {
      const from = this.nodes[moveToNodeId];
      const to   = this.nodes[shotAtNodeId];
      if (from && to) {
        player.angle = Math.atan2(to.y - from.y, to.x - from.x) * (180 / Math.PI);
      }
    }

    // Shot resolution
    const hits: Array<{ targetId: string; damage: number; isEliminated: boolean }> = [];
    if (shotAtNodeId !== undefined) {
      this.resolveShot(playerId, moveToNodeId, shotAtNodeId, hits);
    }

    // Advance turn
    this.state.turnNumber += 1;
    this.state.currentTurnPlayerId = this.nextAlivePlayer(playerId);

    return { ok: true, hits };
  }

  // ---- Turn order --------------------------------------------------------

  nextAlivePlayer(currentPlayerId: string): string {
    const ids = Array.from(this.state.players.keys()).filter(
      id => this.state.players.get(id)?.isAlive
    );
    const idx = ids.indexOf(currentPlayerId);
    return ids[(idx + 1) % ids.length] ?? currentPlayerId;
  }

  // ---- Private helpers ---------------------------------------------------

  private resolveShot(
    attackerId: string,
    fromNodeId: number,
    shotNodeId: number,
    hits: Array<{ targetId: string; damage: number; isEliminated: boolean }>
  ): void {
    // Validate line-of-sight from attacker's new position to shot node
    const from = this.nodes[fromNodeId];
    const to   = this.nodes[shotNodeId];
    if (!from || !to) return;

    // Check angle (shot must be within view cone)
    const attackerPlayer = this.state.players.get(attackerId);
    if (!attackerPlayer) return;
    const angleToShot = Math.atan2(to.y - from.y, to.x - from.x) * (180 / Math.PI);
    const diff = Math.abs(angleToShot - attackerPlayer.angle);
    const normalizedDiff = diff > 180 ? 360 - diff : diff;
    if (normalizedDiff >= VIEW_ANGLE_DEG) return;

    // Check distance
    if (this.distance(from, to) > MAX_VIEW_DISTANCE) return;

    // Check line of sight
    if (this.obstacles.some(seg => segmentsIntersect(from, to, seg))) return;

    // Hit all enemies at the shot node
    for (const [targetId, target] of this.state.players) {
      if (targetId === attackerId) continue;
      if (!target.isAlive) continue;
      if (target.nodeId !== shotNodeId) continue;

      target.health = Math.max(0, target.health - DAMAGE_PER_SHOT);
      if (target.health <= 0) target.isAlive = false;
      hits.push({ targetId, damage: DAMAGE_PER_SHOT, isEliminated: !target.isAlive });
    }
  }

  private distance(a: Point, b: Point): number {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  private hslToHex(h: number, s: number, l: number): number {
    s /= 100; l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
    if      (h < 60)  { r = c; g = x; }
    else if (h < 120) { r = x; g = c; }
    else if (h < 180) { g = c; b = x; }
    else if (h < 240) { g = x; b = c; }
    else if (h < 300) { r = x; b = c; }
    else              { r = c; b = x; }
    return (Math.round((r + m) * 255) << 16) |
           (Math.round((g + m) * 255) << 8)  |
            Math.round((b + m) * 255);
  }
}
