import * as THREE from 'three';
import { Node } from '../../model/node';
import { SceneManager } from '../core/SceneManager';
import { gameToWorld } from '../utils/MeshUtils';
import { NodeConfig } from '../../config/GameConfig';

const HEATMAP_HEIGHT = 1.5;
const HEATMAP_MAX_OPACITY = 0.6;
const PLANE_SIZE_FACTOR = 2.0;

/**
 * Renders a ThreatMap as a per-node semi-transparent overlay in the 3D scene.
 * Each node gets a horizontal PlaneGeometry positioned above it.
 * opacity = score * HEATMAP_MAX_OPACITY; color = team color.
 */
export class ThreatHeatmapManager {
  /** Indexed by node.id; undefined for nodes excluded from the graph (inside obstacles). */
  private planes: Map<number, THREE.Mesh> = new Map();

  constructor(private sceneManager: SceneManager) {}

  init(nodeList: Node[], edgeList: { [nodeId: number]: number[] }): void {
    const geo = new THREE.PlaneGeometry(
      NodeConfig.CircleSize * PLANE_SIZE_FACTOR,
      NodeConfig.CircleSize * PLANE_SIZE_FACTOR,
    );

    for (const node of nodeList) {
      if (!edgeList[node.id]) continue;

      const mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        depthTest: false,
        opacity: 0,
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.copy(gameToWorld(node.x, node.y, HEATMAP_HEIGHT));

      this.sceneManager.addToScene(mesh);
      this.planes.set(node.id, mesh);
    }
  }

  update(scores: Float32Array, teamColor: number): void {
    for (const [nodeId, mesh] of this.planes) {
      const score = scores[nodeId] ?? 0;
      const mat = mesh.material as THREE.MeshBasicMaterial;
      mat.color.setHex(teamColor);
      mat.opacity = score * HEATMAP_MAX_OPACITY;
    }
  }

  clear(): void {
    for (const mesh of this.planes.values()) {
      (mesh.material as THREE.MeshBasicMaterial).opacity = 0;
    }
  }
}
