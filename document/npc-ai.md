# NPC AI 仕様書

## 概要

NPC の行動は毎ターン `TurnManager.collectNPCActions()` によって収集され、人間プレイヤーの行動と同時に解決される。各 NPC は **目的地ノード** に向かいながら、視野内の敵を射撃する。

---

## ターンごとの処理フロー

```
TurnManager.collectNPCActions()
  └─ 各生存NPC に対して:
      ├─ updateGoal()      ─ 目的地の再評価判定と更新
      └─ decideTurn()      ─ TurnAction を生成
            ├─ getPathToNode()       ─ 目的地までの経路を取得
            ├─ 経路の1ステップ先へ移動
            ├─ getAngleBetweenNodes() ─ 最近敵へ向く
            └─ selectShotTarget()   ─ 視野内の敵を射撃
```

---

## 目的地システム

### 目的地状態 (`NPCGoalState`)

各 NPC ごとに `TurnManager` が `Map<playerId, NPCGoalState>` で保持する。

| フィールド | 型 | 説明 |
|-----------|---|------|
| `goalNodeId` | `number` | 目的地ノード ID |
| `goalSetAtHP` | `number` | 目的地設定時の HP |
| `turnsElapsed` | `number` | 目的地設定からの経過ターン数 |

### 目的地の再評価条件

以下のいずれかを満たすと目的地を再評価する（優先度順）。

| 条件 | 説明 |
|------|------|
| 目的地に到達 | `npc.node.id === goal.goalNodeId` |
| 大きなダメージを受けた | `npc.health < goal.goalSetAtHP - GoalHPChangeThreshold (30)` |
| タイムアウト | `goal.turnsElapsed >= GoalTimeoutTurns (10)` |

### 目的地の選定ロジック (`selectGoalNode`)

1. `getReachableNodes(現在地, GoalSearchRadius=8)` で BFS 半径 8 以内の全到達ノードを取得
2. 各ノードに `scoreNode()` を適用（下記「移動ノードスコアリング」参照）
3. スコア最大・かつ未占有のノードを目的地に設定
4. 到達可能ノードがない場合は現在地を維持

### 経路追従 (`decideTurn`)

```
getPathToNode(現在地, goalNodeId, Infinity)
  → path[1] が未占有 → そこへ移動 (MoveRange = 1 ステップ)
  → path[1] が占有済み → 現在地に留まる
  → 経路が取得できない → 現在地に留まる
```

---

## 移動ノードスコアリング (`scoreNode`)

目的地選定・毎ターンの移動先評価の両方で使われる共通スコア関数。

### スコア計算式

```
score = カバースコア + LOS評価 + アンブッシュボーナス + 距離スコア
```

### 1. カバースコア

壁に接しているほど高評価。グラフのエッジ数（4方向の通路数）が少ないほど壁が多い。

```
coverScore = 4 - エッジ数          (0〜4)
coverWeight = CoverWeight (30)
            ※ HP < RetreatHPThreshold (40) のとき × RetreatCoverMultiplier (2)

score += coverScore × coverWeight
```

### 2. 敵 LOS 評価

敵から視線が通るノードはペナルティ。

```
敵ごとに:
  敵がこのノードを見える → score += EnemyLOSPenalty (-20)
```

### 3. アンブッシュボーナス

NPC からは敵が見えるが、敵からは NPC が見えない場合にボーナス。

```
敵ごとに:
  NPC → 敵: LOS あり  かつ  敵 → NPC: LOS なし
    → score += AmbushBonus (15)
```

### 4. 距離スコア（マンハッタン距離）

```
minDistance = 最近敵までのマンハッタン距離（グリッド単位）

HP >= RetreatHPThreshold (40)  ─ 通常モード（敵に近づく）
  score += minDistance × DistanceWeight (-2)
  ※ 距離が大きいほど減点 → 敵に近づくほど高スコア

HP < RetreatHPThreshold (40)   ─ 撤退モード（敵から遠ざかる）
  score += minDistance × |DistanceWeight| (+2)
  ※ 距離が大きいほど加点 → 敵から遠ざかるほど高スコア
```

---

## 向き（照準角度）の決定

移動先ノードから **最近の敵** に向く角度を `atan2(dy, dx)` で計算する。

- 敵が複数いる場合はユークリッド距離が最小の敵を優先
- 敵が0体の場合は前ターンの角度を維持

---

## 射撃対象の選択 (`selectShotTarget`)

### 射撃可能条件

移動先ノードから以下の両方を満たす敵ノードのみが対象。

| 条件 | 設定値 |
|------|--------|
| 視野角（FOV）以内 | `ViewAngle = 60°`（片側 30°） |
| 視認距離以内 | `MaxViewDistance = 1000 px` |
| LOS（障害物なし） | `hasLineOfSight()` が true |

### ターゲット優先度スコア

```
hpBonus = (enemy.maxHealth - enemy.health) / enemy.maxHealth × ShotLowHPPriority (10)
dist    = 移動先ノード〜敵ノードのマンハッタン距離

score = hpBonus - dist
```

- **低 HP の敵を優先**（hpBonus が大きい）
- 距離が大きいと減点（同 HP なら近い敵を優先）

---

## 占有ノード判定

同一ノードへの複数 NPC の移動を防ぐため、候補ノードに生存プレイヤーが既にいる場合はスキップする。

- `isNodeOccupied(model, nodeId, excludeId)` で判定
- 目的地選定時・移動ステップ取得時の両方で適用

---

## AIConfig パラメータ一覧

| 定数 | 値 | 説明 |
|------|----|------|
| `CoverWeight` | 30 | カバースコアの基本重み |
| `EnemyLOSPenalty` | -20 | 敵 LOS ペナルティ（敵1体あたり） |
| `DistanceWeight` | -2 | 距離スコアの重み（負値 = 近づく） |
| `AmbushBonus` | 15 | アンブッシュボーナス |
| `RetreatHPThreshold` | 40 | 撤退モードに切り替わる HP 閾値 |
| `RetreatCoverMultiplier` | 2 | 撤退時のカバー重み乗数 |
| `ShotLowHPPriority` | 10 | 低 HP 敵への射撃優先ボーナス係数 |
| `GoalSearchRadius` | 8 | 目的地探索の BFS 半径（ステップ数） |
| `GoalTimeoutTurns` | 10 | 強制再評価までのターン数 |
| `GoalHPChangeThreshold` | 30 | 再評価をトリガーする HP 低下量 |
| `RoundAnimationDelayMs` | 1500 | ラウンドアニメーション待機時間（ms） |

---

## 関連ファイル

| ファイル | 役割 |
|---------|------|
| `src/logic/TurnManager.ts` | NPC 行動収集・目的地 Map 管理 |
| `src/logic/ai/NPCBrain.ts` | 行動決定エントリポイント・経路追従 |
| `src/logic/ai/NPCGoalState.ts` | 目的地状態の型定義 |
| `src/logic/ai/NPCGoalManager.ts` | 目的地選定・再評価ロジック |
| `src/logic/ai/NodeScorer.ts` | ノードスコアリング |
| `src/logic/ai/ShotSelector.ts` | 射撃対象選択 |
| `src/config/ai.ts` | AI 定数一元管理 |
| `src/model/model.ts` | `getReachableNodes` / `getPathToNode` / `hasLineOfSight` / `getVisibleNodesAtAngle` |
