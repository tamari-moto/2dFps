# 開発ドキュメント - 2D FPS

## プロジェクト概要

このプロジェクトは、React + TypeScript + Three.jsで構築された2D FPSゲームです。プレイヤーがグリッド状のマップ上で移動し、視界制限の中で敵を倒すターン制のゲームです。

## 技術スタック

- **フロントエンド**: React 19.0.0
- **言語**: TypeScript 5.7.2
- **3Dレンダリング**: Three.js 0.174.0
- **状態管理**: XState 5.19.2
- **アニメーション**: GSAP 3.12.7
- **ビルドツール**: Vite 6.2.0
- **デプロイ**: gh-pages

## プロジェクト構造

```
2dFps/
├── src/
│   ├── MODEL/          # ゲームロジック層
│   │   ├── model.ts         # メインゲームモデル
│   │   ├── node.ts          # ノード（マップ上の点）
│   │   ├── Graph.ts         # グラフデータ構造
│   │   └── LineSegment.ts   # 障害物・衝突判定
│   ├── GRF/            # グラフィック・UI層
│   │   ├── threeSetup.ts    # Three.js初期化とレンダリング
│   │   ├── StateMachine.ts  # ゲーム状態機械
│   │   ├── GRF_main.tsx     # メインReactコンポーネント
│   │   └── CrossKeypad.tsx  # UIコンポーネント
│   ├── CONTROL/        # 制御層
│   │   └── state.ts         # XState状態管理
│   └── main.tsx        # エントリーポイント
├── public/             # 静的アセット
├── index.html          # HTMLテンプレート
├── package.json        # 依存関係
├── vite.config.ts      # Vite設定
└── tsconfig.json       # TypeScript設定
```

## アーキテクチャ

### レイヤー構造

プロジェクトは3層アーキテクチャで設計されています：

1. **MODEL層** - ゲームロジックとデータ
2. **GRF層** - ビジュアル表現とユーザーインタラクション
3. **CONTROL層** - アプリケーション状態管理

### データフロー

```
ユーザー入力 (Canvas Click)
    ↓
StateMachine (状態遷移判定)
    ↓
Model (ゲームロジック処理)
    ↓
ThreeSetup (ビジュアル更新)
    ↓
レンダリング
```

## 主要コンポーネント詳細

### MODEL層

#### model.ts

ゲームの中核となるモデルクラス。マップ、プレイヤー、敵の管理を行います。

**主要機能**:
- `Init_model()`: 50×50のグリッドマップを生成
- `connectNearNodes()`: 近接ノードを接続してグラフを構築
- `getConnectedNodesAtAngle()`: 指定角度・距離内の接続ノードを取得（視界判定に使用）
- `areNodesConnected()`: 2つのノードが接続されているか判定

**重要な定数**:
- `NodesInGridSize`: 50 (グリッドサイズ)
- `kakudo`: 50 (視界角度)

#### Graph.ts

グラフデータ構造を実装。ノード間の接続関係を管理します。

**主要メソッド**:
- `addVertex(vertex)`: ノード追加
- `addEdge(v1, v2)`: 無向エッジ追加
- `addEdgeDirected(v1, v2)`: 有向エッジ追加
- `removeEdge(v1, v2)`: エッジ削除

#### LineSegment.ts

障害物の線分を表現し、衝突判定を行います。

**主要機能**:
- `intersects()`: 2つの線分の交差判定（CCWアルゴリズム）
- `createRectangleSegments()`: 矩形の障害物生成
- `removeEdgesIfIntersected()`: 障害物と交差するエッジを削除

### GRF層

#### threeSetup.ts (src/GRF/threeSetup.ts)

Three.jsのセットアップとゲーム描画を担当する最重要クラス。

**初期化**:
- WebGLレンダラーの設定
- パースペクティブカメラ (FOV: 90度)
- OrbitControls（回転無効、ズームのみ）
- Raycasterによるマウス入力処理

**ビジュアル要素**:
- プレイヤー: 黄色の立方体
- 敵: 赤色の立方体
- ノード: 円形メッシュ（状態により色変化）
  - 通常: グレー (0xA0A0A0)
  - 視界内: 白 (0xffffff)
  - 選択中: 青 (0x0000ff)
  - 移動先: 緑 (0x00ff00)
  - 射撃対象: 赤 (0xff0000)
- 障害物: シアン色のライン

**主要メソッド**:
- `API_Init()`: マップとノードの初期化
- `API_Veiw()`: ビジュアル状態の更新（色、アニメーション）
- `onCanvasClick()`: クリックイベント処理と状態遷移
- `glRender()`: レンダリングループ

#### StateMachine.ts

ゲームの状態遷移を管理。

**状態**:
- `Idle`: 待機状態
- `Select`: プレイヤー選択
- `Move`: 移動先選択
- `Shot`: 射撃対象選択

**イベント**:
- `SelectPlayer`: プレイヤー選択
- `MovePlayer`: 移動
- `ShotPlayer`: 射撃
- `Complete`: アクション完了
- `Cancel`: キャンセル

**状態遷移フロー**:
```
Idle → Select → Move → Shot → Idle
  ↑       ↓       ↓      ↓
  └───────┴───────┴──────┘ (Cancel)
```

### CONTROL層

#### state.ts (src/CONTROL/state.ts)

XStateを使用した状態機械の実装。StateMachine.tsと同様の状態管理を提供しますが、現在はthreeSetup.ts内のStateMachineクラスが主に使用されています。

## ゲームロジック

### ゲームの流れ

1. **プレイヤー選択** (Idle → Select)
   - プレイヤーのノードをクリック

2. **移動先選択** (Select → Move)
   - 現在位置に接続されたノードをクリック

3. **射撃対象選択** (Move → Shot)
   - 移動先から接続され、視界内のノードをクリック

4. **アクション実行** (Shot → Idle)
   - 射撃対象を再度クリックで確定
   - プレイヤーが移動
   - 敵もランダムに移動
   - 勝敗判定

### 視界システム

視界は `getConnectedNodesAtAngle()` メソッドで実装されています：

- **角度制限**: `kakudo = 50度` の範囲内
- **距離制限**: 最大1000ユニット
- **接続判定**: グラフ上で接続されているノードのみ可視

計算方法：
```typescript
const dotProduct = (nodeVector.x * targetVector.x + nodeVector.y * targetVector.y)
                   / (nodeDistance * targetVectorLength);
const nodeAngle = Math.acos(dotProduct) * (180 / Math.PI);
return nodeAngle < kakudo && nodeDistance <= distance;
```

### 障害物システム

マップ上の矩形障害物により、ノード間の移動が制限されます：

1. **障害物生成**: `createRectangleSegments()` で矩形の4辺を生成
2. **交差判定**: `intersects()` でノード間のエッジと障害物の交差を検出
3. **エッジ削除**: `removeEdgesIfIntersected()` で交差するエッジをグラフから削除

現在のマップには3つの矩形障害物が配置されています：
- (10, 10) から 100×100
- (10, 150) から 150×100
- (150, 10) から 100×100

### 勝敗判定

- **勝利**: 射撃対象が敵のノード (`this.model.emeny.id`) と一致
- **敗北**: 敵の移動先がプレイヤーの位置と一致

判定はアクション実行時 (threeSetup.ts:249-253) に行われます。

## 開発ガイド

### セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Lintチェック
npm run lint

# デプロイ（gh-pagesにデプロイ）
npm run deploy
```

### 開発のベストプラクティス

1. **型安全性**: TypeScriptの型を最大限活用
2. **状態管理**: 状態遷移はStateMachineを経由
3. **レンダリング最適化**: Three.jsのパフォーマンスを考慮
4. **コメント**: 複雑なロジックには日本語コメントを追加

### 新機能追加の流れ

1. **MODEL層**: ゲームロジックを実装
2. **GRF層**: ビジュアル表現を追加
3. **StateMachine**: 必要に応じて状態を追加
4. **テスト**: ブラウザで動作確認

### よくある実装パターン

#### ノードの検索

```typescript
// IDからノードを取得
const node = this.model.nodeList.find(n => n.id === targetId);

// 接続されたノードを取得
const connected = this.model.getConnectedNodes(targetNode);
```

#### メッシュとノードのマッピング

```typescript
// Mesh ID → Node ID
const nodeId = this.meshid_to_nodeid.get(mesh.id);

// Node ID → Mesh ID
const meshId = this.nodeid_to_meshid.get(node.id);
```

#### アニメーション

```typescript
// GSAPを使用した移動アニメーション
gsap.to(this.playercube.position, {
  x: this.model.player.x,
  y: this.model.player.y,
  duration: 1,
});
```

## トラブルシューティング

### よくある問題

1. **ノードがクリックできない**
   - Raycasterの設定を確認
   - メッシュリストに追加されているか確認

2. **視界が正しく表示されない**
   - `player_Angle` の値を確認
   - `getConnectedNodesAtAngle()` のパラメータを確認

3. **障害物が機能しない**
   - `removeEdgesIfIntersected()` が呼ばれているか確認
   - LineSegmentの座標が正しいか確認

## パフォーマンス最適化

### 現在の最適化

- メッシュリストをキャッシュ
- ID マッピングに Map を使用（O(1)検索）
- requestAnimationFrame でレンダリング

### 今後の改善案

- ノード数が多い場合の空間分割
- 視界判定の最適化（角度でフィルタしてから距離判定）
- WebWorkerでグラフ計算を並列化

## デバッグ

### コンソール出力

- 勝敗判定時に "WIN" または "LOSE" を出力
- 状態遷移時に状態をログ出力 (state.ts:60)

### ブラウザ開発者ツール

- Three.jsのオブジェクトは `window` に露出していないため、直接デバッグしにくい
- コンソールログを活用するか、ブレークポイントを設定

## 今後の拡張案

### ゲーム機能

- [ ] マルチプレイヤーモード
- [ ] より複雑なマップ生成
- [ ] アイテムシステム
- [ ] スコアシステム
- [ ] サウンドエフェクト
- [ ] チュートリアル

### 技術的改善

- [ ] ユニットテストの追加
- [ ] E2Eテストの実装
- [ ] パフォーマンス測定
- [ ] モバイル対応
- [ ] アクセシビリティ改善

## 参考リンク

- [Three.js Documentation](https://threejs.org/docs/)
- [React Documentation](https://react.dev/)
- [XState Documentation](https://xstate.js.org/)
- [GSAP Documentation](https://greensock.com/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## ライセンス

このプロジェクトはプライベートプロジェクトです（package.json参照）。

## コントリビューション

開発に参加する場合は、このドキュメントを参照して、アーキテクチャとコーディング規約に従ってください。

---

最終更新日: 2025-11-09
