import { Model } from '../../model/model';
import { Player } from '../../model/Player';
import { Node } from '../../model/node';
import { PlayerConfig, PersonalityWeights, CoordinationConfig } from '../../config/GameConfig';
import { MapConfig } from '../../config/GameConfig';

/**
 * Selects the best shot target for an NPC from the move-to position.
 * Uses personality-based priority and focus fire coordination.
 * Returns the target node ID, or undefined if no enemy is visible.
 */
export function selectShotTarget(
  model: Model,
  npc: Player,
  moveToNode: Node,
  angle: number,
  enemies: Player[]
): number | undefined {
  const visibleNodes = model.getVisibleNodesAtAngle(
    moveToNode,
    angle,
    PlayerConfig.MaxViewDistance
  );

  const visibleNodeIds = new Set(visibleNodes.map(n => n.id));
  const gridSize = MapConfig.NodesInGridSize;
  const weights = PersonalityWeights[npc.personality];

  let bestTarget: { nodeId: number; score: number } | undefined;

  for (const enemy of enemies) {
    if (!visibleNodeIds.has(enemy.node.id)) continue;

    // Score: prioritize low-HP enemies and closer distance
    const moveCol = Math.floor(moveToNode.id / gridSize);
    const moveRow = moveToNode.id % gridSize;
    const enemyCol = Math.floor(enemy.node.id / gridSize);
    const enemyRow = enemy.node.id % gridSize;
    const dist = Math.abs(moveCol - enemyCol) + Math.abs(moveRow - enemyRow);

    const hpBonus = (enemy.maxHealth - enemy.health) * weights.shotLowHPPriority / enemy.maxHealth;
    let score = hpBonus - dist;

    // Focus fire: bonus for enemies below HP threshold
    const hpRatio = enemy.health / enemy.maxHealth;
    if (hpRatio <= CoordinationConfig.FocusFireHPThreshold) {
      score += CoordinationConfig.FocusFireBonus;
    }

    if (!bestTarget || score > bestTarget.score) {
      bestTarget = { nodeId: enemy.node.id, score };
    }
  }

  return bestTarget?.nodeId;
}
