/**
 * ゲームイベント種別の列挙
 * ゲーム内で発生しうるすべてのイベントを定義する
 */
export enum GameEventType {
  // プレイヤーイベント
  PLAYER_MOVED = 'player:moved',
  PLAYER_SELECTED = 'player:selected',
  PLAYER_SWITCHED = 'player:switched',
  PLAYER_SHOT = 'player:shot',
  PLAYER_ANGLE_CHANGED = 'player:angle_changed',

  // 戦闘イベント
  COMBAT_RESOLVED = 'combat:resolved',
  HIT_DETECTED = 'hit:detected',
  MISS_DETECTED = 'miss:detected',

  // ターンイベント
  TURN_STARTED = 'turn:started',
  TURN_ENDED = 'turn:ended',
  TURN_ACTION = 'turn:action',

  // 入力イベント
  NODE_CLICKED = 'node:clicked',
  CANVAS_CLICKED_EMPTY = 'canvas:clicked_empty',
  KEY_PRESSED = 'key:pressed',

  // ビューイベント
  VIEW_UPDATED = 'view:updated',

  // 描画コマンド (GameController → VisualizationSync)
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
  VIS_SET_MOVE_PATH = 'vis:set_move_path',
  VIS_CLEAR_MOVE_PATH = 'vis:clear_move_path',
  VIS_ANIMATE_ALONG_PATH = 'vis:animate_along_path',
  VIS_PATH_ANIM_COMPLETE = 'vis:path_anim_complete',

  // マップイベント
  MAP_GENERATED = 'map:generated',
  OBSTACLES_UPDATED = 'obstacles:updated',

  // ゲーム状態イベント
  GAME_STARTED = 'game:started',
  GAME_OVER = 'game:over',

  // NPCイベント
  NPC_TURN_STARTED = 'npc:turn_started',
  NPC_TURNS_COMPLETE = 'npc:turns_complete',
  INPUT_LOCKED = 'input:locked',

  // NPCのみのターン（例: FPSモードのRキー — アクティブプレイヤーは停止し、NPCのみ行動）
  NPC_ONLY_TURN = 'input:npc_only_turn',

  // プレイヤー行動確定（人間プレイヤーが移動・射撃を確定）
  PLAYER_ACTION_CONFIRMED = 'player:action_confirmed',

  // スペクテーター（FPS）モードイベント
  FPS_MODE_TOGGLE_REQUESTED = 'fps:toggle_requested',
  FPS_MODE_CHANGED = 'fps:mode_changed',

  // スペクテーター自動ループ制御
  SPECTATOR_SET_AUTO_LOOP = 'spectator:set_auto_loop',
  SPECTATOR_AUTO_LOOP_CHANGED = 'spectator:auto_loop_changed',

  // スペクテータープレイヤー選択
  SPECTATOR_SELECT_PLAYER = 'spectator:select_player',

  // 俯瞰マップ（オルソ）モードイベント
  ORTHO_MODE_TOGGLE_REQUESTED = 'ortho:toggle_requested',
  ORTHO_MODE_CHANGED = 'ortho:mode_changed',

  // 脅威マップのヒートマップ描画
  VIS_THREAT_MAP_UPDATED = 'vis:threat_map_updated',

  // スコアノードラベル描画
  VIS_SCORENODE_LABELS = 'vis:scorenode_labels',

  // ネットワークイベント（ColyseusAdapterで使用）
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
 * 型安全のためのイベントデータインターフェース
 */
export interface GameEventData {
  // プレイヤーイベント
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

  // 戦闘イベント
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

  // ターンイベント
  [GameEventType.TURN_STARTED]: void;
  [GameEventType.TURN_ENDED]: void;
  [GameEventType.TURN_ACTION]: void;

  // 入力イベント
  [GameEventType.NODE_CLICKED]: {
    nodeId: number;
    position: { x: number; y: number };
  };
  [GameEventType.CANVAS_CLICKED_EMPTY]: void;
  [GameEventType.KEY_PRESSED]: {
    key: string;
  };

  // ビューイベント
  [GameEventType.VIEW_UPDATED]: void;

  // 描画コマンド
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
  [GameEventType.VIS_SET_MOVE_PATH]: { nodeIds: number[] };
  [GameEventType.VIS_CLEAR_MOVE_PATH]: void;
  [GameEventType.VIS_ANIMATE_ALONG_PATH]: { playerId: string; path: number[]; finalAngle: number };
  [GameEventType.VIS_PATH_ANIM_COMPLETE]: { playerId: string };

  // マップイベント
  [GameEventType.MAP_GENERATED]: void;
  [GameEventType.OBSTACLES_UPDATED]: void;

  // ゲーム状態イベント
  [GameEventType.GAME_STARTED]: void;
  [GameEventType.GAME_OVER]: void;

  // NPCイベント
  [GameEventType.NPC_TURN_STARTED]: {
    playerId: string;
  };
  [GameEventType.NPC_TURNS_COMPLETE]: void;
  [GameEventType.INPUT_LOCKED]: {
    locked: boolean;
  };

  // NPCのみのターン
  [GameEventType.NPC_ONLY_TURN]: void;

  // プレイヤー行動確定
  [GameEventType.PLAYER_ACTION_CONFIRMED]: {
    playerId: string;
    moveToNodeId: number;
    shotAtNodeId: number | undefined;
    angle: number;
    color: number;
  };

  // スペクテーター（FPS）モードイベント
  [GameEventType.FPS_MODE_TOGGLE_REQUESTED]: void;
  [GameEventType.FPS_MODE_CHANGED]: {
    enabled: boolean;
  };

  // スペクテーター自動ループ制御
  [GameEventType.SPECTATOR_SET_AUTO_LOOP]: { enabled: boolean };
  [GameEventType.SPECTATOR_AUTO_LOOP_CHANGED]: { enabled: boolean };

  // スペクテータープレイヤー選択
  [GameEventType.SPECTATOR_SELECT_PLAYER]: { playerId: string };

  // 俯瞰マップ（オルソ）モードイベント
  [GameEventType.ORTHO_MODE_TOGGLE_REQUESTED]: void;
  [GameEventType.ORTHO_MODE_CHANGED]: {
    enabled: boolean;
  };

  // 脅威マップのヒートマップ描画
  [GameEventType.VIS_THREAT_MAP_UPDATED]: {
    scores: Float32Array;
    teamColor: number;
  };

  // スコアノードラベル描画
  [GameEventType.VIS_SCORENODE_LABELS]: {
    scores: Map<number, number> | null;
  };

  // ネットワークイベント
  [GameEventType.NETWORK_CONNECTED]: void;
  [GameEventType.NETWORK_DISCONNECTED]: void;
  [GameEventType.NETWORK_ERROR]: void;
  [GameEventType.TURN_ASSIGNED]: void;
  [GameEventType.TURN_RESULT_RECEIVED]: void;
  [GameEventType.PLAYER_JOINED]: void;
  [GameEventType.PLAYER_LEFT]: void;
  [GameEventType.ROOM_STATE_CHANGED]: void;
}

type EventListener<T> = (data: T) => void;

export class GameEventBus {
  private listeners: Map<GameEventType, Set<EventListener<GameEventData[GameEventType]>>> = new Map();

  on<T extends GameEventType>(
    eventType: T,
    listener: EventListener<GameEventData[T]>
  ): void {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, new Set());
    }
    this.listeners.get(eventType)!.add(listener as EventListener<GameEventData[GameEventType]>);
  }

  off<T extends GameEventType>(
    eventType: T,
    listener: EventListener<GameEventData[T]>
  ): void {
    this.listeners.get(eventType)?.delete(listener as EventListener<GameEventData[GameEventType]>);
  }

  emit<T extends GameEventType>(
    eventType: T,
    data?: GameEventData[T]
  ): void {
    const listeners = this.listeners.get(eventType);
    if (listeners) {
      listeners.forEach((listener) => {
        try {
          listener(data as GameEventData[GameEventType]);
        } catch (error) {
          console.error(`[GameEventBus] Error in listener for ${eventType}:`, error);
        }
      });
    }
  }

  once<T extends GameEventType>(
    eventType: T,
    listener: EventListener<GameEventData[T]>
  ): void {
    const onceWrapper: EventListener<GameEventData[T]> = (data) => {
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
 * グローバルイベントバスインスタンス
 * アプリケーション全体からインポートして使用できる
 */
export const gameEventBus = new GameEventBus();
