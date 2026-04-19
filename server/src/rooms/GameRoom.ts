import { Room, Client } from 'colyseus';
import { GameState, PlayerState } from '../schema/GameState';
import { ServerGameLogic, TurnAction } from '../logic/ServerGameLogic';
import { MapConfig, PlayerConfig } from '../config/GameConfig';

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

  onJoin(client: Client, options: { spectate?: boolean } = {}): void {
    const player = new PlayerState();
    player.id = client.sessionId;
    player.isSpectator = options.spectate === true;
    this.state.players.set(client.sessionId, player);

    // Notify this client of their assigned ID and spectator status
    client.send('player_assigned', { playerId: client.sessionId, isSpectator: player.isSpectator });

    // Send server-authoritative config so client can override its local defaults
    client.send('server_config', {
      mapConfig: {
        NodesInGridSize: MapConfig.NodesInGridSize,
        NodeSpacing:     MapConfig.NodeSpacing,
      },
      playerConfig: {
        MoveRange:       PlayerConfig.MoveRange,
        ViewAngle:       PlayerConfig.ViewAngle,
        MaxViewDistance: PlayerConfig.MaxViewDistance,
        DamagePerShot:   PlayerConfig.DamagePerShot,
        ShotHitRadius:   PlayerConfig.ShotHitRadius,
      },
    });

    const role = player.isSpectator ? 'SPECTATOR' : 'player';
    console.log(`[GameRoom] ${client.sessionId} joined as ${role} (${this.state.players.size}/${this.maxClients})`);

    // Start game when enough non-spectator players have joined
    if (!this.state.gameStarted && this.countActivePlayers() >= MIN_PLAYERS_TO_START) {
      this.startGame();
    } else if (this.state.gameStarted) {
      // Game already started: send current map state to newly joined client (including spectators)
      client.send('obstacles_ready', { obstacles: this.logic.getObstacles() });
      client.send('game_started', {});
    }
  }

  onLeave(client: Client): void {
    const leaving = this.state.players.get(client.sessionId);
    const wasSpectator = leaving?.isSpectator ?? false;

    this.state.players.delete(client.sessionId);
    this.broadcast('player_left', { playerId: client.sessionId });
    console.log(`[GameRoom] ${client.sessionId} left`);

    // Spectator departure does not affect game-end conditions
    if (!wasSpectator && this.state.gameStarted) {
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

    const actor = this.state.players.get(client.sessionId);
    if (actor?.isSpectator) {
      client.send('error', { code: 'SPECTATOR_CANNOT_ACT' });
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

  private countActivePlayers(): number {
    let count = 0;
    this.state.players.forEach(p => { if (!p.isSpectator) count++; });
    return count;
  }

  private countAlivePlayers(): number {
    let count = 0;
    this.state.players.forEach(p => { if (!p.isSpectator && p.isAlive) count++; });
    return count;
  }

  private getAlivePlayerId(): string | null {
    let found: string | null = null;
    this.state.players.forEach((p, id) => { if (!p.isSpectator && p.isAlive) found = id; });
    return found;
  }

  private endGame(): void {
    const winnerId = this.getAlivePlayerId();
    this.broadcast('game_over', { winnerId });
    this.state.gameStarted = false;
    console.log(`[GameRoom] game ended early — winner: ${winnerId}`);
  }
}
