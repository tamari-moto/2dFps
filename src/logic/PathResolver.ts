import { Model } from '../model/model';
import { TurnAction } from '../schema/types';

export interface ResolvedAction {
  playerId: string;
  finalNodeId: number;
  /** Full traversed path: [fromNodeId, step1, ..., finalNodeId] */
  path: number[];
  shotAtNodeId: number | undefined;
}

/**
 * Computes collision-aware movement paths for all players in a round.
 *
 * Algorithm:
 * 1. Compute BFS shortest path for each player (from current position to moveToNodeId).
 * 2. Step through the paths in parallel (step 1, 2, ..., maxPathLength).
 *    At each step, any node claimed by 2+ moving players causes all claimants
 *    to be frozen at their previous confirmed node.
 * 3. Also block movement into a node that is the starting position of a
 *    stationary player (one whose moveToNodeId === fromNodeId).
 *
 * Returns one ResolvedAction per input action with the collision-adjusted
 * finalNodeId and the full traversed path (including both endpoints).
 */
export function resolveRoundPaths(
  actions: TurnAction[],
  model: Model,
  maxSteps: number,
): ResolvedAction[] {
  // ── 1. Compute raw paths ────────────────────────────────────────────────
  type PlayerPath = {
    playerId: string;
    fromNodeId: number;
    steps: number[];   // node IDs at step 1, 2, … (excludes start node)
    confirmed: number; // last confirmed node ID (starts at fromNodeId)
    stopped: boolean;
    shotAtNodeId: number | undefined;
  };

  const paths: PlayerPath[] = [];

  for (const action of actions) {
    const player = model.getPlayer(action.playerId);
    if (!player) continue;

    const fromId = player.node.id;

    if (action.moveToNodeId === fromId) {
      paths.push({
        playerId: action.playerId,
        fromNodeId: fromId,
        steps: [],
        confirmed: fromId,
        stopped: true,
        shotAtNodeId: action.shotAtNodeId,
      });
      continue;
    }

    const raw = model.getPathToNode(fromId, action.moveToNodeId, maxSteps);
    // raw = [fromId, step1, ..., toId] or null
    const steps = raw ? raw.slice(1) : [];

    paths.push({
      playerId: action.playerId,
      fromNodeId: fromId,
      steps,
      confirmed: fromId,
      stopped: steps.length === 0,
      shotAtNodeId: action.shotAtNodeId,
    });
  }

  // ── 2. Stationary player positions (block movement into their node) ──────
  const stationaryNodes = new Set<number>();
  for (const p of paths) {
    if (p.stopped) stationaryNodes.add(p.fromNodeId);
  }

  // ── 3. Step-by-step collision resolution ────────────────────────────────
  const maxLen = Math.max(...paths.map(p => p.steps.length), 0);

  for (let k = 0; k < maxLen; k++) {
    // Build: nodeId → list of playerIds trying to step there at step k
    const claimMap = new Map<number, string[]>();

    for (const p of paths) {
      if (p.stopped) continue;
      if (k >= p.steps.length) continue;

      const targetNode = p.steps[k];

      // Block: stationary player occupies target node
      if (stationaryNodes.has(targetNode)) {
        p.stopped = true;
        continue;
      }

      const existing = claimMap.get(targetNode) ?? [];
      existing.push(p.playerId);
      claimMap.set(targetNode, existing);
    }

    // Freeze all players involved in a collision (2+ claim same node)
    for (const [, claimants] of claimMap) {
      if (claimants.length >= 2) {
        for (const pid of claimants) {
          const p = paths.find(x => x.playerId === pid)!;
          p.stopped = true;
        }
      }
    }

    // Advance confirmed position for players still moving
    for (const p of paths) {
      if (p.stopped) continue;
      if (k >= p.steps.length) continue;
      p.confirmed = p.steps[k];
      if (k === p.steps.length - 1) p.stopped = true; // reached destination
    }
  }

  // ── 4. Build ResolvedAction[] ────────────────────────────────────────────
  return paths.map(p => {
    // Reconstruct the traversed path up to the confirmed node
    const confirmedIdx = p.steps.indexOf(p.confirmed);
    const traversedSteps = confirmedIdx >= 0 ? p.steps.slice(0, confirmedIdx + 1) : [];
    const path = [p.fromNodeId, ...traversedSteps];

    return {
      playerId: p.playerId,
      finalNodeId: p.confirmed,
      path,
      shotAtNodeId: p.shotAtNodeId,
    };
  });
}
