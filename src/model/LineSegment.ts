import { Graph } from "./Graph";
import { node } from "./node";

export class LineSegment {
  public start: { x: number, y: number };
  public end: { x: number, y: number };

  constructor(startX: number, startY: number, endX: number, endY: number) {
    this.start = { x: startX, y: startY };
    this.end = { x: endX, y: endY };
  }

  intersects(p1: { x: number, y: number }, p2: { x: number, y: number }): boolean {
    function ccw(A: { x: any; y: any; }, B: { x: any; y: any; }, C: { x: any; y: any; }) {
      return (C.y - A.y) * (B.x - A.x) > (B.y - A.y) * (C.x - A.x);
    }
    return (ccw(this.start, p1, p2) != ccw(this.end, p1, p2)) && (ccw(this.start, this.end, p1) != ccw(this.start, this.end, p2));
  }
}

export function createRectangleSegments(x: number, y: number, width: number, height: number): LineSegment[] {
  return [
    new LineSegment(x, y, x + width, y), // Top
    new LineSegment(x + width, y, x + width, y + height), // Right
    new LineSegment(x + width, y + height, x, y + height), // Bottom
    new LineSegment(x, y + height, x, y), // Left
  ];
}



export function removeEdgesIfIntersected(graph: Graph, nodes: node[], segments: LineSegment[]): void {
  for (const node1 of nodes) {
    for (const node2Id of graph.List[node1.id]) {
      const node2 = nodes.find(node => node.id === node2Id);
      if (node2) {
        for (const segment of segments) {
          if (segment.intersects({ x: node1.x, y: node1.y }, { x: node2.x, y: node2.y })) {
            graph.removeEdge(node1.id, node2.id);
            break;
          }
        }
      }
    }
  }
}