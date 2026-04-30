# CLAUDE.md — `src/rendering/`

ルートの [CLAUDE.md](../../CLAUDE.md) を読んだ前提で、本ディレクトリ固有の設計を補足する。座標系・角度規約はルートの「座標系と角度規約」を必ず参照すること。

## 役割

Three.js による WebGL 描画を担う。**model/logic 層を直接参照しない**: 描画は `GameEventBus` の `VIS_*` イベントを購読して反応するだけで、ゲーム状態の書き換えは行わない（読み取り専用で `Model` を参照する）。

## ディレクトリ構成

```
src/rendering/
├── threeSetup.ts                # entry。SceneManager / CameraInput / VisualizationSync / FPSCamera を配線
├── VisualizationSync.ts         # オーケストレーター。VIS_* イベントを各マネージャに委譲
├── core/                        # Three.js 基盤
│   ├── SceneManager.ts          # Renderer / Scene / Camera / 背景グリッド / レンダーループ
│   ├── LightingRig.ts           # Ambient / Hemisphere / Directional ライト + 軌道アニメ
│   ├── PostProcessing.ts        # Bloom / Fog / Shadow セットアップ関数群
│   └── BackgroundGrid.ts        # ノードグリッドに沿った背景線 + toggle
├── cameras/                     # カメラ系 3 クラス
│   ├── CameraFollowController.ts# プレイヤー追従の snapTo / panTo
│   ├── CameraInputController.ts # OrbitControls + Wheel FOV + panCamera
│   └── FPSCameraController.ts   # FPS 観戦モード（Pointer Lock + WASD）
├── players/                     # プレイヤーメッシュ関連
│   ├── PlayerLifecycleManager.ts# 生成 / 可視 / Transform
│   ├── PlayerAnimator.ts        # GSAP idle / walk / attack / dance アニメ
│   ├── PlayerEffects.ts         # showHitEffect / hidePlayer
│   └── PlayerMeshFactory.ts     # Scout 人型メッシュのステートレス構築
├── world/                       # ノード・障害物
│   ├── NodeVisualizationManager.ts # ノード色管理 + meshToNodeMap
│   ├── NodeMeshFactory.ts       # createNodeCircle
│   └── WallMeshFactory.ts       # createWallMesh
├── effects/                     # 装飾エフェクト
│   └── TextBurstEffect.ts       # ダンス時の文字バースト（モ・ヒ・カ・ン）
└── utils/
    └── MeshUtils.ts             # gameToWorld / createUndefinedMesh / setNodeColor
```

## 主要モジュール

| ファイル | 行数 | 責務 |
|---|---:|---|
| [threeSetup.ts](threeSetup.ts) | 181 | エントリポイント。各モジュールを構築・配線し、レンダーループを開始 |
| [VisualizationSync.ts](VisualizationSync.ts) | 195 | オーケストレーター。`VIS_*` イベントを購読し各マネージャに委譲 |
| [core/SceneManager.ts](core/SceneManager.ts) | 121 | `WebGLRenderer` / `Scene` / `PerspectiveCamera` / レンダーループ + リサイズ |
| [core/LightingRig.ts](core/LightingRig.ts) | 47 | Ambient / Hemi / Directional + Directional 光源の軌道アニメを tick で回す |
| [core/PostProcessing.ts](core/PostProcessing.ts) | 48 | Bloom (`EffectComposer`) / Fog / Shadow の有効化関数 |
| [core/BackgroundGrid.ts](core/BackgroundGrid.ts) | 47 | ノード位置に沿った背景線。`toggle()` で表示切替 |
| [cameras/CameraFollowController.ts](cameras/CameraFollowController.ts) | 59 | プレイヤー追従。`snapTo`（即時）/ `panTo`（GSAP） |
| [cameras/CameraInputController.ts](cameras/CameraInputController.ts) | 69 | OrbitControls + Wheel による FOV 調整 + `panCamera` |
| [cameras/FPSCameraController.ts](cameras/FPSCameraController.ts) | 275 | FPS 観戦モード（Pointer Lock + WASD/Space/Ctrl + マウス yaw/pitch） |
| [players/PlayerLifecycleManager.ts](players/PlayerLifecycleManager.ts) | 102 | プレイヤーメッシュの生成・可視・`applyTransform` |
| [players/PlayerAnimator.ts](players/PlayerAnimator.ts) | 200 | GSAP の `idle` / `walk` / `attack` / `dance` |
| [players/PlayerEffects.ts](players/PlayerEffects.ts) | 70 | ヒットパルス + 死亡時フェード |
| [players/PlayerMeshFactory.ts](players/PlayerMeshFactory.ts) | 231 | Scout（人型）プレイヤーの 3D メッシュ。`createVariantPlayer(color)` |
| [world/NodeVisualizationManager.ts](world/NodeVisualizationManager.ts) | 210 | ノード色管理、`meshToNodeMap` / `nodeToMeshMap` 双方向 ID マップ |
| [world/NodeMeshFactory.ts](world/NodeMeshFactory.ts) | 23 | `createNodeCircle(x, y, size?)` |
| [world/WallMeshFactory.ts](world/WallMeshFactory.ts) | 31 | `createWallMesh(x1, y1, x2, y2)` |
| [effects/TextBurstEffect.ts](effects/TextBurstEffect.ts) | 198 | ダンス文字バースト。`playAtGameCoords(gx, gy, h)` を公開 |
| [utils/MeshUtils.ts](utils/MeshUtils.ts) | 31 | `gameToWorld` / `createUndefinedMesh` / `setNodeColor` |

## アーキテクチャ

```
threeSetup.ts (entry)
├── core/SceneManager                ← Renderer / Scene / Camera + レンダーループ
│   ├── core/LightingRig             ← 光源 + 軌道アニメ
│   ├── core/PostProcessing          ← Bloom / Fog / Shadow
│   └── core/BackgroundGrid          ← 背景グリッド
├── cameras/CameraInputController    ← OrbitControls / Wheel FOV / panCamera
├── cameras/FPSCameraController      ← FPS モード（CameraInput と FollowController を参照）
└── VisualizationSync (orchestrator)
    ├── players/PlayerLifecycleManager  ← 生成 / 可視 / Transform
    │   └─ uses → players/PlayerMeshFactory  ← ステートレス構築
    ├── players/PlayerAnimator        ← GSAP（meshMap を共有）
    ├── players/PlayerEffects         ← ヒット / 死亡（meshMap を共有）
    ├── world/NodeVisualizationManager
    │   └─ uses → world/{Node,Wall}MeshFactory  ← ステートレス構築
    ├── cameras/CameraFollowController
    └── effects/TextBurstEffect
```

`VisualizationSync` と `players/*` 配下の 3 マネージャは **同じ `meshMap: Map<string, THREE.Object3D>`** を共有することで、アニメーション・ライフサイクル・エフェクトの全てが同一メッシュを参照できる（[VisualizationSync.ts](VisualizationSync.ts)）。

## イベント駆動の購読

`VisualizationSync` が `GameEventBus` から購読する `VIS_*` / 関連イベント:

| イベント | 委譲先 |
|---|---|
| `VIS_UPDATE_VIEW` | 全マネージャ（位置・色・カメラの全更新） |
| `VIS_SET_ACTIVE_PLAYER` | `CameraFollowController.panTo`（FPS モード中は抑制） |
| `VIS_SHOW_HIT_EFFECT` | `PlayerEffects.showHitEffect` |
| `VIS_HIDE_PLAYER` | `PlayerEffects.hidePlayer` |
| `VIS_SET_SELECT/NEXT/SHOT_MESH` / `VIS_CLEAR_*` | `NodeVisualizationManager` のセッタ |
| `VIS_SET_REACHABLE_NODES` / `VIS_CLEAR_REACHABLE_NODES` | `NodeVisualizationManager` |
| `VIS_UPDATE_OBSTACLES` | `NodeVisualizationManager.rebuildWalls` |
| `VIS_PLAY_DANCE` | `PlayerAnimator.startDance` + `TextBurstEffect.playAtGameCoords` |
| `FPS_MODE_CHANGED` | `fpsModeActive` フラグ更新（カメラ pan の抑制判定に使う） |

`GameController`（logic 層）はこれらのイベントを発火するだけで、`VisualizationSync` を直接参照しない（レイヤー違反を避けるため、ルート CLAUDE.md「レイヤー違反修正」を参照）。

## 座標系と角度規約

ゲームロジックと Three.js の描画では座標系が異なる。回転や向きを扱うコードを書くときは以下を守ること。

### 3つの座標空間

| 空間 | 軸の意味 |
|---|---|
| **Game**（model/logic 層） | XY 平面。+X = 右、+Y = 上 |
| **Three.js World**（rendering 層） | XZ 平面に展開。+X = 右、+Z = game の +Y 方向、+Y = 高さ（上空） |
| **Player Model ローカル** | +Z = 前方、+X = 右、+Y = 上 |

写像は [`gameToWorld(gx, gy, height) → (gx, height, gy)`](utils/MeshUtils.ts) **のみ** で行う。他の場所で座標を直接いじらない。

### 角度規約（ゲーム空間）

`player.angle` は度数法、`Math.atan2(dy, dx) * 180/π` で算出（[`model.ts`](../model/model.ts) の `getAngleBetweenNodes`）。

- `0°` = game の **+X 方向（右）**
- `90°` = game の **+Y 方向**
- 反時計回りが正

この規約は model / logic 層全体（`getVisibleNodesAtAngle`、`NPCBrain`、`LocalAdapter` など）で共有されているため、**レンダリング側の都合で変更してはいけない**。

### モデルローカル軸（PlayerMeshFactory）

[`PlayerMeshFactory.createVariantPlayer`](players/PlayerMeshFactory.ts) で構築されるプレイヤーメッシュは、**ローカル +Z = 前方** に統一されている。各部位もこの規約で組み立てること（足のつま先・銃身ともに +Z 方向）。

### 角度→ rotation.y 変換式（rendering 層）

[`PlayerLifecycleManager.applyTransform`](players/PlayerLifecycleManager.ts) でのみ適用：

```typescript
obj.rotation.y = -(angle * Math.PI / 180) + RenderConfig.PlayerFacingOffset;
// PlayerFacingOffset = Math.PI / 2
```

導出: モデル前方 +Z を game angle θ° の方向 `(cosθ, 0, sinθ)` に向けるには `rotation.y = atan2(cosθ, sinθ) = π/2 − θ_rad`。`PlayerFacingOffset = π/2` はこの「モデル前方 +Z を world +X に合わせる」初期オフセットを表す。

### 過去の落とし穴

- コミット 67b3474（XY→XZ 平面変換導入）時、`rotation.x = π/2` が削除されたが、`PlayerMeshFactory.buildGearGun` で銃身がローカル +Y を前方として作られていたため、銃身が空を向く不整合が残っていた → 銃身に `rotation.x = π/2` を追加してローカル +Z を前方に統一済み。
- 同コミット直後は `rotation.y = -((angle + offset))` と外側括弧で全項を反転していたため、結果が常に 180° ずれていた → `rotation.y = -angle + offset` に修正済み。

## FPS 観戦モード

[`cameras/FPSCameraController`](cameras/FPSCameraController.ts) は T キー（`FPS_MODE_TOGGLE_REQUESTED` イベント）でトグルされる。有効時は:

- `CameraInputController.getControls()` を取得して `OrbitControls.enabled = false` に退避
- `pointerlockchange` で ESC 解除を検知し自動 disable
- `SceneManager.addTickCallback` で WASD/Space/Ctrl の毎フレーム移動処理を回す
- 解除時は `CameraFollowController.snapTo` でアクティブプレイヤー位置に戻す
- `FPS_MODE_CHANGED` を emit して `VisualizationSync` の `fpsModeActive` に反映 → カメラ追従 panTo を抑制

## 設定の参照先

すべての数値定数は [`src/config/GameConfig.ts`](../config/GameConfig.ts) から再エクスポートされている：

- `RenderConfig` — マテリアル・色・サイズ・PlayerFacingOffset
- `CameraConfig` / `FPSConfig` — FOV / 距離 / 追従速度・イージング / FPS 設定
- `ShadowConfig` / `FogConfig` / `PostProcessConfig` / `LightingConfig` — シーン演出
- `AnimationConfig` / `TextBurstEffectConfig` — GSAP / バーストエフェクト
- `NodeConfig` / `NodeVisualConfig` / `WallConfig` / `MapConfig` — ノード・壁・グリッド
- `PlayerConfig` — Fog of War 等のゲームプレイ寄り定数

**マジックナンバー禁止**。新しい定数は必ず `GameConfig.ts`（実体は `src/config/*.ts` のいずれか）に追加してから参照する。

## 描画パイプラインの順序

レンダーループ（[threeSetup.ts](threeSetup.ts)）:

```
requestAnimationFrame
  → SceneManager.render()
      → tickCallbacks（LightingRig の光源軌道、FPSCameraController の WASD 移動 等）
      → composer ? composer.render() : renderer.render(scene, camera)
```

GSAP アニメーションは独立した内部タイマーで mesh の `position` / `rotation` / `material` プロパティを更新するため、レンダーループは「現在の状態を毎フレーム描く」だけでよい。

## よくある落とし穴

- **メッシュ ID とノード ID は別物**: `THREE.Mesh.id` はランタイム自動採番、`Node.id` は model 層の意味的 ID。Raycaster の結果から Node を引くには `meshToNodeMap`（[NodeVisualizationManager.ts](world/NodeVisualizationManager.ts)）を経由する。
- **GSAP の重複実行**: 同じプロパティに連続で `gsap.to` を呼ぶとアニメーションが累積する。`PlayerAnimator.killAll(playerId)` で前のトゥイーンを止めてから新規開始する規約。
- **影の有効化**: `ShadowConfig.Enabled` が true のとき、各メッシュで `castShadow` / `receiveShadow` を明示的にセットしないと影が出ない（[WallMeshFactory.ts](world/WallMeshFactory.ts) / [NodeMeshFactory.ts](world/NodeMeshFactory.ts) / [PlayerMeshFactory.ts](players/PlayerMeshFactory.ts)）。
- **ファクトリは状態を持たない**: `PlayerMeshFactory` / `NodeMeshFactory` / `WallMeshFactory` は純粋関数の集合。状態は `*Manager` 側で持つ。
- **logic/model を直接 import しない**: 描画コードから `GameController` や `StateMachine` を呼ばない。必要なら `Model`（読み取り専用）か `GameEventBus` 経由にする。

## デバッグ補助

- [core/SceneManager.ts](core/SceneManager.ts): シーン原点に `AxesHelper`（赤=+X、緑=+Y、青=+Z）を表示
- [players/PlayerMeshFactory.ts](players/PlayerMeshFactory.ts): 各プレイヤーモデルに `AxesHelper` を表示（モデルローカル軸の可視化）
- 向きが疑わしいときは AxesHelper の青矢印（+Z = モデル前方）が進行方向を指しているかを目視確認するのが最速。
