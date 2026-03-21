import { SceneManager } from './SceneManager';
import { VisualizationSync } from './VisualizationSync';
import { InputHandler } from '../input/InputHandler';
import { GameController } from '../logic/GameController';
import { GameEventBus, GameEventType, gameEventBus } from '../core/GameEventBus';
import type { ObstacleData } from '../model/ObstacleExporter';
import type { Model } from '../model/model';
import { Player } from '../model/Player';
import { INetworkAdapter } from '../network/INetworkAdapter';
import { LocalAdapter } from '../network/LocalAdapter';

/**
 * Main setup class for the Three.js-based 2D FPS game
 * Orchestrates the game components and manages the rendering loop
 */
export class ThreeSetup {
  private sceneManager: SceneManager;
  private visualizationSync: VisualizationSync;
  private inputHandler: InputHandler;
  private gameController: GameController;
  private eventBus: GameEventBus;

  constructor(
    canvas: HTMLCanvasElement,
    adapter: INetworkAdapter = new LocalAdapter(),
  ) {
    // Initialize event bus
    this.eventBus = gameEventBus;

    // Initialize scene management
    this.sceneManager = new SceneManager(canvas);

    // Initialize game model via adapter
    const model = adapter.initializeModel();

    // Initialize visualization synchronization
    this.visualizationSync = new VisualizationSync(
      this.sceneManager,
      model,
      adapter.getMyPlayerId(),
      this.eventBus,
    );

    // Initialize input handling
    const playerIds = Array.from(model.players.keys());
    this.inputHandler = new InputHandler(
      canvas,
      this.sceneManager.getCamera(),
      this.visualizationSync.getMeshList(),
      this.visualizationSync.getMeshToNodeMap(),
      this.eventBus,
      playerIds,
      adapter.getMyPlayerId(),
    );

    // Keep InputHandler's active player in sync
    this.eventBus.on(GameEventType.VIS_SET_ACTIVE_PLAYER, (data: { playerId: string }) => {
      this.inputHandler.setActivePlayerId(data.playerId);
    });

    // Initialize game controller
    this.gameController = new GameController(
      model,
      this.eventBus,
      adapter.getMyPlayerId(),
      adapter
    );

    // Re-apply obstacles + redraw if obstacles_ready arrives after initializeModel()
    adapter.onObstaclesReady((obstacles) => {
      // ObstaclePayload[].segments are plain objects; importObstacles() converts
      // them to LineSegment instances internally via MapGenerator.importObstacles().
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.gameController.importObstacles(obstacles as any);
    });

    // Start render loop
    this.startRenderLoop();

    // Initial view update
    this.visualizationSync.updateView();
  }

  /**
   * Starts the main rendering loop
   */
  private startRenderLoop(): void {
    const render = () => {
      this.sceneManager.updateControls();
      this.sceneManager.render();
      requestAnimationFrame(render);
    };
    render();
  }

  /**
   * Gets the game model
   */
  getModel(): Model {
    return this.gameController.getModel();
  }

  /**
   * Regenerates obstacles randomly
   */
  regenerateObstacles(): void {
    this.gameController.regenerateObstacles();
  }

  /**
   * Imports obstacles from data
   */
  importObstacles(obstaclesData: ObstacleData[]): void {
    this.gameController.importObstacles(obstaclesData);
  }

  /**
   * Generates a complex map
   */
  generateComplexMap(): void {
    this.gameController.generateComplexMap();
  }

  /**
   * Toggles background grid visibility
   */
  toggleGrid(): void {
    this.sceneManager.toggleGrid();
  }

  /**
   * Returns all player IDs in the current game
   */
  getPlayerIds(): string[] {
    return Array.from(this.gameController.getModel().players.keys());
  }

  /**
   * Adds a player to the model and scene (called when a remote player joins).
   */
  addPlayer(playerId: string, nodeId: number, color: number): void {
    const model = this.gameController.getModel();
    if (model.players.has(playerId)) return;
    const startNode = model.nodeList[nodeId];
    if (!startNode) return;
    const p = new Player(playerId, startNode, color);
    model.players.set(playerId, p);
    this.visualizationSync.addPlayerMesh(playerId, color);
    this.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);
  }

  /**
   * Disposes all resources
   */
  dispose(): void {
    this.sceneManager.dispose();
    this.inputHandler.dispose();
  }
}

/**
 * Factory function to create and initialize the Three.js setup
 */
export function setupThree(
  canvas: HTMLCanvasElement,
  adapter?: INetworkAdapter,
): ThreeSetup {
  return new ThreeSetup(canvas, adapter);
}
