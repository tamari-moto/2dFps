type Point = { x: number; y: number };

export function isPointInCone(
  point: Point,
  origin: Point,
  dirX: number,
  dirY: number,
  halfAngleDeg: number,
  maxDistance: number,
): boolean {
  const dx = point.x - origin.x;
  const dy = point.y - origin.y;
  const distSq = dx * dx + dy * dy;
  if (distSq > maxDistance * maxDistance) return false;
  const dist = Math.sqrt(distSq);
  if (dist === 0) return true;
  const dot = (dx * dirX + dy * dirY) / dist;
  const angleRad = Math.acos(Math.max(-1, Math.min(1, dot)));
  return angleRad <= halfAngleDeg * Math.PI / 180;
}
