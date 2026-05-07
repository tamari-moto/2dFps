import React from 'react';
import type { ThreeSetup } from '../rendering/threeSetup';
import { gameEventBus, GameEventType } from '../core/GameEventBus';
import { PlayerConfig } from '../config/GameConfig';
import type { BombStatus } from '../model/model';

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
}

const PlayerCard: React.FC<{ state: PlayerHUDState }> = ({ state }) => {
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

  return (
    <div style={{
      padding: '6px 10px',
      borderRadius: '5px',
      background: bgColor,
      opacity: state.isDead ? 0.45 : 1,
      minWidth: '90px',
      color: 'white',
      fontSize: '12px',
      fontFamily: 'monospace',
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

  // Bomb defusal state
  const [roundNumber, setRoundNumber] = React.useState(1);
  const [teamScores, setTeamScores] = React.useState<[number, number]>([0, 0]);
  const [bombStatus, setBombStatus] = React.useState<BombStatus>('idle');
  const [turnsToExplode, setTurnsToExplode] = React.useState(0);
  const [canBombAction, setCanBombAction] = React.useState<{ action: 'plant' | 'defuse'; nodeId: number; playerId: string } | null>(null);
  const [matchWinner, setMatchWinner] = React.useState<{ winnerTeam: 0 | 1; scores: [number, number] } | null>(null);

  React.useEffect(() => {
    if (!threeSetup) return;
    const model = threeSetup.getModel();
    const states: PlayerHUDState[] = [];
    for (const [id, p] of model.players) {
      states.push({ id, hp: p.health, maxHp: p.maxHealth, isActive: false, isConfirmed: false, isDead: !p.isAlive });
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

    const onInputLocked = (data: { locked: boolean }) => {
      if (!data.locked) {
        setPlayerStates(prev => prev.map(s => ({ ...s, isConfirmed: false, isActive: false })));
        setConfirmedCount(0);
        setCanBombAction(null);
      }
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

    const onRoundStarted = (data: { roundNumber: number }) => {
      setRoundNumber(data.roundNumber);
      setBombStatus('idle');
      setTurnsToExplode(0);
      setCanBombAction(null);
      setMatchWinner(null);
      // Revive all players in HUD
      if (threeSetup) {
        const model = threeSetup.getModel();
        setPlayerStates(prev => prev.map(s => {
          const p = model.getPlayer(s.id);
          return p ? { ...s, isDead: !p.isAlive, hp: p.health, maxHp: p.maxHealth } : s;
        }));
      }
    };

    const onRoundEnded = (data: { winner: string; reason: string; scores: [number, number] }) => {
      setTeamScores(data.scores);
    };

    const onBombPlanted = (data: { turnsUntilExplosion: number }) => {
      setBombStatus('planted');
      setTurnsToExplode(data.turnsUntilExplosion);
    };

    const onBombDefused = () => {
      setBombStatus('defused');
    };

    const onBombExploded = () => {
      setBombStatus('exploded');
    };

    const onBombActionSelected = (data: { action: 'plant' | 'defuse'; nodeId: number; playerId: string }) => {
      setCanBombAction(data);
    };

    const onMatchOver = (data: { winnerTeam: 0 | 1; scores: [number, number] }) => {
      setMatchWinner(data);
      setTeamScores(data.scores);
    };

    gameEventBus.on(GameEventType.VIS_SET_ACTIVE_PLAYER, onActivePlayer);
    gameEventBus.on(GameEventType.PLAYER_ACTION_CONFIRMED, onActionConfirmed);
    gameEventBus.on(GameEventType.INPUT_LOCKED, onInputLocked);
    gameEventBus.on(GameEventType.HIT_DETECTED, onHit);
    gameEventBus.on(GameEventType.VIS_HIDE_PLAYER, onHidePlayer);
    gameEventBus.on(GameEventType.ROUND_STARTED, onRoundStarted);
    gameEventBus.on(GameEventType.ROUND_ENDED, onRoundEnded);
    gameEventBus.on(GameEventType.BOMB_PLANTED, onBombPlanted);
    gameEventBus.on(GameEventType.BOMB_DEFUSED, onBombDefused);
    gameEventBus.on(GameEventType.BOMB_EXPLODED, onBombExploded);
    gameEventBus.on(GameEventType.BOMB_ACTION_SELECTED, onBombActionSelected);
    gameEventBus.on(GameEventType.MATCH_OVER, onMatchOver);

    return () => {
      gameEventBus.off(GameEventType.VIS_SET_ACTIVE_PLAYER, onActivePlayer);
      gameEventBus.off(GameEventType.PLAYER_ACTION_CONFIRMED, onActionConfirmed);
      gameEventBus.off(GameEventType.INPUT_LOCKED, onInputLocked);
      gameEventBus.off(GameEventType.HIT_DETECTED, onHit);
      gameEventBus.off(GameEventType.VIS_HIDE_PLAYER, onHidePlayer);
      gameEventBus.off(GameEventType.ROUND_STARTED, onRoundStarted);
      gameEventBus.off(GameEventType.ROUND_ENDED, onRoundEnded);
      gameEventBus.off(GameEventType.BOMB_PLANTED, onBombPlanted);
      gameEventBus.off(GameEventType.BOMB_DEFUSED, onBombDefused);
      gameEventBus.off(GameEventType.BOMB_EXPLODED, onBombExploded);
      gameEventBus.off(GameEventType.BOMB_ACTION_SELECTED, onBombActionSelected);
      gameEventBus.off(GameEventType.MATCH_OVER, onMatchOver);
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

  const handleBombAction = () => {
    if (!canBombAction) return;
    gameEventBus.emit(GameEventType.KEY_PRESSED, { key: 'f' });
  };

  const aliveCount = playerStates.filter(s => !s.isDead).length;

  const bombLabel = () => {
    switch (bombStatus) {
      case 'idle':    return '💣 未設置';
      case 'planted': return `💣 設置済み（残${turnsToExplode}ターン）`;
      case 'defused': return '✅ 解除済み';
      case 'exploded': return '💥 爆発！';
    }
  };

  const bombBgColor = () => {
    switch (bombStatus) {
      case 'planted':  return 'rgba(180,30,30,0.85)';
      case 'defused':  return 'rgba(20,120,60,0.85)';
      case 'exploded': return 'rgba(200,80,0,0.9)';
      default:         return 'rgba(30,30,60,0.75)';
    }
  };

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
    <>
      {/* Top center: round / score / bomb status banner */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        pointerEvents: 'none',
      }}>
        <div style={{
          background: 'rgba(0,0,0,0.65)',
          color: 'white',
          fontFamily: 'monospace',
          fontSize: '14px',
          fontWeight: 'bold',
          padding: '4px 16px',
          borderRadius: '4px',
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
        }}>
          <span style={{ color: '#ff6666' }}>ATK {teamScores[0]}</span>
          <span style={{ color: '#aaa', fontSize: '11px' }}>ROUND {roundNumber}</span>
          <span style={{ color: '#6699ff' }}>{teamScores[1]} DEF</span>
        </div>

        <div style={{
          background: bombBgColor(),
          color: 'white',
          fontFamily: 'monospace',
          fontSize: '13px',
          padding: '3px 14px',
          borderRadius: '4px',
        }}>
          {bombLabel()}
        </div>

        {canBombAction && (
          <button
            style={{
              ...baseButtonStyle,
              backgroundColor: canBombAction.action === 'plant' ? '#cc3300' : '#0066cc',
              pointerEvents: 'auto',
              fontSize: '12px',
              padding: '5px 12px',
            }}
            onClick={handleBombAction}
          >
            [F] {canBombAction.action === 'plant' ? '爆弾設置' : '爆弾解除'}
          </button>
        )}
      </div>

      {/* Match over overlay */}
      {matchWinner && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.7)',
          zIndex: 2000,
          pointerEvents: 'none',
        }}>
          <div style={{
            background: matchWinner.winnerTeam === 0 ? 'rgba(160,30,30,0.9)' : 'rgba(30,60,160,0.9)',
            color: 'white',
            fontFamily: 'monospace',
            fontSize: '28px',
            fontWeight: 'bold',
            padding: '30px 50px',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <div>{matchWinner.winnerTeam === 0 ? 'ATK 勝利！' : 'DEF 勝利！'}</div>
            <div style={{ fontSize: '18px', marginTop: '10px', color: '#ddd' }}>
              ATK {matchWinner.scores[0]} - {matchWinner.scores[1]} DEF
            </div>
          </div>
        </div>
      )}

      {/* Bottom left: controls + player cards */}
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
              {playerStates.map(s => <PlayerCard key={s.id} state={s} />)}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default GameHUD;
