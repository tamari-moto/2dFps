import * as Colyseus from 'colyseus.js';
import { Model } from '../MODEL/model';
import { Player } from '../MODEL/Player';
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
  private gameStartedCallback?: (firstTurnPlayerId: string) => void;

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

    // Wait for player_assigned message, then verify the player exists in state.
    // In colyseus.js@0.15.x the initial state patch fires synchronously during
    // joinOrCreate, so onAdd for the local player may already have fired before
    // we can register it.  We therefore: (1) wait for the message, (2) check
    // state.players synchronously, and (3) fall back to onAdd if not yet present.
    await new Promise<void>(resolve => {
      let resolved = false;

      const tryResolveWithId = (assignedId: string) => {
        if (resolved) return;
        this.myPlayerId = assignedId;
        resolved = true;
        resolve();
      };

      this.room.onMessage('player_assigned', (data: { playerId: string }) => {
        const assignedId = data.playerId;
        // Check if this player is already in the state (sync patch arrived first)
        if (this.room.state.players.has(assignedId)) {
          tryResolveWithId(assignedId);
        } else {
          // State patch not yet applied – wait for it via onAdd
          this.room.state.players.onAdd((_player: unknown, playerId: string) => {
            if (playerId === assignedId) {
              tryResolveWithId(assignedId);
            }
          });
        }
      });
    });

    // Forward future player arrivals to the joined callback.
    this.room.state.players.onAdd((_player: unknown, playerId: string) => {
      if (playerId !== this.myPlayerId) {
        this.playerJoinedCallback?.(playerId);
      }
    });

    // Server error messages (NOT_YOUR_TURN, INVALID_ACTION, etc.)
    this.room.onMessage('error', (data: { code: string }) => {
      console.warn('[ColyseusAdapter] server error:', data.code);
    });

    // Game lifecycle messages
    this.room.onMessage('game_started', (data: { firstTurnPlayerId: string }) => {
      this.gameStartedCallback?.(data.firstTurnPlayerId);
    });
    this.room.onMessage('game_over', (_data: { winnerId: string | null }) => {});
    this.room.onMessage('obstacles_ready', (_data: { rects: number[] }) => {});
    this.room.onMessage('player_left', (_data: { playerId: string }) => {});

    // Turn result from server
    this.room.onMessage('turn_result', (data: TurnResult) => {
      this.turnResultCallback?.(data);
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

    // Replace the local-play default players with the server's player set.
    this.model.players.clear();
    this.room.state.players.forEach((sp: {
      id: string; nodeId: number; angle: number; health: number;
      isAlive: boolean; color: number;
    }, playerId: string) => {
      const startNode = this.model.nodeList[sp.nodeId];
      if (!startNode) return;
      const p = new Player(playerId, startNode, sp.color);
      p.setAngle(sp.angle);
      p.health = sp.health;
      p.isAlive = sp.isAlive;
      this.model.players.set(playerId, p);
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

  onGameStarted(callback: (firstTurnPlayerId: string) => void): void {
    this.gameStartedCallback = callback;
  }

  disconnect(): void {
    this.room?.leave();
  }

  /** Returns the underlying Colyseus Room for advanced use (e.g. sending obstacle data) */
  getRoom(): Colyseus.Room {
    return this.room;
  }
}
