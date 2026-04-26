import * as THREE from 'three';
import { gsap } from 'gsap';
import { HPBarConfig } from '../config/GameConfig';

interface BarEntry {
  group: THREE.Group;
  fill: THREE.Mesh;
}

/**
 * Manages 3D billboard HP bars rendered above each player mesh.
 * Call updateBillboards() each frame to keep bars facing the camera
 * and tracking animated player positions.
 */
export class HPBarManager {
  private bars = new Map<string, BarEntry>();

  constructor(private scene: THREE.Scene) {}

  createBar(playerId: string, barColor: number): void {
    const { Width: w, Height: h, BgColor } = HPBarConfig;
    const group = new THREE.Group();
    group.renderOrder = 10;

    const bg = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color: BgColor, depthTest: false }),
    );
    bg.renderOrder = 10;
    group.add(bg);

    const fill = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color: barColor, depthTest: false }),
    );
    fill.renderOrder = 11;
    group.add(fill);

    this.scene.add(group);
    this.bars.set(playerId, { group, fill });
  }

  updateHP(playerId: string, hp: number, maxHp: number): void {
    const entry = this.bars.get(playerId);
    if (!entry) return;
    const ratio = Math.max(0, Math.min(1, hp / maxHp));
    const w = HPBarConfig.Width;
    gsap.to(entry.fill.scale, { x: ratio, duration: HPBarConfig.AnimDuration, ease: 'power2.out' });
    // Shift fill left to anchor it to the left edge of the background
    gsap.to(entry.fill.position, { x: w * (ratio - 1) / 2, duration: HPBarConfig.AnimDuration, ease: 'power2.out' });
  }

  setVisible(playerId: string, visible: boolean): void {
    const entry = this.bars.get(playerId);
    if (entry) entry.group.visible = visible;
  }

  removeBar(playerId: string): void {
    const entry = this.bars.get(playerId);
    if (!entry) return;
    this.scene.remove(entry.group);
    entry.group.traverse(child => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
      }
    });
    this.bars.delete(playerId);
  }

  /**
   * Called every frame: snap each bar to its player mesh's current world position
   * and orient it toward the camera (billboard).
   */
  updateBillboards(camera: THREE.Camera, playerMeshes: Map<string, THREE.Object3D>): void {
    const worldPos = new THREE.Vector3();
    for (const [playerId, entry] of this.bars.entries()) {
      if (!entry.group.visible) continue;
      const mesh = playerMeshes.get(playerId);
      if (!mesh) continue;
      mesh.getWorldPosition(worldPos);
      entry.group.position.set(worldPos.x, worldPos.y, HPBarConfig.ZOffset);
      entry.group.lookAt(camera.position);
    }
  }

  dispose(): void {
    for (const playerId of [...this.bars.keys()]) {
      this.removeBar(playerId);
    }
  }
}
