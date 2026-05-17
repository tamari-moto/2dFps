/**
 * プレイヤーターン管理の状態機械
 * Stateパターンの実装: 各状態が独立したクラスとして定義される。
 */

export enum State {
  Idle = "Idle",
  Select = "Select",
  Move = "Move",
  Shot = "Shot"
}

export enum GameEvent {
  SelectPlayer = "Select player",
  MovePlayer = "Move player",
  ShotPlayer = "Shot player",
  Complete = "Complete",
  Cancel = "Cancel"
}

/**
 * 状態インターフェース — 各具体状態クラスが自身の有効な遷移を把握する。
 */
interface IState {
  readonly name: State;
  transition(event: GameEvent): IState | null;
}

class IdleState implements IState {
  readonly name = State.Idle;
  transition(event: GameEvent): IState | null {
    if (event === GameEvent.SelectPlayer) return new SelectState();
    if (event === GameEvent.Cancel)       return new IdleState();
    return null;
  }
}

class SelectState implements IState {
  readonly name = State.Select;
  transition(event: GameEvent): IState | null {
    if (event === GameEvent.MovePlayer) return new MoveState();
    if (event === GameEvent.Cancel)     return new IdleState();
    return null;
  }
}

class MoveState implements IState {
  readonly name = State.Move;
  transition(event: GameEvent): IState | null {
    if (event === GameEvent.ShotPlayer) return new ShotState();
    if (event === GameEvent.Cancel)     return new IdleState();
    return null;
  }
}

class ShotState implements IState {
  readonly name = State.Shot;
  transition(event: GameEvent): IState | null {
    if (event === GameEvent.Complete)   return new IdleState();
    if (event === GameEvent.ShotPlayer) return new ShotState(); // 射撃対象の変更可
    if (event === GameEvent.Cancel)     return new IdleState();
    return null;
  }
}

export class StateMachine {
  private currentState: IState;
  private debugMode: boolean;

  constructor(initialState: State = State.Idle, debugMode: boolean = false) {
    this.currentState = StateMachine.createState(initialState);
    this.debugMode = debugMode;
  }

  getState(): State {
    return this.currentState.name;
  }

  transition(event: GameEvent): boolean {
    const nextState = this.currentState.transition(event);
    if (!nextState) {
      if (this.debugMode) {
        console.error(`Invalid transition from ${this.currentState.name} with event "${event}"`);
      }
      return false;
    }
    if (this.debugMode) {
      console.log(`Transitioned from ${this.currentState.name} to ${nextState.name} via ${event}`);
    }
    this.currentState = nextState;
    return true;
  }

  private static createState(state: State): IState {
    switch (state) {
      case State.Idle:   return new IdleState();
      case State.Select: return new SelectState();
      case State.Move:   return new MoveState();
      case State.Shot:   return new ShotState();
    }
  }
}

export default StateMachine;
