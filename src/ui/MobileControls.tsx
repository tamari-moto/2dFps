import React from 'react';
import { MobileUIConfig } from '../config/GameConfig';
import { gameEventBus, GameEventType } from '../core/GameEventBus';

interface MobileControlsProps {
  playerIds: string[];
  activePlayerId: string;
  onSwitchPlayer: (id: string) => void;
}

const MobileControls: React.FC<MobileControlsProps> = ({ playerIds, activePlayerId, onSwitchPlayer }) => {
  const { ButtonSize, ButtonOpacity } = MobileUIConfig;

  const panelStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '16px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '10px',
    zIndex: 1100,
    opacity: ButtonOpacity,
  };

  const btnStyle: React.CSSProperties = {
    width: ButtonSize,
    height: ButtonSize,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#2a4060',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    lineHeight: 1.2,
  };

  const handleViewAngle = () => {
    gameEventBus.emit(GameEventType.VIEW_ANGLE_TOGGLED, { isVisible: true });
  };

  const handleDance = () => {
    gameEventBus.emit(GameEventType.VIS_PLAY_DANCE, { playerId: activePlayerId });
  };

  return (
    <div style={panelStyle}>
      <button
        style={{ ...btnStyle, backgroundColor: '#1a6b6b' }}
        onPointerDown={handleViewAngle}
        aria-label="視野角トグル"
      >
        視野
      </button>
      <button
        style={{ ...btnStyle, backgroundColor: '#4a3060' }}
        onPointerDown={handleDance}
        aria-label="ダンス"
      >
        Dance
      </button>
      {playerIds.map((id, i) => (
        <button
          key={id}
          style={{
            ...btnStyle,
            backgroundColor: '#1a5276',
            opacity: id === activePlayerId ? 1 : 0.55,
          }}
          onPointerDown={() => onSwitchPlayer(id)}
          aria-label={`プレイヤー ${id} に切り替え`}
        >
          P{i + 1}
        </button>
      ))}
    </div>
  );
};

export default MobileControls;
