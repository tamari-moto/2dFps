import * as THREE from 'three';
import { RenderConfig } from '../config/GameConfig';

// ── Variant definitions (rendering-layer internal, not exported) ──────────────
const VARIANTS = [
  { name: 'SCOUT',   torsoW: 0.90, torsoH: 1.9,  hipW: 0.78, headR: 0.46, armW: 0.09, legW: 0.14, hat: 'none'   as const, gear: 'bow'    as const, aura: false },
  { name: 'WARRIOR', torsoW: 1.24, torsoH: 2.1,  hipW: 1.04, headR: 0.51, armW: 0.13, legW: 0.18, hat: 'helmet' as const, gear: 'sword'  as const, aura: false },
  { name: 'MAGE',    torsoW: 0.98, torsoH: 2.2,  hipW: 0.85, headR: 0.47, armW: 0.08, legW: 0.13, hat: 'cone'   as const, gear: 'staff'  as const, aura: true  },
  { name: 'KNIGHT',  torsoW: 1.20, torsoH: 2.05, hipW: 1.01, headR: 0.49, armW: 0.12, legW: 0.18, hat: 'visor'  as const, gear: 'shield' as const, aura: false },
] as const;
type VariantDef = typeof VARIANTS[number];

// ── Helper: standard body material (color-tinted) ────────────────────────────
function bodyMat(color: number): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: RenderConfig.PlayerBodyRoughness,
    metalness: RenderConfig.PlayerBodyMetalness,
  });
}

// ── Helper: fixed-color metal material ───────────────────────────────────────
function metalMat(hex: number): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: hex,
    roughness: RenderConfig.PlayerHelmetRoughness,
    metalness: RenderConfig.PlayerHelmetMetalness,
  });
}

// ── Glow ring at base (partName='ring') ──────────────────────────────────────
function buildRing(s: number, color: number): THREE.Mesh {
  const geo = new THREE.RingGeometry(
    s * RenderConfig.PlayerGlowRingInnerRatio,
    s * RenderConfig.PlayerGlowRingOuterRatio,
    RenderConfig.PlayerGlowRingSegments
  );
  const mat = new THREE.MeshStandardMaterial({
    color,
    roughness: RenderConfig.PlayerGlowRingRoughness,
    metalness: RenderConfig.PlayerGlowRingMetalness,
    emissive: new THREE.Color(color),
    emissiveIntensity: RenderConfig.PlayerGlowRingEmissiveIntensity,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.6,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.userData.partName = 'ring';
  mesh.position.y = 0;
  return mesh;
}

// ── Aura ring for MAGE (partName='ring') ─────────────────────────────────────
function buildAuraRing(s: number, color: number): THREE.Mesh {
  const geo = new THREE.TorusGeometry(s * 0.5, s * 0.03, 5, 32);
  const mat = new THREE.MeshStandardMaterial({
    color,
    emissive: new THREE.Color(color),
    emissiveIntensity: 1.0,
    roughness: 0.3,
    metalness: 0.0,
    transparent: true,
    opacity: 0.6,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.userData.partName = 'ring';
  mesh.rotation.x = Math.PI / 2;
  mesh.position.y = 0;
  return mesh;
}

// ── Leg group: thigh + shin + foot ───────────────────────────────────────────
function buildLegGroup(s: number, HS: number, v: VariantDef, side: 'left' | 'right', mat: THREE.Material): THREE.Group {
  const g = new THREE.Group();
  const sign = side === 'left' ? -1 : 1;
  const lx = sign * v.hipW * s * 0.38;

  // Thigh
  const thigh = new THREE.Mesh(
    new THREE.CylinderGeometry(v.legW * s * 0.5, v.legW * s * 0.4, HS * 1.0, 5),
    mat
  );
  thigh.position.set(lx, HS * -1.35, 0);
  g.add(thigh);

  // Shin
  const shin = new THREE.Mesh(
    new THREE.CylinderGeometry(v.legW * s * 0.38, v.legW * s * 0.32, HS * 1.0, 5),
    mat
  );
  shin.position.set(lx, HS * -2.3, 0);
  g.add(shin);

  // Foot
  const foot = new THREE.Mesh(
    new THREE.BoxGeometry(v.legW * s * 1.3, HS * 0.22, s * 0.3),
    mat
  );
  foot.position.set(lx, HS * -3.1, s * 0.07);
  g.add(foot);

  return g;
}

// ── Hips ─────────────────────────────────────────────────────────────────────
function buildHips(s: number, HS: number, v: VariantDef, mat: THREE.Material): THREE.Mesh {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(v.hipW * s, HS * 0.48, s * 0.62),
    mat
  );
  mesh.position.y = HS * -0.7;
  return mesh;
}

// ── Torso ─────────────────────────────────────────────────────────────────────
function buildTorso(s: number, HS: number, v: VariantDef, mat: THREE.Material): THREE.Mesh {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(v.torsoW * s, HS * v.torsoH, s * 0.68),
    mat
  );
  mesh.position.y = HS * 0.2;
  return mesh;
}

// ── Neck ──────────────────────────────────────────────────────────────────────
function buildNeck(s: number, HS: number, mat: THREE.Material): THREE.Mesh {
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(s * 0.17, s * 0.21, HS * 0.42, 5),
    mat
  );
  mesh.position.y = HS * 0.95;
  return mesh;
}

// ── Head (partName='head') ────────────────────────────────────────────────────
function buildHead(s: number, HS: number, v: VariantDef, color: number): THREE.Mesh {
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(v.headR * s, 6, 4),
    new THREE.MeshStandardMaterial({
      color,
      roughness: RenderConfig.PlayerHeadRoughness,
      metalness: RenderConfig.PlayerHeadMetalness,
    })
  );
  mesh.userData.partName = 'head';
  mesh.position.y = HS * 1.3;
  return mesh;
}

// ── Arm group: upper + forearm + hand (partName set by caller) ────────────────
function buildArmGroup(s: number, HS: number, v: VariantDef, side: 'left' | 'right', mat: THREE.Material): THREE.Group {
  const g = new THREE.Group();
  const sign = side === 'left' ? -1 : 1;
  const ax = sign * (v.torsoW * s * 0.54 + v.armW * s * 0.5);

  // Upper arm
  const ua = new THREE.Mesh(
    new THREE.CylinderGeometry(v.armW * s, v.armW * s * 0.85, HS * 1.15, 5),
    mat
  );
  ua.position.set(ax, HS * 0.35, 0);
  g.add(ua);

  // Forearm
  const fa = new THREE.Mesh(
    new THREE.CylinderGeometry(v.armW * s * 0.78, v.armW * s, HS * 1.05, 5),
    mat
  );
  fa.position.set(ax, HS * -0.35, 0);
  g.add(fa);

  // Hand
  const hand = new THREE.Mesh(
    new THREE.BoxGeometry(v.armW * s * 1.8, HS * 0.32, s * 0.13),
    mat
  );
  hand.position.set(ax, HS * -1.0, 0);
  g.add(hand);

  return g;
}

// ── Pauldrons (WARRIOR / KNIGHT) ─────────────────────────────────────────────
function buildPauldrons(s: number, HS: number, v: VariantDef, mat: THREE.Material): THREE.Group {
  const g = new THREE.Group();
  ([-v.torsoW * s * 0.58, v.torsoW * s * 0.58] as number[]).forEach(x => {
    const p = new THREE.Mesh(new THREE.SphereGeometry(s * 0.32, 5, 4), mat);
    p.position.set(x, HS * 0.7, 0);
    g.add(p);
  });
  return g;
}

// ── Cape (MAGE) ───────────────────────────────────────────────────────────────
function buildCape(s: number, HS: number, color: number): THREE.Mesh {
  const mesh = new THREE.Mesh(
    new THREE.ConeGeometry(s * 0.9, HS * 2.4, 5),
    new THREE.MeshStandardMaterial({
      color,
      roughness: 0.9,
      metalness: 0.0,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
    })
  );
  mesh.position.set(0, HS * -0.1, -s * 0.3);
  mesh.rotation.x = 0.18;
  return mesh;
}

// ── Hat: helmet (WARRIOR) ─────────────────────────────────────────────────────
function buildHatHelmet(s: number, HS: number, headR: number): THREE.Group {
  const g = new THREE.Group();
  const mat = metalMat(RenderConfig.PlayerHelmetColor);
  mat.roughness = RenderConfig.PlayerHelmetRoughness;
  mat.metalness = RenderConfig.PlayerHelmetMetalness;

  const helm = new THREE.Mesh(
    new THREE.BoxGeometry(headR * s * 2.1, headR * s * 1.1, headR * s * 2.0),
    mat
  );
  helm.userData.fixedColor = true;
  helm.position.y = HS * 1.3 + headR * s * 0.55;
  g.add(helm);

  const visorSlitMat = new THREE.MeshStandardMaterial({ color: 0x000810, roughness: 0.9, metalness: 0.0 });
  const visorSlit = new THREE.Mesh(
    new THREE.BoxGeometry(headR * s * 1.8, headR * s * 0.3, s * 0.08),
    visorSlitMat
  );
  visorSlit.userData.fixedColor = true;
  visorSlit.position.set(0, HS * 1.3 + headR * s * 0.05, headR * s * 0.98);
  g.add(visorSlit);

  return g;
}

// ── Hat: cone (MAGE) ──────────────────────────────────────────────────────────
function buildHatCone(s: number, HS: number, headR: number, color: number): THREE.Group {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.8, metalness: 0.0 });

  const cone = new THREE.Mesh(new THREE.ConeGeometry(headR * s * 0.85, HS * 1.3, 6), mat);
  cone.position.y = HS * 1.3 + headR * s + HS * 0.65;
  g.add(cone);

  const brim = new THREE.Mesh(
    new THREE.CylinderGeometry(headR * s * 1.3, headR * s * 1.3, HS * 0.12, 8),
    mat
  );
  brim.position.y = HS * 1.3 + headR * s * 0.1;
  g.add(brim);

  return g;
}

// ── Hat: visor (KNIGHT) ───────────────────────────────────────────────────────
function buildHatVisor(s: number, HS: number, headR: number): THREE.Group {
  const g = new THREE.Group();
  const mat = metalMat(RenderConfig.PlayerHelmetColor);

  const visor = new THREE.Mesh(
    new THREE.BoxGeometry(headR * s * 2.1, headR * s * 0.5, s * 0.10),
    mat
  );
  visor.userData.fixedColor = true;
  visor.position.set(0, HS * 1.3, headR * s * 0.95);
  g.add(visor);

  const ridge = new THREE.Mesh(
    new THREE.BoxGeometry(s * 0.12, headR * s * 0.9, headR * s * 2.1),
    mat
  );
  ridge.userData.fixedColor = true;
  ridge.position.y = HS * 1.3 + headR * s * 0.55;
  g.add(ridge);

  return g;
}

// ── Gear: bow (SCOUT) ─────────────────────────────────────────────────────────
function buildGearBow(s: number, HS: number, rx: number, color: number): THREE.Group {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0.1 });

  const arc = new THREE.Mesh(new THREE.TorusGeometry(s * 0.55, s * 0.04, 5, 12, Math.PI), mat);
  arc.position.set(rx + s * 0.18, HS * -0.2, 0);
  arc.rotation.z = Math.PI / 2;
  g.add(arc);

  const str = new THREE.Mesh(new THREE.BoxGeometry(s * 0.03, s * 1.1, s * 0.03), mat);
  str.position.set(rx + s * 0.18, HS * -0.2, 0);
  g.add(str);

  return g;
}

// ── Gear: sword (WARRIOR) ─────────────────────────────────────────────────────
function buildGearSword(s: number, HS: number, rx: number): THREE.Group {
  const g = new THREE.Group();
  const mat = metalMat(RenderConfig.PlayerWeaponColor);

  const blade = new THREE.Mesh(new THREE.BoxGeometry(s * 0.08, HS * 1.6, s * 0.05), mat);
  blade.userData.fixedColor = true;
  blade.position.set(rx + s * 0.18, HS * -0.4, 0);
  g.add(blade);

  const guard = new THREE.Mesh(new THREE.BoxGeometry(s * 0.5, s * 0.1, s * 0.06), mat);
  guard.userData.fixedColor = true;
  guard.position.set(rx + s * 0.18, HS * 0.2, 0);
  g.add(guard);

  return g;
}

// ── Gear: staff (MAGE) ────────────────────────────────────────────────────────
function buildGearStaff(s: number, HS: number, rx: number, color: number): THREE.Group {
  const g = new THREE.Group();

  const poleMat = new THREE.MeshStandardMaterial({ color: RenderConfig.PlayerWeaponColor, roughness: 0.6, metalness: 0.3 });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.04, s * 0.04, HS * 2.4, 5), poleMat);
  pole.userData.fixedColor = true;
  pole.position.set(rx + s * 0.2, HS * -0.1, 0);
  g.add(pole);

  const orbMat = new THREE.MeshStandardMaterial({
    color,
    emissive: new THREE.Color(color),
    emissiveIntensity: 0.8,
    roughness: 0.2,
    metalness: 0.1,
    transparent: true,
    opacity: 0.85,
  });
  const orb = new THREE.Mesh(new THREE.OctahedronGeometry(s * 0.22, 0), orbMat);
  orb.position.set(rx + s * 0.2, HS * 1.1, 0);
  g.add(orb);

  return g;
}

// ── Gear: shield (KNIGHT) ─────────────────────────────────────────────────────
function buildGearShield(s: number, HS: number, lx: number): THREE.Group {
  const g = new THREE.Group();
  const mat = metalMat(RenderConfig.PlayerWeaponColor);

  const sh = new THREE.Mesh(new THREE.BoxGeometry(s * 0.7, HS * 0.9, s * 0.1), mat);
  sh.userData.fixedColor = true;
  sh.position.set(lx - s * 0.25, HS * -0.1, 0);
  g.add(sh);

  // Rim
  const rimMat = metalMat(RenderConfig.PlayerHelmetColor);
  const rim = new THREE.Mesh(new THREE.BoxGeometry(s * 0.78, HS * 0.98, s * 0.05), rimMat);
  rim.userData.fixedColor = true;
  rim.position.set(lx - s * 0.25, HS * -0.1, -s * 0.04);
  g.add(rim);

  return g;
}

// ── Public: create variant player ────────────────────────────────────────────
/**
 * Creates a humanoid player character for the given variant index.
 * variantIndex cycles through SCOUT(0) / WARRIOR(1) / MAGE(2) / KNIGHT(3).
 *
 * Coordinate note: VisualizationSync applies rotation.x = π/2 to lay the group flat.
 * After that rotation:
 *   local +Y → screen forward (player facing direction)
 *   local ±X → screen left/right
 *   local +Z → toward camera (visible from above)
 */
export function createVariantPlayer(variantIndex: number, color: number = 0xffff00): THREE.Group {
  const group = new THREE.Group();
  const s = RenderConfig.PlayerMarkerSize;
  // HTML relative unit → Three.js coordinate conversion:
  // HTML char height ≈ 6.75 units, existing char height ≈ 1.05 * s → ratio 6.75/1.05 ≈ 6.4
  const HS = s / 6.4;
  const v = VARIANTS[variantIndex % VARIANTS.length];
  const bMat = bodyMat(color);

  // ── Glow / aura ring (partName='ring') ──
  group.add(v.aura ? buildAuraRing(s, color) : buildRing(s, color));

  // ── Legs ──
  group.add(buildLegGroup(s, HS, v, 'left', bMat));
  group.add(buildLegGroup(s, HS, v, 'right', bMat));

  // ── Hips ──
  group.add(buildHips(s, HS, v, bMat));

  // ── Torso ──
  group.add(buildTorso(s, HS, v, bMat));

  // ── Cape (MAGE only) ──
  if (v.aura) group.add(buildCape(s, HS, color));

  // ── Pauldrons (WARRIOR / KNIGHT) ──
  if (v.hat === 'helmet' || v.hat === 'visor') {
    group.add(buildPauldrons(s, HS, v, bMat));
  }

  // ── Neck ──
  group.add(buildNeck(s, HS, bMat));

  // ── Head (partName='head') ──
  group.add(buildHead(s, HS, v, color));

  // ── Hat ──
  if (v.hat === 'helmet') group.add(buildHatHelmet(s, HS, v.headR));
  else if (v.hat === 'cone') group.add(buildHatCone(s, HS, v.headR, color));
  else if (v.hat === 'visor') group.add(buildHatVisor(s, HS, v.headR));

  // ── Arms (partName='leftArm' / 'rightArm' on the Group) ──
  const rx = v.torsoW * s * 0.54 + v.armW * s * 0.5;
  const lx = -(v.torsoW * s * 0.54 + v.armW * s * 0.5);

  const leftArm = buildArmGroup(s, HS, v, 'left', bMat);
  leftArm.userData.partName = 'leftArm';
  group.add(leftArm);

  const rightArm = buildArmGroup(s, HS, v, 'right', bMat);
  rightArm.userData.partName = 'rightArm';
  group.add(rightArm);

  // ── Gear ──
  if (v.gear === 'bow')    group.add(buildGearBow(s, HS, rx, color));
  if (v.gear === 'sword')  group.add(buildGearSword(s, HS, rx));
  if (v.gear === 'staff')  group.add(buildGearStaff(s, HS, rx, color));
  if (v.gear === 'shield') group.add(buildGearShield(s, HS, lx));

  return group;
}

// ── Backward-compatible wrapper ───────────────────────────────────────────────
/**
 * Creates a player mesh (legacy wrapper — returns SCOUT variant).
 * @deprecated Use createVariantPlayer instead.
 */
export function createPrimitivePlayer(color: number = 0xffff00): THREE.Group {
  return createVariantPlayer(0, color);
}

// ── Arrow marker (2D fallback) ────────────────────────────────────────────────
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
