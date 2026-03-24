import { Model } from '../../model/model';
import { Player } from '../../model/Player';
import { AIConfig } from '../../config/GameConfig';
import { MapConfig } from '../../config/GameConfig';

/**
 * Evaluates a candidate move node for an NPC.
 * Pure function: reads from Model, returns a numeric score.
 */
export function scoreNode(
  model: Model,
  npc: Player,
  candidateNodeId: number,
  enemies: Player[]
): number {
  let score = 0;
  const candidateNode = model.nodeList[candidateNodeId];
  const gridSize = MapConfig.NodesInGridSize;

  // 1. Cover score: fewer graph edges = more walls around this node
  const edgeCount = model.Edges.List[candidateNodeId]?.length ?? 0;
  const coverScore = 4 - edgeCount; // max 4 directions, so 0-4 walls
  const coverWeight = npc.health < AIConfig.RetreatHPThreshold
    ? AIConfig.CoverWeight * AIConfig.RetreatCoverMultiplier
    : AIConfig.CoverWeight;
  score += coverScore * coverWeight;

  // 2. Enemy LOS exposure & ambush potential
  for (const enemy of enemies) {
    const enemySeesCandidate = model.hasLineOfSight(enemy.node, candidateNode);
    const npcSeesEnemy = model.hasLineOfSight(candidateNode, enemy.node);

    if (enemySeesCandidate) {
      score += AIConfig.EnemyLOSPenalty;
    }

    // 3. Ambush: NPC can see enemy but enemy can't see NPC
    if (npcSeesEnemy && !enemySeesCandidate) {
      score += AIConfig.AmbushBonus;
    }
  }

  // 4. Distance to nearest enemy (Manhattan distance on grid)
  let minDistance = Infinity;
  for (const enemy of enemies) {
    const candidateCol = Math.floor(candidateNodeId / gridSize);
    const candidateRow = candidateNodeId % gridSize;
    const enemyCol = Math.floor(enemy.node.id / gridSize);
    const enemyRow = enemy.node.id % gridSize;
    const dist = Math.abs(candidateCol - enemyCol) + Math.abs(candidateRow - enemyRow);
    if (dist < minDistance) {
      minDistance = dist;
    }
  }

  if (minDistance !== Infinity) {
    if (npc.health < AIConfig.RetreatHPThreshold) {
      // Low HP: prefer distance from enemies (invert weight)
      score += minDistance * Math.abs(AIConfig.DistanceWeight);
    } else {
      // Normal: prefer closer to enemies
      score += minDistance * AIConfig.DistanceWeight;
    }
  }

  return score;
}
