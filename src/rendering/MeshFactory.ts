import * as THREE from 'three';
import { NodeConfig, PlayerConfig, ObstacleConfig } from '../config/GameConfig';

/**
 * Factory for creating Three.js meshes
 * Centralizes mesh creation logic
 */
export class MeshFactory {
  /**
   * Creates a node circle mesh
   */
  static createNodeCircle(x: number, y: number, size: number = NodeConfig.CircleSize): THREE.Mesh {
    const geometry = new THREE.CircleGeometry(size, NodeConfig.CircleSegments).center();
    const material = new THREE.MeshBasicMaterial({ color: NodeConfig.DefaultColor });
    const circle = new THREE.Mesh(geometry, material);
    circle.position.set(x, y, 0);
    return circle;
  }

  /**
   * Creates a player mesh
   */
  static createPlayer(color: number = 0xffff00): THREE.Mesh {
    const size = PlayerConfig.CubeSize;
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshBasicMaterial({ color });
    return new THREE.Mesh(geometry, material);
  }

  /**
   * Creates a line segment for obstacles
   */
  static createLineSegment(
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): THREE.Line {
    const material = new THREE.LineBasicMaterial({ color: ObstacleConfig.LineColor });
    const points = [
      new THREE.Vector3(x1, y1, 0),
      new THREE.Vector3(x2, y2, 0),
    ];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    return line;
  }

  /**
   * Creates a placeholder undefined mesh
   */
  static createUndefinedMesh(): THREE.Mesh {
    const geometry = new THREE.CircleGeometry();
    const material = new THREE.MeshBasicMaterial();
    return new THREE.Mesh(geometry, material);
  }

  /**
   * Updates mesh color
   */
  static setMeshColor(mesh: THREE.Mesh, color: number): void {
    if (mesh.material instanceof THREE.MeshBasicMaterial) {
      mesh.material.color.setHex(color);
    }
  }

  /**
   * Updates mesh position
   */
  static setMeshPosition(mesh: THREE.Mesh, x: number, y: number, z: number = 0): void {
    mesh.position.set(x, y, z);
  }

  /**
   * Updates mesh scale
   */
  static setMeshScale(mesh: THREE.Mesh, scale: number): void {
    mesh.scale.set(scale, scale, scale);
  }
}
