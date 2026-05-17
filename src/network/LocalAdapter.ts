import { Model } from '../model/model';
import { Node } from '../model/node';
import { INetworkAdapter } from './INetworkAdapter';
import { TurnAction, TurnResult, ObstaclePayload, ServerConfigPayload } from '../schema/types';
import { PlayerConfig } from '../config/GameConfig';
/**
 * Local-play implementation of INetworkAdapter.
 * Executes all game logic in-process (no network), preserving the original behavior.
 * Phase 2+: replace this with ColyseusAdapter to enable online play.
 */
export class LocalAdapter implements INetworkAdapter {
  private model!: Model;
  private readonly myPlayerId: string = '';
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

    // 1. 移動前の位置を記録
    const fromNode = player.node;

    // 2. 移動
    const newNode = this.model.nodeList[action.moveToNodeId];
    if (!newNode) return;
    this.model.setPlayerRef(action.playerId, newNode);

    // 3. 向き角度を更新: 射撃対象が指定されていればその方向、なければ移動先の方向
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

    // 4. 射撃解決
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

  // ---- プライベートヘルパー -------------------------------------------------------

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

  supportsNPC(): boolean { return true; }

  /**
   * すべてのプレイヤーの行動を同時に解決する:
   * 1. 移動前の出発ノードをスナップショット
   * 2. すべての移動をアトミックに適用
   * 3. 移動後・ダメージ適用前にすべての射撃を解決
   * 4. 各結果についてturnResultCallbackを発火
   */
  sendRoundActions(actions: TurnAction[]): void {
    // 1. 移動前の位置をスナップショット
    const fromNodes = new Map<string, Node>();
    for (const action of actions) {
      const player = this.model.getPlayer(action.playerId);
      if (player) fromNodes.set(action.playerId, player.node);
    }

    // 2. すべての移動をアトミックに適用し、待機中の結果を構築
    const pendingResults: TurnResult[] = [];
    for (const action of actions) {
      const player = this.model.getPlayer(action.playerId);
      if (!player) continue;
      const fromNode = fromNodes.get(action.playerId)!;
      const newNode = this.model.nodeList[action.moveToNodeId];
      if (!newNode) continue;

      this.model.setPlayerRef(action.playerId, newNode);

      let newAngle = player.angle;
      if (action.angle !== undefined) {
        newAngle = action.angle;
      } else if (action.shotAtNodeId !== undefined) {
        const shotNode = this.model.nodeList[action.shotAtNodeId];
        if (shotNode) {
          newAngle = this.model.getAngleBetweenNodes(newNode, shotNode);
        }
      } else if (action.moveToNodeId !== fromNode.id) {
        newAngle = this.model.getAngleBetweenNodes(fromNode, newNode);
      }
      player.setAngle(newAngle);

      pendingResults.push({
        movingPlayerId: action.playerId,
        newNodeId: action.moveToNodeId,
        newAngle,
        hits: [],
      });
    }

    // 3. 全移動後・ダメージ適用前にすべての射撃を解決
    for (let i = 0; i < actions.length; i++) {
      if (actions[i].shotAtNodeId !== undefined) {
        this.resolveShot(actions[i].playerId, actions[i].shotAtNodeId!, pendingResults[i].hits, pendingResults[i].newAngle);
      }
    }

    // 4. コールバックを発火; GameControllerが各結果からダメージを適用
    for (const result of pendingResults) {
      this.turnResultCallback?.(result);
    }
  }
}
