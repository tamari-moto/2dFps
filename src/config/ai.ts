/**
 * NPC AI configuration
 */
export const AIConfig = {
  /** Bonus for nodes adjacent to walls (fewer graph edges = more cover) */
  CoverWeight: 30,

  /** Penalty per enemy that has line of sight to the candidate node */
  EnemyLOSPenalty: -20,

  /** Penalty per grid step distance to nearest enemy (approach bias) */
  DistanceWeight: -2,

  /** Bonus when NPC has LOS to enemy but enemy lacks LOS back */
  AmbushBonus: 15,

  /** HP threshold below which NPC prioritizes cover over aggression */
  RetreatHPThreshold: 40,

  /** Cover weight multiplier when HP is below retreat threshold */
  RetreatCoverMultiplier: 2,

  /** Bonus for targeting low-HP enemies */
  ShotLowHPPriority: 10,

  /** Waiting time after a simultaneous round resolves before re-enabling input (ms) */
  RoundAnimationDelayMs: 1500,

  /** BFS radius used when searching for a goal node */
  GoalSearchRadius: 8,

  /** Force goal re-evaluation after this many turns without reaching the goal */
  GoalTimeoutTurns: 10,

  /** Re-evaluate goal if HP drops by this amount since goal was set */
  GoalHPChangeThreshold: 30,

  /** Enable ThreatMap-based facing angle when no visible enemies */
  ThreatMapAngleEnabled: true,

  /** Time constant for threat score decay (rounds) */
  ThreatTau: 8,

  /** BFS diffusion distance scale */
  ThreatSigma: 2,

  /** Maximum BFS steps for threat diffusion */
  ThreatMaxDiffusionSteps: 6,

  /** Upper bound for ambient threat score on long-unobserved nodes */
  ThreatAmbientCap: 0.3,

  /** BFS range when searching for highest-threat node to face */
  ThreatMapMaxLookDistance: 8,
} as const;
