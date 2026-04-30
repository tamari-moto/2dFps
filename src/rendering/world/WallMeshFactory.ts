import * as THREE from 'three';
import { ShadowConfig, WallConfig } from '../../config/GameConfig';
import { gameToWorld } from '../utils/MeshUtils';

/**
 * Creates a 3D wall mesh for an obstacle line segment.
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
