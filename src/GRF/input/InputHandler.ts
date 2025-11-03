import * as THREE from 'three';
import { GameEventBus, GameEventType } from '../../core/events/GameEventBus';
import { KEYBOARD_KEYS, ENTITY_IDS } from '../../config/GameConstants';

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

  constructor(
    canvas: HTMLCanvasElement,
    camera: THREE.PerspectiveCamera,
    meshList: THREE.Mesh[],
    meshToNodeMap: Map<number, number>,
    eventBus: GameEventBus
  ) {
    this.canvas = canvas;
    this.camera = camera;
    this.meshList = meshList;
    this.meshToNodeMap = meshToNodeMap;
    this.eventBus = eventBus;
    this.raycaster = new THREE.Raycaster();

    this.setupEventListeners();
  }

  /**
   * Sets up DOM event listeners
   */
  private setupEventListeners(): void {
    this.canvas.addEventListener('click', this.handleCanvasClick.bind(this), false);
    window.addEventListener('keydown', this.handleKeyDown.bind(this), false);
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

    // Handle view angle toggle
    if (event.key === KEYBOARD_KEYS.TOGGLE_VIEW_ANGLE ||
        event.key === KEYBOARD_KEYS.TOGGLE_VIEW_ANGLE_UPPER) {
      this.eventBus.emit(GameEventType.VIEW_ANGLE_TOGGLED, { isVisible: true });
    }
    // Handle player selection
    else if (event.key === KEYBOARD_KEYS.SELECT_PLAYER_1) {
      this.eventBus.emit(GameEventType.PLAYER_SWITCHED, {
        previousPlayerId: '',
        currentPlayerId: ENTITY_IDS.PLAYER_1,
      });
    }
    else if (event.key === KEYBOARD_KEYS.SELECT_PLAYER_2) {
      this.eventBus.emit(GameEventType.PLAYER_SWITCHED, {
        previousPlayerId: '',
        currentPlayerId: ENTITY_IDS.PLAYER_2,
      });
    }
    // Handle enemy selection
    else if (event.key === KEYBOARD_KEYS.SELECT_ENEMY_1) {
      this.eventBus.emit(GameEventType.ENEMY_SWITCHED, {
        enemyId: ENTITY_IDS.ENEMY_1,
      } as any);
    }
    else if (event.key === KEYBOARD_KEYS.SELECT_ENEMY_2) {
      this.eventBus.emit(GameEventType.ENEMY_SWITCHED, {
        enemyId: ENTITY_IDS.ENEMY_2,
      } as any);
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
    this.canvas.removeEventListener('click', this.handleCanvasClick.bind(this));
    window.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }
}
