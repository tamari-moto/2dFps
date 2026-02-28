import { Model } from '../MODEL/model';
import { TurnAction, TurnResult } from './types';

/**
 * Abstraction layer between game logic and transport (local / online).
 *
 * Phase 1: LocalAdapter implements this interface using in-process logic.
 * Phase 2+: ColyseusAdapter implements this interface using WebSocket transport.
 */
export interface INetworkAdapter {
  /** Returns the player ID assigned to the local user */
  getMyPlayerId(): string;

  /** Returns true when it is the local user's turn to act */
  isMyTurn(): boolean;

  /**
   * Initializes and returns the game Model.
   * LocalAdapter creates a fresh Model; ColyseusAdapter builds one from server state.
   */
  initializeModel(): Model;

  /**
   * Sends a completed turn action.
   * LocalAdapter executes it synchronously; ColyseusAdapter sends it over the network.
   */
  sendTurnAction(action: TurnAction): void;

  /** Register a callback invoked when turn results are available */
  onTurnResult(callback: (result: TurnResult) => void): void;

  /** Register a callback invoked when another player joins */
  onPlayerJoined(callback: (playerId: string) => void): void;

  /** Register a callback invoked when a player leaves */
  onPlayerLeft(callback: (playerId: string) => void): void;

  /** Register a callback invoked when the game starts (≥2 players ready) */
  onGameStarted(callback: (firstTurnPlayerId: string) => void): void;
}
