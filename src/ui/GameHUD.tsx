import React from 'react';
import type { ThreeSetup } from '../rendering/threeSetup';
import { gameEventBus, GameEventType } from '../core/GameEventBus';
import { PlayerConfig, TEAM_COLORS } from '../config/GameConfig';
import type { TeamId } from '../config/GameConfig';

interface GameHUDProps {
  threeSetup: ThreeSetup | null;
}

interface PlayerHUDState {
  id: string;
  hp: number;
  maxHp: number;
  isActive: boolean;
  isConfirmed: boolean;
  isDead: boolean;
  team: TeamId;
  isNPC: boolean;
}

const PlayerCard: React.FC<{ state: PlayerHUDState; onSelect?: () => void }> = ({ state, onSelect }) => {
  const hpPct = Math.max(0, state.hp / state.maxHp);
  const hpColor = hpPct > 0.5 ? '#27ae60' : hpPct > 0.25 ? '#e67e22' : '#c0392b';

  let statusLabel = '待機中';
  if (state.isDead) statusLabel = '戦闘不能';
  else if (state.isActive) statusLabel = '操作中';
  else if (state.isConfirmed) statusLabel = '確定済み';

  const bgColor = state.isDead ? 'rgba(40,40,40,0.7)'
    : state.isActive ? 'rgba(25,70,150,0.85)'
    : state.isConfirmed ? 'rgba(20,100,50,0.85)'
    : 'rgba(40,40,60,0.7)';

  const teamColor = '#' + TEAM_COLORS[state.team].toString(16).padStart(6, '0');

  return (
    <div
      onClick={onSelect}
      style={{
        padding: '6px 10px',
        borderRadius: '5px',
        background: bgColor,
        opacity: state.isDead ? 0.45 : 1,
        minWidth: '90px',
        color: 'white',
        fontSize: '12px',
        fontFamily: 'monospace',
        border: `2px solid ${teamColor}`,
        cursor: onSelect ? 'pointer' : 'default',
      }}>
      <div style={{ fontWeight: 'bold', marginBottom: '3px' }}>{state.id}</div>
      <div style={{
        height: '6px',
        borderRadius: '3px',
        background: '#333',
        marginBottom: '3px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${hpPct * 100}%`,
          background: hpColor,
          transition: 'width 0.3s, background 0.3s',
        }} />
      </div>
      <div style={{ fontSize: '10px', color: '#ccc' }}>
        {state.hp}/{state.maxHp} · {statusLabel}
      </div>
    </div>
  );
};

const GameHUD: React.FC<GameHUDProps> = ({ threeSetup }) => {
  const [gridVisible, setGridVisible] = React.useState(true);
  const [fogEnabled, setFogEnabled] = React.useState(PlayerConfig.FogOfWarEnabled);
  const [playerStates, setPlayerStates] = React.useState<PlayerHUDState[]>([]);
  const [confirmedCount, setConfirmedCount] = React.useState(0);
  const [autoLoop, setAutoLoop] = React.useState(true);
  const [inputLocked, setInputLocked] = React.useState(false);

  React.useEffect(() => {
    if (!threeSetup) return;
    const model = threeSetup.getModel();
    const states: PlayerHUDState[] = [];
    for (const [id, p] of model.players) {
      states.push({ id, hp: p.health, maxHp: p.maxHealth, isActive: false, isConfirmed: false, isDead: !p.isAlive, team: p.team, isNPC: p.isNPC });
    }
    if (states.length > 0) states[0].isActive = true;
    setPlayerStates(states);
  }, [threeSetup]);

  React.useEffect(() => {
    const onActivePlayer = (data: { playerId: string }) => {
      setPlayerStates(prev => prev.map(s => ({
        ...s,
        isActive: s.id === data.playerId,
      })));
    };

    const onActionConfirmed = (data: { playerId: string }) => {
      setPlayerStates(prev => {
        const next = prev.map(s => s.id === data.playerId ? { ...s, isConfirmed: true, isActive: false } : s);
        setConfirmedCount(next.filter(s => s.isConfirmed && !s.isDead).length);
        return next;
      });
    };

    const onHit = (data: { targetId: string }) => {
      if (!threeSetup) return;
      const model = threeSetup.getModel();
      const p = model.getPlayer(data.targetId);
      if (!p) return;
      setPlayerStates(prev => prev.map(s =>
        s.id === data.targetId ? { ...s, hp: p.health } : s
      ));
    };

    const onHidePlayer = (data: { playerId: string }) => {
      setPlayerStates(prev => prev.map(s =>
        s.id === data.playerId ? { ...s, isDead: true, isActive: false, isConfirmed: false } : s
      ));
    };

    const onAutoLoopChanged = (data: { enabled: boolean }) => setAutoLoop(data.enabled);
    const onInputLockedChange = (data: { locked: boolean }) => {
      setInputLocked(data.locked);
      if (!data.locked) {
        setPlayerStates(prev => prev.map(s => ({ ...s, isConfirmed: false, isActive: false })));
        setConfirmedCount(0);
      }
    };

    gameEventBus.on(GameEventType.VIS_SET_ACTIVE_PLAYER, onActivePlayer);
    gameEventBus.on(GameEventType.PLAYER_ACTION_CONFIRMED, onActionConfirmed);
    gameEventBus.on(GameEventType.INPUT_LOCKED, onInputLockedChange);
    gameEventBus.on(GameEventType.HIT_DETECTED, onHit);
    gameEventBus.on(GameEventType.VIS_HIDE_PLAYER, onHidePlayer);
    gameEventBus.on(GameEventType.SPECTATOR_AUTO_LOOP_CHANGED, onAutoLoopChanged);

    return () => {
      gameEventBus.off(GameEventType.VIS_SET_ACTIVE_PLAYER, onActivePlayer);
      gameEventBus.off(GameEventType.PLAYER_ACTION_CONFIRMED, onActionConfirmed);
      gameEventBus.off(GameEventType.INPUT_LOCKED, onInputLockedChange);
      gameEventBus.off(GameEventType.HIT_DETECTED, onHit);
      gameEventBus.off(GameEventType.VIS_HIDE_PLAYER, onHidePlayer);
      gameEventBus.off(GameEventType.SPECTATOR_AUTO_LOOP_CHANGED, onAutoLoopChanged);
    };
  }, [threeSetup]);

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

  const handleToggleAutoLoop = () => {
    gameEventBus.emit(GameEventType.SPECTATOR_SET_AUTO_LOOP, { enabled: !autoLoop });
  };

  const handleNextRound = () => {
    if (!inputLocked) {
      gameEventBus.emit(GameEventType.NPC_ONLY_TURN);
    }
  };

  const handleSelectPlayer = (playerId: string) => {
    gameEventBus.emit(GameEventType.SPECTATOR_SELECT_PLAYER, { playerId });
  };

  const isSpectatorMode = playerStates.length > 0 && playerStates.every(s => s.isNPC);
  const aliveCount = playerStates.filter(s => !s.isDead).length;

  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '10px',
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

  return (
    <div style={containerStyle}>
      <button
        onClick={handleToggleGrid}
        style={{ ...baseButtonStyle, backgroundColor: gridVisible ? '#00bfbf' : '#444444' }}
        aria-label={`グリッド: ${gridVisible ? 'ON' : 'OFF'}`}
      >
        グリッド: {gridVisible ? 'ON' : 'OFF'}
      </button>
      <button
        onClick={handleToggleFog}
        style={{ ...baseButtonStyle, backgroundColor: fogEnabled ? '#c0392b' : '#444444' }}
        aria-label={`霧: ${fogEnabled ? 'ON' : 'OFF'}`}
      >
        霧: {fogEnabled ? 'ON' : 'OFF'}
      </button>
      {isSpectatorMode && (
        <>
          <button
            onClick={handleToggleAutoLoop}
            style={{ ...baseButtonStyle, backgroundColor: autoLoop ? '#8e44ad' : '#444444' }}
          >
            {autoLoop ? '自動実行中' : '手動モード'}
          </button>
          {!autoLoop && (
            <button
              onClick={handleNextRound}
              disabled={inputLocked}
              style={{ ...baseButtonStyle, backgroundColor: inputLocked ? '#555' : '#27ae60', opacity: inputLocked ? 0.5 : 1, cursor: inputLocked ? 'not-allowed' : 'pointer' }}
            >
              次のラウンド ▶
            </button>
          )}
        </>
      )}
      {playerStates.length > 0 && (
        <>
          <div style={{
            color: '#aaa',
            fontSize: '11px',
            fontFamily: 'monospace',
            background: 'rgba(0,0,0,0.4)',
            padding: '2px 8px',
            borderRadius: '3px',
          }}>
            {confirmedCount} / {aliveCount} 確定済み
          </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4px',
            maxWidth: '400px',
            maxHeight: '240px',
            overflowY: 'auto',
            overflowX: 'hidden',
            paddingRight: '4px',
            scrollbarWidth: 'thin',
            scrollbarColor: '#555 transparent',
          }}>
            {playerStates.map(s => (
              <PlayerCard
                key={s.id}
                state={s}
                onSelect={isSpectatorMode && !s.isDead ? () => handleSelectPlayer(s.id) : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GameHUD;
