import { Model } from '../../model/model';
import { AIConfig } from '../../config/GameConfig';
import type { TeamId } from '../../config/GameConfig';

/**
 * 単一チームの敵存在確率を追跡する。
 * NPC行動決定前にラウンド1回更新され、decideTurn中は読み取り専用。
 *
 * スコアモデル（累積拡散）:
 *   - 各ラウンド: スコアにThreatAccumulationDecayを乗算後、BFS拡散
 *   - 今ラウンドに観測したノード: 1.0（敵あり）または0.0（クリア）で上書き
 *   - 効果: 脅威が目撃地点から外側へ「波紋」のように広がり、時間とともに減衰
 */
export class ThreatMap {
  readonly team: TeamId;

  /** 各ノードをチームメンバーが最後に観測したラウンド番号。-Infinity = 未観測。 */
  private lastSeenRound: Float64Array;

  /** 各ノードを最後に観測したとき敵が存在したかどうか。 */
  private lastSeenHadEnemy: Uint8Array;

  /** キャッシュされた脅威スコア。ラウンドごとに再計算される。 */
  private score: Float32Array;

  /** 敵の死亡が確認されたノード（拡散元として抑制）。 */
  private confirmedDeadAt: Set<number>;

  /** 再利用可能なBFSバッファ — _rescoreの呼び出しごとにクリアして再利用（反復ごとのアロケーションを回避）。 */
  private bfsDiffused: Float32Array;
  private bfsVisited: Uint8Array;
  private bfsFrontier: number[];
  private bfsNext: number[];

  constructor(team: TeamId, nodeCount: number) {
    this.team = team;
    this.lastSeenRound = new Float64Array(nodeCount).fill(-Infinity);
    this.lastSeenHadEnemy = new Uint8Array(nodeCount);
    this.score = new Float32Array(nodeCount).fill(1);
    this.confirmedDeadAt = new Set();
    this.bfsDiffused = new Float32Array(nodeCount);
    this.bfsVisited = new Uint8Array(nodeCount);
    this.bfsFrontier = [];
    this.bfsNext = [];
  }

  /**
   * ラウンドに1回、このチームのいずれかのNPCのdecideTurn前に呼び出す。
   * 1. チームの現在の視野を観測し、目撃情報を記録する。
   * 2. 確認済みの敵の死亡をマークする。
   * 3. すべての脅威スコアを再計算する。
   */
  observeAndRescore(model: Model, roundNumber: number): void {
    this._observe(model, roundNumber);
    this._rescore(model, roundNumber);
  }

  /** 指定ノードの脅威スコア [0..1] を返す。 */
  getScore(nodeId: number): number {
    return this.score[nodeId] ?? 0;
  }

  /**
   * fromNodeIdから到達可能なノードの中で最も脅威スコアが高いノードIDを返す。
   * 現在可視のノード（安全か脅威が既知）は除外する。
   * 候補が見つからない場合はnullを返す。
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
  // プライベートヘルパー
  // ---------------------------------------------------------------------------

  private _observe(model: Model, roundNumber: number): void {
    // チームの視野を取得するために代表となる生存チームメンバーを探す
    let repId: string | undefined;
    for (const [id, p] of model.players) {
      if (p.team === this.team && p.isAlive) {
        repId = id;
        break;
      }
    }
    if (!repId) return;

    const visibleNodeIds = model.getTeamVisibleNodes(repId);

    // 生存中の敵プレイヤーのノードIDを収集
    const enemyNodeIds = new Set<number>();
    for (const [, p] of model.players) {
      if (p.team !== this.team && p.isAlive) {
        enemyNodeIds.add(p.node.id);
      }
    }

    // 死亡が可視の敵を記録 — 拡散元として抑制
    for (const [, p] of model.players) {
      if (p.team !== this.team && !p.isAlive && visibleNodeIds.has(p.node.id)) {
        this.confirmedDeadAt.add(p.node.id);
        this.lastSeenHadEnemy[p.node.id] = 0;
      }
    }

    // 現在可視のすべてのノードのlastSeenを更新
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

    // --- パス0: 前ラウンドから累積されたスコアを減衰 ---
    for (let id = 0; id < nodeCount; id++) {
      this.score[id] *= decay;
    }

    // --- パス1: 観測済みノードを実際の値で上書き ---
    for (let id = 0; id < nodeCount; id++) {
      if (this.lastSeenRound[id] !== roundNumber) continue;
      this.score[id] = this.lastSeenHadEnemy[id] ? 1.0 : 0.0;
    }

    // --- パス2: BFS拡散 — score[]を波源として拡散 ---
    const diffused = this.bfsDiffused;
    diffused.fill(0);

    for (let srcId = 0; srcId < nodeCount; srcId++) {
      const src = this.score[srcId];
      if (src <= 0) continue;
      if (this.confirmedDeadAt.has(srcId)) continue;

      // frontier/visitedバッファを再利用 — 使用前にクリア
      this.bfsVisited.fill(0);
      this.bfsFrontier.length = 0;
      this.bfsVisited[srcId] = 1;
      this.bfsFrontier.push(srcId);
      let dist = 0;

      while (this.bfsFrontier.length > 0 && dist <= maxSteps) {
        const contribution = src * spreadFactor * Math.exp(-dist / sigma);
        for (const nid of this.bfsFrontier) {
          if (contribution > diffused[nid]) diffused[nid] = contribution;
        }
        dist++;
        this.bfsNext.length = 0;
        for (const nid of this.bfsFrontier) {
          const neighbors = model.Edges.List[nid];
          if (!neighbors) continue;
          for (const nb of neighbors) {
            if (!this.bfsVisited[nb]) {
              this.bfsVisited[nb] = 1;
              this.bfsNext.push(nb);
            }
          }
        }
        const tmp = this.bfsFrontier;
        this.bfsFrontier = this.bfsNext;
        this.bfsNext = tmp;
      }
    }

    // --- パス3: 拡散をマージし、クランプし、観測による上書きを再適用 ---
    for (let id = 0; id < nodeCount; id++) {
      if (this.lastSeenRound[id] === roundNumber) {
        this.score[id] = this.lastSeenHadEnemy[id] ? 1.0 : 0.0;
      } else {
        this.score[id] = Math.min(1.0, Math.max(this.score[id], diffused[id]));
      }
    }
  }
}
