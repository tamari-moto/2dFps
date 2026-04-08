# NPC 行動設計ドキュメント

## 概要

NPCの行動システムは3つの柱で構成される：

1. **パーソナリティ（行動パターンの多様化）** — NPC ごとに異なる戦術特性
2. **マルチターン戦略（記憶システム）** — 敵の最終確認位置を記憶し追跡
3. **NPC 間連携** — 挟み撃ち、集中射撃、散開

## アーキテクチャ

```
TurnManager.processNPCTurns()
  |
  v
NPCBrain.decideTurn(model, npc)
  |
  +-- npc.updateMemory()           ... 敵記憶の更新
  +-- buildCoordinationContext()    ... 味方NPC位置の収集
  |
  +-- NodeScorer.scoreNode()       ... 移動先評価
  |     +-- パーソナリティ重み適用
  |     +-- カバー / LOS / 待ち伏せ / 距離
  |     +-- 散開ペナルティ (ClusterPenalty)
  |     +-- 挟み撃ちボーナス (FlankBonus)
  |     +-- 記憶ベース追跡 (SeekLastKnownBonus)
  |
  +-- ShotSelector.selectShotTarget()  ... 射撃対象選択
        +-- パーソナリティ別優先度
        +-- 集中射撃ボーナス (FocusFireBonus)
```

## パーソナリティ

NPCは生成時にラウンドロビンで3種のパーソナリティのいずれかが割り当てられる。

### 重みテーブル

| パラメータ | Aggressive | Defensive | Ambusher |
|-----------|-----------|-----------|----------|
| coverWeight | 15 | 50 | 20 |
| enemyLOSPenalty | -10 | -30 | -15 |
| distanceWeight | -5 | -1 | 0 |
| ambushBonus | 5 | 10 | 40 |
| retreatHPThreshold | 20 | 60 | 40 |
| retreatCoverMultiplier | 1.5 | 3 | 2 |
| shotLowHPPriority | 5 | 15 | 10 |

### 行動特性

**Aggressive（攻撃型）**
- 敵に積極的に接近する（distanceWeight: -5）
- カバーをあまり重視しない（coverWeight: 15）
- HPが20以下にならないと撤退しない
- 近い敵を優先して射撃

**Defensive（防御型）**
- カバーを最重視（coverWeight: 50）
- 敵の視線を強く警戒（enemyLOSPenalty: -30）
- HP60以下で撤退モードに移行
- 負傷した敵を優先的に狙う（shotLowHPPriority: 15）

**Ambusher（待ち伏せ型）**
- 待ち伏せポジションを最優先（ambushBonus: 40）
- 距離に対して中立（distanceWeight: 0）
- 見えて見えられない位置を積極的に探す

## マルチターン戦略（記憶システム）

### 仕組み

各NPCは `enemyMemory: Map<string, EnemyMemoryEntry>` を持つ。

```typescript
interface EnemyMemoryEntry {
  nodeId: number;    // 最後に観測した敵のノードID
  turnsAgo: number;  // 何ターン前の情報か
}
```

### ライフサイクル

1. **更新タイミング**: `decideTurn()` 呼び出し時に `npc.updateMemory()` を実行
2. **視界内の敵**: `turnsAgo = 0` で記録/更新
3. **視界外の敵**: `turnsAgo` をインクリメント
4. **期限切れ**: `turnsAgo > MemoryDuration (3)` の記憶は削除

### 行動への影響

- **移動先評価**: 敵が見えないとき、最終確認位置に近いノードに `SeekLastKnownBonus` を加算
  - ボーナスは距離の逆数 × 記憶の新しさ（recencyFactor）で計算
- **向き決定**: 敵が見えないとき、最も新しい記憶の位置に向く

## NPC 間連携

### 散開（Cluster Penalty）

他の味方NPCとの距離が `ClusterDistance (3)` マンハッタン未満の場合、`ClusterPenalty (-15)` を加算。
NPCが固まって行動することを防ぐ。

### 挟み撃ち（Flank Bonus）

最も近い敵を基点として、候補ノードと味方NPCの成す角度を計算。
角度が `FlankAngleThreshold (60度)` 以上の場合、`FlankBonus (+20)` を加算。
敵を複数方向から挟むポジションを促進する。

```
     NPC-A
      \
       \ 60度以上
        \
  Enemy ------- 候補ノード (FlankBonus付与)
```

### 集中射撃（Focus Fire）

HPが `FocusFireHPThreshold (50%)` 以下の敵に `FocusFireBonus (+10)` を加算。
複数NPCが同じ負傷した敵を優先的に狙う。

## 設定パラメータ一覧

### PersonalityWeights（`src/config/GameConfig.ts`）

パーソナリティごとの重みセット。上記重みテーブルを参照。

### CoordinationConfig（`src/config/GameConfig.ts`）

| パラメータ | デフォルト値 | 説明 |
|-----------|-----------|------|
| FlankAngleThreshold | 60 | 挟み撃ちとみなす角度差（度） |
| FlankBonus | 20 | 挟み撃ち位置へのスコアボーナス |
| ClusterPenalty | -15 | 味方に近すぎる場合のペナルティ |
| ClusterDistance | 3 | 散開判定のマンハッタン距離 |
| FocusFireHPThreshold | 0.5 | 集中射撃する敵のHP割合閾値 |
| FocusFireBonus | 10 | 集中射撃のスコアボーナス |
| MemoryDuration | 3 | 敵位置を記憶するターン数 |
| SeekLastKnownBonus | 10 | 記憶位置に向かうボーナス |

## 調整ガイド

### NPC を強くしたい場合
- `aggressive.distanceWeight` を小さく（例: -8）→ より積極的に接近
- `CoordinationConfig.FlankBonus` を大きく → 連携強化
- `FocusFireBonus` を大きく → 集中射撃促進

### NPC を弱くしたい場合
- 各パーソナリティの `distanceWeight` を 0 に近づける → 消極的
- `MemoryDuration` を 1 に → 記憶が短い
- `FlankBonus` と `FocusFireBonus` を 0 に → 連携なし

### 特定パーソナリティの調整
- `PersonalityWeights` の該当エントリを直接変更
- 全パラメータは `src/config/GameConfig.ts` に集約

## 変更対象ファイル

| ファイル | 役割 |
|---------|------|
| `src/config/GameConfig.ts` | NPCPersonality型、PersonalityWeights、CoordinationConfig |
| `src/model/Player.ts` | personality, enemyMemory, updateMemory() |
| `src/model/model.ts` | パーソナリティの割り当て |
| `src/logic/ai/NPCBrain.ts` | 意思決定統合（メモリ更新＋連携コンテキスト） |
| `src/logic/ai/NodeScorer.ts` | 移動先評価（パーソナリティ重み＋連携＋記憶） |
| `src/logic/ai/ShotSelector.ts` | 射撃対象選択（パーソナリティ＋集中射撃） |

## 将来の拡張候補

- **難易度スケーリング**: Easy/Normal/Hard でパーソナリティ重みを全体的にスケール
- **行動ツリー**: より複雑な条件分岐ロジック（状態遷移ベース）
- **学習型AI**: プレイヤーの行動パターンに適応する重み調整
- **コミュニケーション**: NPC間で敵発見情報を共有（記憶の伝播）
- **役割分担**: リーダー/サポートなどチーム内役割の明示的な割り当て
