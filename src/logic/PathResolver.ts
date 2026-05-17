import { Model } from '../model/model';
import { TurnAction } from '../schema/types';

export interface ResolvedAction {
  playerId: string;
  finalNodeId: number;
  /** 実際に通過した経路: [fromNodeId, step1, ..., finalNodeId] */
  path: number[];
  shotAtNodeId: number | undefined;
}

/**
 * ラウンド内のすべてのプレイヤーについて、衝突を考慮した移動経路を計算する。
 *
 * アルゴリズム:
 * 1. 各プレイヤーについて現在位置からmoveToNodeIdまでのBFS最短経路を計算する。
 * 2. 経路を並行してステップごとに進める（ステップ1, 2, ..., maxPathLength）。
 *    各ステップで2人以上の移動プレイヤーが同じノードを要求した場合、
 *    該当プレイヤー全員を前の確定ノードで停止させる。
 * 3. 停止中プレイヤー（moveToNodeId === fromNodeId）の開始ノードへの
 *    移動も阻止する。
 *
 * 入力アクションごとに1つのResolvedActionを返す。
 * 衝突調整後のfinalNodeIdと通過した全経路（両端点を含む）が格納される。
 */
export function resolveRoundPaths(
  actions: TurnAction[],
  model: Model,
  maxSteps: number,
): ResolvedAction[] {
  // ── 1. 生の経路を計算 ────────────────────────────────────────────────
  type PlayerPath = {
    playerId: string;
    fromNodeId: number;
    steps: number[];   // node IDs at step 1, 2, … (excludes start node)
    confirmed: number; // last confirmed node ID (starts at fromNodeId)
    stopped: boolean;
    shotAtNodeId: number | undefined;
  };

  const paths: PlayerPath[] = [];

  for (const action of actions) {
    const player = model.getPlayer(action.playerId);
    if (!player) continue;

    const fromId = player.node.id;

    if (action.moveToNodeId === fromId) {
      paths.push({
        playerId: action.playerId,
        fromNodeId: fromId,
        steps: [],
        confirmed: fromId,
        stopped: true,
        shotAtNodeId: action.shotAtNodeId,
      });
      continue;
    }

    const raw = model.getPathToNode(fromId, action.moveToNodeId, maxSteps);
    // raw = [fromId, step1, ..., toId] またはnull
    const steps = raw ? raw.slice(1) : [];

    paths.push({
      playerId: action.playerId,
      fromNodeId: fromId,
      steps,
      confirmed: fromId,
      stopped: steps.length === 0,
      shotAtNodeId: action.shotAtNodeId,
    });
  }

  // ── 2. 停止中プレイヤーのノードを記録（そのノードへの移動を阻止）──────
  const stationaryNodes = new Set<number>();
  for (const p of paths) {
    if (p.stopped) stationaryNodes.add(p.fromNodeId);
  }

  // ── 3. ステップごとの衝突解決 ────────────────────────────────────────
  const maxLen = Math.max(...paths.map(p => p.steps.length), 0);

  for (let k = 0; k < maxLen; k++) {
    // ステップkで各ノードへ移動しようとするプレイヤーIDのリストを構築
    const claimMap = new Map<number, string[]>();

    for (const p of paths) {
      if (p.stopped) continue;
      if (k >= p.steps.length) continue;

      const targetNode = p.steps[k];

      // 停止中プレイヤーが目標ノードを占有している場合は移動を阻止
      if (stationaryNodes.has(targetNode)) {
        p.stopped = true;
        continue;
      }

      const existing = claimMap.get(targetNode) ?? [];
      existing.push(p.playerId);
      claimMap.set(targetNode, existing);
    }

    // 衝突（2人以上が同じノードを要求）に関わるプレイヤーをすべて停止
    for (const [, claimants] of claimMap) {
      if (claimants.length >= 2) {
        for (const pid of claimants) {
          const p = paths.find(x => x.playerId === pid)!;
          p.stopped = true;
        }
      }
    }

    // まだ移動中のプレイヤーの確定位置を前進させる
    for (const p of paths) {
      if (p.stopped) continue;
      if (k >= p.steps.length) continue;
      p.confirmed = p.steps[k];
      if (k === p.steps.length - 1) p.stopped = true; // 目的地に到達
    }
  }

  // ── 4. ResolvedAction[]を構築 ────────────────────────────────────────────
  return paths.map(p => {
    // 確定ノードまでの通過経路を再構成
    const confirmedIdx = p.steps.indexOf(p.confirmed);
    const traversedSteps = confirmedIdx >= 0 ? p.steps.slice(0, confirmedIdx + 1) : [];
    const path = [p.fromNodeId, ...traversedSteps];

    return {
      playerId: p.playerId,
      finalNodeId: p.confirmed,
      path,
      shotAtNodeId: p.shotAtNodeId,
    };
  });
}
