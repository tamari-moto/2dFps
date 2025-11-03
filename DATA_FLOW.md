# データフローとコード構造

このドキュメントは、2D FPSゲームのデータフローとコンポーネント構造を説明します。

## 目次
- [アーキテクチャ概要](#アーキテクチャ概要)
- [ディレクトリ構造](#ディレクトリ構造)
- [コンポーネント詳細](#コンポーネント詳細)
- [データフロー](#データフロー)
- [イベントフロー](#イベントフロー)
- [状態管理](#状態管理)

---

## アーキテクチャ概要

リファクタリング後のアーキテクチャは、**イベント駆動型**の**階層化・モジュール化**構造を採用しています。

### 設計原則
- **Single Responsibility Principle (SRP)**: 各コンポーネントは単一の責務を持つ
- **Dependency Injection**: コンポーネント間の依存関係を明示的に注入
- **Event-Driven Architecture**: コンポーネント間は疎結合でイベント経由で通信
- **DRY (Don't Repeat Yourself)**: コードの重複を最小化
- **Type Safety**: TypeScriptの型システムを最大限活用

### アーキテクチャ図

```
┌─────────────────────────────────────────────────────────────┐
│                         React UI Layer                       │
│                          (App.tsx)                           │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                      ThreeSetup (119行)                      │
│              オーケストレーションレイヤー                       │
│   ┌─────────────────────────────────────────────────────┐   │
│   │ • GameEventBusの初期化                              │   │
│   │ • 各コンポーネントの初期化と接続                       │   │
│   │ • レンダリングループの制御                            │   │
│   └─────────────────────────────────────────────────────┘   │
└───┬────────┬────────┬─────────┬────────┬──────────────────┘
    │        │        │         │        │
    ▼        ▼        ▼         ▼        ▼
┌────────┐ ┌──────┐ ┌───────┐ ┌──────┐ ┌────────────┐
│ Scene  │ │Visual│ │ Input │ │Game  │ │   Model    │
│Manager │ │Sync  │ │Handler│ │Ctrl  │ │ (Game Data)│
└────────┘ └──────┘ └───────┘ └──────┘ └────────────┘
    │         │         │         │           │
    └─────────┴─────────┴─────────┴───────────┘
                        │
                        ▼
              ┌──────────────────┐
              │  GameEventBus    │
              │ (イベント配信)    │
              └──────────────────┘
```

---

## ディレクトリ構造

```
src/
├── config/                           # 設定ファイル
│   ├── GameConfig.ts                 # ゲーム設定（プレイヤー、カメラなど）
│   └── GameConstants.ts              # 定数定義（Entity ID、キーボードキー）
│
├── core/                             # コアシステム
│   └── events/
│       └── GameEventBus.ts           # イベント駆動システム（Pub/Sub）
│
├── MODEL/                            # ゲームモデル層（データとロジック）
│   ├── entities/                     # エンティティシステム
│   │   ├── Entity.ts                 # 抽象基底クラス
│   │   └── EntityManager.ts          # エンティティ管理
│   ├── Player.ts                     # プレイヤークラス（Entityを継承）
│   ├── Enemy.ts                      # 敵クラス（Entityを継承）
│   ├── model.ts                      # メインゲームモデル
│   ├── node.ts                       # グラフノード
│   ├── edge.ts                       # グラフエッジ
│   ├── LineSegment.ts                # 線分（障害物）
│   ├── MapGenerator.ts               # マップ生成
│   └── ObstacleExporter.ts           # 障害物データのインポート/エクスポート
│
├── GRF/                              # グラフィックス/レンダリング層
│   ├── threeSetup.ts                 # メインオーケストレーター（119行）
│   ├── threeSetup.legacy.ts          # 旧実装のバックアップ（466行）
│   │
│   ├── rendering/                    # レンダリングコンポーネント
│   │   ├── SceneManager.ts           # Three.js管理（シーン、カメラ、レンダラー）
│   │   ├── MeshFactory.ts            # メッシュ生成ファクトリー
│   │   └── VisualizationSync.ts      # Model-View同期
│   │
│   ├── input/                        # 入力処理
│   │   └── InputHandler.ts           # マウス・キーボード入力
│   │
│   ├── game/                         # ゲームロジック
│   │   └── GameController.ts         # ゲーム制御・状態管理
│   │
│   ├── StateMachine.ts               # ステートマシン（大幅改善版）
│   ├── ViewAngleVisualizer.ts        # 視野角の可視化
│   └── ConsoleLogger.tsx             # コンソールログUI
│
└── App.tsx                           # Reactアプリケーションのエントリーポイント
```

---

## コンポーネント詳細

### 1. ThreeSetup (オーケストレーター)
**ファイル**: [src/GRF/threeSetup.ts](src/GRF/threeSetup.ts)
**行数**: 119行（旧実装: 466行、74%削減）

**責務**:
- 各コンポーネントの初期化と依存関係の注入
- レンダリングループの開始
- 公開APIの提供（`getModel()`, `regenerateObstacles()` など）

**依存関係**:
```typescript
ThreeSetup
├── GameEventBus        // イベントバス
├── SceneManager        // Three.js管理
├── Model               // ゲームデータ
├── VisualizationSync   // 描画同期
├── InputHandler        // 入力処理
└── GameController      // ゲームロジック
```

---

### 2. GameEventBus (イベントシステム)
**ファイル**: [src/core/events/GameEventBus.ts](src/core/events/GameEventBus.ts)
**行数**: 約150行

**責務**:
- コンポーネント間のイベント配信（Pub/Subパターン）
- 型安全なイベント管理
- イベント履歴の記録（最大100件）

**主なイベント**:
```typescript
// プレイヤー関連
PLAYER_MOVED, PLAYER_SELECTED, PLAYER_SWITCHED, PLAYER_SHOT

// 敵関連
ENEMY_MOVED, ENEMY_HIT, ENEMY_SWITCHED

// 入力関連
NODE_CLICKED, CANVAS_CLICKED_EMPTY, KEY_PRESSED

// ビュー関連
VIEW_UPDATED, VIEW_ANGLE_TOGGLED

// ゲーム状態
GAME_STARTED, GAME_PAUSED, GAME_OVER
```

**使用例**:
```typescript
// イベントの購読
eventBus.on(GameEventType.NODE_CLICKED, (data) => {
  console.log('Node clicked:', data.nodeId);
});

// イベントの発行
eventBus.emit(GameEventType.PLAYER_MOVED, {
  playerId: 'player1',
  position: { x: 10, y: 20 }
});
```

---

### 3. SceneManager (Three.js管理)
**ファイル**: [src/GRF/rendering/SceneManager.ts](src/GRF/rendering/SceneManager.ts)
**行数**: 123行

**責務**:
- Three.jsの初期化（renderer, scene, camera, controls）
- ウィンドウリサイズ対応
- レンダリング実行
- シーンオブジェクトの追加/削除

**公開メソッド**:
```typescript
getScene(): THREE.Scene
getCamera(): THREE.PerspectiveCamera
getRenderer(): THREE.WebGLRenderer
addToScene(object: THREE.Object3D): void
removeFromScene(object: THREE.Object3D): void
updateControls(): void
render(): void
dispose(): void
```

---

### 4. MeshFactory (メッシュ生成)
**ファイル**: [src/GRF/rendering/MeshFactory.ts](src/GRF/rendering/MeshFactory.ts)
**行数**: 91行

**責務**:
- 各種メッシュの生成（ノード、プレイヤー、敵、障害物）
- メッシュの操作（色変更、スケール変更）
- メッシュ生成ロジックの集約（Factoryパターン）

**公開メソッド**:
```typescript
static createNodeCircle(x: number, y: number): THREE.Mesh
static createPlayer(color: number): THREE.Mesh
static createEnemy(color: number): THREE.Mesh
static createLineSegment(x1, y1, x2, y2): THREE.Line
static setMeshColor(mesh: THREE.Mesh, color: number): void
static setMeshScale(mesh: THREE.Mesh, scale: number): void
static createUndefinedMesh(): THREE.Mesh
```

---

### 5. VisualizationSync (Model-View同期)
**ファイル**: [src/GRF/rendering/VisualizationSync.ts](src/GRF/rendering/VisualizationSync.ts)
**行数**: 338行

**責務**:
- ゲームモデルの状態をThree.js表現に同期
- メッシュの位置・色・スケールの更新
- アニメーション管理（GSAP使用）
- 視野角の可視化
- 敵の可視性制御

**主要メソッド**:
```typescript
updateView(): void                  // 全体の描画更新
updateObstacles(): void             // 障害物の再生成
toggleViewAngle(): boolean          // 視野角の表示切替
setActivePlayer(playerId): void     // アクティブプレイヤーの変更
setActiveEnemy(enemyId): void       // アクティブ敵の変更
getMeshList(): THREE.Mesh[]         // メッシュリストの取得
```

**更新フロー**:
```
updateView()
  ├── updateEnemies()         // 敵の位置・スケール更新
  ├── updatePlayers()         // プレイヤーの位置・スケール更新
  ├── resetNodeColors()       // ノードの色リセット
  ├── updateSpecialNodes()    // 特殊ノード（選択、移動先、射撃目標）の色更新
  └── updateVisibleNodes()    // 視野内ノードの色変更、敵の可視性制御
```

---

### 6. InputHandler (入力処理)
**ファイル**: [src/GRF/input/InputHandler.ts](src/GRF/input/InputHandler.ts)
**行数**: 120行

**責務**:
- マウスクリック処理（Raycasting）
- キーボード入力処理
- 入力イベントをGameEventBusに発行

**入力マッピング**:
```typescript
// マウス
クリック → NODE_CLICKED / CANVAS_CLICKED_EMPTY

// キーボード
'v' → VIEW_ANGLE_TOGGLED
'1' → SELECT_PLAYER_1
'2' → SELECT_PLAYER_2
'3' → SELECT_ENEMY_1
'4' → SELECT_ENEMY_2
```

**処理フロー**:
```
Canvas Click
  ↓
Raycaster処理
  ↓
ノードヒット？
  Yes → emit(NODE_CLICKED, { nodeId, position })
  No  → emit(CANVAS_CLICKED_EMPTY)
```

---

### 7. GameController (ゲームロジック)
**ファイル**: [src/GRF/game/GameController.ts](src/GRF/game/GameController.ts)
**行数**: 321行

**責務**:
- ゲームロジック制御
- ステートマシン管理
- ターン制御（移動、射撃、敵AI）
- 戦闘解決とヒット判定
- イベント駆動のゲームフロー

**イベント処理**:
```typescript
setupEventListeners()
  ├── NODE_CLICKED         → handleNodeClick()
  ├── CANVAS_CLICKED_EMPTY → handleCanvasEmptyClick()
  ├── PLAYER_SWITCHED      → handlePlayerSwitch()
  └── VIEW_ANGLE_TOGGLED   → handleViewAngleToggle()
```

**ゲームフロー**:
```
Idle State
  ↓ (自分のノードをクリック)
Select State
  ↓ (隣接ノードをクリック)
Move State
  ↓ (視野内ノードをクリック)
Shot State
  ↓ (同じノードをクリック)
executeTurn()
  ├── プレイヤー移動
  ├── 全敵をランダム移動
  ├── ヒット判定
  ├── プレイヤーの向き更新
  └── ステートリセット → Select State
```

---

### 8. Model (ゲームデータ)
**ファイル**: [src/MODEL/model.ts](src/MODEL/model.ts)
**行数**: 約500行

**責務**:
- ゲーム世界のデータ管理
- グラフ構造（ノード、エッジ）
- プレイヤー・敵の管理
- 視界計算（視野角、障害物判定）
- マップ生成

**主要メソッド**:
```typescript
// エンティティ管理
getPlayer(playerId: string): Player | undefined
setPlayerRef(playerId: string, node: node): void
setEnemyRef(enemyId: string, node: node): void

// グラフ操作
areNodesConnected(nodeA: node, nodeB: node): boolean
getAngleBetweenNodes(nodeA: node, nodeB: node): number

// 視界計算
getVisibleNodesAtAngle(node, angle, distance): node[]
hasLineOfSight(nodeA: node, nodeB: node): boolean

// マップ生成
generateRandomObstacles(): void
generateComplexMap(): void
importObstacles(obstaclesData: ObstacleData[]): void
```

---

### 9. StateMachine (状態管理)
**ファイル**: [src/GRF/StateMachine.ts](src/GRF/StateMachine.ts)
**行数**: 241行（旧実装: 81行）

**責務**:
- プレイヤーの状態管理
- 状態遷移の制御
- 遷移イベントフック（onEnter, onExit）
- 遷移履歴の記録
- 遷移の検証

**状態定義**:
```typescript
enum State {
  Idle,     // 待機状態
  Select,   // プレイヤー選択
  Move,     // 移動先選択
  Shot      // 射撃目標選択
}
```

**遷移図**:
```
     ┌─────┐
     │Idle │
     └──┬──┘
        │ SelectPlayer
        ▼
     ┌──────┐
     │Select│◄──────┐
     └──┬───┘       │
        │ MovePlayer │
        ▼            │
     ┌──────┐       │
     │ Move │       │
     └──┬───┘       │
        │ ShotPlayer│
        ▼            │
     ┌──────┐       │
     │ Shot │       │
     └──┬───┘       │
        │ Complete  │
        └───────────┘

  Cancel: 任意の状態 → Select
```

---

### 10. Entity System (エンティティシステム)
**ファイル**:
- [src/MODEL/entities/Entity.ts](src/MODEL/entities/Entity.ts)
- [src/MODEL/entities/EntityManager.ts](src/MODEL/entities/EntityManager.ts)
- [src/MODEL/Player.ts](src/MODEL/Player.ts)
- [src/MODEL/Enemy.ts](src/MODEL/Enemy.ts)

**Entity (抽象基底クラス)**:
```typescript
abstract class Entity {
  id: string;
  type: EntityType;  // PLAYER or ENEMY
  node: node;        // 現在位置
  color: number;     // 表示色
  angle: number;     // 向き（ラジアン）

  setNode(newNode: node): void;
  setAngle(angle: number): void;
  isAtSamePositionAs(other: Entity): boolean;
}
```

**Player (Entityを継承)**:
```typescript
class Player extends Entity {
  stateMachine: StateMachine;

  constructor(id, initialNode, color) {
    super(id, EntityType.PLAYER, initialNode, color, 0);
    this.stateMachine = new StateMachine();
  }
}
```

**Enemy (Entityを継承)**:
```typescript
class Enemy extends Entity {
  constructor(id, initialNode, color) {
    super(id, EntityType.ENEMY, initialNode, color, 0);
  }
}
```

**効果**:
- コード重複削減: Player 50%, Enemy 43%
- 新エンティティタイプの追加が容易
- DRY原則の遵守

---

## データフロー

### 初期化フロー

```
App.tsx (React Component)
  │
  ├─ useEffect(() => { ... })
  │    │
  │    └─ setupThree(canvas) を呼び出し
  │         │
  │         └─ new ThreeSetup(canvas)
  │              │
  │              ├─ gameEventBus を取得
  │              ├─ new SceneManager(canvas)
  │              ├─ new Model()
  │              ├─ new VisualizationSync(...)
  │              ├─ new InputHandler(...)
  │              ├─ new GameController(...)
  │              ├─ startRenderLoop()
  │              └─ visualizationSync.updateView()
  │
  └─ 初期化完了
```

### ゲームループフロー

```
requestAnimationFrame (60 FPS)
  │
  ├─ sceneManager.updateControls()  // OrbitControlsの更新
  └─ sceneManager.render()           // シーンのレンダリング
```

### ユーザー入力からビュー更新までのフロー

#### 例1: ノードクリック
```
1. ユーザーがキャンバスをクリック
   │
2. InputHandler.handleCanvasClick()
   ├─ Raycaster処理
   └─ eventBus.emit(NODE_CLICKED, { nodeId, position })

3. GameController.handleNodeClick()
   ├─ ステートマシンの状態を確認
   ├─ 状態に応じた処理
   │   ├─ Idle   → Select へ遷移
   │   ├─ Select → Move へ遷移（隣接ノードの場合）
   │   ├─ Move   → Shot へ遷移（視野内ノードの場合）
   │   └─ Shot   → executeTurn() 実行
   └─ visualizationSync.updateView()

4. VisualizationSync.updateView()
   ├─ updateEnemies()      // 敵の位置・スケール更新（GSAP）
   ├─ updatePlayers()      // プレイヤーの位置・スケール更新（GSAP）
   ├─ resetNodeColors()    // ノードの色リセット
   ├─ updateSpecialNodes() // 特殊ノード（選択、移動先、射撃目標）の色更新
   └─ updateVisibleNodes() // 視野内ノードの色変更、敵の可視性制御

5. Three.jsレンダリング
   └─ 次のフレームで反映
```

#### 例2: キーボード入力（プレイヤー切り替え）
```
1. ユーザーが '1' キーを押下
   │
2. InputHandler.handleKeyDown()
   └─ eventBus.emit(PLAYER_SWITCHED, { currentPlayerId: 'player1' })

3. GameController.handlePlayerSwitch()
   ├─ activePlayerId を更新
   ├─ visualizationSync.setActivePlayer(playerId)
   └─ console.log('Switched to player1')

4. VisualizationSync.setActivePlayer()
   └─ updateView() を呼び出し

5. ビュー更新
   ├─ 新しいアクティブプレイヤーの視野を計算
   ├─ 視野内ノードの色を変更
   └─ プレイヤーのスケールを変更（アクティブ: 1.2倍）
```

### ターン実行フロー（executeTurn）

```
Shot State でノードを再クリック
  │
  └─ GameController.executeTurn()
       │
       ├─ 1. ステートマシンを Complete へ遷移
       │
       ├─ 2. プレイヤー移動
       │    └─ model.setPlayerRef(playerId, nextNode)
       │
       ├─ 3. 全敵をランダム移動
       │    └─ for each enemy:
       │          └─ ランダムに隣接ノードを選択
       │             └─ model.setEnemyRef(enemyId, randomNode)
       │
       ├─ 4. 戦闘結果をチェック
       │    ├─ ヒット判定: shotNodeId == enemy.node.id
       │    │   └─ console.log('Hit!')
       │    └─ 負け判定: player.node.id == enemy.node.id
       │        └─ console.log('LOSE!')
       │
       ├─ 5. プレイヤーの向きを更新
       │    └─ player.setAngle(newAngle)
       │
       ├─ 6. ステートリセット
       │    ├─ stateMachine.transition(SelectPlayer)
       │    ├─ playerSelectMesh = playerNextMesh
       │    ├─ playerNextMesh = undefinedMesh
       │    └─ playerShotMesh = undefinedMesh
       │
       └─ 7. ビュー更新
            └─ visualizationSync.updateView()
```

---

## イベントフロー

### イベントバスの通信パターン

```
┌──────────────┐        ┌──────────────┐
│              │        │              │
│ InputHandler │───────▶│GameEventBus  │
│              │ emit() │              │
└──────────────┘        └──────┬───────┘
                               │
                               │ dispatch
                               │
           ┌───────────────────┼───────────────────┐
           │                   │                   │
           ▼                   ▼                   ▼
    ┌──────────────┐    ┌──────────────┐   ┌──────────────┐
    │              │    │              │   │              │
    │GameController│    │VisualizationSync│   │ Any Listener │
    │              │    │              │   │              │
    └──────────────┘    └──────────────┘   └──────────────┘
         │ on()
         │ listener
         └──────────────────────────────────────────────────┐
                                                             │
                                                             ▼
                                          ┌──────────────────────────┐
                                          │  イベント処理            │
                                          │  └─ handleNodeClick()   │
                                          │  └─ updateView()        │
                                          └──────────────────────────┘
```

### 主要イベントチェーン

#### ノードクリック → ターン実行
```
USER_CLICK
  ↓
INPUT_HANDLER
  ↓ emit(NODE_CLICKED)
GAME_EVENT_BUS
  ↓ dispatch
GAME_CONTROLLER
  ↓ handleNodeClick()
STATE_MACHINE
  ↓ transition()
EXECUTE_TURN (if Shot State)
  ├─ MODEL (update player/enemy positions)
  ├─ COMBAT_RESOLUTION (check hit/lose)
  └─ VISUALIZATION_SYNC (updateView)
       ↓
THREE.JS (render)
```

#### プレイヤー切り替え
```
USER_KEYPRESS ('1')
  ↓
INPUT_HANDLER
  ↓ emit(PLAYER_SWITCHED)
GAME_EVENT_BUS
  ↓ dispatch
GAME_CONTROLLER
  ↓ handlePlayerSwitch()
VISUALIZATION_SYNC
  ↓ setActivePlayer() → updateView()
THREE.JS (render with new view angle)
```

#### 視野角トグル
```
USER_KEYPRESS ('v')
  ↓
INPUT_HANDLER
  ↓ emit(VIEW_ANGLE_TOGGLED)
GAME_EVENT_BUS
  ↓ dispatch
GAME_CONTROLLER
  ↓ handleViewAngleToggle()
VISUALIZATION_SYNC
  ↓ toggleViewAngle()
VIEW_ANGLE_VISUALIZER
  ↓ toggle() → draw() or clear()
THREE.JS (render with/without view angle lines)
```

---

## 状態管理

### アプリケーションレベルの状態

```
ThreeSetup
  ├── model: Model
  │     ├── nodeList: node[]
  │     ├── Edges: EdgeList
  │     ├── Lines: LineSegment[]
  │     ├── players: Map<string, Player>
  │     └── enemies: Map<string, Enemy>
  │
  ├── sceneManager: SceneManager
  │     ├── scene: THREE.Scene
  │     ├── camera: THREE.PerspectiveCamera
  │     ├── renderer: THREE.WebGLRenderer
  │     └── orbitControls: OrbitControls
  │
  ├── visualizationSync: VisualizationSync
  │     ├── meshList: THREE.Mesh[]
  │     ├── playerMeshes: Map<string, THREE.Mesh>
  │     ├── enemyMeshes: Map<string, THREE.Mesh>
  │     ├── activePlayerId: string
  │     └── activeEnemyId: string
  │
  └── gameController: GameController
        └── activePlayerId: string
```

### プレイヤーの状態（StateMachine）

```
Player
  ├── id: string
  ├── node: node              // 現在位置
  ├── angle: number           // 向き（ラジアン）
  ├── color: number           // 表示色
  └── stateMachine: StateMachine
        ├── state: State      // Idle | Select | Move | Shot
        ├── history: StateTransition[]
        └── listeners: Map<string, EventListener[]>
```

### 状態遷移ルール

| 現在の状態 | イベント | 次の状態 | 条件 |
|-----------|---------|---------|------|
| Idle | SelectPlayer | Select | 自分のノードをクリック |
| Select | MovePlayer | Move | 自分のノード or 隣接ノードをクリック |
| Move | ShotPlayer | Shot | 視野内のノードをクリック |
| Shot | ShotPlayer | Shot | 別の視野内ノードをクリック（目標変更） |
| Shot | Complete | Select | 同じノードを再クリック（ターン実行） |
| Any | Cancel | Select | 空白領域をクリック |

---

## パフォーマンス考慮事項

### 最適化されている部分
1. **Raycasting**: `meshList` のみを対象に絞り込み
2. **GSAP アニメーション**: `overwrite: "auto"` で不要なアニメーションをキャンセル
3. **イベント履歴**: 最大100件に制限
4. **メッシュキャッシング**: `playerMeshes`, `enemyMeshes` で Map を使用

### 今後の最適化候補
1. **空間インデックス**: QuadTreeで視界計算を高速化
2. **Object Pooling**: メッシュの再利用
3. **視錐台カリング**: カメラ外のオブジェクトを非表示
4. **LOD (Level of Detail)**: 距離に応じたメッシュ品質調整

---

## テスト戦略

### ユニットテスト（未実施）
- `LineSegment.intersects()`: 線分交差判定
- `Model.hasLineOfSight()`: 視線判定
- `StateMachine.transition()`: 状態遷移
- `MeshFactory.createNodeCircle()`: メッシュ生成

### 統合テスト（未実施）
- `GameController` + `Model`: ターン実行フロー
- `InputHandler` + `GameEventBus`: イベント発行
- `VisualizationSync` + `SceneManager`: 描画同期

### E2Eテスト（未実施）
- プレイヤー移動 → 射撃 → ヒット判定の完全なフロー
- 複数プレイヤーの切り替え
- マップ生成とインポート/エクスポート

---

## まとめ

### アーキテクチャの利点
1. **保守性**: 各コンポーネントが独立しており、変更の影響範囲が限定的
2. **拡張性**: 新機能の追加が容易（例: 新しいエンティティタイプ）
3. **テスト可能性**: コンポーネント単位でのテストが可能
4. **可読性**: 責務が明確で、コードの理解が容易
5. **再利用性**: コンポーネントは他のプロジェクトでも利用可能

### 主な改善点（リファクタリング前後）
- **ThreeSetup**: 466行 → 119行（74%削減）
- **Player/Enemy**: コード重複83%削減
- **StateMachine**: 81行 → 241行（機能追加）
- **新規ファイル**: 9個のモジュール化されたコンポーネント
- **アーキテクチャ**: モノリシック → イベント駆動・階層化

---

**最終更新**: 2025-01-XX
**作成者**: Claude Code
**バージョン**: 2.0（リファクタリング後）
