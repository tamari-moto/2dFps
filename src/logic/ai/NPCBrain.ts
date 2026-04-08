import { Model } from '../../model/model';
import { Player } from '../../model/Player';
import { PlayerConfig } from '../../config/GameConfig';
import { TurnAction } from '../../schema/types';
import { scoreNode, CoordinationContext } from './NodeScorer';
import { selectShotTarget } from './ShotSelector';

/**
 * Top-level NPC decision maker.
 * Produces a complete TurnAction for one NPC.
 * Integrates personality weights, enemy memory, and NPC coordination.
 */
export function decideTurn(model: Model, npc: Player): TurnAction {
  const enemies = getAliveEnemies(model, npc.id);

  // Update enemy memory based on current visibility
  const visibleNodeIds = new Set(
    model.getVisibleNodesAtAngle(npc.node, npc.angle, PlayerConfig.MaxViewDistance)
      .map(n => n.id)
  );
  const visibleEnemyIds = new Set(
    enemies.filter(e => visibleNodeIds.has(e.node.id)).map(e => e.id)
  );
  npc.updateMemory(visibleEnemyIds, enemies);

  // Build coordination context from allied NPC positions
  const coordination = buildCoordinationContext(model, npc.id);

  // 1. Evaluate candidate move nodes: reachable within MoveRange + current (stay)
  const reachable = model.getReachableNodes(npc.node.id, PlayerConfig.MoveRange);
  const candidates = [npc.node.id, ...reachable];

  let bestNodeId = npc.node.id;
  let bestScore = -Infinity;

  for (const nodeId of candidates) {
    if (isNodeOccupied(model, nodeId, npc.id)) continue;

    const score = scoreNode(model, npc, nodeId, enemies, coordination);
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
  } else if (npc.enemyMemory.size > 0) {
    // No visible enemies: face toward most recent memory location
    let bestMemory: { nodeId: number; turnsAgo: number } | undefined;
    for (const [, entry] of npc.enemyMemory) {
      if (!bestMemory || entry.turnsAgo < bestMemory.turnsAgo) {
        bestMemory = entry;
      }
    }
    if (bestMemory) {
      const memNode = model.nodeList[bestMemory.nodeId];
      if (memNode) {
        facingAngle = model.getAngleBetweenNodes(moveToNode, memNode);
      }
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

function buildCoordinationContext(model: Model, npcId: string): CoordinationContext {
  const allyPositions: { nodeId: number }[] = [];
  for (const [id, player] of model.players) {
    if (id === npcId || !player.isNPC || !player.isAlive) continue;
    allyPositions.push({ nodeId: player.node.id });
  }
  return { allyPositions };
}

function getAliveEnemies(model: Model, npcId: string): Player[] {
  const enemies: Player[] = [];
  for (const [id, player] of model.players) {
    if (id !== npcId && player.isAlive) {
      enemies.push(player);
    }
  }
  return enemies;
}

function isNodeOccupied(model: Model, nodeId: number, excludeId: string): boolean {
  for (const [id, player] of model.players) {
    if (id === excludeId) continue;
    if (player.isAlive && player.node.id === nodeId) return true;
  }
  return false;
}
