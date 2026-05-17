import * as THREE from 'three';
import { Model } from '../model/model';
import { SceneManager } from './core/SceneManager';
import { CameraConfig, PlayerConfig, RenderConfig, AIConfig, TEAM_COLORS } from '../config/GameConfig';
import { GameEventBus, GameEventType } from '../core/GameEventBus';
import { PlayerAnimator } from './players/PlayerAnimator';
import { PlayerLifecycleManager } from './players/PlayerLifecycleManager';
import { PlayerEffects } from './players/PlayerEffects';
import { CameraFollowController } from './cameras/CameraFollowController';
import { NodeVisualizationManager } from './world/NodeVisualizationManager';
import { LOSLineManager } from './world/LOSLineManager';
import { ThreatHeatmapManager } from './world/ThreatHeatmapManager';
import { ScoreNodeLabelManager } from './world/ScoreNodeLabelManager';
import { TextBurstEffect } from './effects/TextBurstEffect';
import { HPBarManager } from './players/HPBarManager';
import { isPointInCone } from '../logic/ConeIntersection';
import { worldToGame } from './utils/MeshUtils';

/**
 * Thin orchestrator: constructs the four specialized managers and wires them
 * to GameEventBus. External API is unchanged so threeSetup.ts needs no edits.
 */
export class VisualizationSync {
  private nodeVis:       NodeVisualizationManager;
  private losLines:      LOSLineManager;
  private lifecycle:     PlayerLifecycleManager;
  private effects:       PlayerEffects;
  private animator:      PlayerAnimator;
  private camera:        CameraFollowController;
  private textBurstEffect: TextBurstEffect;
  private hpBarManager:  HPBarManager;
  private heatmap:       ThreatHeatmapManager;
  private scoreLabels:   ScoreNodeLabelManager;
  private model:         Model;

  private activePlayerId: string;
  private fpsModeActive = false;

  constructor(
    sceneManager: SceneManager,
    model: Model,
    activePlayerId: string,
    eventBus: GameEventBus,
  ) {
    this.model = model;
    this.activePlayerId = activePlayerId;

    // Shared map — PlayerAnimator / PlayerLifecycleManager / PlayerEffects all reference it
    const meshMap = new Map<string, THREE.Object3D>();
    this.animator      = new PlayerAnimator(meshMap);
    this.hpBarManager  = new HPBarManager();
    this.lifecycle     = new PlayerLifecycleManager(sceneManager, this.animator, model, meshMap, eventBus, this.hpBarManager);
    this.effects       = new PlayerEffects(meshMap, this.animator, model);
    this.nodeVis       = new NodeVisualizationManager(sceneManager, model);
    this.losLines      = new LOSLineManager(sceneManager.getScene());
    this.camera        = new CameraFollowController(sceneManager);
    this.textBurstEffect = new TextBurstEffect(sceneManager);
    this.heatmap       = new ThreatHeatmapManager(sceneManager);
    this.heatmap.init(model.nodeList, model.Edges.List);
    this.scoreLabels   = new ScoreNodeLabelManager(sceneManager);
    this.scoreLabels.init(model.nodeList);

    // Initialize scene objects
    this.nodeVis.initializeNodes();
    this.nodeVis.initializeWalls();
    this.lifecycle.initializePlayers();

    // Snap camera to starting player (no animation)
    const initialPlayer = model.getPlayer(activePlayerId);
    if (initialPlayer) {
      this.camera.snapTo(initialPlayer.node.x, initialPlayer.node.y, initialPlayer.angle);
    }

    this.subscribeToEvents(eventBus);
    sceneManager.addTickCallback(() => this.tickUpdateVisibility());
  }

  // ── Public API (unchanged from original) ──────────────────────────────────

  updateView(): void {
    this.doUpdateView();
  }

  updateObstacles(): void {
    this.nodeVis.rebuildWalls();
    this.doUpdateView();
  }

  addPlayerMesh(playerId: string, color: number): void {
    this.lifecycle.addPlayer(playerId, color);
  }

  toggleLOS(): boolean {
    this.losLines.toggle();
    return this.losLines.isVisible();
  }

  toggleHeatmap(): boolean {
    return this.heatmap.toggle();
  }

  getMeshList(): THREE.Mesh[] {
    return this.nodeVis.getMeshList();
  }

  getMeshToNodeMap(): Map<number, number> {
    return this.nodeVis.getMeshToNodeMap();
  }

  /** Returns the camera follow controller (used by FPSCameraController to snap on disable). */
  getCameraFollow(): CameraFollowController {
    return this.camera;
  }

  /** Returns the currently active player ID. */
  getActivePlayerId(): string {
    return this.activePlayerId;
  }

  // ── Private helpers ────────────────────────────────────────────────────────

  private doUpdateView(): void {
    const activePlayer = this.model.getPlayer(this.activePlayerId)
      ?? Array.from(this.model.players.values()).find(p => p.isAlive);
    if (!activePlayer) return;

    this.updatePlayers(activePlayer);
    this.nodeVis.updateNodeColors(activePlayer);
    this.losLines.update(this.model);

    if ((AIConfig.ThreatMapTeams as number[]).includes(activePlayer.team)) {
      this.heatmap.showOnly(TEAM_COLORS[activePlayer.team]);
    } else {
      this.heatmap.clear();
    }
  }

  private updatePlayers(activePlayer?: ReturnType<typeof this.model.getPlayer>): void {
    activePlayer ??= this.model.getPlayer(this.activePlayerId)
      ?? Array.from(this.model.players.values()).find(p => p.isAlive);

    const visibleNodeIds = new Set<number>();
    if (PlayerConfig.FogOfWarEnabled && activePlayer) {
      const teamNodes = this.model.getTeamVisibleNodes(this.activePlayerId);
      for (const id of teamNodes) visibleNodeIds.add(id);
    }

    for (const [playerId, player] of this.model.players) {
      if (!player.isAlive) continue;

      const isOnMyTeam = activePlayer && player.team === activePlayer.team;
      const shouldShow = !PlayerConfig.FogOfWarEnabled
        || isOnMyTeam
        || visibleNodeIds.has(player.node.id);

      this.lifecycle.setVisible(playerId, shouldShow);
      if (!shouldShow) continue;

      // 経路アニメーション中は applyTransform の gsap.to / rotation 書き込みをスキップ
      if (this.lifecycle.isPathAnimating(playerId)) continue;

      const isActive = playerId === this.activePlayerId;
      const moving = this.lifecycle.applyTransform(
        playerId, player.node.x, player.node.y, player.angle, isActive,
      );
      if (isActive && moving && !this.fpsModeActive) {
        this.camera.panTo(player.node.x, player.node.y, player.angle, CameraConfig.FollowMoveDuration, CameraConfig.FollowMoveEase);
      }
    }
  }

  private subscribeToEvents(eventBus: GameEventBus): void {
    eventBus.on(GameEventType.VIS_UPDATE_VIEW, () => this.doUpdateView());

    eventBus.on(GameEventType.VIS_SET_ACTIVE_PLAYER, (data: { playerId: string }) => {
      this.activePlayerId = data.playerId;
      const player = this.model.getPlayer(data.playerId);
      if (player && !this.fpsModeActive) {
        this.camera.panTo(player.node.x, player.node.y, player.angle, CameraConfig.FollowPanDuration, CameraConfig.FollowPanEase);
      }
      this.doUpdateView();
    });

    eventBus.on(GameEventType.FPS_MODE_CHANGED, (data: { enabled: boolean }) => {
      this.fpsModeActive = data.enabled;
    });

    eventBus.on(GameEventType.VIS_SET_SELECT_MESH, (data: { nodeId: number }) => {
      this.nodeVis.setSelectMesh(data.nodeId);
    });
    eventBus.on(GameEventType.VIS_SET_NEXT_MESH, (data: { nodeId: number }) => {
      this.nodeVis.setNextMesh(data.nodeId);
    });
    eventBus.on(GameEventType.VIS_SET_SHOT_MESH, (data: { nodeId: number }) => {
      this.nodeVis.setShotMesh(data.nodeId);
      this.animator.startAttack(this.activePlayerId);
    });
    eventBus.on(GameEventType.VIS_CLEAR_NEXT_MESH, () => {
      this.nodeVis.clearNextMesh();
    });
    eventBus.on(GameEventType.VIS_CLEAR_SHOT_MESH, () => {
      this.nodeVis.clearShotMesh();
    });

    eventBus.on(GameEventType.VIS_SHOW_HIT_EFFECT, (data: { playerId: string }) => {
      this.effects.showHitEffect(data.playerId);
      const player = this.model.getPlayer(data.playerId);
      if (player) this.hpBarManager.updateBar(data.playerId, player.health, player.maxHealth);
    });
    eventBus.on(GameEventType.VIS_HIDE_PLAYER, (data: { playerId: string }) => {
      this.effects.hidePlayer(data.playerId);
      this.hpBarManager.removeBar(data.playerId);
    });

    eventBus.on(GameEventType.VIS_SET_REACHABLE_NODES, (data: { nodeIds: number[] }) => {
      this.nodeVis.setReachableNodes(data.nodeIds);
      this.doUpdateView();
    });
    eventBus.on(GameEventType.VIS_CLEAR_REACHABLE_NODES, () => {
      this.nodeVis.clearReachableNodes();
      this.doUpdateView();
    });

    eventBus.on(GameEventType.VIS_ANIMATE_ALONG_PATH, (data: { playerId: string; path: number[]; finalAngle: number }) => {
      this.lifecycle.animateAlongPath(data.playerId, data.path, data.finalAngle);
    });

    eventBus.on(GameEventType.VIS_SET_MOVE_PATH, (data: { nodeIds: number[] }) => {
      this.nodeVis.setMovePath(data.nodeIds);
      this.doUpdateView();
    });
    eventBus.on(GameEventType.VIS_CLEAR_MOVE_PATH, () => {
      this.nodeVis.clearMovePath();
      this.doUpdateView();
    });

    eventBus.on(GameEventType.VIS_UPDATE_OBSTACLES, () => this.updateObstacles());

    eventBus.on(GameEventType.PLAYER_ACTION_CONFIRMED, (data: { playerId: string; moveToNodeId: number; shotAtNodeId: number | undefined; angle: number; color: number }) => {
      this.nodeVis.setConfirmedMove(data.playerId, data.moveToNodeId, data.angle, data.color);
    });

    eventBus.on(GameEventType.INPUT_LOCKED, (data: { locked: boolean }) => {
      if (!data.locked) {
        this.nodeVis.clearConfirmedMoves();
      }
    });

    eventBus.on(GameEventType.VIS_PLAY_DANCE, (data: { playerId: string }) => {
      this.animator.startDance(data.playerId);
      const player = this.model.getPlayer(data.playerId);
      if (player) {
        this.textBurstEffect.playAtGameCoords(player.node.x, player.node.y, RenderConfig.PlayerZOffset);
      }
    });

    eventBus.on(GameEventType.VIS_THREAT_MAP_UPDATED, (data: { scores: Float32Array; teamColor: number }) => {
      this.heatmap.update(data.scores, data.teamColor);
    });

    eventBus.on(GameEventType.VIS_SCORENODE_LABELS, (data) => {
      if (data.scores === null) {
        this.scoreLabels.clear();
      } else {
        this.scoreLabels.update(data.scores);
      }
    });

  }

  private tickUpdateVisibility(): void {
    if (!PlayerConfig.FogOfWarEnabled) return;
    const activePlayer = this.model.getPlayer(this.activePlayerId);
    if (!activePlayer) return;

    const origin = { x: activePlayer.node.x, y: activePlayer.node.y };
    const halfAngle = PlayerConfig.ViewAngle / 2;
    const dirX = Math.cos(activePlayer.angle * Math.PI / 180);
    const dirY = Math.sin(activePlayer.angle * Math.PI / 180);

    for (const [playerId, player] of this.model.players) {
      if (playerId === this.activePlayerId) continue;
      if (!player.isAlive) continue;
      if (!this.lifecycle.isPathAnimating(playerId)) continue;

      const mesh = this.lifecycle.playerMeshes.get(playerId);
      if (!mesh) continue;

      const gamePos = worldToGame(mesh.position.x, mesh.position.z);
      const inCone = isPointInCone(gamePos, origin, dirX, dirY, halfAngle, PlayerConfig.MaxViewDistance)
        && !this.model.Lines.some(seg => seg.intersects(origin, gamePos));
      this.lifecycle.setVisible(playerId, inCone);
    }
  }

  dispose(): void { }
}
