# サーバー側アーキテクチャ設計

## 概要

`server/` ディレクトリは Colyseus 0.15.x フレームワークをベースにした権威サーバー（Authoritative Server）です。
クライアントから受け取ったターンアクションを検証・処理し、結果を全クライアントにブロードキャストします。

---

## ディレクトリ構成

```
server/
├── package.json                 # colyseus@0.15.57, express@4.18, TS 5.4
├── tsconfig.json                # module: commonjs, experimentalDecorators
└── src/
    ├── index.ts                 # Express + Colyseus サーバーエントリポイント
    ├── config/
    │   └── GameConfig.ts        # サーバー側ゲーム定数（クライアントと値を同期）
    ├── schema/
    │   └── GameState.ts         # @colyseus/schema 定義（自動差分同期）
    ├── rooms/
    │   └── GameRoom.ts          # ゲームルーム（最大10人・ライフサイクル管理）
    └── logic/
        └── ServerGameLogic.ts   # 権威ゲームロジック（マップ・移動・射撃判定）
```

---

## 各ファイルの責務

### `index.ts` — エントリポイント

- Express + Node.js HTTP サーバーを起動（デフォルトポート `2567`）
- CORS 許可オリジン: `https://tamari-moto.github.io`, `http://localhost:5173`
- `game_room` という名前で `GameRoom` を Colyseus に登録
- `GET /` でヘルスチェックエンドポイントを提供

### `config/GameConfig.ts` — サーバー定数

クライアント側 `src/config/GameConfig.ts` と値を同期させる定数群。

| 定数グループ | 定数名 | 値 | 説明 |
|-------------|-------|----|------|
| `MapConfig` | `NodesInGridSize` | 50 | グリッドの一辺ノード数 |
| `MapConfig` | `NodeSpacing` | 30 | ノード間距離（ワールド単位） |
| `PlayerConfig` | `MoveRange` | 8 | 1ターンの最大移動ステップ数 |
| `PlayerConfig` | `ViewAngle` | 60 | 視野角（度）。射撃判定に使用 |
| `PlayerConfig` | `MaxViewDistance` | 1000 | 最大射程距離（ワールド単位） |
| `PlayerConfig` | `DamagePerShot` | 10 | 1ショットのダメージ量 |
| `PlayerConfig` | `ShotHitRadius` | 20 | ショットノード周辺のヒット半径 |

> **注意**: サーバーが `server_config` メッセージでこれらの値をクライアントに送信するため、
> クライアントはサーバーの値で自身の設定を上書きします。直接コードを変更する場合は両方のファイルを更新してください。

### `schema/GameState.ts` — スキーマ定義

`@colyseus/schema` デコレーターにより、状態の差分が自動的にクライアントに同期されます。

```typescript
PlayerState extends Schema {
  id: string        // セッションID（クライアント側の playerId と一致）
  nodeId: number    // 現在位置のノードID
  angle: number     // 向いている方向（度）
  health: number    // HP（0〜100）
  isAlive: boolean  // 生存フラグ
  color: number     // 表示色（0xRRGGBB 形式の数値）
}

GameState extends Schema {
  players: MapSchema<PlayerState>  // 全プレイヤーのマップ（sessionId → PlayerState）
  gameStarted: boolean             // ゲーム開始フラグ
}
```

### `rooms/GameRoom.ts` — ゲームルーム

Colyseus の `Room<GameState>` を継承したルームクラス。

**ライフサイクルメソッド:**

| メソッド | タイミング | 処理内容 |
|---------|-----------|---------|
| `onCreate()` | ルーム作成時 | maxClients=10 設定、`turn_action` メッセージハンドラ登録 |
| `onJoin(client)` | クライアント接続時 | PlayerState 作成、`player_assigned` + `server_config` 送信、2人以上でゲーム開始 |
| `onLeave(client)` | クライアント切断時 | PlayerState 削除、`player_left` ブロードキャスト、生存者1人以下でゲーム終了 |
| `onDispose()` | ルーム破棄時 | ログ出力のみ |

**ゲーム開始シーケンス (`startGame`):**

```
generateObstacles()  →  initializePlayers()
      ↓
broadcast('obstacles_ready')   ← 必ず game_started より先に送信
      ↓
broadcast('game_started')
```

**ターンアクション処理 (`handleTurnAction`):**

```
受信: turn_action
  ├── gameStarted チェック → false なら GAME_NOT_STARTED エラー
  ├── playerId === sessionId チェック → 不一致なら INVALID_PLAYER_ID エラー
  ├── ServerGameLogic.processTurn() → null なら INVALID_ACTION エラー
  ├── broadcast('turn_result', result)
  └── 生存者 ≤ 1 → broadcast('game_over', { winnerId })
```

### `logic/ServerGameLogic.ts` — 権威ゲームロジック

マップ構造・移動検証・射撃判定をすべてサーバー側で処理し、クライアントによる改ざんを防ぎます。

**内部データ構造:**

| フィールド | 型 | 説明 |
|-----------|-----|------|
| `nodes` | `NodePos[]` | グリッド全ノードの座標（id, x, y） |
| `adjacency` | `number[][]` | 4方向接続の隣接リスト（adjacency[nodeId] = 隣接ノードID配列） |
| `generatedObstacles` | `ObstaclePayload[]` | 生成された障害物データ |

**主要メソッド:**

```
buildNodes()          グリッドノード生成（NodesInGridSize × NodesInGridSize）
buildAdjacency()      4方向隣接リスト構築
getReachableNodes()   BFS による到達可能ノード列挙（移動検証に使用）
generateObstacles()   ランダム矩形障害物生成
initializePlayers()   初期ノード割り当て・色割り当て（HSL → 0xRRGGBB）
processTurn()         ターン処理（移動検証 → 角度更新 → 射撃判定）
```

**`processTurn()` の詳細フロー:**

```
1. actor 取得・isAlive チェック
2. 移動検証: getReachableNodes(actor.nodeId, MoveRange) に moveToNodeId が含まれるか
3. actor.nodeId を更新
4. 角度更新:
   - shotAtNodeId あり → shotNode 方向
   - moveToNodeId が変化 → toNode 方向
5. 射撃判定（shotAtNodeId がある場合のみ）:
   - 各生存プレイヤーに対して:
     a. dist > MaxViewDistance → スキップ
     b. angleOff >= ViewAngle  → スキップ（視野角外）
     c. distToShotNode > ShotHitRadius → スキップ
     d. ヒット: health -= DamagePerShot、0以下なら isAlive = false
6. TurnResult を返す
```

---

## メッセージプロトコル

| 方向 | メッセージ | データ型 | 説明 |
|------|-----------|----------|------|
| S→C | `player_assigned` | `{ playerId: string }` | 接続直後、自分のIDを通知 |
| S→C | `server_config` | `{ mapConfig, playerConfig }` | サーバー権威設定でクライアントを上書き |
| S→C | `obstacles_ready` | `{ obstacles: ObstaclePayload[] }` | ゲーム開始前に障害物データを配信 |
| S→C | `game_started` | `{}` | ゲーム開始通知 |
| S→C | `turn_result` | `TurnResult` | ターン処理結果をブロードキャスト |
| S→C | `game_over` | `{ winnerId: string \| null }` | ゲーム終了通知 |
| S→C | `player_left` | `{ playerId: string }` | プレイヤー切断通知 |
| S→C | `error` | `{ code: string }` | エラー通知（GAME_NOT_STARTED / INVALID_PLAYER_ID / INVALID_ACTION） |
| C→S | `turn_action` | `TurnAction` | プレイヤーのターンアクション送信 |

**`TurnAction` 型:**

```typescript
{
  playerId: string;
  moveToNodeId: number;
  shotAtNodeId: number | undefined;
}
```

**`TurnResult` 型:**

```typescript
{
  movingPlayerId: string;
  newNodeId: number;
  newAngle: number;
  hits: Array<{ targetId: string; damage: number; isEliminated: boolean }>;
}
```

---

## 依存関係とレイヤー構造

```
index.ts
  └── GameRoom (rooms/)
        ├── GameState / PlayerState (schema/) ← @colyseus/schema で自動同期
        ├── ServerGameLogic (logic/)
        │     └── GameConfig (config/)
        └── GameConfig (config/)
```

- `schema/` は `logic/` に依存しない（純粋なデータ定義）
- `logic/` は `schema/` のデータ型を参照するが、Colyseus API には依存しない
- `rooms/` がオーケストレーター：Colyseus ライフサイクル管理 + logic 呼び出し

---

## クライアント側との対称構造

| サーバー | クライアント | 役割 |
|---------|------------|------|
| `server/src/config/GameConfig.ts` | `src/config/GameConfig.ts` | ゲーム定数（値を同期必須） |
| `server/src/schema/GameState.ts` | `src/schema/types.ts` | 共有型定義 |
| `server/src/logic/ServerGameLogic.ts` | `src/model/model.ts` + `src/logic/` | ゲームロジック |
| `server/src/rooms/GameRoom.ts` | `src/network/ColyseusAdapter.ts` | 通信の対向 |
