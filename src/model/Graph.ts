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
}