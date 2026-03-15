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
 * Updates mesh color (MeshBasicMaterial or MeshStandardMaterial)
 */
export function setMeshColor(mesh: THREE.Mesh, color: number): void {
  if (mesh.material instanceof THREE.MeshBasicMaterial ||
      mesh.material instanceof THREE.MeshStandardMaterial) {
    mesh.material.color.setHex(color);
  }
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

/**
 * Updates mesh position
 */
export function setMeshPosition(mesh: THREE.Mesh, x: number, y: number, z: number = 0): void {
  mesh.position.set(x, y, z);
}

/**
 * Updates mesh scale uniformly
 */
export function setMeshScale(mesh: THREE.Mesh, scale: number): void {
  mesh.scale.set(scale, scale, scale);
}
