import type { LineSegment } from './LineSegment';

/**
 * Obstacle data structure (now stores LineSegments directly)
 */
export interface ObstacleData {
  id: number;
  segments: LineSegment[];
}


