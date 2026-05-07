import React, { useRef, useEffect, useState, useCallback } from 'react';
import { MapGenerator, ObstacleData } from '../model/MapGenerator';
import { LineSegment, createRectangleSegments } from '../model/LineSegment';
import { CalculatedConfig, MapConfig } from '../config/GameConfig';

interface MapEditorProps {
  onClose: () => void;
}

type Tool = 'rect' | 'line' | 'polygon' | 'select';

interface Pt { x: number; y: number }

const PADDING = 20;
const SIDEBAR_W = 240;
// Snap-to-close radius for polygon (game units)
const POLY_CLOSE_RADIUS = 20;

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
  const dx = seg.end.x - seg.start.x;
  const dy = seg.end.y - seg.start.y;
  const len2 = dx * dx + dy * dy;
  if (len2 === 0) return (px - seg.start.x) ** 2 + (py - seg.start.y) ** 2;
  const t = Math.max(0, Math.min(1, ((px - seg.start.x) * dx + (py - seg.start.y) * dy) / len2));
  return (px - (seg.start.x + t * dx)) ** 2 + (py - (seg.start.y + t * dy)) ** 2;
}

function dist2(a: Pt, b: Pt) { return (a.x - b.x) ** 2 + (a.y - b.y) ** 2; }

const TOOL_INFO: Record<Tool, string> = {
  rect: '矩形: ドラッグで長方形の壁',
  line: 'ライン: ドラッグで斜め含む任意の線分',
  polygon: 'ポリゴン: クリックで頂点追加 / 始点付近クリックまたはEnterで確定 / Escでキャンセル',
  select: '選択: クリックで選択 / Deleteで削除',
};

const MapEditor: React.FC<MapEditorProps> = ({ onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [obstacles, setObstacles] = useState<ObstacleData[]>([]);
  const [tool, setTool] = useState<Tool>('rect');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [seed, setSeed] = useState(() => MapGenerator.generateSeed());
  const nextIdRef = useRef(10000);

  // Drag-based tools (rect, line)
  const dragStart = useRef<Pt | null>(null);
  const [dragEnd, setDragEnd] = useState<Pt | null>(null);

  // Polygon tool state
  const [polyPoints, setPolyPoints] = useState<Pt[]>([]);
  const [polyCursor, setPolyCursor] = useState<Pt | null>(null);

  const [status, setStatus] = useState(TOOL_INFO['rect']);

  const mapSize = CalculatedConfig.MapSize;
  const nodeSpacing = MapConfig.NodeSpacing;
  const nodesInGrid = MapConfig.NodesInGridSize;

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

    // Grid dots
    ctx.fillStyle = '#2a2a2a';
    for (let i = 0; i < nodesInGrid; i++) {
      for (let j = 0; j < nodesInGrid; j++) {
        const { cx, cy } = g2c(i * nodeSpacing, j * nodeSpacing, scale);
        ctx.beginPath();
        ctx.arc(cx, cy, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Placed obstacles
    for (const obs of obstacles) {
      const sel = obs.id === selectedId;
      ctx.strokeStyle = sel ? '#ffdd00' : '#44aaff';
      ctx.lineWidth = sel ? 2.5 : 1.5;
      for (const seg of obs.segments) {
        const s = g2c(seg.start.x, seg.start.y, scale);
        const e = g2c(seg.end.x, seg.end.y, scale);
        ctx.beginPath();
        ctx.moveTo(s.cx, s.cy);
        ctx.lineTo(e.cx, e.cy);
        ctx.stroke();
      }
    }

    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = '#ff8800';
    ctx.lineWidth = 1.5;

    // Rect preview
    if ((tool === 'rect') && dragStart.current && dragEnd) {
      const s = g2c(dragStart.current.x, dragStart.current.y, scale);
      const e = g2c(dragEnd.x, dragEnd.y, scale);
      ctx.strokeRect(s.cx, s.cy, e.cx - s.cx, e.cy - s.cy);
    }

    // Line preview
    if (tool === 'line' && dragStart.current && dragEnd) {
      const s = g2c(dragStart.current.x, dragStart.current.y, scale);
      const e = g2c(dragEnd.x, dragEnd.y, scale);
      ctx.beginPath();
      ctx.moveTo(s.cx, s.cy);
      ctx.lineTo(e.cx, e.cy);
      ctx.stroke();
    }

    ctx.setLineDash([]);

    // Polygon preview
    if (tool === 'polygon' && polyPoints.length > 0) {
      // Completed edges
      ctx.strokeStyle = '#ff8800';
      ctx.lineWidth = 1.5;
      for (let i = 1; i < polyPoints.length; i++) {
        const a = g2c(polyPoints[i - 1].x, polyPoints[i - 1].y, scale);
        const b = g2c(polyPoints[i].x, polyPoints[i].y, scale);
        ctx.beginPath();
        ctx.moveTo(a.cx, a.cy);
        ctx.lineTo(b.cx, b.cy);
        ctx.stroke();
      }

      // Dashed preview edge to cursor
      if (polyCursor) {
        const last = polyPoints[polyPoints.length - 1];
        const a = g2c(last.x, last.y, scale);
        const b = g2c(polyCursor.x, polyCursor.y, scale);
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(a.cx, a.cy);
        ctx.lineTo(b.cx, b.cy);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Vertex dots
      for (const pt of polyPoints) {
        const { cx, cy } = g2c(pt.x, pt.y, scale);
        ctx.fillStyle = '#ff8800';
        ctx.beginPath();
        ctx.arc(cx, cy, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Snap indicator on first point
      if (polyPoints.length >= 3 && polyCursor) {
        const closeEnough = dist2(polyCursor, polyPoints[0]) < POLY_CLOSE_RADIUS ** 2;
        const { cx, cy } = g2c(polyPoints[0].x, polyPoints[0].y, scale);
        ctx.strokeStyle = closeEnough ? '#00ff88' : '#ff8800';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, 7, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  }, [obstacles, selectedId, tool, dragEnd, polyPoints, polyCursor, mapSize, nodesInGrid, nodeSpacing]);

  // ── Helpers ───────────────────────────────────────────────────────────────
  const getGamePos = useCallback((e: React.MouseEvent<HTMLCanvasElement>): Pt => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return c2g(e.clientX - rect.left, e.clientY - rect.top, getScale());
  }, []);

  const commitPolygon = useCallback((points: Pt[]) => {
    if (points.length < 2) return;
    const segs: LineSegment[] = [];
    for (let i = 0; i < points.length; i++) {
      const a = points[i];
      const b = points[(i + 1) % points.length];
      segs.push(new LineSegment(a.x, a.y, b.x, b.y));
    }
    setObstacles(prev => [...prev, { id: nextIdRef.current++, segments: segs }]);
    setPolyPoints([]);
    setPolyCursor(null);
  }, []);

  const cancelPolygon = useCallback(() => {
    setPolyPoints([]);
    setPolyCursor(null);
  }, []);

  // ── Mouse events ──────────────────────────────────────────────────────────
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (e.button !== 0) return;
    const pos = getGamePos(e);

    if (tool === 'rect' || tool === 'line') {
      dragStart.current = pos;
      setDragEnd(null);
      return;
    }

    if (tool === 'select') {
      const hitDist2 = (8 / getScale()) ** 2;
      let found: number | null = null;
      outer: for (const obs of obstacles) {
        for (const seg of obs.segments) {
          if (ptSegDist2(pos.x, pos.y, seg) < hitDist2) { found = obs.id; break outer; }
        }
      }
      setSelectedId(found);
      return;
    }

    // polygon
    setPolyPoints(prev => {
      if (prev.length >= 3 && dist2(pos, prev[0]) < POLY_CLOSE_RADIUS ** 2) {
        commitPolygon(prev);
        return [];
      }
      return [...prev, pos];
    });
  }, [tool, obstacles, getGamePos, commitPolygon]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const pos = getGamePos(e);

    if ((tool === 'rect' || tool === 'line') && dragStart.current) {
      setDragEnd(pos);
      return;
    }

    if (tool === 'polygon') {
      setPolyCursor(pos);
    }
  }, [tool, getGamePos]);

  const handleMouseUp = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dragStart.current) return;
    const pos = getGamePos(e);

    if (tool === 'rect') {
      const x1 = Math.min(dragStart.current.x, pos.x);
      const y1 = Math.min(dragStart.current.y, pos.y);
      const x2 = Math.max(dragStart.current.x, pos.x);
      const y2 = Math.max(dragStart.current.y, pos.y);
      if (x2 - x1 > 4 && y2 - y1 > 4) {
        const segs = createRectangleSegments(x1, y1, x2 - x1, y2 - y1);
        setObstacles(prev => [...prev, { id: nextIdRef.current++, segments: segs }]);
      }
    } else if (tool === 'line') {
      const d2 = dist2(dragStart.current, pos);
      if (d2 > 16) {
        const seg = new LineSegment(dragStart.current.x, dragStart.current.y, pos.x, pos.y);
        setObstacles(prev => [...prev, { id: nextIdRef.current++, segments: [seg] }]);
      }
    }

    dragStart.current = null;
    setDragEnd(null);
  }, [tool, getGamePos]);

  const handleMouseLeave = useCallback(() => {
    dragStart.current = null;
    setDragEnd(null);
    setPolyCursor(null);
  }, []);

  // ── Keyboard ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (selectedId !== null) {
          setObstacles(prev => prev.filter(o => o.id !== selectedId));
          setSelectedId(null);
        }
      }
      if (e.key === 'Enter' && polyPoints.length >= 2) {
        commitPolygon(polyPoints);
      }
      if (e.key === 'Escape') {
        cancelPolygon();
        dragStart.current = null;
        setDragEnd(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedId, polyPoints, commitPolygon, cancelPolygon]);

  // ── Actions ───────────────────────────────────────────────────────────────
  const selectTool = useCallback((t: Tool) => {
    setTool(t);
    cancelPolygon();
    dragStart.current = null;
    setDragEnd(null);
    setStatus(TOOL_INFO[t]);
  }, [cancelPolygon]);

  const handleGenerate = useCallback(() => {
    const result = MapGenerator.generateComplexMap(seed || undefined);
    setObstacles(result.obstacles);
    setSelectedId(null);
    cancelPolygon();
    setSeed(result.seed);
    nextIdRef.current = Math.max(...result.obstacles.map(o => o.id)) + 1;
    setStatus(`BSP生成完了 (seed: ${result.seed})`);
  }, [seed, cancelPolygon]);

  const handleExport = useCallback(() => {
    const data = obstacles.map(obs => ({
      id: obs.id,
      segments: obs.segments.map(seg => ({
        start: { x: Math.round(seg.start.x), y: Math.round(seg.start.y) },
        end: { x: Math.round(seg.end.x), y: Math.round(seg.end.y) },
      })),
    }));
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `map_${seed || 'custom'}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setStatus(`エクスポート完了 (${data.length} 障害物)`);
  }, [obstacles, seed]);

  const handleImport = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const json = JSON.parse(ev.target?.result as string);
        const { obstacles: imp } = MapGenerator.importObstacles(json);
        setObstacles(imp);
        setSelectedId(null);
        nextIdRef.current = Math.max(...imp.map(o => o.id), 0) + 1;
        setStatus(`インポート完了 (${imp.length} 障害物)`);
      } catch {
        setStatus('インポート失敗: 無効なJSONフォーマット');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }, []);

  const handleClear = useCallback(() => {
    setObstacles([]);
    setSelectedId(null);
    cancelPolygon();
    nextIdRef.current = 10000;
    setStatus('クリア完了');
  }, [cancelPolygon]);

  // ── Styles ────────────────────────────────────────────────────────────────
  const btn = (active?: boolean, danger?: boolean): React.CSSProperties => ({
    padding: '8px 10px',
    fontSize: '13px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    background: danger ? '#c0392b' : active ? '#2196F3' : '#333',
    color: '#fff',
    width: '100%',
    textAlign: 'left',
    marginTop: '4px',
  });

  const inputStyle: React.CSSProperties = {
    padding: '6px 8px',
    fontSize: '12px',
    background: '#222',
    border: '1px solid #444',
    borderRadius: '4px',
    color: '#eee',
    width: '100%',
    fontFamily: 'monospace',
    boxSizing: 'border-box',
  };

  const sectionTitle: React.CSSProperties = {
    fontSize: '11px',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '2px',
  };

  const hr: React.CSSProperties = { border: 'none', borderTop: '1px solid #333', margin: 0 };

  const cursorStyle = tool === 'select' ? 'default' : 'crosshair';

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', background: '#111', color: '#eee', fontFamily: 'monospace', overflow: 'hidden' }}>
      {/* Sidebar */}
      <div style={{ width: SIDEBAR_W, flexShrink: 0, background: '#1a1a1a', borderRight: '1px solid #333', display: 'flex', flexDirection: 'column', padding: '12px', gap: '10px', overflowY: 'auto' }}>

        <div>
          <div style={sectionTitle}>描画ツール</div>
          <button style={{ ...btn(tool === 'rect'), marginTop: 0 }} onClick={() => selectTool('rect')}>▭ 矩形</button>
          <button style={btn(tool === 'line')} onClick={() => selectTool('line')}>╱ ライン</button>
          <button style={btn(tool === 'polygon')} onClick={() => selectTool('polygon')}>⬡ ポリゴン</button>
          <button style={btn(tool === 'select')} onClick={() => selectTool('select')}>↖ 選択</button>
        </div>

        {tool === 'polygon' && polyPoints.length > 0 && (
          <div style={{ fontSize: '12px', color: '#fa0' }}>
            頂点: {polyPoints.length}個<br />
            <button style={{ ...btn(), fontSize: '12px', padding: '4px 8px', marginTop: '4px' }} onClick={() => commitPolygon(polyPoints)} disabled={polyPoints.length < 2}>
              Enter: 確定
            </button>
            <button style={{ ...btn(false, true), fontSize: '12px', padding: '4px 8px' }} onClick={cancelPolygon}>
              Esc: キャンセル
            </button>
          </div>
        )}

        {tool === 'select' && selectedId !== null && (
          <button style={btn(false, true)} onClick={() => { setObstacles(prev => prev.filter(o => o.id !== selectedId)); setSelectedId(null); }}>
            ✕ 選択を削除 (Del)
          </button>
        )}

        <hr style={hr} />

        <div>
          <div style={sectionTitle}>BSP 生成</div>
          <div style={{ display: 'flex', gap: '4px' }}>
            <input style={{ ...inputStyle, flex: 1 }} value={seed} onChange={e => setSeed(e.target.value)} placeholder="シード値" />
            <button style={{ ...btn(), width: 'auto', padding: '6px 8px', flexShrink: 0, marginTop: 0 }} onClick={() => setSeed(MapGenerator.generateSeed())} title="ランダム">🎲</button>
          </div>
          <button style={btn()} onClick={handleGenerate}>⚙ 生成</button>
        </div>

        <hr style={hr} />

        <div>
          <div style={sectionTitle}>ファイル</div>
          <button style={{ ...btn(), marginTop: 0 }} onClick={handleExport} disabled={obstacles.length === 0}>↓ JSONエクスポート</button>
          <label style={{ ...btn(), display: 'block' }}>
            ↑ JSONインポート
            <input type="file" accept=".json" onChange={handleImport} style={{ display: 'none' }} />
          </label>
        </div>

        <hr style={hr} />

        <div>
          <div style={sectionTitle}>編集</div>
          <button style={{ ...btn(false, true), marginTop: 0 }} onClick={handleClear} disabled={obstacles.length === 0}>🗑 全クリア</button>
        </div>

        <div style={{ fontSize: '12px', color: '#666' }}>障害物数: {obstacles.length}</div>

        <div style={{ marginTop: 'auto' }}>
          <button style={{ ...btn(), marginTop: 0 }} onClick={onClose}>← ロビーに戻る</button>
        </div>
      </div>

      {/* Canvas area */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <canvas
            ref={canvasRef}
            style={{ cursor: cursorStyle, display: 'block' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div style={{ fontSize: '11px', color: '#aaa', padding: '6px 8px', background: '#1a1a1a', borderTop: '1px solid #333' }}>{status}</div>
      </div>
    </div>
  );
};

export default MapEditor;
