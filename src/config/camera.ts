/**
 * Camera configuration
 */
export const CameraConfig = {
  /** Field of view angle (default) */
  FOV: 90,

  /** FOV minimum (most zoomed in) */
  FOVMin: 20,

  /** FOV maximum (most zoomed out) */
  FOVMax: 120,

  /** FOV change per wheel tick */
  FOVWheelStep: 5,

  /** Camera initial Z position */
  InitialZPosition: 10,

  /** Orbit controls minimum distance */
  MinDistance: 2.0,

  /** Orbit controls maximum distance */
  MaxDistance: 1000.0,

  /** Enable rotation control */
  EnableRotate: false,

  /** TPS後方追従: プレイヤー後方のXY距離（プレイヤーの向きの逆方向へ配置） */
  BackDistance: 60,

  /** TPS後方追従: カメラの Z オフセット（高さ）。小さいほどFPS寄り */
  OffsetZ: 500,

  /** パン操作を無効化（カメラは自動追従） */
  EnablePan: false,

  /** プレイヤー切り替え時のカメラパン秒数 */
  FollowPanDuration: 0.8,

  /** 移動追従時のカメラパン秒数（MovementDuration と同値） */
  FollowMoveDuration: 1.0,

  /** プレイヤー切り替え時の ease */
  FollowPanEase: 'power2.inOut',

  /** 移動追従時の ease */
  FollowMoveEase: 'power2.out',
} as const;

/**
 * FPS spectator mode parameters.
 * 観戦モードは T キーで通常追従カメラと FPS フリーカメラを切り替える。
 * 移動・視点・感度などすべてここで一元管理する。
 */
export const FPSConfig = {
  /** 水平移動速度（world units / sec） */
  MoveSpeed: 200,
  /** Shift 押下時の速度乗数 */
  SprintMultiplier: 2,
  /** マウス感度（度 / pixel） */
  MouseSensitivity: 0.15,
  /** 観戦カメラの初期目線高さ（world Y、プレイヤー頭部相当） */
  EyeHeight: 12,
  /** ピッチ制限（度、上下対称）。±90° に近づくとジンバルロックするため少し内側に */
  PitchLimit: 85,
  /** FPS モード時の FOV（通常 90° → 75° に狭めて没入感を出す） */
  FOV: 75,
  /** dt のクランプ上限（秒）。タブ復帰時の巨大 dt で吹き飛ぶのを防ぐ */
  MaxDeltaSeconds: 0.1,
} as const;
