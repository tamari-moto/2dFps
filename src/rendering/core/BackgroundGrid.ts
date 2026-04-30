import * as THREE from 'three';
import { MapConfig, RenderConfig } from '../../config/GameConfig';

const GRID_USERDATA_KEY = 'isGrid';

/**
 * Background grid aligned to node positions. Lines are tagged with
 * userData[isGrid] = true so that `toggle()` can find and toggle them.
 */
export class BackgroundGrid {
  constructor(private scene: THREE.Scene) {
    const size = MapConfig.NodesInGridSize;
    const spacing = MapConfig.NodeSpacing;
    const total = (size - 1) * spacing;

    const material = new THREE.LineBasicMaterial({
      color: RenderConfig.GridLineColor,
      transparent: true,
      opacity: RenderConfig.GridLineOpacity,
    });

    for (let i = 0; i < size; i++) {
      const x = i * spacing;
      const vPts = [new THREE.Vector3(x, -0.5, 0), new THREE.Vector3(x, -0.5, total)];
      const vLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(vPts), material);
      vLine.userData[GRID_USERDATA_KEY] = true;
      this.scene.add(vLine);
    }

    for (let i = 0; i < size; i++) {
      const z = i * spacing;
      const hPts = [new THREE.Vector3(0, -0.5, z), new THREE.Vector3(total, -0.5, z)];
      const hLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(hPts), material);
      hLine.userData[GRID_USERDATA_KEY] = true;
      this.scene.add(hLine);
    }
  }

  /** Toggles the visibility of all grid lines. */
  toggle(): void {
    this.scene.traverse((object) => {
      if (object instanceof THREE.Line && object.userData[GRID_USERDATA_KEY]) {
        object.visible = !object.visible;
      }
    });
  }
}
