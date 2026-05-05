import { Model } from '../../model/model';
import { Player } from '../../model/Player';
import { AIConfig } from '../../config/GameConfig';
import { scoreNode } from './NodeScorer';
import { NPCGoalState } from './NPCGoalState';

export function isNodeOccupied(model: Model, nodeId: number, excludeId: string): boolean {
  for (const [id, player] of model.players) {
    if (id === excludeId) continue;
    if (player.isAlive && player.node.id === nodeId) return true;
  }
  return false;
}

export function selectGoalNode(model: Model, npc: Player): number {
  const enemies = model.getEnemyPlayers(npc.id);
  const reachable = model.getReachableNodes(npc.node.id, AIConfig.GoalSearchRadius);
  const candidates = Array.from(reachable);

  if (candidates.length === 0) return npc.node.id;

  let bestNodeId = npc.node.id;
  let bestScore = -Infinity;

  for (const nodeId of candidates) {
    if (isNodeOccupied(model, nodeId, npc.id)) continue;
    const score = scoreNode(model, npc, nodeId, enemies);
    if (score > bestScore) {
      bestScore = score;
      bestNodeId = nodeId;
    }
  }

  return bestNodeId;
}

export function updateGoal(model: Model, npc: Player, goal: NPCGoalState): NPCGoalState {
  const arrivedAtGoal = npc.node.id === goal.goalNodeId;
  const timedOut = goal.turnsElapsed >= AIConfig.GoalTimeoutTurns;
  const hpDropped = npc.health < goal.goalSetAtHP - AIConfig.GoalHPChangeThreshold;

  if (arrivedAtGoal || timedOut || hpDropped) {
    return {
      goalNodeId: selectGoalNode(model, npc),
      goalSetAtHP: npc.health,
      turnsElapsed: 0,
    };
  }

  return { ...goal, turnsElapsed: goal.turnsElapsed + 1 };
}
