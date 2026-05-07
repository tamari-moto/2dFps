import { ObstacleData } from '../model/MapGenerator';
import { LineSegment } from '../model/LineSegment';

export interface ImageMapOptions {
  threshold: number;  // 0-255 brightness; pixels above = wall
  epsilon: number;    // RDP simplification tolerance (image pixels)
  minLen: number;     // minimum chain length (pixels) to include
  maxSize: number;    // scale image down to this max dimension
}

export const DEFAULT_IMAGE_OPTIONS: ImageMapOptions = {
  threshold: 80,
  epsilon: 3,
  minLen: 10,
  maxSize: 600,
};

export type Pt = { x: number; y: number };

// 8-direction offsets
const DX8 = [-1, 0, 1, -1, 1, -1, 0, 1];
const DY8 = [-1, -1, -1, 0, 0, 1, 1, 1];

function loadImg(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => { URL.revokeObjectURL(url); resolve(img); };
    img.onerror = reject;
    img.src = url;
  });
}

function toBinary(pixels: Uint8ClampedArray, count: number, thresh: number): Uint8Array {
  const out = new Uint8Array(count);
  for (let i = 0; i < count; i++) {
    const lum = 0.299 * pixels[i * 4] + 0.587 * pixels[i * 4 + 1] + 0.114 * pixels[i * 4 + 2];
    out[i] = lum > thresh ? 1 : 0;
  }
  return out;
}

/** Keep only pixels on the border between wall and non-wall (4-connected check). */
function extractEdges(bin: Uint8Array, w: number, h: number): Uint8Array {
  const out = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (!bin[y * w + x]) continue;
      const isEdge =
        x === 0 || x === w - 1 || y === 0 || y === h - 1 ||
        !bin[y * w + x - 1] || !bin[y * w + x + 1] ||
        !bin[(y - 1) * w + x] || !bin[(y + 1) * w + x];
      out[y * w + x] = isEdge ? 1 : 0;
    }
  }
  return out;
}

function nbrs8(idx: number, arr: Uint8Array, w: number, h: number): number[] {
  const x = idx % w, y = (idx / w) | 0;
  const result: number[] = [];
  for (let k = 0; k < 8; k++) {
    const nx = x + DX8[k], ny = y + DY8[k];
    if (nx >= 0 && nx < w && ny >= 0 && ny < h && arr[ny * w + nx]) {
      result.push(ny * w + nx);
    }
  }
  return result;
}

/** Ramer-Douglas-Peucker polyline simplification. */
export function rdp(pts: Pt[], eps: number): Pt[] {
  if (pts.length <= 2) return pts;
  const a = pts[0], b = pts[pts.length - 1];
  const dx = b.x - a.x, dy = b.y - a.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1e-9;
  let maxD = 0, maxI = 0;
  for (let i = 1; i < pts.length - 1; i++) {
    const d = Math.abs(dy * pts[i].x - dx * pts[i].y + b.x * a.y - b.y * a.x) / len;
    if (d > maxD) { maxD = d; maxI = i; }
  }
  if (maxD > eps) {
    const L = rdp(pts.slice(0, maxI + 1), eps);
    const R = rdp(pts.slice(maxI), eps);
    return [...L.slice(0, -1), ...R];
  }
  return [a, b];
}

/**
 * Traces edge pixels into ordered polyline chains.
 * Starts from endpoint pixels (degree 1) first, then handles loops.
 */
function traceChains(edges: Uint8Array, w: number, h: number, minLen: number): Pt[][] {
  const visited = new Uint8Array(w * h);
  const deg = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) {
    if (edges[i]) deg[i] = nbrs8(i, edges, w, h).length;
  }

  function traceFrom(start: number): Pt[] {
    const chain: number[] = [start];
    visited[start] = 1;
    let cur = start;
    while (true) {
      const candidates = nbrs8(cur, edges, w, h).filter(n => !visited[n]);
      if (!candidates.length) break;
      // Prefer lower-degree neighbor to stay on the main chain
      candidates.sort((a, b) => deg[a] - deg[b]);
      const next = candidates[0];
      visited[next] = 1;
      chain.push(next);
      cur = next;
    }
    return chain.map(i => ({ x: i % w, y: (i / w) | 0 }));
  }

  const chains: Pt[][] = [];

  // Pass 1: endpoints (degree ≤ 1) first — these are chain ends
  for (let i = 0; i < w * h; i++) {
    if (edges[i] && !visited[i] && deg[i] <= 1) {
      const c = traceFrom(i);
      if (c.length >= minLen) chains.push(c);
    }
  }

  // Pass 2: remaining unvisited pixels (closed loops, isolated blobs)
  for (let i = 0; i < w * h; i++) {
    if (edges[i] && !visited[i]) {
      const c = traceFrom(i);
      if (c.length >= minLen) chains.push(c);
    }
  }

  return chains;
}

export interface ImageConvertResult {
  obstacles: ObstacleData[];
  nextId: number;
  chainCount: number;
  segmentCount: number;
}

/**
 * Converts an image file into ObstacleData array.
 * Bright pixels (above threshold) are treated as walls.
 * Returns line segments in game coordinate space (0..mapSize).
 */
export async function imageToObstacles(
  file: File,
  mapSize: number,
  opts: ImageMapOptions,
  startId: number
): Promise<ImageConvertResult> {
  const img = await loadImg(file);

  // Scale down for performance
  const sc = Math.min(1, opts.maxSize / Math.max(img.width, img.height));
  const w = Math.max(1, Math.round(img.width * sc));
  const h = Math.max(1, Math.round(img.height * sc));

  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(img, 0, 0, w, h);

  const pixels = ctx.getImageData(0, 0, w, h).data;
  const binary = toBinary(pixels, w * h, opts.threshold);
  const edges = extractEdges(binary, w, h);
  const chains = traceChains(edges, w, h, opts.minLen);

  // Map image pixel coords → game coords (fit image into square mapSize area)
  const gameScale = mapSize / Math.max(w, h);

  const obstacles: ObstacleData[] = [];
  let id = startId;
  let segmentCount = 0;

  for (const chain of chains) {
    const simplified = rdp(chain, opts.epsilon);
    if (simplified.length < 2) continue;

    const segs: LineSegment[] = [];
    for (let i = 0; i < simplified.length - 1; i++) {
      segs.push(new LineSegment(
        simplified[i].x * gameScale,
        simplified[i].y * gameScale,
        simplified[i + 1].x * gameScale,
        simplified[i + 1].y * gameScale,
      ));
    }
    obstacles.push({ id: id++, segments: segs });
    segmentCount += segs.length;
  }

  return { obstacles, nextId: id, chainCount: chains.length, segmentCount };
}
