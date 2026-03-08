import * as THREE from 'three';
import { NodeConfig, ObstacleConfig, RenderConfig } from '../config/GameConfig';

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
   * Creates a player mesh (arrow marker, pointing up by default)
   */
  static createPlayer(color: number = 0xffff00): THREE.Mesh {
    const s = RenderConfig.PlayerMarkerSize;
    const shape = new THREE.Shape();
    shape.moveTo(0, s);
    shape.lineTo(s * 0.5, 0);
    shape.lineTo(s * 0.3, 0);
    shape.lineTo(s * 0.3, -s);
    shape.lineTo(-s * 0.3, -s);
    shape.lineTo(-s * 0.3, 0);
    shape.lineTo(-s * 0.5, 0);
    shape.closePath();
    const geometry = new THREE.ShapeGeometry(shape);
    const material = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
    return new THREE.Mesh(geometry, material);
  }

  /**
   * Creates a player mesh from a preloaded GLTF template (clones the model, tints with color)
   */
  static createPlayerFromGLTF(template: THREE.Group, color: number): THREE.Group {
    const clone = template.clone(true);
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = (child.material as THREE.Material).clone();
        if ('color' in child.material) {
          (child.material as THREE.MeshStandardMaterial).color.setHex(color);
        }
      }
    });
    return clone;
  }

  /**
   * Creates a primitive player character (cylinder body + sphere head)
   */
  static createPrimitivePlayer(color: number = 0xffff00): THREE.Group {
    const group = new THREE.Group();
    const s = RenderConfig.PlayerMarkerSize;

    // Body: cylinder
    const bodyGeo = new THREE.CylinderGeometry(s * 0.15, s * 0.15, s * 0.5, 16);
    const bodyMat = new THREE.MeshStandardMaterial({ color });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = s * 0.25;
    group.add(body);

    // Head: sphere
    const headGeo = new THREE.SphereGeometry(s * 0.2, 16, 16);
    const headMat = new THREE.MeshStandardMaterial({ color });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = s * 0.65;
    group.add(head);

    return group;
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
    if (mesh.material instanceof THREE.MeshBasicMaterial ||
        mesh.material instanceof THREE.MeshStandardMaterial) {
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
