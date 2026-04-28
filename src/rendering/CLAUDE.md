# CLAUDE.md — `src/rendering/`

ルートの [CLAUDE.md](../../CLAUDE.md) を読んだ前提で、本ディレクトリ固有の設計を補足する。座標系・角度規約はルートの「座標系と角度規約」を必ず参照すること。

## 役割

Three.js による WebGL 描画を担う。**model/logic 層を直接参照しない**: 描画は `GameEventBus` の `VIS_*` イベントを購読して反応するだけで、ゲーム状態の書き換えは行わない（読み取り専用で `Model` を参照する）。

## ファイル一覧と責務

| ファイル | 行数 | 責務 |
|---|---:|---|
| [threeSetup.ts](threeSetup.ts) | 153 | エントリポイント。`SceneManager` / `VisualizationSync` / `InputHandler` / `GameController` を構築・配線し、レンダーループを開始 |
| [SceneManager.ts](SceneManager.ts) | 293 | `WebGLRenderer` / `Scene` / `PerspectiveCamera` / `OrbitControls` / `EffectComposer`(Bloom) / Fog / 影 / ライティング / 背景グリッドを構築・保持。`addToScene` / `removeFromScene` を提供 |
| [VisualizationSync.ts](VisualizationSync.ts) | 170 | **薄いオーケストレーター**。`VIS_*` イベントを購読し、4つの専門マネージャに委譲する |
| [PlayerLifecycleManager.ts](PlayerLifecycleManager.ts) | 155 | プレイヤーメッシュの生成・破棄、`applyTransform`（位置・回転・スケール）、ヒット/被弾エフェクト |
| [PlayerAnimator.ts](PlayerAnimator.ts) | 200 | GSAP を使った `idle` / `walk` / `attack` / `dance` のボディアニメーション。`userData.partNames` で部位を解決 |
| [PlayerMeshFactory.ts](PlayerMeshFactory.ts) | 231 | Scout（人型）プレイヤーの 3D メッシュを構築。`createVariantPlayer(color)` を公開 |
| [NodeVisualizationManager.ts](NodeVisualizationManager.ts) | 209 | ノード円・壁メッシュの生成・破棄、`meshToNodeMap` / `nodeToMeshMap` の双方向 ID マップ、ノード色の差分更新 |
| [NodeWallMeshFactory.ts](NodeWallMeshFactory.ts) | 51 | `createNodeCircle(x, y)`、`createWallMesh(x1, y1, x2, y2)` のステートレスファクトリ |
| [CameraFollowController.ts](CameraFollowController.ts) | 59 | カメラのプレイヤー追従（`snapTo` 即時 / `panTo` GSAP 補間）。プレイヤーの後方に配置 |
| [MeshUtils.ts](MeshUtils.ts) | 31 | `gameToWorld(gx, gy, height?)`、`createUndefinedMesh()`、`setNodeColor()` のユーティリティ |

## アーキテクチャ

```
threeSetup.ts (entry)
├── SceneManager                          ← Three.js 基盤
└── VisualizationSync (orchestrator)
    ├── PlayerLifecycleManager            ← メッシュのライフサイクル
    │   └─ uses → PlayerMeshFactory       ← メッシュ構築（ステートレス）
    ├── PlayerAnimator                    ← GSAP アニメ（meshMap を共有）
    ├── NodeVisualizationManager          ← ノード/壁
    │   └─ uses → NodeWallMeshFactory     ← メッシュ構築（ステートレス）
    └── CameraFollowController            ← カメラ追従
```

`VisualizationSync` と `PlayerLifecycleManager` / `PlayerAnimator` は **同じ `meshMap: Map<string, THREE.Object3D>`** を共有することで、アニメーションとライフサイクル操作の両方が同一メッシュを参照できる（[VisualizationSync.ts:34-36](VisualizationSync.ts#L34-L36)）。

## イベント駆動の購読

`VisualizationSync` が `GameEventBus` から購読する `VIS_*` イベント:

| イベント | 委譲先 |
|---|---|
| `VIS_UPDATE_VIEW` | 全マネージャ（位置・色・カメラの全更新） |
| `VIS_SET_ACTIVE_PLAYER` | `CameraFollowController.panTo` |
| `VIS_SHOW_HIT_EFFECT` | `PlayerLifecycleManager.showHitEffect` |
| `VIS_PLAYER_DEATH` / `VIS_PLAYER_REVIVE` | `PlayerLifecycleManager` |
| `VIS_NODE_*`（select/next/shot のハイライト） | `NodeVisualizationManager` |
| `OBSTACLES_UPDATED` | `NodeVisualizationManager.rebuildWalls` |

`GameController`（logic 層）はこれらのイベントを発火するだけで、`VisualizationSync` を直接参照しない（レイヤー違反を避けるため、ルート CLAUDE.md「レイヤー違反修正」を参照）。

## 座標系と角度規約

ゲームロジックと Three.js の描画では座標系が異なる。回転や向きを扱うコードを書くときは以下を守ること。

### 3つの座標空間

| 空間 | 軸の意味 |
|---|---|
| **Game**（model/logic 層） | XY 平面。+X = 右、+Y = 上 |
| **Three.js World**（rendering 層） | XZ 平面に展開。+X = 右、+Z = game の +Y 方向、+Y = 高さ（上空） |
| **Player Model ローカル** | +Z = 前方、+X = 右、+Y = 上 |

写像は [`gameToWorld(gx, gy, height) → (gx, height, gy)`](MeshUtils.ts#L8-L10) **のみ** で行う。他の場所で座標を直接いじらない。

### 角度規約（ゲーム空間）

`player.angle` は度数法、`Math.atan2(dy, dx) * 180/π` で算出（[`model.ts`](../model/model.ts) の `getAngleBetweenNodes`）。

- `0°` = game の **+X 方向（右）**
- `90°` = game の **+Y 方向**
- 反時計回りが正

この規約は model / logic 層全体（`getVisibleNodesAtAngle`、`NPCBrain`、`LocalAdapter` など）で共有されているため、**レンダリング側の都合で変更してはいけない**。

### モデルローカル軸（PlayerMeshFactory）

[`PlayerMeshFactory.createVariantPlayer`](PlayerMeshFactory.ts) で構築されるプレイヤーメッシュは、**ローカル +Z = 前方** に統一されている。各部位もこの規約で組み立てること（足のつま先・銃身ともに +Z 方向）。

### 角度→ rotation.y 変換式（rendering 層）

[`PlayerLifecycleManager.applyTransform`](PlayerLifecycleManager.ts) でのみ適用：

```typescript
obj.rotation.y = -(angle * Math.PI / 180) + RenderConfig.PlayerFacingOffset;
// PlayerFacingOffset = Math.PI / 2
```

導出: モデル前方 +Z を game angle θ° の方向 `(cosθ, 0, sinθ)` に向けるには `rotation.y = atan2(cosθ, sinθ) = π/2 − θ_rad`。`PlayerFacingOffset = π/2` はこの「モデル前方 +Z を world +X に合わせる」初期オフセットを表す。

### 過去の落とし穴

- コミット 67b3474（XY→XZ 平面変換導入）時、`rotation.x = π/2` が削除されたが、`PlayerMeshFactory.buildGearGun` で銃身がローカル +Y を前方として作られていたため、銃身が空を向く不整合が残っていた → 銃身に `rotation.x = π/2` を追加してローカル +Z を前方に統一済み。
- 同コミット直後は `rotation.y = -((angle + offset))` と外側括弧で全項を反転していたため、結果が常に 180° ずれていた → `rotation.y = -angle + offset` に修正済み。

## 設定の参照先

すべての数値定数は [`src/config/GameConfig.ts`](../config/GameConfig.ts) に集約：

- `RenderConfig` — マテリアル・色・サイズ・PlayerFacingOffset
- `CameraConfig` — FOV / 距離 / 追従速度・イージング
- `ShadowConfig` / `FogConfig` / `PostProcessConfig` / `LightingConfig` — シーン演出
- `AnimationConfig` — GSAP duration / イージング
- `NodeConfig` / `NodeVisualConfig` / `WallConfig` / `MapConfig` — ノード・壁・グリッド
- `PlayerConfig` — Fog of War 等のゲームプレイ寄り定数

**マジックナンバー禁止**。新しい定数は必ず `GameConfig.ts` に追加してから参照する。

## 描画パイプラインの順序

レンダーループ ([threeSetup.ts:92-98](threeSetup.ts#L92-L98)):

```
requestAnimationFrame
  → SceneManager.render()
      → tickCallbacks（OrbitControls.update など）
      → composer ? composer.render() : renderer.render(scene, camera)
```

GSAP アニメーションは独立した内部タイマーで mesh の `position` / `rotation` / `material` プロパティを更新するため、レンダーループは「現在の状態を毎フレーム描く」だけでよい。

## よくある落とし穴

- **メッシュ ID とノード ID は別物**: `THREE.Mesh.id` はランタイム自動採番、`Node.id` は model 層の意味的 ID。Raycaster の結果から Node を引くには `meshToNodeMap`（[NodeVisualizationManager.ts:21-22](NodeVisualizationManager.ts#L21-L22)）を経由する。
- **GSAP の重複実行**: 同じプロパティに連続で `gsap.to` を呼ぶとアニメーションが累積する。`PlayerAnimator.killAll(playerId)` で前のトゥイーンを止めてから新規開始する規約。
- **影の有効化**: `ShadowConfig.Enabled` が true のとき、各メッシュで `castShadow` / `receiveShadow` を明示的にセットしないと影が出ない（[PlayerMeshFactory.ts:220-227](PlayerMeshFactory.ts#L220-L227)、[NodeWallMeshFactory.ts:21,47-48](NodeWallMeshFactory.ts#L21)）。
- **ファクトリは状態を持たない**: `PlayerMeshFactory` / `NodeWallMeshFactory` は純粋関数の集合。状態は `*Manager` 側で持つ。
- **logic/model を直接 import しない**: 描画コードから `GameController` や `StateMachine` を呼ばない。必要なら `Model`（読み取り専用）か `GameEventBus` 経由にする。

## デバッグ補助

- [SceneManager.ts:66](SceneManager.ts#L66): シーン原点に `AxesHelper`（赤=+X、緑=+Y、青=+Z）を表示
- [PlayerMeshFactory.ts:216](PlayerMeshFactory.ts#L216): 各プレイヤーモデルに `AxesHelper` を表示（モデルローカル軸の可視化）
- 向きが疑わしいときは AxesHelper の青矢印（+Z = モデル前方）が進行方向を指しているかを目視確認するのが最速。
