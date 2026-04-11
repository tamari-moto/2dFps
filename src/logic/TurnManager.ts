import { Model } from '../model/model';
import { TurnAction } from '../schema/types';
import { HUMAN_PLAYER_ID } from '../config/GameConfig';
import { decideTurn } from './ai/NPCBrain';

/**
 * Collects NPC turn decisions for simultaneous round execution.
 * NPCs decide based on the current model state (same snapshot the human planned against).
 */
export class TurnManager {
  private model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  /**
   * Returns the intended TurnAction for every alive NPC.
   * Does NOT execute or apply any actions — the caller submits them as a round.
   */
  collectNPCActions(): TurnAction[] {
    return this.getAliveNPCs().map(npc => decideTurn(this.model, npc));
  }

  private getAliveNPCs() {
    return Array.from(this.model.players.values())
      .filter(p => p.isNPC && p.isAlive && p.id !== HUMAN_PLAYER_ID);
  }
}
