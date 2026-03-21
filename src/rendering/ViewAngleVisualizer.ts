import * as THREE from "three";
import { PlayerConfig, ViewAngleVisualizationConfig } from '../config/GameConfig';
import { Node } from '../model/node';

/**
 * ViewAngleVisualizer class
 * Handles visualization of player's view angle with edge lines
 */
export class ViewAngleVisualizer {
  private scene: THREE.Scene;
  private viewAngleLines: THREE.Line[];
  private isVisible: boolean;

  /**
   * Creates a new ViewAngleVisualizer
   * @param scene - The Three.js scene to add visualizations to
   */
  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.viewAngleLines = [];
    this.isVisible = ViewAngleVisualizationConfig.ShowViewAngleEdges;
  }

  /**
   * Toggles the visibility of view angle edges
   * @returns The new visibility state
   */
  public toggle(): boolean {
    this.isVisible = !this.isVisible;
    return this.isVisible;
  }

  /**
   * Draws view angle edges from player position
   * @param playerPosition - The player's current position node
   * @param playerAngle - The angle the player is facing (in degrees)
   */
  public draw(playerPosition: Node, playerAngle: number): void {
    // Remove existing view angle lines
    this.clear();

    if (!this.isVisible) {
      return;
    }

    const angleRad = playerAngle * Math.PI / 180;
    const viewAngleRad = PlayerConfig.ViewAngle * Math.PI / 180;
    const distance = PlayerConfig.MaxViewDistance;

    // Create material for view angle lines
    const material = new THREE.LineBasicMaterial({
      color: ViewAngleVisualizationConfig.EdgeColor,
      transparent: true,
      opacity: ViewAngleVisualizationConfig.EdgeOpacity,
      linewidth: ViewAngleVisualizationConfig.EdgeLineWidth,
    });

    // Draw left edge of view angle
    this.drawEdgeLine(
      playerPosition,
      angleRad - viewAngleRad,
      distance,
      material
    );

    // Draw right edge of view angle
    this.drawEdgeLine(
      playerPosition,
      angleRad + viewAngleRad,
      distance,
      material
    );

    // Draw center line (direction player is facing) with slightly higher opacity
    const centerMaterial = new THREE.LineBasicMaterial({
      color: ViewAngleVisualizationConfig.EdgeColor,
      transparent: true,
      opacity: ViewAngleVisualizationConfig.EdgeOpacity * 1.2,
      linewidth: ViewAngleVisualizationConfig.EdgeLineWidth,
    });
    this.drawEdgeLine(
      playerPosition,
      angleRad,
      distance,
      centerMaterial
    );
  }

  /**
   * Draws a single edge line
   * @param origin - The origin point (player position)
   * @param angle - The angle of the line (in radians)
   * @param distance - The length of the line
   * @param material - The material to use for the line
   */
  private drawEdgeLine(
    origin: Node,
    angle: number,
    distance: number,
    material: THREE.LineBasicMaterial
  ): void {
    const endPoint = {
      x: origin.x + distance * Math.cos(angle),
      y: origin.y + distance * Math.sin(angle),
    };

    const points = [
      new THREE.Vector3(origin.x, origin.y, 0),
      new THREE.Vector3(endPoint.x, endPoint.y, 0),
    ];

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);

    this.scene.add(line);
    this.viewAngleLines.push(line);
  }

  /**
   * Clears all view angle edge lines from the scene
   */
  public clear(): void {
    for (const line of this.viewAngleLines) {
      this.scene.remove(line);
      line.geometry.dispose();

      if (Array.isArray(line.material)) {
        line.material.forEach(mat => mat.dispose());
      } else {
        line.material.dispose();
      }
    }
    this.viewAngleLines = [];
  }

  /**
   * Disposes of all resources used by the visualizer
   */
  public dispose(): void {
    this.clear();
  }
}
