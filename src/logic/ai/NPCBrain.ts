import { Model } from '../../model/model';
import { Player } from '../../model/Player';
import { PlayerConfig, AIConfig } from '../../config/GameConfig';
import { TurnAction } from '../../schema/types';
import { selectShotTarget } from './ShotSelector';
import { isNodeOccupied } from './NPCGoalManager';
import { NPCGoalState } from './NPCGoalState';
import { ThreatMap } from './ThreatMap';

/**
 * Top-level NPC decision maker.
 * Produces a complete TurnAction for one NPC, following the given goal state.
 */
export function decideTurn(model: Model, npc: Player, goal: NPCGoalState, threatMap: ThreatMap | null): TurnAction {
  const enemies = model.getEnemyPlayers(npc.id);

  // 1. Follow path toward goal node, advance one step
  let moveToNodeId = npc.node.id;

  if (goal.goalNodeId !== npc.node.id) {
    const path = model.getPathToNode(npc.node.id, goal.goalNodeId, Infinity);
    // path = [currentNode, step1, step2, ...]; take MoveRange steps forward
    if (path && path.length > 1) {
      const nextIndex = Math.min(PlayerConfig.MoveRange, path.length - 1);
      const candidate = path[nextIndex];
      if (!isNodeOccupied(model, candidate, npc.id)) {
        moveToNodeId = candidate;
      }
    }
  }

  // 2. Calculate facing angle: prefer nearest visible enemy, else use ThreatMap
  const moveToNode = model.nodeList[moveToNodeId];
  let facingAngle = npc.angle;

  if (enemies.length > 0) {
    const visibleNodes = model.getVisibleNodesAtAngle(moveToNode, npc.angle, PlayerConfig.MaxViewDistance);
    const visibleNodeIds = new Set(visibleNodes.map(n => n.id));
    const visibleEnemies = enemies.filter(e => visibleNodeIds.has(e.node.id));

    if (visibleEnemies.length > 0) {
      // Highest priority: face the nearest visible enemy
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
      // No visible enemy: face the highest-threat node outside current FOV
      const target = threatMap.getHighestThreatNodeFrom(moveToNodeId, model, visibleNodeIds);
      if (target !== null) {
        facingAngle = model.getAngleBetweenNodes(moveToNode, model.nodeList[target]);
      }
      // If no threat candidate, keep previous angle (existing behaviour)
    }
  }

  // 3. Select shot target
  const shotAtNodeId = selectShotTarget(model, npc, moveToNode, facingAngle, enemies);

  return {
    playerId: npc.id,
    moveToNodeId,
    shotAtNodeId,
    angle: facingAngle,
  };
}
