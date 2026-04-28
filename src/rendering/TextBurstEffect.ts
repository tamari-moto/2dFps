import * as THREE from 'three';
import { gsap } from 'gsap';
import { TextBurstEffectConfig } from '../config/GameConfig';
import { SceneManager } from './SceneManager';

const CHARS = ['モ', 'ヒ', 'カ', 'ン'] as const;


export class TextBurstEffect {
  constructor(private sceneManager: SceneManager) {}

  play(worldX: number, worldY: number, worldZ: number): void {
    const cfg = TextBurstEffectConfig;
    const camera = this.sceneManager.getCamera();

    // カメラの右・上ベクトルを取得（カメラ空間で扇を広げるため）
    const camRight = new THREE.Vector3();
    const camUp    = new THREE.Vector3();
    camera.getWorldDirection(new THREE.Vector3()); // matrixWorld を更新
    camRight.setFromMatrixColumn(camera.matrixWorld, 0).normalize();
    camUp.setFromMatrixColumn(camera.matrixWorld, 1).normalize();

    // 支点: プレイヤー位置をカメラ上方向に少し上げた点
    const pivot = new THREE.Vector3(worldX, worldY, worldZ)
      .addScaledVector(camUp, cfg.PivotYOffset);

    // 扇形着地座標: 支点を軸に camRight（横）と camUp（縦）で放射状配置
    const n: number = CHARS.length;
    const fanHalfAngle = cfg.FanHalfAngleDegPerChar * (n - 1) / 2;
    const landRadius   = cfg.LandRadiusPerChar * (n - 1) / 2 + cfg.LandRadiusPerChar;

    const fanAngles = CHARS.map((_, i) =>
      n === 1 ? 0 : -fanHalfAngle + (i / (n - 1)) * fanHalfAngle * 2
    );

    const landPositions = fanAngles.map(deg => {
      const rad = (deg * Math.PI) / 180;
      return pivot.clone()
        .addScaledVector(camRight, landRadius * Math.sin(rad))
        .addScaledVector(camUp,    landRadius * Math.cos(rad));
    });

    // スプライトを生成してシーンに追加し、全文字を支点中心に配置してスタート
    const sprites = CHARS.map((char) => {
      const sprite = this.createSprite(char);
      sprite.position.copy(pivot);
      sprite.scale.setScalar(cfg.SpriteWorldSize);
      this.sceneManager.addToScene(sprite);
      return sprite;
    });

    // アニメーション timeline
    const tl = gsap.timeline({
      onComplete: () => {
        sprites.forEach(s => {
          this.sceneManager.removeFromScene(s);
          (s.material as THREE.SpriteMaterial).map?.dispose();
          (s.material as THREE.SpriteMaterial).dispose();
        });
      },
    });

    // Phase 1: 全文字が支点中心へ爆速飛び込み
    sprites.forEach(sprite => {
      tl.to(sprite.position, {
        x: pivot.x,
        y: pivot.y,
        z: pivot.z,
        duration: cfg.FlyInDuration,
        ease: 'power3.out',
      }, 0);
    });

    // Phase 2: 扇形に広がる（位置 + 放射方向への回転）
    sprites.forEach((sprite, i) => {
      const rotationRad = -(fanAngles[i] * Math.PI) / 180;
      tl.to(sprite.position, {
        x: landPositions[i].x,
        y: landPositions[i].y,
        z: landPositions[i].z,
        duration: cfg.FanOpenDuration,
        ease: 'back.out(1.5)',
      }, cfg.FlyInDuration);
      tl.to(sprite.material as THREE.SpriteMaterial, {
        rotation: rotationRad,
        duration: cfg.FanOpenDuration,
        ease: 'back.out(1.5)',
      }, cfg.FlyInDuration);
    });

    // Phase 3: 待機
    tl.to({}, { duration: cfg.HoldDuration }, cfg.FlyInDuration + cfg.FanOpenDuration);

    // Phase 4: フェードアウト
    sprites.forEach(sprite => {
      tl.to((sprite.material as THREE.SpriteMaterial), {
        opacity: 0,
        duration: cfg.FadeOutDuration,
        ease: 'power1.in',
      }, cfg.FlyInDuration + cfg.FanOpenDuration + cfg.HoldDuration);
    });
  }

  private createSprite(char: string): THREE.Sprite {
    const cfg = TextBurstEffectConfig;
    const size = cfg.CanvasSize;

    const canvas = document.createElement('canvas');
    canvas.width  = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    const fontSize = Math.floor(size * 0.78);
    ctx.font        = `900 ${fontSize}px sans-serif`;
    ctx.fillStyle   = cfg.TextColor;
    ctx.textAlign   = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(char, size / 2, size / 2);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 1,
      depthTest: false,
    });
    return new THREE.Sprite(material);
  }
}
