import * as THREE from 'three';
import { Model } from '../model/model';
import { SceneManager } from './core/SceneManager';
import { CameraConfig, PlayerConfig, RenderConfig } from '../config/GameConfig';
import { GameEventBus, GameEventType } from '../core/GameEventBus';
import { PlayerAnimator } from './players/PlayerAnimator';
import { PlayerLifecycleManager } from './players/PlayerLifecycleManager';
import { PlayerEffects } from './players/PlayerEffects';
import { CameraFollowController } from './cameras/CameraFollowController';
import { NodeVisualizationManager } from './world/NodeVisualizationManager';
import { TextBurstEffect } from './effects/TextBurstEffect';

/**
 * Thin orchestrator: constructs the four specialized managers and wires them
 * to GameEventBus. External API is unchanged so threeSetup.ts needs no edits.
 */
export class VisualizationSync {
  private nodeVis:       NodeVisualizationManager;
  private lifecycle:     PlayerLifecycleManager;
  private effects:       PlayerEffects;
  private animator:      PlayerAnimator;
  private camera:        CameraFollowController;
  private textBurstEffect: TextBurstEffect;
  private model:         Model;

  private activePlayerId: string;
  private fpsModeActive = false;
  /** Pending BFS paths to consume in the next updatePlayers call (playerId → pathNodeIds). */
  private pendingPaths: Map<string, number[]> = new Map();

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
    this.lifecycle     = new PlayerLifecycleManager(sceneManager, this.animator, model, meshMap);
    this.effects       = new PlayerEffects(meshMap, this.animator, model);
    this.nodeVis       = new NodeVisualizationManager(sceneManager, model);
    this.camera        = new CameraFollowController(sceneManager);
    this.textBurstEffect = new TextBurstEffect(sceneManager);

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
    const activePlayer = this.model.getPlayer(this.activePlayerId);
    if (!activePlayer) return;

    this.updatePlayers();
    this.nodeVis.updateNodeColors(activePlayer);
  }

  private updatePlayers(): void {
    const activePlayer = this.model.getPlayer(this.activePlayerId);

    const visibleNodeIds = new Set<number>();
    if (PlayerConfig.FogOfWarEnabled && activePlayer) {
      const nodes = this.model.getVisibleNodesAtAngle(
        activePlayer.node, activePlayer.angle, PlayerConfig.MaxViewDistance,
      );
      for (const n of nodes) visibleNodeIds.add(n.id);
      visibleNodeIds.add(activePlayer.node.id);
    }

    for (const [playerId, player] of this.model.players) {
      if (!player.isAlive) continue;

      const isActive = playerId === this.activePlayerId;
      const shouldShow = !PlayerConfig.FogOfWarEnabled
        || isActive
        || visibleNodeIds.has(player.node.id);

      this.lifecycle.setVisible(playerId, shouldShow);
      if (!shouldShow) continue;

      const path = this.pendingPaths.get(playerId);
      let moving: boolean;
      if (path && path.length >= 2) {
        this.pendingPaths.delete(playerId);
        moving = this.lifecycle.applyPathTransform(playerId, path, player.angle, isActive);
      } else {
        moving = this.lifecycle.applyTransform(
          playerId, player.node.x, player.node.y, player.angle, isActive,
        );
      }
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
    });
    eventBus.on(GameEventType.VIS_HIDE_PLAYER, (data: { playerId: string }) => {
      this.effects.hidePlayer(data.playerId);
    });

    eventBus.on(GameEventType.VIS_PLAYER_PATH, (data: { playerId: string; pathNodeIds: number[] }) => {
      this.pendingPaths.set(data.playerId, data.pathNodeIds);
    });

    eventBus.on(GameEventType.VIS_SET_REACHABLE_NODES, (data: { nodeIds: number[] }) => {
      this.nodeVis.setReachableNodes(data.nodeIds);
      this.doUpdateView();
    });
    eventBus.on(GameEventType.VIS_CLEAR_REACHABLE_NODES, () => {
      this.nodeVis.clearReachableNodes();
      this.doUpdateView();
    });

    eventBus.on(GameEventType.VIS_UPDATE_OBSTACLES, () => this.updateObstacles());

    eventBus.on(GameEventType.VIS_PLAY_DANCE, (data: { playerId: string }) => {
      this.animator.startDance(data.playerId);
      const player = this.model.getPlayer(data.playerId);
      if (player) {
        this.textBurstEffect.playAtGameCoords(player.node.x, player.node.y, RenderConfig.PlayerZOffset);
      }
    });
  }
}
