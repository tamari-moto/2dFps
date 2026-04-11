# フォルダ構成ガイド

## 目次

- [概要](#概要)
- [クライアント側フォルダ構成](#クライアント側フォルダ構成)
- [サーバー側フォルダ構成](#サーバー側フォルダ構成)
- [クライアント/サーバー対称性](#クライアントサーバー対称性)
- [各フォルダの役割](#各フォルダの役割)
- [ファイル依存関係](#ファイル依存関係)
- [旧構成からの変更点](#旧構成からの変更点)

---

## 概要

このプロジェクトのフォルダ構成は、**クライアント側とサーバー側で役割別フォルダを対称に揃える**設計になっています。
どちらも `config/`, `schema/`, `model/`, `logic/` といった明確な役割別フォルダに分割されており、
どのコードがどの責務を持つかを一目で把握できます。

---

## クライアント側フォルダ構成

```
src/
├── main.tsx                    React エントリポイント
├── vite-env.d.ts
│
├── config/                     定数の一元管理
│   └── GameConfig.ts           全定数（マジックナンバー禁止）
│
├── schema/                     型定義（サーバーと対称）
│   └── types.ts                TurnAction, TurnResult
│
├── model/                      ゲームロジック・データモデル
│   ├── model.ts                コアゲームロジック・状態管理
│   ├── Graph.ts                隣接リストによるグラフ構造
│   ├── node.ts                 ノードデータ構造 (id, x, y)
│   ├── LineSegment.ts          線分交差判定 (CCW アルゴリズム)
│   ├── Player.ts               プレイヤーエンティティ
│   ├── MapGenerator.ts         マップ生成ユーティリティ
│   ├── ObstacleExporter.ts     障害物の JSON エクスポート/インポート
│   └── entities/
│       └── Entity.ts           エンティティ基底クラス
│
├── logic/                      クライアント側ゲームロジック
│   ├── StateMachine.ts         ゲーム状態機械 (Idle→Select→Move→Shot→Idle)
│   ├── GameController.ts       ターン制御・入力→Model 変換
│   ├── TurnManager.ts          NPC 行動収集（collectNPCActions）
│   └── ai/
│       ├── NPCBrain.ts         NPC 行動決定のエントリポイント（decideTurn 関数）
│       ├── NodeScorer.ts       移動候補ノードの評価スコアリング
│       └── ShotSelector.ts     射撃対象の選択ロジック
│
├── rendering/                  Three.js レンダリング
│   ├── threeSetup.ts           Three.js 統合・初期化（setupThree 関数）
│   ├── SceneManager.ts         シーン・カメラ・レンダラー管理
│   ├── PlayerMeshFactory.ts    プレイヤーメッシュ生成
│   ├── PlayerAnimator.ts       GSAP によるプレイヤーアニメーション
│   ├── PlayerLifecycleManager.ts プレイヤーメッシュの生成・破棄・状態遷移
│   ├── CameraFollowController.ts カメラ追従・パンアニメーション
│   ├── VisualizationSync.ts    オーケストレーター（4マネージャへ委譲）
│   ├── ViewAngleVisualizer.ts  視野角の可視化（エッジライン描画）
│   ├── NodeVisualizationManager.ts ノードの色状態・双方向マッピング管理
│   ├── NodeWallMeshFactory.ts  ノード円形メッシュ・障害物3D壁メッシュ生成
│   └── MeshUtils.ts            メッシュユーティリティ
│
├── input/                      入力処理
│   └── InputHandler.ts         マウスクリック・キーボード入力処理
│
├── ui/                         React UIコンポーネント
│   ├── GRF_main.tsx            ルート React コンポーネント（AppState 管理）
│   ├── GRF_main.css            スタイルシート
│   ├── LobbyUI.tsx             ロビー画面（オフライン/オンライン選択）
│   ├── GameHUD.tsx             ゲーム中 HUD（体力、ターン情報等）
│   └── ConsoleLogger.tsx       コンソールログ表示
│
├── network/                    ネットワーク層
│   ├── INetworkAdapter.ts      アダプターインターフェース
│   ├── LocalAdapter.ts         オフライン用（プロセス内処理）
│   └── ColyseusAdapter.ts      オンライン用（WebSocket）
│
└── core/                       共通インフラ
    └── GameEventBus.ts         イベントバス（疎結合通信）
```

---

## サーバー側フォルダ構成

```
server/
├── package.json                colyseus@0.15.57, express@4.18, TS 5.4
├── tsconfig.json               module: commonjs, experimentalDecorators
└── src/
    ├── index.ts                Express + Colyseus サーバーエントリ
    │
    ├── schema/                 状態スキーマ（クライアントと対称）
    │   └── GameState.ts        PlayerState, GameState (@colyseus/schema)
    │
    ├── rooms/                  ゲームルーム
    │   └── GameRoom.ts         ゲームルーム（最大10人）
    │
    └── logic/                  サーバー権威ゲームロジック
        └── ServerGameLogic.ts  ターン処理・ダメージ計算・勝利判定
```

---

## クライアント/サーバー対称性

| クライアント (`src/`) | サーバー (`server/src/`) | 役割 |
|----------------------|------------------------|------|
| `config/` | ー | 定数管理 |
| `schema/` | `schema/` | 型定義・スキーマ |
| `model/` | ー | データモデル（クライアント専用） |
| `logic/` | `logic/` | ゲームロジック |
| `rendering/` | ー | 描画（クライアント専用） |
| `input/` | ー | 入力処理（クライアント専用） |
| `ui/` | ー | React UI（クライアント専用） |
| `network/` | ー | ネットワーク層（クライアント専用） |
| `core/` | ー | 共通インフラ |
| ー | `rooms/` | ゲームルーム管理（サーバー専用） |

**設計方針**: サーバーに `schema/` と `logic/` があるように、クライアントにも同名フォルダを置く。
これにより「どちら側の何を見ればよいか」が直感的にわかる。

---

## 各フォルダの役割

### `config/` — 定数の一元管理

ゲーム全体で使う数値・文字列定数をここに集約する。ファイル外へのマジックナンバー流出を禁止。

```typescript
// src/config/GameConfig.ts（全定数を一元管理）
export const PlayerConfig = {
  ViewAngle: 60,          // 視野角（度）
  MaxViewDistance: 1000,  // 最大視野距離
};
export const AIConfig = {
  RoundAnimationDelayMs: 1500,  // ラウンドアニメーション待機時間
  // ...
};
```

### `schema/` — 型定義

クライアント/サーバー間でやり取りするメッセージの型を定義する。
サーバーの `schema/GameState.ts` と対称的に置くことで、インターフェースが一目で把握できる。

```typescript
// src/schema/types.ts
export interface TurnAction {
  playerId: string;
  moveToNodeId: number;
  shotAtNodeId?: number;
}

export interface TurnResult {
  // ターン結果データ
}
```

### `model/` — データモデル・ゲームロジック

ゲームの核となるデータ構造とロジック。描画や入力には依存しない。

| ファイル | 役割 |
|---------|------|
| `model.ts` | ゲーム状態管理（ノードリスト、プレイヤー配置、視野計算） |
| `Graph.ts` | 隣接リスト（ノード間の移動可否） |
| `node.ts` | ノードデータ型 (`{ id, x, y }`) |
| `LineSegment.ts` | 障害物の線分・交差判定 (CCW アルゴリズム) |
| `Player.ts` | プレイヤーエンティティ（HP、生死） |
| `MapGenerator.ts` | マップ生成（ランダム障害物 / BSP ダンジョン生成、シード付きPRNG対応） |
| `ObstacleExporter.ts` | 障害物の JSON エクスポート/インポート |
| `entities/Entity.ts` | エンティティ基底クラス（位置・角度） |

**依存関係**: `model/` は `config/` のみに依存する（rendering, network, ui に依存しない）

### `logic/` — クライアント側ゲームロジック

ターン制御やゲームイベント処理を担う層。`model/` のデータを操作し、`GameEventBus` 経由で `rendering/` に更新を通知する。

| ファイル | 役割 |
|---------|------|
| `StateMachine.ts` | ゲーム状態機械（Idle → Select → Move → Shot） |
| `GameController.ts` | ターン入力の受付・`Model` 更新・`GameEventBus` 経由で描画通知 |
| `TurnManager.ts` | NPC 行動収集（`collectNPCActions()`）。`NPCBrain.decideTurn()` で全 NPC の `TurnAction` を一括生成 |
| `ai/NPCBrain.ts` | NPC 行動決定のエントリポイント（`decideTurn` 関数）。NodeScorer・ShotSelector を組み合わせて `TurnAction` を生成 |
| `ai/NodeScorer.ts` | 移動候補ノードをカバー・LOS 露出・アンブッシュ・距離でスコアリング |
| `ai/ShotSelector.ts` | 視野内の生存敵を HP・距離でランク付けし最適射撃対象を選択 |

**状態遷移**:
```
Idle → [SelectPlayer] → Select → [MovePlayer] → Move → [ShotPlayer] → Shot → [Complete] → Idle
                                              ↑________________________________[Cancel]___________|
```

**同時移動ラウンド制フロー**:
```
GameController.executeTurn()
  ├── 人間の TurnAction を作成
  ├── TurnManager.collectNPCActions() — 全 NPC の行動を一括収集
  │     ↓ 生存 NPC ごとに
  │   NPCBrain.decideTurn(model, npc)
  │     ├── NodeScorer.scoreNode() — 候補ノードを評価
  │     └── ShotSelector.selectShotTarget() — 射撃対象を決定
  └── networkAdapter.sendRoundActions(allActions) — 全員分を一括送信
        LocalAdapter: 全移動を確定 → 全射撃を解決（アトミック）
```

詳細は [game-logic.md](game-logic.md) を参照。

### `rendering/` — Three.js レンダリング

Three.js を使った描画に関するすべてのコードを格納する。

| ファイル | 役割 |
|---------|------|
| `threeSetup.ts` | レンダリング初期化・`setupThree()` 関数のエントリ。各コンポーネントの組み立て |
| `SceneManager.ts` | Three.js の `Scene`, `Camera`, `Renderer`, `Controls` を管理 |
| `PlayerMeshFactory.ts` | プレイヤーキャラクターの3Dメッシュ生成 |
| `PlayerAnimator.ts` | GSAP によるプレイヤーアニメーション（移動、ダンス、被弾演出） |
| `PlayerLifecycleManager.ts` | プレイヤーメッシュの生成・破棄・状態遷移 |
| `CameraFollowController.ts` | カメラ追従・パンアニメーション |
| `VisualizationSync.ts` | 薄いオーケストレーター。`VIS_*` イベントを受け取り4マネージャに委譲 |
| `ViewAngleVisualizer.ts` | 視野角のエッジライン描画 |
| `NodeVisualizationManager.ts` | ノードメッシュ管理・色状態・双方向マッピング |
| `NodeWallMeshFactory.ts` | ノード円形メッシュ・障害物3D壁メッシュ生成 |
| `MeshUtils.ts` | メッシュユーティリティ（プレースホルダメッシュ作成、ノード色設定） |

**VisualizationSync の委譲構造**:
```
VisualizationSync (オーケストレーター)
├── PlayerAnimator           # GSAP アニメーション
├── PlayerLifecycleManager   # プレイヤーメッシュの生成・破棄
├── NodeVisualizationManager # ノードの色・双方向マッピング
└── CameraFollowController   # カメラ追従
```

**双方向マッピング** (NodeVisualizationManager が管理):
```
meshToNodeMap: Map<THREE.Mesh.id, node.id>  // クリック検出 → ゲームロジック
nodeToMeshMap: Map<node.id, THREE.Mesh.id>  // ゲームロジック → 描画更新
```

### `input/` — 入力処理

ユーザー入力（マウス・キーボード）を受け取り、`GameEventBus` 経由でイベントを発行する。
`InputHandler` は直接ゲームロジックを呼ばず、イベントのみを発行する（疎結合設計）。

```typescript
// クリック → イベント発行 → GameController が購読して処理
this.eventBus.emit(GameEventType.NODE_CLICKED, { nodeId, position });
```

### `ui/` — React UIコンポーネント

ゲームのオーバーレイUI（ロビー画面、HUD等）。

| ファイル | 役割 |
|---------|------|
| `GRF_main.tsx` | ルートコンポーネント（`lobby → connecting → playing` の AppState 管理） |
| `GRF_main.css` | スタイルシート |
| `LobbyUI.tsx` | ゲーム開始前のロビー画面（オフライン/オンライン選択） |
| `GameHUD.tsx` | ゲーム中 HUD（体力、ターン情報、プレイヤー切替等） |
| `ConsoleLogger.tsx` | ゲームログのコンソール表示 |

**AppState フロー**:
```
lobby → [オンライン選択] → connecting → [接続成功] → playing
                               ↓ [失敗]
                             lobby
```

### `network/` — ネットワーク層（アダプターパターン）

オフライン/オンラインの違いを `INetworkAdapter` インターフェースで抽象化する。
`rendering/` や `logic/` はどちらのアダプターか意識せずゲームを実行できる。

```
INetworkAdapter
├── LocalAdapter    オフライン: プロセス内でゲームロジックを実行
└── ColyseusAdapter オンライン: WebSocket で Colyseus サーバーに接続
```

**ColyseusAdapter の注意点**:
- `game_started` はコールバック登録前に届く可能性がある → `pendingGameStarted` でキャッシュ
- `onAdd` は `initializePlayers` 状態デルタより先に発火する場合がある → `Promise.resolve()` で1マイクロタスク遅延

### `core/` — 共通インフラ

複数の層をまたいで使う基盤コード。

| ファイル | 役割 |
|---------|------|
| `GameEventBus.ts` | シングルトンのイベントバス。`input/` → `logic/` → `rendering/` 間の疎結合通信。`VIS_*` イベントで描画層を駆動 |

---

## ファイル依存関係

依存の方向は **上から下** のみ（循環依存なし）。

```
ui/
 └── rendering/threeSetup.ts
      ├── rendering/SceneManager.ts
      ├── rendering/VisualizationSync.ts  → model/, config/, core/GameEventBus.ts
      │    ├── rendering/PlayerAnimator.ts
      │    ├── rendering/PlayerLifecycleManager.ts → PlayerMeshFactory.ts
      │    ├── rendering/NodeVisualizationManager.ts → NodeWallMeshFactory.ts
      │    └── rendering/CameraFollowController.ts
      ├── rendering/ViewAngleVisualizer.ts → config/, model/node.ts
      ├── input/InputHandler.ts           → core/GameEventBus.ts, config/
      ├── logic/GameController.ts         → model/, logic/StateMachine.ts,
      │                                      logic/TurnManager.ts, core/GameEventBus.ts,
      │                                      schema/types.ts, network/INetworkAdapter.ts
      ├── logic/TurnManager.ts            → model/, logic/ai/NPCBrain.ts,
      │                                      network/INetworkAdapter.ts
      ├── logic/ai/NPCBrain.ts            → model/, logic/ai/NodeScorer.ts,
      │                                      logic/ai/ShotSelector.ts, schema/types.ts
      └── network/                        → model/, schema/types.ts

model/ → config/ のみ
```

**核心ルール**: `model/` は `rendering/` や `ui/` に依存しない。
描画に関する知識をモデルに持ち込まない（Model-View 分離）。

---

## 旧構成からの変更点

2026年2月に旧フォルダ構成をサーバー側と揃えるためリファクタリングを実施。

### 移動ファイル一覧

| 旧パス | 新パス |
|-------|-------|
| `src/MODEL/model.ts` | `src/model/model.ts` |
| `src/MODEL/Graph.ts` | `src/model/Graph.ts` |
| `src/MODEL/node.ts` | `src/model/node.ts` |
| `src/MODEL/LineSegment.ts` | `src/model/LineSegment.ts` |
| `src/MODEL/Player.ts` | `src/model/Player.ts` |
| `src/MODEL/MapGenerator.ts` | `src/model/MapGenerator.ts` |
| `src/MODEL/ObstacleExporter.ts` | `src/model/ObstacleExporter.ts` |
| `src/MODEL/entities/Entity.ts` | `src/model/entities/Entity.ts` |
| `src/GRF/StateMachine.ts` | `src/logic/StateMachine.ts` |
| `src/GRF/game/GameController.ts` | `src/logic/GameController.ts` |
| `src/GRF/threeSetup.ts` | `src/rendering/threeSetup.ts` |
| `src/GRF/rendering/SceneManager.ts` | `src/rendering/SceneManager.ts` |
| `src/GRF/rendering/MeshFactory.ts` | `src/rendering/PlayerMeshFactory.ts` |
| `src/GRF/rendering/VisualizationSync.ts` | `src/rendering/VisualizationSync.ts` |
| `src/GRF/ViewAngleVisualizer.ts` | `src/rendering/ViewAngleVisualizer.ts` |
| `src/GRF/input/InputHandler.ts` | `src/input/InputHandler.ts` |
| `src/GRF/GRF_main.tsx` | `src/ui/GRF_main.tsx` |
| `src/GRF/LobbyUI.tsx` | `src/ui/LobbyUI.tsx` |
| `src/GRF/ExportMenu.tsx` | `src/ui/ExportMenu.tsx` |
| `src/GRF/ConsoleLogger.tsx` | `src/ui/ConsoleLogger.tsx` |
| `src/network/types.ts` | `src/schema/types.ts` |
| `src/core/events/GameEventBus.ts` | `src/core/GameEventBus.ts` |

### 変更の意図

| 旧フォルダ | 新フォルダ | 変更理由 |
|-----------|-----------|---------|
| `MODEL/`（大文字） | `model/`（小文字） | 命名規約の統一（Unixスタイル小文字） |
| `GRF/`（略称） | `logic/`, `rendering/`, `input/`, `ui/` | 役割別に分割して意図を明確化 |
| `network/types.ts` | `schema/types.ts` | サーバーの `schema/` フォルダと対称 |
| `core/events/GameEventBus.ts` | `core/GameEventBus.ts` | 不要なサブフォルダを除去してフラット化 |
| `ui/ExportMenu.tsx`（削除） | ー | マップ管理 UI を削除（2026-03-24） |
