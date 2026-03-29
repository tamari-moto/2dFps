import React from 'react';
import type { ThreeSetup } from '../rendering/threeSetup';
import { gameEventBus, GameEventType } from '../core/GameEventBus';

interface GameHUDProps {
  threeSetup: ThreeSetup | null;
  mobileUI: boolean;
  onToggleMobileUI: () => void;
}

const GameHUD: React.FC<GameHUDProps> = ({ threeSetup, mobileUI, onToggleMobileUI }) => {
  const [gridVisible, setGridVisible] = React.useState(true);
  const [playerIds, setPlayerIds] = React.useState<string[]>([]);
  const [activeId, setActiveId] = React.useState<string>('');

  React.useEffect(() => {
    if (!threeSetup) return;
    const ids = threeSetup.getPlayerIds();
    setPlayerIds(ids);
    setActiveId(ids[0] ?? '');
  }, [threeSetup]);

  const handleToggleGrid = () => {
    if (!threeSetup) return;
    threeSetup.toggleGrid();
    setGridVisible(v => !v);
  };

  const handleSwitchPlayer = (id: string) => {
    setActiveId(id);
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
        onClick={onToggleMobileUI}
        style={{ ...baseButtonStyle, backgroundColor: mobileUI ? '#c0392b' : '#555555' }}
        aria-label={`スマホUI: ${mobileUI ? 'ON' : 'OFF'}`}
      >
        スマホUI: {mobileUI ? 'ON' : 'OFF'}
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
    </div>
  );
};

export default GameHUD;
