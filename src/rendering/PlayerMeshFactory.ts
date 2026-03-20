import * as THREE from 'three';
import { RenderConfig } from '../config/GameConfig';

// ── Scout character definition ────────────────────────────────────────────────
const SCOUT_DEF = {
  torsoW: 0.90, torsoH: 1.9, hipW: 0.78, headR: 0.46, armW: 0.09, legW: 0.14,
} as const;

// ── Helper: standard body material (color-tinted) ────────────────────────────
function bodyMat(color: number): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: RenderConfig.PlayerBodyRoughness,
    metalness: RenderConfig.PlayerBodyMetalness,
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

// ── Leg group: thigh + shin + foot ───────────────────────────────────────────
function buildLegGroup(s: number, HS: number, side: 'left' | 'right', mat: THREE.Material): THREE.Group {
  const g = new THREE.Group();
  const sign = side === 'left' ? -1 : 1;
  const lx = sign * SCOUT_DEF.hipW * s * 0.38;

  const thigh = new THREE.Mesh(
    new THREE.CylinderGeometry(SCOUT_DEF.legW * s * 0.5, SCOUT_DEF.legW * s * 0.4, HS * 1.0, 5),
    mat
  );
  thigh.position.set(lx, HS * -1.35, 0);
  g.add(thigh);

  const shin = new THREE.Mesh(
    new THREE.CylinderGeometry(SCOUT_DEF.legW * s * 0.38, SCOUT_DEF.legW * s * 0.32, HS * 1.0, 5),
    mat
  );
  shin.position.set(lx, HS * -2.3, 0);
  g.add(shin);

  const foot = new THREE.Mesh(
    new THREE.BoxGeometry(SCOUT_DEF.legW * s * 1.3, HS * 0.22, s * 0.3),
    mat
  );
  foot.position.set(lx, HS * -3.1, s * 0.07);
  g.add(foot);

  return g;
}

// ── Hips ─────────────────────────────────────────────────────────────────────
function buildHips(s: number, HS: number, mat: THREE.Material): THREE.Mesh {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(SCOUT_DEF.hipW * s, HS * 0.48, s * 0.62),
    mat
  );
  mesh.position.y = HS * -0.7;
  return mesh;
}

// ── Torso ─────────────────────────────────────────────────────────────────────
function buildTorso(s: number, HS: number, mat: THREE.Material): THREE.Mesh {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(SCOUT_DEF.torsoW * s, HS * SCOUT_DEF.torsoH, s * 0.68),
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
function buildHead(s: number, HS: number, color: number): THREE.Mesh {
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(SCOUT_DEF.headR * s, 6, 4),
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

// ── Arm group: upper + forearm + hand ────────────────────────────────────────
function buildArmGroup(s: number, HS: number, side: 'left' | 'right', mat: THREE.Material): THREE.Group {
  const g = new THREE.Group();
  const sign = side === 'left' ? -1 : 1;
  const ax = sign * (SCOUT_DEF.torsoW * s * 0.54 + SCOUT_DEF.armW * s * 0.5);

  const ua = new THREE.Mesh(
    new THREE.CylinderGeometry(SCOUT_DEF.armW * s, SCOUT_DEF.armW * s * 0.85, HS * 1.15, 5),
    mat
  );
  ua.position.set(ax, HS * 0.35, 0);
  g.add(ua);

  const fa = new THREE.Mesh(
    new THREE.CylinderGeometry(SCOUT_DEF.armW * s * 0.78, SCOUT_DEF.armW * s, HS * 1.05, 5),
    mat
  );
  fa.position.set(ax, HS * -0.35, 0);
  g.add(fa);

  const hand = new THREE.Mesh(
    new THREE.BoxGeometry(SCOUT_DEF.armW * s * 1.8, HS * 0.32, s * 0.13),
    mat
  );
  hand.position.set(ax, HS * -1.0, 0);
  g.add(hand);

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

// ── Public: create player (SCOUT) ────────────────────────────────────────────
/**
 * Creates a humanoid Scout player character.
 *
 * Coordinate note: VisualizationSync applies rotation.x = π/2 to lay the group flat.
 * After that rotation:
 *   local +Y → screen forward (player facing direction)
 *   local ±X → screen left/right
 *   local +Z → toward camera (visible from above)
 */
export function createVariantPlayer(color: number = 0xffff00): THREE.Group {
  const group = new THREE.Group();
  const s = RenderConfig.PlayerMarkerSize;
  const HS = s / 6.4;
  const bMat = bodyMat(color);

  group.add(buildRing(s, color));
  group.add(buildLegGroup(s, HS, 'left', bMat));
  group.add(buildLegGroup(s, HS, 'right', bMat));
  group.add(buildHips(s, HS, bMat));
  group.add(buildTorso(s, HS, bMat));
  group.add(buildNeck(s, HS, bMat));
  group.add(buildHead(s, HS, color));

  const rx = SCOUT_DEF.torsoW * s * 0.54 + SCOUT_DEF.armW * s * 0.5;

  const leftArm = buildArmGroup(s, HS, 'left', bMat);
  leftArm.userData.partName = 'leftArm';
  group.add(leftArm);

  const rightArm = buildArmGroup(s, HS, 'right', bMat);
  rightArm.userData.partName = 'rightArm';
  group.add(rightArm);

  group.add(buildGearBow(s, HS, rx, color));

  return group;
}

// ── Backward-compatible wrapper ───────────────────────────────────────────────
export function createPrimitivePlayer(color: number = 0xffff00): THREE.Group {
  return createVariantPlayer(color);
}

// ── Arrow marker (2D fallback) ────────────────────────────────────────────────
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
