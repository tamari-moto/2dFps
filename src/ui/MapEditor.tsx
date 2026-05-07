import React, { useRef, useEffect, useState, useCallback } from 'react';
import { MapGenerator, ObstacleData } from '../model/MapGenerator';
import { LineSegment, createRectangleSegments } from '../model/LineSegment';
import { CalculatedConfig, MapConfig } from '../config/GameConfig';
import { imageToObstacles, DEFAULT_IMAGE_OPTIONS, type ImageMapOptions } from './imageToMap';

interface MapEditorProps {
  onClose: () => void;
}

type Tool = 'rect' | 'line' | 'polygon' | 'select';

interface Pt { x: number; y: number }

const PADDING = 20;
const SIDEBAR_W = 256;
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
  const dx = seg.end.x - seg.start.x, dy = seg.end.y - seg.start.y;
  const len2 = dx * dx + dy * dy;
  if (len2 === 0) return (px - seg.start.x) ** 2 + (py - seg.start.y) ** 2;
  const t = Math.max(0, Math.min(1, ((px - seg.start.x) * dx + (py - seg.start.y) * dy) / len2));
  return (px - (seg.start.x + t * dx)) ** 2 + (py - (seg.start.y + t * dy)) ** 2;
}

function dist2(a: Pt, b: Pt) { return (a.x - b.x) ** 2 + (a.y - b.y) ** 2; }

const TOOL_HELP: Record<Tool, string> = {
  rect:    '矩形: ドラッグで長方形の壁',
  line:    'ライン: ドラッグで任意角度の線分',
  polygon: 'ポリゴン: クリックで頂点追加 / 始点付近クリックまたは Enter で確定 / Esc でキャンセル',
  select:  '選択: クリックで選択 / Delete で削除',
};

const MapEditor: React.FC<MapEditorProps> = ({ onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [obstacles, setObstacles] = useState<ObstacleData[]>([]);
  const [tool, setTool] = useState<Tool>('rect');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [seed, setSeed] = useState(() => MapGenerator.generateSeed());
  const nextIdRef = useRef(10000);

  // Drag-based tools
  const dragStart = useRef<Pt | null>(null);
  const [dragEnd, setDragEnd] = useState<Pt | null>(null);

  // Polygon
  const [polyPoints, setPolyPoints] = useState<Pt[]>([]);
  const [polyCursor, setPolyCursor] = useState<Pt | null>(null);

  // Image import
  const [imgEl, setImgEl] = useState<HTMLImageElement | null>(null);
  const [showImg, setShowImg] = useState(true);
  const [imgOpts, setImgOpts] = useState<ImageMapOptions>(DEFAULT_IMAGE_OPTIONS);
  const [converting, setConverting] = useState(false);
  const [imgFileName, setImgFileName] = useState('');

  const [status, setStatus] = useState(TOOL_HELP['rect']);

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

    // Optional background image
    if (imgEl && showImg) {
      ctx.globalAlpha = 0.35;
      const iScale = Math.min(mapSize / imgEl.width, mapSize / imgEl.height);
      ctx.drawImage(imgEl, PADDING, PADDING, imgEl.width * iScale * scale, imgEl.height * iScale * scale);
      ctx.globalAlpha = 1;
    }

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

    // Rect / line drag preview
    if (dragStart.current && dragEnd) {
      ctx.strokeStyle = '#ff8800';
      ctx.lineWidth = 1.5;
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
      ctx.strokeStyle = '#ff8800';
      ctx.lineWidth = 1.5;
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
        ctx.strokeStyle = snap ? '#00ff88' : '#ff8800';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, 7, 0, Math.PI * 2); ctx.stroke();
      }
    }
  }, [obstacles, selectedId, tool, dragEnd, polyPoints, polyCursor, imgEl, showImg, mapSize, nodesInGrid, nodeSpacing]);

  // ── Helpers ───────────────────────────────────────────────────────────────
  const getGamePos = useCallback((e: React.MouseEvent<HTMLCanvasElement>): Pt => {
    const r = canvasRef.current!.getBoundingClientRect();
    return c2g(e.clientX - r.left, e.clientY - r.top, getScale());
  }, []);

  const commitPolygon = useCallback((pts: Pt[]) => {
    if (pts.length < 2) return;
    const segs: LineSegment[] = [];
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length];
      segs.push(new LineSegment(a.x, a.y, b.x, b.y));
    }
    setObstacles(prev => [...prev, { id: nextIdRef.current++, segments: segs }]);
    setPolyPoints([]);
    setPolyCursor(null);
  }, []);

  const cancelPolygon = useCallback(() => { setPolyPoints([]); setPolyCursor(null); }, []);

  // ── Mouse ────────────────────────────────────────────────────────────────
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (e.button !== 0) return;
    const pos = getGamePos(e);

    if (tool === 'rect' || tool === 'line') {
      dragStart.current = pos;
      setDragEnd(null);
      return;
    }
    if (tool === 'select') {
      const hitD2 = (8 / getScale()) ** 2;
      let found: number | null = null;
      outer: for (const obs of obstacles) {
        for (const seg of obs.segments) {
          if (ptSegDist2(pos.x, pos.y, seg) < hitD2) { found = obs.id; break outer; }
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
    if ((tool === 'rect' || tool === 'line') && dragStart.current) { setDragEnd(pos); return; }
    if (tool === 'polygon') setPolyCursor(pos);
  }, [tool, getGamePos]);

  const handleMouseUp = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dragStart.current) return;
    const pos = getGamePos(e);
    if (tool === 'rect') {
      const x1 = Math.min(dragStart.current.x, pos.x), y1 = Math.min(dragStart.current.y, pos.y);
      const x2 = Math.max(dragStart.current.x, pos.x), y2 = Math.max(dragStart.current.y, pos.y);
      if (x2 - x1 > 4 && y2 - y1 > 4) {
        const segs = createRectangleSegments(x1, y1, x2 - x1, y2 - y1);
        setObstacles(prev => [...prev, { id: nextIdRef.current++, segments: segs }]);
      }
    } else if (tool === 'line') {
      if (dist2(dragStart.current, pos) > 16) {
        const seg = new LineSegment(dragStart.current.x, dragStart.current.y, pos.x, pos.y);
        setObstacles(prev => [...prev, { id: nextIdRef.current++, segments: [seg] }]);
      }
    }
    dragStart.current = null;
    setDragEnd(null);
  }, [tool, getGamePos]);

  const handleMouseLeave = useCallback(() => {
    dragStart.current = null; setDragEnd(null); setPolyCursor(null);
  }, []);

  // ── Keyboard ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (selectedId !== null) { setObstacles(p => p.filter(o => o.id !== selectedId)); setSelectedId(null); }
      }
      if (e.key === 'Enter' && polyPoints.length >= 2) commitPolygon(polyPoints);
      if (e.key === 'Escape') { cancelPolygon(); dragStart.current = null; setDragEnd(null); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedId, polyPoints, commitPolygon, cancelPolygon]);

  // ── Tool switch ───────────────────────────────────────────────────────────
  const selectTool = useCallback((t: Tool) => {
    setTool(t); cancelPolygon(); dragStart.current = null; setDragEnd(null); setStatus(TOOL_HELP[t]);
  }, [cancelPolygon]);

  // ── BSP generate ─────────────────────────────────────────────────────────
  const handleGenerate = useCallback(() => {
    const result = MapGenerator.generateComplexMap(seed || undefined);
    setObstacles(result.obstacles);
    setSelectedId(null); cancelPolygon();
    setSeed(result.seed);
    nextIdRef.current = Math.max(...result.obstacles.map(o => o.id)) + 1;
    setStatus(`BSP生成完了 (seed: ${result.seed})`);
  }, [seed, cancelPolygon]);

  // ── Image import ──────────────────────────────────────────────────────────
  const handleImageSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => { URL.revokeObjectURL(url); setImgEl(img); setImgFileName(file.name); setStatus(`画像を読み込みました: ${file.name}`); };
    img.src = url;
    e.target.value = '';
  }, []);

  const handleConvert = useCallback(async () => {
    if (!imgEl) return;
    setConverting(true);
    setStatus('変換中...');
    try {
      // Create a File-like blob from the already-loaded image
      const canvas = document.createElement('canvas');
      canvas.width = imgEl.naturalWidth; canvas.height = imgEl.naturalHeight;
      canvas.getContext('2d')!.drawImage(imgEl, 0, 0);
      const blob = await new Promise<Blob>((res) => canvas.toBlob(b => res(b!), 'image/png'));
      const file = new File([blob], 'img.png', { type: 'image/png' });

      const result = await imageToObstacles(file, mapSize, imgOpts, nextIdRef.current);
      setObstacles(prev => [...prev, ...result.obstacles]);
      nextIdRef.current = result.nextId;
      setStatus(`変換完了: ${result.chainCount} チェーン → ${result.segmentCount} 線分`);
    } catch (err) {
      setStatus(`変換エラー: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setConverting(false);
    }
  }, [imgEl, imgOpts, mapSize]);

  // ── JSON I/O ──────────────────────────────────────────────────────────────
  const handleExport = useCallback(() => {
    const data = obstacles.map(obs => ({
      id: obs.id,
      segments: obs.segments.map(s => ({
        start: { x: Math.round(s.start.x), y: Math.round(s.start.y) },
        end:   { x: Math.round(s.end.x),   y: Math.round(s.end.y) },
      })),
    }));
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `map_${seed || 'custom'}.json`; a.click();
    URL.revokeObjectURL(url);
    setStatus(`エクスポート完了 (${data.length} 障害物)`);
  }, [obstacles, seed]);

  const handleImportJson = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const json = JSON.parse(ev.target?.result as string);
        const { obstacles: imp } = MapGenerator.importObstacles(json);
        setObstacles(imp); setSelectedId(null);
        nextIdRef.current = Math.max(...imp.map(o => o.id), 0) + 1;
        setStatus(`インポート完了 (${imp.length} 障害物)`);
      } catch { setStatus('インポート失敗: 無効なJSONフォーマット'); }
    };
    reader.readAsText(file);
    e.target.value = '';
  }, []);

  const handleClear = useCallback(() => {
    setObstacles([]); setSelectedId(null); cancelPolygon();
    nextIdRef.current = 10000; setStatus('クリア完了');
  }, [cancelPolygon]);

  // ── Styles ────────────────────────────────────────────────────────────────
  const btn = (active?: boolean, danger?: boolean): React.CSSProperties => ({
    padding: '7px 10px', fontSize: '12px', fontWeight: 'bold', border: 'none',
    borderRadius: '4px', cursor: 'pointer',
    background: danger ? '#c0392b' : active ? '#2196F3' : '#333',
    color: '#fff', width: '100%', textAlign: 'left', marginTop: '4px',
  });
  const sTitle: React.CSSProperties = { fontSize: '10px', color: '#777', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px', marginTop: '2px' };
  const inp: React.CSSProperties = { padding: '5px 7px', fontSize: '12px', background: '#222', border: '1px solid #444', borderRadius: '4px', color: '#eee', width: '100%', fontFamily: 'monospace', boxSizing: 'border-box' };
  const hr: React.CSSProperties = { border: 'none', borderTop: '1px solid #2a2a2a', margin: '2px 0' };

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', background: '#111', color: '#eee', fontFamily: 'monospace', overflow: 'hidden' }}>

      {/* ── Sidebar ── */}
      <div style={{ width: SIDEBAR_W, flexShrink: 0, background: '#161616', borderRight: '1px solid #2a2a2a', display: 'flex', flexDirection: 'column', padding: '10px', gap: '6px', overflowY: 'auto' }}>

        {/* Drawing tools */}
        <div>
          <div style={sTitle}>描画ツール</div>
          <button style={{ ...btn(tool === 'rect'), marginTop: 0 }} onClick={() => selectTool('rect')}>▭ 矩形</button>
          <button style={btn(tool === 'line')} onClick={() => selectTool('line')}>╱ ライン</button>
          <button style={btn(tool === 'polygon')} onClick={() => selectTool('polygon')}>⬡ ポリゴン</button>
          <button style={btn(tool === 'select')} onClick={() => selectTool('select')}>↖ 選択</button>
        </div>

        {tool === 'polygon' && polyPoints.length > 0 && (
          <div style={{ fontSize: '11px', color: '#fa0', background: '#1f1800', padding: '6px', borderRadius: '4px' }}>
            頂点 {polyPoints.length} 個<br />
            <button style={{ ...btn(), fontSize: '11px', padding: '3px 6px' }} onClick={() => commitPolygon(polyPoints)} disabled={polyPoints.length < 2}>Enter: 確定</button>
            <button style={{ ...btn(false, true), fontSize: '11px', padding: '3px 6px' }} onClick={cancelPolygon}>Esc: キャンセル</button>
          </div>
        )}

        {tool === 'select' && selectedId !== null && (
          <button style={btn(false, true)} onClick={() => { setObstacles(p => p.filter(o => o.id !== selectedId)); setSelectedId(null); }}>
            ✕ 選択を削除 (Del)
          </button>
        )}

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
            <div style={{ marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {/* Threshold */}
              <div style={{ fontSize: '11px', color: '#aaa' }}>
                明るさ閾値: <strong>{imgOpts.threshold}</strong>
                <input type="range" min={0} max={255} value={imgOpts.threshold} style={{ width: '100%' }}
                  onChange={e => setImgOpts(o => ({ ...o, threshold: +e.target.value }))} />
              </div>
              {/* Epsilon */}
              <div style={{ fontSize: '11px', color: '#aaa' }}>
                簡略化精度 ε: <strong>{imgOpts.epsilon}</strong>
                <input type="range" min={1} max={20} value={imgOpts.epsilon} style={{ width: '100%' }}
                  onChange={e => setImgOpts(o => ({ ...o, epsilon: +e.target.value }))} />
              </div>
              {/* Min chain */}
              <div style={{ fontSize: '11px', color: '#aaa' }}>
                最小チェーン長: <strong>{imgOpts.minLen}</strong>
                <input type="range" min={3} max={50} value={imgOpts.minLen} style={{ width: '100%' }}
                  onChange={e => setImgOpts(o => ({ ...o, minLen: +e.target.value }))} />
              </div>
              <label style={{ fontSize: '11px', color: '#aaa', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                <input type="checkbox" checked={showImg} onChange={e => setShowImg(e.target.checked)} />
                キャンバスに画像を表示
              </label>
              <button style={{ ...btn(), background: converting ? '#555' : '#1a7a3a', marginTop: '2px' }}
                onClick={handleConvert} disabled={converting}>
                {converting ? '変換中...' : '⚡ 変換実行'}
              </button>
            </div>
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

        {/* File I/O */}
        <div>
          <div style={sTitle}>ファイル</div>
          <button style={{ ...btn(), marginTop: 0 }} onClick={handleExport} disabled={obstacles.length === 0}>↓ JSONエクスポート</button>
          <label style={{ ...btn(), display: 'block' }}>
            ↑ JSONインポート
            <input type="file" accept=".json" onChange={handleImportJson} style={{ display: 'none' }} />
          </label>
        </div>

        <hr style={hr} />

        {/* Edit */}
        <div>
          <div style={sTitle}>編集</div>
          <button style={{ ...btn(false, true), marginTop: 0 }} onClick={handleClear} disabled={obstacles.length === 0}>🗑 全クリア</button>
        </div>

        <div style={{ fontSize: '11px', color: '#555' }}>障害物数: {obstacles.length}</div>

        <div style={{ marginTop: 'auto' }}>
          <button style={{ ...btn(), marginTop: 0 }} onClick={onClose}>← ロビーに戻る</button>
        </div>
      </div>

      {/* ── Canvas ── */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <canvas
            ref={canvasRef}
            style={{ cursor: tool === 'select' ? 'default' : 'crosshair', display: 'block' }}
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
