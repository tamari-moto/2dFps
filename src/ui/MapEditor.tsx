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

interface Pt { x: number; y: number }

const PADDING = 20;
const SIDEBAR_W = 256;
const POLY_CLOSE_RADIUS = 20;
const NODE_HIT_RADIUS = 12; // canvas px for clicking nodes
const DEFAULT_CONNECTION_RADIUS = Math.round(MapConfig.NodeSpacing * 1.1); // 33

function getScale(): number {
  const maxW = window.innerWidth - SIDEBAR_W - PADDING * 2 - 16;
  const maxH = window.innerHeight - PADDING * 2 - 16;
  return Math.min(maxW / CalculatedConfig.MapSize, maxH / CalculatedConfig.MapSize);
}
function g2c(x: number, y: number, scale: number) {
  return { cx: x * scale + PADDING, cy: y * scale + PADDING };
}
function c2g(cx: number, cy: number, scale: number): Pt {
  return { x: (cx - PADDING) / scale, y: (cy - PADDING) / scale };
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
  rect:        '矩形: ドラッグで長方形の壁',
  line:        'ライン: ドラッグで任意角度の線分',
  polygon:     'ポリゴン: クリックで頂点追加 / 始点付近or Enter で確定 / Esc でキャンセル',
  select:      '選択: クリックで障害物選択 / Delete で削除',
  'node-add':  'ノード追加: クリックでノードを配置',
  'node-move': 'ノード移動: ノードをドラッグで移動',
  'node-delete': 'ノード削除: クリックでノードを削除',
};

const MapEditor: React.FC<MapEditorProps> = ({ onClose, onPlayWithMap }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [obstacles, setObstacles] = useState<ObstacleData[]>([]);
  const [tool, setTool] = useState<Tool>('rect');
  const [selectedId, setSelectedId] = useState<number | null>(null);   // obstacle id
  const [seed, setSeed] = useState(() => MapGenerator.generateSeed());
  const nextObsIdRef = useRef(10000);

  // --- Obstacle draw state ---
  const dragStart = useRef<Pt | null>(null);
  const [dragEnd, setDragEnd] = useState<Pt | null>(null);
  const [polyPoints, setPolyPoints] = useState<Pt[]>([]);
  const [polyCursor, setPolyCursor] = useState<Pt | null>(null);

  // --- Node state ---
  const [customNodes, setCustomNodes] = useState<CustomNodeData[] | null>(null); // null = default grid
  const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);
  const [connectionRadius, setConnectionRadius] = useState(DEFAULT_CONNECTION_RADIUS);
  const nodeDragRef = useRef<{ nodeId: number } | null>(null);
  const nextNodeIdRef = useRef(100000); // large to avoid collision before renumber

  // --- Image import ---
  const [imgEl, setImgEl] = useState<HTMLImageElement | null>(null);
  const [showImg, setShowImg] = useState(true);
  const [imgOpts, setImgOpts] = useState<ImageMapOptions>(DEFAULT_IMAGE_OPTIONS);
  const [converting, setConverting] = useState(false);
  const [imgFileName, setImgFileName] = useState('');

  const [status, setStatus] = useState(TOOL_HELP['rect']);

  const mapSize = CalculatedConfig.MapSize;
  const nodeSpacing = MapConfig.NodeSpacing;
  const nodesInGrid = MapConfig.NodesInGridSize;

  const isNodeTool = (t: Tool): t is NodeTool => t.startsWith('node-');

  // ── Render ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const scale = getScale();
    const sz = mapSize * scale + PADDING * 2;
    canvas.width = sz;
    canvas.height = sz;

    ctx.fillStyle = '#0d0d0d';
    ctx.fillRect(0, 0, sz, sz);

    // Background image
    if (imgEl && showImg) {
      ctx.globalAlpha = 0.35;
      const iScale = Math.min(mapSize / imgEl.width, mapSize / imgEl.height);
      ctx.drawImage(imgEl, PADDING, PADDING, imgEl.width * iScale * scale, imgEl.height * iScale * scale);
      ctx.globalAlpha = 1;
    }

    const nodeEditMode = isNodeTool(tool);
    const activeNodes = customNodes;

    if (nodeEditMode && activeNodes) {
      // Node edit mode: draw nodes as interactive circles
      for (const n of activeNodes) {
        const { cx, cy } = g2c(n.x, n.y, scale);
        const isSel = n.id === selectedNodeId;
        ctx.fillStyle = isSel ? '#ffdd00' : '#44aaff';
        ctx.beginPath();
        ctx.arc(cx, cy, isSel ? 6 : 4, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      // Default: draw grid dots (regardless of whether customNodes is set)
      if (activeNodes) {
        ctx.fillStyle = '#3a5a7a';
        for (const n of activeNodes) {
          const { cx, cy } = g2c(n.x, n.y, scale);
          ctx.beginPath();
          ctx.arc(cx, cy, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      } else {
        ctx.fillStyle = '#2a2a2a';
        for (let i = 0; i < nodesInGrid; i++) {
          for (let j = 0; j < nodesInGrid; j++) {
            const { cx, cy } = g2c(i * nodeSpacing, j * nodeSpacing, scale);
            ctx.beginPath();
            ctx.arc(cx, cy, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }

    // Obstacles
    for (const obs of obstacles) {
      const sel = obs.id === selectedId;
      ctx.strokeStyle = sel ? '#ffdd00' : '#44aaff';
      ctx.lineWidth = sel ? 2.5 : 1.5;
      for (const seg of obs.segments) {
        const s = g2c(seg.start.x, seg.start.y, scale);
        const e = g2c(seg.end.x, seg.end.y, scale);
        ctx.beginPath(); ctx.moveTo(s.cx, s.cy); ctx.lineTo(e.cx, e.cy); ctx.stroke();
      }
    }

    // Drag previews (rect / line)
    if (!isNodeTool(tool) && dragStart.current && dragEnd) {
      ctx.strokeStyle = '#ff8800'; ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 5]);
      const s = g2c(dragStart.current.x, dragStart.current.y, scale);
      const e = g2c(dragEnd.x, dragEnd.y, scale);
      if (tool === 'rect') {
        ctx.strokeRect(s.cx, s.cy, e.cx - s.cx, e.cy - s.cy);
      } else if (tool === 'line') {
        ctx.beginPath(); ctx.moveTo(s.cx, s.cy); ctx.lineTo(e.cx, e.cy); ctx.stroke();
      }
      ctx.setLineDash([]);
    }

    // Polygon preview
    if (tool === 'polygon' && polyPoints.length > 0) {
      ctx.strokeStyle = '#ff8800'; ctx.lineWidth = 1.5;
      for (let i = 1; i < polyPoints.length; i++) {
        const a = g2c(polyPoints[i - 1].x, polyPoints[i - 1].y, scale);
        const b = g2c(polyPoints[i].x, polyPoints[i].y, scale);
        ctx.beginPath(); ctx.moveTo(a.cx, a.cy); ctx.lineTo(b.cx, b.cy); ctx.stroke();
      }
      if (polyCursor) {
        const last = polyPoints[polyPoints.length - 1];
        const a = g2c(last.x, last.y, scale);
        const b = g2c(polyCursor.x, polyCursor.y, scale);
        ctx.setLineDash([5, 5]);
        ctx.beginPath(); ctx.moveTo(a.cx, a.cy); ctx.lineTo(b.cx, b.cy); ctx.stroke();
        ctx.setLineDash([]);
      }
      for (const pt of polyPoints) {
        const { cx, cy } = g2c(pt.x, pt.y, scale);
        ctx.fillStyle = '#ff8800';
        ctx.beginPath(); ctx.arc(cx, cy, 4, 0, Math.PI * 2); ctx.fill();
      }
      if (polyPoints.length >= 3 && polyCursor) {
        const snap = dist2(polyCursor, polyPoints[0]) < POLY_CLOSE_RADIUS ** 2;
        const { cx, cy } = g2c(polyPoints[0].x, polyPoints[0].y, scale);
        ctx.strokeStyle = snap ? '#00ff88' : '#ff8800'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, 7, 0, Math.PI * 2); ctx.stroke();
      }
    }

    // Node drag preview
    if (tool === 'node-move' && nodeDragRef.current && dragEnd && activeNodes) {
      const { cx, cy } = g2c(dragEnd.x, dragEnd.y, scale);
      ctx.strokeStyle = '#00ff88'; ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.arc(cx, cy, 5, 0, Math.PI * 2); ctx.stroke();
      ctx.setLineDash([]);
    }
  }, [obstacles, selectedId, tool, dragEnd, polyPoints, polyCursor, customNodes, selectedNodeId, imgEl, showImg, mapSize, nodesInGrid, nodeSpacing]);

  // ── Helpers ───────────────────────────────────────────────────────────────
  const getGamePos = useCallback((e: React.MouseEvent<HTMLCanvasElement>): Pt => {
    const r = canvasRef.current!.getBoundingClientRect();
    return c2g(e.clientX - r.left, e.clientY - r.top, getScale());
  }, []);

  const ensureCustomNodes = useCallback((): CustomNodeData[] => {
    if (customNodes) return customNodes;
    const grid = makeDefaultGrid();
    setCustomNodes(grid);
    nextNodeIdRef.current = grid.length;
    return grid;
  }, [customNodes]);

  const commitPolygon = useCallback((pts: Pt[]) => {
    if (pts.length < 2) return;
    const segs: LineSegment[] = [];
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length];
      segs.push(new LineSegment(a.x, a.y, b.x, b.y));
    }
    setObstacles(prev => [...prev, { id: nextObsIdRef.current++, segments: segs }]);
    setPolyPoints([]); setPolyCursor(null);
  }, []);

  const cancelPolygon = useCallback(() => { setPolyPoints([]); setPolyCursor(null); }, []);

  // ── Mouse ────────────────────────────────────────────────────────────────
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (e.button !== 0) return;
    const pos = getGamePos(e);

    if (tool === 'node-add') {
      const nodes = ensureCustomNodes();
      const newNode: CustomNodeData = { id: nextNodeIdRef.current++, x: pos.x, y: pos.y };
      setCustomNodes([...nodes, newNode]);
      setSelectedNodeId(newNode.id);
      return;
    }

    if (tool === 'node-move' || tool === 'node-delete') {
      const nodes = ensureCustomNodes();
      const hitRadius = NODE_HIT_RADIUS / getScale();
      const hit = findNodeNear(pos, nodes, hitRadius);
      if (!hit) return;

      if (tool === 'node-delete') {
        setCustomNodes(nodes.filter(n => n.id !== hit.id));
        if (selectedNodeId === hit.id) setSelectedNodeId(null);
        return;
      }

      // node-move: start drag
      setSelectedNodeId(hit.id);
      nodeDragRef.current = { nodeId: hit.id };
      dragStart.current = pos;
      setDragEnd(pos);
      return;
    }

    if (tool === 'rect' || tool === 'line') {
      dragStart.current = pos; setDragEnd(null); return;
    }
    if (tool === 'select') {
      const hitD2 = (8 / getScale()) ** 2;
      let found: number | null = null;
      outer: for (const obs of obstacles) {
        for (const seg of obs.segments) {
          if (ptSegDist2(pos.x, pos.y, seg) < hitD2) { found = obs.id; break outer; }
        }
      }
      setSelectedId(found); return;
    }
    // polygon
    setPolyPoints(prev => {
      if (prev.length >= 3 && dist2(pos, prev[0]) < POLY_CLOSE_RADIUS ** 2) {
        commitPolygon(prev); return [];
      }
      return [...prev, pos];
    });
  }, [tool, obstacles, ensureCustomNodes, selectedNodeId, getGamePos, commitPolygon]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const pos = getGamePos(e);
    if (tool === 'node-move' && nodeDragRef.current) { setDragEnd(pos); return; }
    if ((tool === 'rect' || tool === 'line') && dragStart.current) { setDragEnd(pos); return; }
    if (tool === 'polygon') setPolyCursor(pos);
  }, [tool, getGamePos]);

  const handleMouseUp = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const pos = getGamePos(e);

    if (tool === 'node-move' && nodeDragRef.current) {
      const nodeId = nodeDragRef.current.nodeId;
      setCustomNodes(prev => prev
        ? prev.map(n => n.id === nodeId ? { ...n, x: pos.x, y: pos.y } : n)
        : null
      );
      nodeDragRef.current = null;
      dragStart.current = null; setDragEnd(null);
      return;
    }

    if (!dragStart.current) return;

    if (tool === 'rect') {
      const x1 = Math.min(dragStart.current.x, pos.x), y1 = Math.min(dragStart.current.y, pos.y);
      const x2 = Math.max(dragStart.current.x, pos.x), y2 = Math.max(dragStart.current.y, pos.y);
      if (x2 - x1 > 4 && y2 - y1 > 4) {
        const segs = createRectangleSegments(x1, y1, x2 - x1, y2 - y1);
        setObstacles(prev => [...prev, { id: nextObsIdRef.current++, segments: segs }]);
      }
    } else if (tool === 'line') {
      if (dist2(dragStart.current, pos) > 16) {
        const seg = new LineSegment(dragStart.current.x, dragStart.current.y, pos.x, pos.y);
        setObstacles(prev => [...prev, { id: nextObsIdRef.current++, segments: [seg] }]);
      }
    }
    dragStart.current = null; setDragEnd(null);
  }, [tool, getGamePos]);

  const handleMouseLeave = useCallback(() => {
    if (tool !== 'node-move') { dragStart.current = null; setDragEnd(null); }
    setPolyCursor(null);
  }, [tool]);

  // ── Keyboard ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (isNodeTool(tool) && selectedNodeId !== null) {
          setCustomNodes(prev => prev ? prev.filter(n => n.id !== selectedNodeId) : null);
          setSelectedNodeId(null);
        } else if (selectedId !== null) {
          setObstacles(p => p.filter(o => o.id !== selectedId)); setSelectedId(null);
        }
      }
      if (e.key === 'Enter' && polyPoints.length >= 2) commitPolygon(polyPoints);
      if (e.key === 'Escape') {
        cancelPolygon(); nodeDragRef.current = null; dragStart.current = null; setDragEnd(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [tool, selectedId, selectedNodeId, polyPoints, commitPolygon, cancelPolygon]);

  // ── Tool switch ───────────────────────────────────────────────────────────
  const selectTool = useCallback((t: Tool) => {
    setTool(t); cancelPolygon(); nodeDragRef.current = null; dragStart.current = null; setDragEnd(null);
    setStatus(TOOL_HELP[t]);
    // node ツールに入ったらグリッドを実体化
    if (t.startsWith('node-') && !customNodes) {
      const grid = makeDefaultGrid();
      setCustomNodes(grid);
      nextNodeIdRef.current = grid.length;
    }
  }, [cancelPolygon, customNodes]);

  // ── BSP ───────────────────────────────────────────────────────────────────
  const handleGenerate = useCallback(() => {
    const result = MapGenerator.generateComplexMap(seed || undefined);
    setObstacles(result.obstacles);
    setSelectedId(null); cancelPolygon();
    setSeed(result.seed);
    nextObsIdRef.current = Math.max(...result.obstacles.map(o => o.id)) + 1;
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

        // obstacles（後方互換: トップレベル配列 or .obstacles フィールド）
        const rawObs = Array.isArray(json) ? json : (json.obstacles ?? []);
        const { obstacles: imp } = MapGenerator.importObstacles(rawObs);
        setObstacles(imp);
        setSelectedId(null);
        nextObsIdRef.current = Math.max(...imp.map((o: ObstacleData) => o.id), 0) + 1;

        // nodes
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
    setObstacles([]); setSelectedId(null); cancelPolygon();
    nextObsIdRef.current = 10000; setStatus('障害物をクリア');
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
          <button style={btn(false, true)} onClick={() => { setObstacles(p => p.filter(o => o.id !== selectedId)); setSelectedId(null); }}>
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

          {isNodeTool(tool) && selectedNodeId !== null && (
            <button style={btn(false, true)} onClick={() => {
              setCustomNodes(prev => prev ? prev.filter(n => n.id !== selectedNodeId) : null);
              setSelectedNodeId(null);
            }}>✕ 選択ノードを削除 (Del)</button>
          )}

          <div style={{ marginTop: '6px' }}>
            {sliderRow('接続半径 (px)', connectionRadius, 10, 200, setConnectionRadius)}
          </div>

          <div style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>
            ノード数: {customNodes ? customNodes.length : `${nodesInGrid ** 2} (デフォルト)`}
          </div>

          <button style={{ ...btn(), marginTop: '4px', fontSize: '11px' }}
            onClick={() => { const g = makeDefaultGrid(); setCustomNodes(g); nextNodeIdRef.current = g.length; setStatus('デフォルトグリッドにリセット'); }}>
            ↺ デフォルトグリッドに戻す
          </button>
          {customNodes && (
            <button style={{ ...btn(false, true), fontSize: '11px' }}
              onClick={() => { setCustomNodes(null); setStatus('ノードをデフォルトにリセット'); }}>
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

        <div style={{ fontSize: '11px', color: '#555' }}>障害物: {obstacles.length}</div>

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
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <canvas
            ref={canvasRef}
            style={{ cursor: tool === 'select' ? 'default' : tool === 'node-delete' ? 'not-allowed' : 'crosshair', display: 'block' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div style={{ fontSize: '11px', color: '#888', padding: '5px 10px', background: '#161616', borderTop: '1px solid #2a2a2a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {status}
        </div>
      </div>
    </div>
  );
};

export default MapEditor;
