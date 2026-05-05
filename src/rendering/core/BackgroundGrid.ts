import * as THREE from 'three';
import { RenderConfig } from '../../config/GameConfig';
import { gameToWorld } from '../utils/MeshUtils';
import type { Model } from '../../model/model';

const GRID_USERDATA_KEY = 'isGrid';

/**
 * Draws traversable edges between adjacent nodes as background lines.
 * Call build(model) once after the model is ready, and again after map regeneration.
 */
export class BackgroundGrid {
  private lines: THREE.Line[] = [];

  constructor(private scene: THREE.Scene) {}

  build(model: Model): void {
    this.clear();

    const material = new THREE.LineBasicMaterial({
      color: RenderConfig.GridLineColor,
      transparent: true,
      opacity: RenderConfig.GridLineOpacity,
    });

    const drawn = new Set<string>();

    for (const [nodeId, neighbors] of Object.entries(model.Edges.List)) {
      const fromNode = model.nodeList[Number(nodeId)];
      if (!fromNode) continue;

      for (const neighborId of neighbors as number[]) {
        const key = nodeId < String(neighborId)
          ? `${nodeId}-${neighborId}`
          : `${neighborId}-${nodeId}`;
        if (drawn.has(key)) continue;
        drawn.add(key);

        const toNode = model.nodeList[neighborId];
        if (!toNode) continue;

        const pts = [
          gameToWorld(fromNode.x, fromNode.y, -0.5),
          gameToWorld(toNode.x, toNode.y, -0.5),
        ];
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(pts),
          material,
        );
        line.userData[GRID_USERDATA_KEY] = true;
        this.scene.add(line);
        this.lines.push(line);
      }
    }
  }

  private clear(): void {
    for (const line of this.lines) {
      this.scene.remove(line);
      line.geometry.dispose();
    }
    this.lines = [];
  }

  /** Toggles the visibility of all edge lines. */
  toggle(): void {
    for (const line of this.lines) {
      line.visible = !line.visible;
    }
  }
}
