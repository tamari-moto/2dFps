import { Model } from '../model/model';
import { Player } from '../model/Player';
import { TurnAction } from '../schema/types';
import { decideTurn } from './ai/NPCBrain';
import { NPCGoalState } from './ai/NPCGoalState';
import { selectGoalNode, updateGoal } from './ai/NPCGoalManager';

/**
 * Collects NPC turn decisions for simultaneous round execution.
 * NPCs decide based on the current model state (same snapshot the human planned against).
 */
export class TurnManager {
  private model: Model;
  private npcGoals: Map<string, NPCGoalState> = new Map();

  constructor(model: Model) {
    this.model = model;
  }

  /**
   * Returns the intended TurnAction for every alive NPC.
   * Does NOT execute or apply any actions — the caller submits them as a round.
   */
  collectNPCActions(): TurnAction[] {
    const aliveNPCs = this.getAliveNPCs();

    // Remove goals for NPCs that are no longer alive
    for (const id of this.npcGoals.keys()) {
      if (!aliveNPCs.some(n => n.id === id)) {
        this.npcGoals.delete(id);
      }
    }

    return aliveNPCs.map(npc => {
      const goal = this.getOrInitGoal(npc);
      const updated = updateGoal(this.model, npc, goal);
      this.npcGoals.set(npc.id, updated);
      return decideTurn(this.model, npc, updated);
    });
  }

  private getOrInitGoal(npc: Player): NPCGoalState {
    if (!this.npcGoals.has(npc.id)) {
      return {
        goalNodeId: selectGoalNode(this.model, npc),
        goalSetAtHP: npc.health,
        turnsElapsed: 0,
      };
    }
    return this.npcGoals.get(npc.id)!;
  }

  private getAliveNPCs(): Player[] {
    return Array.from(this.model.players.values())
      .filter(p => p.isNPC && p.isAlive);
  }
}
