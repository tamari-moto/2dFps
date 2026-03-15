import { Model } from '../model/model';
import { INetworkAdapter } from './INetworkAdapter';
import { TurnAction, TurnResult, ObstaclePayload } from '../schema/types';
import { PlayerConfig } from '../config/GameConfig';
import { ENTITY_IDS } from '../config/GameConstants';

/**
 * Local-play implementation of INetworkAdapter.
 * Executes all game logic in-process (no network), preserving the original behavior.
 * Phase 2+: replace this with ColyseusAdapter to enable online play.
 */
export class LocalAdapter implements INetworkAdapter {
  private model!: Model;
  private readonly myPlayerId: string = ENTITY_IDS.PLAYER_1;
  private turnResultCallback?: (result: TurnResult) => void;

  // ---- INetworkAdapter -------------------------------------------------------

  initializeModel(): Model {
    this.model = new Model();
    return this.model;
  }

  getMyPlayerId(): string {
    return this.myPlayerId;
  }

  /** Local play: the user controls all players, so it is always "their turn". */
  isMyTurn(): boolean {
    return true;
  }

  onTurnResult(callback: (result: TurnResult) => void): void {
    this.turnResultCallback = callback;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onPlayerJoined(_callback: (playerId: string) => void): void { /* no-op in local mode */ }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onPlayerLeft(_callback: (playerId: string) => void): void { /* no-op in local mode */ }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onGameStarted(_callback: (firstTurnPlayerId: string) => void): void { /* no-op in local mode */ }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onObstaclesReady(_callback: (obstacles: ObstaclePayload[]) => void): void { /* no-op in local mode */ }

  /**
   * Executes a turn synchronously (ported from GameController.executeTurn /
   * checkPlayerShot) and immediately fires the turnResult callback.
   */
  sendTurnAction(action: TurnAction): void {
    const player = this.model.getPlayer(action.playerId);
    if (!player) return;

    // 1. Record position before move
    const fromNode = player.node;

    // 2. Move
    const newNode = this.model.nodeList[action.moveToNodeId];
    if (!newNode) return;
    this.model.setPlayerRef(action.playerId, newNode);

    // 3. Update facing angle: toward shot target if provided, else toward move destination
    let newAngle = player.angle;
    if (action.shotAtNodeId !== undefined) {
      const shotNode = this.model.nodeList[action.shotAtNodeId];
      if (shotNode) {
        newAngle = this.model.getAngleBetweenNodes(newNode, shotNode);
        player.setAngle(newAngle);
      }
    } else if (action.moveToNodeId !== fromNode.id) {
      newAngle = this.model.getAngleBetweenNodes(fromNode, newNode);
      player.setAngle(newAngle);
    }

    // 4. Shot resolution
    const hits: TurnResult['hits'] = [];
    if (action.shotAtNodeId !== undefined) {
      this.resolveShot(action.playerId, action.shotAtNodeId, hits);
    }

    // 5. Determine next turn player (simple round-robin among alive players)
    const nextTurnPlayerId = this.nextAlivePlayer(action.playerId);

    this.turnResultCallback?.({
      movingPlayerId: action.playerId,
      newNodeId: action.moveToNodeId,
      newAngle,
      hits,
      nextTurnPlayerId,
    });
  }

  // ---- Private helpers -------------------------------------------------------

  private resolveShot(
    attackerId: string,
    shotNodeId: number,
    hits: TurnResult['hits']
  ): void {
    const damage = PlayerConfig.DamagePerShot;
    for (const [targetId, target] of this.model.players) {
      if (targetId === attackerId) continue;
      if (!target.isAlive) continue;
      if (target.node.id !== shotNodeId) continue;

      target.takeDamage(damage);
      hits.push({ targetId, damage, isEliminated: !target.isAlive });
    }
  }

  private nextAlivePlayer(currentPlayerId: string): string {
    const ids = Array.from(this.model.players.keys()).filter(
      id => this.model.players.get(id)?.isAlive
    );
    const idx = ids.indexOf(currentPlayerId);
    return ids[(idx + 1) % ids.length] ?? currentPlayerId;
  }
}
