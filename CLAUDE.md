# CLAUDE.md — 2dFps プロジェクト

## プロジェクト概要

グリッドベースの2D戦術FPSゲーム。Three.js による WebGL レンダリングと、グラフベース経路探索を組み合わせた React + TypeScript アプリケーション。オフライン（ローカル）またはオンライン（Colyseus サーバー）の両モードに対応。

## コマンド

### フロントエンド

```bash
npm run dev      # 開発サーバー起動 (http://localhost:5173/2dFps/)
npm run build    # TypeScript コンパイル + Vite ビルド
npm run lint     # ESLint
npm run deploy   # gh-pages へデプロイ
```

### サーバー (`server/` ディレクトリで実行)

```bash
npm install      # 初回・依存パッケージ更新時
npm run build    # TypeScript コンパイル (dist/ へ出力)
npm start        # サーバー起動 (ws://localhost:2567)
npm run dev      # ts-node で直接実行（開発用）
```

## アーキテクチャ

### レイヤー構造

```
Config 層    → src/config/
Model 層     → src/model/
Logic 層     → src/logic/
View 層      → src/ui/ + src/rendering/
Input 層     → src/input/
Network 層   → src/network/
Schema 層    → src/schema/
Server       → server/src/
```

### ディレクトリ構成（クライアント・サーバー対称構造）

```
src/
├── main.tsx                    # React エントリポイント
├── config/
│   └── GameConfig.ts           # 全定数の一元管理（マジックナンバー禁止）
├── schema/                     # ← server/src/schema/ と対称
│   └── types.ts                # TurnAction, TurnResult 等
├── model/                      # ← server/src/logic/ のデータ構造に対応
│   ├── model.ts                # コアゲームロジック・データ管理
│   ├── Graph.ts                # 隣接リストによるグラフ構造
│   ├── node.ts                 # ノードデータ構造 (id, x, y)
│   ├── LineSegment.ts          # 線分交差判定 (CCW アルゴリズム)
│   ├── Player.ts               # プレイヤーデータ
│   ├── MapGenerator.ts         # マップ生成（ランダム障害物 / BSP ダンジョン生成）
│   ├── ObstacleExporter.ts     # 障害物 JSON エクスポート/インポート
│   └── entities/
│       └── Entity.ts           # エンティティ基底クラス
├── logic/                      # ← server/src/logic/ と対称
│   ├── StateMachine.ts         # ゲーム状態機械
│   ├── GameController.ts       # ゲームロジックコントローラ
│   ├── TurnManager.ts          # NPC 行動収集（collectNPCActions）
│   └── ai/
│       ├── NPCBrain.ts         # NPC 行動決定（Facade: decideTurn()）
│       ├── NodeScorer.ts       # 移動候補ノード評価スコアリング
│       └── ShotSelector.ts     # 射撃対象選択
├── rendering/                  # Three.js 描画（クライアント固有・サブフォルダ詳細は rendering/CLAUDE.md）
│   ├── threeSetup.ts           # エントリ。各モジュールを構築・配線
│   ├── VisualizationSync.ts    # オーケストレーター（VIS_* イベント → 各マネージャ委譲）
│   ├── core/                   # Three.js 基盤（SceneManager / LightingRig / PostProcessing / BackgroundGrid）
│   ├── cameras/                # CameraFollow / CameraInput / FPSCamera
│   ├── players/                # PlayerLifecycle / PlayerAnimator / PlayerEffects / PlayerMeshFactory
│   ├── world/                  # NodeVisualization / NodeMeshFactory / WallMeshFactory
│   ├── effects/                # TextBurstEffect
│   └── utils/                  # MeshUtils（gameToWorld 等）
├── input/                      # 入力処理（クライアント固有）
│   └── InputHandler.ts
├── ui/                         # React UI コンポーネント（クライアント固有）
│   ├── GRF_main.tsx            # ルート React コンポーネント（AppState 管理）
│   ├── GRF_main.css            # スタイルシート
│   ├── LobbyUI.tsx             # ロビー画面（オフライン/オンライン選択）
│   ├── GameHUD.tsx             # ゲーム中 HUD（体力・ターン情報）
│   └── ConsoleLogger.tsx
├── network/                    # ← server/src/rooms/ と対称（通信抽象化）
│   ├── INetworkAdapter.ts      # アダプターインターフェース
│   ├── LocalAdapter.ts         # オフライン用（プロセス内処理）
│   └── ColyseusAdapter.ts      # オンライン用（colyseus.js@0.15.x）
└── core/
    └── GameEventBus.ts         # イベントバス

server/
├── package.json                # colyseus@0.15.57, express@4.18, TS 5.4
├── tsconfig.json               # module: commonjs, experimentalDecorators
└── src/
    ├── index.ts                # Express + Colyseus サーバーエントリ
    ├── rooms/
    │   └── GameRoom.ts         # ゲームルーム（最大10人）
    ├── schema/
    │   └── GameState.ts        # @colyseus/schema 定義
    └── logic/
        └── ServerGameLogic.ts  # サーバー権威ゲームロジック
```

## 主要な設計パターン

### AppState（ui/GRF_main.tsx）

```
lobby → connecting → playing
         ↓(失敗)
        lobby
```

### ネットワークアダプター

```typescript
INetworkAdapter
├── LocalAdapter    // オフライン: プロセス内でゲームロジックを実行
└── ColyseusAdapter // オンライン: WebSocket で Colyseus サーバーに接続
```

### 状態機械 (StateMachine.ts)

```
Idle → Select → Move → Shot → Idle
どの状態からも Cancel で Idle へ戻る
```

### イベント駆動アーキテクチャ (GameEventBus)

`src/core/GameEventBus.ts` がアプリケーション全体のイベントハブ。型安全な pub/sub でレイヤー間を疎結合に接続する。

| カテゴリ | 主なイベント | 発火元 → 購読先 |
|---------|-------------|----------------|
| プレイヤー | `PLAYER_MOVED`, `PLAYER_SELECTED`, `PLAYER_SWITCHED`, `PLAYER_ANGLE_CHANGED` | GameController → VisualizationSync |
| 戦闘 | `COMBAT_RESOLVED`, `HIT_DETECTED`, `MISS_DETECTED` | GameController → UI / 描画 |
| ターン | `TURN_STARTED`, `TURN_ENDED`, `TURN_ACTION` | GameController ↔ NetworkAdapter |
| NPC | `NPC_TURN_STARTED`, `NPC_TURNS_COMPLETE` | TurnManager → GameController |
| 入力制御 | `INPUT_LOCKED` | GameController → InputHandler（ラウンド処理中のロック） |
| 入力 | `NODE_CLICKED`, `CANVAS_CLICKED_EMPTY`, `KEY_PRESSED` | InputHandler → GameController |
| 描画コマンド | `VIS_UPDATE_VIEW`, `VIS_SET_ACTIVE_PLAYER`, `VIS_SHOW_HIT_EFFECT` 等 | GameController → VisualizationSync |
| マップ | `MAP_GENERATED`, `OBSTACLES_UPDATED` | MapGenerator → 描画 |
| ゲーム状態 | `GAME_STARTED`, `GAME_OVER` | NetworkAdapter → GameController / UI |
| ネットワーク | `NETWORK_CONNECTED`, `ROOM_STATE_CHANGED`, `TURN_RESULT_RECEIVED`, `PLAYER_JOINED` 等 | ColyseusAdapter → GameController |

### 描画レイヤーの委譲構造

VisualizationSync は薄いオーケストレーターとして、GameEventBus の `VIS_*` イベントを受け取り、専門マネージャに処理を委譲する（詳細は [src/rendering/CLAUDE.md](src/rendering/CLAUDE.md)）。

```
VisualizationSync (オーケストレーター)
├── players/PlayerLifecycleManager  # メッシュ生成・可視・Transform
├── players/PlayerAnimator          # GSAP（idle/walk/attack/dance）
├── players/PlayerEffects           # ヒットパルス・死亡フェード
├── world/NodeVisualizationManager  # ノード色・双方向 ID マップ
├── cameras/CameraFollowController  # カメラ追従
└── effects/TextBurstEffect         # ダンス文字バースト
```

### Mesh ↔ Node 双方向マッピング

```typescript
meshToNodeMap: Map<number, number>  // THREE.Mesh.id → node.id
nodeToMeshMap: Map<number, number>  // node.id → THREE.Mesh.id
```

### インタラクションサイクル

```
マウスクリック → Raycaster → Mesh ID → Node ID
→ NODE_CLICKED イベント発火 (GameEventBus)
→ GameController が受信 → StateMachine 状態遷移 → Model 更新
→ VIS_* イベント発火 → VisualizationSync が各マネージャに委譲
→ GSAP アニメーション → renderer.render()
```

### サーバースキーマ (GameState.ts)

```typescript
PlayerState: { id, nodeId, angle, health, isAlive, color }
GameState:   { players: MapSchema<PlayerState>, currentTurnPlayerId, gameStarted }
```

### サーバーメッセージプロトコル

| 方向 | メッセージ | データ |
|------|-----------|--------|
| S→C | `player_assigned` | `{ playerId }` |
| S→C | `obstacles_ready` | `Obstacle[]` |
| S→C | `game_started` | `{ firstTurnPlayerId }` |
| S→C | `turn_result` | `TurnResult` |
| S→C | `game_over` | `{ winnerId }` |
| S→C | `player_left` | `{ playerId }` |
| S→C | `error` | `{ code }` |
| S→C | `server_config` | `Partial<GameConfig>`（クライアント側 `applyServerConfig()` で定数を上書き） |
| C→S | `turn_action` | `{ playerId, moveToNodeId, shotAtNodeId? }` |

### 同時移動ラウンド制 (GameController + TurnManager + LocalAdapter)

人間プレイヤーが行動を確定すると、全 NPC の行動をまとめて収集し、全プレイヤーの移動・射撃をアトミックに解決する。

```
GameController.executeTurn()
  ├── 人間プレイヤーの TurnAction を作成
  ├── networkAdapter.supportsNPC() が true なら
  │     TurnManager.collectNPCActions()
  │       ↓ 生存 NPC ごとに
  │     NPCBrain.decideTurn(model, npc)
  │       ├── NodeScorer.scoreNode()     // カバー・距離・LOS でノード評価
  │       └── ShotSelector.selectShotTarget()  // 視野内敵を HP・距離でランク付け
  ├── networkAdapter.sendRoundActions(allActions)  // 全員分を一括送信
  │     LocalAdapter: 全移動を Snapshot で確定 → 全射撃を解決（アトミック）
  │     ColyseusAdapter: 逐次 sendTurnAction() にフォールバック（未対応）
  └── VIS_UPDATE_VIEW を1回発火 → 全プレイヤーのアニメーションを同時再生
        RoundAnimationDelayMs 後に INPUT_LOCKED(false) で入力を再開
```

**INetworkAdapter インターフェース（抜粋）:**

```typescript
interface INetworkAdapter {
  sendTurnAction(action: TurnAction): void;
  sendRoundActions(actions: TurnAction[]): void;  // 同時ラウンド用
  supportsNPC(): boolean;                         // オフライン時 true
}
```

**AIConfig（GameConfig.ts）** の主要パラメータ:

| 定数 | 値 | 説明 |
|------|----|------|
| `CoverWeight` | 30 | 壁に囲まれたノードへの加点 |
| `EnemyLOSPenalty` | -20 | 敵から見えるノードへのペナルティ |
| `AmbushBonus` | 15 | NPC が見えて敵が見えない場合のボーナス |
| `DistanceWeight` | -2 | 高HP時: 敵に近づく / 低HP時: 遠ざかる |
| `RetreatHPThreshold` | 40 | 撤退モードに切り替わる HP 閾値 |
| `RetreatCoverMultiplier` | 2 | 撤退時のカバーウェイト乗数 |
| `ShotLowHPPriority` | 10 | 低 HP 敵への射撃優先度ボーナス |
| `RoundAnimationDelayMs` | 1500 | ラウンドアニメーション完了待機時間（全員同時再生後） |

### BFS 経路探索 (model.ts)

```typescript
// 到達可能ノード一覧（BFS・複数マス移動）
getReachableNodes(fromNodeId: number, maxSteps: number): Set<number>

// 最短経路（BFS・複数マス移動）
getPathToNode(fromNodeId: number, toNodeId: number, maxSteps: number): number[] | null
```

### ColyseusAdapter の注意点

- `game_started` はコールバック登録前に届く場合がある → `pendingGameStarted` でキャッシュして後で発火
- `onAdd` は `initializePlayers` の状態デルタより先に発火する場合がある → `Promise.resolve()` で1マイクロタスク遅延
- `MapSchema.forEach` の順序は保証されない → `playerOrder` 配列（挿入順）でターン管理

## 座標系と角度規約

ゲーム空間（model/logic 層）は **XY 平面、`player.angle` は度数法・`atan2(dy, dx)` ベース（0° = +X、反時計回り正）**。Three.js 側の座標変換、モデルローカル軸、`rotation.y` 変換式、過去の落とし穴は [`src/rendering/CLAUDE.md`](src/rendering/CLAUDE.md) に集約されている。

`player.angle` は `getVisibleNodesAtAngle`、`NPCBrain`、`LocalAdapter` など model/logic 層全体で共有されているため、**レンダリング側の都合で変更してはいけない**。

## コーディング規約

- **マジックナンバー禁止**: 数値定数は必ず `src/config/GameConfig.ts` に追加する
- **Model と View の分離**: ゲームロジックは `model/` + `logic/` 層、描画は `rendering/` 層、UI は `ui/` 層
- **型安全**: TypeScript の型を省略しない
- **サーバー側定数に注意**: `server/src/logic/ServerGameLogic.ts` にハードコードされた定数（グリッドサイズ等）があり、クライアント側 `GameConfig.ts` と値が異なる場合がある。変更時は両方を確認すること

## 外部ライブラリ

| ライブラリ | 用途 |
|-----------|------|
| Three.js 0.174 | WebGL レンダリング、Raycaster |
| three-stdlib 2.35 | Three.js 拡張ユーティリティ |
| GSAP 3.12 | アニメーション (移動、点滅) |
| React 19 | UI コンポーネント |
| Vite 6.2 | ビルドツール・HMR |
| colyseus.js 0.15.28 | ブラウザ用 Colyseus クライアント |
| colyseus 0.15.57 | サーバー側 Colyseus フレームワーク |
| @colyseus/schema 2.x | スキーマ同期（experimentalDecorators 使用） |

## バージョン固定の注意点

- **サーバーとクライアントは必ず同じ Colyseus メジャー.マイナーを使うこと**
  - サーバー: `colyseus@0.15.x`
  - クライアント: `colyseus.js@0.15.x`（`@colyseus/sdk` は 0.17.x 用なので使わない）
- `@colyseus/schema@4.x`（Colyseus 0.17.x 同梱）は TC39 標準デコレーターが必要で Node.js 20 + TS 5.8 では動かない。0.15.x の `@colyseus/schema@2.x` + `experimentalDecorators` を使うこと
- サーバー側 TypeScript は 5.4.x を使うこと（5.8.x はデコレーター仕様変更の影響あり）

## デプロイ

- GitHub Pages: `npm run deploy`
- base URL: `/2dFps/`
