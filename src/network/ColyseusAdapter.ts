import * as Colyseus from 'colyseus.js';
import { Model } from '../model/model';
import { Player } from '../model/Player';
import { INetworkAdapter } from './INetworkAdapter';
import { TurnAction, TurnResult, ObstaclePayload, ObstaclesReadyPayload, ServerConfigPayload } from '../schema/types';

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
  private gameStartedCallback?: () => void;
  private obstaclesReadyCallback?: (obstacles: ObstaclePayload[]) => void;
  private serverConfigCallback?: (config: ServerConfigPayload) => void;
  private pendingGameStarted?: boolean; // cached flag if game_started arrived early
  private pendingObstacles: ObstaclesReadyPayload | null = null;
  private pendingServerConfig: ServerConfigPayload | null = null;

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

    // Register all message handlers immediately after join, before awaiting anything.
    // This ensures no messages are missed while waiting for player_assigned.

    // Server error messages (NOT_YOUR_TURN, INVALID_ACTION, etc.)
    this.room.onMessage('error', (data: { code: string }) => {
      console.warn('[ColyseusAdapter] server error:', data.code);
    });

    // Game lifecycle messages
    this.room.onMessage('game_started', () => {
      if (this.gameStartedCallback) {
        this.gameStartedCallback();
      } else {
        // Callback not yet registered — cache the flag
        this.pendingGameStarted = true;
      }
    });
    this.room.onMessage('game_over', () => {});
    this.room.onMessage('obstacles_ready', (data: ObstaclesReadyPayload) => {
      this.pendingObstacles = data;
      this.obstaclesReadyCallback?.(data.obstacles);
    });
    this.room.onMessage('server_config', (data: ServerConfigPayload) => {
      this.pendingServerConfig = data;
      this.serverConfigCallback?.(data);
    });
    this.room.onMessage('player_left', () => {});

    // Turn result from server
    this.room.onMessage('turn_result', (data: TurnResult) => {
      this.turnResultCallback?.(data);
    });

    // Forward future player arrivals to the joined callback.
    // Note: onAdd fires for every player including the local one during state sync.
    // We skip the local player; the callback receives the playerId for remote players.
    this.room.state.players.onAdd((_player: unknown, playerId: string) => {
      if (playerId === this.myPlayerId) return;
      // player is the live PlayerState reference — changes will be reflected in it.
      // Delay one microtask so that initializePlayers() on the server has time to
      // push its state delta (nodeId, color) before we read them.
      Promise.resolve().then(() => {
        this.playerJoinedCallback?.(playerId);
      });
    });

    // Other player left
    this.room.state.players.onRemove((_player: unknown, playerId: string) => {
      this.playerLeftCallback?.(playerId);
    });

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
  }

  /**
   * Initializes a local Model from the current server state.
   * Should be called after connect().
   *
   * Online mode: skips local obstacle generation to ensure server obstacles are used.
   * Obstacles are applied immediately if obstacles_ready has arrived, or via callback later.
   */
  initializeModel(): Model {
    // Online mode: skip local obstacle generation; use server-provided obstacles
    this.model = new Model(false);

    // Apply server obstacles if already received
    if (this.pendingObstacles) {
      // ObstaclePayload[].segments are plain objects; importObstacles() converts
      // them to LineSegment instances internally via MapGenerator.importObstacles().
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.model.importObstacles(this.pendingObstacles.obstacles as any);
      this.pendingObstacles = null;
    } else {
      // obstacles_ready not yet received: register callback to apply when it arrives
      this.obstaclesReadyCallback = (obstacles: ObstaclePayload[]): void => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.model!.importObstacles(obstacles as any);
      };
    }

    // Replace the local-play default players with the server's player set.
    this.model.players.clear();
    this.room.state.players.forEach((sp: {
      id: string; nodeId: number; angle: number; health: number;
      isAlive: boolean; color: number;
    }, playerId: string) => {
      const startNode = this.model.nodeList[sp.nodeId];
      if (!startNode) return;
      const p = new Player(playerId, startNode, 0);
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

  onGameStarted(callback: () => void): void {
    this.gameStartedCallback = callback;
    // Fire immediately if game_started arrived before this callback was registered
    if (this.pendingGameStarted) {
      callback();
      this.pendingGameStarted = undefined;
    }
  }

  onObstaclesReady(callback: (obstacles: ObstaclePayload[]) => void): void {
    this.obstaclesReadyCallback = callback;
    // Fire immediately if obstacles_ready arrived before this callback was registered
    if (this.pendingObstacles) {
      callback(this.pendingObstacles.obstacles);
    }
  }

  onServerConfig(callback: (config: ServerConfigPayload) => void): void {
    this.serverConfigCallback = callback;
    // Fire immediately if server_config arrived before this callback was registered
    if (this.pendingServerConfig) {
      callback(this.pendingServerConfig);
    }
  }

  disconnect(): void {
    this.room?.leave();
  }

  /** Returns the underlying Colyseus Room for advanced use (e.g. sending obstacle data) */
  getRoom(): Colyseus.Room {
    return this.room;
  }

  supportsNPC(): boolean { return false; }
}
