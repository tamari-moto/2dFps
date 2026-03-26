import { Model } from '../model/model';
import { TurnAction, TurnResult, ObstaclePayload } from '../schema/types';

/**
 * Abstraction layer between game logic and transport (local / online).
 *
 * Phase 1: LocalAdapter implements this interface using in-process logic.
 * Phase 2+: ColyseusAdapter implements this interface using WebSocket transport.
 */
export interface INetworkAdapter {
  /** Returns the player ID assigned to the local user */
  getMyPlayerId(): string;

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
  onGameStarted(callback: () => void): void;

  /** Register a callback invoked when obstacle data arrives from the server */
  onObstaclesReady(callback: (obstacles: ObstaclePayload[]) => void): void;

  /**
   * Returns true if NPC turn processing should run on the client side.
   * LocalAdapter: true (offline, single-client)
   * ColyseusAdapter: false (server-authoritative, multi-client)
   */
  supportsNPC(): boolean;
}
