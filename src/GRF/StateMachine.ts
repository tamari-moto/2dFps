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
let test=false;
export class StateMachine {
  private state: State;

  constructor() {
    this.state = State.Idle; // 初期状態
  }

  // 現在の状態を取得
  getState(): State {
    return this.state;
  }

  // 状態遷移
  transition(event: GameEvent): boolean {
    if (event === GameEvent.Cancel) {
      this.state = State.Idle; // Cancel イベントはどの状態からでも Idle に戻る
      if(test)console.log("Transitioned to Idle (via Cancel)");
      return true;
    }

    switch (this.state) {
      case State.Idle:
        if (event === GameEvent.SelectPlayer) {
          this.state = State.Select;
          if(test)console.log("Transitioned to Select");
          return true;
        }
        break;

      case State.Select:
        if (event === GameEvent.MovePlayer) {
          this.state = State.Move;
          if(test)console.log("Transitioned to Move");
          return true;
        }
        break;

      case State.Move:
        if (event === GameEvent.ShotPlayer) {
          this.state = State.Shot;
          if(test)console.log("Transitioned to Shot");
          return true;
        }
        break;

      case State.Shot:
        if (event === GameEvent.Complete) {
          this.state = State.Idle;
          if(test)console.log("Transitioned to Idle");
          return true;
        }
        break;

      default:
        if(test)console.error("Unknown state");
    }

    // 遷移できなかった場合
    if(test)console.error(`Invalid transition from ${this.state} with event "${event}"`);
    return false;
  }
}

export default StateMachine;