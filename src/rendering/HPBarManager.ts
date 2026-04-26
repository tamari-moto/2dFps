import * as THREE from 'three';
import { gsap } from 'gsap';
import { HPBarConfig } from '../config/GameConfig';

interface BarEntry {
  fg: THREE.Mesh;
  fgWidth: number;
}

/**
 * Manages HP bar meshes attached as children of player group objects.
 * Each bar consists of a background plane (gray) and a foreground plane (colored).
 * The foreground plane's scale.x is animated by GSAP when HP changes.
 *
 * Coordinate note: parent groups have rotation.x = π/2 applied by VisualizationSync,
 * so HP bar planes use rotation.x = -π/2 to face the camera.
 * Foreground geometry is translated so its left edge is at x=0 (pivot at left),
 * enabling scale.x reduction to shrink from the right.
 */
export class HPBarManager {
  private bars = new Map<string, BarEntry>();

  attachToPlayer(
    playerObj: THREE.Object3D,
    playerId: string,
    isSelf: boolean,
    isNPC: boolean,
  ): void {
    const w = HPBarConfig.Width;
    const h = HPBarConfig.Height;

    // Background bar (full width, gray)
    const bgGeo = new THREE.PlaneGeometry(1, 1);
    bgGeo.translate(0.5, 0, 0);
    const bgMesh = new THREE.Mesh(
      bgGeo,
      new THREE.MeshBasicMaterial({ color: HPBarConfig.ColorBg }),
    );
    bgMesh.scale.set(w, h, 1);
    bgMesh.rotation.x = -Math.PI / 2;
    bgMesh.position.set(-w / 2, 0, HPBarConfig.ZOffset);
    bgMesh.userData.fixedColor = true;
    playerObj.add(bgMesh);

    // Foreground bar (HP ratio, colored)
    const fgColor = isSelf ? HPBarConfig.ColorSelf
      : isNPC ? HPBarConfig.ColorEnemy
      : HPBarConfig.ColorAlly;

    const fgGeo = new THREE.PlaneGeometry(1, 1);
    fgGeo.translate(0.5, 0, 0);
    const fgMesh = new THREE.Mesh(
      fgGeo,
      new THREE.MeshBasicMaterial({ color: fgColor }),
    );
    fgMesh.scale.set(w, h, 1);
    fgMesh.rotation.x = -Math.PI / 2;
    // Slight Z offset so foreground renders above background
    fgMesh.position.set(-w / 2, 0, HPBarConfig.ZOffset + 0.1);
    fgMesh.userData.fixedColor = true;
    playerObj.add(fgMesh);

    this.bars.set(playerId, { fg: fgMesh, fgWidth: w });
  }

  update(playerId: string, health: number, maxHealth: number): void {
    const entry = this.bars.get(playerId);
    if (!entry) return;

    const ratio = maxHealth > 0 ? Math.max(0, health / maxHealth) : 0;
    gsap.to(entry.fg.scale, {
      x: entry.fgWidth * ratio,
      duration: HPBarConfig.AnimDuration,
      ease: 'power2.out',
    });
  }

  remove(playerId: string): void {
    this.bars.delete(playerId);
  }
}
