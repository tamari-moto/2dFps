import React, { useRef, useEffect, useState, useCallback } from 'react';
import { MapGenerator, ObstacleData } from '../model/MapGenerator';
import { LineSegment, createRectangleSegments } from '../model/LineSegment';
import { CalculatedConfig, MapConfig } from '../config/GameConfig';
import { imageToObstacles, DEFAULT_IMAGE_OPTIONS, type ImageMapOptions } from './imageToMap';
import type { CustomNodeData } from '../network/LocalAdapter';

interface MapEditorProps {
  onClose: () => void;
  onPlayWithMap: (obstacles: ObstacleData[], nodes: CustomNodeData[] | null, connectionRadius: number) => void;
}

type DrawTool = 'rect' | 'line' | 'polygon' | 'select';
type NodeTool = 'node-add' | 'node-move' | 'node-delete';
type Tool = DrawTool | NodeTool;
const isNodeTool = (t: Tool): t is NodeTool => t.startsWith('node-');

interface Pt { x: number; y: number }

// ── Layout / hit-test constants ────────────────────────────────────────────
const PADDING = 20;
const SIDEBAR_W = 256;
const POLY_CLOSE_RADIUS = 20;          // ポリゴン始点スナップ半径 (game units)
const NODE_HIT_RADIUS = 12;            // ノードクリックヒット半径 (canvas px)
const OBSTACLE_HIT_PX = 8;             // select ツールの線分ヒット半径 (canvas px)
const RECT_MIN_SIZE = 4;               // 矩形の最小辺長 (game units)
const LINE_MIN_DIST_SQ = 16;           // line ツールの最小ドラッグ距離² (game units)
const CLICK_VS_DRAG_PX = 3;            // sel-box が単純クリック扱いになる閾値 (game units)
const OBSTACLE_ID_BASE = 10000;
const NODE_ID_BASE = 100000;           // renumber 前の衝突回避用に大きめ
const DEFAULT_CONNECTION_RADIUS = Math.round(MapConfig.NodeSpacing * 1.1); // 33
const MIN_SCALE = 0.05;
const MAX_SCALE = 10;
const ZOOM_FACTOR = 1.12;              // ホイール1ステップあたりの倍率

function getInitialScale(): number {
  const maxW = window.innerWidth - SIDEBAR_W - PADDING * 2 - 16;
  const maxH = window.innerHeight - PADDING * 2 - 16;
  return Math.min(maxW / CalculatedConfig.MapSize, maxH / CalculatedConfig.MapSize);
}
/** game座標 → canvas座標 (パン・ズーム対応) */
function g2c(x: number, y: number, scale: number, ox: number, oy: number) {
  return { cx: x * scale + ox, cy: y * scale + oy };
}
/** canvas座標 → game座標 (パン・ズーム対応) */
function c2g(cx: number, cy: number, scale: number, ox: number, oy: number): Pt {
  return { x: (cx - ox) / scale, y: (cy - oy) / scale };
}
function ptSegDist2(px: number, py: number, seg: LineSegment): number {
  const dx = seg.end.x - seg.start.x, dy = seg.end.y - seg.start.y;
  const len2 = dx * dx + dy * dy;
  if (len2 === 0) return (px - seg.start.x) ** 2 + (py - seg.start.y) ** 2;
  const t = Math.max(0, Math.min(1, ((px - seg.start.x) * dx + (py - seg.start.y) * dy) / len2));
  return (px - (seg.start.x + t * dx)) ** 2 + (py - (seg.start.y + t * dy)) ** 2;
}
function dist2(a: Pt, b: Pt) { return (a.x - b.x) ** 2 + (a.y - b.y) ** 2; }

/** デフォルトの 50×50 グリッドノードを生成 */
function makeDefaultGrid(): CustomNodeData[] {
  const size = MapConfig.NodesInGridSize;
  const spacing = MapConfig.NodeSpacing;
  const nodes: CustomNodeData[] = [];
  let id = 0;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      nodes.push({ id: id++, x: i * spacing, y: j * spacing });
    }
  }
  return nodes;
}

/** ノード配列を ID = index の連番に振り直す（ゲーム側の O(1) アクセス要件） */
function renumberNodes(nodes: CustomNodeData[]): CustomNodeData[] {
  return nodes.map((n, i) => ({ ...n, id: i }));
}

function findNodeNear(pos: Pt, nodes: CustomNodeData[], hitGameRadius: number): CustomNodeData | null {
  const r2 = hitGameRadius ** 2;
  let best: CustomNodeData | null = null;
  let bestD2 = r2;
  for (const n of nodes) {
    const d2 = (n.x - pos.x) ** 2 + (n.y - pos.y) ** 2;
    if (d2 < bestD2) { bestD2 = d2; best = n; }
  }
  return best;
}

const TOOL_HELP: Record<Tool, string> = {
  rect:          '矩形: ドラッグで長方形の壁',
  line:          'ライン: ドラッグで任意角度の線分',
  polygon:       'ポリゴン: クリックで頂点追加 / 始点付近or Enter で確定 / Esc でキャンセル',
  select:        '選択: クリックで障害物選択 / Delete で削除',
  'node-add':    'ノード追加: クリックでノードを配置',
  'node-move':   'ノード移動: ドラッグで移動 / 空白ドラッグで範囲選択 / Shift+クリックで追加選択',
  'node-delete': 'ノード削除: クリックでノードを削除',
};

const MapEditor: React.FC<MapEditorProps> = ({ onClose, onPlayWithMap }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [obstacles, setObstacles] = useState<ObstacleData[]>([]);
  const [tool, setTool] = useState<Tool>('rect');
  const [selectedId, setSelectedId] = useState<number | null>(null);   // obstacle id
  const [seed, setSeed] = useState(() => MapGenerator.generateSeed());
  const nextObsIdRef = useRef(OBSTACLE_ID_BASE);

  // --- Obstacle draw state ---
  const dragStart = useRef<Pt | null>(null);
  const [dragEnd, setDragEnd] = useState<Pt | null>(null);
  const [polyPoints, setPolyPoints] = useState<Pt[]>([]);
  const [polyCursor, setPolyCursor] = useState<Pt | null>(null);

  // --- Node state ---
  const [customNodes, setCustomNodes] = useState<CustomNodeData[] | null>(null); // null = default grid
  const [selectedNodeIds, setSelectedNodeIds] = useState<Set<number>>(new Set());
  const [connectionRadius, setConnectionRadius] = useState(DEFAULT_CONNECTION_RADIUS);
  const nodeDragRef = useRef<{ type: 'move' | 'sel-box'; startPos: Pt } | null>(null);
  const [nodeDragDelta, setNodeDragDelta] = useState<Pt | null>(null);
  const [selectionBox, setSelectionBox] = useState<{ x1: number; y1: number; x2: number; y2: number } | null>(null);
  const nextNodeIdRef = useRef(NODE_ID_BASE);

  // --- Undo history (スナップショット方式) ---
  type Snapshot = { obstacles: ObstacleData[]; customNodes: CustomNodeData[] | null };
  const undoStack = useRef<Snapshot[]>([]);
  // obstacles/customNodes の最新値を ref 経由で読めるようにする（pushHistory の deps を安定化）
  const liveStateRef = useRef<Snapshot>({ obstacles: [], customNodes: null });

  // --- Image import ---
  const [imgEl, setImgEl] = useState<HTMLImageElement | null>(null);
  const [showImg, setShowImg] = useState(true);
  const [imgOpts, setImgOpts] = useState<ImageMapOptions>(DEFAULT_IMAGE_OPTIONS);
  const [converting, setConverting] = useState(false);
  const [imgFileName, setImgFileName] = useState('');

  const [status, setStatus] = useState(TOOL_HELP['rect']);

  // --- View transform (pan / zoom) ---
  const [viewScale, setViewScale] = useState(() => getInitialScale());
  const [viewOffset, setViewOffset] = useState<Pt>(() => ({ x: PADDING, y: PADDING }));
  /** 右クリックドラッグのパン開始位置記録用 */
  const panDragRef = useRef<{ startCanvas: Pt; startOffset: Pt } | null>(null);

  const mapSize = CalculatedConfig.MapSize;
  const nodeSpacing = MapConfig.NodeSpacing;
  const nodesInGrid = MapConfig.NodesInGridSize;

  // liveStateRef を常に最新 state に同期
  useEffect(() => { liveStateRef.current = { obstacles, customNodes }; }, [obstacles, customNodes]);

  const pushHistory = useCallback(() => {
    const snap = { ...liveStateRef.current };
    undoStack.current.push(snap);
    if (undoStack.current.length > 50) undoStack.current.shift();
  }, []);

  const undo = useCallback(() => {
    const snap = undoStack.current.pop();
    if (!snap) return;
    setObstacles(snap.obstacles);
    setCustomNodes(snap.customNodes);
    setStatus('元に戻しました');
  }, []);

  // ── Render ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // キャンバスをコンテナいっぱいに広げる
    const parent = canvas.parentElement;
    const cw = parent ? parent.clientWidth : window.innerWidth - SIDEBAR_W - 16;
    const ch = parent ? parent.clientHeight : window.innerHeight;
    canvas.width = cw;
    canvas.height = ch;

    // ビュー変換のショートハンド
    const gc = (x: number, y: number) => g2c(x, y, viewScale, viewOffset.x, viewOffset.y);

    // 背景
    ctx.fillStyle = '#0d0d0d';
    ctx.fillRect(0, 0, cw, ch);

    const drawBackgroundImage = () => {
      if (!imgEl || !showImg) return;
      ctx.globalAlpha = 0.35;
      const iScale = Math.min(mapSize / imgEl.width, mapSize / imgEl.height);
      ctx.drawImage(imgEl,
        viewOffset.x, viewOffset.y,
        imgEl.width * iScale * viewScale,
        imgEl.height * iScale * viewScale,
      );
      ctx.globalAlpha = 1;
    };

    const drawNodes = () => {
      const nodeEditMode = isNodeTool(tool);
      if (nodeEditMode && customNodes) {
        for (const n of customNodes) {
          const isSel = selectedNodeIds.has(n.id);
          const dx = (isSel && nodeDragDelta) ? nodeDragDelta.x : 0;
          const dy = (isSel && nodeDragDelta) ? nodeDragDelta.y : 0;
          const { cx, cy } = gc(n.x + dx, n.y + dy);
          ctx.fillStyle = isSel ? '#ffdd00' : '#44aaff';
          ctx.beginPath();
          ctx.arc(cx, cy, isSel ? 6 : 4, 0, Math.PI * 2);
          ctx.fill();
        }
        if (selectionBox) {
          const s = gc(selectionBox.x1, selectionBox.y1);
          const e = gc(selectionBox.x2, selectionBox.y2);
          ctx.strokeStyle = '#00aaff'; ctx.lineWidth = 1;
          ctx.setLineDash([4, 4]);
          ctx.strokeRect(s.cx, s.cy, e.cx - s.cx, e.cy - s.cy);
          ctx.fillStyle = 'rgba(0,170,255,0.08)';
          ctx.fillRect(s.cx, s.cy, e.cx - s.cx, e.cy - s.cy);
          ctx.setLineDash([]);
        }
        return;
      }

      if (customNodes) {
        ctx.fillStyle = '#3a5a7a';
        for (const n of customNodes) {
          const { cx, cy } = gc(n.x, n.y);
          ctx.beginPath();
          ctx.arc(cx, cy, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      } else {
        ctx.fillStyle = '#2a2a2a';
        for (let i = 0; i < nodesInGrid; i++) {
          for (let j = 0; j < nodesInGrid; j++) {
            const { cx, cy } = gc(i * nodeSpacing, j * nodeSpacing);
            ctx.beginPath();
            ctx.arc(cx, cy, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    const drawObstacles = () => {
      for (const obs of obstacles) {
        const sel = obs.id === selectedId;
        ctx.strokeStyle = sel ? '#ffdd00' : '#44aaff';
        ctx.lineWidth = sel ? 2.5 : 1.5;
        for (const seg of obs.segments) {
          const s = gc(seg.start.x, seg.start.y);
          const e = gc(seg.end.x, seg.end.y);
          ctx.beginPath(); ctx.moveTo(s.cx, s.cy); ctx.lineTo(e.cx, e.cy); ctx.stroke();
        }
      }
    };

    const drawDragPreview = () => {
      if (isNodeTool(tool) || !dragStart.current || !dragEnd) return;
      ctx.strokeStyle = '#ff8800'; ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 5]);
      const s = gc(dragStart.current.x, dragStart.current.y);
      const e = gc(dragEnd.x, dragEnd.y);
      if (tool === 'rect') {
        ctx.strokeRect(s.cx, s.cy, e.cx - s.cx, e.cy - s.cy);
      } else if (tool === 'line') {
        ctx.beginPath(); ctx.moveTo(s.cx, s.cy); ctx.lineTo(e.cx, e.cy); ctx.stroke();
      }
      ctx.setLineDash([]);
    };

    const drawPolygonPreview = () => {
      if (tool !== 'polygon' || polyPoints.length === 0) return;
      ctx.strokeStyle = '#ff8800'; ctx.lineWidth = 1.5;
      for (let i = 1; i < polyPoints.length; i++) {
        const a = gc(polyPoints[i - 1].x, polyPoints[i - 1].y);
        const b = gc(polyPoints[i].x, polyPoints[i].y);
        ctx.beginPath(); ctx.moveTo(a.cx, a.cy); ctx.lineTo(b.cx, b.cy); ctx.stroke();
      }
      if (polyCursor) {
        const last = polyPoints[polyPoints.length - 1];
        const a = gc(last.x, last.y);
        const b = gc(polyCursor.x, polyCursor.y);
        ctx.setLineDash([5, 5]);
        ctx.beginPath(); ctx.moveTo(a.cx, a.cy); ctx.lineTo(b.cx, b.cy); ctx.stroke();
        ctx.setLineDash([]);
      }
      for (const pt of polyPoints) {
        const { cx, cy } = gc(pt.x, pt.y);
        ctx.fillStyle = '#ff8800';
        ctx.beginPath(); ctx.arc(cx, cy, 4, 0, Math.PI * 2); ctx.fill();
      }
      if (polyPoints.length >= 3 && polyCursor) {
        const snap = dist2(polyCursor, polyPoints[0]) < POLY_CLOSE_RADIUS ** 2;
        const { cx, cy } = gc(polyPoints[0].x, polyPoints[0].y);
        ctx.strokeStyle = snap ? '#00ff88' : '#ff8800'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, 7, 0, Math.PI * 2); ctx.stroke();
      }
    };

    const drawNodeMovePreview = () => {
      if (tool !== 'node-move' || !nodeDragRef.current || !dragEnd || !customNodes) return;
      const { cx, cy } = gc(dragEnd.x, dragEnd.y);
      ctx.strokeStyle = '#00ff88'; ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.arc(cx, cy, 5, 0, Math.PI * 2); ctx.stroke();
      ctx.setLineDash([]);
    };

    drawBackgroundImage();
    drawNodes();
    drawObstacles();
    drawDragPreview();
    drawPolygonPreview();
    drawNodeMovePreview();
  }, [obstacles, selectedId, tool, dragEnd, polyPoints, polyCursor, customNodes,
      selectedNodeIds, nodeDragDelta, selectionBox, imgEl, showImg,
      mapSize, nodesInGrid, nodeSpacing, viewScale, viewOffset]);

  // ── Helpers ───────────────────────────────────────────────────────────────
  const getGamePos = useCallback((e: React.MouseEvent<HTMLCanvasElement>): Pt => {
    const r = canvasRef.current!.getBoundingClientRect();
    return c2g(e.clientX - r.left, e.clientY - r.top, viewScale, viewOffset.x, viewOffset.y);
  }, [viewScale, viewOffset]);

  const getCanvasPos = useCallback((e: React.MouseEvent<HTMLCanvasElement>): Pt => {
    const r = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }, []);

  const ensureCustomNodes = useCallback((): CustomNodeData[] => {
    if (customNodes) return customNodes;
    const grid = makeDefaultGrid();
    setCustomNodes(grid);
    nextNodeIdRef.current = grid.length;
    return grid;
  }, [customNodes]);

  const clearNodeSelection = useCallback(() => setSelectedNodeIds(new Set()), []);

  /** ドラッグ／プレビュー系の一時 state を全てリセット（ポリゴン頂点は残す）。 */
  const resetTransientDragState = useCallback(() => {
    nodeDragRef.current = null;
    setNodeDragDelta(null);
    setSelectionBox(null);
    dragStart.current = null;
    setDragEnd(null);
    setPolyCursor(null);
  }, []);

  const commitPolygon = useCallback((pts: Pt[]) => {
    if (pts.length < 2) return;
    pushHistory();
    const segs: LineSegment[] = [];
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length];
      segs.push(new LineSegment(a.x, a.y, b.x, b.y));
    }
    setObstacles(prev => [...prev, { id: nextObsIdRef.current++, segments: segs }]);
    setPolyPoints([]); setPolyCursor(null);
  }, []);

  const cancelPolygon = useCallback(() => { setPolyPoints([]); setPolyCursor(null); }, []);

  const deleteSelectedObstacle = useCallback(() => {
    if (selectedId === null) return;
    pushHistory();
    setObstacles(p => p.filter(o => o.id !== selectedId));
    setSelectedId(null);
  }, [selectedId]);

  const deleteSelectedNodes = useCallback(() => {
    if (selectedNodeIds.size === 0) return;
    pushHistory();
    const toDelete = new Set(selectedNodeIds);
    setCustomNodes(prev => prev ? prev.filter(n => !toDelete.has(n.id)) : null);
    setSelectedNodeIds(new Set());
  }, [selectedNodeIds]);

  const resetToDefaultGrid = useCallback(() => {
    const g = makeDefaultGrid();
    setCustomNodes(g);
    nextNodeIdRef.current = g.length;
    setStatus('デフォルトグリッドにリセット');
  }, []);

  const clearCustomNodes = useCallback(() => {
    setCustomNodes(null);
    setStatus('ノードをデフォルトにリセット');
  }, []);

  // ── Mouse Down: per-tool handlers ─────────────────────────────────────────
  const onNodeAddDown = useCallback((pos: Pt) => {
    const nodes = ensureCustomNodes();
    pushHistory();
    const newNode: CustomNodeData = { id: nextNodeIdRef.current++, x: pos.x, y: pos.y };
    setCustomNodes([...nodes, newNode]);
    setSelectedNodeIds(new Set([newNode.id]));
  }, [ensureCustomNodes]);

  const onNodeDeleteDown = useCallback((pos: Pt) => {
    const nodes = ensureCustomNodes();
    const hit = findNodeNear(pos, nodes, NODE_HIT_RADIUS / viewScale);
    if (!hit) return;
    pushHistory();
    const toDelete = selectedNodeIds.has(hit.id) ? selectedNodeIds : new Set([hit.id]);
    setCustomNodes(nodes.filter(n => !toDelete.has(n.id)));
    setSelectedNodeIds(prev => { const s = new Set(prev); toDelete.forEach(id => s.delete(id)); return s; });
  }, [ensureCustomNodes, selectedNodeIds, viewScale]);

  const onNodeMoveDown = useCallback((pos: Pt, shiftKey: boolean) => {
    const nodes = ensureCustomNodes();
    const hit = findNodeNear(pos, nodes, NODE_HIT_RADIUS / viewScale);

    if (hit) {
      if (shiftKey) {
        setSelectedNodeIds(prev => {
          const next = new Set(prev);
          if (next.has(hit.id)) next.delete(hit.id); else next.add(hit.id);
          return next;
        });
        return;
      }
      if (!selectedNodeIds.has(hit.id)) setSelectedNodeIds(new Set([hit.id]));
      nodeDragRef.current = { type: 'move', startPos: pos };
    } else {
      if (!shiftKey) clearNodeSelection();
      nodeDragRef.current = { type: 'sel-box', startPos: pos };
      setSelectionBox({ x1: pos.x, y1: pos.y, x2: pos.x, y2: pos.y });
    }
  }, [ensureCustomNodes, selectedNodeIds, clearNodeSelection, viewScale]);

  const onDrawDragDown = useCallback((pos: Pt) => {
    dragStart.current = pos;
    setDragEnd(null);
  }, []);

  const onSelectDown = useCallback((pos: Pt) => {
    const hitD2 = (OBSTACLE_HIT_PX / viewScale) ** 2;
    let found: number | null = null;
    outer: for (const obs of obstacles) {
      for (const seg of obs.segments) {
        if (ptSegDist2(pos.x, pos.y, seg) < hitD2) { found = obs.id; break outer; }
      }
    }
    setSelectedId(found);
  }, [obstacles, viewScale]);

  const onPolygonDown = useCallback((pos: Pt) => {
    setPolyPoints(prev => {
      if (prev.length >= 3 && dist2(pos, prev[0]) < POLY_CLOSE_RADIUS ** 2) {
        commitPolygon(prev); return [];
      }
      return [...prev, pos];
    });
  }, [commitPolygon]);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    // 右クリック: パン開始
    if (e.button === 2) {
      const cp = getCanvasPos(e);
      panDragRef.current = { startCanvas: cp, startOffset: { ...viewOffset } };
      return;
    }
    if (e.button !== 0) return;
    const pos = getGamePos(e);
    switch (tool) {
      case 'node-add':    onNodeAddDown(pos); return;
      case 'node-delete': onNodeDeleteDown(pos); return;
      case 'node-move':   onNodeMoveDown(pos, e.shiftKey); return;
      case 'rect':
      case 'line':        onDrawDragDown(pos); return;
      case 'select':      onSelectDown(pos); return;
      case 'polygon':     onPolygonDown(pos); return;
    }
  }, [tool, getGamePos, getCanvasPos, viewOffset,
      onNodeAddDown, onNodeDeleteDown, onNodeMoveDown, onDrawDragDown, onSelectDown, onPolygonDown]);

  // ── Mouse Move ────────────────────────────────────────────────────────────
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    // 右クリックパン中
    if (panDragRef.current) {
      const cp = getCanvasPos(e);
      const { startCanvas, startOffset } = panDragRef.current;
      setViewOffset({
        x: startOffset.x + (cp.x - startCanvas.x),
        y: startOffset.y + (cp.y - startCanvas.y),
      });
      return;
    }

    const pos = getGamePos(e);
    if (tool === 'node-move' && nodeDragRef.current) {
      const { type, startPos } = nodeDragRef.current;
      if (type === 'move') {
        setNodeDragDelta({ x: pos.x - startPos.x, y: pos.y - startPos.y });
      } else {
        setSelectionBox({ x1: startPos.x, y1: startPos.y, x2: pos.x, y2: pos.y });
      }
      return;
    }
    if ((tool === 'rect' || tool === 'line') && dragStart.current) { setDragEnd(pos); return; }
    if (tool === 'polygon') setPolyCursor(pos);
  }, [tool, getGamePos, getCanvasPos]);

  // ── Mouse Up: per-tool handlers ───────────────────────────────────────────
  const onNodeMoveUp = useCallback((pos: Pt, shiftKey: boolean) => {
    if (!nodeDragRef.current) return;
    const { type, startPos } = nodeDragRef.current;
    nodeDragRef.current = null;

    if (type === 'move' && nodeDragDelta) {
      pushHistory();
      const dx = nodeDragDelta.x, dy = nodeDragDelta.y;
      setCustomNodes(prev => prev
        ? prev.map(n => selectedNodeIds.has(n.id) ? { ...n, x: n.x + dx, y: n.y + dy } : n)
        : null
      );
      setNodeDragDelta(null);
      return;
    }

    if (type === 'sel-box' && selectionBox) {
      const minX = Math.min(selectionBox.x1, selectionBox.x2);
      const maxX = Math.max(selectionBox.x1, selectionBox.x2);
      const minY = Math.min(selectionBox.y1, selectionBox.y2);
      const maxY = Math.max(selectionBox.y1, selectionBox.y2);
      const inside = (customNodes ?? []).filter(n => n.x >= minX && n.x <= maxX && n.y >= minY && n.y <= maxY);
      setSelectedNodeIds(prev => {
        const next = shiftKey ? new Set(prev) : new Set<number>();
        inside.forEach(n => next.add(n.id));
        return next;
      });
      setSelectionBox(null);
      if (Math.abs(pos.x - startPos.x) < CLICK_VS_DRAG_PX
          && Math.abs(pos.y - startPos.y) < CLICK_VS_DRAG_PX
          && !shiftKey) {
        setSelectedNodeIds(new Set());
      }
    }
  }, [nodeDragDelta, selectionBox, selectedNodeIds, customNodes]);

  const onRectUp = useCallback((pos: Pt) => {
    if (!dragStart.current) return;
    const x1 = Math.min(dragStart.current.x, pos.x), y1 = Math.min(dragStart.current.y, pos.y);
    const x2 = Math.max(dragStart.current.x, pos.x), y2 = Math.max(dragStart.current.y, pos.y);
    if (x2 - x1 > RECT_MIN_SIZE && y2 - y1 > RECT_MIN_SIZE) {
      pushHistory();
      const segs = createRectangleSegments(x1, y1, x2 - x1, y2 - y1);
      setObstacles(prev => [...prev, { id: nextObsIdRef.current++, segments: segs }]);
    }
  }, []);

  const onLineUp = useCallback((pos: Pt) => {
    if (!dragStart.current) return;
    if (dist2(dragStart.current, pos) > LINE_MIN_DIST_SQ) {
      pushHistory();
      const seg = new LineSegment(dragStart.current.x, dragStart.current.y, pos.x, pos.y);
      setObstacles(prev => [...prev, { id: nextObsIdRef.current++, segments: [seg] }]);
    }
  }, []);

  const handleMouseUp = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    // 右クリックパン終了
    if (e.button === 2) {
      panDragRef.current = null;
      return;
    }
    if (e.button !== 0) return;

    const pos = getGamePos(e);
    if (tool === 'node-move') {
      onNodeMoveUp(pos, e.shiftKey);
      return;
    }
    if (tool === 'rect') onRectUp(pos);
    else if (tool === 'line') onLineUp(pos);
    dragStart.current = null;
    setDragEnd(null);
  }, [tool, getGamePos, onNodeMoveUp, onRectUp, onLineUp]);

  const handleMouseLeave = useCallback(() => {
    panDragRef.current = null;
    if (tool !== 'node-move') { dragStart.current = null; setDragEnd(null); }
    setPolyCursor(null);
    if (nodeDragRef.current) {
      nodeDragRef.current = null;
      setNodeDragDelta(null);
      setSelectionBox(null);
    }
  }, [tool]);

  // ── Wheel: ズーム (マウス位置を中心) ──────────────────────────────────────
  const handleWheel = useCallback((e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? ZOOM_FACTOR : 1 / ZOOM_FACTOR;
    const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, viewScale * factor));
    if (newScale === viewScale) return;

    // マウス位置 (canvas px) を固定してズーム
    const r = canvasRef.current!.getBoundingClientRect();
    const mx = e.clientX - r.left;
    const my = e.clientY - r.top;
    // mx = gameX * newScale + newOx  → newOx = mx - gameX * newScale
    // gameX = (mx - ox) / scale
    const gameX = (mx - viewOffset.x) / viewScale;
    const gameY = (my - viewOffset.y) / viewScale;
    setViewOffset({
      x: mx - gameX * newScale,
      y: my - gameY * newScale,
    });
    setViewScale(newScale);
  }, [viewScale, viewOffset]);

  // ── Keyboard ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') { e.preventDefault(); undo(); return; }
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (isNodeTool(tool) && selectedNodeIds.size > 0) deleteSelectedNodes();
        else if (selectedId !== null) deleteSelectedObstacle();
      }
      if (e.key === 'Enter' && polyPoints.length >= 2) commitPolygon(polyPoints);
      if (e.key === 'Escape') {
        cancelPolygon();
        resetTransientDragState();
        clearNodeSelection();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [tool, selectedId, selectedNodeIds, polyPoints, undo,
      commitPolygon, cancelPolygon, clearNodeSelection,
      deleteSelectedObstacle, deleteSelectedNodes, resetTransientDragState]);

  // ── Tool switch ───────────────────────────────────────────────────────────
  const selectTool = useCallback((t: Tool) => {
    setTool(t);
    cancelPolygon();
    resetTransientDragState();
    setStatus(TOOL_HELP[t]);
    if (isNodeTool(t) && !customNodes) {
      const grid = makeDefaultGrid();
      setCustomNodes(grid);
      nextNodeIdRef.current = grid.length;
    }
  }, [cancelPolygon, resetTransientDragState, customNodes]);

  // ── BSP ───────────────────────────────────────────────────────────────────
  const handleGenerate = useCallback(() => {
    pushHistory();
    const result = MapGenerator.generateComplexMap(seed || undefined);
    setObstacles(result.obstacles);
    setSelectedId(null); cancelPolygon();
    setSeed(result.seed);
    nextObsIdRef.current = Math.max(OBSTACLE_ID_BASE, ...result.obstacles.map(o => o.id)) + 1;
    setStatus(`BSP生成完了 (seed: ${result.seed})`);
  }, [seed, cancelPolygon]);

  // ── Image import ──────────────────────────────────────────────────────────
  const handleImageSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => { URL.revokeObjectURL(url); setImgEl(img); setImgFileName(file.name); };
    img.src = url;
    e.target.value = '';
  }, []);

  const handleConvert = useCallback(async () => {
    if (!imgEl) return;
    setConverting(true); setStatus('変換中...');
    try {
      const canvas = document.createElement('canvas');
      canvas.width = imgEl.naturalWidth; canvas.height = imgEl.naturalHeight;
      canvas.getContext('2d')!.drawImage(imgEl, 0, 0);
      const blob = await new Promise<Blob>((res) => canvas.toBlob(b => res(b!), 'image/png'));
      const file = new File([blob], 'img.png', { type: 'image/png' });
      const result = await imageToObstacles(file, mapSize, imgOpts, nextObsIdRef.current);
      pushHistory();
      setObstacles(prev => [...prev, ...result.obstacles]);
      nextObsIdRef.current = result.nextId;
      setStatus(`変換完了: ${result.chainCount} チェーン → ${result.segmentCount} 線分`);
    } catch (err) {
      setStatus(`変換エラー: ${err instanceof Error ? err.message : String(err)}`);
    } finally { setConverting(false); }
  }, [imgEl, imgOpts, mapSize]);

  // ── JSON I/O ──────────────────────────────────────────────────────────────
  const handleExport = useCallback(() => {
    const data = {
      obstacles: obstacles.map(obs => ({
        id: obs.id,
        segments: obs.segments.map(s => ({
          start: { x: Math.round(s.start.x), y: Math.round(s.start.y) },
          end:   { x: Math.round(s.end.x),   y: Math.round(s.end.y) },
        })),
      })),
      ...(customNodes ? {
        nodes: customNodes.map((n, i) => ({ id: i, x: Math.round(n.x), y: Math.round(n.y) })),
        connectionRadius,
      } : {}),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `map_${seed || 'custom'}.json`; a.click();
    URL.revokeObjectURL(url);
    setStatus(`エクスポート完了`);
  }, [obstacles, customNodes, connectionRadius, seed]);

  const handleImportJson = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const json = JSON.parse(ev.target?.result as string);
        const rawObs = Array.isArray(json) ? json : (json.obstacles ?? []);
        const { obstacles: imp } = MapGenerator.importObstacles(rawObs);
        pushHistory();
        setObstacles(imp);
        setSelectedId(null);
        nextObsIdRef.current = Math.max(OBSTACLE_ID_BASE, ...imp.map((o: ObstacleData) => o.id)) + 1;

        if (json.nodes && Array.isArray(json.nodes)) {
          setCustomNodes(json.nodes as CustomNodeData[]);
          nextNodeIdRef.current = json.nodes.length;
          if (json.connectionRadius) setConnectionRadius(json.connectionRadius);
          setStatus(`インポート完了 (障害物: ${imp.length}, ノード: ${json.nodes.length})`);
        } else {
          setCustomNodes(null);
          setStatus(`インポート完了 (障害物: ${imp.length})`);
        }
      } catch { setStatus('インポート失敗: 無効なJSONフォーマット'); }
    };
    reader.readAsText(file);
    e.target.value = '';
  }, []);

  const handleClear = useCallback(() => {
    pushHistory();
    setObstacles([]); setSelectedId(null); cancelPolygon();
    nextObsIdRef.current = OBSTACLE_ID_BASE;
    setStatus('障害物をクリア');
  }, [cancelPolygon]);

  // ── Styles ────────────────────────────────────────────────────────────────
  const btn = (active?: boolean, danger?: boolean, color?: string): React.CSSProperties => ({
    padding: '7px 10px', fontSize: '12px', fontWeight: 'bold', border: 'none',
    borderRadius: '4px', cursor: 'pointer',
    background: danger ? '#c0392b' : color ?? (active ? '#2196F3' : '#333'),
    color: '#fff', width: '100%', textAlign: 'left', marginTop: '4px',
  });
  const sTitle: React.CSSProperties = { fontSize: '10px', color: '#777', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px', marginTop: '2px' };
  const inp: React.CSSProperties = { padding: '5px 7px', fontSize: '12px', background: '#222', border: '1px solid #444', borderRadius: '4px', color: '#eee', width: '100%', fontFamily: 'monospace', boxSizing: 'border-box' };
  const hr: React.CSSProperties = { border: 'none', borderTop: '1px solid #2a2a2a', margin: '2px 0' };
  const sliderRow = (label: string, val: number, min: number, max: number, onChange: (v: number) => void) => (
    <div style={{ fontSize: '11px', color: '#aaa' }}>
      {label}: <strong>{val}</strong>
      <input type="range" min={min} max={max} value={val} style={{ width: '100%' }}
        onChange={e => onChange(+e.target.value)} />
    </div>
  );

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', background: '#111', color: '#eee', fontFamily: 'monospace', overflow: 'hidden' }}>

      {/* ── Sidebar ── */}
      <div style={{ width: SIDEBAR_W, flexShrink: 0, background: '#161616', borderRight: '1px solid #2a2a2a', display: 'flex', flexDirection: 'column', padding: '10px', gap: '6px', overflowY: 'auto' }}>

        {/* Draw tools */}
        <div>
          <div style={sTitle}>障害物描画</div>
          <button style={{ ...btn(tool === 'rect'), marginTop: 0 }} onClick={() => selectTool('rect')}>▭ 矩形</button>
          <button style={btn(tool === 'line')} onClick={() => selectTool('line')}>╱ ライン</button>
          <button style={btn(tool === 'polygon')} onClick={() => selectTool('polygon')}>⬡ ポリゴン</button>
          <button style={btn(tool === 'select')} onClick={() => selectTool('select')}>↖ 選択</button>
        </div>

        {tool === 'polygon' && polyPoints.length > 0 && (
          <div style={{ fontSize: '11px', color: '#fa0', background: '#1f1800', padding: '6px', borderRadius: '4px' }}>
            頂点 {polyPoints.length} 個
            <button style={{ ...btn(), fontSize: '11px', padding: '3px 6px' }} onClick={() => commitPolygon(polyPoints)} disabled={polyPoints.length < 2}>Enter: 確定</button>
            <button style={{ ...btn(false, true), fontSize: '11px', padding: '3px 6px' }} onClick={cancelPolygon}>Esc: キャンセル</button>
          </div>
        )}

        {tool === 'select' && selectedId !== null && (
          <button style={btn(false, true)} onClick={deleteSelectedObstacle}>
            ✕ 選択障害物を削除
          </button>
        )}

        <hr style={hr} />

        {/* Node tools */}
        <div>
          <div style={sTitle}>ノード編集</div>
          <button style={{ ...btn(tool === 'node-add'), marginTop: 0 }} onClick={() => selectTool('node-add')}>● ノード追加</button>
          <button style={btn(tool === 'node-move')} onClick={() => selectTool('node-move')}>↔ ノード移動</button>
          <button style={btn(tool === 'node-delete')} onClick={() => selectTool('node-delete')}>✕ ノード削除</button>

          {isNodeTool(tool) && selectedNodeIds.size > 0 && (
            <button style={btn(false, true)} onClick={deleteSelectedNodes}>
              ✕ 選択ノード {selectedNodeIds.size}個を削除 (Del)
            </button>
          )}

          <div style={{ marginTop: '6px' }}>
            {sliderRow('接続半径 (px)', connectionRadius, 10, 200, setConnectionRadius)}
          </div>

          <div style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>
            ノード数: {customNodes ? customNodes.length : `${nodesInGrid ** 2} (デフォルト)`}
            {selectedNodeIds.size > 0 && <span style={{ color: '#ffdd00' }}> / 選択: {selectedNodeIds.size}</span>}
          </div>

          <button style={{ ...btn(), marginTop: '4px', fontSize: '11px' }} onClick={resetToDefaultGrid}>
            ↺ デフォルトグリッドに戻す
          </button>
          {customNodes && (
            <button style={{ ...btn(false, true), fontSize: '11px' }} onClick={clearCustomNodes}>
              グリッドをデフォルトに戻す
            </button>
          )}
        </div>

        <hr style={hr} />

        {/* BSP */}
        <div>
          <div style={sTitle}>BSP 生成</div>
          <div style={{ display: 'flex', gap: '4px' }}>
            <input style={{ ...inp, flex: 1 }} value={seed} onChange={e => setSeed(e.target.value)} placeholder="シード値" />
            <button style={{ ...btn(), width: 'auto', padding: '5px 7px', flexShrink: 0, marginTop: 0 }} onClick={() => setSeed(MapGenerator.generateSeed())} title="ランダム">🎲</button>
          </div>
          <button style={btn()} onClick={handleGenerate}>⚙ 生成</button>
        </div>

        <hr style={hr} />

        {/* Image import */}
        <div>
          <div style={sTitle}>画像からマップ生成</div>
          <label style={{ ...btn(), display: 'block', marginTop: 0 }}>
            🖼 画像を選択
            <input type="file" accept="image/*" onChange={handleImageSelect} style={{ display: 'none' }} />
          </label>
          {imgFileName && <div style={{ fontSize: '10px', color: '#888', marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{imgFileName}</div>}
          {imgEl && (
            <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {sliderRow('明るさ閾値', imgOpts.threshold, 0, 255, v => setImgOpts(o => ({ ...o, threshold: v })))}
              {sliderRow('簡略化精度 ε', imgOpts.epsilon, 1, 20, v => setImgOpts(o => ({ ...o, epsilon: v })))}
              {sliderRow('最小チェーン長', imgOpts.minLen, 3, 50, v => setImgOpts(o => ({ ...o, minLen: v })))}
              <label style={{ fontSize: '11px', color: '#aaa', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                <input type="checkbox" checked={showImg} onChange={e => setShowImg(e.target.checked)} />
                画像をキャンバスに表示
              </label>
              <button style={{ ...btn(), background: converting ? '#555' : '#1a7a3a', marginTop: '2px' }}
                onClick={handleConvert} disabled={converting}>
                {converting ? '変換中...' : '⚡ 変換実行'}
              </button>
            </div>
          )}
        </div>

        <hr style={hr} />

        {/* File I/O */}
        <div>
          <div style={sTitle}>ファイル</div>
          <button style={{ ...btn(), marginTop: 0 }} onClick={handleExport} disabled={obstacles.length === 0 && !customNodes}>↓ JSONエクスポート</button>
          <label style={{ ...btn(), display: 'block' }}>
            ↑ JSONインポート
            <input type="file" accept=".json" onChange={handleImportJson} style={{ display: 'none' }} />
          </label>
        </div>

        <hr style={hr} />

        <div>
          <div style={sTitle}>編集</div>
          <button style={{ ...btn(false, true), marginTop: 0 }} onClick={handleClear} disabled={obstacles.length === 0}>🗑 障害物をクリア</button>
        </div>

        <div style={{ fontSize: '11px', color: '#555' }}>
          障害物: {obstacles.length}
          <span style={{ marginLeft: '8px', color: '#444' }}>
            ズーム: {(viewScale / getInitialScale() * 100).toFixed(0)}%
          </span>
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <button
            style={{ ...btn(), marginTop: 0, background: '#1a7a3a', fontSize: '13px', padding: '10px' }}
            onClick={() => onPlayWithMap(obstacles, customNodes ? renumberNodes(customNodes) : null, connectionRadius)}
          >
            ▶ このマップで遊ぶ
          </button>
          <button style={{ ...btn(), marginTop: 0 }} onClick={onClose}>← ロビーに戻る</button>
        </div>
      </div>

      {/* ── Canvas ── */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          <canvas
            ref={canvasRef}
            style={{
              cursor: panDragRef.current
                ? 'grabbing'
                : tool === 'select' ? 'default'
                : tool === 'node-delete' ? 'not-allowed'
                : 'crosshair',
              display: 'block',
              userSelect: 'none',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onWheel={handleWheel}
            onContextMenu={e => e.preventDefault()}
          />
        </div>
        <div style={{ fontSize: '11px', color: '#888', padding: '5px 10px', background: '#161616', borderTop: '1px solid #2a2a2a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {status}
          <span style={{ float: 'right', color: '#444' }}>右ドラッグ: 移動 | ホイール: ズーム</span>
        </div>
      </div>
    </div>
  );
};

export default MapEditor;
