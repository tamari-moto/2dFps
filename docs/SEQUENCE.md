# シーケンスドキュメント

このドキュメントは 2dFps の主要なインタラクションフローを Mermaid シーケンス図で記述したものです。

---

## 目次

1. [ゲーム初期化フロー](#1-ゲーム初期化フロー)
2. [プレイヤーターンアクションフロー（オフライン）](#2-プレイヤーターンアクションフローオフライン)
3. [NPC ターンフロー](#3-npc-ターンフロー)
4. [オンライン接続・ゲーム開始フロー](#4-オンライン接続ゲーム開始フロー)
5. [戦闘解決フロー](#5-戦闘解決フロー)
6. [イベントバス全体マップ](#6-イベントバス全体マップ)

---

## 1. ゲーム初期化フロー

ロビー画面からゲーム開始までの初期化シーケンスです。

```mermaid
sequenceDiagram
    actor User
    participant LobbyUI
    participant GRF_main
    participant ThreeSetup
    participant LocalAdapter
    participant Model
    participant VisualizationSync
    participant GameController
    participant InputHandler

    User->>LobbyUI: オフライン開始ボタンをクリック
    LobbyUI->>GRF_main: handleOffline()
    GRF_main->>LocalAdapter: new LocalAdapter()
    GRF_main->>GRF_main: startGame(adapter)
    GRF_main->>ThreeSetup: setupThree(canvas, adapter)

    ThreeSetup->>ThreeSetup: SceneManager 初期化<br/>(Three.js scene / camera / renderer)
    ThreeSetup->>LocalAdapter: adapter.initializeModel()
    LocalAdapter->>Model: new Model(true)
    Model->>Model: MapGenerator でマップ生成<br/>(障害物・ノード・グラフ構築)
    Model-->>LocalAdapter: 初期化完了

    ThreeSetup->>VisualizationSync: new VisualizationSync(scene, model)
    VisualizationSync->>VisualizationSync: NodeVisualizationManager.initializeNodes()
    VisualizationSync->>VisualizationSync: NodeVisualizationManager.initializeWalls()
    VisualizationSync->>VisualizationSync: PlayerLifecycleManager.initializePlayers()

    ThreeSetup->>InputHandler: new InputHandler(canvas, ...)
    ThreeSetup->>GameController: new GameController(model, adapter, ...)
    ThreeSetup->>ThreeSetup: startRenderLoop()

    ThreeSetup-->>GRF_main: setup オブジェクト返却
    GRF_main->>GRF_main: appState = 'playing'
    GRF_main-->>User: ゲーム画面表示
```

---

## 2. プレイヤーターンアクションフロー（オフライン）

マウスクリックからターン実行・描画更新までのシーケンスです。

```mermaid
sequenceDiagram
    actor User
    participant InputHandler
    participant GameEventBus
    participant GameController
    participant StateMachine
    participant LocalAdapter
    participant Model
    participant VisualizationSync

    Note over StateMachine: 初期状態: Idle

    %% Step 1: 自プレイヤーのノードを選択
    User->>InputHandler: キャンバスをクリック
    InputHandler->>InputHandler: Raycaster で Mesh を特定
    InputHandler->>GameEventBus: emit NODE_CLICKED { nodeId }
    GameEventBus->>GameController: handleNodeClick(nodeId)

    GameController->>StateMachine: 現在状態 = Idle, 自ノードをクリック
    StateMachine->>StateMachine: transition(SelectPlayer) → Select
    GameController->>Model: getReachableNodes(nodeId, MoveRange)
    Model-->>GameController: reachable: Set<nodeId>
    GameController->>GameEventBus: emit VIS_SET_SELECT_MESH { nodeId }
    GameController->>GameEventBus: emit VIS_SET_REACHABLE_NODES { nodeIds }
    GameEventBus->>VisualizationSync: ノードを選択色で強調表示

    %% Step 2: 移動先ノードを選択
    User->>InputHandler: 移動先ノードをクリック
    InputHandler->>GameEventBus: emit NODE_CLICKED { nodeId: moveNodeId }
    GameEventBus->>GameController: handleNodeClick(moveNodeId)

    GameController->>StateMachine: 現在状態 = Select, 到達可能ノードをクリック
    StateMachine->>StateMachine: transition(MovePlayer) → Move
    GameController->>GameEventBus: emit VIS_SET_NEXT_MESH { nodeId: moveNodeId }
    GameEventBus->>VisualizationSync: 移動先ノードを強調表示

    %% Step 3: 射撃対象ノードを選択
    User->>InputHandler: 射撃対象ノードをクリック
    InputHandler->>GameEventBus: emit NODE_CLICKED { nodeId: shotNodeId }
    GameEventBus->>GameController: handleNodeClick(shotNodeId)

    GameController->>Model: getVisibleNodesAtAngle(moveNode, angle, MaxViewDistance)
    Model-->>GameController: visibleNodes: Set<nodeId>
    GameController->>StateMachine: 可視ノードをクリック → transition(ShotPlayer) → Shot
    GameController->>GameEventBus: emit VIS_SET_SHOT_MESH { nodeId: shotNodeId }
    GameEventBus->>VisualizationSync: 射撃先ノードを強調表示

    %% Step 4: ターン確定実行
    User->>InputHandler: 同じ射撃ノードを再クリック (確定)
    InputHandler->>GameEventBus: emit NODE_CLICKED { nodeId: shotNodeId }
    GameEventBus->>GameController: executeTurn()

    GameController->>StateMachine: transition(Complete) → Idle
    GameController->>LocalAdapter: sendTurnAction({ playerId, moveToNodeId, shotAtNodeId })
    LocalAdapter->>Model: setPlayerRef(playerId, newNode)
    LocalAdapter->>LocalAdapter: resolveShot(attackerId, shotNodeId) → hits[]
    LocalAdapter->>GameController: turnResultCallback(TurnResult)
    GameController->>GameController: applyTurnResult(result)
    GameController->>GameEventBus: emit VIS_UPDATE_VIEW
    GameEventBus->>VisualizationSync: doUpdateView() → プレイヤー位置・ノード色を更新
```

---

## 3. NPC ターンフロー

プレイヤーのターン終了後、NPC が順番にターンを実行するシーケンスです。

```mermaid
sequenceDiagram
    participant GameController
    participant TurnManager
    participant GameEventBus
    participant NPCBrain
    participant NodeScorer
    participant ShotSelector
    participant LocalAdapter
    participant Model
    participant VisualizationSync

    GameController->>TurnManager: processNPCTurns()
    TurnManager->>GameEventBus: emit INPUT_LOCKED { locked: true }

    loop 生存 NPC ごと
        TurnManager->>GameEventBus: emit NPC_TURN_STARTED { playerId }
        TurnManager->>GameEventBus: emit VIS_SET_ACTIVE_PLAYER { playerId }
        GameEventBus->>VisualizationSync: カメラを NPC にフォーカス

        TurnManager->>NPCBrain: decideTurn(model, npc)

        NPCBrain->>Model: getReachableNodes(npc.nodeId, MoveRange)
        Model-->>NPCBrain: candidates: Set<nodeId>

        loop 候補ノードごと
            NPCBrain->>NodeScorer: scoreNode(model, npc, candidateNodeId, enemies)
            Note right of NodeScorer: カバー評価, 敵 LOS ペナルティ,<br/>アンブッシュボーナス, 距離重み
            NodeScorer-->>NPCBrain: score: number
        end

        NPCBrain->>ShotSelector: selectShotTarget(model, npc, moveToNode, angle, enemies)
        Note right of ShotSelector: 可視敵を HP・距離でランク付け
        ShotSelector-->>NPCBrain: shotAtNodeId | undefined

        NPCBrain-->>TurnManager: TurnAction { moveToNodeId, shotAtNodeId }

        TurnManager->>LocalAdapter: sendTurnAction(action)
        LocalAdapter->>Model: setPlayerRef(npc.id, newNode)
        LocalAdapter->>LocalAdapter: resolveShot() → hits[]
        LocalAdapter->>GameController: turnResultCallback(TurnResult)
        GameController->>GameEventBus: emit VIS_UPDATE_VIEW
        GameEventBus->>VisualizationSync: NPC の移動・射撃結果を描画

        TurnManager->>TurnManager: await delay(NPCTurnDelayMs)<br/>アニメーション表示のための待機

        alt 生存プレイヤーが 1 人以下
            TurnManager->>TurnManager: break (ゲーム終了)
        end
    end

    TurnManager->>GameEventBus: emit VIS_SET_ACTIVE_PLAYER { playerId: HUMAN_PLAYER }
    TurnManager->>GameEventBus: emit NPC_TURNS_COMPLETE
    TurnManager->>GameEventBus: emit INPUT_LOCKED { locked: false }
```

---

## 4. オンライン接続・ゲーム開始フロー

Colyseus サーバーへの接続からゲーム開始までのシーケンスです。

```mermaid
sequenceDiagram
    actor User
    participant LobbyUI
    participant GRF_main
    participant ColyseusAdapter
    participant ColyseusServer
    participant GameRoom
    participant Model
    participant ThreeSetup

    User->>LobbyUI: オンライン接続ボタンをクリック
    LobbyUI->>GRF_main: handleOnline(serverUrl)
    GRF_main->>ColyseusAdapter: new ColyseusAdapter(serverUrl)
    GRF_main->>ColyseusAdapter: adapter.connect()

    ColyseusAdapter->>ColyseusServer: client.joinOrCreate('game_room')
    ColyseusServer->>GameRoom: プレイヤー追加

    ColyseusServer-->>ColyseusAdapter: room オブジェクト返却
    ColyseusAdapter->>ColyseusAdapter: 全メッセージハンドラを登録<br/>(turn_result / game_started / obstacles_ready 等)

    ColyseusServer->>ColyseusAdapter: send 'player_assigned' { playerId }
    ColyseusAdapter->>ColyseusAdapter: myPlayerId = assignedId

    ColyseusServer->>ColyseusAdapter: send 'server_config' { gridSize, ... }
    ColyseusAdapter->>ColyseusAdapter: serverConfigCallback(config) をキャッシュ

    ColyseusServer->>ColyseusAdapter: send 'obstacles_ready' { obstacles[] }
    ColyseusAdapter->>ColyseusAdapter: obstaclesReadyCallback(obstacles) をキャッシュ

    ColyseusAdapter-->>GRF_main: connect() 完了

    GRF_main->>ThreeSetup: setupThree(canvas, adapter)
    ThreeSetup->>ColyseusAdapter: adapter.onServerConfig(callback)
    ColyseusAdapter->>ThreeSetup: applyServerConfig() (キャッシュ済みなら即時実行)

    ThreeSetup->>ColyseusAdapter: adapter.initializeModel()
    ColyseusAdapter->>Model: new Model(false) (障害物なしで初期化)
    ColyseusAdapter->>ColyseusAdapter: onObstaclesReady → model.importObstacles(obstacles)

    ThreeSetup->>ThreeSetup: VisualizationSync / InputHandler / GameController 初期化

    ColyseusServer->>ColyseusAdapter: state.players.onAdd (各プレイヤー)
    ColyseusAdapter->>GRF_main: playerJoinedCallback(playerId)
    GRF_main->>ThreeSetup: setup.addPlayer(playerId, nodeId, color)

    Note over ColyseusServer: 必要人数が揃ったらゲーム開始

    ColyseusServer->>ColyseusAdapter: send 'game_started' { firstTurnPlayerId }
    ColyseusAdapter->>ColyseusAdapter: gameStartedCallback() (キャッシュ済みなら即時実行)

    loop ターンごと
        User->>ThreeSetup: ターンアクション実行
        ThreeSetup->>ColyseusAdapter: sendTurnAction({ playerId, moveToNodeId, shotAtNodeId })
        ColyseusAdapter->>ColyseusServer: room.send('turn_action', action)
        ColyseusServer->>GameRoom: アクション処理・判定
        GameRoom->>ColyseusServer: 結果を計算
        ColyseusServer->>ColyseusAdapter: send 'turn_result' { TurnResult }
        ColyseusAdapter->>ThreeSetup: turnResultCallback(result)
        ThreeSetup->>ThreeSetup: applyTurnResult() → 描画更新
    end
```

---

## 5. 戦闘解決フロー

射撃アクション送信からヒット判定・体力更新・描画エフェクトまでのシーケンスです。

```mermaid
sequenceDiagram
    participant LocalAdapter
    participant GameController
    participant GameEventBus
    participant Model
    participant Player
    participant VisualizationSync
    participant PlayerLifecycleManager

    LocalAdapter->>Model: setPlayerRef(attackerId, newNode) ※移動先
    LocalAdapter->>LocalAdapter: resolveShot(attackerId, shotNodeId)

    loop 生存している全敵プレイヤー
        LocalAdapter->>LocalAdapter: dist = √((ex-sx)² + (ey-sy)²)
        alt dist ≤ ShotHitRadius
            LocalAdapter->>LocalAdapter: hits.push({ targetId, damage, isEliminated })
        end
    end

    LocalAdapter->>GameController: turnResultCallback(TurnResult { hits[] })

    GameController->>GameController: applyTurnResult(result)
    GameController->>Model: setPlayerRef(movingPlayerId, newNode)
    GameController->>Player: movingPlayer.setAngle(newAngle)

    loop 各ヒット
        GameController->>Player: targetPlayer.takeDamage(damage)
        Player->>Player: health = max(0, health - damage)
        alt health <= 0
            Player->>Player: isAlive = false
        end

        GameController->>GameEventBus: emit HIT_DETECTED { attackerId, targetId, nodeId }
        GameEventBus->>GameController: handleHitDetected()
        GameController->>GameEventBus: emit VIS_SHOW_HIT_EFFECT { playerId: targetId }
        GameEventBus->>VisualizationSync: showHitEffect(targetId)
        VisualizationSync->>PlayerLifecycleManager: 被弾エフェクト表示

        alt !targetPlayer.isAlive
            GameController->>GameController: handlePlayerElimination(targetId)
            GameController->>GameEventBus: emit VIS_HIDE_PLAYER { playerId: targetId }
            GameEventBus->>PlayerLifecycleManager: hidePlayer(targetId)
            PlayerLifecycleManager->>PlayerLifecycleManager: scene.remove(mesh)

            GameController->>GameController: 生存プレイヤーを確認
            alt 生存プレイヤーが 1 人
                GameController->>GameEventBus: emit GAME_OVER { winnerId }
            end
        end
    end

    GameController->>GameEventBus: emit VIS_UPDATE_VIEW
    GameEventBus->>VisualizationSync: doUpdateView()
    VisualizationSync->>VisualizationSync: updatePlayers() + updateNodeColors()
```

---

## 6. イベントバス全体マップ

`GameEventBus` を介した主要なイベントの発火元と購読先をまとめた図です。

```mermaid
flowchart LR
    subgraph Input["入力層 (input/)"]
        IH[InputHandler]
    end

    subgraph Logic["ロジック層 (logic/)"]
        GC[GameController]
        TM[TurnManager]
        SM[StateMachine]
    end

    subgraph Network["ネットワーク層 (network/)"]
        LA[LocalAdapter]
        CA[ColyseusAdapter]
    end

    subgraph Rendering["描画層 (rendering/)"]
        VS[VisualizationSync]
        PA[PlayerAnimator]
        PLM[PlayerLifecycleManager]
        NVM[NodeVisualizationManager]
        CFC[CameraFollowController]
        VAV[ViewAngleVisualizer]
    end

    subgraph UI["UI層 (ui/)"]
        HUD[GameHUD]
        MAIN[GRF_main]
    end

    Bus((GameEventBus))

    %% Input → Bus
    IH -->|NODE_CLICKED| Bus
    IH -->|CANVAS_CLICKED_EMPTY| Bus
    IH -->|KEY_PRESSED| Bus
    IH -->|PLAYER_SWITCHED| Bus

    %% Logic → Bus
    GC -->|VIS_UPDATE_VIEW| Bus
    GC -->|VIS_SET_ACTIVE_PLAYER| Bus
    GC -->|VIS_SET_SELECT_MESH| Bus
    GC -->|VIS_SET_NEXT_MESH| Bus
    GC -->|VIS_SET_SHOT_MESH| Bus
    GC -->|VIS_CLEAR_NEXT_MESH| Bus
    GC -->|VIS_SET_REACHABLE_NODES| Bus
    GC -->|HIT_DETECTED| Bus
    GC -->|COMBAT_RESOLVED| Bus
    TM -->|INPUT_LOCKED| Bus
    TM -->|NPC_TURN_STARTED| Bus
    TM -->|NPC_TURNS_COMPLETE| Bus

    %% Bus → Logic
    Bus -->|NODE_CLICKED| GC
    Bus -->|INPUT_LOCKED| GC

    %% Bus → Rendering
    Bus -->|VIS_UPDATE_VIEW| VS
    Bus -->|VIS_SET_ACTIVE_PLAYER| VS
    Bus -->|VIS_SET_SELECT_MESH| NVM
    Bus -->|VIS_SET_NEXT_MESH| NVM
    Bus -->|VIS_SET_SHOT_MESH| NVM
    Bus -->|VIS_SHOW_HIT_EFFECT| PLM
    Bus -->|VIS_HIDE_PLAYER| PLM
    Bus -->|VIS_ANIMATE_PLAYER| PA
    Bus -->|VIS_PAN_CAMERA| CFC

    %% Bus → UI
    Bus -->|PLAYER_SWITCHED| MAIN
    Bus -->|GAME_OVER| MAIN
    Bus -->|HIT_DETECTED| HUD
    Bus -->|TURN_STARTED| HUD
```

---

## 補足: 状態機械の状態遷移

`StateMachine.ts` による入力処理の状態遷移図です。

```mermaid
stateDiagram-v2
    [*] --> Idle

    Idle --> Select : SelectPlayer<br/>(自プレイヤーノードをクリック)
    Select --> Idle : Cancel
    Select --> Move : MovePlayer<br/>(到達可能ノードをクリック)
    Move --> Idle : Cancel
    Move --> Shot : ShotPlayer<br/>(可視ノードをクリック)
    Shot --> Idle : Cancel
    Shot --> Shot : ShotPlayer<br/>(別の射撃先を選択)
    Shot --> Idle : Complete<br/>(同じ射撃先を再クリックでターン確定)
```
