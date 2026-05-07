# CLAUDE.md — src/ui/ マップエディタ実装メモ

## 追加ファイル

| ファイル | 内容 |
|---------|------|
| `MapEditor.tsx` | スタンドアロンマップエディタ（本ドキュメントの主対象） |
| `imageToMap.ts` | 画像ファイル → `ObstacleData[]` 変換ユーティリティ |

---

## MapEditor.tsx

### 概要

React + Canvas 製のマップエディタ。障害物（壁）の描画とゲームグラフノードの配置・編集が可能。
完成したマップは `onPlayWithMap(obstacles, nodes, connectionRadius)` でゲームに渡す。

### Props

```typescript
interface MapEditorProps {
  onClose: () => void;
  onPlayWithMap: (
    obstacles: ObstacleData[],
    nodes: CustomNodeData[] | null,
    connectionRadius: number
  ) => void;
}
```

### ツール種別

```typescript
type DrawTool = 'rect' | 'line' | 'polygon' | 'select';
type NodeTool = 'node-add' | 'node-move' | 'node-delete';
type Tool = DrawTool | NodeTool;
```

| ツール | 操作 |
|--------|------|
| `rect` | ドラッグで矩形壁 |
| `line` | ドラッグで任意角度の線分 |
| `polygon` | クリックで頂点追加、始点付近クリックか Enter で確定、Esc でキャンセル |
| `select` | クリックで障害物選択、Delete で削除 |
| `node-add` | クリックでノード追加 |
| `node-move` | ドラッグでノード移動（複数選択時はまとめて移動） |
| `node-delete` | クリックでノード削除 |

### 座標変換

```
ゲーム座標 (0..MapSize)  ←→  Canvas ピクセル座標
  g2c(x, y, scale)  →  { cx, cy }   // game → canvas
  c2g(cx, cy, scale) →  { x, y }    // canvas → game
scale = min(利用可能幅, 利用可能高さ) / MapSize
PADDING = 20px（四辺の余白）
SIDEBAR_W = 256px（右サイドバー幅）
```

### ノード管理の不変条件

- `nodeList[id].id === id` が常に成立すること（ゲーム側の O(1) アクセス要件）
- ノードを削除・並べ替えた後は必ず `renumberNodes()` で連番に振り直す
- デフォルトは `makeDefaultGrid()`（50×50 = 2500 ノード、30px 間隔）

```typescript
function renumberNodes(nodes: CustomNodeData[]): CustomNodeData[]
// nodes.map((n, i) => ({ ...n, id: i })) — 配列インデックス = id にする

function makeDefaultGrid(): CustomNodeData[]
// MapConfig.NodesInGridSize × NodesInGridSize の標準グリッド

function findNodeNear(pos: Pt, nodes: CustomNodeData[], hitGameRadius: number): CustomNodeData | null
// ゲーム座標でヒットテスト（O(n) 線形走査）
```

### 複数ノード選択

```typescript
const [selectedNodeIds, setSelectedNodeIds] = useState<Set<number>>(new Set());
```

- **Shift+クリック**: 選択に追加 / 除外
- **ドラッグ選択ボックス**: `selectionBox` state でプレビュー描画、マウスアップ時に範囲内ノードを選択
- **まとめて移動**: `node-move` ツールで選択済みノードのどれかをドラッグすると全員移動（`nodeDragDelta` でオフセット管理）
- **まとめて削除**: `node-delete` ツールで選択済みノードを一括削除

```typescript
// ノード移動ドラッグの状態
const nodeDragRef = useRef<{ type: 'move' | 'sel-box'; startPos: Pt } | null>(null);
const [nodeDragDelta, setNodeDragDelta] = useState<Pt>({ x: 0, y: 0 });
```

### カスタムノードの接続半径

```typescript
const DEFAULT_CONNECTION_RADIUS = Math.round(MapConfig.NodeSpacing * 1.1); // 33px
```

- `NodeSpacing = 30px` の隣接ノード間距離 = 30px → 半径 33px で縦横のみ接続
- 対角（距離 ≈ 42.4px）は非接続（標準グリッドと同じ動作）
- エディタ UI でスライダーにより調整可能

### JSON エクスポート形式

```json
{
  "obstacles": [ { "id": 0, "segments": [...] } ],
  "nodes": [ { "id": 0, "x": 0, "y": 0 } ],
  "connectionRadius": 33
}
```

- `nodes` が省略された場合、ゲーム側はデフォルトグリッドを使用
- `obstacles` のみのファイルも有効（標準グリッド + カスタム障害物）

### 画像からマップ生成

サイドバーの「画像読込」ボタンで `imageToMap.ts` の `imageToObstacles()` を呼び出す。
既存の障害物に追加される（上書きではない）。

オプション（UI 上で調整可能）:
- `threshold`: 壁と判定する輝度閾値（0–255）
- `epsilon`: RDP 簡略化の許容誤差（px）
- `minLen`: 最小チェーン長（短すぎるノイズを除去）
- `maxSize`: 処理前にスケールダウンする最大辺長

---

## imageToMap.ts

### パイプライン

```
File → loadImg()
     → toBinary()       輝度閾値で白黒2値化
     → extractEdges()   4近傍で境界ピクセルのみ残す
     → traceChains()    次数1の端点から DFS でチェーンを追跡
     → rdp()            Ramer-Douglas-Peucker 折れ線簡略化
     → LineSegment[]    ゲーム座標に変換 (gameScale = mapSize / max(w,h))
     → ObstacleData[]
```

### エントリ関数

```typescript
async function imageToObstacles(
  file: File,
  mapSize: number,
  opts: ImageMapOptions,
  startId: number       // 既存障害物との ID 衝突を避けるオフセット
): Promise<ImageConvertResult>

interface ImageConvertResult {
  obstacles: ObstacleData[];
  nextId: number;       // 次の障害物 ID（追加インポート時に使用）
  chainCount: number;   // 検出されたチェーン数
  segmentCount: number; // 生成された線分数
}
```

---

## GRF_main.tsx の変更点

### Canvas の常時マウント

```tsx
// canvas は appState に関わらず常に DOM に存在させる
<canvas ref={canvasRef} style={{ display: appState === 'playing' ? 'block' : 'none' }} />
```

**理由**: `appState === 'map-editor'` の間に canvas がアンマウントされると、
`startGame()` 呼び出し時に `canvasRef.current === null` になりゲームが起動しない。

### handlePlayWithMap

```typescript
const handlePlayWithMap = (
  obstacles: ObstacleData[],
  nodes: CustomNodeData[] | null,
  connectionRadius: number,
) => {
  startGame(new LocalAdapter({ obstacles, nodes: nodes ?? undefined, connectionRadius }));
};
```

---

## model.ts の変更点（カスタムレイアウト対応）

### initCustomLayout()

```typescript
public initCustomLayout(
  customNodes: { id: number; x: number; y: number }[],
  obstaclesData: ObstacleData[],
  connectionRadius: number
): void
```

標準グリッドを使わずにカスタムノード配置でゲームを初期化する。
`Model(false)` で生成したインスタンスに対して呼び出す。

### getVisibleNodesAtAngle() のカスタムレイアウトブランチ

```typescript
if (this.customConnectionRadius > 0) {
  // グリッド前提の ID 計算（c * gridSize + r）が使えないため全ノードを走査
  const result: Node[] = [];
  for (const node of this.nodeList) {
    if (node.id === centerNode.id) continue;
    if (this.getNodeDistance(centerNode, node) > distance) continue;
    if (this.getAngleFromDirection(centerNode, node, dirX, dirY) >= this.viewAngle) continue;
    if (this.hasLineOfSight(centerNode, node)) result.push(node);
  }
  return result;
}
```

**背景**: 標準グリッドの高速パスは `nodeId = col * gridSize + row` でインデックスを計算するが、
カスタムノード配置ではこの計算が `nodeList` の範囲外になり `undefined` 参照エラーが発生する。

### addProximityEdges()

```typescript
private addProximityEdges(radius: number): void
```

全ノードペアを O(n²) で走査し、距離が `radius` 以下のペアを双方向接続する。
カスタムレイアウト専用（標準グリッドは `addDirectionalEdges()` を使用）。
