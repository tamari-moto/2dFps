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
 * Creates a primitive humanoid player character:
 * body (cylinder) + head (sphere) + arms + nose + eyes + pupils + glow ring
 *
 * Coordinate note: VisualizationSync applies rotation.x = π/2 to lay the group flat.
 * After that rotation:
 *   local +Y → screen forward (player facing direction)
 *   local ±X → screen left/right
 *   local +Z → toward camera (visible from above)
 * Eyes and nose are placed using +Y (front) and +Z (toward camera) offsets.
 */
export function createPrimitivePlayer(color: number = 0xffff00): THREE.Group {
  const group = new THREE.Group();
  const s = RenderConfig.PlayerMarkerSize;

  const bodyMat = new THREE.MeshStandardMaterial({
    color,
    roughness: RenderConfig.PlayerBodyRoughness,
    metalness: RenderConfig.PlayerBodyMetalness,
  });

  // --- Legs (added before body so they render behind it) ---
  const legGeo = new THREE.CylinderGeometry(
    s * RenderConfig.PlayerLegTopRadius,
    s * RenderConfig.PlayerLegBottomRadius,
    s * RenderConfig.PlayerLegLength,
    RenderConfig.PlayerLegSegments
  );
  const leftLeg = new THREE.Mesh(legGeo, bodyMat);
  leftLeg.userData.partName = 'leftLeg';
  leftLeg.position.set(-s * RenderConfig.PlayerLegOffsetX, s * RenderConfig.PlayerLegOffsetY, 0);
  group.add(leftLeg);

  const rightLeg = new THREE.Mesh(legGeo, bodyMat);
  rightLeg.userData.partName = 'rightLeg';
  rightLeg.position.set(s * RenderConfig.PlayerLegOffsetX, s * RenderConfig.PlayerLegOffsetY, 0);
  group.add(rightLeg);

  // --- Body ---
  const bodyGeo = new THREE.CylinderGeometry(
    s * 0.15, s * 0.15, s * 0.5,
    RenderConfig.PlayerBodySegments
  );
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.userData.partName = 'body';
  body.position.y = s * 0.25;
  group.add(body);

  // --- Head ---
  const headR = s * 0.2;
  const headGeo = new THREE.SphereGeometry(headR, RenderConfig.PlayerHeadSegments, RenderConfig.PlayerHeadSegments);
  const headMat = new THREE.MeshStandardMaterial({
    color,
    roughness: RenderConfig.PlayerHeadRoughness,
    metalness: RenderConfig.PlayerHeadMetalness,
  });
  const head = new THREE.Mesh(headGeo, headMat);
  head.userData.partName = 'head';
  head.position.y = s * 0.65;
  group.add(head);

  // --- Left arm ---
  const armGeo = new THREE.CylinderGeometry(
    s * RenderConfig.PlayerArmRadius,
    s * RenderConfig.PlayerArmRadius,
    s * RenderConfig.PlayerArmLength,
    RenderConfig.PlayerArmSegments
  );
  const armMat = new THREE.MeshStandardMaterial({
    color,
    roughness: RenderConfig.PlayerArmRoughness,
    metalness: RenderConfig.PlayerArmMetalness,
  });
  const leftArm = new THREE.Mesh(armGeo, armMat);
  leftArm.userData.partName = 'leftArm';
  leftArm.rotation.z = Math.PI / 2;
  leftArm.position.set(-s * RenderConfig.PlayerArmOffsetX, s * RenderConfig.PlayerArmOffsetY, 0);
  group.add(leftArm);

  // --- Right arm ---
  const rightArm = new THREE.Mesh(armGeo, armMat);
  rightArm.userData.partName = 'rightArm';
  rightArm.rotation.z = Math.PI / 2;
  rightArm.position.set(s * RenderConfig.PlayerArmOffsetX, s * RenderConfig.PlayerArmOffsetY, 0);
  group.add(rightArm);

  // --- Hands ---
  const handGeo = new THREE.SphereGeometry(
    s * RenderConfig.PlayerHandRadius,
    RenderConfig.PlayerHandSegments,
    RenderConfig.PlayerHandSegments
  );
  const leftHand = new THREE.Mesh(handGeo, armMat);
  leftHand.userData.partName = 'leftHand';
  leftHand.position.set(-s * RenderConfig.PlayerHandOffsetX, s * RenderConfig.PlayerHandOffsetY, 0);
  group.add(leftHand);

  const rightHand = new THREE.Mesh(handGeo, armMat);
  rightHand.userData.partName = 'rightHand';
  rightHand.position.set(s * RenderConfig.PlayerHandOffsetX, s * RenderConfig.PlayerHandOffsetY, 0);
  group.add(rightHand);

  // --- Nose (small cone pointing in +Y = forward direction) ---
  const noseGeo = new THREE.ConeGeometry(
    s * RenderConfig.PlayerNoseRadiusRatio,
    s * RenderConfig.PlayerNoseHeightRatio,
    RenderConfig.PlayerNoseSegments
  );
  const noseMat = new THREE.MeshStandardMaterial({
    color,
    roughness: RenderConfig.PlayerNoseRoughness,
    metalness: RenderConfig.PlayerNoseMetalness,
    emissive: new THREE.Color(color),
    emissiveIntensity: 0.15,
  });
  const nose = new THREE.Mesh(noseGeo, noseMat);
  nose.userData.partName = 'nose';
  // Nose sits at the front (+Y) of the head surface
  nose.position.set(0, s * 0.65 + headR, 0);
  group.add(nose);

  // --- Eyes (white sclera) ---
  const eyeGeo = new THREE.SphereGeometry(
    s * RenderConfig.PlayerEyeRadius,
    RenderConfig.PlayerEyeSegments,
    RenderConfig.PlayerEyeSegments
  );
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3, metalness: 0 });

  const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
  leftEye.position.set(
    -s * RenderConfig.PlayerEyeOffsetX,
    s * RenderConfig.PlayerEyeOffsetY,
    s * RenderConfig.PlayerEyeOffsetZ
  );
  group.add(leftEye);

  const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
  rightEye.position.set(
    s * RenderConfig.PlayerEyeOffsetX,
    s * RenderConfig.PlayerEyeOffsetY,
    s * RenderConfig.PlayerEyeOffsetZ
  );
  group.add(rightEye);

  // --- Pupils (dark) ---
  const pupilGeo = new THREE.SphereGeometry(
    s * RenderConfig.PlayerPupilRadius,
    RenderConfig.PlayerPupilSegments,
    RenderConfig.PlayerPupilSegments
  );
  const pupilMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8, metalness: 0 });

  const leftPupil = new THREE.Mesh(pupilGeo, pupilMat);
  leftPupil.position.set(
    -s * RenderConfig.PlayerEyeOffsetX,
    s * RenderConfig.PlayerEyeOffsetY,
    s * RenderConfig.PlayerPupilOffsetZ
  );
  group.add(leftPupil);

  const rightPupil = new THREE.Mesh(pupilGeo, pupilMat);
  rightPupil.position.set(
    s * RenderConfig.PlayerEyeOffsetX,
    s * RenderConfig.PlayerEyeOffsetY,
    s * RenderConfig.PlayerPupilOffsetZ
  );
  group.add(rightPupil);

  // --- Neck ---
  const neckGeo = new THREE.CylinderGeometry(
    s * RenderConfig.PlayerNeckTopRadius,
    s * RenderConfig.PlayerNeckBottomRadius,
    s * RenderConfig.PlayerNeckHeight,
    RenderConfig.PlayerNeckSegments
  );
  const neck = new THREE.Mesh(neckGeo, bodyMat);
  neck.userData.partName = 'neck';
  neck.position.set(0, s * RenderConfig.PlayerNeckOffsetY, 0);
  group.add(neck);

  // --- Tactical Helmet ---
  const helmetMat = new THREE.MeshStandardMaterial({
    color: RenderConfig.PlayerHelmetColor,
    roughness: RenderConfig.PlayerHelmetRoughness,
    metalness: RenderConfig.PlayerHelmetMetalness,
  });
  const helmetGeo = new THREE.SphereGeometry(
    s * RenderConfig.PlayerHelmetRadius,
    RenderConfig.PlayerHelmetSegments,
    RenderConfig.PlayerHelmetSegments
  );
  const helmet = new THREE.Mesh(helmetGeo, helmetMat);
  helmet.userData.partName = 'helmet';
  helmet.userData.fixedColor = true;
  helmet.position.set(0, s * RenderConfig.PlayerHelmetOffsetY, 0);
  helmet.scale.set(1.0, RenderConfig.PlayerHelmetScaleY, 1.0);
  helmet.renderOrder = 1;
  group.add(helmet);

  // --- Weapon / Rifle ---
  const weaponMat = new THREE.MeshStandardMaterial({
    color: RenderConfig.PlayerWeaponColor,
    roughness: RenderConfig.PlayerWeaponRoughness,
    metalness: RenderConfig.PlayerWeaponMetalness,
  });
  const weaponGeo = new THREE.BoxGeometry(
    s * RenderConfig.PlayerWeaponWidth,
    s * RenderConfig.PlayerWeaponLength,
    s * RenderConfig.PlayerWeaponDepth
  );
  const weapon = new THREE.Mesh(weaponGeo, weaponMat);
  weapon.userData.partName = 'weapon';
  weapon.userData.fixedColor = true;
  weapon.position.set(s * RenderConfig.PlayerWeaponOffsetX, s * RenderConfig.PlayerWeaponOffsetY, 0);
  group.add(weapon);

  // --- Glow ring at base ---
  const ringGeo = new THREE.RingGeometry(
    s * RenderConfig.PlayerGlowRingInnerRatio,
    s * RenderConfig.PlayerGlowRingOuterRatio,
    RenderConfig.PlayerGlowRingSegments
  );
  const ringMat = new THREE.MeshStandardMaterial({
    color,
    roughness: RenderConfig.PlayerGlowRingRoughness,
    metalness: RenderConfig.PlayerGlowRingMetalness,
    emissive: new THREE.Color(color),
    emissiveIntensity: RenderConfig.PlayerGlowRingEmissiveIntensity,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.6,
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.userData.partName = 'ring';
  ring.position.y = 0;
  group.add(ring);

  return group;
}
