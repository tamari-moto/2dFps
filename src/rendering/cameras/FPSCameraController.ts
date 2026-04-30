import * as THREE from 'three';
import { SceneManager } from '../core/SceneManager';
import { CameraFollowController } from './CameraFollowController';
import { CameraInputController } from './CameraInputController';
import { GameEventBus, GameEventType } from '../../core/GameEventBus';
import type { Model } from '../../model/model';
import { CameraConfig, FPSConfig } from '../../config/GameConfig';
import { gameToWorld } from '../utils/MeshUtils';

/**
 * FPS 観戦モードのカメラ制御。
 * - WASD で水平移動、Space/Q で上下、Shift で加速
 * - Pointer Lock + mousemove で yaw/pitch
 * - enable/disable は GameEventBus 経由で外部から呼ばれる
 *
 * model/logic 層には触れず、Model は読み取り専用で active player の位置取得にのみ使用する。
 */
export class FPSCameraController {
  private camera: THREE.PerspectiveCamera;
  private canvas: HTMLCanvasElement;
  private sceneManager: SceneManager;
  private cameraInput: CameraInputController;
  private follow: CameraFollowController;
  private eventBus: GameEventBus;
  private model: Model;
  private getActivePlayerId: () => string;

  private enabled = false;
  private yaw = 0;    // degrees, ゲーム空間規約 (0°=+X, CCW 正)
  private pitch = 0;  // degrees, +が上
  private prevTime = 0;

  private keys = { w: false, a: false, s: false, d: false, space: false, q: false, shift: false };

  // 通常モード復帰用にカメラ状態を退避
  private savedFov: number = CameraConfig.FOV;
  private savedOrbitEnabled = false;

  // バインド済みリスナ（dispose で解除するため保持）
  private readonly onCanvasClick: (e: MouseEvent) => void;
  private readonly onMouseMove: (e: MouseEvent) => void;
  private readonly onKeyDown: (e: KeyboardEvent) => void;
  private readonly onKeyUp: (e: KeyboardEvent) => void;
  private readonly onPointerLockChange: () => void;
  private readonly tickBound: () => void;

  constructor(
    camera: THREE.PerspectiveCamera,
    canvas: HTMLCanvasElement,
    sceneManager: SceneManager,
    cameraInput: CameraInputController,
    follow: CameraFollowController,
    eventBus: GameEventBus,
    model: Model,
    getActivePlayerId: () => string,
  ) {
    this.camera = camera;
    this.canvas = canvas;
    this.sceneManager = sceneManager;
    this.cameraInput = cameraInput;
    this.follow = follow;
    this.eventBus = eventBus;
    this.model = model;
    this.getActivePlayerId = getActivePlayerId;

    this.onCanvasClick = this.handleCanvasClick.bind(this);
    this.onMouseMove = this.handleMouseMove.bind(this);
    this.onKeyDown = this.handleKeyDown.bind(this);
    this.onKeyUp = this.handleKeyUp.bind(this);
    this.onPointerLockChange = this.handlePointerLockChange.bind(this);
    this.tickBound = this.tick.bind(this);

    // モード解除時にOSがPointer Lockを外したら自動で disable
    document.addEventListener('pointerlockchange', this.onPointerLockChange);
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  /** FPS モードに入る。アクティブプレイヤーの目線へカメラを配置し、Pointer Lock を要求する。 */
  enable(): void {
    if (this.enabled) return;

    const activeId = this.getActivePlayerId();
    const player = this.model.getPlayer(activeId);
    if (!player) {
      console.warn('[FPSCameraController] enable() called but no active player available');
      return;
    }

    // 既存追従アニメーションを止める意味で snapTo は呼ばない（カメラ位置を直接設定）
    this.savedFov = this.camera.fov;
    const orbit = this.cameraInput.getControls();
    this.savedOrbitEnabled = orbit.enabled;
    orbit.enabled = false;

    const w = gameToWorld(player.node.x, player.node.y);
    this.camera.position.set(w.x, FPSConfig.EyeHeight, w.z);
    this.yaw = player.angle;
    this.pitch = 0;
    this.applyLook();

    this.camera.fov = FPSConfig.FOV;
    this.camera.updateProjectionMatrix();

    // 入力リスナ登録
    this.canvas.addEventListener('click', this.onCanvasClick);
    document.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);

    this.prevTime = performance.now();
    this.sceneManager.addTickCallback(this.tickBound);

    this.enabled = true;
    this.eventBus.emit(GameEventType.FPS_MODE_CHANGED, { enabled: true });

    // Pointer Lock 要求（ユーザージェスチャ起源で呼ばれる前提：T キー押下からの emit 経由）
    this.requestPointerLock();
  }

  /** 通常モードに戻す。カメラは現在のアクティブプレイヤーの追従位置にスナップ。 */
  disable(): void {
    if (!this.enabled) return;

    this.sceneManager.removeTickCallback(this.tickBound);
    this.canvas.removeEventListener('click', this.onCanvasClick);
    document.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);

    // 押下フラグを全リセット（FPS 中の押しっぱなしが漏れないように）
    this.keys.w = this.keys.a = this.keys.s = this.keys.d = false;
    this.keys.space = this.keys.q = this.keys.shift = false;

    if (document.pointerLockElement === this.canvas) {
      document.exitPointerLock();
    }

    // FOV 復元
    this.camera.fov = this.savedFov;
    this.camera.updateProjectionMatrix();

    // OrbitControls を元に戻す
    const orbit = this.cameraInput.getControls();
    orbit.enabled = this.savedOrbitEnabled;

    // アクティブプレイヤーへスナップ（パン中で取り残されたカメラを定位置に戻す）
    const activeId = this.getActivePlayerId();
    const player = this.model.getPlayer(activeId);
    if (player) {
      this.follow.snapTo(player.node.x, player.node.y, player.angle);
    }

    this.enabled = false;
    this.eventBus.emit(GameEventType.FPS_MODE_CHANGED, { enabled: false });
  }

  dispose(): void {
    if (this.enabled) this.disable();
    document.removeEventListener('pointerlockchange', this.onPointerLockChange);
  }

  // ── private ──────────────────────────────────────────────────────────

  private requestPointerLock(): void {
    // ブラウザによっては Promise を返す。失敗しても致命的ではないので握りつぶす。
    const req = this.canvas.requestPointerLock();
    if (req && typeof (req as Promise<void>).catch === 'function') {
      (req as Promise<void>).catch(() => { /* user 拒否 or 未対応 */ });
    }
  }

  private handleCanvasClick(): void {
    // FPS モード中で Pointer Lock が外れていたらクリックで再取得
    if (this.enabled && document.pointerLockElement !== this.canvas) {
      this.requestPointerLock();
    }
  }

  private handleMouseMove(e: MouseEvent): void {
    if (!this.enabled || document.pointerLockElement !== this.canvas) return;
    // Pointer Lock では movementX/Y が delta として渡される。
    // Three.js world (Y up, +Z = game +Y) を上から見下ろすと XZ 平面は CW 回転が正のため、
    // マウス右移動 → 視点右回転 = world から見て CW 回転 = yaw 増加（ゲーム空間 yaw 規約も同じ符号で動く）
    this.yaw += e.movementX * FPSConfig.MouseSensitivity;
    this.pitch -= e.movementY * FPSConfig.MouseSensitivity;
    if (this.pitch > FPSConfig.PitchLimit) this.pitch = FPSConfig.PitchLimit;
    if (this.pitch < -FPSConfig.PitchLimit) this.pitch = -FPSConfig.PitchLimit;
  }

  private handleKeyDown(e: KeyboardEvent): void {
    switch (e.code) {
      case 'KeyW': this.keys.w = true; e.preventDefault(); break;
      case 'KeyA': this.keys.a = true; e.preventDefault(); break;
      case 'KeyS': this.keys.s = true; e.preventDefault(); break;
      case 'KeyD': this.keys.d = true; e.preventDefault(); break;
      case 'Space': this.keys.space = true; e.preventDefault(); break;
      case FPSConfig.DescendKey: this.keys.q = true; e.preventDefault(); break;
      case 'ShiftLeft': case 'ShiftRight': this.keys.shift = true; break;
    }
  }

  private handleKeyUp(e: KeyboardEvent): void {
    switch (e.code) {
      case 'KeyW': this.keys.w = false; break;
      case 'KeyA': this.keys.a = false; break;
      case 'KeyS': this.keys.s = false; break;
      case 'KeyD': this.keys.d = false; break;
      case 'Space': this.keys.space = false; break;
      case FPSConfig.DescendKey: this.keys.q = false; break;
      case 'ShiftLeft': case 'ShiftRight': this.keys.shift = false; break;
    }
  }

  private handlePointerLockChange(): void {
    // ESC や他要因で Pointer Lock が外れたら FPS モードを終了する
    if (this.enabled && document.pointerLockElement !== this.canvas) {
      this.disable();
    }
  }

  /** yaw/pitch から forward を計算。
   *  ゲーム空間: 0° = +X、CCW 正、90° = +Y。
   *  Three.js world: game(x, y) → world(x, height, y)。よって world XZ 平面で
   *  forward_world = (cos(yaw), 0, sin(yaw)) と直接対応する（Y 軸は無関係）。
   */
  private forwardVector(): THREE.Vector3 {
    const yawRad = this.yaw * Math.PI / 180;
    return new THREE.Vector3(Math.cos(yawRad), 0, Math.sin(yawRad));
  }

  /** カメラ視点での「右」方向（world XZ 平面）。
   *  Three.js world は Y up、camera.up=(0,1,0)。yaw=0 で forward=(+X) を見ているとき、
   *  画面右は world +Z（= game +Y）。よって right = (-forward.z, 0, forward.x)。
   */
  private rightVector(forward: THREE.Vector3): THREE.Vector3 {
    return new THREE.Vector3(-forward.z, 0, forward.x);
  }

  private applyLook(): void {
    const forward = this.forwardVector();
    const pitchRad = this.pitch * Math.PI / 180;
    const cp = Math.cos(pitchRad);
    const sp = Math.sin(pitchRad);
    const dir = new THREE.Vector3(cp * forward.x, sp, cp * forward.z);
    const target = new THREE.Vector3().copy(this.camera.position).add(dir);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(target);
  }

  private tick(): void {
    const now = performance.now();
    let dt = (now - this.prevTime) / 1000;
    this.prevTime = now;
    if (dt > FPSConfig.MaxDeltaSeconds) dt = FPSConfig.MaxDeltaSeconds;
    if (dt < 0) dt = 0;

    const sprint = this.keys.shift ? FPSConfig.SprintMultiplier : 1;
    const speed = FPSConfig.MoveSpeed * sprint * dt;

    const forward = this.forwardVector();
    const right = this.rightVector(forward);

    if (this.keys.w) this.camera.position.addScaledVector(forward, speed);
    if (this.keys.s) this.camera.position.addScaledVector(forward, -speed);
    if (this.keys.d) this.camera.position.addScaledVector(right, speed);
    if (this.keys.a) this.camera.position.addScaledVector(right, -speed);
    if (this.keys.space) this.camera.position.y += speed;
    if (this.keys.q)     this.camera.position.y -= speed;

    this.applyLook();
  }
}
