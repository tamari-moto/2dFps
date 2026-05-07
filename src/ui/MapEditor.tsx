import React, { useRef, useEffect, useState, useCallback } from 'react';
import { MapGenerator, ObstacleData } from '../model/MapGenerator';
import { LineSegment, createRectangleSegments } from '../model/LineSegment';
import { CalculatedConfig, MapConfig } from '../config/GameConfig';

interface MapEditorProps {
  onClose: () => void;
}

type Tool = 'rect' | 'select';

const PADDING = 20;
const SIDEBAR_W = 240;

function getScale(): number {
  const maxW = window.innerWidth - SIDEBAR_W - PADDING * 2 - 16;
  const maxH = window.innerHeight - PADDING * 2 - 16;
  const mapSize = CalculatedConfig.MapSize;
  return Math.min(maxW / mapSize, maxH / mapSize);
}

function gameToCanvas(x: number, y: number, scale: number) {
  return { cx: x * scale + PADDING, cy: y * scale + PADDING };
}

function canvasToGame(cx: number, cy: number, scale: number) {
  return { x: (cx - PADDING) / scale, y: (cy - PADDING) / scale };
}

function pointToSegmentDist2(px: number, py: number, seg: LineSegment): number {
  const dx = seg.end.x - seg.start.x;
  const dy = seg.end.y - seg.start.y;
  const len2 = dx * dx + dy * dy;
  if (len2 === 0) return (px - seg.start.x) ** 2 + (py - seg.start.y) ** 2;
  const t = Math.max(0, Math.min(1, ((px - seg.start.x) * dx + (py - seg.start.y) * dy) / len2));
  return (px - (seg.start.x + t * dx)) ** 2 + (py - (seg.start.y + t * dy)) ** 2;
}

const MapEditor: React.FC<MapEditorProps> = ({ onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [obstacles, setObstacles] = useState<ObstacleData[]>([]);
  const [tool, setTool] = useState<Tool>('rect');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [seed, setSeed] = useState(() => MapGenerator.generateSeed());
  const nextIdRef = useRef(10000);
  const drawStart = useRef<{ x: number; y: number } | null>(null);
  const [previewRect, setPreviewRect] = useState<{ x1: number; y1: number; x2: number; y2: number } | null>(null);
  const [status, setStatus] = useState('矩形ツール: ドラッグで壁を追加 / 選択ツール: クリックで選択・Deleteで削除');

  const mapSize = CalculatedConfig.MapSize;
  const nodeSpacing = MapConfig.NodeSpacing;
  const nodesInGrid = MapConfig.NodesInGridSize;

  // Render canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const scale = getScale();
    const canvasSize = mapSize * scale + PADDING * 2;
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    ctx.fillStyle = '#0d0d0d';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid dots
    ctx.fillStyle = '#2a2a2a';
    for (let i = 0; i < nodesInGrid; i++) {
      for (let j = 0; j < nodesInGrid; j++) {
        const { cx, cy } = gameToCanvas(i * nodeSpacing, j * nodeSpacing, scale);
        ctx.beginPath();
        ctx.arc(cx, cy, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Obstacles
    for (const obs of obstacles) {
      const isSelected = obs.id === selectedId;
      ctx.strokeStyle = isSelected ? '#ffdd00' : '#44aaff';
      ctx.lineWidth = isSelected ? 2.5 : 1.5;
      for (const seg of obs.segments) {
        const s = gameToCanvas(seg.start.x, seg.start.y, scale);
        const e = gameToCanvas(seg.end.x, seg.end.y, scale);
        ctx.beginPath();
        ctx.moveTo(s.cx, s.cy);
        ctx.lineTo(e.cx, e.cy);
        ctx.stroke();
      }
    }

    // Preview rect while drawing
    if (previewRect) {
      const s = gameToCanvas(previewRect.x1, previewRect.y1, scale);
      const e = gameToCanvas(previewRect.x2, previewRect.y2, scale);
      ctx.strokeStyle = '#ff8800';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 5]);
      ctx.strokeRect(s.cx, s.cy, e.cx - s.cx, e.cy - s.cy);
      ctx.setLineDash([]);
    }
  }, [obstacles, selectedId, previewRect, mapSize, nodesInGrid, nodeSpacing]);

  const getMouseGamePos = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const scale = getScale();
    return canvasToGame(e.clientX - rect.left, e.clientY - rect.top, scale);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getMouseGamePos(e);

    if (tool === 'rect') {
      drawStart.current = { x, y };
    } else {
      const hitDist2 = (8 / getScale()) ** 2;
      let found: number | null = null;
      outer: for (const obs of obstacles) {
        for (const seg of obs.segments) {
          if (pointToSegmentDist2(x, y, seg) < hitDist2) {
            found = obs.id;
            break outer;
          }
        }
      }
      setSelectedId(found);
    }
  }, [tool, obstacles, getMouseGamePos]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drawStart.current || tool !== 'rect') return;
    const { x, y } = getMouseGamePos(e);
    setPreviewRect({ x1: drawStart.current.x, y1: drawStart.current.y, x2: x, y2: y });
  }, [tool, getMouseGamePos]);

  const handleMouseUp = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drawStart.current || tool !== 'rect') return;
    const { x, y } = getMouseGamePos(e);
    const x1 = Math.min(drawStart.current.x, x);
    const y1 = Math.min(drawStart.current.y, y);
    const x2 = Math.max(drawStart.current.x, x);
    const y2 = Math.max(drawStart.current.y, y);

    if (x2 - x1 > 4 && y2 - y1 > 4) {
      const segs = createRectangleSegments(x1, y1, x2 - x1, y2 - y1);
      const newObs: ObstacleData = { id: nextIdRef.current++, segments: segs };
      setObstacles(prev => [...prev, newObs]);
    }

    drawStart.current = null;
    setPreviewRect(null);
  }, [tool, getMouseGamePos]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.key === 'Delete' || e.key === 'Backspace') && selectedId !== null) {
      setObstacles(prev => prev.filter(o => o.id !== selectedId));
      setSelectedId(null);
    }
  }, [selectedId]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleGenerate = useCallback(() => {
    const result = MapGenerator.generateComplexMap(seed || undefined);
    setObstacles(result.obstacles);
    setSelectedId(null);
    setSeed(result.seed);
    nextIdRef.current = Math.max(...result.obstacles.map(o => o.id)) + 1;
    setStatus(`BSP生成完了 (seed: ${result.seed})`);
  }, [seed]);

  const handleRandomSeed = useCallback(() => {
    setSeed(MapGenerator.generateSeed());
  }, []);

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
        const { obstacles: imported } = MapGenerator.importObstacles(json);
        setObstacles(imported);
        setSelectedId(null);
        nextIdRef.current = Math.max(...imported.map(o => o.id), 0) + 1;
        setStatus(`インポート完了 (${imported.length} 障害物)`);
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
    nextIdRef.current = 10000;
    setStatus('クリア完了');
  }, []);

  const handleDeleteSelected = useCallback(() => {
    if (selectedId === null) return;
    setObstacles(prev => prev.filter(o => o.id !== selectedId));
    setSelectedId(null);
  }, [selectedId]);

  const s = {
    container: {
      display: 'flex',
      width: '100vw',
      height: '100vh',
      background: '#111',
      color: '#eee',
      fontFamily: 'monospace',
      overflow: 'hidden',
    } as React.CSSProperties,
    sidebar: {
      width: `${SIDEBAR_W}px`,
      flexShrink: 0,
      background: '#1a1a1a',
      borderRight: '1px solid #333',
      display: 'flex',
      flexDirection: 'column',
      padding: '12px',
      gap: '12px',
      overflowY: 'auto',
    } as React.CSSProperties,
    canvasArea: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    } as React.CSSProperties,
    sectionTitle: {
      fontSize: '11px',
      color: '#888',
      textTransform: 'uppercase' as const,
      letterSpacing: '1px',
      marginBottom: '4px',
    },
    btn: (active?: boolean, danger?: boolean): React.CSSProperties => ({
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
    }),
    input: {
      padding: '6px 8px',
      fontSize: '12px',
      background: '#222',
      border: '1px solid #444',
      borderRadius: '4px',
      color: '#eee',
      width: '100%',
      fontFamily: 'monospace',
      boxSizing: 'border-box' as const,
    },
    statusBar: {
      fontSize: '11px',
      color: '#aaa',
      padding: '6px 8px',
      background: '#1a1a1a',
      borderTop: '1px solid #333',
    },
  };

  return (
    <div style={s.container}>
      <div style={s.sidebar}>
        <div>
          <div style={s.sectionTitle}>ツール</div>
          <button style={s.btn(tool === 'rect')} onClick={() => setTool('rect')}>
            ▭ 矩形描画
          </button>
          <button style={{ ...s.btn(tool === 'select'), marginTop: '4px' }} onClick={() => setTool('select')}>
            ↖ 選択
          </button>
        </div>

        {tool === 'select' && selectedId !== null && (
          <button style={s.btn(false, true)} onClick={handleDeleteSelected}>
            ✕ 選択を削除 (Delete)
          </button>
        )}

        <hr style={{ border: 'none', borderTop: '1px solid #333', margin: 0 }} />

        <div>
          <div style={s.sectionTitle}>BSP マップ生成</div>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
            <input
              style={{ ...s.input, flex: 1 }}
              value={seed}
              onChange={e => setSeed(e.target.value)}
              placeholder="シード値"
            />
            <button
              style={{ ...s.btn(), width: 'auto', padding: '6px 8px', flexShrink: 0 }}
              onClick={handleRandomSeed}
              title="ランダムシード"
            >
              🎲
            </button>
          </div>
          <button style={s.btn()} onClick={handleGenerate}>
            ⚙ 生成
          </button>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #333', margin: 0 }} />

        <div>
          <div style={s.sectionTitle}>ファイル</div>
          <button style={s.btn()} onClick={handleExport} disabled={obstacles.length === 0}>
            ↓ JSONエクスポート
          </button>
          <label style={{ ...s.btn(), marginTop: '4px', display: 'block', textAlign: 'left' }}>
            ↑ JSONインポート
            <input type="file" accept=".json" onChange={handleImport} style={{ display: 'none' }} />
          </label>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #333', margin: 0 }} />

        <div>
          <div style={s.sectionTitle}>編集</div>
          <button style={s.btn(false, true)} onClick={handleClear} disabled={obstacles.length === 0}>
            🗑 全クリア
          </button>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #333', margin: 0 }} />

        <div style={{ fontSize: '12px', color: '#666' }}>
          障害物数: {obstacles.length}
        </div>

        <div style={{ marginTop: 'auto' }}>
          <button style={s.btn(false, false)} onClick={onClose}>
            ← ロビーに戻る
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
        <div style={s.canvasArea}>
          <canvas
            ref={canvasRef}
            style={{ cursor: tool === 'rect' ? 'crosshair' : 'default', display: 'block' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => { drawStart.current = null; setPreviewRect(null); }}
          />
        </div>
        <div style={s.statusBar}>{status}</div>
      </div>
    </div>
  );
};

export default MapEditor;
