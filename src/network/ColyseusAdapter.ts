import * as Colyseus from '@colyseus/sdk';
import { Model } from '../MODEL/model';
import { INetworkAdapter } from './INetworkAdapter';
import { TurnAction, TurnResult } from './types';

/**
 * Online-play implementation of INetworkAdapter.
 * Connects to a Colyseus server and synchronizes game state over WebSocket.
 *
 * Usage:
 *   const adapter = new ColyseusAdapter('ws://localhost:2567');
 *   const setup = setupThree(canvas, adapter);
 */
export class ColyseusAdapter implements INetworkAdapter {
  private client: Colyseus.Client;
  private room!: Colyseus.Room;
  private model!: Model;
  private myPlayerId: string = '';

  private turnResultCallback?: (result: TurnResult) => void;
  private playerJoinedCallback?: (playerId: string) => void;
  private playerLeftCallback?: (playerId: string) => void;

  constructor(serverUrl: string = 'ws://localhost:2567') {
    this.client = new Colyseus.Client(serverUrl);
  }

  // ---- INetworkAdapter ---------------------------------------------------

  /**
   * Connects to the Colyseus server and waits for player assignment.
   * Call this before passing the adapter to setupThree().
   */
  async connect(roomId?: string): Promise<void> {
    if (roomId) {
      this.room = await this.client.joinById(roomId);
    } else {
      this.room = await this.client.joinOrCreate('game_room');
    }

    // Wait for player assignment message from server
    await new Promise<void>(resolve => {
      this.room.onMessage('player_assigned', (data: { playerId: string }) => {
        this.myPlayerId = data.playerId;
        resolve();
      });
    });

    // Turn result from server
    this.room.onMessage('turn_result', (data: TurnResult) => {
      this.turnResultCallback?.(data);
    });

    // Other player joined
    this.room.state.players.onAdd((_player: unknown, playerId: string) => {
      if (playerId !== this.myPlayerId) {
        this.playerJoinedCallback?.(playerId);
      }
    });

    // Other player left
    this.room.state.players.onRemove((_player: unknown, playerId: string) => {
      this.playerLeftCallback?.(playerId);
    });
  }

  /**
   * Initializes a local Model from the current server state.
   * Should be called after connect().
   */
  initializeModel(): Model {
    this.model = new Model();
    // Apply player states from server
    this.room.state.players.forEach((serverPlayer: {
      id: string; nodeId: number; angle: number; health: number;
      isAlive: boolean; color: number;
    }, playerId: string) => {
      const player = this.model.players.get(playerId);
      if (player) {
        player.setNode(this.model.nodeList[serverPlayer.nodeId]);
        player.setAngle(serverPlayer.angle);
      }
    });
    return this.model;
  }

  getMyPlayerId(): string {
    return this.myPlayerId;
  }

  isMyTurn(): boolean {
    return this.room?.state?.currentTurnPlayerId === this.myPlayerId;
  }

  sendTurnAction(action: TurnAction): void {
    this.room.send('turn_action', {
      playerId: action.playerId,
      moveToNodeId: action.moveToNodeId,
      shotAtNodeId: action.shotAtNodeId,
    });
  }

  onTurnResult(callback: (result: TurnResult) => void): void {
    this.turnResultCallback = callback;
  }

  onPlayerJoined(callback: (playerId: string) => void): void {
    this.playerJoinedCallback = callback;
  }

  onPlayerLeft(callback: (playerId: string) => void): void {
    this.playerLeftCallback = callback;
  }

  disconnect(): void {
    this.room?.leave();
  }

  /** Returns the underlying Colyseus Room for advanced use (e.g. sending obstacle data) */
  getRoom(): Colyseus.Room {
    return this.room;
  }
}
