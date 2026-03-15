import { Room, Client } from 'colyseus';
import { GameState, PlayerState } from '../schema/GameState';
import { ServerGameLogic, TurnAction } from '../logic/ServerGameLogic';

const MIN_PLAYERS_TO_START = 2;
const MAX_PLAYERS = 10;

export class GameRoom extends Room<GameState> {
  private logic = new ServerGameLogic();

  onCreate(): void {
    this.maxClients = MAX_PLAYERS;
    this.setState(new GameState());

    this.onMessage('turn_action', (client: Client, action: TurnAction) => {
      this.handleTurnAction(client, action);
    });
  }

  onJoin(client: Client): void {
    const player = new PlayerState();
    player.id = client.sessionId;
    this.state.players.set(client.sessionId, player);

    // Notify this client of their assigned ID
    client.send('player_assigned', { playerId: client.sessionId });

    console.log(`[GameRoom] ${client.sessionId} joined (${this.state.players.size}/${this.maxClients})`);

    // Start game when enough players have joined
    if (!this.state.gameStarted && this.state.players.size >= MIN_PLAYERS_TO_START) {
      this.startGame();
    }
  }

  onLeave(client: Client): void {
    this.state.players.delete(client.sessionId);
    this.broadcast('player_left', { playerId: client.sessionId });
    console.log(`[GameRoom] ${client.sessionId} left`);

    // If only one player remains during a started game, end it
    if (this.state.gameStarted) {
      const alive = this.countAlivePlayers();
      if (alive <= 1) {
        this.endGame();
      }
    }
  }

  onDispose(): void {
    console.log('[GameRoom] disposed');
  }

  // ---- private helpers ------------------------------------------------------

  private startGame(): void {
    this.logic.generateObstacles();
    this.logic.initializePlayers(this.state.players);

    this.state.gameStarted = true;

    // Send obstacles before game_started so clients can apply them in initializeModel()
    this.broadcast('obstacles_ready', { obstacles: this.logic.getObstacles() });
    this.broadcast('game_started', {});
    console.log('[GameRoom] game started');
  }

  private handleTurnAction(client: Client, action: TurnAction): void {
    if (!this.state.gameStarted) {
      client.send('error', { code: 'GAME_NOT_STARTED' });
      return;
    }

    if (action.playerId !== client.sessionId) {
      client.send('error', { code: 'INVALID_PLAYER_ID' });
      return;
    }

    const result = this.logic.processTurn(action, this.state.players);
    if (!result) {
      client.send('error', { code: 'INVALID_ACTION' });
      return;
    }

    this.broadcast('turn_result', result);

    // Check win condition
    const alive = this.countAlivePlayers();
    if (alive <= 1) {
      const winnerId = alive === 1 ? this.getAlivePlayerId() : null;
      this.broadcast('game_over', { winnerId });
      this.state.gameStarted = false;
      console.log(`[GameRoom] game over — winner: ${winnerId}`);
    }
  }

  private countAlivePlayers(): number {
    let count = 0;
    this.state.players.forEach(p => { if (p.isAlive) count++; });
    return count;
  }

  private getAlivePlayerId(): string | null {
    let found: string | null = null;
    this.state.players.forEach((p, id) => { if (p.isAlive) found = id; });
    return found;
  }

  private endGame(): void {
    const winnerId = this.getAlivePlayerId();
    this.broadcast('game_over', { winnerId });
    this.state.gameStarted = false;
    console.log(`[GameRoom] game ended early — winner: ${winnerId}`);
  }
}
