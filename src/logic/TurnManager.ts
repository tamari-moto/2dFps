import { Model } from '../model/model';
import { Player } from '../model/Player';
import { TurnAction } from '../schema/types';
import { decideTurn } from './ai/NPCBrain';
import { NPCGoalState } from './ai/NPCGoalState';
import { selectGoalNode, updateGoal } from './ai/NPCGoalManager';
import { ThreatMap } from './ai/ThreatMap';
import type { TeamId } from '../config/GameConfig';
import { TEAM_COLORS, AIConfig } from '../config/GameConfig';
import { GameEventBus, GameEventType } from '../core/GameEventBus';

/**
 * 同時ラウンド実行に向けてNPCのターン行動を収集する。
 * NPCは人間プレイヤーが計画したときと同じモデル状態のスナップショットを基に行動を決定する。
 */
export class TurnManager {
  private model: Model;
  private npcGoals: Map<string, NPCGoalState> = new Map();
  private threatMaps: Map<TeamId, ThreatMap> = new Map();
  private cachedTeamScores: Map<TeamId, Float32Array> = new Map();
  private getRoundNumber: () => number;
  private eventBus: GameEventBus;

  constructor(model: Model, getRoundNumber: () => number, eventBus: GameEventBus) {
    this.model = model;
    this.getRoundNumber = getRoundNumber;
    this.eventBus = eventBus;
  }

  /**
   * 生存中のすべてのNPCの意図するTurnActionを返す。
   * 行動の実行・適用は行わない — 呼び出し元がラウンドとして送信する。
   * visibleTeam: このチームに対してのみVIS_THREAT_MAP_UPDATEDを発火（1ラウンドに複数回発火を回避）。
   */
  collectNPCActions(visibleTeam: TeamId | null = null): TurnAction[] {
    const aliveNPCs = this.getAliveNPCs();

    // 死亡したNPCのゴールを削除
    for (const id of this.npcGoals.keys()) {
      if (!aliveNPCs.some(n => n.id === id)) {
        this.npcGoals.delete(id);
      }
    }

    const roundNumber = this.getRoundNumber();

    // 各チームのいずれかのNPCが行動を決定する前に、チームごとにThreatMapを1回更新
    this._updateThreatMaps(aliveNPCs, roundNumber);

    const actions = aliveNPCs.map(npc => {
      const goal = this.getOrInitGoal(npc);
      const threatMap = (AIConfig.ThreatMapTeams as number[]).includes(npc.team)
        ? this._getThreatMap(npc.team as TeamId) : null;
      const updated = updateGoal(this.model, npc, goal, threatMap);
      this.npcGoals.set(npc.id, updated);
      return decideTurn(this.model, npc, updated, threatMap);
    });

    // ヒートマップ描画用に脅威スコアを発火 — N×nodeCount回の発火を避けるためアクティブチームのみ
    if (visibleTeam !== null && (AIConfig.ThreatMapTeams as number[]).includes(visibleTeam)) {
      const map = this.threatMaps.get(visibleTeam);
      if (map) {
        const nodeCount = this.model.nodeList.length;
        let scores = this.cachedTeamScores.get(visibleTeam);
        if (!scores || scores.length !== nodeCount) {
          scores = new Float32Array(nodeCount);
          this.cachedTeamScores.set(visibleTeam, scores);
        }
        for (let i = 0; i < nodeCount; i++) scores[i] = map.getScore(i);
        this.eventBus.emit(GameEventType.VIS_THREAT_MAP_UPDATED, {
          scores,
          teamColor: TEAM_COLORS[visibleTeam],
        });
      }
    }

    return actions;
  }

  private _updateThreatMaps(aliveNPCs: Player[], roundNumber: number): void {
    const activeTeams = new Set<TeamId>(
      aliveNPCs.filter(n => (AIConfig.ThreatMapTeams as number[]).includes(n.team)).map(n => n.team)
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

  getThreatMapForTeam(team: TeamId): ThreatMap | null {
    return this.threatMaps.get(team) ?? null;
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
        goalNodeId: selectGoalNode(this.model, npc, null),
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
