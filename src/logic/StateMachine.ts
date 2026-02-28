/**
 * State machine for player turn management
 */

// 状態 (State) を Enum 型で定義
export enum State {
  Idle = "Idle",
  Select = "Select",
  Move = "Move",
  Shot = "Shot"
}

// イベント (GameEvent) を Enum 型で定義
export enum GameEvent {
  SelectPlayer = "Select player",
  MovePlayer = "Move player",
  ShotPlayer = "Shot player",
  Complete = "Complete",
  Cancel = "Cancel"
}

/**
 * Represents a state transition in the history
 */
export interface StateTransition {
  from: State;
  to: State;
  event: GameEvent;
  timestamp: number;
}

/**
 * Configuration for a state including entry/exit hooks and valid transitions
 */
export interface StateConfig {
  onEnter?: () => void;
  onExit?: () => void;
  validTransitions: Map<GameEvent, State>;
}

/**
 * Type for event listeners
 */
type EventListener = (data?: any) => void;

export class StateMachine {
  private state: State;
  private states: Map<State, StateConfig>;
  private history: StateTransition[] = [];
  private listeners: Map<string, EventListener[]> = new Map();
  private debugMode: boolean = false;

  constructor(initialState: State = State.Idle, debugMode: boolean = false) {
    this.state = initialState;
    this.debugMode = debugMode;
    this.states = this.defineStates();
  }

  /**
   * Defines the state machine configuration
   */
  private defineStates(): Map<State, StateConfig> {
    return new Map([
      [State.Idle, {
        onEnter: () => this.emit('idle:enter'),
        onExit: () => this.emit('idle:exit'),
        validTransitions: new Map([
          [GameEvent.SelectPlayer, State.Select],
          [GameEvent.Cancel, State.Idle] // Can stay in Idle
        ])
      }],
      [State.Select, {
        onEnter: () => this.emit('select:enter'),
        onExit: () => this.emit('select:exit'),
        validTransitions: new Map([
          [GameEvent.MovePlayer, State.Move],
          [GameEvent.Cancel, State.Idle]
        ])
      }],
      [State.Move, {
        onEnter: () => this.emit('move:enter'),
        onExit: () => this.emit('move:exit'),
        validTransitions: new Map([
          [GameEvent.ShotPlayer, State.Shot],
          [GameEvent.Cancel, State.Idle]
        ])
      }],
      [State.Shot, {
        onEnter: () => this.emit('shot:enter'),
        onExit: () => this.emit('shot:exit'),
        validTransitions: new Map([
          [GameEvent.Complete, State.Idle],
          [GameEvent.ShotPlayer, State.Shot], // Can change shot target
          [GameEvent.Cancel, State.Idle]
        ])
      }]
    ]);
  }

  /**
   * Gets the current state
   */
  getState(): State {
    return this.state;
  }

  /**
   * Checks if a transition is valid without executing it
   */
  canTransition(event: GameEvent): boolean {
    const currentStateConfig = this.states.get(this.state);
    return currentStateConfig?.validTransitions.has(event) ?? false;
  }

  /**
   * Performs a state transition
   * @param event - The event triggering the transition
   * @returns true if transition was successful, false otherwise
   */
  transition(event: GameEvent): boolean {
    const currentStateConfig = this.states.get(this.state);
    const nextState = currentStateConfig?.validTransitions.get(event);

    if (!nextState) {
      this.emit('transition:invalid', { event, currentState: this.state });
      if (this.debugMode) {
        console.error(`Invalid transition from ${this.state} with event "${event}"`);
      }
      return false;
    }

    // Exit current state
    currentStateConfig?.onExit?.();

    const previousState = this.state;
    this.state = nextState;

    // Record transition in history
    this.history.push({
      from: previousState,
      to: nextState,
      event,
      timestamp: Date.now()
    });

    // Enter new state
    const nextStateConfig = this.states.get(nextState);
    nextStateConfig?.onEnter?.();

    this.emit('transition:success', {
      from: previousState,
      to: nextState,
      event
    });

    if (this.debugMode) {
      console.log(`Transitioned from ${previousState} to ${nextState} via ${event}`);
    }

    return true;
  }

  /**
   * Registers an event listener
   * @param eventName - Name of the event to listen to
   * @param handler - Handler function to call when event is emitted
   */
  on(eventName: string, handler: EventListener): void {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, []);
    }
    this.listeners.get(eventName)!.push(handler);
  }

  /**
   * Unregisters an event listener
   * @param eventName - Name of the event
   * @param handler - Handler function to remove
   */
  off(eventName: string, handler: EventListener): void {
    const handlers = this.listeners.get(eventName);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    }
  }

  /**
   * Emits an event to all registered listeners
   * @param eventName - Name of the event to emit
   * @param data - Optional data to pass to listeners
   */
  private emit(eventName: string, data?: any): void {
    const handlers = this.listeners.get(eventName);
    if (handlers) {
      handlers.forEach(handler => handler(data));
    }
  }

  /**
   * Gets the transition history
   */
  getHistory(): StateTransition[] {
    return [...this.history];
  }

  /**
   * Clears the transition history
   */
  clearHistory(): void {
    this.history = [];
  }

  /**
   * Resets the state machine to initial state
   */
  reset(): void {
    const currentStateConfig = this.states.get(this.state);
    currentStateConfig?.onExit?.();

    this.state = State.Idle;
    this.history = [];

    const idleStateConfig = this.states.get(State.Idle);
    idleStateConfig?.onEnter?.();

    this.emit('reset');
  }

  /**
   * Enables or disables debug mode
   */
  setDebugMode(enabled: boolean): void {
    this.debugMode = enabled;
  }
}

export default StateMachine;
