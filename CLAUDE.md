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
│   ├── GameConfig.ts           # 全定数の一元管理（マジックナンバー禁止）
│   └── GameConstants.ts
├── schema/                     # ← server/src/schema/ と対称
│   └── types.ts                # TurnAction, TurnResult 等
├── model/                      # ← server/src/logic/ のデータ構造に対応
│   ├── model.ts                # コアゲームロジック・データ管理
│   ├── Graph.ts                # 隣接リストによるグラフ構造
│   ├── node.ts                 # ノードデータ構造 (id, x, y)
│   ├── LineSegment.ts          # 線分交差判定 (CCW アルゴリズム)
│   ├── Player.ts               # プレイヤーデータ
│   ├── MapGenerator.ts         # マップ生成
│   ├── ObstacleExporter.ts     # 障害物 JSON エクスポート/インポート
│   └── entities/
│       └── Entity.ts           # エンティティ基底クラス
├── logic/                      # ← server/src/logic/ と対称
│   ├── StateMachine.ts         # ゲーム状態機械
│   └── GameController.ts       # ゲームロジックコントローラ
├── rendering/                  # Three.js 描画（クライアント固有）
│   ├── threeSetup.ts           # Three.js 統合・オーケストレーション
│   ├── SceneManager.ts         # シーン管理
│   ├── PlayerMeshFactory.ts    # プレイヤーメッシュ生成
│   ├── PlayerAnimator.ts       # GSAP によるプレイヤーアニメーション
│   ├── PlayerLifecycleManager.ts # プレイヤーの生成・破棄・状態遷移
│   ├── CameraFollowController.ts # カメラ追従制御
│   ├── VisualizationSync.ts    # モデル↔描画の同期
│   ├── ViewAngleVisualizer.ts  # 視野角の可視化
│   ├── NodeVisualizationManager.ts # ノードの色状態管理
│   ├── NodeWallMeshFactory.ts  # 障害物の3D壁メッシュ生成
│   └── MeshUtils.ts            # メッシュユーティリティ
├── input/                      # 入力処理（クライアント固有）
│   └── InputHandler.ts
├── ui/                         # React UI コンポーネント（クライアント固有）
│   ├── GRF_main.tsx            # ルート React コンポーネント（AppState 管理）
│   ├── GRF_main.css            # スタイルシート
│   ├── LobbyUI.tsx             # ロビー画面（オフライン/オンライン選択）
│   ├── GameHUD.tsx             # ゲーム中 HUD（体力、ターン情報等）
│   ├── ExportMenu.tsx          # マップ管理 UI
│   └── ConsoleLogger.tsx       # デバッグコンソール
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

### Mesh ↔ Node 双方向マッピング

```typescript
meshToNodeMap: Map<number, number>  // THREE.Mesh.id → node.id
nodeToMeshMap: Map<number, number>  // node.id → THREE.Mesh.id
```

### インタラクションサイクル

```
マウスクリック → Raycaster → Mesh ID → Node ID
→ StateMachine → Model 更新 → VisualizationSync.updateView()
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
| S→C | `game_started` | `{ firstTurnPlayerId }` |
| S→C | `turn_result` | `TurnResult` |
| S→C | `game_over` | `{ winnerId }` |
| S→C | `player_left` | `{ playerId }` |
| S→C | `error` | `{ code }` |
| C→S | `turn_action` | `{ playerId, moveToNodeId, shotAtNodeId? }` |

### ColyseusAdapter の注意点

- `game_started` はコールバック登録前に届く場合がある → `pendingGameStarted` でキャッシュして後で発火
- `onAdd` は `initializePlayers` の状態デルタより先に発火する場合がある → `Promise.resolve()` で1マイクロタスク遅延
- `MapSchema.forEach` の順序は保証されない → `playerOrder` 配列（挿入順）でターン管理

## コーディング規約

- **マジックナンバー禁止**: 数値定数は必ず `src/config/GameConfig.ts` に追加する
- **Model と View の分離**: ゲームロジックは `model/` + `logic/` 層、描画は `rendering/` 層、UI は `ui/` 層
- **型安全**: TypeScript の型を省略しない

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
