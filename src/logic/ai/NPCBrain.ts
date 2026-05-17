import { Model } from '../../model/model';
import { Player } from '../../model/Player';
import { PlayerConfig, AIConfig } from '../../config/GameConfig';
import { TurnAction } from '../../schema/types';
import { selectShotTarget } from './ShotSelector';
import { isNodeOccupied } from './NPCGoalManager';
import { NPCGoalState } from './NPCGoalState';
import { ThreatMap } from './ThreatMap';

/**
 * NPC行動決定のトップレベル関数。
 * 指定されたゴール状態に従い、1体のNPCの完全なTurnActionを生成する。
 */
export function decideTurn(model: Model, npc: Player, goal: NPCGoalState, threatMap: ThreatMap | null): TurnAction {
  const enemies = model.getEnemyPlayers(npc.id);

  // 1. ゴールノードへの経路を追跡し、1ステップ前進
  let moveToNodeId = npc.node.id;

  if (goal.goalNodeId !== npc.node.id) {
    const path = model.getPathToNode(npc.node.id, goal.goalNodeId, Infinity);
    // path = [currentNode, step1, step2, ...]; MoveRange分だけ前進
    if (path && path.length > 1) {
      const nextIndex = Math.min(PlayerConfig.MoveRange, path.length - 1);
      const candidate = path[nextIndex];
      if (!isNodeOccupied(model, candidate, npc.id)) {
        moveToNodeId = candidate;
      }
    }
  }

  // 2. 向きの角度を計算: 最も近い可視敵を優先、なければThreatMapを参照
  const moveToNode = model.nodeList[moveToNodeId];
  let facingAngle = npc.angle;

  if (enemies.length > 0) {
    const visibleNodes = model.getVisibleNodesAtAngle(moveToNode, npc.angle, PlayerConfig.MaxViewDistance);
    const visibleNodeIds = new Set(visibleNodes.map(n => n.id));
    const visibleEnemies = enemies.filter(e => visibleNodeIds.has(e.node.id));

    if (visibleEnemies.length > 0) {
      // 最優先: 最も近い可視敵の方向を向く
      let nearestEnemy: Player | undefined;
      let nearestDist = Infinity;
      for (const enemy of visibleEnemies) {
        const dist = model.getNodeDistance(moveToNode, enemy.node);
        if (dist < nearestDist) {
          nearestDist = dist;
          nearestEnemy = enemy;
        }
      }
      if (nearestEnemy) {
        facingAngle = model.getAngleBetweenNodes(moveToNode, nearestEnemy.node);
      }
    } else if (AIConfig.ThreatMapAngleEnabled && threatMap !== null) {
      // 可視敵なし: 現在の視野外で最も脅威スコアの高いノードの方向を向く
      const target = threatMap.getHighestThreatNodeFrom(moveToNodeId, model, visibleNodeIds);
      if (target !== null) {
        facingAngle = model.getAngleBetweenNodes(moveToNode, model.nodeList[target]);
      }
      // 脅威候補なし: 前の角度を維持（既存の挙動）
    }
  }

  // 3. 射撃対象を選択
  const shotAtNodeId = selectShotTarget(model, npc, moveToNode, facingAngle, enemies);

  return {
    playerId: npc.id,
    moveToNodeId,
    shotAtNodeId,
    angle: facingAngle,
  };
}
