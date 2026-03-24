import { Model } from '../model/model';
import { GameEventBus, GameEventType } from '../core/GameEventBus';
import { INetworkAdapter } from '../network/INetworkAdapter';
import { AIConfig } from '../config/GameConfig';
import { HUMAN_PLAYER_ID } from '../config/GameConstants';
import { decideTurn } from './ai/NPCBrain';

/**
 * Manages turn order and automates NPC turns.
 * After the human player completes a turn, NPC turns execute sequentially
 * with delays for animation visibility.
 */
export class TurnManager {
  private model: Model;
  private eventBus: GameEventBus;
  private networkAdapter: INetworkAdapter;
  private _isProcessing: boolean = false;

  constructor(
    model: Model,
    eventBus: GameEventBus,
    networkAdapter: INetworkAdapter,
  ) {
    this.model = model;
    this.eventBus = eventBus;
    this.networkAdapter = networkAdapter;
  }

  /**
   * Returns true while NPC turns are being processed.
   */
  isLocked(): boolean {
    return this._isProcessing;
  }

  /**
   * Processes all NPC turns sequentially after the human player's turn.
   */
  async processNPCTurns(): Promise<void> {
    this._isProcessing = true;
    this.eventBus.emit(GameEventType.INPUT_LOCKED, { locked: true });

    const npcPlayers = this.getAliveNPCs();

    for (const npc of npcPlayers) {
      if (!npc.isAlive) continue; // may have been killed during earlier NPC turn

      this.eventBus.emit(GameEventType.NPC_TURN_STARTED, { playerId: npc.id });
      this.eventBus.emit(GameEventType.VIS_SET_ACTIVE_PLAYER, { playerId: npc.id });

      // AI decides action
      const action = decideTurn(this.model, npc);

      // Execute through network adapter (synchronous for LocalAdapter)
      this.networkAdapter.sendTurnAction(action);

      // Wait for animation to complete
      await this.delay(AIConfig.NPCTurnDelayMs);

      // Check if game is over
      const alivePlayers = Array.from(this.model.players.values()).filter(p => p.isAlive);
      if (alivePlayers.length <= 1) break;
    }

    // Return control to human player
    this.eventBus.emit(GameEventType.VIS_SET_ACTIVE_PLAYER, { playerId: HUMAN_PLAYER_ID });
    this.eventBus.emit(GameEventType.NPC_TURNS_COMPLETE);
    this.eventBus.emit(GameEventType.INPUT_LOCKED, { locked: false });
    this._isProcessing = false;
  }

  private getAliveNPCs() {
    return Array.from(this.model.players.values())
      .filter(p => p.isNPC && p.isAlive);
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
