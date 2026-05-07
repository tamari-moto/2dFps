import { Model } from '../model/model';
import { Player } from '../model/Player';
import { Node } from '../model/node';
import { StateMachine, State, GameEvent } from './StateMachine';
import { GameEventBus, GameEventType } from '../core/GameEventBus';
import { PlayerConfig } from '../config/GameConfig';

export interface InputCommandContext {
  model: Model;
  eventBus: GameEventBus;
  getActivePlayerId(): string;
  setActivePlayerId(id: string): void;
  getStateMachine(playerId: string): StateMachine;
  getReachableNodesForPlayer(playerId: string): Set<number>;
  setReachableNodesForPlayer(playerId: string, nodes: Set<number>): void;
  getPendingNextNodeIdForPlayer(playerId: string): number | undefined;
  setPendingNextNodeIdForPlayer(playerId: string, id: number | undefined): void;
  getPendingShotNodeIdForPlayer(playerId: string): number | undefined;
  setPendingShotNodeIdForPlayer(playerId: string, id: number | undefined): void;
  isInputLocked(): boolean;
  confirmPlayerAction(sm: StateMachine): void;
}

export class InputCommandHandler {
  private boundHandleNodeClick: (data: { nodeId: number; position: { x: number; y: number } }) => void;
  private boundHandleCanvasEmptyClick: () => void;
  private boundHandlePlayerSwitch: (data: { currentPlayerId: string }) => void;
  private boundHandleKeyPressed: (data: { key: string }) => void;

  constructor(private ctx: InputCommandContext) {
    this.boundHandleNodeClick = this.handleNodeClick.bind(this);
    this.boundHandleCanvasEmptyClick = this.handleCanvasEmptyClick.bind(this);
    this.boundHandlePlayerSwitch = this.handlePlayerSwitch.bind(this);
    this.boundHandleKeyPressed = this.handleKeyPressed.bind(this);
  }

  attach(): void {
    this.ctx.eventBus.on(GameEventType.NODE_CLICKED, this.boundHandleNodeClick);
    this.ctx.eventBus.on(GameEventType.CANVAS_CLICKED_EMPTY, this.boundHandleCanvasEmptyClick);
    this.ctx.eventBus.on(GameEventType.PLAYER_SWITCHED, this.boundHandlePlayerSwitch);
    this.ctx.eventBus.on(GameEventType.KEY_PRESSED, this.boundHandleKeyPressed);
  }

  detach(): void {
    this.ctx.eventBus.off(GameEventType.NODE_CLICKED, this.boundHandleNodeClick);
    this.ctx.eventBus.off(GameEventType.CANVAS_CLICKED_EMPTY, this.boundHandleCanvasEmptyClick);
    this.ctx.eventBus.off(GameEventType.PLAYER_SWITCHED, this.boundHandlePlayerSwitch);
    this.ctx.eventBus.off(GameEventType.KEY_PRESSED, this.boundHandleKeyPressed);
  }

  private handleNodeClick(data: { nodeId: number; position: { x: number; y: number } }): void {
    if (this.ctx.isInputLocked()) return;

    const activePlayerId = this.ctx.getActivePlayerId();
    const activePlayer = this.ctx.model.getPlayer(activePlayerId);
    if (!activePlayer) return;

    const sm = this.ctx.getStateMachine(activePlayerId);
    const clickedNode = this.ctx.model.nodeList[data.nodeId];

    if (!clickedNode) return;

    const currentState = sm.getState();

    if (currentState === State.Idle) {
      this.handleIdleStateClick(activePlayer, clickedNode, sm);
    } else if (currentState === State.Select) {
      this.handleSelectStateClick(activePlayer, clickedNode, sm);
    } else if (currentState === State.Move) {
      this.handleMoveStateClick(activePlayer, clickedNode, sm);
    } else if (currentState === State.Shot) {
      this.handleShotStateClick(activePlayer, clickedNode, sm);
    }

    this.ctx.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);
  }

  private handleIdleStateClick(activePlayer: Player, clickedNode: Node, sm: StateMachine): void {
    if (activePlayer.node.id === clickedNode.id) {
      sm.transition(GameEvent.SelectPlayer);
      this.ctx.eventBus.emit(GameEventType.VIS_SET_SELECT_MESH, { nodeId: clickedNode.id });

      const reachableNodes = this.ctx.model.getReachableNodes(activePlayer.node.id, PlayerConfig.MoveRange);
      this.ctx.setReachableNodesForPlayer(activePlayer.id, reachableNodes);
      this.ctx.eventBus.emit(GameEventType.VIS_SET_REACHABLE_NODES, {
        nodeIds: Array.from(reachableNodes),
      });
    }
  }

  private handleSelectStateClick(activePlayer: Player, clickedNode: Node, sm: StateMachine): void {
    const reachable = this.ctx.getReachableNodesForPlayer(activePlayer.id);
    const canMove = activePlayer.node.id === clickedNode.id || reachable.has(clickedNode.id);
    if (canMove) {
      sm.transition(GameEvent.MovePlayer);
      this.ctx.setPendingNextNodeIdForPlayer(activePlayer.id, clickedNode.id);
      this.ctx.eventBus.emit(GameEventType.VIS_SET_NEXT_MESH, { nodeId: clickedNode.id });

      const path = this.ctx.model.getPathToNode(
        activePlayer.node.id,
        clickedNode.id,
        Number.MAX_SAFE_INTEGER,
      );
      if (path && path.length > 2) {
        this.ctx.eventBus.emit(GameEventType.VIS_SET_MOVE_PATH, { nodeIds: path.slice(1, -1) });
      } else {
        this.ctx.eventBus.emit(GameEventType.VIS_CLEAR_MOVE_PATH);
      }

      this.notifyBombActionAvailable(activePlayer, clickedNode.id);
    }
  }

  private handleMoveStateClick(activePlayer: Player, clickedNode: Node, sm: StateMachine): void {
    this.tryShotTarget(activePlayer, clickedNode, sm);
  }

  private handleShotStateClick(activePlayer: Player, clickedNode: Node, sm: StateMachine): void {
    if (this.ctx.getPendingShotNodeIdForPlayer(activePlayer.id) === clickedNode.id) {
      this.ctx.confirmPlayerAction(sm);
    } else {
      this.tryShotTarget(activePlayer, clickedNode, sm);
    }
  }

  private tryShotTarget(activePlayer: Player, clickedNode: Node, sm: StateMachine): boolean {
    const nextNodeId = this.ctx.getPendingNextNodeIdForPlayer(activePlayer.id);
    if (nextNodeId === undefined) return false;

    const teamVisible = this.ctx.model.getTeamVisibleNodes(activePlayer.id);
    const isVisible = teamVisible.has(clickedNode.id);

    if (isVisible) {
      sm.transition(GameEvent.ShotPlayer);
      this.ctx.setPendingShotNodeIdForPlayer(activePlayer.id, clickedNode.id);
      this.ctx.eventBus.emit(GameEventType.VIS_SET_SHOT_MESH, { nodeId: clickedNode.id });
      return true;
    }
    return false;
  }

  /**
   * Emits BOMB_ACTION_SELECTED if the active player can plant or defuse at the destination node.
   */
  private notifyBombActionAvailable(player: Player, destNodeId: number): void {
    const model = this.ctx.model;

    if (player.hasBomb && model.isBombSite(destNodeId) && model.bombState.status === 'idle') {
      this.ctx.eventBus.emit(GameEventType.BOMB_ACTION_SELECTED, {
        action: 'plant',
        nodeId: destNodeId,
        playerId: player.id,
      });
      return;
    }

    if (
      player.team === 1 &&
      model.isAtPlantedBomb(destNodeId) &&
      model.bombState.status === 'planted'
    ) {
      this.ctx.eventBus.emit(GameEventType.BOMB_ACTION_SELECTED, {
        action: 'defuse',
        nodeId: destNodeId,
        playerId: player.id,
      });
    }
  }

  /**
   * Triggered by 'f' key: executes a bomb plant or defuse action for the active player.
   */
  private tryBombAction(): void {
    if (this.ctx.isInputLocked()) return;

    const activePlayerId = this.ctx.getActivePlayerId();
    const activePlayer = this.ctx.model.getPlayer(activePlayerId);
    if (!activePlayer) return;

    const sm = this.ctx.getStateMachine(activePlayerId);
    const currentState = sm.getState();
    if (currentState !== State.Move) return;

    const nextNodeId = this.ctx.getPendingNextNodeIdForPlayer(activePlayerId);
    if (nextNodeId === undefined) return;

    const model = this.ctx.model;

    if (
      activePlayer.hasBomb &&
      model.isBombSite(nextNodeId) &&
      model.bombState.status === 'idle'
    ) {
      sm.transition(GameEvent.PlantBomb);
      this.ctx.confirmPlayerAction(sm);
      return;
    }

    if (
      activePlayer.team === 1 &&
      model.isAtPlantedBomb(nextNodeId) &&
      model.bombState.status === 'planted'
    ) {
      sm.transition(GameEvent.DefuseBomb);
      this.ctx.confirmPlayerAction(sm);
    }
  }

  private handleKeyPressed(data: { key: string }): void {
    if (this.ctx.isInputLocked()) return;
    if (data.key === 'f' || data.key === 'F') {
      this.tryBombAction();
    }
  }

  private handleCanvasEmptyClick(): void {
    if (this.ctx.isInputLocked()) return;

    const activePlayerId = this.ctx.getActivePlayerId();
    const sm = this.ctx.getStateMachine(activePlayerId);
    sm.transition(GameEvent.Cancel);
    this.ctx.setPendingShotNodeIdForPlayer(activePlayerId, undefined);
    this.ctx.setPendingNextNodeIdForPlayer(activePlayerId, undefined);
    this.ctx.eventBus.emit(GameEventType.VIS_CLEAR_SHOT_MESH);
    this.ctx.eventBus.emit(GameEventType.VIS_CLEAR_NEXT_MESH);
    this.ctx.eventBus.emit(GameEventType.VIS_CLEAR_MOVE_PATH);

    const activePlayer = this.ctx.model.getPlayer(activePlayerId);
    if (activePlayer) {
      const reachableNodes = this.ctx.model.getReachableNodes(activePlayer.node.id, PlayerConfig.MoveRange);
      this.ctx.setReachableNodesForPlayer(activePlayerId, reachableNodes);
      this.ctx.eventBus.emit(GameEventType.VIS_SET_REACHABLE_NODES, {
        nodeIds: Array.from(reachableNodes),
      });
    }

    sm.transition(GameEvent.SelectPlayer);
    this.ctx.eventBus.emit(GameEventType.VIS_UPDATE_VIEW);
  }

  private handlePlayerSwitch(data: { currentPlayerId: string }): void {
    if (this.ctx.isInputLocked()) return;

    const targetPlayer = this.ctx.model.getPlayer(data.currentPlayerId);
    if (targetPlayer?.isNPC) return;

    this.ctx.setActivePlayerId(data.currentPlayerId);
    this.ctx.eventBus.emit(GameEventType.VIS_SET_ACTIVE_PLAYER, { playerId: data.currentPlayerId });
    console.log(`Switched to ${data.currentPlayerId}`);
  }
}
