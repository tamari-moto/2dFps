import * as THREE from 'three';
import { NodeConfig, NodeVisualConfig, ShadowConfig } from '../../config/GameConfig';
import { gameToWorld } from '../utils/MeshUtils';

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
