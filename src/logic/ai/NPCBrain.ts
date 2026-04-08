import { Model } from '../../model/model';
import { Player } from '../../model/Player';
import { PlayerConfig } from '../../config/GameConfig';
import { TurnAction } from '../../schema/types';
import { scoreNode } from './NodeScorer';
import { selectShotTarget } from './ShotSelector';

/**
 * Top-level NPC decision maker.
 * Produces a complete TurnAction for one NPC.
 */
export function decideTurn(model: Model, npc: Player): TurnAction {
  const enemies = model.getEnemyPlayers(npc.id);

  // 1. Evaluate candidate move nodes: reachable within MoveRange + current (stay)
  const reachable = model.getReachableNodes(npc.node.id, PlayerConfig.MoveRange);
  const candidates = [npc.node.id, ...reachable];

  let bestNodeId = npc.node.id;
  let bestScore = -Infinity;

  for (const nodeId of candidates) {
    // Skip nodes occupied by other alive players
    if (isNodeOccupied(model, nodeId, npc.id)) continue;

    const score = scoreNode(model, npc, nodeId, enemies);
    if (score > bestScore) {
      bestScore = score;
      bestNodeId = nodeId;
    }
  }

  // 2. Calculate facing angle toward nearest visible enemy from chosen node
  const moveToNode = model.nodeList[bestNodeId];
  let facingAngle = npc.angle;

  if (enemies.length > 0) {
    let nearestEnemy: Player | undefined;
    let nearestDist = Infinity;
    for (const enemy of enemies) {
      const dist = model.getNodeDistance(moveToNode, enemy.node);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestEnemy = enemy;
      }
    }
    if (nearestEnemy) {
      facingAngle = model.getAngleBetweenNodes(moveToNode, nearestEnemy.node);
    }
  }

  // 3. Select shot target
  const shotAtNodeId = selectShotTarget(model, npc, moveToNode, facingAngle, enemies);

  return {
    playerId: npc.id,
    moveToNodeId: bestNodeId,
    shotAtNodeId,
  };
}

function isNodeOccupied(model: Model, nodeId: number, excludeId: string): boolean {
  for (const [id, player] of model.players) {
    if (id === excludeId) continue;
    if (player.isAlive && player.node.id === nodeId) return true;
  }
  return false;
}
