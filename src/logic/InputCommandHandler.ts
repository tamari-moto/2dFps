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
  getReachableNodes(): Set<number>;
  setReachableNodes(nodes: Set<number>): void;
  getCurrentNextNodeId(): number | undefined;
  setCurrentNextNodeId(id: number | undefined): void;
  getCurrentShotNodeId(): number | undefined;
  setCurrentShotNodeId(id: number | undefined): void;
  isInputLocked(): boolean;
  executeTurn(sm: StateMachine): void;
}

export class InputCommandHandler {
  private boundHandleNodeClick: (data: { nodeId: number; position: { x: number; y: number } }) => void;
  private boundHandleCanvasEmptyClick: () => void;
  private boundHandlePlayerSwitch: (data: { currentPlayerId: string }) => void;
  constructor(private ctx: InputCommandContext) {
    this.boundHandleNodeClick = this.handleNodeClick.bind(this);
    this.boundHandleCanvasEmptyClick = this.handleCanvasEmptyClick.bind(this);
    this.boundHandlePlayerSwitch = this.handlePlayerSwitch.bind(this);
  }

  attach(): void {
    this.ctx.eventBus.on(GameEventType.NODE_CLICKED, this.boundHandleNodeClick);
    this.ctx.eventBus.on(GameEventType.CANVAS_CLICKED_EMPTY, this.boundHandleCanvasEmptyClick);
    this.ctx.eventBus.on(GameEventType.PLAYER_SWITCHED, this.boundHandlePlayerSwitch);
  }

  detach(): void {
    this.ctx.eventBus.off(GameEventType.NODE_CLICKED, this.boundHandleNodeClick);
    this.ctx.eventBus.off(GameEventType.CANVAS_CLICKED_EMPTY, this.boundHandleCanvasEmptyClick);
    this.ctx.eventBus.off(GameEventType.PLAYER_SWITCHED, this.boundHandlePlayerSwitch);
  }

  private handleNodeClick(data: { nodeId: number; position: { x: number; y: number } }): void {
    if (this.ctx.isInputLocked()) return;

    const activePlayer = this.ctx.model.getPlayer(this.ctx.getActivePlayerId());
    if (!activePlayer) return;

    const sm = this.ctx.getStateMachine(this.ctx.getActivePlayerId());
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
      this.ctx.setReachableNodes(reachableNodes);
      this.ctx.eventBus.emit(GameEventType.VIS_SET_REACHABLE_NODES, {
        nodeIds: Array.from(reachableNodes),
      });
    }
  }

  private handleSelectStateClick(activePlayer: Player, clickedNode: Node, sm: StateMachine): void {
    const canMove = activePlayer.node.id === clickedNode.id ||
                    this.ctx.getReachableNodes().has(clickedNode.id);
    if (canMove) {
      sm.transition(GameEvent.MovePlayer);
      this.ctx.setCurrentNextNodeId(clickedNode.id);
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
    }
  }

  private handleMoveStateClick(activePlayer: Player, clickedNode: Node, sm: StateMachine): void {
    this.tryShotTarget(activePlayer, clickedNode, sm);
  }

  private handleShotStateClick(activePlayer: Player, clickedNode: Node, sm: StateMachine): void {
    if (this.ctx.getCurrentShotNodeId() === clickedNode.id) {
      this.ctx.executeTurn(sm);
    } else {
      this.tryShotTarget(activePlayer, clickedNode, sm);
    }
  }

  private tryShotTarget(activePlayer: Player, clickedNode: Node, sm: StateMachine): boolean {
    const nextNodeId = this.ctx.getCurrentNextNodeId();
    if (nextNodeId === undefined) return false;

    const nextNode = this.ctx.model.nodeList[nextNodeId];
    const isVisible = this.ctx.model
      .getVisibleNodesAtAngle(nextNode, activePlayer.angle, PlayerConfig.MaxViewDistance)
      .some(n => n.id === clickedNode.id);

    if (isVisible) {
      sm.transition(GameEvent.ShotPlayer);
      this.ctx.setCurrentShotNodeId(clickedNode.id);
      this.ctx.eventBus.emit(GameEventType.VIS_SET_SHOT_MESH, { nodeId: clickedNode.id });
      return true;
    }
    return false;
  }

  private handleCanvasEmptyClick(): void {
    if (this.ctx.isInputLocked()) return;

    const sm = this.ctx.getStateMachine(this.ctx.getActivePlayerId());
    sm.transition(GameEvent.Cancel);
    this.ctx.setCurrentShotNodeId(undefined);
    this.ctx.setCurrentNextNodeId(undefined);
    this.ctx.eventBus.emit(GameEventType.VIS_CLEAR_SHOT_MESH);
    this.ctx.eventBus.emit(GameEventType.VIS_CLEAR_NEXT_MESH);
    this.ctx.eventBus.emit(GameEventType.VIS_CLEAR_MOVE_PATH);

    const activePlayer = this.ctx.model.getPlayer(this.ctx.getActivePlayerId());
    if (activePlayer) {
      const reachableNodes = this.ctx.model.getReachableNodes(activePlayer.node.id, PlayerConfig.MoveRange);
      this.ctx.setReachableNodes(reachableNodes);
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
