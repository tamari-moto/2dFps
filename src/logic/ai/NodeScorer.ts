import { Model } from '../../model/model';
import { Player } from '../../model/Player';
import { PersonalityWeights, CoordinationConfig } from '../../config/GameConfig';
import { MapConfig } from '../../config/GameConfig';

/**
 * Context about allied NPCs for coordination scoring
 */
export interface CoordinationContext {
  allyPositions: { nodeId: number }[];
}

/**
 * Evaluates a candidate move node for an NPC.
 * Uses personality-based weights, coordination bonuses, and memory-based seeking.
 */
export function scoreNode(
  model: Model,
  npc: Player,
  candidateNodeId: number,
  enemies: Player[],
  coordination?: CoordinationContext
): number {
  let score = 0;
  const candidateNode = model.nodeList[candidateNodeId];
  const gridSize = MapConfig.NodesInGridSize;
  const weights = PersonalityWeights[npc.personality];

  // 1. Cover score: fewer graph edges = more walls around this node
  const edgeCount = model.Edges.List[candidateNodeId]?.length ?? 0;
  const coverScore = 4 - edgeCount;
  const coverWeight = npc.health < weights.retreatHPThreshold
    ? weights.coverWeight * weights.retreatCoverMultiplier
    : weights.coverWeight;
  score += coverScore * coverWeight;

  // 2. Enemy LOS exposure & ambush potential
  for (const enemy of enemies) {
    const enemySeesCandidate = model.hasLineOfSight(enemy.node, candidateNode);
    const npcSeesEnemy = model.hasLineOfSight(candidateNode, enemy.node);

    if (enemySeesCandidate) {
      score += weights.enemyLOSPenalty;
    }

    if (npcSeesEnemy && !enemySeesCandidate) {
      score += weights.ambushBonus;
    }
  }

  // 3. Distance to nearest enemy (Manhattan distance on grid)
  let minDistance = Infinity;
  const candidateCol = Math.floor(candidateNodeId / gridSize);
  const candidateRow = candidateNodeId % gridSize;

  for (const enemy of enemies) {
    const enemyCol = Math.floor(enemy.node.id / gridSize);
    const enemyRow = enemy.node.id % gridSize;
    const dist = Math.abs(candidateCol - enemyCol) + Math.abs(candidateRow - enemyRow);
    if (dist < minDistance) {
      minDistance = dist;
    }
  }

  if (minDistance !== Infinity) {
    if (npc.health < weights.retreatHPThreshold) {
      score += minDistance * Math.abs(weights.distanceWeight);
    } else {
      score += minDistance * weights.distanceWeight;
    }
  }

  // 4. Coordination: cluster penalty (avoid grouping with allies)
  if (coordination) {
    for (const ally of coordination.allyPositions) {
      const allyCol = Math.floor(ally.nodeId / gridSize);
      const allyRow = ally.nodeId % gridSize;
      const allyDist = Math.abs(candidateCol - allyCol) + Math.abs(candidateRow - allyRow);
      if (allyDist < CoordinationConfig.ClusterDistance) {
        score += CoordinationConfig.ClusterPenalty;
      }
    }

    // 5. Coordination: flank bonus
    if (enemies.length > 0 && coordination.allyPositions.length > 0) {
      score += calcFlankBonus(candidateCol, candidateRow, enemies, coordination, gridSize);
    }
  }

  // 6. Memory: seek last known enemy positions when no enemies visible
  if (enemies.length === 0 && npc.enemyMemory.size > 0) {
    score += calcMemorySeekScore(candidateCol, candidateRow, npc, gridSize);
  }

  return score;
}

/**
 * Calculates flanking bonus: rewards positions that form a wide angle
 * with an ally relative to the nearest enemy.
 */
function calcFlankBonus(
  candidateCol: number,
  candidateRow: number,
  enemies: Player[],
  coordination: CoordinationContext,
  gridSize: number,
): number {
  let bonus = 0;
  // Check flanking against the nearest enemy
  let nearestEnemy = enemies[0];
  let nearestDist = Infinity;
  for (const enemy of enemies) {
    const eCol = Math.floor(enemy.node.id / gridSize);
    const eRow = enemy.node.id % gridSize;
    const d = Math.abs(candidateCol - eCol) + Math.abs(candidateRow - eRow);
    if (d < nearestDist) {
      nearestDist = d;
      nearestEnemy = enemy;
    }
  }

  const eCol = Math.floor(nearestEnemy.node.id / gridSize);
  const eRow = nearestEnemy.node.id % gridSize;

  for (const ally of coordination.allyPositions) {
    const aCol = Math.floor(ally.nodeId / gridSize);
    const aRow = ally.nodeId % gridSize;

    // Vectors from enemy to candidate and from enemy to ally
    const v1x = candidateCol - eCol;
    const v1y = candidateRow - eRow;
    const v2x = aCol - eCol;
    const v2y = aRow - eRow;

    const mag1 = Math.sqrt(v1x * v1x + v1y * v1y);
    const mag2 = Math.sqrt(v2x * v2x + v2y * v2y);
    if (mag1 === 0 || mag2 === 0) continue;

    const dot = (v1x * v2x + v1y * v2y) / (mag1 * mag2);
    const angleDeg = Math.acos(Math.max(-1, Math.min(1, dot))) * (180 / Math.PI);

    if (angleDeg >= CoordinationConfig.FlankAngleThreshold) {
      bonus += CoordinationConfig.FlankBonus;
      break; // One flank bonus per node is enough
    }
  }

  return bonus;
}

/**
 * Calculates bonus for moving toward last known enemy positions (memory-based seeking).
 */
function calcMemorySeekScore(
  candidateCol: number,
  candidateRow: number,
  npc: Player,
  gridSize: number,
): number {
  let bestBonus = 0;

  for (const [, entry] of npc.enemyMemory) {
    const memCol = Math.floor(entry.nodeId / gridSize);
    const memRow = entry.nodeId % gridSize;
    const dist = Math.abs(candidateCol - memCol) + Math.abs(candidateRow - memRow);

    // Closer to last known position = higher bonus, scaled by recency
    const recencyFactor = 1 - entry.turnsAgo / (CoordinationConfig.MemoryDuration + 1);
    const seekBonus = CoordinationConfig.SeekLastKnownBonus * recencyFactor / Math.max(1, dist);

    if (seekBonus > bestBonus) {
      bestBonus = seekBonus;
    }
  }

  return bestBonus;
}
