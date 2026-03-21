import { MapSchema } from '@colyseus/schema';
import { PlayerState } from '../schema/GameState';

// ---- constants (mirrors src/config/GameConfig.ts) -------------------------

const NODES_IN_GRID_SIZE = 20;
const NODE_SPACING = 30;
const MAX_VIEW_DISTANCE = 1000;
const VIEW_ANGLE_DEG = 60;
const DAMAGE_PER_SHOT = 34;

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
    for (let i = 0; i < NODES_IN_GRID_SIZE; i++) {
      for (let j = 0; j < NODES_IN_GRID_SIZE; j++) {
        nodes.push({ id: id++, x: i * NODE_SPACING, y: j * NODE_SPACING });
      }
    }
    return nodes;
  }

  private buildAdjacency(): number[][] {
    const adj: number[][] = Array.from({ length: this.nodes.length }, () => []);
    const size = NODES_IN_GRID_SIZE;

    // 4-directional grid connectivity
    for (const n of this.nodes) {
      if ((n.id + 1) % size !== 0) adj[n.id].push(n.id + 1);
      if (n.id % size !== 0) adj[n.id].push(n.id - 1);
      if (n.id + size < size * size) adj[n.id].push(n.id + size);
      if (n.id - size >= 0) adj[n.id].push(n.id - size);
    }

    return adj;
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

  generateObstacles(
    count: number = 3,
    minWidth: number = 60,
    maxWidth: number = 150,
    minHeight: number = 60,
    maxHeight: number = 150,
  ): void {
    const MAP_SIZE = (NODES_IN_GRID_SIZE - 1) * NODE_SPACING;
    const MARGIN = 30;
    const obstacles: ObstaclePayload[] = [];

    for (let i = 0; i < count; i++) {
      const w = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
      const h = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
      const x = Math.floor(Math.random() * (MAP_SIZE - w - MARGIN * 2)) + MARGIN;
      const y = Math.floor(Math.random() * (MAP_SIZE - h - MARGIN * 2)) + MARGIN;
      obstacles.push({
        id: i + 1,
        segments: [
          { start: { x, y }, end: { x: x + w, y } },
          { start: { x: x + w, y }, end: { x: x + w, y: y + h } },
          { start: { x: x + w, y: y + h }, end: { x, y: y + h } },
          { start: { x, y: y + h }, end: { x, y } },
        ],
      });
    }

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

    // Validate move: destination must be adjacent (or same node)
    if (
      action.moveToNodeId !== actor.nodeId &&
      !this.adjacency[actor.nodeId].includes(action.moveToNodeId)
    ) {
      return null;
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
          if (dist > MAX_VIEW_DISTANCE) return;

          const angleOff = this.angleFromDirection(actorNode, targetNode, dirX, dirY);
          if (angleOff >= VIEW_ANGLE_DEG) return;

          // Check if the target is on or near the shot node
          const distToShotNode = this.distance(targetNode, shotNode);
          if (distToShotNode > NODE_SPACING * 1.5) return;

          target.health = Math.max(0, target.health - DAMAGE_PER_SHOT);
          const isEliminated = target.health <= 0;
          if (isEliminated) target.isAlive = false;

          hits.push({ targetId, damage: DAMAGE_PER_SHOT, isEliminated });
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
