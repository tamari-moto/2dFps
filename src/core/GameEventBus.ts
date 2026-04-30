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
  VIS_UPDATE_OBSTACLES = 'vis:update_obstacles',
  VIS_PLAY_DANCE = 'vis:play_dance',
  VIS_SET_REACHABLE_NODES = 'vis:set_reachable_nodes',
  VIS_CLEAR_REACHABLE_NODES = 'vis:clear_reachable_nodes',

  // Map events
  MAP_GENERATED = 'map:generated',
  OBSTACLES_UPDATED = 'obstacles:updated',

  // Game state events
  GAME_STARTED = 'game:started',
  GAME_OVER = 'game:over',

  // NPC events
  NPC_TURN_STARTED = 'npc:turn_started',
  NPC_TURNS_COMPLETE = 'npc:turns_complete',
  INPUT_LOCKED = 'input:locked',

  // Spectator (FPS) mode events
  FPS_MODE_TOGGLE_REQUESTED = 'fps:toggle_requested',
  FPS_MODE_CHANGED = 'fps:mode_changed',

  // Ortho MAP overview mode events
  ORTHO_MODE_TOGGLE_REQUESTED = 'ortho:toggle_requested',
  ORTHO_MODE_CHANGED = 'ortho:mode_changed',

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
  // Player events
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

  // Combat events
  [GameEventType.COMBAT_RESOLVED]: void;
  [GameEventType.HIT_DETECTED]: {
    attackerId: string;
    targetId: string;
    nodeId: number;
  };
  [GameEventType.MISS_DETECTED]: {
    attackerId: string;
    nodeId: number;
  };

  // Turn events
  [GameEventType.TURN_STARTED]: void;
  [GameEventType.TURN_ENDED]: void;
  [GameEventType.TURN_ACTION]: void;

  // Input events
  [GameEventType.NODE_CLICKED]: {
    nodeId: number;
    position: { x: number; y: number };
  };
  [GameEventType.CANVAS_CLICKED_EMPTY]: void;
  [GameEventType.KEY_PRESSED]: {
    key: string;
  };

  // View events
  [GameEventType.VIEW_UPDATED]: void;

  // Visualization commands
  [GameEventType.VIS_UPDATE_VIEW]: void;
  [GameEventType.VIS_SET_ACTIVE_PLAYER]: {
    playerId: string;
  };
  [GameEventType.VIS_SET_SELECT_MESH]: {
    nodeId: number;
  };
  [GameEventType.VIS_SET_NEXT_MESH]: {
    nodeId: number;
  };
  [GameEventType.VIS_SET_SHOT_MESH]: {
    nodeId: number;
  };
  [GameEventType.VIS_CLEAR_NEXT_MESH]: void;
  [GameEventType.VIS_CLEAR_SHOT_MESH]: void;
  [GameEventType.VIS_SHOW_HIT_EFFECT]: {
    playerId: string;
  };
  [GameEventType.VIS_HIDE_PLAYER]: {
    playerId: string;
  };
  [GameEventType.VIS_UPDATE_OBSTACLES]: void;
  [GameEventType.VIS_PLAY_DANCE]: {
    playerId: string;
  };
  [GameEventType.VIS_SET_REACHABLE_NODES]: {
    nodeIds: number[];
  };
  [GameEventType.VIS_CLEAR_REACHABLE_NODES]: void;

  // Map events
  [GameEventType.MAP_GENERATED]: void;
  [GameEventType.OBSTACLES_UPDATED]: void;

  // Game state events
  [GameEventType.GAME_STARTED]: void;
  [GameEventType.GAME_OVER]: void;

  // NPC events
  [GameEventType.NPC_TURN_STARTED]: {
    playerId: string;
  };
  [GameEventType.NPC_TURNS_COMPLETE]: void;
  [GameEventType.INPUT_LOCKED]: {
    locked: boolean;
  };

  // Spectator (FPS) mode events
  [GameEventType.FPS_MODE_TOGGLE_REQUESTED]: void;
  [GameEventType.FPS_MODE_CHANGED]: {
    enabled: boolean;
  };

  // Ortho MAP overview mode events
  [GameEventType.ORTHO_MODE_TOGGLE_REQUESTED]: void;
  [GameEventType.ORTHO_MODE_CHANGED]: {
    enabled: boolean;
  };

  // Network events
  [GameEventType.NETWORK_CONNECTED]: void;
  [GameEventType.NETWORK_DISCONNECTED]: void;
  [GameEventType.NETWORK_ERROR]: void;
  [GameEventType.TURN_ASSIGNED]: void;
  [GameEventType.TURN_RESULT_RECEIVED]: void;
  [GameEventType.PLAYER_JOINED]: void;
  [GameEventType.PLAYER_LEFT]: void;
  [GameEventType.ROOM_STATE_CHANGED]: void;
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

  on<T extends GameEventType>(
    eventType: T,
    listener: EventListener<T extends keyof GameEventData ? GameEventData[T] : any>
  ): void {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, new Set());
    }
    this.listeners.get(eventType)!.add(listener);
  }

  off<T extends GameEventType>(
    eventType: T,
    listener: EventListener<T extends keyof GameEventData ? GameEventData[T] : any>
  ): void {
    this.listeners.get(eventType)?.delete(listener);
  }

  emit<T extends GameEventType>(
    eventType: T,
    data?: T extends keyof GameEventData ? GameEventData[T] : any
  ): void {
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
  }

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

  removeAllListeners(eventType?: GameEventType): void {
    if (eventType) {
      this.listeners.delete(eventType);
    } else {
      this.listeners.clear();
    }
  }
}

/**
 * Global event bus instance
 * Can be imported and used throughout the application
 */
export const gameEventBus = new GameEventBus();
