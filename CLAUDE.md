# CLAUDE.md — 2dFps プロジェクト

## プロジェクト概要

グリッドベースの2D戦術FPSゲーム。Three.js による WebGL レンダリングと、グラフベース経路探索を組み合わせた React + TypeScript アプリケーション。

## コマンド

```bash
npm run dev      # 開発サーバー起動 (http://localhost:5173/2dFps/)
npm run build    # TypeScript コンパイル + Vite ビルド
npm run lint     # ESLint
npm run deploy   # gh-pages へデプロイ
```

## アーキテクチャ

### レイヤー構造

```
Config 層  → src/config/
Model 層   → src/MODEL/
View 層    → src/GRF/
```

### ディレクトリ構成

```
src/
├── main.tsx                    # React エントリポイント
├── config/
│   ├── GameConfig.ts           # 全定数の一元管理（マジックナンバー禁止）
│   └── GameConstants.ts
├── MODEL/
│   ├── model.ts                # コアゲームロジック・データ管理
│   ├── Graph.ts                # 隣接リストによるグラフ構造
│   ├── node.ts                 # ノードデータ構造 (id, x, y)
│   ├── LineSegment.ts          # 線分交差判定 (CCW アルゴリズム)
│   ├── Player.ts               # プレイヤーデータ
│   ├── MapGenerator.ts         # マップ生成
│   ├── ObstacleExporter.ts     # 障害物 JSON エクスポート/インポート
│   └── entities/
│       ├── Entity.ts
│       └── EntityManager.ts
├── GRF/
│   ├── GRF_main.tsx            # ルート React コンポーネント
│   ├── threeSetup.ts           # Three.js 統合・インタラクション制御
│   ├── StateMachine.ts         # ゲーム状態機械
│   ├── ViewAngleVisualizer.ts  # 視野角の可視化
│   ├── ExportMenu.tsx          # マップ管理 UI
│   ├── ConsoleLogger.tsx
│   ├── game/
│   │   └── GameController.ts
│   ├── input/
│   │   └── InputHandler.ts
│   └── rendering/
│       ├── MeshFactory.ts      # Three.js メッシュ生成
│       ├── SceneManager.ts     # シーン管理
│       └── VisualizationSync.ts # モデル↔描画の同期
└── schema/
```

## 主要な設計パターン

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

## コーディング規約

- **マジックナンバー禁止**: 数値定数は必ず `src/config/GameConfig.ts` に追加する
- **Model と View の分離**: ゲームロジックは MODEL 層、描画は GRF/rendering 層
- **型安全**: TypeScript の型を省略しない

## 外部ライブラリ

| ライブラリ | 用途 |
|-----------|------|
| Three.js 0.174 | WebGL レンダリング、Raycaster |
| GSAP 3.12 | アニメーション (移動、点滅) |
| React 19 | UI コンポーネント |
| Vite 6.2 | ビルドツール・HMR |

## デプロイ

- GitHub Pages: `npm run deploy`
- base URL: `/2dFps/`
