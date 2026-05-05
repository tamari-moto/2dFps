import * as THREE from 'three';
import { PlayerConfig, RenderConfig } from '../../config/GameConfig';
import { gameToWorld } from '../utils/MeshUtils';
import type { Model } from '../../model/model';

/**
 * Draws line-of-sight rays from every alive player to all nodes visible
 * within their current FOV. Rebuilt each time update() is called.
 */
export class LOSLineManager {
  private lines: THREE.Line[] = [];
  private material: THREE.LineBasicMaterial;
  private visible = true;

  constructor(private scene: THREE.Scene) {
    this.material = new THREE.LineBasicMaterial({
      color: RenderConfig.LOSLineColor,
      transparent: true,
      opacity: RenderConfig.LOSLineOpacity,
    });
  }

  update(model: Model): void {
    this.clear();
    if (!this.visible) return;

    for (const player of model.players.values()) {
      if (!player.isAlive) continue;

      const visibleNodes = model.getVisibleNodesAtAngle(
        player.node,
        player.angle,
        PlayerConfig.MaxViewDistance,
      );

      const from = gameToWorld(player.node.x, player.node.y, 0);

      for (const node of visibleNodes) {
        const to = gameToWorld(node.x, node.y, 0);
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([from, to]),
          this.material,
        );
        this.scene.add(line);
        this.lines.push(line);
      }
    }
  }

  toggle(): void {
    this.visible = !this.visible;
    if (!this.visible) this.clear();
  }

  isVisible(): boolean {
    return this.visible;
  }

  private clear(): void {
    for (const line of this.lines) {
      this.scene.remove(line);
      line.geometry.dispose();
    }
    this.lines = [];
  }
}
