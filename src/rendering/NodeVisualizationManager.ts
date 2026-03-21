import * as THREE from 'three';
import { gsap } from 'gsap';
import { Model } from '../model/model';
import { Player } from '../model/Player';
import { SceneManager } from './SceneManager';
import { createNodeCircle, createWallMesh } from './NodeWallMeshFactory';
import { createUndefinedMesh, setNodeColor } from './MeshUtils';
import {
  NodeConfig, NodeVisualConfig, AnimationConfig, PlayerConfig, WallConfig,
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
    }
  }

  initializeWalls(): void {
    for (const line of this.model.Lines) {
      const wall = createWallMesh(line.start.x, line.start.y, line.end.x, line.end.y);
      this.sceneManager.addToScene(wall);
    }
  }

  rebuildWalls(): void {
    const scene = this.sceneManager.getScene();
    const wallsToRemove: THREE.Mesh[] = [];
    scene.traverse(obj => {
      if (obj instanceof THREE.Mesh && obj.userData[WallConfig.UserDataTag]) {
        wallsToRemove.push(obj);
      }
    });
    wallsToRemove.forEach(w => this.sceneManager.removeFromScene(w));

    for (const line of this.model.Lines) {
      const wall = createWallMesh(line.start.x, line.start.y, line.end.x, line.end.y);
      this.sceneManager.addToScene(wall);
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

  // ── Node color update ──────────────────────────────────────────────────────

  /** Full node color pass: reset → visible → special. Call once per updateView. */
  updateNodeColors(activePlayer: Player): void {
    this.resetNodeColors();
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
    return this.meshList.find(m => this.meshToNodeMap.get(m.id) === nodeId);
  }

  private resetNodeColors(): void {
    this.meshList.forEach(mesh => {
      setNodeColor(mesh, NodeConfig.DefaultColor, NodeVisualConfig.EmissiveDefaultIntensity);
    });
  }

  private updateVisibleNodes(activePlayer: Player): void {
    const visibleNodes = this.model.getVisibleNodesAtAngle(
      activePlayer.node,
      activePlayer.angle,
      PlayerConfig.MaxViewDistance,
    );

    for (const node of visibleNodes) {
      const mesh = this.meshList.find(m => this.meshToNodeMap.get(m.id) === node.id);
      if (mesh) {
        setNodeColor(mesh, NodeConfig.VisibleColor, NodeVisualConfig.EmissiveVisibleIntensity);
      }
    }
  }

  private updateSpecialNodes(): void {
    if (this.playerShotMesh && this.playerShotMesh !== this.undefinedMesh) {
      setNodeColor(this.playerShotMesh, NodeConfig.ShotTargetColor, NodeVisualConfig.EmissiveShotIntensity);
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
    }

    if (this.playerNextMesh && this.playerNextMesh !== this.undefinedMesh) {
      setNodeColor(this.playerNextMesh, NodeConfig.NextMoveColor, NodeVisualConfig.EmissiveNextIntensity);
    }
  }
}
