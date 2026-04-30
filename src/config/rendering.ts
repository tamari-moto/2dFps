/**
 * Render / visual theme configuration
 */
export const RenderConfig = {
  /** Background clear color (near black) */
  BackgroundColor: 0x0a0a0a,

  /** Grid line color for background grid */
  GridLineColor: 0x1a1a1a,

  /** Grid line opacity */
  GridLineOpacity: 0.6,

  /** Player diamond marker size */
  PlayerMarkerSize: 20,

  /** Y rotation offset that aligns model's local +Z (forward) with world axes (radians).
   *  Player rotation: rotation.y = -angle_rad + PlayerFacingOffset
   *    where angle_rad is game angle (0° = +X, CCW positive), and gameToWorld maps game(x,y) → world(x,0,y).
   *  At angle=0, rotation.y = π/2 turns local +Z to world +X (game +X). */
  PlayerFacingOffset: Math.PI / 2,

  /** Y offset applied to player mesh groups to vertically center the Scout model over the node circle.
   *  The model's visual center is below Y=0, so we lift by HS * 3.21 (HS = PlayerMarkerSize / 6.4). */
  PlayerZOffset: (20 / 6.4) * 3.21,

  // --- Player body material ---
  /** PBR roughness for player body */
  PlayerBodyRoughness: 0.6,
  /** PBR metalness for player body */
  PlayerBodyMetalness: 0.3,

  // --- Humanoid variant: handgun ---
  /** Default player color when none is specified */
  PlayerDefaultColor: 0xffff00,
  /** Player color during hit effect */
  PlayerHitColor: 0xff0000,
  /** Handgun barrel color (dark metallic) */
  PlayerGunBarrelColor: 0x222233,

  // --- Humanoid variant: head ---
  /** PBR roughness for head sphere */
  PlayerHeadRoughness: 0.7,
  /** PBR metalness for head sphere */
  PlayerHeadMetalness: 0.1,
} as const;

/**
 * Node/Circle visualization configuration
 */
export const NodeConfig = {
  /** Circle radius for nodes */
  CircleSize: 10,

  /** Number of segments in circle geometry */
  CircleSegments: 100,

  /** Default node color (charcoal) */
  DefaultColor: 0x1c1c1c,

  /** Visible node color (muted gold) */
  VisibleColor: 0xc8a96e,

  /** Selected node color (copper) */
  SelectedColor: 0xb87333,

  /** Next move node color (sage green) */
  NextMoveColor: 0x8fbc8f,

  /** Shot target node color (dark red) */
  ShotTargetColor: 0xc0392b,

  /** Reachable node color (dark grey) */
  ReachableColor: 0x3d3d3d,
} as const;

/**
 * Node (grid tile) visual configuration
 */
export const NodeVisualConfig = {
  /** PBR roughness for node circles */
  Roughness: 0.7,
  /** PBR metalness for node circles */
  Metalness: 0.0,
  /** Emissive intensity for default (invisible) nodes */
  EmissiveDefaultIntensity: 0.0,
  /** Emissive intensity for visible nodes */
  EmissiveVisibleIntensity: 0.25,
  /** Emissive intensity for selected node */
  EmissiveSelectedIntensity: 0.4,
  /** Emissive intensity for next-move node */
  EmissiveNextIntensity: 0.3,
  /** Emissive intensity for shot-target node */
  EmissiveShotIntensity: 0.5,
  /** Emissive intensity for reachable nodes */
  EmissiveReachableIntensity: 0.15,
} as const;

/**
 * Wall (3D obstacle) visual configuration
 */
export const WallConfig = {
  /** Wall extrusion height in world units */
  Height: 8,
  /** Wall base Z position */
  ZOffset: 0,
  /** Wall depth (screen-width of the wall slab) */
  Depth: 4,
  /** Wall color (dark brown) */
  Color: 0x2a2420,
  /** PBR roughness for walls */
  Roughness: 0.85,
  /** PBR metalness for walls */
  Metalness: 0.05,
  /** Emissive color for walls */
  EmissiveColor: 0x100e0c,
  /** Emissive intensity for walls */
  EmissiveIntensity: 0.15,
  /** userData key used to identify wall meshes during scene traversal */
  UserDataTag: 'isWall',
} as const;
