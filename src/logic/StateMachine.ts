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
 * Configuration for a state including entry/exit hooks and valid transitions
 */
export interface StateConfig {
  onEnter?: () => void;
  onExit?: () => void;
  validTransitions: Map<GameEvent, State>;
}

export class StateMachine {
  private state: State;
  private states: Map<State, StateConfig>;
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
        validTransitions: new Map([
          [GameEvent.SelectPlayer, State.Select],
          [GameEvent.Cancel, State.Idle]
        ])
      }],
      [State.Select, {
        validTransitions: new Map([
          [GameEvent.MovePlayer, State.Move],
          [GameEvent.Cancel, State.Idle]
        ])
      }],
      [State.Move, {
        validTransitions: new Map([
          [GameEvent.ShotPlayer, State.Shot],
          [GameEvent.Cancel, State.Idle]
        ])
      }],
      [State.Shot, {
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
   * Performs a state transition
   * @param event - The event triggering the transition
   * @returns true if transition was successful, false otherwise
   */
  transition(event: GameEvent): boolean {
    const currentStateConfig = this.states.get(this.state);
    const nextState = currentStateConfig?.validTransitions.get(event);

    if (!nextState) {
      if (this.debugMode) {
        console.error(`Invalid transition from ${this.state} with event "${event}"`);
      }
      return false;
    }

    // Exit current state
    currentStateConfig?.onExit?.();

    const previousState = this.state;
    this.state = nextState;

    // Enter new state
    const nextStateConfig = this.states.get(nextState);
    nextStateConfig?.onEnter?.();

    if (this.debugMode) {
      console.log(`Transitioned from ${previousState} to ${nextState} via ${event}`);
    }

    return true;
  }
}

export default StateMachine;
