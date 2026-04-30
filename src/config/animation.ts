/**
 * Animation configuration
 */
export const AnimationConfig = {
  /** Duration for player/enemy movement animations in seconds */
  MovementDuration: 1,

  /** Shot target pulse scale */
  ShotPulseScale: 1.3,

  /** Shot pulse animation duration in seconds */
  ShotPulseDuration: 0.5,

  /** Shot pulse repeat delay in seconds */
  ShotPulseRepeatDelay: 0.02,

  /** Shot pulse ease function */
  ShotPulseEase: "elastic.out(1, 0.3)",

  // --- Scout (humanoid) body animations ---
  /** head Y-bob amplitude in HS units during idle */
  IdleHeadBobAmount: 0.15,
  /** seconds per idle head-bob half-period */
  IdleCockpitPulseDuration: 1.2,
  /** arm Y sway amplitude in world units during walk */
  WalkArmSwayY: 1.5,
  /** seconds per half-period of arm sway during walk */
  WalkArmSwayHalfDuration: 0.15,
  /** barrel forward recoil distance = PlayerMarkerSize × this ratio */
  AttackBarrelForwardRatio: 0.30,
  /** seconds for barrel thrust out */
  AttackBarrelOutDuration: 0.10,
  /** seconds for barrel return after recoil */
  AttackBarrelReturnDuration: 0.25,

  // --- Dance (full-body bop) ---
  /** body Y bounce amplitude in world units */
  DanceBodyBounceAmount: 2.0,
  /** seconds per half-period of body bounce */
  DanceBodyBounceDuration: 0.25,
  /** head nod amplitude in HS units (≈2× idle bob) */
  DanceHeadNodAmount: 0.35,
  /** seconds per half-period of head nod */
  DanceHeadNodDuration: 0.25,
  /** arm sway amplitude in world units (≈2.5× walk sway) */
  DanceArmSwayAmount: 4.0,
  /** seconds per half-period of arm sway */
  DanceArmSwayDuration: 0.25,
  /** number of full bounce loops before reverting to idle */
  DanceLoopCount: 2,
} as const;

/**
 * Text burst effect configuration (dance victory effect)
 */
export const TextBurstEffectConfig = {
  /** 飛来開始距離（world units） */
  FlyInDistance: 600,
  /** スプライトのワールドスケール */
  SpriteWorldSize: 30,
  /** 1文字あたりの着地半径基準値（world units）。文字数が増えると自動で拡大 */
  LandRadiusPerChar: 30,
  /** 支点の Y 位置オフセット（プレイヤー Y + これ） */
  PivotYOffset: 10,
  /** 1文字あたりの扇半角基準値（度）。文字数が増えると自動で拡大 */
  FanHalfAngleDegPerChar: 20,
  /** 飛び込みアニメ秒数 */
  FlyInDuration: 0.35,
  /** 扇開きアニメ秒数 */
  FanOpenDuration: 0.25,
  /** 表示維持秒数 */
  HoldDuration: 1.2,
  /** フェードアウト秒数 */
  FadeOutDuration: 0.4,
  /** 文字色 */
  TextColor: '#ffdd00',
  /** キャンバス1辺サイズ（px） */
  CanvasSize: 128,

  // --- ダンスバースト ---
  /** ダンス中の発射回数 */
  DanceBurstCount: 6,
  /** 発射間隔（ms） */
  DanceBurstIntervalMs: 150,
  /** バーストで使用する文字 */
  DanceBurstChars: ['ダ', 'ン', 'ス'] as string[],
  /** 飛び出し半径（world units） */
  DanceBurstFlyRadius: 60,
  /** 飛び出し＋フェードアウト秒数 */
  DanceBurstDuration: 0.4,
  /** バーストスプライトのワールドスケール */
  DanceBurstSpriteSize: 25,
} as const;
