import { describe, it, expect } from 'vitest';
import { LineSegment, createRectangleSegments } from './LineSegment';

describe('LineSegment.intersects', () => {
  it('detects crossing X', () => {
    const seg = new LineSegment(0, 0, 10, 10);
    expect(seg.intersects({ x: 0, y: 10 }, { x: 10, y: 0 })).toBe(true);
  });

  it('returns false for parallel non-touching lines', () => {
    const seg = new LineSegment(0, 0, 10, 0);
    expect(seg.intersects({ x: 0, y: 5 }, { x: 10, y: 5 })).toBe(false);
  });

  it('returns false for segments that miss entirely', () => {
    const seg = new LineSegment(0, 0, 1, 1);
    expect(seg.intersects({ x: 5, y: 5 }, { x: 6, y: 6 })).toBe(false);
  });

  it('detects T-junction crossing', () => {
    const seg = new LineSegment(0, 5, 10, 5);
    expect(seg.intersects({ x: 5, y: 0 }, { x: 5, y: 10 })).toBe(true);
  });
});

describe('createRectangleSegments', () => {
  it('returns 4 segments forming a closed rectangle', () => {
    const segs = createRectangleSegments(0, 0, 10, 20);
    expect(segs).toHaveLength(4);
    // Endpoints must chain
    expect(segs[0].end).toEqual(segs[1].start);
    expect(segs[1].end).toEqual(segs[2].start);
    expect(segs[2].end).toEqual(segs[3].start);
    expect(segs[3].end).toEqual(segs[0].start);
  });
});
