import { Room, Client } from 'colyseus';
import { GameState, PlayerState } from '../schema/GameState';
import { ServerGameLogic } from '../logic/ServerGameLogic';

interface TurnActionMessage {
  playerId: string;
  moveToNodeId: number;
  shotAtNodeId?: number;
}

interface ObstacleRectMessage {
  rects: number[]; // flat [x, y, w, h, ...]
}

/**
 * One game session.
 * - Up to 10 players can join.
 * - The first player to join becomes the host and sends obstacle data.
 * - The game starts when ≥ 2 players are in the room.
 */
export class GameRoom extends Room<GameState> {
  maxClients = 10;
  private logic!: ServerGameLogic;
  /** Maps Colyseus sessionId → game playerId */
  private sessionToPlayer: Map<string, string> = new Map();
  private hostSessionId: string = '';

  onCreate(_options: unknown): void {
    this.setState(new GameState());
    this.logic = new ServerGameLogic(this.state);

    // Client sends its turn action
    this.onMessage<TurnActionMessage>('turn_action', (client, msg) => {
      const playerId = this.sessionToPlayer.get(client.sessionId);
      if (!playerId) return;

      // Authoritative check: only the current turn player may act
      if (this.state.currentTurnPlayerId !== playerId) {
        client.send('error', { code: 'NOT_YOUR_TURN' });
        return;
      }

      const { ok, hits } = this.logic.executeTurn(
        playerId,
        msg.moveToNodeId,
        msg.shotAtNodeId
      );

      if (!ok) {
        client.send('error', { code: 'INVALID_ACTION' });
        return;
      }

      // Broadcast rich turn result so clients can update their local model
      this.broadcast('turn_result', {
        movingPlayerId: playerId,
        newNodeId: msg.moveToNodeId,
        newAngle: this.state.players.get(playerId)?.angle ?? 0,
        hits,
        nextTurnPlayerId: this.state.currentTurnPlayerId,
      });

      this.checkGameOver();
    });

    // Host sends obstacle layout (flat rect array)
    this.onMessage<ObstacleRectMessage>('obstacle_rects', (client, msg) => {
      if (client.sessionId !== this.hostSessionId) return;
      this.state.obstacleRects.splice(0, this.state.obstacleRects.length, ...msg.rects);
      this.logic.applyObstacles();
      this.broadcast('obstacles_ready', { rects: msg.rects });
    });
  }

  onJoin(client: Client, _options: unknown): void {
    const playerIndex = this.clients.length - 1; // 0-based after join
    const playerId = `player${playerIndex + 1}`;
    this.sessionToPlayer.set(client.sessionId, playerId);

    if (playerIndex === 0) this.hostSessionId = client.sessionId;

    const player = new PlayerState();
    player.id      = playerId;
    player.nodeId  = this.logic.assignStartNode(playerIndex);
    player.angle   = 0;
    player.health  = 100;
    player.isAlive = true;
    player.color   = this.logic.assignColor(playerIndex, this.maxClients);

    this.state.players.set(playerId, player);

    // Notify the joining client of their assigned player ID
    client.send('player_assigned', { playerId });

    // Start the game when 2+ players are present
    if (this.state.phase === 'waiting' && this.state.players.size >= 2) {
      this.state.phase = 'playing';
      this.state.currentTurnPlayerId = 'player1';
      this.broadcast('game_started', { firstTurnPlayerId: 'player1' });
    }
  }

  onLeave(client: Client, _consented?: boolean): void {
    const playerId = this.sessionToPlayer.get(client.sessionId);
    if (!playerId) return;

    this.sessionToPlayer.delete(client.sessionId);
    this.state.players.delete(playerId);

    // If it was this player's turn, advance to the next
    if (this.state.currentTurnPlayerId === playerId) {
      this.state.currentTurnPlayerId = this.logic.nextAlivePlayer(playerId);
    }

    this.broadcast('player_left', { playerId });
    this.checkGameOver();
  }

  private checkGameOver(): void {
    if (this.state.phase !== 'playing') return;
    const alive = Array.from(this.state.players.values()).filter(
      (p): p is PlayerState => (p as PlayerState).isAlive
    );
    if (alive.length <= 1) {
      this.state.phase = 'ended';
      this.broadcast('game_over', { winnerId: alive[0]?.id ?? null });
    }
  }
}
