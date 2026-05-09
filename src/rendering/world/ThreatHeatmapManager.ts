import * as THREE from 'three';
import { Node } from '../../model/node';
import { SceneManager } from '../core/SceneManager';
import { gameToWorld } from '../utils/MeshUtils';
import { NodeConfig } from '../../config/GameConfig';

const HEATMAP_HEIGHT = 1.5;
const HEATMAP_MAX_OPACITY = 0.6;
const PLANE_SIZE_FACTOR = 2.0;
const LAYER_HEIGHT_STEP = 0.05;

/**
 * Renders ThreatMaps as per-node semi-transparent overlays in the 3D scene.
 * Each team gets its own layer of PlaneGeometry meshes, created lazily on first update.
 * opacity = score * HEATMAP_MAX_OPACITY; color = team color.
 */
export class ThreatHeatmapManager {
  /** teamColor → (nodeId → Mesh) */
  private layers: Map<number, Map<number, THREE.Mesh>> = new Map();
  private nodeList: Node[] = [];
  private edgeList: { [nodeId: number]: number[] } = {};

  constructor(private sceneManager: SceneManager) {}

  init(nodeList: Node[], edgeList: { [nodeId: number]: number[] }): void {
    this.nodeList = nodeList;
    this.edgeList = edgeList;
  }

  update(scores: Float32Array, teamColor: number): void {
    if (!this.layers.has(teamColor)) {
      this._createLayer(teamColor);
    }
    const layer = this.layers.get(teamColor)!;
    for (const [nodeId, mesh] of layer) {
      const score = scores[nodeId] ?? 0;
      (mesh.material as THREE.MeshBasicMaterial).opacity = score * HEATMAP_MAX_OPACITY;
    }
  }

  /** Hide all layers. */
  clear(): void {
    for (const layer of this.layers.values()) {
      for (const mesh of layer.values()) {
        (mesh.material as THREE.MeshBasicMaterial).opacity = 0;
      }
    }
  }

  /** Show only the layer for the given teamColor; hide all others. */
  showOnly(teamColor: number): void {
    for (const [color, layer] of this.layers) {
      const visible = color === teamColor;
      for (const mesh of layer.values()) {
        if (!visible) (mesh.material as THREE.MeshBasicMaterial).opacity = 0;
      }
    }
  }

  private _createLayer(teamColor: number): void {
    const layerIndex = this.layers.size;
    const height = HEATMAP_HEIGHT + layerIndex * LAYER_HEIGHT_STEP;
    const geo = new THREE.PlaneGeometry(
      NodeConfig.CircleSize * PLANE_SIZE_FACTOR,
      NodeConfig.CircleSize * PLANE_SIZE_FACTOR,
    );

    const planes = new Map<number, THREE.Mesh>();

    for (const node of this.nodeList) {
      if (!this.edgeList[node.id]) continue;

      const mat = new THREE.MeshBasicMaterial({
        color: teamColor,
        transparent: true,
        depthTest: false,
        opacity: 0,
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.copy(gameToWorld(node.x, node.y, height));

      this.sceneManager.addToScene(mesh);
      planes.set(node.id, mesh);
    }

    this.layers.set(teamColor, planes);
  }
}
