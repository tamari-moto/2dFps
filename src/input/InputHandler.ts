import * as THREE from 'three';
import { GameEventBus, GameEventType } from '../core/GameEventBus';
import { KEYBOARD_KEYS } from '../config/GameConstants';


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
  private readonly handleTouchStartBound: (e: TouchEvent) => void;
  private readonly handleTouchMoveBound: (e: TouchEvent) => void;
  private pinchStartDistance: number | null = null;
  private onPinchZoom: ((delta: number) => void) | null = null;

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
    this.handleTouchStartBound = this.handleTouchStart.bind(this);
    this.handleTouchMoveBound = this.handleTouchMove.bind(this);

    this.setupEventListeners();
  }

  /** Updates the active player ID (call when the active player changes). */
  setActivePlayerId(id: string): void {
    this.activePlayerId = id;
  }

  /** Sets the callback invoked on pinch-zoom (delta > 0 = zoom out, < 0 = zoom in). */
  setPinchZoomCallback(cb: (delta: number) => void): void {
    this.onPinchZoom = cb;
  }

  /**
   * Sets up DOM event listeners
   */
  private setupEventListeners(): void {
    this.canvas.addEventListener('click', this.handleCanvasClickBound, false);
    window.addEventListener('keydown', this.handleKeyDownBound, false);
    this.canvas.addEventListener('touchstart', this.handleTouchStartBound, { passive: false });
    this.canvas.addEventListener('touchmove', this.handleTouchMoveBound, { passive: false });
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
    // Handle dance animation
    else if (event.key === KEYBOARD_KEYS.DANCE ||
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
   * Handles touchstart: single tap → node click, two fingers → begin pinch zoom
   */
  private handleTouchStart(event: TouchEvent): void {
    event.preventDefault();
    if (event.touches.length === 1) {
      const touch = event.touches[0];
      const intersects = this.getIntersectsFromXY(touch.clientX - this.canvas.getBoundingClientRect().left, touch.clientY - this.canvas.getBoundingClientRect().top);
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
    } else if (event.touches.length === 2) {
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      this.pinchStartDistance = Math.sqrt(dx * dx + dy * dy);
    }
  }

  /**
   * Handles touchmove: two-finger pinch → FOV zoom
   */
  private handleTouchMove(event: TouchEvent): void {
    event.preventDefault();
    if (event.touches.length === 2 && this.pinchStartDistance !== null) {
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const delta = this.pinchStartDistance - dist;
      this.pinchStartDistance = dist;
      if (this.onPinchZoom) this.onPinchZoom(delta);
    }
  }

  /**
   * Performs raycasting to get intersections
   */
  private getIntersects(mouseEvent: MouseEvent): THREE.Intersection[] {
    return this.getIntersectsFromXY(mouseEvent.offsetX, mouseEvent.offsetY);
  }

  /**
   * Performs raycasting from canvas-local coordinates
   */
  private getIntersectsFromXY(offsetX: number, offsetY: number): THREE.Intersection[] {
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    const x = (offsetX / width) * 2.0 - 1.0;
    const y = (offsetY / height) * 2.0 - 1.0;

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
    this.canvas.removeEventListener('touchstart', this.handleTouchStartBound);
    this.canvas.removeEventListener('touchmove', this.handleTouchMoveBound);
  }
}
