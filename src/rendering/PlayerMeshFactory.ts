import * as THREE from 'three';
import { RenderConfig } from '../config/GameConfig';

/**
 * Creates a player mesh (arrow marker, pointing up by default)
 */
export function createPlayer(color: number = 0xffff00): THREE.Mesh {
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
export function createPlayerFromGLTF(template: THREE.Group, color: number): THREE.Group {
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
 * Creates a primitive tactical-drone player:
 * body (octagon) + cockpit (emissive circle) + barrel (gun) + thrusterL + thrusterR
 *
 * Coordinate note: VisualizationSync applies rotation.x = π/2 to lay the group flat.
 * After that rotation:
 *   local +Y → screen forward (player facing direction)
 *   local ±X → screen left/right
 *   local +Z → toward camera (visible from above)
 */
export function createPrimitivePlayer(color: number = 0xffff00): THREE.Group {
  const group = new THREE.Group();
  const s = RenderConfig.PlayerMarkerSize;

  const bodyMat = new THREE.MeshStandardMaterial({
    color,
    roughness: RenderConfig.PlayerBodyRoughness,
    metalness: RenderConfig.PlayerBodyMetalness,
  });

  // --- Body: octagonal drone hull ---
  const bodyGeo = new THREE.CylinderGeometry(
    s * RenderConfig.PlayerBodyRadius,
    s * RenderConfig.PlayerBodyRadius,
    s * RenderConfig.PlayerBodyThickness,
    RenderConfig.PlayerBodySegments
  );
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.userData.partName = 'body';
  group.add(body);

  // --- Cockpit: emissive circle indicating forward direction ---
  const cockpitGeo = new THREE.CircleGeometry(s * RenderConfig.PlayerCockpitRadius, 16);
  const cockpitMat = new THREE.MeshStandardMaterial({
    color,
    emissive: new THREE.Color(color),
    emissiveIntensity: RenderConfig.PlayerCockpitEmissiveIntensity,
    roughness: 0.2,
    metalness: 0.0,
    side: THREE.DoubleSide,
  });
  const cockpit = new THREE.Mesh(cockpitGeo, cockpitMat);
  cockpit.userData.partName = 'cockpit';
  cockpit.position.set(0, s * RenderConfig.PlayerCockpitOffsetY, s * RenderConfig.PlayerBodyThickness * 0.6);
  group.add(cockpit);

  // --- Barrel: gun pointing in +Y (forward) ---
  const barrelGeo = new THREE.BoxGeometry(
    s * RenderConfig.PlayerBarrelWidth,
    s * RenderConfig.PlayerBarrelLength,
    s * RenderConfig.PlayerBodyThickness * 0.8
  );
  const barrelMat = new THREE.MeshStandardMaterial({
    color: RenderConfig.PlayerBarrelColor,
    roughness: 0.25,
    metalness: 0.8,
  });
  const barrel = new THREE.Mesh(barrelGeo, barrelMat);
  barrel.userData.partName = 'barrel';
  barrel.userData.fixedColor = true;
  barrel.position.set(0, s * RenderConfig.PlayerBarrelOffsetY, s * RenderConfig.PlayerBodyThickness * 0.4);
  group.add(barrel);

  // --- Thrusters: left and right wing pods ---
  const thrGeo = new THREE.BoxGeometry(
    s * RenderConfig.PlayerThrusterWidth,
    s * RenderConfig.PlayerThrusterLength,
    s * RenderConfig.PlayerBodyThickness * 0.7
  );
  const thrusterL = new THREE.Mesh(thrGeo, bodyMat.clone());
  thrusterL.userData.partName = 'thrusterL';
  thrusterL.position.set(-s * RenderConfig.PlayerThrusterOffsetX, 0, 0);
  group.add(thrusterL);

  const thrusterR = new THREE.Mesh(thrGeo, bodyMat.clone());
  thrusterR.userData.partName = 'thrusterR';
  thrusterR.position.set(s * RenderConfig.PlayerThrusterOffsetX, 0, 0);
  group.add(thrusterR);

  return group;
}
