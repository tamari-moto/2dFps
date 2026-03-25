import * as THREE from 'three';
import { Model } from '../model/model';
import { ViewAngleVisualizer } from './ViewAngleVisualizer';
import { SceneManager } from './SceneManager';
import { CameraConfig, PlayerConfig } from '../config/GameConfig';
import { GameEventBus, GameEventType } from '../core/GameEventBus';
import { PlayerAnimator } from './PlayerAnimator';
import { PlayerLifecycleManager } from './PlayerLifecycleManager';
import { CameraFollowController } from './CameraFollowController';
import { NodeVisualizationManager } from './NodeVisualizationManager';

/**
 * Thin orchestrator: constructs the four specialized managers and wires them
 * to GameEventBus. External API is unchanged so threeSetup.ts needs no edits.
 */
export class VisualizationSync {
  private nodeVis:   NodeVisualizationManager;
  private lifecycle: PlayerLifecycleManager;
  private animator:  PlayerAnimator;
  private camera:    CameraFollowController;
  private viewAngle: ViewAngleVisualizer;
  private model:     Model;

  private activePlayerId: string;

  constructor(
    sceneManager: SceneManager,
    model: Model,
    activePlayerId: string,
    eventBus: GameEventBus,
  ) {
    this.model = model;
    this.activePlayerId = activePlayerId;

    // Shared map — PlayerAnimator and PlayerLifecycleManager both reference it
    const meshMap = new Map<string, THREE.Object3D>();
    this.animator  = new PlayerAnimator(meshMap);
    this.lifecycle = new PlayerLifecycleManager(sceneManager, this.animator, model, meshMap);
    this.nodeVis   = new NodeVisualizationManager(sceneManager, model);
    this.camera    = new CameraFollowController(sceneManager);
    this.viewAngle = new ViewAngleVisualizer(sceneManager.getScene());

    // Initialize scene objects
    this.nodeVis.initializeNodes();
    this.nodeVis.initializeWalls();
    this.lifecycle.initializePlayers();

    // Snap camera to starting player (no animation)
    const initialPlayer = model.getPlayer(activePlayerId);
    if (initialPlayer) {
      this.camera.snapTo(initialPlayer.node.x, initialPlayer.node.y);
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

  // ── Private helpers ────────────────────────────────────────────────────────

  private doUpdateView(): void {
    const activePlayer = this.model.getPlayer(this.activePlayerId);
    if (!activePlayer) return;

    this.updatePlayers();
    this.viewAngle.draw(activePlayer.node, activePlayer.angle);
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

      const moving = this.lifecycle.applyTransform(
        playerId, player.node.x, player.node.y, player.angle, isActive,
      );
      if (isActive && moving) {
        this.camera.panTo(player.node.x, player.node.y, CameraConfig.FollowMoveDuration, CameraConfig.FollowMoveEase);
      }
    }
  }

  private subscribeToEvents(eventBus: GameEventBus): void {
    eventBus.on(GameEventType.VIS_UPDATE_VIEW, () => this.doUpdateView());

    eventBus.on(GameEventType.VIS_SET_ACTIVE_PLAYER, (data: { playerId: string }) => {
      this.activePlayerId = data.playerId;
      const player = this.model.getPlayer(data.playerId);
      if (player) {
        this.camera.panTo(player.node.x, player.node.y, CameraConfig.FollowPanDuration, CameraConfig.FollowPanEase);
      }
      this.doUpdateView();
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
      this.lifecycle.showHitEffect(data.playerId);
    });
    eventBus.on(GameEventType.VIS_HIDE_PLAYER, (data: { playerId: string }) => {
      this.lifecycle.hidePlayer(data.playerId);
    });

    eventBus.on(GameEventType.VIS_TOGGLE_VIEW_ANGLE, () => {
      const isVisible = this.viewAngle.toggle();
      this.doUpdateView();
      console.log(`View angle edges: ${isVisible ? 'ON' : 'OFF'}`);
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
    });
  }
}
