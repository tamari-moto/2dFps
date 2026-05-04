import * as THREE from 'three';
import { gsap } from 'gsap';
import { HPBarConfig } from '../../config/GameConfig';

interface BarEntry {
  fg: THREE.Mesh;
}

/**
 * Manages 3D HP bar meshes attached as children of player Groups.
 *
 * Each bar: bg box (gray, full width) + fg box (colored, scales left-to-right).
 * Because they are children of the player Group they automatically:
 *   - follow GSAP position animations of the parent
 *   - hide with the parent when setVisible(false) is called
 *   - fade with the parent in PlayerEffects.hidePlayer (opacity traverse hits them)
 *
 * Left-edge-pin formula (bar shrinks from right, left edge stays fixed):
 *   fg.scale.x    = ratio
 *   fg.position.x = -(1 - ratio) * Width / 2
 *
 * Verification (Width=14):
 *   ratio=1.0 → pos.x=0,  left=-7, right=+7  ✓
 *   ratio=0.5 → pos.x=-3.5, left=-7, right=0  ✓
 *   ratio=0.0 → pos.x=-7,  left=-7, right=-7  ✓
 */
export class HPBarManager {
  private readonly bars: Map<string, BarEntry> = new Map();

  attachBar(playerId: string, group: THREE.Object3D, isNPC: boolean): void {
    if (this.bars.has(playerId)) return;

    const W = HPBarConfig.Width;
    const H = HPBarConfig.Height;
    const Y = HPBarConfig.YOffset;
    const Z = HPBarConfig.ZOffset;

    const D = HPBarConfig.Depth;

    const bg = new THREE.Mesh(
      new THREE.BoxGeometry(W, H, D),
      new THREE.MeshStandardMaterial({ color: HPBarConfig.BgColor }),
    );
    bg.position.set(0, Y, Z);
    bg.userData.fixedColor = true;
    group.add(bg);

    const fgColor = isNPC ? HPBarConfig.NPCFgColor : HPBarConfig.HumanFgColor;
    const fg = new THREE.Mesh(
      new THREE.BoxGeometry(W, H, D),
      new THREE.MeshStandardMaterial({ color: fgColor, emissive: fgColor, emissiveIntensity: 0.3 }),
    );
    fg.position.set(0, Y, Z + D);
    fg.userData.fixedColor = true;
    group.add(fg);

    this.bars.set(playerId, { fg });
  }

  updateBar(playerId: string, health: number, maxHealth: number): void {
    const entry = this.bars.get(playerId);
    if (!entry) return;

    const targetRatio = maxHealth > 0 ? Math.max(0, Math.min(1, health / maxHealth)) : 0;
    const W = HPBarConfig.Width;
    const fg = entry.fg;

    const proxy = { ratio: fg.scale.x };
    gsap.killTweensOf(proxy);
    gsap.to(proxy, {
      ratio: targetRatio,
      duration: HPBarConfig.AnimDuration,
      ease: 'power2.out',
      onUpdate() {
        fg.scale.x    = proxy.ratio;
        fg.position.x = -(1 - proxy.ratio) * W / 2;
      },
    });
  }

  removeBar(playerId: string): void {
    this.bars.delete(playerId);
  }
}
