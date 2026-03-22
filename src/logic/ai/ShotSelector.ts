import { Model } from '../../model/model';
import { Player } from '../../model/Player';
import { Node } from '../../model/node';
import { PlayerConfig, AIConfig } from '../../config/GameConfig';
import { MapConfig } from '../../config/GameConfig';

/**
 * Selects the best shot target for an NPC from the move-to position.
 * Returns the target node ID, or undefined if no enemy is visible.
 */
export function selectShotTarget(
  model: Model,
  _npc: Player,
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

  let bestTarget: { nodeId: number; score: number } | undefined;

  for (const enemy of enemies) {
    if (!visibleNodeIds.has(enemy.node.id)) continue;

    // Score: prioritize low-HP enemies and closer distance
    const moveCol = Math.floor(moveToNode.id / gridSize);
    const moveRow = moveToNode.id % gridSize;
    const enemyCol = Math.floor(enemy.node.id / gridSize);
    const enemyRow = enemy.node.id % gridSize;
    const dist = Math.abs(moveCol - enemyCol) + Math.abs(moveRow - enemyRow);

    const hpBonus = (enemy.maxHealth - enemy.health) * AIConfig.ShotLowHPPriority / enemy.maxHealth;
    const score = hpBonus - dist;

    if (!bestTarget || score > bestTarget.score) {
      bestTarget = { nodeId: enemy.node.id, score };
    }
  }

  return bestTarget?.nodeId;
}
