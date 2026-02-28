import type { LineSegment } from './LineSegment';

/**
 * Obstacle data structure (now stores LineSegments directly)
 */
export interface ObstacleData {
  id: number;
  segments: LineSegment[];
}

/**
 * Obstacle segment structure for JSON export
 */
interface ObstacleSegment {
  start: { x: number; y: number };
  end: { x: number; y: number };
}

/**
 * Complete obstacle data for JSON export
 */
interface ObstacleExportData {
  id: number;
  segments: ObstacleSegment[];
}

/**
 * JSON export format
 */
interface ObstacleJSON {
  obstacles: ObstacleExportData[];
}

/**
 * Exports obstacles to JSON format
 * @param obstacles - Array of obstacle data with LineSegments
 * @returns JSON string containing obstacle data
 */
export function exportObstaclesToJSON(obstacles: ObstacleData[]): string {
  const obstacleData: ObstacleJSON = {
    obstacles: obstacles.map(obs => ({
      id: obs.id,
      segments: obs.segments.map(seg => ({
        start: { x: seg.start.x, y: seg.start.y },
        end: { x: seg.end.x, y: seg.end.y }
      }))
    }))
  };
  return JSON.stringify(obstacleData, null, 2);
}

/**
 * Downloads obstacles as a JSON file
 * @param obstacles - Array of obstacle data
 * @param filename - Name of the file to download (default: 'obstacles.json')
 */
export function downloadObstaclesJSON(obstacles: ObstacleData[], filename: string = 'obstacles.json'): void {
  const jsonData = exportObstaclesToJSON(obstacles);
  const blob = new Blob([jsonData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
