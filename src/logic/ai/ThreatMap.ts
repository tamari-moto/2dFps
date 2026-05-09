import { Model } from '../../model/model';
import { AIConfig } from '../../config/GameConfig';
import type { TeamId } from '../../config/GameConfig';

/**
 * Tracks enemy presence probability for a single team.
 * Updated once per round before NPC decisions; read-only during decideTurn.
 *
 * Score model (cumulative diffusion):
 *   - Each round: scores are multiplied by ThreatAccumulationDecay, then BFS-diffused outward
 *   - Nodes observed this round: overwritten with 1.0 (enemy present) or 0.0 (clear)
 *   - Effect: threat "ripples" outward from sightings and fades over time
 */
export class ThreatMap {
  readonly team: TeamId;

  /** Last round number when each node was observed by any teammate. -Infinity = never. */
  private lastSeenRound: Float64Array;

  /** Whether an enemy was present when each node was last observed. */
  private lastSeenHadEnemy: Uint8Array;

  /** Cached threat scores, recomputed each round. */
  private score: Float32Array;

  /** Nodes where an enemy death was confirmed (suppressed as diffusion sources). */
  private confirmedDeadAt: Set<number>;

  constructor(team: TeamId, nodeCount: number) {
    this.team = team;
    this.lastSeenRound = new Float64Array(nodeCount).fill(-Infinity);
    this.lastSeenHadEnemy = new Uint8Array(nodeCount);
    this.score = new Float32Array(nodeCount).fill(1);
    this.confirmedDeadAt = new Set();
  }

  /**
   * Called once per round, before decideTurn for any NPC on this team.
   * 1. Observes current team FOV and records sightings.
   * 2. Marks confirmed enemy deaths.
   * 3. Recomputes all threat scores.
   */
  observeAndRescore(model: Model, roundNumber: number): void {
    this._observe(model, roundNumber);
    this._rescore(model, roundNumber);
  }

  /** Returns the threat score [0..1] for a given node. */
  getScore(nodeId: number): number {
    return this.score[nodeId] ?? 0;
  }

  /**
   * Returns the node ID with the highest threat score reachable from fromNodeId,
   * excluding nodes currently visible (already known safe/threatened).
   * Returns null if no candidate found.
   */
  getHighestThreatNodeFrom(
    fromNodeId: number,
    model: Model,
    currentlyVisible: Set<number>,
  ): number | null {
    const candidates = model.getReachableNodes(fromNodeId, AIConfig.ThreatMapMaxLookDistance);
    let bestId: number | null = null;
    let bestScore = -1;

    for (const nodeId of candidates) {
      if (currentlyVisible.has(nodeId)) continue;
      const s = this.score[nodeId] ?? 0;
      if (s > bestScore) {
        bestScore = s;
        bestId = nodeId;
      }
    }

    return bestId;
  }

  // ---------------------------------------------------------------------------
  // Private helpers
  // ---------------------------------------------------------------------------

  private _observe(model: Model, roundNumber: number): void {
    // Get a representative alive teammate to query team visibility
    let repId: string | undefined;
    for (const [id, p] of model.players) {
      if (p.team === this.team && p.isAlive) {
        repId = id;
        break;
      }
    }
    if (!repId) return;

    const visibleNodeIds = model.getTeamVisibleNodes(repId);

    // Collect enemy player node IDs that are alive
    const enemyNodeIds = new Set<number>();
    for (const [, p] of model.players) {
      if (p.team !== this.team && p.isAlive) {
        enemyNodeIds.add(p.node.id);
      }
    }

    // Record dead enemies whose bodies are visible — suppress as diffusion source
    for (const [, p] of model.players) {
      if (p.team !== this.team && !p.isAlive && visibleNodeIds.has(p.node.id)) {
        this.confirmedDeadAt.add(p.node.id);
        this.lastSeenHadEnemy[p.node.id] = 0;
      }
    }

    // Update lastSeen for all currently visible nodes
    for (const nodeId of visibleNodeIds) {
      this.lastSeenRound[nodeId] = roundNumber;
      this.lastSeenHadEnemy[nodeId] = enemyNodeIds.has(nodeId) ? 1 : 0;
    }
  }

  private _rescore(model: Model, roundNumber: number): void {
    const nodeCount = model.nodeList.length;
    const decay = AIConfig.ThreatAccumulationDecay;
    const spreadFactor = AIConfig.ThreatSpreadFactor;
    const sigma = AIConfig.ThreatSigma;
    const maxSteps = AIConfig.ThreatMaxDiffusionSteps;

    // --- Pass 0: decay accumulated scores from previous round ---
    for (let id = 0; id < nodeCount; id++) {
      this.score[id] *= decay;
    }

    // --- Pass 1: overwrite observed nodes with ground-truth values ---
    for (let id = 0; id < nodeCount; id++) {
      if (this.lastSeenRound[id] !== roundNumber) continue;
      this.score[id] = this.lastSeenHadEnemy[id] ? 1.0 : 0.0;
    }

    // --- Pass 2: BFS diffusion — score[] is the wave source ---
    const diffused = new Float32Array(nodeCount);

    for (let srcId = 0; srcId < nodeCount; srcId++) {
      const src = this.score[srcId];
      if (src <= 0) continue;
      if (this.confirmedDeadAt.has(srcId)) continue;

      const visited = new Set<number>([srcId]);
      let frontier = [srcId];
      let dist = 0;

      while (frontier.length > 0 && dist <= maxSteps) {
        const contribution = src * spreadFactor * Math.exp(-dist / sigma);
        for (const nid of frontier) {
          if (contribution > diffused[nid]) {
            diffused[nid] = contribution;
          }
        }
        dist++;
        const next: number[] = [];
        for (const nid of frontier) {
          const neighbors = model.Edges.List[nid];
          if (!neighbors) continue;
          for (const nb of neighbors) {
            if (!visited.has(nb)) {
              visited.add(nb);
              next.push(nb);
            }
          }
        }
        frontier = next;
      }
    }

    // --- Pass 3: merge diffusion, clamp, re-apply observed overrides ---
    for (let id = 0; id < nodeCount; id++) {
      if (this.lastSeenRound[id] === roundNumber) {
        this.score[id] = this.lastSeenHadEnemy[id] ? 1.0 : 0.0;
      } else {
        this.score[id] = Math.min(1.0, Math.max(this.score[id], diffused[id]));
      }
    }
  }
}
