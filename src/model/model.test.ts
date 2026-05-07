import { describe, it, expect } from 'vitest';
import { Model } from './model';
import { MapConfig } from '../config/GameConfig';

describe('Model.initCustomLayout', () => {
  it('builds nodeList and proximity edges from custom nodes', () => {
    const m = new Model(false);
    m.initCustomLayout(
      [
        { id: 0, x: 0, y: 0 },
        { id: 1, x: 30, y: 0 },
        { id: 2, x: 100, y: 100 },
      ],
      [],
      33,
    );
    expect(m.nodeList).toHaveLength(3);
    // 0-1 within radius (dist 30 ≤ 33), bidirectional
    expect(m.Edges.List[0]).toContain(1);
    expect(m.Edges.List[1]).toContain(0);
    // 0-2 outside radius (dist > 33)
    expect(m.Edges.List[0]).not.toContain(2);
  });

  it('connects only cardinal neighbors at radius=33 (NodeSpacing*1.1)', () => {
    const m = new Model(false);
    m.initCustomLayout(
      [
        { id: 0, x: 0, y: 0 },
        { id: 1, x: 30, y: 0 },   // right (dist=30)
        { id: 2, x: 30, y: 30 },  // diagonal (dist≈42.4)
      ],
      [],
      33,
    );
    expect(m.Edges.List[0]).toContain(1);
    expect(m.Edges.List[0]).not.toContain(2);
  });
});

describe('Model.getVisibleNodesAtAngle (custom layout)', () => {
  it('does not throw and filters by distance/angle on custom layouts', () => {
    const m = new Model(false);
    m.initCustomLayout(
      [
        { id: 0, x: 0, y: 0 },
        { id: 1, x: 30, y: 0 },
        { id: 2, x: -30, y: 0 },
        { id: 3, x: 0, y: 30 },
      ],
      [],
      50,
    );
    // Regression: previously crashed with `Cannot read properties of undefined (reading 'x')`
    const visible = m.getVisibleNodesAtAngle(m.nodeList[0], 0, 100);
    const ids = visible.map(n => n.id);
    // Looking along +X with FOV: node 1 (right) should be visible; node 2 (left) excluded.
    expect(ids).toContain(1);
    expect(ids).not.toContain(2);
  });

  it('respects distance limit', () => {
    const m = new Model(false);
    m.initCustomLayout(
      [
        { id: 0, x: 0, y: 0 },
        { id: 1, x: 50, y: 0 },
        { id: 2, x: 200, y: 0 },
      ],
      [],
      100,
    );
    const visible = m.getVisibleNodesAtAngle(m.nodeList[0], 0, 100);
    const ids = visible.map(n => n.id);
    expect(ids).toContain(1);
    expect(ids).not.toContain(2);
  });
});

describe('Model.getVisibleNodesAtAngle (standard grid)', () => {
  it('returns visible nodes without throwing on default grid', () => {
    const m = new Model(false); // skip BSP obstacles
    const center = m.nodeList[0];
    const visible = m.getVisibleNodesAtAngle(center, 0, MapConfig.NodeSpacing * 3);
    expect(Array.isArray(visible)).toBe(true);
    // Center node itself is excluded
    expect(visible.find(n => n.id === center.id)).toBeUndefined();
  });
});
