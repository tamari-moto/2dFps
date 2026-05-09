import { Model } from '../../model/model';
import { Player } from '../../model/Player';
import { AIConfig, MapConfig } from '../../config/GameConfig';
import { ThreatMap } from './ThreatMap';

/**
 * Evaluates a candidate move node for an NPC using ThreatMap-based estimation.
 * The function does NOT directly inspect enemies the team cannot see — it relies on
 *   - `threatMap`: per-node enemy presence probability (0..1) shared across the team
 *   - `teamVisibleNodeIds`: nodes any teammate is currently looking at
 * Enemies present in `enemies` are only used when their node is in `teamVisibleNodeIds`.
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

  // 1. Cover score: fewer graph edges = more walls around this node
  const edgeCount = model.Edges.List[candidateNodeId]?.length ?? 0;
  const coverScore = 4 - edgeCount;
  const coverWeight = npc.health < AIConfig.RetreatHPThreshold
    ? AIConfig.CoverWeight * AIConfig.RetreatCoverMultiplier
    : AIConfig.CoverWeight;
  score += coverScore * coverWeight;

  // 2. Enemy LOS exposure penalty (estimation-based)
  //    a) Threat-weighted exposure from unobserved nodes that may hide an enemy
  if (threatMap) {
    for (let nid = 0; nid < nodeCount; nid++) {
      const threat = threatMap.getScore(nid);
      if (threat <= AIConfig.ScorerThreatExposureMin) continue;
      if (teamVisibleNodeIds.has(nid)) continue; // observed nodes handled below
      if (model.hasLineOfSight(model.nodeList[nid], candidateNode)) {
        score += AIConfig.EnemyLOSPenalty * threat;
      }
    }
  }
  //    b) Confirmed enemies the team is currently looking at — full penalty
  for (const enemy of enemies) {
    if (!teamVisibleNodeIds.has(enemy.node.id)) continue;
    if (model.hasLineOfSight(enemy.node, candidateNode)) {
      score += AIConfig.EnemyLOSPenalty;
    }
  }

  // 3. Ambush bonus — only against enemies the team currently sees
  for (const enemy of enemies) {
    if (!teamVisibleNodeIds.has(enemy.node.id)) continue;
    if (model.hasLineOfSight(candidateNode, enemy.node)) {
      score += AIConfig.AmbushBonus;
    }
  }

  // 4. Distance score — prefer the nearest visible enemy, else threat-weighted centroid
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
