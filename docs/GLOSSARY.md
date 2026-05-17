# 用語集 (Glossary)

このリポジトリで使われるゲームドメイン・アーキテクチャ・設定定数の用語を一元管理します。

---

## 目次

1. [ゲームドメイン用語](#1-ゲームドメイン用語)
2. [ステートマシン](#2-ステートマシン)
3. [アーキテクチャ用語](#3-アーキテクチャ用語)
4. [イベントバス (GameEventBus)](#4-イベントバス-gameeventbus)
5. [AI・経路探索](#5-ai経路探索)
6. [マップ生成 (BSP)](#6-マップ生成-bsp)
7. [描画レイヤー](#7-描画レイヤー)
8. [ネットワーク・プロトコル](#8-ネットワークプロトコル)
9. [設定定数一覧 (GameConfig)](#9-設定定数一覧-gameconfig)
10. [座標系・角度規約](#10-座標系角度規約)

---

## 1. ゲームドメイン用語

### ノード (Node)
グリッドマップ上の離散的な位置。`id`・`x`・`y` を持ち、グラフの頂点を構成する。
プレイヤーの現在地・移動先・射撃対象はすべてノード ID で管理される。

参照: `src/model/node.ts`, `src/model/Graph.ts`

---

### グリッド (Grid)
ノードが格子状に配置された正方形の地図。既定サイズは `NodesInGridSize × NodesInGridSize`（30×30）。
実際のピクセル幅は `(NodesInGridSize - 1) × NodeSpacing` で計算する（`CalculatedConfig.MapSize`）。

参照: `src/config/GameConfig.ts`

---

### チーム (Team)
プレイヤーの所属勢力。`0`〜`5` の整数値で表す。同チーム間は射撃ダメージを与えない。
各チームには固有の色（赤・青・緑・橙・紫・黄）が割り当てられる。

参照: `src/config/GameConfig.ts` — `TeamId`, `TEAM_COLORS`

---

### プレイヤー (Player)
ゲーム内のエンティティ。現在ノード・HP・チーム・向き角度・生死フラグを持つ。
人間操作キャラクターと NPC の両方を指す。

参照: `src/model/Player.ts`

---

### NPC (Non-Player Character)
AI が自律的に制御するプレイヤー。`NPCBrain.decideTurn()` が毎ラウンドの行動を決定する。

参照: `src/logic/ai/NPCBrain.ts`

---

### ターン (Turn)
一人のプレイヤーが行う1回の行動単位（移動 + 射撃 + 向き変更）。
ローカルモードでは全員の行動を同時に収集して**ラウンド**として一括処理する。

---

### ラウンド (Round)
全プレイヤーの行動を並列実行する処理単位。移動を先に確定（衝突解決あり）してから射撃を適用する（アトミック処理）。

参照: `src/network/LocalAdapter.ts`, `src/logic/GameController.ts`

---

### ターンアクション (TurnAction)
プレイヤーの意図を表す型: `{ playerId, moveToNodeId, shotAtNodeId?, angle? }`。
サーバー/アダプターに送信されラウンド処理に使用される。

参照: `src/schema/types.ts`

---

### ターン結果 (TurnResult)
ラウンド処理後の結果: `{ movingPlayerId, newNodeId, newAngle, hits[] }`。
`hits` の各要素は `{ targetId, damage, isEliminated }` を含む。

参照: `src/schema/types.ts`

---

### 視線 (LOS — Line of Sight)
2つのノード間を障害物が遮らず直線的に見通せるかどうかの判定。
マップ初期化時に全ノードペアを事前計算して **LOS キャッシュ**に保存する。

参照: `src/model/model.ts` — `losCache`, `LineSegment.ts`

---

### 視野 (FOV — Field of View)
プレイヤーの向き角度を中心に `ViewAngle` 度（デフォルト 60°）の扇形内にあり、かつ `MaxViewDistance` 以内で LOS が通っているノードの集合。
チーム単位で合成し「チーム可視ノード」として共有する。

参照: `src/model/model.ts` — `getVisibleNodesAtAngle()`

---

### 射撃 / ヒット / ミス (Shot / Hit / Miss)
- **Shot**: 視野内ノードを対象とした攻撃アクション
- **Hit**: `ShotHitRadius` 以内に対象プレイヤーが存在し、`AccuracyExponent` による確率判定を通過した場合
- **Miss**: ヒット条件を満たさなかった場合

参照: `src/config/GameConfig.ts` — `PlayerConfig`

---

### 移動範囲 (MoveRange)
1ターンに移動できる最大ノード数（デフォルト 1）。BFS で到達可能ノードを列挙する際の最大ステップ数。

---

### 到達可能ノード (Reachable Nodes)
現在ノードから `MoveRange` ステップ以内に BFS で到達できるノードの集合。
UI での移動先候補として強調表示される。

参照: `src/model/model.ts` — `getReachableNodes()`

---

### パス衝突 (Path Collision)
同一ラウンドで複数プレイヤーが同じノードへ移動しようとした場合の衝突。
衝突解決ロジックが最終位置を調整する。

参照: `src/network/LocalAdapter.ts` — `resolveRoundPaths()`

---

### 解決済みアクション (ResolvedAction)
衝突解決後の最終行動: `{ playerId, finalNodeId, path[], shotAtNodeId }`。

---

### HP (Health Points / Hit Points)
プレイヤーの残りHP。0以下になると `isAlive = false` になり退場する。
初期値は 100。`DamagePerShot = 34` なので 3発で撃破。

---

### スペクテーターモード (Spectator Mode)
人間プレイヤーなしで NPC のみを観戦するモード。自動ループ（`AutoLoop`）で連続実行も可能。

---

### FPS モード (FPS Mode)
特定プレイヤー視点の一人称カメラモード。`T` キーで切替。

---

### オルソモード (Ortho Mode)
真上から俯瞰する直交投影カメラモード。`O` キーで切替。

---

## 2. ステートマシン

`StateMachine.ts` が管理するターンの入力フロー。

参照: `src/logic/StateMachine.ts`

### 状態 (State)

| 状態 | 説明 |
|------|------|
| **Idle** | 入力待ち。何も選択されていない初期状態 |
| **Select** | プレイヤーを選択済み。到達可能ノードを表示中 |
| **Move** | 移動先ノードを選択済み。射撃対象ノードを表示中 |
| **Shot** | 射撃対象を選択済み。行動確定待ち |

### トリガーイベント (GameEvent enum)

| イベント | トリガー | 遷移 |
|---------|---------|------|
| `SelectPlayer` | 自ノードをクリック | Idle → Select |
| `MovePlayer` | 到達可能ノードをクリック | Select → Move |
| `ShotPlayer` | 射撃対象ノードをクリック | Move → Shot |
| `Complete` | 行動確定 | Shot → Idle |
| `Cancel` | 空白クリック / ESC | 任意 → Idle |

---

## 3. アーキテクチャ用語

### レイヤー構造

| レイヤー | ディレクトリ | 役割 |
|---------|------------|------|
| Config 層 | `src/config/` | 全定数の一元管理 |
| Model 層 | `src/model/` | データ構造・コアロジック |
| Logic 層 | `src/logic/` | ゲームコントローラ・AI |
| View 層 | `src/ui/`, `src/rendering/` | UI・Three.js 描画 |
| Input 層 | `src/input/` | マウス・キーボード入力 |
| Network 層 | `src/network/` | 通信抽象化 |
| Schema 層 | `src/schema/` | 共有型定義 |

---

### ネットワークアダプター (INetworkAdapter)
ゲームロジックとトランスポート層を分離するインターフェース。

| 実装 | 説明 |
|-----|------|
| **LocalAdapter** | オフライン用。プロセス内でゲームロジックと NPC AI を実行 |
| **ColyseusAdapter** | オンライン用。WebSocket で Colyseus サーバーに接続 |

参照: `src/network/INetworkAdapter.ts`, `src/network/LocalAdapter.ts`, `src/network/ColyseusAdapter.ts`

---

### イベント駆動アーキテクチャ (Event-Driven Architecture)
`GameEventBus` を中心とした pub/sub モデル。レイヤー間を疎結合に接続する。
発火元は型安全なイベントを emit し、購読者は自分に関係するイベントだけ受信する。

参照: `src/core/GameEventBus.ts`

---

### GameController
ゲームロジックの中枢。ステートマシンの遷移・ターン実行・VIS イベント発火を担う。

参照: `src/logic/GameController.ts`

---

### TurnManager
各ラウンドで NPC の行動を収集し ThreatMap を更新する。`collectNPCActions()` が中心処理。

参照: `src/logic/TurnManager.ts`

---

### VisualizationSync
`VIS_*` イベントを受け取り、各描画マネージャに処理を委譲する薄いオーケストレーター。

参照: `src/rendering/VisualizationSync.ts`

---

## 4. イベントバス (GameEventBus)

参照: `src/core/GameEventBus.ts`

### プレイヤーイベント

| イベント | 説明 |
|---------|------|
| `PLAYER_MOVED` | プレイヤーが新しいノードに移動した |
| `PLAYER_SELECTED` | 操作対象プレイヤーが選択された |
| `PLAYER_SWITCHED` | 操作プレイヤーが切り替わった |
| `PLAYER_SHOT` | プレイヤーが射撃した |
| `PLAYER_ANGLE_CHANGED` | 向き角度が更新された |
| `PLAYER_ACTION_CONFIRMED` | プレイヤーが今ラウンドの行動を確定した |

### 戦闘イベント

| イベント | 説明 |
|---------|------|
| `COMBAT_RESOLVED` | ラウンドの全射撃処理が完了した |
| `HIT_DETECTED` | 射撃がヒットした |
| `MISS_DETECTED` | 射撃がミスした |

### ターンイベント

| イベント | 説明 |
|---------|------|
| `TURN_STARTED` | ターンが開始した |
| `TURN_ENDED` | ターンが終了した |
| `TURN_ACTION` | ターンアクションが発火した |

### NPC イベント

| イベント | 説明 |
|---------|------|
| `NPC_TURN_STARTED` | NPC のターン処理が開始した |
| `NPC_TURNS_COMPLETE` | 全 NPC の行動収集が完了した |
| `NPC_ONLY_TURN` | NPC のみが行動するラウンド（`R` キー） |

### 入力イベント

| イベント | 説明 |
|---------|------|
| `NODE_CLICKED` | グリッドノードがクリックされた |
| `CANVAS_CLICKED_EMPTY` | 空白領域がクリックされた（キャンセル） |
| `KEY_PRESSED` | キーボード入力 |
| `INPUT_LOCKED` | ラウンド処理中・アニメーション中の入力ロック切替 |

### モードイベント

| イベント | 説明 |
|---------|------|
| `FPS_MODE_TOGGLE_REQUESTED` | FPS モード切替要求（`T` キー） |
| `FPS_MODE_CHANGED` | FPS モードの有効/無効が変わった |
| `ORTHO_MODE_TOGGLE_REQUESTED` | オルソモード切替要求（`O` キー） |
| `ORTHO_MODE_CHANGED` | オルソモードの有効/無効が変わった |
| `SPECTATOR_SET_AUTO_LOOP` | スペクテーター自動ループの有効/無効 |
| `SPECTATOR_SELECT_PLAYER` | スペクテーターが観戦対象プレイヤーを選択 |

### マップイベント

| イベント | 説明 |
|---------|------|
| `MAP_GENERATED` | マップが生成された |
| `OBSTACLES_UPDATED` | 障害物データが更新された |

### ゲーム状態イベント

| イベント | 説明 |
|---------|------|
| `GAME_STARTED` | ゲームが開始した |
| `GAME_OVER` | ゲームが終了した |

### ネットワークイベント

| イベント | 説明 |
|---------|------|
| `NETWORK_CONNECTED` | サーバーへの接続が確立した |
| `NETWORK_DISCONNECTED` | 接続が切断された |
| `NETWORK_ERROR` | 接続エラーが発生した |
| `TURN_ASSIGNED` | ターン権が割り当てられた |
| `TURN_RESULT_RECEIVED` | ターン結果を受信した |
| `PLAYER_JOINED` | 他プレイヤーが参加した |
| `PLAYER_LEFT` | 他プレイヤーが退出した |
| `ROOM_STATE_CHANGED` | Colyseus ルームの状態が変化した |

### 描画コマンドイベント (VIS_*)

| イベント | 説明 |
|---------|------|
| `VIS_UPDATE_VIEW` | 全プレイヤー・ノード色・カメラを一括再描画 |
| `VIS_SET_ACTIVE_PLAYER` | カメラ追従と入力対象プレイヤーを切替 |
| `VIS_SET_SELECT_MESH` | 選択ノードをハイライト |
| `VIS_SET_NEXT_MESH` | 移動先候補ノードをハイライト |
| `VIS_SET_SHOT_MESH` | 射撃対象ノードをハイライト（攻撃アニメーションも発火） |
| `VIS_CLEAR_NEXT_MESH` | 移動先ハイライトを解除 |
| `VIS_CLEAR_SHOT_MESH` | 射撃ハイライトを解除 |
| `VIS_SHOW_HIT_EFFECT` | ヒットエフェクトを再生し HP バーを更新 |
| `VIS_HIDE_PLAYER` | プレイヤーメッシュをフェードアウト（死亡） |
| `VIS_UPDATE_OBSTACLES` | 壁メッシュを再構築 |
| `VIS_PLAY_DANCE` | ダンスアニメーション + テキストバーストを再生 |
| `VIS_SET_REACHABLE_NODES` | 移動範囲ノードをハイライト |
| `VIS_CLEAR_REACHABLE_NODES` | 移動範囲ハイライトを解除 |
| `VIS_SET_MOVE_PATH` | パス経由ノードを可視化 |
| `VIS_CLEAR_MOVE_PATH` | パス可視化を解除 |
| `VIS_ANIMATE_ALONG_PATH` | プレイヤーメッシュをパスに沿って GSAP でアニメーション |
| `VIS_PATH_ANIM_COMPLETE` | パスアニメーションが完了した |
| `VIS_THREAT_MAP_UPDATED` | 脅威マップのヒートマップ表示を更新 |
| `VIS_SCORENODE_LABELS` | ノードのスコアラベルを更新 |

---

## 5. AI・経路探索

### BFS (Breadth-First Search / 幅優先探索)
グラフを幅優先で探索するアルゴリズム。以下の用途で使用する:
- 到達可能ノードの列挙（`getReachableNodes`）
- 最短経路の計算（`getPathToNode`）
- 脅威マップの拡散（`ThreatMap` の BFS 拡散）

参照: `src/model/model.ts`

---

### NPCBrain
NPC の行動決定ファサード。`decideTurn(model, npc)` を呼ぶと1ターン分の `TurnAction` を返す。
内部で `NodeScorer` と `ShotSelector` に処理を委譲する。

参照: `src/logic/ai/NPCBrain.ts`

---

### NodeScorer
移動候補ノードを評価してスコアを付与するモジュール。
評価軸: カバー（壁隣接度）・LOS リスク・距離・アンブッシュボーナス・脅威マップ。

参照: `src/logic/ai/NodeScorer.ts`

---

### ShotSelector
NPC の射撃対象を選択するモジュール。
優先度: 視野内の敵を HP・距離でランク付けして最も有利な対象を返す。

参照: `src/logic/ai/ShotSelector.ts`

---

### 脅威マップ (ThreatMap)
チームごとに各ノードの敵出現確率を推定するヒートマップ。
観測した敵位置から BFS 拡散で周囲に脅威値を伝播し、毎ラウンド `ThreatAccumulationDecay` 倍で減衰する。

参照: `src/logic/ai/NPCBrain.ts` — `ThreatMap`

---

### NPC 目標 (NPCGoalState)
NPC が目指している目標ノード: `{ goalNodeId, goalSetAtHP, turnsElapsed }`。
`GoalTimeoutTurns` 経過・HP が `GoalHPChangeThreshold` 以上変化・目標到達で再評価する。

---

### BFS 拡散 (BFS Diffusion)
脅威マップで使用する波紋伝播。観測された敵ノードから隣接ノードへ脅威値を広げる。
`ThreatSpreadFactor`（拡散強度）・`ThreatSigma`（距離スケール）で挙動を調整する。

---

### AI 係数早見表

| 定数 | 値 | 説明 |
|------|------|------|
| `CoverWeight` | 30 | 壁隣接ノードへの加点 |
| `EnemyLOSPenalty` | -20 | 敵に見えるノードへのペナルティ |
| `AmbushBonus` | 15 | NPC が見えて敵が見えない場合のボーナス |
| `DistanceWeight` | -2 | 高 HP 時: 敵に近づく（負 = 近づく） |
| `RetreatHPThreshold` | 40 | 撤退モードに切り替わる HP 閾値 |
| `RetreatCoverMultiplier` | 2 | 撤退時のカバーウェイト乗数 |
| `ShotLowHPPriority` | 10 | 低 HP 敵への射撃優先度ボーナス |
| `ThreatAccumulationDecay` | 0.85 | 毎ラウンドの脅威値減衰率 |
| `ThreatSpreadFactor` | 1.2 | BFS 拡散の強度 |
| `ThreatSigma` | 4 | 拡散の距離スケール |

---

## 6. マップ生成 (BSP)

### BSP (Binary Space Partitioning / 二分空間分割)
空間を再帰的に二分割してダンジョンを生成するアルゴリズム。

処理フロー:
1. マップ全体を BSP ツリーで再帰的に分割（深さ `MaxDepth` まで）
2. 葉ノードにランダムなサイズの部屋 (Room) を配置
3. 各部屋の周囲に壁 (Wall) とドア開口部を生成
4. 隣接する兄弟部屋を L 字型の通路 (Corridor) で接続
5. 部屋内に柱 (Pillar) とハーフウォール (HalfWall) を配置
6. 左半分を右半分にミラーコピーしてマップを対称化

参照: `src/model/MapGenerator.ts`, `server/src/logic/ServerGameLogic.ts`

---

### BSPNode
BSP ツリーの内部ノード。セルの境界矩形・深さ・左右の子ノード・オプションの部屋情報を持つ。

---

### 部屋 (Room)
BSP 葉ノードに配置された矩形空間。プレイヤーのスポーン地点や戦闘エリアになる。

---

### 壁 (Wall)
部屋の境界を囲む矩形の線分群。中央にドア開口部（`DoorWidth` px）が空いている。

---

### ドア (Door)
壁の中央に設けられた通路。幅は `DoorWidth`（60 px）。

---

### 通路 (Corridor)
2つの部屋を接続する L 字型の経路。幅 `CorridorWidth`（60 px）で両側に壁がある。

---

### 柱 (Pillar)
部屋内に配置される小さな正方形の障害物（`PillarSize` = 60 px）。カバーと視線遮断に使う。
部屋面積が `PillarMinRoomArea` 以上の場合のみ、最大 `PillarMaxPerRoom` 個まで配置する。

---

### ハーフウォール (HalfWall)
ドア脇に配置される半壁（長さ `HalfWallLength` = 75 px）。通路を完全には塞がない戦術的障害物。

---

### 障害物 (Obstacle)
LOS 判定と移動遮断に使う線分の集合体。`ObstaclePayload` としてネットワーク経由で送受信される。

参照: `src/model/ObstacleExporter.ts`, `src/schema/types.ts` — `ObstaclePayload`

---

### シード (Seed)
再現可能なマップ生成のための初期値。文字列を FNV-1a ハッシュで数値化し PRNG に渡す。

### PRNG (Pseudo-Random Number Generator / 疑似乱数生成器)
`mulberry32` アルゴリズムを使用。シードによって同一のマップを再現できる。

---

## 7. 描画レイヤー

### Three.js
WebGL ベースの 3D グラフィックスライブラリ（バージョン 0.174）。

参照: `src/rendering/threeSetup.ts`

---

### シーン (Scene)
Three.js のルートコンテナ。すべての可視ジオメトリ（ノード・壁・プレイヤー・エフェクト）を保持する。

---

### メッシュ (Mesh)
Three.js のビジュアルオブジェクト（ジオメトリ + マテリアルの組み合わせ）。プレイヤー・ノード・壁などを表現する。

---

### レイキャスター (Raycaster)
マウス座標から 3D 空間へ光線を投射し、ヒットしたメッシュを検出する Three.js ユーティリティ。
クリックしたノードの特定に使用する。

参照: `src/input/InputHandler.ts`

---

### Mesh ↔ Node 双方向マッピング

| マップ | 型 | 説明 |
|-------|----|------|
| `meshToNodeMap` | `Map<THREE.Mesh.id, node.id>` | レイキャスターのヒット結果をノード ID に変換 |
| `nodeToMeshMap` | `Map<node.id, THREE.Mesh.id>` | ノード ID から対応メッシュを取得 |

参照: `src/rendering/world/NodeVisualizationManager.ts`

---

### VisualizationSync
`GameEventBus` の `VIS_*` イベントを受け取り、各専門マネージャへ処理を委譲するオーケストレーター。

| マネージャ | 役割 |
|-----------|------|
| `PlayerLifecycleManager` | メッシュ生成・位置・可視性・パスアニメーション |
| `PlayerAnimator` | GSAP アニメーション（idle / walk / attack / dance） |
| `PlayerEffects` | ヒットパルス・死亡フェード |
| `NodeVisualizationManager` | ノード色・双方向 ID マップ管理 |
| `CameraFollowController` | プレイヤー追従カメラ |
| `TextBurstEffect` | ダンス時の文字バーストエフェクト |

参照: `src/rendering/VisualizationSync.ts`, `src/rendering/CLAUDE.md`

---

### GSAP
GreenSock Animation Platform（バージョン 3.12）。プレイヤー移動・カメラパン・攻撃シーケンスなどのトゥイーンアニメーションに使用。

---

### HP バー (HP Bar)
プレイヤーの上に表示されるキャンバスベースの体力インジケーター。ヒット時に更新される。

---

### テキストバーストエフェクト (TextBurstEffect)
ダンス勝利時にプレイヤー位置で「モ・ヒ・カ・ン」などの文字が浮かび上がるパーティクル風エフェクト。

参照: `src/rendering/effects/TextBurstEffect.ts`

---

## 8. ネットワーク・プロトコル

### Colyseus
WebSocket ベースのリアルタイムゲームサーバーフレームワーク（バージョン 0.15.x）。
サーバーは `colyseus@0.15.57`、クライアントは `colyseus.js@0.15.28` を使用する（バージョン一致必須）。

参照: `server/src/rooms/GameRoom.ts`

---

### メッセージプロトコル早見表

| 方向 | メッセージ | データ | 説明 |
|------|-----------|--------|------|
| S→C | `player_assigned` | `{ playerId }` | 参加時にプレイヤー ID を割り当て |
| S→C | `obstacles_ready` | `ObstaclePayload[]` | サーバー生成マップの障害物を送信 |
| S→C | `game_started` | `{ firstTurnPlayerId }` | 2人以上参加でゲーム開始 |
| S→C | `turn_result` | `TurnResult` | ラウンド処理結果を返却 |
| S→C | `game_over` | `{ winnerId }` | 勝敗確定 |
| S→C | `player_left` | `{ playerId }` | 他プレイヤーが退出 |
| S→C | `error` | `{ code }` | エラー通知 |
| S→C | `server_config` | `Partial<GameConfig>` | クライアント定数を上書き |
| C→S | `turn_action` | `TurnAction` | プレイヤーの行動を送信 |

---

### GameRoom
Colyseus の `Room` サブクラス。1ゲームインスタンスをホストし、プレイヤーの参加/退出・ターンルーティング・勝利判定を担う。

参照: `server/src/rooms/GameRoom.ts`

---

### ServerGameLogic
権威的なターン処理モジュール。移動検証・LOS チェック付き射撃解決・ダメージ適用をアトミックに実行する。

参照: `server/src/logic/ServerGameLogic.ts`

---

### pendingGameStarted
`ColyseusAdapter` で使用するキャッシュフラグ。コールバック登録前に `game_started` が届いた場合に保持し、登録後に遅延発火する。

参照: `src/network/ColyseusAdapter.ts`

---

### playerOrder
`ColyseusAdapter` で挿入順を保持する配列。`MapSchema.forEach` の順序が保証されないためターン管理に使用する。

参照: `src/network/ColyseusAdapter.ts`

---

## 9. 設定定数一覧 (GameConfig)

参照: `src/config/GameConfig.ts`

> **マジックナンバー禁止**: 数値定数は必ずここに追加すること。

### MapConfig

| 定数 | 値 | 説明 |
|------|------|------|
| `NodesInGridSize` | 30 | グリッド1辺のノード数 |
| `NodeSpacing` | 30 | 隣接ノード間のピクセル距離 |
| `ObstacleMargin` | 30 | マップ端から障害物までの最低距離（px） |

### BSPMapConfig

| 定数 | 値 | 説明 |
|------|------|------|
| `MaxDepth` | 3 | BSP 再帰の最大深さ |
| `MinCellSize` | 300 | これ以下のセルは分割しない（px） |
| `SplitMinRatio` | 0.35 | 分割位置の最小比率 |
| `SplitMaxRatio` | 0.65 | 分割位置の最大比率 |
| `RoomMinSize` | 180 | 部屋の最小辺長（px） |
| `RoomMaxRatio` | 0.85 | 部屋はセルの最大 85% まで |
| `RoomPadding` | 30 | セル端から部屋端までの余白（px） |
| `WallThickness` | 15 | 部屋境界の壁の厚さ（px） |
| `DoorWidth` | 60 | ドア開口部の幅（px） |
| `CorridorWidth` | 60 | 通路幅（px） |
| `CorridorWallThickness` | 5 | 通路の壁の厚さ（px） |
| `PillarSize` | 60 | 柱の一辺のサイズ（px） |
| `PillarMinRoomArea` | 40000 | 柱を配置できる最低部屋面積（px²） |
| `PillarMaxPerRoom` | 3 | 部屋あたりの最大柱数 |
| `HalfWallLength` | 75 | ハーフウォールの長さ（px） |
| `HalfWallThickness` | 15 | ハーフウォールの厚さ（px） |

### PlayerConfig

| 定数 | 値 | 説明 |
|------|------|------|
| `ViewAngle` | 60 | 視野角の総角度（度） |
| `MaxViewDistance` | 1000 | 最大視認距離（px） |
| `CubeSize` | 10 | プレイヤービジュアルのサイズ（px） |
| `DamagePerShot` | 34 | 1発あたりのダメージ（3発で撃破） |
| `MoveRange` | 1 | 1ターンに移動できるノード数 |
| `ShotHitRadius` | 20 | ヒット判定の基本半径（px） |
| `FogOfWarEnabled` | false | 視野外の敵を非表示にするか |
| `AccuracyExponent` | 1.5 | 精度の減衰曲線（>1 = 中心集中） |
| `ShotMaxRangeMultiplier` | 3 | 有効射程 = `ShotHitRadius × この値` |

### AIConfig

| 定数 | 値 | 説明 |
|------|------|------|
| `CoverWeight` | 30 | 壁隣接ノードへの加点 |
| `EnemyLOSPenalty` | -20 | 敵に見えるノードへのペナルティ |
| `DistanceWeight` | -2 | 敵への接近バイアス（負 = 近づく） |
| `AmbushBonus` | 15 | 自分が見えて敵が見えない位置へのボーナス |
| `RetreatHPThreshold` | 40 | 撤退モードに切り替わる HP 閾値 |
| `RetreatCoverMultiplier` | 2 | 撤退時のカバーウェイト乗数 |
| `ShotLowHPPriority` | 10 | 低 HP 敵への射撃優先ボーナス |
| `RoundAnimationDelayMs` | 1500 | ラウンドアニメーション完了待機時間（ms） |
| `GoalSearchRadius` | 8 | 目標選択の BFS 探索ステップ数 |
| `GoalTimeoutTurns` | 10 | 目標を再評価するまでのターン数 |
| `GoalHPChangeThreshold` | 30 | 目標を再評価するHP変化量 |
| `ThreatMapAngleEnabled` | true | 脅威マップを向き角度に使用するか |
| `ThreatAccumulationDecay` | 0.85 | 毎ラウンドの脅威値減衰率 |
| `ThreatSpreadFactor` | 1.2 | 拡散強度 |
| `ThreatSigma` | 4 | 拡散の距離スケール |
| `ThreatMaxDiffusionSteps` | 1 | 最大拡散ホップ数 |
| `ThreatAmbientCap` | 0 | 脅威値のアンビエント上限 |
| `ThreatMapMaxLookDistance` | 8 | 脅威マップの BFS 探索範囲 |
| `ThreatMapGoalBonus` | 50 | 目標選択時の脅威ウェイト |
| `ScorerThreatExposureMin` | 0.1 | スコアリングで考慮する最低脅威値 |

### CalculatedConfig

| 定数 | 計算式 | 説明 |
|------|--------|------|
| `MapSize` | `(NodesInGridSize - 1) × NodeSpacing` | マップの実ピクセル幅 |

### ローカルモード定数

| 定数 | 値 | 説明 |
|------|------|------|
| `LOCAL_PLAYER_COUNT` | 0 | ローカルモードの人間プレイヤー数 |
| `LOCAL_TEAM_COUNT` | 6 | チーム数 |
| `LOCAL_NPC_PER_TEAM` | 10 | チームあたりの NPC 数 |
| `LOCAL_NPC_COUNT` | 60 | NPC 合計数（6 チーム × 10） |

---

## 10. 座標系・角度規約

### ゲーム空間 (Game Space)
Model・Logic・AI 層が使用する 2D 平面座標系。

- **+X**: 右方向
- **+Y**: 上方向
- ノードの `(x, y)` はこの座標系で定義される

### ワールド空間 (World Space)
Three.js の 3D 座標系。

- **+X**: 右方向
- **+Y**: 上方向（高さ）
- **+Z**: 前方向（ゲーム空間の +Y に対応）

変換式: `gameToWorld(gx, gy, height) = (gx, height, gy)`

参照: `src/rendering/utils/MeshUtils.ts` — `gameToWorld()`

### 角度 (angle)
`player.angle` の規約:

- 単位: **度数法（度）**
- 基準: `0° = +X 方向（右）`
- 正方向: **反時計回り**（数学的標準の `atan2(dy, dx)` ベース）

> この角度は `getVisibleNodesAtAngle`・`NPCBrain`・`LocalAdapter` など Model/Logic 層全体で共有される。
> レンダリング側の都合で変更してはいけない。

### Three.js での rotation.y 変換

```
rotation.y = -(angle_rad) + π/2
```

プレイヤーモデルのローカル軸:
- **+Z**: 銃口方向（前面）
- **+X**: 右
- **+Y**: 上

詳細は `src/rendering/CLAUDE.md` を参照。
