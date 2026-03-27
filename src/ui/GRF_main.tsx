import * as React from 'react';
import { setupThree } from '../rendering/threeSetup';
import type { ThreeSetup } from '../rendering/threeSetup';
import GameHUD from './GameHUD';
import LobbyUI from './LobbyUI';
import MobileControls from './MobileControls';
import { LocalAdapter } from '../network/LocalAdapter';
import { ColyseusAdapter } from '../network/ColyseusAdapter';
import type { INetworkAdapter } from '../network/INetworkAdapter';
import { gameEventBus, GameEventType } from '../core/GameEventBus';

type AppState = 'lobby' | 'connecting' | 'playing';

const GRF_main = () => {
  const [appState, setAppState] = React.useState<AppState>('lobby');
  const [errorMsg, setErrorMsg] = React.useState('');
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [threeSetup, setThreeSetup] = React.useState<ThreeSetup | null>(null);
  const initialized = React.useRef(false);
  const [mobileUI, setMobileUI] = React.useState(false);
  const [playerIds, setPlayerIds] = React.useState<string[]>([]);
  const [activePlayerId, setActivePlayerId] = React.useState('');

  React.useEffect(() => {
    return () => {
      if (threeSetup) {
        threeSetup.dispose();
        initialized.current = false;
      }
    };
  }, [threeSetup]);

  const startGame = React.useCallback(async (adapter: INetworkAdapter) => {
    const canvas = canvasRef.current;
    if (!canvas || initialized.current) return;
    initialized.current = true;

    const setup = setupThree(canvas, adapter);
    setThreeSetup(setup);
    setAppState('playing');

    const ids = setup.getPlayerIds();
    setPlayerIds(ids);
    setActivePlayerId(ids[0] ?? '');

    // Online mode: when another player joins later, add them to the local model + scene.
    if (adapter instanceof ColyseusAdapter) {
      const room = adapter.getRoom();
      adapter.onPlayerJoined((playerId: string) => {
        const sp = room.state.players.get(playerId);
        if (sp) setup.addPlayer(playerId, sp.nodeId, sp.color);
      });
    }
  }, []);

  React.useEffect(() => {
    const handler = (data: { currentPlayerId: string }) => {
      setActivePlayerId(data.currentPlayerId);
    };
    gameEventBus.on(GameEventType.PLAYER_SWITCHED, handler);
    return () => { gameEventBus.off(GameEventType.PLAYER_SWITCHED, handler); };
  }, []);

  const handleSwitchPlayer = React.useCallback((id: string) => {
    setActivePlayerId(id);
    gameEventBus.emit(GameEventType.PLAYER_SWITCHED, {
      previousPlayerId: activePlayerId,
      currentPlayerId: id,
    });
  }, [activePlayerId]);

  const handleOffline = React.useCallback(() => {
    startGame(new LocalAdapter());
  }, [startGame]);

  const handleOnline = React.useCallback(async (serverUrl: string) => {
    setAppState('connecting');
    setErrorMsg('');
    try {
      const adapter = new ColyseusAdapter(serverUrl);
      await adapter.connect();
      startGame(adapter);
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : '接続に失敗しました');
      setAppState('lobby');
    }
  }, [startGame]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{ display: appState === 'playing' ? 'block' : 'none' }}
      />
      {appState === 'playing' && (
        <GameHUD
          threeSetup={threeSetup}
          mobileUI={mobileUI}
          onToggleMobileUI={() => setMobileUI(v => !v)}
        />
      )}
      {appState === 'playing' && mobileUI && (
        <MobileControls
          playerIds={playerIds}
          activePlayerId={activePlayerId}
          onSwitchPlayer={handleSwitchPlayer}
        />
      )}
      {appState !== 'playing' && (
        <LobbyUI
          connecting={appState === 'connecting'}
          errorMsg={errorMsg}
          onOffline={handleOffline}
          onOnline={handleOnline}
        />
      )}
    </div>
  );
};

export default GRF_main;
