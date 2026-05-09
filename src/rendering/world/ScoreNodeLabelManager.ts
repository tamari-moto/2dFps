import * as THREE from 'three';
import { SceneManager } from '../core/SceneManager';
import { gameToWorld } from '../utils/MeshUtils';
import { Node } from '../../model/node';
import { ScoreLabelConfig } from '../../config/GameConfig';

export class ScoreNodeLabelManager {
  private sprites: Map<number, THREE.Sprite> = new Map();
  private nodeList: Node[] = [];

  constructor(private sceneManager: SceneManager) {}

  init(nodeList: Node[]): void {
    this.nodeList = nodeList;
  }

  update(scores: Map<number, number>): void {
    this.clear();
    for (const [nodeId, score] of scores) {
      const node = this.nodeList[nodeId];
      if (!node) continue;
      const sprite = this.createLabel(score);
      const pos = gameToWorld(node.x, node.y, ScoreLabelConfig.Height);
      sprite.position.copy(pos);
      this.sceneManager.addToScene(sprite);
      this.sprites.set(nodeId, sprite);
    }
  }

  clear(): void {
    for (const sprite of this.sprites.values()) {
      this.sceneManager.removeFromScene(sprite);
      (sprite.material as THREE.SpriteMaterial).map?.dispose();
      (sprite.material as THREE.SpriteMaterial).dispose();
    }
    this.sprites.clear();
  }

  private createLabel(score: number): THREE.Sprite {
    const cfg = ScoreLabelConfig;
    const size = cfg.CanvasSize;
    const canvas = document.createElement('canvas');
    canvas.width  = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    const color = score > 5 ? cfg.ColorHigh : score < -5 ? cfg.ColorLow : cfg.ColorMid;
    const fontSize = Math.floor(size * cfg.FontSizeRatio);
    ctx.font         = `bold ${fontSize}px monospace`;
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';

    const text = String(Math.round(score));
    const textWidth = ctx.measureText(text).width;
    const pad = size * cfg.BgPaddingRatio;
    const bgX = size / 2 - textWidth / 2 - pad;
    const bgY = size / 2 - fontSize / 2 - pad;
    const bgW = textWidth + pad * 2;
    const bgH = fontSize + pad * 2;

    ctx.fillStyle = cfg.BgColor;
    ctx.beginPath();
    ctx.roundRect(bgX, bgY, bgW, bgH, pad);
    ctx.fill();

    ctx.fillStyle = color;
    ctx.fillText(text, size / 2, size / 2);

    const texture  = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({
      map: texture, transparent: true, depthTest: false,
    });
    const sprite = new THREE.Sprite(material);
    sprite.scale.setScalar(cfg.SpriteWorldSize);
    return sprite;
  }
}
