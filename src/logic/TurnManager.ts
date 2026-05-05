import { Model } from '../model/model';
import { Player } from '../model/Player';
import { TurnAction } from '../schema/types';
import { decideTurn } from './ai/NPCBrain';
import { NPCGoalState } from './ai/NPCGoalState';
import { selectGoalNode, updateGoal } from './ai/NPCGoalManager';
import { ThreatMap } from './ai/ThreatMap';
import type { TeamId } from '../config/GameConfig';
import { TEAM_COLORS } from '../config/GameConfig';
import { GameEventBus, GameEventType } from '../core/GameEventBus';

/**
 * Collects NPC turn decisions for simultaneous round execution.
 * NPCs decide based on the current model state (same snapshot the human planned against).
 */
export class TurnManager {
  private model: Model;
  private npcGoals: Map<string, NPCGoalState> = new Map();
  private threatMaps: Map<TeamId, ThreatMap> = new Map();
  private getRoundNumber: () => number;
  private eventBus: GameEventBus;

  constructor(model: Model, getRoundNumber: () => number, eventBus: GameEventBus) {
    this.model = model;
    this.getRoundNumber = getRoundNumber;
    this.eventBus = eventBus;
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

    const roundNumber = this.getRoundNumber();

    // Update ThreatMaps once per team before any NPC on that team decides
    this._updateThreatMaps(aliveNPCs, roundNumber);

    const actions = aliveNPCs.map(npc => {
      const goal = this.getOrInitGoal(npc);
      const updated = updateGoal(this.model, npc, goal);
      this.npcGoals.set(npc.id, updated);
      const threatMap = npc.team === 5 ? this._getThreatMap(npc.team) : null;
      return decideTurn(this.model, npc, updated, threatMap);
    });

    // Emit team 5 threat scores for heatmap visualization
    const map5 = this.threatMaps.get(5 as TeamId);
    if (map5) {
      const scores = new Float32Array(this.model.nodeList.length);
      for (let i = 0; i < scores.length; i++) scores[i] = map5.getScore(i);
      this.eventBus.emit(GameEventType.VIS_THREAT_MAP_UPDATED, {
        scores,
        teamColor: TEAM_COLORS[5],
      });
    }

    return actions;
  }

  private _updateThreatMaps(aliveNPCs: Player[], roundNumber: number): void {
    // Only update ThreatMap for team 0
    const activeTeams = new Set<TeamId>(
      aliveNPCs.filter(n => n.team === 5).map(n => n.team)
    );

    for (const team of activeTeams) {
      let map = this.threatMaps.get(team);
      if (!map) {
        map = new ThreatMap(team, this.model.nodeList.length);
        this.threatMaps.set(team, map);
      }
      map.observeAndRescore(this.model, roundNumber);
    }
  }

  private _getThreatMap(team: TeamId): ThreatMap {
    let map = this.threatMaps.get(team);
    if (!map) {
      map = new ThreatMap(team, this.model.nodeList.length);
      this.threatMaps.set(team, map);
    }
    return map;
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
