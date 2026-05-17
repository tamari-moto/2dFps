import { Model } from '../../model/model';
import { Player } from '../../model/Player';
import { Node } from '../../model/node';
import { PlayerConfig, AIConfig } from '../../config/GameConfig';
import { MapConfig } from '../../config/GameConfig';

/**
 * 移動先の位置からNPCの最適な射撃対象を選択する。
 * 対象のノードIDを返す。可視の敵がいない場合はundefinedを返す。
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

    // スコア: 低HP敵と近い距離を優先
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
