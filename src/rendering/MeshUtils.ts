import * as THREE from 'three';

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

