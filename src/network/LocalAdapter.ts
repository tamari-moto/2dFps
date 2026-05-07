import { Model } from '../model/model';
import { Node } from '../model/node';
import { INetworkAdapter } from './INetworkAdapter';
import { TurnAction, TurnResult, ObstaclePayload, ServerConfigPayload, RoundResult } from '../schema/types';
import { PlayerConfig, BombConfig } from '../config/GameConfig';
import { ENTITY_IDS } from '../config/GameConfig';

/**
 * Local-play implementation of INetworkAdapter.
 * Executes all game logic in-process (no network).
 */
export class LocalAdapter implements INetworkAdapter {
  private model!: Model;
  private readonly myPlayerId: string = ENTITY_IDS.PLAYER_1;
  private turnResultCallback?: (result: TurnResult) => void;
  private roundResultCallback?: (result: RoundResult) => void;

  // ---- INetworkAdapter -------------------------------------------------------

  initializeModel(): Model {
    this.model = new Model();
    return this.model;
  }

  getMyPlayerId(): string {
    return this.myPlayerId;
  }

  onTurnResult(callback: (result: TurnResult) => void): void {
    this.turnResultCallback = callback;
  }

  onRoundResult(callback: (result: RoundResult) => void): void {
    this.roundResultCallback = callback;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onPlayerJoined(_callback: (playerId: string) => void): void { /* no-op in local mode */ }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onPlayerLeft(_callback: (playerId: string) => void): void { /* no-op in local mode */ }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onGameStarted(_callback: () => void): void { /* no-op in local mode */ }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onObstaclesReady(_callback: (obstacles: ObstaclePayload[]) => void): void { /* no-op in local mode */ }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onServerConfig(_callback: (config: ServerConfigPayload) => void): void { /* no-op in local mode */ }

  /**
   * Executes a turn synchronously and immediately fires the turnResult callback.
   */
  sendTurnAction(action: TurnAction): void {
    const player = this.model.getPlayer(action.playerId);
    if (!player) return;

    const fromNode = player.node;

    const newNode = this.model.nodeList[action.moveToNodeId];
    if (!newNode) return;
    this.model.setPlayerRef(action.playerId, newNode);

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

    const hits: TurnResult['hits'] = [];
    if (action.shotAtNodeId !== undefined) {
      this.resolveShot(action.playerId, action.shotAtNodeId, hits, newAngle);
    }

    this.turnResultCallback?.({
      movingPlayerId: action.playerId,
      newNodeId: action.moveToNodeId,
      newAngle,
      hits,
    });
  }

  // ---- Private helpers -------------------------------------------------------

  private resolveShot(
    attackerId: string,
    shotNodeId: number,
    hits: TurnResult['hits'],
    attackerAngle: number
  ): void {
    const attacker = this.model.getPlayer(attackerId);
    if (!attacker) return;
    const attackerNode = attacker.node;
    const shotNode = this.model.nodeList[shotNodeId];
    if (!shotNode) return;

    const halfFov = PlayerConfig.ViewAngle / 2;
    const maxRange = PlayerConfig.ShotHitRadius * PlayerConfig.ShotMaxRangeMultiplier;
    const damage = PlayerConfig.DamagePerShot;

    const maxRangeSquared = maxRange * maxRange;

    for (const [targetId, target] of this.model.players) {
      if (targetId === attackerId) continue;
      if (!target.isAlive) continue;
      if (attacker && target.team === attacker.team) continue;

      const dx = target.node.x - shotNode.x;
      const dy = target.node.y - shotNode.y;
      if (dx * dx + dy * dy >= maxRangeSquared) continue;

      const toTargetAngle = this.model.getAngleBetweenNodes(attackerNode, target.node);
      let angleDiff = Math.abs(toTargetAngle - attackerAngle);
      if (angleDiff > 180) angleDiff = 360 - angleDiff;
      if (angleDiff > halfFov) continue;

      if (!this.model.hasLineOfSight(attackerNode, target.node)) continue;

      const dist = Math.sqrt(dx * dx + dy * dy);
      const angleAccuracy = 1 - (angleDiff / halfFov);
      const distFactor = Math.max(0, 1 - dist / maxRange);
      const hitChance = Math.pow(angleAccuracy * distFactor, PlayerConfig.AccuracyExponent);

      if (Math.random() < hitChance) {
        const wouldBeEliminated = target.health - damage <= 0;
        hits.push({ targetId, damage, isEliminated: wouldBeEliminated });
      }
    }
  }

  /**
   * Resolves bomb plant and defuse actions after all players have moved.
   */
  private resolveBombActions(actions: TurnAction[], results: TurnResult[]): void {
    const bomb = this.model.bombState;

    // Track which team1 players declared defuse this round
    const defusingPlayerIds = new Set<string>();

    for (let i = 0; i < actions.length; i++) {
      const action = actions[i];
      const player = this.model.getPlayer(action.playerId);
      if (!player || !player.isAlive) continue;

      if (action.bombAction === 'plant') {
        if (
          player.hasBomb &&
          bomb.status === 'idle' &&
          this.model.isBombSite(action.moveToNodeId)
        ) {
          bomb.status = 'planted';
          bomb.plantedAtNodeId = action.moveToNodeId;
          bomb.planterPlayerId = action.playerId;
          bomb.plantedOnTurn = this.model.globalTurnIndex;
          player.hasBomb = false;
          results[i].bombPlanted = true;
        }
      } else if (action.bombAction === 'defuse') {
        if (
          player.team === 1 &&
          bomb.status === 'planted' &&
          player.node.id === bomb.plantedAtNodeId
        ) {
          defusingPlayerIds.add(action.playerId);
          player.defuseProgress++;
          if (player.defuseProgress >= BombConfig.DefuseTurns) {
            bomb.status = 'defused';
            results[i].bombDefused = true;
            player.defuseProgress = 0;
          }
        }
      }
    }

    // Reset defuse progress for team1 players who didn't defuse this round
    for (const [, player] of this.model.players) {
      if (player.team === 1 && !defusingPlayerIds.has(player.id)) {
        player.defuseProgress = 0;
      }
    }
  }

  /**
   * Checks if the planted bomb should explode based on elapsed turns.
   */
  private checkBombExplosion(): void {
    const bomb = this.model.bombState;
    if (bomb.status !== 'planted') return;
    const turnsElapsed = this.model.globalTurnIndex - bomb.plantedOnTurn;
    if (turnsElapsed >= BombConfig.ExplodeAfterTurns) {
      bomb.status = 'exploded';
    }
  }

  supportsNPC(): boolean { return true; }

  /**
   * Resolves all players' actions simultaneously:
   * 1. Snapshot from-nodes before any movement
   * 2. Apply all moves atomically
   * 3. Resolve bomb actions (plant/defuse)
   * 4. Check bomb explosion
   * 5. Resolve all shots after movement but before damage is applied
   * 6. Fire turnResultCallback for each result
   * 7. Check round-end conditions
   */
  sendRoundActions(actions: TurnAction[]): void {
    // 1. Snapshot positions before any moves
    const fromNodes = new Map<string, Node>();
    for (const action of actions) {
      const player = this.model.getPlayer(action.playerId);
      if (player) fromNodes.set(action.playerId, player.node);
    }

    // 2. Apply all moves atomically and build pending results
    const pendingResults: TurnResult[] = [];
    for (const action of actions) {
      const player = this.model.getPlayer(action.playerId);
      if (!player) continue;
      const fromNode = fromNodes.get(action.playerId)!;
      const newNode = this.model.nodeList[action.moveToNodeId];
      if (!newNode) continue;

      this.model.setPlayerRef(action.playerId, newNode);

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

      pendingResults.push({
        movingPlayerId: action.playerId,
        newNodeId: action.moveToNodeId,
        newAngle,
        hits: [],
      });
    }

    // 3. Resolve bomb actions after all moves
    this.resolveBombActions(actions, pendingResults);

    // 4. Check bomb explosion
    this.checkBombExplosion();

    // 5. Resolve all shots after all moves, before any damage is applied
    for (let i = 0; i < actions.length; i++) {
      if (actions[i].shotAtNodeId !== undefined && actions[i].bombAction === 'none') {
        this.resolveShot(actions[i].playerId, actions[i].shotAtNodeId!, pendingResults[i].hits, pendingResults[i].newAngle);
      }
    }

    // 6. Fire callbacks; GameController applies damage from each result
    for (const result of pendingResults) {
      this.turnResultCallback?.(result);
    }

    // 7. Increment global turn index
    this.model.globalTurnIndex++;

    // 8. Check round-end conditions
    const roundEnd = this.model.checkRoundEndCondition();
    if (roundEnd) {
      const turnsUntilExplosion = this.model.bombState.status === 'planted'
        ? BombConfig.ExplodeAfterTurns - (this.model.globalTurnIndex - this.model.bombState.plantedOnTurn)
        : 0;
      void turnsUntilExplosion; // used in HUD events emitted by GameController

      this.roundResultCallback?.({
        winner: roundEnd.winner as 'attackers' | 'defenders',
        reason: roundEnd.reason as RoundResult['reason'],
        roundNumber: this.model.roundNumber,
      });
    }
  }
}
