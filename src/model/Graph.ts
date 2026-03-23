export class Graph {
  public List: { [key: number]: number[] };
  constructor() {
    this.List = {};
  }

  //ノード追加
  addVertex(vertex: number) {
    this.List[vertex] = [];
  }

  //無向グラフ
  addEdge(v1: number, v2: number) {
    this.List[v1].push(v2);
    this.List[v2].push(v1);
  }

  //有向グラフ
  addEdgeDirected(v1: number, v2: number) {
    this.List[v1].push(v2);
  }

  //エッジを削除
  removeEdge(vertex1: number, vertex2: number | undefined) {
    this.List[vertex1] = this.List[vertex1].filter(
      v => v !== vertex2
    );
    if (vertex2 !== undefined) {
      this.List[vertex2] = this.List[vertex2].filter(
        v => v !== vertex1
      );
    }
  }

  //ノードを削除
  removeVertex(vertex: number) {
    while (this.List[vertex].length) {
      const adjacentVertex = this.List[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.List[vertex];
  }

  /**
   * BFS: maxSteps 以内に到達可能なノードIDの集合を返す（開始ノードは含まない）
   */
  getReachableNodes(startId: number, maxSteps: number): Set<number> {
    const visited = new Set<number>([startId]);
    const reachable = new Set<number>();
    const queue: Array<{ nodeId: number; dist: number }> = [{ nodeId: startId, dist: 0 }];

    while (queue.length > 0) {
      const { nodeId, dist } = queue.shift()!;
      const neighbors = this.List[nodeId];
      if (!neighbors || dist >= maxSteps) continue;

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          reachable.add(neighbor);
          queue.push({ nodeId: neighbor, dist: dist + 1 });
        }
      }
    }

    return reachable;
  }

  /**
   * BFS: startId から targetId への最短経路を返す（両端を含むノードID配列）。
   * maxSteps 以内に到達できなければ null を返す。
   */
  getShortestPath(startId: number, targetId: number, maxSteps: number): number[] | null {
    if (startId === targetId) return [startId];

    const parent = new Map<number, number>();
    const visited = new Set<number>([startId]);
    const queue: Array<{ nodeId: number; dist: number }> = [{ nodeId: startId, dist: 0 }];

    while (queue.length > 0) {
      const { nodeId, dist } = queue.shift()!;
      const neighbors = this.List[nodeId];
      if (!neighbors || dist >= maxSteps) continue;

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          parent.set(neighbor, nodeId);

          if (neighbor === targetId) {
            // 経路を復元
            const path: number[] = [];
            let current = targetId;
            while (current !== startId) {
              path.push(current);
              current = parent.get(current)!;
            }
            path.push(startId);
            path.reverse();
            return path;
          }

          queue.push({ nodeId: neighbor, dist: dist + 1 });
        }
      }
    }

    return null;
  }
}