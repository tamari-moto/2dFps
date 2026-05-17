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

    // joinの直後、awaitの前にすべてのメッセージハンドラを登録する。
    // player_assigned待機中にメッセージを取りこぼさないようにするため。

    // サーバーエラーメッセージ（NOT_YOUR_TURN, INVALID_ACTION等）
    this.room.onMessage('error', (data: { code: string }) => {
      console.warn('[ColyseusAdapter] server error:', data.code);
    });

    // ゲームライフサイクルメッセージ
    this.room.onMessage('game_started', () => {
      if (this.gameStartedCallback) {
        this.gameStartedCallback();
      } else {
        // コールバック未登録 — フラグをキャッシュ
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

    // サーバーからのターン結果
    this.room.onMessage('turn_result', (data: TurnResult) => {
      this.turnResultCallback?.(data);
    });

    // 今後のプレイヤー参加をjoinedコールバックに転送する。
    // 注: onAddは状態同期中にローカルプレイヤーを含む全プレイヤーで発火する。
    // ローカルプレイヤーはスキップし、コールバックはリモートプレイヤーのplayerIdを受け取る。
    this.room.state.players.onAdd((_player: unknown, playerId: string) => {
      if (playerId === this.myPlayerId) return;
      // playerはライブなPlayerState参照 — 変更は自動反映される。
      // initializePlayers()のサーバー状態デルタ（nodeId, color）が届くまで
      // マイクロタスク1つ分遅延させる。
      Promise.resolve().then(() => {
        this.playerJoinedCallback?.(playerId);
      });
    });

    // 他のプレイヤーが退出
    this.room.state.players.onRemove((_player: unknown, playerId: string) => {
      this.playerLeftCallback?.(playerId);
    });

    // player_assignedメッセージを待ち、プレイヤーが状態に存在するか確認する。
    // colyseus.js@0.15.xではjoinOrCreate中に初期状態パッチが同期的に発火するため、
    // ローカルプレイヤーのonAddが登録前に発火している場合がある。
    // そのため: (1)メッセージを待機, (2)state.playersを同期チェック,
    // (3)未存在の場合はonAddにフォールバック。
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
        // このプレイヤーが既に状態に含まれているか確認（同期パッチが先に届いた場合）
        if (this.room.state.players.has(assignedId)) {
          tryResolveWithId(assignedId);
        } else {
          // 状態パッチ未適用 — onAdd経由で待機
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
   * 現在のサーバー状態からローカルModelを初期化する。
   * connect()の後に呼び出すこと。
   *
   * オンラインモード: サーバー側の障害物を使うためローカルの障害物生成をスキップする。
   * obstacles_readyが届いていれば即座に適用、未着の場合はコールバックで後から適用する。
   */
  initializeModel(): Model {
    // オンラインモード: ローカルの障害物生成をスキップ; サーバー提供の障害物を使用
    this.model = new Model(false);

    // サーバー障害物が既に受信済みの場合は適用
    if (this.pendingObstacles) {
      // ObstaclePayload[].segmentsはプレーンオブジェクト; importObstacles()が
      // MapGenerator.importObstacles()経由でLineSegmentインスタンスに変換する。
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.model.importObstacles(this.pendingObstacles.obstacles as any);
      this.pendingObstacles = null;
    } else {
      // obstacles_ready未受信: 届いたときに適用するコールバックを登録
      this.obstaclesReadyCallback = (obstacles: ObstaclePayload[]): void => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.model!.importObstacles(obstacles as any);
      };
    }

    // ローカルプレイのデフォルトプレイヤーをサーバーのプレイヤーセットで置き換える。
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
    // コールバック登録前にgame_startedが届いていた場合は即座に発火
    if (this.pendingGameStarted) {
      callback();
      this.pendingGameStarted = undefined;
    }
  }

  onObstaclesReady(callback: (obstacles: ObstaclePayload[]) => void): void {
    this.obstaclesReadyCallback = callback;
    // コールバック登録前にobstacles_readyが届いていた場合は即座に発火
    if (this.pendingObstacles) {
      callback(this.pendingObstacles.obstacles);
    }
  }

  onServerConfig(callback: (config: ServerConfigPayload) => void): void {
    this.serverConfigCallback = callback;
    // コールバック登録前にserver_configが届いていた場合は即座に発火
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

  /**
   * Simultaneous round resolution is server-authoritative in online mode.
   * Falls back to sequential execution until server-side support is added.
   */
  sendRoundActions(actions: TurnAction[]): void {
    for (const action of actions) {
      this.sendTurnAction(action);
    }
  }
}
