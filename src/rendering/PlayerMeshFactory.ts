import * as THREE from 'three';
import { RenderConfig, ShadowConfig } from '../config/GameConfig';

// ── Character part name registry ──────────────────────────────────────────────
/**
 * Part names used by PlayerAnimator to locate body parts via userData.partName.
 * Each character type defines its own constant so the animator never hardcodes strings.
 */
export interface CharacterPartNames {
  readonly head: string;
  readonly barrel: string;
  readonly walkPartL: string;  // part animated during walk (left side)
  readonly walkPartR: string;  // part animated during walk (right side)
}

export const SCOUT_PART_NAMES: CharacterPartNames = {
  head:      'head',
  barrel:    'barrel',
  walkPartL: 'leftArm',
  walkPartR: 'rightArm',
} as const;

// ── Scout character definition ────────────────────────────────────────────────
const SCOUT_DEF = {
  torsoW: 0.90, torsoH: 0.9, hipW: 0.78, headR: 0.46, armW: 0.09, legW: 0.14,
} as const;

// ── Helper: standard body material (color-tinted) ────────────────────────────
function bodyMat(color: number): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: RenderConfig.PlayerBodyRoughness,
    metalness: RenderConfig.PlayerBodyMetalness,
  });
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

// ── Gear: handgun (SCOUT) ─────────────────────────────────────────────────────
// 座標系: PlayerLifecycleManager が rotation.x = π/2 を適用するため
//   ローカル +Y → 前方（プレイヤーが向く方向）
//   ローカル +X → 右
//   ローカル +Z → カメラ向き（上から見える面）
// CylinderGeometry はデフォルトで +Y 向き → 銃身に rotation 不要
function buildGearGun(s: number, HS: number, rx: number, color: number): THREE.Group {
  const g = new THREE.Group();
  const x = rx + s * 0.06;

  // グリップ（手の高さに配置）
  const grip = new THREE.Mesh(
    new THREE.BoxGeometry(s * 0.12, HS * 0.8, s * 0.10),
    new THREE.MeshStandardMaterial({ color, roughness: 0.5, metalness: 0.6 })
  );
  grip.position.set(x, HS * -1.0, 0);
  g.add(grip);

  // スライド（グリップ上部の銃本体）
  const slide = new THREE.Mesh(
    new THREE.BoxGeometry(s * 0.16, HS * 1.0, s * 0.11),
    new THREE.MeshStandardMaterial({ color, roughness: 0.5, metalness: 0.6 })
  );
  slide.position.set(x, HS * -0.3, 0);
  g.add(slide);

  // 銃身（スライド上端から前方 +Y へ突き出る）
  const barrel = new THREE.Mesh(
    new THREE.CylinderGeometry(s * 0.03, s * 0.03, HS * 0.7, 6),
    new THREE.MeshStandardMaterial({ color: RenderConfig.PlayerGunBarrelColor, roughness: 0.3, metalness: 0.85 })
  );
  barrel.userData.fixedColor = true;
  barrel.userData.partName = 'barrel';
  barrel.position.set(x, HS * 0.5, 0);
  g.add(barrel);

  return g;
}

// ── Public: create player (SCOUT) ────────────────────────────────────────────
/**
 * Creates a humanoid Scout player character.
 *
 * Coordinate note: PlayerLifecycleManager applies rotation.x = π/2 to lay the group flat.
 * After that rotation:
 *   local +Y → screen forward (player facing direction)
 *   local ±X → screen left/right
 *   local +Z → toward camera (visible from above)
 */
export function createVariantPlayer(color: number = RenderConfig.PlayerDefaultColor): THREE.Group {
  const group = new THREE.Group();
  const s = RenderConfig.PlayerMarkerSize;
  const HS = s / 6.4;
  const bMat = bodyMat(color);

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

  group.add(buildGearGun(s, HS, rx, color));

  group.add(new THREE.AxesHelper(s * 1.5));

  group.userData.partNames = SCOUT_PART_NAMES;

  if (ShadowConfig.Enabled) {
    group.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }

  return group;
}

