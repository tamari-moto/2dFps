import { describe, it, expect } from 'vitest';
import { rdp, type Pt } from './imageToMap';

describe('rdp (Ramer-Douglas-Peucker)', () => {
  it('returns endpoints unchanged for short input', () => {
    const pts: Pt[] = [{ x: 0, y: 0 }, { x: 10, y: 0 }];
    expect(rdp(pts, 1)).toEqual(pts);
  });

  it('simplifies a near-straight line to its endpoints', () => {
    const pts: Pt[] = [
      { x: 0, y: 0 },
      { x: 1, y: 0.1 },
      { x: 2, y: -0.1 },
      { x: 3, y: 0.1 },
      { x: 10, y: 0 },
    ];
    const out = rdp(pts, 1);
    expect(out).toHaveLength(2);
    expect(out[0]).toEqual({ x: 0, y: 0 });
    expect(out[out.length - 1]).toEqual({ x: 10, y: 0 });
  });

  it('preserves the corner of an L-shape', () => {
    const pts: Pt[] = [
      { x: 0, y: 0 },
      { x: 5, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 5 },
      { x: 10, y: 10 },
    ];
    const out = rdp(pts, 0.5);
    expect(out).toEqual([
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
    ]);
  });

  it('keeps additional vertices when epsilon is small', () => {
    const pts: Pt[] = [
      { x: 0, y: 0 },
      { x: 5, y: 3 },
      { x: 10, y: 0 },
    ];
    const tight = rdp(pts, 0.5);
    const loose = rdp(pts, 5);
    expect(tight).toHaveLength(3);
    expect(loose).toHaveLength(2);
  });
});
