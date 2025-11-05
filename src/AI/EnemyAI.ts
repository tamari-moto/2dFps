import { Model } from '../MODEL/model';
import { Enemy } from '../MODEL/Enemy';
import { Player } from '../MODEL/Player';
import { node } from '../MODEL/node';
import { PlayerConfig } from '../config/GameConfig';

/**
 * AI behavior types for enemies
 */
export enum AIBehavior {
  AGGRESSIVE = 'aggressive',   // Chase player and shoot on sight
  DEFENSIVE = 'defensive',     // Keep distance, shoot when safe
  PATROL = 'patrol',           // Move randomly, shoot if player seen
  SMART = 'smart'              // Use cover, strategic positioning
}

/**
 * Result of enemy AI decision making
 */
export interface AIDecision {
  moveToNode: node | null;
  shootAtNode: node | null;
  targetAngle: number;
}

/**
 * Advanced AI system for enemy behavior
 * Implements pathfinding, decision making, and combat logic
 */
export class EnemyAI {
  private model: Model;
  private behavior: AIBehavior;
  private pathCache: Map<string, { path: node[], timestamp: number }> = new Map();
  private readonly CACHE_DURATION = 3000; // Cache paths for 3 seconds
  private readonly MAX_PATH_LENGTH = 15; // Limit pathfinding search depth

  constructor(model: Model, behavior: AIBehavior = AIBehavior.SMART) {
    this.model = model;
    this.behavior = behavior;
  }

  /**
   * Makes a decision for an enemy's turn
   */
  makeDecision(enemy: Enemy, players: Map<string, Player>): AIDecision {
    switch (this.behavior) {
      case AIBehavior.AGGRESSIVE:
        return this.aggressiveBehavior(enemy, players);
      case AIBehavior.DEFENSIVE:
        return this.defensiveBehavior(enemy, players);
      case AIBehavior.PATROL:
        return this.patrolBehavior(enemy, players);
      case AIBehavior.SMART:
        return this.smartBehavior(enemy, players);
      default:
        return this.randomBehavior(enemy);
    }
  }

  /**
   * Aggressive behavior: Chase closest player and shoot on sight
   */
  private aggressiveBehavior(enemy: Enemy, players: Map<string, Player>): AIDecision {
    const closestPlayer = this.findClosestPlayer(enemy, players);
    if (!closestPlayer) {
      return this.randomBehavior(enemy);
    }

    const distance = this.model.getNodeDistance(enemy.node, closestPlayer.node);

    // Check if player is visible from current position
    const visiblePlayers = this.getVisiblePlayers(enemy, players);

    if (visiblePlayers.length > 0) {
      // Player visible - shoot at them
      const target = visiblePlayers[0];
      return {
        moveToNode: enemy.node, // Stay in place
        shootAtNode: target.node,
        targetAngle: this.model.getAngleBetweenNodes(enemy.node, target.node)
      };
    }

    // If too far, use simple direction instead of pathfinding
    if (distance > PlayerConfig.MaxViewDistance * 1.5) {
      const adjacentNodes = this.getAdjacentNodes(enemy.node);
      const moveToNode = this.findNodeClosestToTarget(adjacentNodes, closestPlayer.node) || enemy.node;
      return {
        moveToNode,
        shootAtNode: null,
        targetAngle: this.model.getAngleBetweenNodes(enemy.node, closestPlayer.node)
      };
    }

    // Move towards closest player using cached pathfinding
    const path = this.findPathCached(enemy.node, closestPlayer.node);
    const moveToNode = path.length > 1 ? path[1] : enemy.node;
    const targetAngle = this.model.getAngleBetweenNodes(enemy.node, closestPlayer.node);

    return {
      moveToNode,
      shootAtNode: null,
      targetAngle
    };
  }

  /**
   * Defensive behavior: Keep distance, shoot when safe
   */
  private defensiveBehavior(enemy: Enemy, players: Map<string, Player>): AIDecision {
    const closestPlayer = this.findClosestPlayer(enemy, players);
    if (!closestPlayer) {
      return this.randomBehavior(enemy);
    }

    const distance = this.model.getNodeDistance(enemy.node, closestPlayer.node);
    const safeDistance = PlayerConfig.MaxViewDistance * 0.7;

    const visiblePlayers = this.getVisiblePlayers(enemy, players);

    if (visiblePlayers.length > 0 && distance > safeDistance) {
      // Safe distance and player visible - shoot
      const target = visiblePlayers[0];
      return {
        moveToNode: enemy.node,
        shootAtNode: target.node,
        targetAngle: this.model.getAngleBetweenNodes(enemy.node, target.node)
      };
    }

    if (distance < safeDistance) {
      // Too close - retreat (simple, no pathfinding needed)
      const retreatNode = this.findRetreatNode(enemy.node, closestPlayer.node);
      return {
        moveToNode: retreatNode,
        shootAtNode: null,
        targetAngle: this.model.getAngleBetweenNodes(enemy.node, closestPlayer.node)
      };
    }

    // Move to maintain safe distance (simple approach for distant targets)
    if (distance > PlayerConfig.MaxViewDistance) {
      const adjacentNodes = this.getAdjacentNodes(enemy.node);
      const moveToNode = this.findNodeClosestToTarget(adjacentNodes, closestPlayer.node) || enemy.node;
      return {
        moveToNode,
        shootAtNode: null,
        targetAngle: this.model.getAngleBetweenNodes(enemy.node, closestPlayer.node)
      };
    }

    return {
      moveToNode: enemy.node,
      shootAtNode: null,
      targetAngle: this.model.getAngleBetweenNodes(enemy.node, closestPlayer.node)
    };
  }

  /**
   * Patrol behavior: Move randomly, shoot if player seen
   */
  private patrolBehavior(enemy: Enemy, players: Map<string, Player>): AIDecision {
    const visiblePlayers = this.getVisiblePlayers(enemy, players);

    if (visiblePlayers.length > 0) {
      // Player spotted - shoot
      const target = visiblePlayers[0];
      return {
        moveToNode: enemy.node,
        shootAtNode: target.node,
        targetAngle: this.model.getAngleBetweenNodes(enemy.node, target.node)
      };
    }

    // Random patrol movement
    const adjacentNodes = this.getAdjacentNodes(enemy.node);
    const moveToNode = adjacentNodes[Math.floor(Math.random() * adjacentNodes.length)] || enemy.node;

    return {
      moveToNode,
      shootAtNode: null,
      targetAngle: enemy.angle // Keep current angle
    };
  }

  /**
   * Smart behavior: Use cover, strategic positioning
   */
  private smartBehavior(enemy: Enemy, players: Map<string, Player>): AIDecision {
    const closestPlayer = this.findClosestPlayer(enemy, players);
    if (!closestPlayer) {
      return this.randomBehavior(enemy);
    }

    const visiblePlayers = this.getVisiblePlayers(enemy, players);
    const distance = this.model.getNodeDistance(enemy.node, closestPlayer.node);

    // Check if enemy can see player
    if (visiblePlayers.length > 0) {
      const target = visiblePlayers[0];

      // Check if player can see enemy back
      const playerCanSeeEnemy = this.canPlayerSeeEnemy(target, enemy);

      if (playerCanSeeEnemy && distance < PlayerConfig.MaxViewDistance * 0.5) {
        // Dangerous position - move to cover
        const coverNode = this.findCoverNode(enemy.node, closestPlayer.node);
        return {
          moveToNode: coverNode,
          shootAtNode: null,
          targetAngle: this.model.getAngleBetweenNodes(enemy.node, closestPlayer.node)
        };
      }

      // Good position - shoot
      return {
        moveToNode: enemy.node,
        shootAtNode: target.node,
        targetAngle: this.model.getAngleBetweenNodes(enemy.node, target.node)
      };
    }

    // Player not visible - use simple approach if far
    if (distance > PlayerConfig.MaxViewDistance) {
      const adjacentNodes = this.getAdjacentNodes(enemy.node);
      const moveToNode = this.findNodeClosestToTarget(adjacentNodes, closestPlayer.node) || enemy.node;
      return {
        moveToNode,
        shootAtNode: null,
        targetAngle: this.model.getAngleBetweenNodes(enemy.node, closestPlayer.node)
      };
    }

    // Player not visible but close - use cached pathfinding
    const path = this.findPathCached(enemy.node, closestPlayer.node);
    if (path.length > 1) {
      return {
        moveToNode: path[1],
        shootAtNode: null,
        targetAngle: this.model.getAngleBetweenNodes(enemy.node, closestPlayer.node)
      };
    }

    return this.randomBehavior(enemy);
  }

  /**
   * Random behavior: Fallback
   */
  private randomBehavior(enemy: Enemy): AIDecision {
    const adjacentNodes = this.getAdjacentNodes(enemy.node);
    const moveToNode = adjacentNodes[Math.floor(Math.random() * adjacentNodes.length)] || enemy.node;

    return {
      moveToNode,
      shootAtNode: null,
      targetAngle: enemy.angle
    };
  }

  /**
   * A* pathfinding algorithm with depth limit
   */
  private findPath(start: node, goal: node): node[] {
    const openSet = new Set<number>([start.id]);
    const cameFrom = new Map<number, number>();
    const gScore = new Map<number, number>();
    const fScore = new Map<number, number>();

    gScore.set(start.id, 0);
    fScore.set(start.id, this.heuristic(start, goal));

    let iterations = 0;
    const maxIterations = this.MAX_PATH_LENGTH * 10; // Prevent infinite loops

    while (openSet.size > 0 && iterations < maxIterations) {
      iterations++;

      // Find node with lowest fScore
      let current = -1;
      let lowestF = Infinity;
      for (const nodeId of openSet) {
        const f = fScore.get(nodeId) || Infinity;
        if (f < lowestF) {
          lowestF = f;
          current = nodeId;
        }
      }

      if (current === goal.id) {
        return this.reconstructPath(cameFrom, current);
      }

      openSet.delete(current);

      // Stop if path is too long
      const currentGScore = gScore.get(current) || 0;
      if (currentGScore >= this.MAX_PATH_LENGTH) {
        continue;
      }

      // Check neighbors
      const neighbors = this.model.Edges.List[current] || [];
      for (const neighborId of neighbors) {
        const tentativeGScore = currentGScore + 1;

        if (tentativeGScore < (gScore.get(neighborId) || Infinity)) {
          cameFrom.set(neighborId, current);
          gScore.set(neighborId, tentativeGScore);
          fScore.set(neighborId, tentativeGScore + this.heuristic(this.model.nodeList[neighborId], goal));
          openSet.add(neighborId);
        }
      }
    }

    // No path found
    return [start];
  }

  /**
   * Cached pathfinding - reuses recent paths
   */
  private findPathCached(start: node, goal: node): node[] {
    const cacheKey = `${start.id}-${goal.id}`;
    const now = Date.now();

    // Check cache
    const cached = this.pathCache.get(cacheKey);
    if (cached && (now - cached.timestamp) < this.CACHE_DURATION) {
      return cached.path;
    }

    // Calculate new path
    const path = this.findPath(start, goal);

    // Store in cache
    this.pathCache.set(cacheKey, { path, timestamp: now });

    // Clean old cache entries (every 10 calls)
    if (this.pathCache.size > 20) {
      for (const [key, value] of this.pathCache.entries()) {
        if (now - value.timestamp > this.CACHE_DURATION) {
          this.pathCache.delete(key);
        }
      }
    }

    return path;
  }

  /**
   * Finds the node in a list that is closest to a target
   */
  private findNodeClosestToTarget(nodes: node[], target: node): node | null {
    if (nodes.length === 0) return null;

    let closest = nodes[0];
    let minDistance = this.model.getNodeDistance(closest, target);

    for (let i = 1; i < nodes.length; i++) {
      const distance = this.model.getNodeDistance(nodes[i], target);
      if (distance < minDistance) {
        minDistance = distance;
        closest = nodes[i];
      }
    }

    return closest;
  }

  /**
   * Heuristic for A* (Manhattan distance)
   */
  private heuristic(a: node, b: node): number {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
  }

  /**
   * Reconstructs path from A* search
   */
  private reconstructPath(cameFrom: Map<number, number>, current: number): node[] {
    const path = [this.model.nodeList[current]];
    while (cameFrom.has(current)) {
      current = cameFrom.get(current)!;
      path.unshift(this.model.nodeList[current]);
    }
    return path;
  }

  /**
   * Finds closest player to enemy
   */
  private findClosestPlayer(enemy: Enemy, players: Map<string, Player>): Player | null {
    let closest: Player | null = null;
    let minDistance = Infinity;

    for (const player of players.values()) {
      const distance = this.model.getNodeDistance(enemy.node, player.node);
      if (distance < minDistance) {
        minDistance = distance;
        closest = player;
      }
    }

    return closest;
  }

  /**
   * Gets all players visible from enemy's position (optimized)
   */
  private getVisiblePlayers(enemy: Enemy, players: Map<string, Player>): Player[] {
    const visiblePlayers: Player[] = [];

    for (const player of players.values()) {
      // Quick distance check first
      const distance = this.model.getNodeDistance(enemy.node, player.node);
      if (distance > PlayerConfig.MaxViewDistance) continue;

      // Check angle
      const targetAngle = this.model.getAngleBetweenNodes(enemy.node, player.node);
      const angleDiff = Math.abs(this.normalizeAngle(targetAngle - enemy.angle));
      if (angleDiff > PlayerConfig.ViewAngle) continue;

      // Line of sight check (most expensive, do last)
      if (this.model.hasLineOfSight(enemy.node, player.node)) {
        visiblePlayers.push(player);
      }
    }

    return visiblePlayers;
  }

  /**
   * Normalizes angle to [-180, 180] range
   */
  private normalizeAngle(angle: number): number {
    while (angle > 180) angle -= 360;
    while (angle < -180) angle += 360;
    return angle;
  }

  /**
   * Check if player can see enemy (optimized)
   */
  private canPlayerSeeEnemy(player: Player, enemy: Enemy): boolean {
    // Quick distance check
    const distance = this.model.getNodeDistance(player.node, enemy.node);
    if (distance > PlayerConfig.MaxViewDistance) return false;

    // Check angle
    const targetAngle = this.model.getAngleBetweenNodes(player.node, enemy.node);
    const angleDiff = Math.abs(this.normalizeAngle(targetAngle - player.angle));
    if (angleDiff > PlayerConfig.ViewAngle) return false;

    // Line of sight check
    return this.model.hasLineOfSight(player.node, enemy.node);
  }

  /**
   * Gets adjacent connected nodes
   */
  private getAdjacentNodes(fromNode: node): node[] {
    const adjacentIds = this.model.Edges.List[fromNode.id] || [];
    return adjacentIds.map(id => this.model.nodeList[id]).filter(n => n !== undefined);
  }

  /**
   * Finds a node to retreat to (away from player)
   */
  private findRetreatNode(currentNode: node, playerNode: node): node {
    const adjacentNodes = this.getAdjacentNodes(currentNode);

    if (adjacentNodes.length === 0) return currentNode;

    // Find node that maximizes distance from player
    let bestNode = currentNode;
    let maxDistance = this.model.getNodeDistance(currentNode, playerNode);

    for (const node of adjacentNodes) {
      const distance = this.model.getNodeDistance(node, playerNode);
      if (distance > maxDistance) {
        maxDistance = distance;
        bestNode = node;
      }
    }

    return bestNode;
  }

  /**
   * Finds a node that provides cover from player's view (optimized)
   */
  private findCoverNode(currentNode: node, playerNode: node): node {
    const adjacentNodes = this.getAdjacentNodes(currentNode);

    if (adjacentNodes.length === 0) return currentNode;

    // Find nodes not visible from player's position (simplified check)
    for (const node of adjacentNodes) {
      // Check if line of sight is blocked
      if (!this.model.hasLineOfSight(playerNode, node)) {
        return node; // Found cover
      }
    }

    // No cover found - retreat
    return this.findRetreatNode(currentNode, playerNode);
  }

  /**
   * Sets AI behavior type
   */
  setBehavior(behavior: AIBehavior): void {
    this.behavior = behavior;
  }

  /**
   * Gets current AI behavior type
   */
  getBehavior(): AIBehavior {
    return this.behavior;
  }
}
