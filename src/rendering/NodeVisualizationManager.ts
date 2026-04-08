import * as THREE from 'three';
import { gsap } from 'gsap';
import { Model } from '../model/model';
import { Player } from '../model/Player';
import { SceneManager } from './SceneManager';
import { createNodeCircle, createWallMesh } from './NodeWallMeshFactory';
import { createUndefinedMesh, setNodeColor } from './MeshUtils';
import {
  NodeConfig, NodeVisualConfig, AnimationConfig,
} from '../config/GameConfig';

/**
 * Manages all node circle and obstacle wall meshes:
 * - Mesh collections and the two-way ID maps
 * - Special meshes (select / next / shot)
 * - Node color update pass (reset → visible → special)
 * - Wall rebuild on obstacle change
 */
export class NodeVisualizationManager {
  private meshList:       THREE.Mesh[]        = [];
  private meshToNodeMap:  Map<number, number> = new Map();
  private nodeToMeshMap:  Map<number, number> = new Map();
  private meshById:       Map<number, THREE.Mesh> = new Map();
  private wallMeshes:     THREE.Mesh[]        = [];
  private dirtyNodeIds:   Set<number>         = new Set();
  private reachableNodeIds: Set<number>      = new Set();

  private playerSelectMesh: THREE.Mesh;
  private playerNextMesh:   THREE.Mesh;
  private playerShotMesh:   THREE.Mesh;
  private undefinedMesh:    THREE.Mesh;

  constructor(private sceneManager: SceneManager, private model: Model) {
    this.playerSelectMesh = createUndefinedMesh();
    this.playerNextMesh   = createUndefinedMesh();
    this.playerShotMesh   = createUndefinedMesh();
    this.undefinedMesh    = createUndefinedMesh();
  }

  // ── Initialization ─────────────────────────────────────────────────────────

  initializeNodes(): void {
    for (const node of this.model.nodeList) {
      const mesh = createNodeCircle(node.x, node.y);
      this.sceneManager.addToScene(mesh);
      this.meshList.push(mesh);
      this.meshToNodeMap.set(mesh.id, node.id);
      this.nodeToMeshMap.set(node.id, mesh.id);
      this.meshById.set(mesh.id, mesh);
    }
  }

  initializeWalls(): void {
    for (const line of this.model.Lines) {
      const wall = createWallMesh(line.start.x, line.start.y, line.end.x, line.end.y);
      this.sceneManager.addToScene(wall);
      this.wallMeshes.push(wall);
    }
  }

  rebuildWalls(): void {
    for (const w of this.wallMeshes) {
      this.sceneManager.removeFromScene(w);
    }
    this.wallMeshes.length = 0;

    for (const line of this.model.Lines) {
      const wall = createWallMesh(line.start.x, line.start.y, line.end.x, line.end.y);
      this.sceneManager.addToScene(wall);
      this.wallMeshes.push(wall);
    }
  }

  // ── Special mesh setters ───────────────────────────────────────────────────

  setSelectMesh(nodeId: number): void {
    const mesh = this.findMeshByNodeId(nodeId);
    if (mesh) this.playerSelectMesh = mesh;
  }

  setNextMesh(nodeId: number): void {
    const mesh = this.findMeshByNodeId(nodeId);
    if (mesh) this.playerNextMesh = mesh;
  }

  setShotMesh(nodeId: number): void {
    const mesh = this.findMeshByNodeId(nodeId);
    if (mesh) this.playerShotMesh = mesh;
  }

  clearNextMesh(): void {
    this.playerNextMesh = this.undefinedMesh;
  }

  clearShotMesh(): void {
    this.playerShotMesh = this.undefinedMesh;
  }

  setReachableNodes(nodeIds: number[]): void {
    this.reachableNodeIds = new Set(nodeIds);
  }

  clearReachableNodes(): void {
    this.reachableNodeIds.clear();
  }

  // ── Node color update ──────────────────────────────────────────────────────

  /** Full node color pass: reset → reachable → visible → special. Call once per updateView. */
  updateNodeColors(activePlayer: Player): void {
    this.resetNodeColors();
    this.updateReachableNodes();
    this.updateVisibleNodes(activePlayer);
    this.updateSpecialNodes();
  }

  // ── Public accessors (for InputHandler / VisualizationSync) ───────────────

  getMeshList(): THREE.Mesh[] {
    return this.meshList;
  }

  getMeshToNodeMap(): Map<number, number> {
    return this.meshToNodeMap;
  }

  // ── Private helpers ────────────────────────────────────────────────────────

  private findMeshByNodeId(nodeId: number): THREE.Mesh | undefined {
    const threeMeshId = this.nodeToMeshMap.get(nodeId);
    if (threeMeshId === undefined) return undefined;
    return this.meshById.get(threeMeshId);
  }

  private resetNodeColors(): void {
    // ダーティノード（前回色変更されたノード）だけリセット
    for (const nodeId of this.dirtyNodeIds) {
      const mesh = this.findMeshByNodeId(nodeId);
      if (mesh) {
        setNodeColor(mesh, NodeConfig.DefaultColor, NodeVisualConfig.EmissiveDefaultIntensity);
      }
    }
    this.dirtyNodeIds.clear();
  }

  private markDirty(nodeId: number): void {
    this.dirtyNodeIds.add(nodeId);
  }

  private updateReachableNodes(): void {
    for (const nodeId of this.reachableNodeIds) {
      const mesh = this.findMeshByNodeId(nodeId);
      if (mesh) {
        setNodeColor(mesh, NodeConfig.ReachableColor, NodeVisualConfig.EmissiveReachableIntensity);
        this.markDirty(nodeId);
      }
    }
  }

  private updateVisibleNodes(activePlayer: Player): void {
    const teamVisibleIds = this.model.getTeamVisibleNodes(activePlayer.id);

    for (const nodeId of teamVisibleIds) {
      const mesh = this.findMeshByNodeId(nodeId);
      if (mesh) {
        setNodeColor(mesh, NodeConfig.VisibleColor, NodeVisualConfig.EmissiveVisibleIntensity);
        this.markDirty(nodeId);
      }
    }
  }

  private updateSpecialNodes(): void {
    if (this.playerShotMesh && this.playerShotMesh !== this.undefinedMesh) {
      setNodeColor(this.playerShotMesh, NodeConfig.ShotTargetColor, NodeVisualConfig.EmissiveShotIntensity);
      const nodeId = this.meshToNodeMap.get(this.playerShotMesh.id);
      if (nodeId !== undefined) this.markDirty(nodeId);
      gsap.fromTo(
        this.playerShotMesh.scale,
        { x: 1, y: 1 },
        {
          x: AnimationConfig.ShotPulseScale,
          y: AnimationConfig.ShotPulseScale,
          duration: AnimationConfig.ShotPulseDuration,
          yoyo: true,
          repeat: 1,
          repeatDelay: AnimationConfig.ShotPulseRepeatDelay,
          ease: AnimationConfig.ShotPulseEase,
          overwrite: 'auto',
        }
      );
    }

    if (this.playerSelectMesh && this.playerSelectMesh !== this.undefinedMesh) {
      setNodeColor(this.playerSelectMesh, NodeConfig.SelectedColor, NodeVisualConfig.EmissiveSelectedIntensity);
      const nodeId = this.meshToNodeMap.get(this.playerSelectMesh.id);
      if (nodeId !== undefined) this.markDirty(nodeId);
    }

    if (this.playerNextMesh && this.playerNextMesh !== this.undefinedMesh) {
      setNodeColor(this.playerNextMesh, NodeConfig.NextMoveColor, NodeVisualConfig.EmissiveNextIntensity);
      const nodeId = this.meshToNodeMap.get(this.playerNextMesh.id);
      if (nodeId !== undefined) this.markDirty(nodeId);
    }
  }
}
