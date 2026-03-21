/**
 * Game event types enumeration
 * Defines all events that can occur in the game
 */
export enum GameEventType {
  // Player events
  PLAYER_MOVED = 'player:moved',
  PLAYER_SELECTED = 'player:selected',
  PLAYER_SWITCHED = 'player:switched',
  PLAYER_SHOT = 'player:shot',
  PLAYER_ANGLE_CHANGED = 'player:angle_changed',

  // Combat events
  COMBAT_RESOLVED = 'combat:resolved',
  HIT_DETECTED = 'hit:detected',
  MISS_DETECTED = 'miss:detected',

  // Turn events
  TURN_STARTED = 'turn:started',
  TURN_ENDED = 'turn:ended',
  TURN_ACTION = 'turn:action',

  // Input events
  NODE_CLICKED = 'node:clicked',
  CANVAS_CLICKED_EMPTY = 'canvas:clicked_empty',
  KEY_PRESSED = 'key:pressed',

  // View events
  VIEW_UPDATED = 'view:updated',
  VIEW_ANGLE_TOGGLED = 'view:angle_toggled',
  CAMERA_MOVED = 'camera:moved',

  // Visualization commands (GameController → VisualizationSync)
  VIS_UPDATE_VIEW = 'vis:update_view',
  VIS_SET_ACTIVE_PLAYER = 'vis:set_active_player',
  VIS_SET_SELECT_MESH = 'vis:set_select_mesh',
  VIS_SET_NEXT_MESH = 'vis:set_next_mesh',
  VIS_SET_SHOT_MESH = 'vis:set_shot_mesh',
  VIS_CLEAR_NEXT_MESH = 'vis:clear_next_mesh',
  VIS_CLEAR_SHOT_MESH = 'vis:clear_shot_mesh',
  VIS_SHOW_HIT_EFFECT = 'vis:show_hit_effect',
  VIS_HIDE_PLAYER = 'vis:hide_player',
  VIS_TOGGLE_VIEW_ANGLE = 'vis:toggle_view_angle',
  VIS_UPDATE_OBSTACLES = 'vis:update_obstacles',
  VIS_PLAY_DANCE = 'vis:play_dance',

  // Map events
  MAP_GENERATED = 'map:generated',
  OBSTACLES_UPDATED = 'obstacles:updated',

  // Game state events
  GAME_STARTED = 'game:started',
  GAME_PAUSED = 'game:paused',
  GAME_RESUMED = 'game:resumed',
  GAME_OVER = 'game:over',

  // Network events (Phase 2+: used by ColyseusAdapter)
  NETWORK_CONNECTED = 'network:connected',
  NETWORK_DISCONNECTED = 'network:disconnected',
  NETWORK_ERROR = 'network:error',
  TURN_ASSIGNED = 'network:turn_assigned',
  TURN_RESULT_RECEIVED = 'network:turn_result',
  PLAYER_JOINED = 'network:player_joined',
  PLAYER_LEFT = 'network:player_left',
  ROOM_STATE_CHANGED = 'network:room_state',
}

/**
 * Event data interface for type safety
 */
export interface GameEventData {
  [GameEventType.PLAYER_MOVED]: {
    playerId: string;
    from: { x: number; y: number; id: number };
    to: { x: number; y: number; id: number };
  };
  [GameEventType.PLAYER_SELECTED]: {
    playerId: string;
    nodeId: number;
  };
  [GameEventType.PLAYER_SWITCHED]: {
    previousPlayerId: string;
    currentPlayerId: string;
  };
  [GameEventType.PLAYER_SHOT]: {
    playerId: string;
    targetNodeId: number;
  };
  [GameEventType.PLAYER_ANGLE_CHANGED]: {
    playerId: string;
    angle: number;
  };
  [GameEventType.HIT_DETECTED]: {
    attackerId: string;
    targetId: string;
    nodeId: number;
  };
  [GameEventType.MISS_DETECTED]: {
    attackerId: string;
    nodeId: number;
  };
  [GameEventType.NODE_CLICKED]: {
    nodeId: number;
    position: { x: number; y: number };
  };
  [GameEventType.VIEW_ANGLE_TOGGLED]: {
    isVisible: boolean;
  };
}

/**
 * Type for event listeners
 */
type EventListener<T = any> = (data: T) => void;

/**
 * Central event bus for decoupling game components
 * Implements the publish-subscribe pattern
 */
export class GameEventBus {
  private listeners: Map<GameEventType, Set<EventListener>> = new Map();
  private eventHistory: Array<{ type: GameEventType; data: any; timestamp: number }> = [];
  private debugMode: boolean = false;
  private maxHistorySize: number = 100;

  constructor(debugMode: boolean = false) {
    this.debugMode = debugMode;
  }

  /**
   * Subscribe to an event
   * @param eventType - The type of event to listen to
   * @param listener - The callback function to invoke when event is emitted
   */
  on<T extends GameEventType>(
    eventType: T,
    listener: EventListener<T extends keyof GameEventData ? GameEventData[T] : any>
  ): void {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, new Set());
    }
    this.listeners.get(eventType)!.add(listener);

    if (this.debugMode) {
      console.log(`[GameEventBus] Listener registered for: ${eventType}`);
    }
  }

  /**
   * Unsubscribe from an event
   * @param eventType - The type of event
   * @param listener - The callback function to remove
   */
  off<T extends GameEventType>(
    eventType: T,
    listener: EventListener<T extends keyof GameEventData ? GameEventData[T] : any>
  ): void {
    const listeners = this.listeners.get(eventType);
    if (listeners) {
      listeners.delete(listener);
      if (this.debugMode) {
        console.log(`[GameEventBus] Listener unregistered for: ${eventType}`);
      }
    }
  }

  /**
   * Emit an event to all registered listeners
   * @param eventType - The type of event to emit
   * @param data - The data to pass to listeners
   */
  emit<T extends GameEventType>(
    eventType: T,
    data?: T extends keyof GameEventData ? GameEventData[T] : any
  ): void {
    // Record in history
    this.eventHistory.push({
      type: eventType,
      data,
      timestamp: Date.now(),
    });

    // Trim history if needed
    if (this.eventHistory.length > this.maxHistorySize) {
      this.eventHistory.shift();
    }

    // Notify listeners
    const listeners = this.listeners.get(eventType);
    if (listeners) {
      listeners.forEach((listener) => {
        try {
          listener(data);
        } catch (error) {
          console.error(`[GameEventBus] Error in listener for ${eventType}:`, error);
        }
      });
    }

    if (this.debugMode) {
      console.log(`[GameEventBus] Event emitted: ${eventType}`, data);
    }
  }

  /**
   * Subscribe to an event for one-time execution
   * @param eventType - The type of event to listen to
   * @param listener - The callback function to invoke once
   */
  once<T extends GameEventType>(
    eventType: T,
    listener: EventListener<T extends keyof GameEventData ? GameEventData[T] : any>
  ): void {
    const onceWrapper = (data: any) => {
      listener(data);
      this.off(eventType, onceWrapper);
    };
    this.on(eventType, onceWrapper);
  }

  /**
   * Get event history
   */
  getHistory(): Array<{ type: GameEventType; data: any; timestamp: number }> {
    return [...this.eventHistory];
  }

  /**
   * Clear event history
   */
  clearHistory(): void {
    this.eventHistory = [];
  }

  /**
   * Get all registered event types
   */
  getRegisteredEvents(): GameEventType[] {
    return Array.from(this.listeners.keys());
  }

  /**
   * Get listener count for an event type
   */
  getListenerCount(eventType: GameEventType): number {
    return this.listeners.get(eventType)?.size ?? 0;
  }

  /**
   * Remove all listeners for a specific event type
   */
  removeAllListeners(eventType?: GameEventType): void {
    if (eventType) {
      this.listeners.delete(eventType);
      if (this.debugMode) {
        console.log(`[GameEventBus] All listeners removed for: ${eventType}`);
      }
    } else {
      this.listeners.clear();
      if (this.debugMode) {
        console.log(`[GameEventBus] All listeners removed`);
      }
    }
  }

  /**
   * Enable or disable debug mode
   */
  setDebugMode(enabled: boolean): void {
    this.debugMode = enabled;
  }

  /**
   * Set maximum history size
   */
  setMaxHistorySize(size: number): void {
    this.maxHistorySize = size;
    // Trim history if needed
    while (this.eventHistory.length > this.maxHistorySize) {
      this.eventHistory.shift();
    }
  }
}

/**
 * Global event bus instance
 * Can be imported and used throughout the application
 */
export const gameEventBus = new GameEventBus();
