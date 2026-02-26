import { SceneManager } from './rendering/SceneManager';
import { VisualizationSync } from './rendering/VisualizationSync';
import { InputHandler } from './input/InputHandler';
import { GameController } from './game/GameController';
import { GameEventBus, gameEventBus } from '../core/events/GameEventBus';
import type { ObstacleData } from '../MODEL/ObstacleExporter';
import type { Model } from '../MODEL/model';
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

  constructor(canvas: HTMLCanvasElement, adapter: INetworkAdapter = new LocalAdapter()) {
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
      adapter.getMyPlayerId()
    );

    // Initialize input handling
    const playerIds = Array.from(model.players.keys());
    this.inputHandler = new InputHandler(
      canvas,
      this.sceneManager.getCamera(),
      this.visualizationSync.getMeshList(),
      this.visualizationSync.getMeshToNodeMap(),
      this.eventBus,
      playerIds
    );

    // Initialize game controller
    this.gameController = new GameController(
      model,
      this.visualizationSync,
      this.eventBus,
      adapter.getMyPlayerId(),
      adapter
    );

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
export function setupThree(canvas: HTMLCanvasElement): ThreeSetup {
  return new ThreeSetup(canvas);
}
