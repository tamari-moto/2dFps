import { Model } from '../../model/model';
import { Player } from '../../model/Player';
import { AIConfig, MapConfig } from '../../config/GameConfig';
import { ThreatMap } from './ThreatMap';

/**
 * ThreatMapベースの推定でNPCの移動候補ノードを評価する。
 * チームが見えていない敵を直接参照しない — 以下に依存する:
 *   - `threatMap`: チーム共有のノードごとの敵存在確率（0..1）
 *   - `teamVisibleNodeIds`: いずれかのチームメンバーが現在視認中のノード
 * `enemies`の敵はそのノードが`teamVisibleNodeIds`に含まれる場合のみ使用する。
 */
export function scoreNode(
  model: Model,
  npc: Player,
  candidateNodeId: number,
  enemies: Player[],
  threatMap: ThreatMap | null,
  teamVisibleNodeIds: Set<number>,
): number {
  let score = 0;
  const candidateNode = model.nodeList[candidateNodeId];
  const gridSize = MapConfig.NodesInGridSize;
  const nodeCount = model.nodeList.length;

  // 1. カバースコア: グラフエッジが少ない = 周囲を壁に囲まれている
  const edgeCount = model.Edges.List[candidateNodeId]?.length ?? 0;
  const coverScore = 4 - edgeCount;
  const coverWeight = npc.health < AIConfig.RetreatHPThreshold
    ? AIConfig.CoverWeight * AIConfig.RetreatCoverMultiplier
    : AIConfig.CoverWeight;
  score += coverScore * coverWeight;

  // 2. 敵LOS露出ペナルティ（推定ベース）
  //    a) 敵が潜んでいる可能性がある未観測ノードからの脅威加重露出
  if (threatMap) {
    for (let nid = 0; nid < nodeCount; nid++) {
      const threat = threatMap.getScore(nid);
      if (threat <= AIConfig.ScorerThreatExposureMin) continue;
      if (teamVisibleNodeIds.has(nid)) continue; // 観測済みノードは下で処理
      if (model.hasLineOfSight(model.nodeList[nid], candidateNode)) {
        score += AIConfig.EnemyLOSPenalty * threat;
      }
    }
  }
  //    b) チームが現在視認中の確認済み敵 — フルペナルティ
  for (const enemy of enemies) {
    if (!teamVisibleNodeIds.has(enemy.node.id)) continue;
    if (model.hasLineOfSight(enemy.node, candidateNode)) {
      score += AIConfig.EnemyLOSPenalty;
    }
  }

  // 3. 待ち伏せボーナス — チームが現在視認中の敵のみ対象
  for (const enemy of enemies) {
    if (!teamVisibleNodeIds.has(enemy.node.id)) continue;
    if (model.hasLineOfSight(candidateNode, enemy.node)) {
      score += AIConfig.AmbushBonus;
    }
  }

  // 4. 距離スコア — 最も近い可視敵を優先、なければ脅威加重重心を使用
  const candidateCol = Math.floor(candidateNodeId / gridSize);
  const candidateRow = candidateNodeId % gridSize;

  let targetDist = Infinity;

  let minVisDist = Infinity;
  for (const enemy of enemies) {
    if (!teamVisibleNodeIds.has(enemy.node.id)) continue;
    const enemyCol = Math.floor(enemy.node.id / gridSize);
    const enemyRow = enemy.node.id % gridSize;
    const d = Math.abs(candidateCol - enemyCol) + Math.abs(candidateRow - enemyRow);
    if (d < minVisDist) minVisDist = d;
  }

  if (minVisDist !== Infinity) {
    targetDist = minVisDist;
  } else if (threatMap) {
    let sumW = 0, sumWX = 0, sumWY = 0;
    for (let nid = 0; nid < nodeCount; nid++) {
      const t = threatMap.getScore(nid);
      if (t <= AIConfig.ScorerThreatExposureMin) continue;
      const col = Math.floor(nid / gridSize);
      const row = nid % gridSize;
      sumW += t;
      sumWX += t * col;
      sumWY += t * row;
    }
    if (sumW > 0) {
      const cx = sumWX / sumW;
      const cy = sumWY / sumW;
      targetDist = Math.abs(candidateCol - cx) + Math.abs(candidateRow - cy);
    }
  }

  if (targetDist !== Infinity) {
    if (npc.health < AIConfig.RetreatHPThreshold) {
      score += targetDist * Math.abs(AIConfig.DistanceWeight);
    } else {
      score += targetDist * AIConfig.DistanceWeight;
    }
  }

  return score;
}
