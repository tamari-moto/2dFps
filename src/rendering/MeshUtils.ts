import * as THREE from 'three';

/**
 * Convert game-space (x, y) to Three.js world position.
 * Game logic uses XY plane; Three.js scene uses XZ plane (Y = up).
 * Mapping: game(x, y) → three(x, 0, y)
 */
export function gameToWorld(gx: number, gy: number, height = 0): THREE.Vector3 {
  return new THREE.Vector3(gx, height, gy);
}

/**
 * Creates a placeholder undefined mesh
 */
export function createUndefinedMesh(): THREE.Mesh {
  const geometry = new THREE.CircleGeometry();
  const material = new THREE.MeshBasicMaterial();
  return new THREE.Mesh(geometry, material);
}

/**
 * Updates node circle color and emissive intensity (for MeshStandardMaterial nodes)
 */
export function setNodeColor(mesh: THREE.Mesh, color: number, emissiveIntensity: number): void {
  if (mesh.material instanceof THREE.MeshStandardMaterial) {
    mesh.material.color.setHex(color);
    mesh.material.emissive.setHex(color);
    mesh.material.emissiveIntensity = emissiveIntensity;
  }
}

