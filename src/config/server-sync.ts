import { MapConfig } from './map';
import { PlayerConfig } from './player';

/**
 * Applies server-authoritative config values to the runtime config objects.
 * Only fields present on the server are overridden; client-only fields are untouched.
 * Called by ColyseusAdapter when a server_config message is received.
 */
export function applyServerConfig(payload: {
  mapConfig: { NodesInGridSize: number; NodeSpacing: number };
  playerConfig: { MoveRange: number; ViewAngle: number; MaxViewDistance: number; DamagePerShot: number; ShotHitRadius: number };
}): void {
  MapConfig.NodesInGridSize    = payload.mapConfig.NodesInGridSize;
  MapConfig.NodeSpacing        = payload.mapConfig.NodeSpacing;
  PlayerConfig.MoveRange       = payload.playerConfig.MoveRange;
  PlayerConfig.ViewAngle       = payload.playerConfig.ViewAngle;
  PlayerConfig.MaxViewDistance = payload.playerConfig.MaxViewDistance;
  PlayerConfig.DamagePerShot   = payload.playerConfig.DamagePerShot;
  PlayerConfig.ShotHitRadius   = payload.playerConfig.ShotHitRadius;
}
