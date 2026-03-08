import * as THREE from 'three';
import { NodeConfig, NodeVisualConfig, ObstacleConfig, WallConfig } from '../config/GameConfig';

/**
 * Creates a node circle mesh
 */
export function createNodeCircle(x: number, y: number, size: number = NodeConfig.CircleSize): THREE.Mesh {
  const geometry = new THREE.CircleGeometry(size, NodeConfig.CircleSegments).center();
  const material = new THREE.MeshStandardMaterial({
    color: NodeConfig.DefaultColor,
    roughness: NodeVisualConfig.Roughness,
    metalness: NodeVisualConfig.Metalness,
    emissive: new THREE.Color(NodeConfig.DefaultColor),
    emissiveIntensity: NodeVisualConfig.EmissiveDefaultIntensity,
  });
  const circle = new THREE.Mesh(geometry, material);
  circle.position.set(x, y, 0);
  return circle;
}

/**
 * Creates a 3D wall mesh for obstacle line segments
 */
export function createWallMesh(x1: number, y1: number, x2: number, y2: number): THREE.Mesh {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx);

  const geo = new THREE.BoxGeometry(length, WallConfig.Height, WallConfig.Depth);
  const mat = new THREE.MeshStandardMaterial({
    color: WallConfig.Color,
    roughness: WallConfig.Roughness,
    metalness: WallConfig.Metalness,
    emissive: new THREE.Color(WallConfig.EmissiveColor),
    emissiveIntensity: WallConfig.EmissiveIntensity,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set((x1 + x2) / 2, (y1 + y2) / 2, WallConfig.ZOffset);
  mesh.rotation.z = angle;
  mesh.userData[WallConfig.UserDataTag] = true;
  return mesh;
}

/**
 * Creates a line segment for obstacles (legacy)
 */
export function createLineSegment(x1: number, y1: number, x2: number, y2: number): THREE.Line {
  const material = new THREE.LineBasicMaterial({ color: ObstacleConfig.LineColor });
  const points = [
    new THREE.Vector3(x1, y1, 0),
    new THREE.Vector3(x2, y2, 0),
  ];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  return new THREE.Line(geometry, material);
}
