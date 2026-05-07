import { describe, it, expect } from 'vitest';
import { Graph } from './Graph';

describe('Graph', () => {
  function makeChain(n: number): Graph {
    const g = new Graph();
    for (let i = 0; i < n; i++) g.addVertex(i);
    for (let i = 0; i < n - 1; i++) {
      g.addEdgeDirected(i, i + 1);
      g.addEdgeDirected(i + 1, i);
    }
    return g;
  }

  it('addEdgeDirected adds only one direction', () => {
    const g = new Graph();
    g.addVertex(0); g.addVertex(1);
    g.addEdgeDirected(0, 1);
    expect(g.List[0]).toEqual([1]);
    expect(g.List[1]).toEqual([]);
  });

  it('removeEdge removes both directions', () => {
    const g = new Graph();
    g.addVertex(0); g.addVertex(1);
    g.addEdge(0, 1);
    g.removeEdge(0, 1);
    expect(g.List[0]).toEqual([]);
    expect(g.List[1]).toEqual([]);
  });

  it('getReachableNodes respects maxSteps and excludes start', () => {
    const g = makeChain(5); // 0-1-2-3-4
    const reachable = g.getReachableNodes(0, 2);
    expect(reachable.has(0)).toBe(false);
    expect(reachable.has(1)).toBe(true);
    expect(reachable.has(2)).toBe(true);
    expect(reachable.has(3)).toBe(false);
  });

  it('getShortestPath returns minimum-length path on a chain', () => {
    const g = makeChain(5);
    expect(g.getShortestPath(0, 3, 10)).toEqual([0, 1, 2, 3]);
  });

  it('getShortestPath returns null when target unreachable within maxSteps', () => {
    const g = makeChain(5);
    expect(g.getShortestPath(0, 4, 2)).toBeNull();
  });

  it('getShortestPath returns [start] when start === target', () => {
    const g = makeChain(3);
    expect(g.getShortestPath(1, 1, 5)).toEqual([1]);
  });
});
