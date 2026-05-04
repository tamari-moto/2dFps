import React from 'react';
import type { ThreeSetup } from '../rendering/threeSetup';
import { gameEventBus, GameEventType } from '../core/GameEventBus';
import { PlayerConfig } from '../config/GameConfig';

interface GameHUDProps {
  threeSetup: ThreeSetup | null;
}

const GameHUD: React.FC<GameHUDProps> = ({ threeSetup }) => {
  const [gridVisible, setGridVisible] = React.useState(true);
  const [fogEnabled, setFogEnabled] = React.useState(PlayerConfig.FogOfWarEnabled);
  const [playerIds, setPlayerIds] = React.useState<string[]>([]);
  const [activeId, setActiveId] = React.useState<string>('');
  const [activeAngle, setActiveAngle] = React.useState<number | null>(null);

  const refreshAngle = React.useCallback((id: string) => {
    if (!threeSetup) return;
    const player = threeSetup.getModel().players.get(id);
    setActiveAngle(player ? Math.round(player.angle) : null);
  }, [threeSetup]);

  React.useEffect(() => {
    if (!threeSetup) return;
    const ids = threeSetup.getPlayerIds();
    setPlayerIds(ids);
    const firstId = ids[0] ?? '';
    setActiveId(firstId);
    refreshAngle(firstId);
  }, [threeSetup, refreshAngle]);

  React.useEffect(() => {
    const onView = () => setActiveAngle(prev => {
      if (!threeSetup || !activeId) return prev;
      const player = threeSetup.getModel().players.get(activeId);
      return player ? Math.round(player.angle) : prev;
    });
    gameEventBus.on(GameEventType.VIS_UPDATE_VIEW, onView);
    return () => gameEventBus.off(GameEventType.VIS_UPDATE_VIEW, onView);
  }, [threeSetup, activeId]);

  const handleToggleGrid = () => {
    if (!threeSetup) return;
    threeSetup.toggleGrid();
    setGridVisible(v => !v);
  };

  const handleToggleFog = () => {
    PlayerConfig.FogOfWarEnabled = !PlayerConfig.FogOfWarEnabled;
    setFogEnabled(PlayerConfig.FogOfWarEnabled);
    gameEventBus.emit(GameEventType.VIS_UPDATE_VIEW);
  };

  const handleSwitchPlayer = (id: string) => {
    setActiveId(id);
    refreshAngle(id);
    gameEventBus.emit(GameEventType.PLAYER_SWITCHED, {
      previousPlayerId: activeId,
      currentPlayerId: id,
    });
  };

  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  };

  const baseButtonStyle: React.CSSProperties = {
    padding: '8px 14px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: 'bold',
    color: 'white',
  };

  const gridButtonStyle: React.CSSProperties = {
    ...baseButtonStyle,
    backgroundColor: gridVisible ? '#00bfbf' : '#444444',
  };

  const fogButtonStyle: React.CSSProperties = {
    ...baseButtonStyle,
    backgroundColor: fogEnabled ? '#c0392b' : '#444444',
  };

  const playerRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '4px',
  };

  return (
    <div style={containerStyle}>
      <button
        onClick={handleToggleGrid}
        style={gridButtonStyle}
        aria-label={`グリッド: ${gridVisible ? 'ON' : 'OFF'}`}
      >
        グリッド: {gridVisible ? 'ON' : 'OFF'}
      </button>
      <button
        onClick={handleToggleFog}
        style={fogButtonStyle}
        aria-label={`霧: ${fogEnabled ? 'ON' : 'OFF'}`}
      >
        霧: {fogEnabled ? 'ON' : 'OFF'}
      </button>
      {playerIds.length > 0 && (
        <div style={playerRowStyle}>
          {playerIds.map((id) => (
            <button
              key={id}
              onClick={() => handleSwitchPlayer(id)}
              style={{
                ...baseButtonStyle,
                backgroundColor: '#1a5276',
                opacity: id === activeId ? 1 : 0.45,
              }}
              aria-label={`プレイヤー ${id} に切り替え`}
            >
              {id}
            </button>
          ))}
        </div>
      )}
      {activeAngle !== null && (
        <div style={{
          color: '#00e5ff',
          fontSize: '12px',
          fontFamily: 'monospace',
          background: 'rgba(0,0,0,0.5)',
          padding: '3px 8px',
          borderRadius: '3px',
        }}>
          angle: {activeAngle}°
        </div>
      )}
    </div>
  );
};

export default GameHUD;
