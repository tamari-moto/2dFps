# 2dFps

グリッドベースの2D戦術FPSゲーム。Three.js による WebGL レンダリングと Colyseus によるオンラインマルチプレイに対応した React + TypeScript アプリケーション。

> このプロジェクトは Claude（Anthropic AI）との協働で開発しています。

## 機能

- **オフラインモード** — ローカルでターン制対戦（1ブラウザ）
- **オンラインモード** — Colyseus サーバー経由でリアルタイム同期（2人以上）
- **NPC 戦術 AI** — カバー評価・アンブッシュ・低HP撤退による自律行動
- 20×20グリッドのノードベースマップ
- 視野角60°・最大視野距離1000の射線判定
- ターン制（移動 → 射撃）、1ショット34ダメージ（100HP）、複数マス移動（BFS経路探索）
- 障害物生成機能

## 技術スタック

### フロントエンド

| ライブラリ | バージョン | 用途 |
|-----------|-----------|------|
| React | 19 | UI |
| Three.js | 0.174 | WebGL レンダリング・Raycaster |
| GSAP | 3.12 | アニメーション |
| colyseus.js | 0.15.28 | Colyseus クライアント |
| TypeScript | ~5.7.2 | 型付き開発 |
| Vite | 6.2 | ビルド・HMR |

### サーバー

| ライブラリ | バージョン | 用途 |
|-----------|-----------|------|
| colyseus | 0.15.57 | ゲームサーバーフレームワーク |
| @colyseus/schema | 2.x | 状態同期（experimentalDecorators 使用） |
| express | 4.18 | HTTP サーバー |
| TypeScript | ~5.4.0 | 型付き開発 |

## クイックスタート

詳細は [document/SETUP.md](document/SETUP.md) を参照してください。

### フロントエンド

```bash
npm install
npm run dev      # http://localhost:5173/2dFps/
```

### サーバー（オンラインモード使用時）

```bash
cd server
npm install
npm run build
npm start        # ws://localhost:2567
```

開発時は `npm run dev`（ts-node）でビルドなしで起動可能。

## プレイ方法

### オフライン

1. `npm run dev` でフロントエンド起動
2. ブラウザで `http://localhost:5173/2dFps/` を開く
3. 「オフラインで遊ぶ」を選択

### オンライン

1. サーバーを起動（`cd server && npm start`）
2. ブラウザを2タブ開き、それぞれ `http://localhost:5173/2dFps/` へアクセス
3. 両タブで「オンライン接続」→ サーバーURL `ws://localhost:2567` で接続
4. 2人接続するとゲーム開始

## アーキテクチャ

### レイヤー構造

```
Config 層    → src/config/        定数の一元管理
Schema 層    → src/schema/        型定義（サーバーと対称）
Model 層     → src/model/         ゲームロジック・データ
Logic 層     → src/logic/         ターン制御・状態機械
Rendering 層 → src/rendering/     Three.js レンダリング
Input 層     → src/input/         マウス・キーボード入力
UI 層        → src/ui/            React UIコンポーネント
Network 層   → src/network/       アダプターパターン
Server       → server/src/        Colyseus サーバー
```

### ネットワークアダプター

```
INetworkAdapter
├── LocalAdapter    オフライン: プロセス内でロジック実行
└── ColyseusAdapter オンライン: WebSocket で Colyseus サーバーに接続
```

### ゲーム状態機械

```
Idle → Select → Move → Shot → Idle
          ↑__________Cancel__________|
```

## ディレクトリ構成

```
├── src/
│   ├── config/        定数（GameConfig.ts, GameConstants.ts）
│   ├── schema/        型定義（TurnAction, TurnResult）
│   ├── model/         データモデル（Model, Graph, Player, Node, MapGenerator, LineSegment, entities/）
│   ├── logic/         StateMachine, GameController, TurnManager, ai/(NPCBrain, NodeScorer, ShotSelector)
│   ├── rendering/     threeSetup, SceneManager, VisualizationSync, PlayerMeshFactory, PlayerAnimator,
│   │                  PlayerLifecycleManager, CameraFollowController, NodeVisualizationManager,
│   │                  NodeWallMeshFactory, ViewAngleVisualizer, MeshUtils
│   ├── input/         InputHandler
│   ├── ui/            GRF_main, GRF_main.css, LobbyUI, GameHUD, ConsoleLogger
│   ├── network/       INetworkAdapter, LocalAdapter, ColyseusAdapter
│   └── core/          GameEventBus
├── server/
│   └── src/
│       ├── index.ts        Express + Colyseus エントリポイント
│       ├── rooms/          GameRoom（最大10人）
│       ├── schema/         GameState（PlayerState, GameState）
│       └── logic/          ServerGameLogic（権威ゲームロジック）
├── document/
│   ├── SETUP.md               環境構築・セットアップガイド
│   ├── FOLDER_STRUCTURE.md    フォルダ構成の詳細ガイド
│   └── DATA_FLOW.md           アーキテクチャ・データフロー詳細
├── CLAUDE.md              AI 開発用の設計メモ
└── README.md
```

## ドキュメント

| ファイル | 内容 |
|---------|------|
| [document/SETUP.md](document/SETUP.md) | 環境構築・セットアップガイド |
| [document/FOLDER_STRUCTURE.md](document/FOLDER_STRUCTURE.md) | フォルダ構成の詳細ガイド |
| [document/DATA_FLOW.md](document/DATA_FLOW.md) | アーキテクチャ・データフロー詳細 |
| [CLAUDE.md](CLAUDE.md) | AI 開発者向け設計メモ |

## スクリプト一覧

### フロントエンド（ルート）

| コマンド | 内容 |
|---------|------|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | 本番ビルド |
| `npm run lint` | ESLint |
| `npm run deploy` | GitHub Pages へデプロイ |

### サーバー（`server/` ディレクトリ）

| コマンド | 内容 |
|---------|------|
| `npm install` | 依存パッケージのインストール |
| `npm run build` | TypeScript コンパイル（→ dist/） |
| `npm start` | サーバー起動（ws://localhost:2567） |
| `npm run dev` | ts-node で直接起動（開発用） |

## デプロイ

GitHub Pages へのデプロイ:

```bash
npm run deploy
```

URL: `https://<user>.github.io/2dFps/`
