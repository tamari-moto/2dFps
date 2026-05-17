# NPC AI 仕様書

## 概要

NPC の行動は毎ターン `TurnManager.collectNPCActions()` によって収集され、人間プレイヤーの行動と同時に解決される。各 NPC は **目的地ノード** に向かいながら、視野内の敵を射撃する。

NPC の判断は「全知」ではなく、**チームが観測した情報のみ**を使う。視界外の敵の正確な位置は参照しない（ThreatMap ベースの推定情報を使用）。

---

## ターンごとの処理フロー

```
TurnManager.collectNPCActions()
  ├─ _updateThreatMaps()   ─ チームごとに ThreatMap を更新（1ターン1回）
  └─ 各生存NPC に対して:
      ├─ updateGoal()      ─ 目的地の再評価判定と更新
      └─ decideTurn()      ─ TurnAction を生成
            ├─ getPathToNode()        ─ 目的地までの経路を取得
            ├─ 経路の1ステップ先へ移動
            ├─ getAngleBetweenNodes() ─ 最近敵または高脅威方向へ向く
            └─ selectShotTarget()    ─ 視野内の敵を射撃
```

---

## ThreatMap（脅威マップ）

### 概要

チームごとに保持する**ノードごとの敵存在確率（0.0〜1.0）**。毎ターン `observeAndRescore()` で更新される。

| 値 | 意味 |
|----|------|
| `1.0` | 今ターン敵を直接確認 |
| `0.5〜0.9` | 数ターン前に確認、まだ居る可能性が高い |
| `0.1〜0.4` | 観測から時間が経ち確率が薄れた |
| `0.0` | 確認されていない（または確実にクリア） |

### 更新メカニズム

1. **観測**: チーム全員のFOV合算（`getTeamVisibleNodes()`）で見えたノードを記録
2. **減衰**: 前ターンのスコアに `ThreatAccumulationDecay (0.85)` を乗算
3. **上書き**: 今ターン見えたノードは `1.0`（敵あり）または `0.0`（クリア）で確定
4. **BFS拡散**: スコアが隣接ノードへ広がる（`ThreatSpreadFactor × exp(-dist/ThreatSigma)`）

### 適用チーム

`AIConfig.ThreatMapTeams` = `[0, 1, 2, 3, 4, 5]`（全チーム）

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

以下のいずれかを満たすと目的地を再評価する。

| 条件 | 説明 |
|------|------|
| 目的地に到達 | `npc.node.id === goal.goalNodeId` |
| 大きなダメージを受けた | `npc.health < goal.goalSetAtHP - GoalHPChangeThreshold (30)` |
| タイムアウト | `goal.turnsElapsed >= GoalTimeoutTurns (10)` |

### 目的地の選定ロジック (`selectGoalNode`)

1. `getReachableNodes(現在地, GoalSearchRadius=8)` で BFS 半径 8 以内の全到達ノードを取得
2. `getTeamVisibleNodes(npc.id)` でチーム視野を取得（scoreNode に渡す）
3. 各ノードに `scoreNode()` + `threatMap.getScore() × ThreatMapGoalBonus (50)` を適用
4. スコア最大・かつ未占有のノードを目的地に設定

### 経路追従 (`decideTurn`)

```
getPathToNode(現在地, goalNodeId, Infinity)
  → path[1] が未占有 → そこへ移動 (MoveRange = 1 ステップ)
  → path[1] が占有済み → 現在地に留まる
  → 経路が取得できない → 現在地に留まる
```

---

## 移動ノードスコアリング (`scoreNode`)

目的地選定で使われる共通スコア関数。**ThreatMap とチーム視野のみを参照**し、視界外の敵の正確な位置は使わない。

### 関数シグネチャ

```typescript
scoreNode(
  model: Model,
  npc: Player,
  candidateNodeId: number,
  enemies: Player[],              // チーム視認中の敵のみ内部で使用
  threatMap: ThreatMap | null,
  teamVisibleNodeIds: Set<number>,
): number
```

### スコア計算式

```
score = カバースコア + 露出ペナルティ + アンブッシュボーナス + 距離スコア
```

### 1. カバースコア

壁に接しているほど高評価。グラフのエッジ数（通路数）が少ないほど壁が多い。

```
coverScore = 4 - エッジ数          (0〜4)
coverWeight = CoverWeight (30)
            ※ HP < RetreatHPThreshold (40) のとき × RetreatCoverMultiplier (2) = 60

score += coverScore × coverWeight   // 最大 +240
```

### 2. 敵LOS露出ペナルティ

視界外の未観測ノードは ThreatMap の確率で重み付けしたペナルティ。チーム視認中の敵は確定ペナルティ。

```
// 2a: 未観測ノードからの確率的ペナルティ
全ノード走査:
  threat = threatMap.getScore(nid)
  if threat ≤ ScorerThreatExposureMin (0.1): スキップ
  if チーム視認中ノード:                      スキップ（2bで処理）
  if nid → 候補ノードへ LOS あり:
    score += EnemyLOSPenalty (-20) × threat  ← 確率で減衰

// 2b: チームが直接見ている敵からのフルペナルティ
視認中の敵ごとに:
  if 敵 → 候補ノードへ LOS あり:
    score += EnemyLOSPenalty (-20)
```

### 3. アンブッシュボーナス

チームが視認中の敵に射線が通る位置に加点。旧版（LOS対称のため常に0だった）を修正済み。

```
視認中の敵ごとに:
  if 候補ノード → 敵へ LOS あり:
    score += AmbushBonus (+15)
```

### 4. 距離スコア

チーム視認中の敵を優先し、いなければ脅威加重重心を使う。

```
// 優先1: 視認敵がいる場合
targetDist = 最も近い視認敵へのマンハッタン距離

// 優先2: 視認敵がいない場合 → 脅威加重重心
重心(cx, cy) = Σ(threat × position) / Σthreat  (threat > 0.1 のノードのみ)
targetDist = 候補ノードと重心のマンハッタン距離

HP >= RetreatHPThreshold (40): score += targetDist × DistanceWeight (-2)   ← 近づく
HP <  RetreatHPThreshold (40): score += targetDist × |DistanceWeight| (+2)  ← 撤退
```

敵・脅威情報が一切なければ距離スコアはスキップ（カバースコアのみで評価）。

---

## 向き（照準角度）の決定

1. 視野内に敵がいれば最近の敵に向く（`atan2(dy, dx)`）
2. 敵がいない場合かつ `ThreatMapAngleEnabled = true` なら、ThreatMap の高脅威ノード方向に向く（`getHighestThreatNodeFrom()`）
3. 上記いずれもなければ前ターンの角度を維持

---

## 射撃対象の選択 (`selectShotTarget`)

### 射撃可能条件

移動先ノードから以下の全てを満たす敵のみが対象。

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

低 HP の敵を優先、同 HP なら近い敵を優先。

---

## 占有ノード判定

同一ノードへの複数 NPC の移動を防ぐため、候補ノードに生存プレイヤーが既にいる場合はスキップ。

- `isNodeOccupied(model, nodeId, excludeId)` で判定
- 目的地選定時・移動ステップ取得時の両方で適用

---

## AIConfig パラメータ一覧

| 定数 | 値 | 説明 |
|------|----|------|
| `CoverWeight` | 30 | カバースコアの基本重み |
| `EnemyLOSPenalty` | -20 | 敵 LOS ペナルティ（1件あたり） |
| `DistanceWeight` | -2 | 距離スコアの重み（負値 = 近づく） |
| `AmbushBonus` | 15 | アンブッシュボーナス |
| `RetreatHPThreshold` | 40 | 撤退モードに切り替わる HP 閾値 |
| `RetreatCoverMultiplier` | 2 | 撤退時のカバー重み乗数 |
| `ShotLowHPPriority` | 10 | 低 HP 敵への射撃優先ボーナス係数 |
| `GoalSearchRadius` | 8 | 目的地探索の BFS 半径（ステップ数） |
| `GoalTimeoutTurns` | 10 | 強制再評価までのターン数 |
| `GoalHPChangeThreshold` | 30 | 再評価をトリガーする HP 低下量 |
| `RoundAnimationDelayMs` | 1500 | ラウンドアニメーション待機時間（ms） |
| `ThreatMapTeams` | `[0..5]` | ThreatMap を使うチーム（全チーム） |
| `ThreatMapGoalBonus` | 50 | 目的地選定時の ThreatMap 加算重み |
| `ThreatAccumulationDecay` | 0.85 | 毎ターンの脅威スコア減衰率 |
| `ThreatSpreadFactor` | 1.2 | BFS 拡散係数 |
| `ThreatSigma` | 4 | BFS 拡散の距離スケール |
| `ThreatMaxDiffusionSteps` | 1 | BFS 最大拡散ステップ数 |
| `ThreatMapMaxLookDistance` | 8 | 向き決定の脅威探索 BFS 半径 |
| `ThreatMapAngleEnabled` | true | 脅威マップ方向への照準を有効化 |
| `ScorerThreatExposureMin` | 0.1 | scoreNode が無視する脅威スコア下限 |

---

## 関連ファイル

| ファイル | 役割 |
|---------|------|
| `src/logic/TurnManager.ts` | NPC 行動収集・ThreatMap 更新・目的地 Map 管理 |
| `src/logic/ai/NPCBrain.ts` | 行動決定エントリポイント・経路追従 |
| `src/logic/ai/NPCGoalState.ts` | 目的地状態の型定義 |
| `src/logic/ai/NPCGoalManager.ts` | 目的地選定・再評価ロジック |
| `src/logic/ai/NodeScorer.ts` | ノードスコアリング（ThreatMap ベース） |
| `src/logic/ai/ThreatMap.ts` | チームごとの脅威マップ（観測・減衰・BFS拡散） |
| `src/logic/ai/ShotSelector.ts` | 射撃対象選択 |
| `src/config/ai.ts` | AI 定数一元管理 |
| `src/model/model.ts` | `getReachableNodes` / `getPathToNode` / `hasLineOfSight` / `getTeamVisibleNodes` |
