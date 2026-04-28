import * as THREE from 'three';
import { NodeConfig, NodeVisualConfig, ShadowConfig, WallConfig } from '../config/GameConfig';
import { gameToWorld } from './MeshUtils';

/**
 * Creates a node circle mesh.
 * x, y are game-space coordinates; converted to XZ world plane via gameToWorld.
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
  circle.rotation.x = -Math.PI / 2;
  circle.position.copy(gameToWorld(x, y));
  circle.receiveShadow = ShadowConfig.Enabled;
  return circle;
}

/**
 * Creates a 3D wall mesh for obstacle line segments.
 * x1,y1,x2,y2 are game-space coordinates; placed on the XZ plane via gameToWorld.
 */
export function createWallMesh(x1: number, y1: number, x2: number, y2: number): THREE.Mesh {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.sqrt(dx * dx + dy * dy);
  // In XZ plane, rotation around Y axis
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
  mesh.position.copy(gameToWorld((x1 + x2) / 2, (y1 + y2) / 2, WallConfig.ZOffset));
  mesh.rotation.y = -angle;
  mesh.castShadow = ShadowConfig.Enabled;
  mesh.receiveShadow = ShadowConfig.Enabled;
  mesh.userData[WallConfig.UserDataTag] = true;
  return mesh;
}
