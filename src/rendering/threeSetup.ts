import { SceneManager } from './core/SceneManager';
import { VisualizationSync } from './VisualizationSync';
import { CameraInputController } from './cameras/CameraInputController';
import { FPSCameraController } from './cameras/FPSCameraController';
import { OrthoMapController } from './cameras/OrthoMapController';
import { InputHandler } from '../input/InputHandler';
import { GameController } from '../logic/GameController';
import { GameEventBus, GameEventType, gameEventBus } from '../core/GameEventBus';
import type { Model } from '../model/model';
import { Player } from '../model/Player';
import { INetworkAdapter } from '../network/INetworkAdapter';
import { LocalAdapter } from '../network/LocalAdapter';
import { applyServerConfig } from '../config/GameConfig';

/**
 * Three.jsベースの2D FPSゲームのメインセットアップクラス
 * ゲームコンポーネントを統括し、レンダリングループを管理する
 */
export class ThreeSetup {
  private sceneManager: SceneManager;
  private cameraInput: CameraInputController;
  private visualizationSync: VisualizationSync;
  private inputHandler: InputHandler;
  private gameController: GameController;
  private eventBus: GameEventBus;
  private fpsCamera: FPSCameraController;
  private orthoController: OrthoMapController;

  constructor(
    canvas: HTMLCanvasElement,
    adapter: INetworkAdapter = new LocalAdapter(),
  ) {
    // イベントバスを初期化
    this.eventBus = gameEventBus;

    // シーン管理を初期化
    this.sceneManager = new SceneManager(canvas);

    // カメラ入力（OrbitControls / ホイールFOV / panCamera）
    this.cameraInput = new CameraInputController(this.sceneManager.getCamera(), canvas);

    // モデル構築前にサーバー権威設定を適用する。
    // server_configが既に届いていればColyseusAdapterが同期的に発火;
    // LocalAdapterはno-opなのでクライアントのデフォルト値が維持される。
    adapter.onServerConfig((config) => { applyServerConfig(config); });

    // アダプター経由でゲームモデルを初期化
    const model = adapter.initializeModel();

    // 初期モデル状態からエッジグラフの線を構築
    this.sceneManager.buildEdgeGrid(model);

    // 描画同期を初期化
    this.visualizationSync = new VisualizationSync(
      this.sceneManager,
      model,
      adapter.getMyPlayerId(),
      this.eventBus,
    );

    // 入力処理を初期化
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

    // InputHandlerのアクティブプレイヤーを同期し続ける
    this.eventBus.on(GameEventType.VIS_SET_ACTIVE_PLAYER, (data: { playerId: string }) => {
      this.inputHandler.setActivePlayerId(data.playerId);
    });

    // ゲームコントローラーを初期化
    this.gameController = new GameController(
      model,
      this.eventBus,
      adapter.getMyPlayerId(),
      adapter
    );

    // Initialize FPS spectator camera (T キーで通常追従と切替)
    this.fpsCamera = new FPSCameraController(
      this.sceneManager.getCamera(),
      canvas,
      this.sceneManager,
      this.cameraInput,
      this.visualizationSync.getCameraFollow(),
      this.eventBus,
      model,
      () => this.visualizationSync.getActivePlayerId(),
    );
    this.eventBus.on(GameEventType.FPS_MODE_TOGGLE_REQUESTED, () => {
      if (this.fpsCamera.isEnabled()) {
        this.fpsCamera.disable();
      } else {
        this.fpsCamera.enable();
      }
    });

    // Ortho MAP 俯瞰モード（O キー）
    this.orthoController = new OrthoMapController();
    this.cameraInput.setOrthoController(this.orthoController);
    this.eventBus.on(GameEventType.ORTHO_MODE_TOGGLE_REQUESTED, () => {
      if (this.orthoController.isEnabled()) {
        this.orthoController.disable();
        this.cameraInput.setOrthoActive(false);
        this.sceneManager.setActiveCamera(this.sceneManager.getCamera());
        this.eventBus.emit(GameEventType.ORTHO_MODE_CHANGED, { enabled: false });
      } else {
        this.orthoController.enable();
        this.cameraInput.setOrthoActive(true);
        this.sceneManager.setActiveCamera(this.orthoController.getCamera());
        this.eventBus.emit(GameEventType.ORTHO_MODE_CHANGED, { enabled: true });
      }
    });

    // initializeModel()後にobstacles_readyが届いた場合に障害物を再適用・再描画
    adapter.onObstaclesReady((obstacles) => {
      // ObstaclePayload[].segmentsはプレーンオブジェクト; importObstacles()が
      // MapGenerator.importObstacles()経由でLineSegmentインスタンスに変換する。
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.gameController.importObstacles(obstacles as any);
      this.sceneManager.buildEdgeGrid(model);
    });

    // レンダーループを開始
    this.startRenderLoop();

    // 初期ビュー更新
    this.visualizationSync.updateView();
  }

  /**
   * メインレンダリングループを開始する
   */
  private startRenderLoop(): void {
    const render = () => {
      this.sceneManager.render();
      requestAnimationFrame(render);
    };
    render();
  }

  /**
   * ゲームモデルを取得する
   */
  getModel(): Model {
    return this.gameController.getModel();
  }

  /**
   * 背景グリッドの表示を切り替える
   */
  toggleGrid(): void {
    this.sceneManager.toggleGrid();
  }

  toggleLOS(): boolean {
    return this.visualizationSync.toggleLOS();
  }

  toggleHeatmap(): boolean {
    return this.visualizationSync.toggleHeatmap();
  }

  /**
   * 現在のゲームの全プレイヤーIDを返す
   */
  getPlayerIds(): string[] {
    return Array.from(this.gameController.getModel().players.keys());
  }

  /**
   * プレイヤーをモデルとシーンに追加する（リモートプレイヤーが参加したときに呼ばれる）。
   */
  addPlayer(playerId: string, nodeId: number, color: number): void {
    const model = this.gameController.getModel();
    if (model.players.has(playerId)) return;
    const startNode = model.nodeList[nodeId];
    if (!startNode) return;
    const p = new Player(playerId, startNode, 0);
    model.players.set(playerId, p);
    this.visualizationSync.addPlayerMesh(playerId, color);
    this.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);
  }

  /** FPS モードを有効にする。ボタンクリック等のユーザージェスチャ内から呼ぶこと。 */
  enableFps(): void {
    if (!this.fpsCamera.isEnabled()) this.fpsCamera.enable();
  }

  /**
   * すべてのリソースを破棄する
   */
  dispose(): void {
    this.fpsCamera.dispose();
    this.eventBus.removeAllListeners();
    this.cameraInput.dispose();
    this.sceneManager.dispose();
    this.inputHandler.dispose();
  }
}

/**
 * Three.jsセットアップを作成・初期化するファクトリ関数
 */
export function setupThree(
  canvas: HTMLCanvasElement,
  adapter?: INetworkAdapter,
): ThreeSetup {
  return new ThreeSetup(canvas, adapter);
}
