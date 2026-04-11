import * as THREE from 'three';
import { GameEventBus, GameEventType } from '../core/GameEventBus';
import { KEYBOARD_KEYS } from '../config/GameConfig';


/**
 * Handles all user input (mouse and keyboard)
 * Emits events through the GameEventBus
 */
export class InputHandler {
  private canvas: HTMLCanvasElement;
  private raycaster: THREE.Raycaster;
  private camera: THREE.PerspectiveCamera;
  private meshList: THREE.Mesh[];
  private meshToNodeMap: Map<number, number>;
  private eventBus: GameEventBus;
  private playerIds: string[];
  private activePlayerId: string;
  private readonly handleCanvasClickBound: (e: MouseEvent) => void;
  private readonly handleKeyDownBound: (e: KeyboardEvent) => void;

  constructor(
    canvas: HTMLCanvasElement,
    camera: THREE.PerspectiveCamera,
    meshList: THREE.Mesh[],
    meshToNodeMap: Map<number, number>,
    eventBus: GameEventBus,
    playerIds: string[],
    activePlayerId: string,
  ) {
    this.canvas = canvas;
    this.camera = camera;
    this.meshList = meshList;
    this.meshToNodeMap = meshToNodeMap;
    this.eventBus = eventBus;
    this.raycaster = new THREE.Raycaster();
    this.playerIds = playerIds;
    this.activePlayerId = activePlayerId;
    this.handleCanvasClickBound = this.handleCanvasClick.bind(this);
    this.handleKeyDownBound = this.handleKeyDown.bind(this);

    this.setupEventListeners();
  }

  /** Updates the active player ID (call when the active player changes). */
  setActivePlayerId(id: string): void {
    this.activePlayerId = id;
  }

  /**
   * Sets up DOM event listeners
   */
  private setupEventListeners(): void {
    this.canvas.addEventListener('click', this.handleCanvasClickBound, false);
    window.addEventListener('keydown', this.handleKeyDownBound, false);
  }

  /**
   * Handles canvas click events
   */
  private handleCanvasClick(event: MouseEvent): void {
    const intersects = this.getIntersects(event);

    if (intersects.length > 0) {
      const mesh = intersects[0].object as THREE.Mesh;
      const nodeId = this.meshToNodeMap.get(mesh.id);

      if (nodeId !== undefined) {
        this.eventBus.emit(GameEventType.NODE_CLICKED, {
          nodeId,
          position: { x: mesh.position.x, y: mesh.position.y },
        });
      }
    } else {
      this.eventBus.emit(GameEventType.CANVAS_CLICKED_EMPTY);
    }
  }

  /**
   * Handles keyboard events
   */
  private handleKeyDown(event: KeyboardEvent): void {
    this.eventBus.emit(GameEventType.KEY_PRESSED, { key: event.key });

    // Handle dance animation
    if (event.key === KEYBOARD_KEYS.DANCE ||
             event.key === KEYBOARD_KEYS.DANCE_UPPER) {
      this.eventBus.emit(GameEventType.VIS_PLAY_DANCE, { playerId: this.activePlayerId });
    }
    // Handle dynamic player selection (keys 1-9)
    else if (event.key >= '1' && event.key <= '9') {
      const keyNumber = parseInt(event.key, 10);
      const playerIndex = keyNumber - 1;

      // Check if this key corresponds to a player
      if (playerIndex < this.playerIds.length) {
        this.eventBus.emit(GameEventType.PLAYER_SWITCHED, {
          previousPlayerId: '',
          currentPlayerId: this.playerIds[playerIndex],
        });
      }
    }
  }

  /**
   * Performs raycasting to get intersections
   */
  private getIntersects(mouseEvent: MouseEvent): THREE.Intersection[] {
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    const x = (mouseEvent.offsetX / width) * 2.0 - 1.0;
    const y = (mouseEvent.offsetY / height) * 2.0 - 1.0;

    const mouse = new THREE.Vector2(x, -y);
    this.raycaster.setFromCamera(mouse, this.camera);

    return this.raycaster.intersectObjects(this.meshList);
  }

  /**
   * Cleans up event listeners
   */
  dispose(): void {
    this.canvas.removeEventListener('click', this.handleCanvasClickBound);
    window.removeEventListener('keydown', this.handleKeyDownBound);
  }
}
