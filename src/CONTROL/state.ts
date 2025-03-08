import { createMachine, createActor } from 'xstate';

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

// ゲームの状態マシンの定義
const gameStateMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAcA2BDAnmATgOgEkJUwBiAZTBIGMAXAAjS1wG0AGAXURQHtYBLWvx4A7biAAeiACwAOaXgBssgOwBWADQhMiWQEY8agL5GtTbPiIlSAYXQjqVdlyQhkfQcLGupCRWpU8AGY2aWV1LR0EIIAmWTwATkVpOIC9FNkAkzMMCzxKGlpSAFkeADcwRlzWTnF3ASFRcV89BJi8OL0YzW1EIOVg9Wy3avwCsDpbe0dUZzqPRu9QFraO-W7IxBi2du7h81w8UoqKAAseBgOcOdd6zyafRFb47aC9WUU2ILU9NUUN3oIaTvPCqYymEbMfDHMh2BxOWq3BZeZoyeRKMGbaIqWT7Ub5c5FGw8AC2aDAtDAN14DRRjwQrV26x6UWkCXiQwhVwJFym8NmiJp9yWkieq06AKiajZHXBOShR3KZBhAAVRtS3MiHss+uo8GEPqpZPogioEtIsWF2kk-v8Emo2K0zeCISIeBA4HVRvNadrRUClNI2P8WYgALSKPBsaPRs1dB2KBI7PEKqxgH3C1F+NQxLFBdFhDJpIsqFN5cZ0DOLLM5wPByWIJODOWQvIwqt0nXRWtsTIJU2h7HxFvc8iEjt+3y15L1wcpQKc+VtpX0AAU1B4yEwAEoJyLfIn2sbGf93opwli1Mbgr2Qva1A61KaTCYgA */
  id: 'player',
  initial: State.Idle,
  states: {
    [State.Idle]: {
      on: {
        [GameEvent.SelectPlayer]: State.Select,
        [GameEvent.Cancel]: State.Idle
      }
    },
    [State.Select]: {
      on: {
        [GameEvent.MovePlayer]: State.Move,
        [GameEvent.Cancel]: State.Idle
      }
    },
    [State.Move]: {
      on: {
        [GameEvent.ShotPlayer]: State.Shot,
        [GameEvent.Cancel]: State.Idle
      }
    },
    [State.Shot]: {
      on: {
        [GameEvent.Complete]: State.Idle,
        [GameEvent.Cancel]: State.Idle
      }
    }
  }
});

// 状態マシンのアクターを作成
const gameService = createActor(gameStateMachine);

let test;
gameService.subscribe({
  next: (state) => {
    // スナップショットの処理
    console.log(`State changed to: ${state.value}`);
    test = state.value;
  },
  error: (err: unknown) => {
    console.error(err);
  },
});

gameService.start();

// 状態遷移の例
gameService.send({ type: GameEvent.SelectPlayer });  // 状態が 'Select' に遷移
gameService.send({ type: GameEvent.MovePlayer });    // 状態が 'Move' に遷移
gameService.send({ type: GameEvent.ShotPlayer });    // 状態が 'Shot' に遷移
gameService.send({ type: GameEvent.Complete });      // 状態が 'Idle' に遷移

export { gameStateMachine, gameService };