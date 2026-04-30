import { Model } from '../model/model';
import { Node } from '../model/node';
import { INetworkAdapter } from './INetworkAdapter';
import { TurnAction, TurnResult, ObstaclePayload, ServerConfigPayload } from '../schema/types';
import { PlayerConfig, ENTITY_IDS } from '../config/GameConfig';

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

  onTurnResult(callback: (result: TurnResult) => void): void {
    this.turnResultCallback = callback;
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

    const rawPath = this.model.getPathToNode(fromNode.id, action.moveToNodeId, PlayerConfig.MoveRange);
    const pathNodeIds = (rawPath && rawPath.length >= 2) ? rawPath : [fromNode.id, action.moveToNodeId];
    this.turnResultCallback?.({
      movingPlayerId: action.playerId,
      newNodeId: action.moveToNodeId,
      newAngle,
      hits,
      pathNodeIds,
    });
  }

  // ---- Private helpers -------------------------------------------------------

  private resolveShot(
    attackerId: string,
    shotNodeId: number,
    hits: TurnResult['hits']
  ): void {
    const damage = PlayerConfig.DamagePerShot;
    const shotNode = this.model.nodeList[shotNodeId];
    if (!shotNode) return;

    for (const [targetId, target] of this.model.players) {
      if (targetId === attackerId) continue;
      if (!target.isAlive) continue;

      const dx = target.node.x - shotNode.x;
      const dy = target.node.y - shotNode.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > PlayerConfig.ShotHitRadius) continue;

      const wouldBeEliminated = target.health - damage <= 0;
      hits.push({ targetId, damage, isEliminated: wouldBeEliminated });
    }
  }

  supportsNPC(): boolean { return true; }

  /**
   * Resolves all players' actions simultaneously:
   * 1. Snapshot from-nodes before any movement
   * 2. Apply all moves atomically
   * 3. Resolve all shots after movement but before damage is applied
   * 4. Fire turnResultCallback for each result
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

      const rawPath = this.model.getPathToNode(fromNode.id, action.moveToNodeId, PlayerConfig.MoveRange);
      const pathNodeIds = (rawPath && rawPath.length >= 2) ? rawPath : [fromNode.id, action.moveToNodeId];
      pendingResults.push({
        movingPlayerId: action.playerId,
        newNodeId: action.moveToNodeId,
        newAngle,
        hits: [],
        pathNodeIds,
      });
    }

    // 3. Resolve all shots after all moves, before any damage is applied
    for (let i = 0; i < actions.length; i++) {
      if (actions[i].shotAtNodeId !== undefined) {
        this.resolveShot(actions[i].playerId, actions[i].shotAtNodeId!, pendingResults[i].hits);
      }
    }

    // 4. Fire callbacks; GameController applies damage from each result
    for (const result of pendingResults) {
      this.turnResultCallback?.(result);
    }
  }
}
