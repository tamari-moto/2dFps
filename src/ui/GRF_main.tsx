import * as React from 'react';
import { setupThree } from '../rendering/threeSetup';
import type { ThreeSetup } from '../rendering/threeSetup';
import GameHUD from './GameHUD';
import LobbyUI from './LobbyUI';
import ConsoleLogger from './ConsoleLogger';
import { LocalAdapter } from '../network/LocalAdapter';
import { ColyseusAdapter } from '../network/ColyseusAdapter';
import type { INetworkAdapter } from '../network/INetworkAdapter';

type AppState = 'lobby' | 'connecting' | 'playing' | 'spectating';

const GRF_main = () => {
  const [appState, setAppState] = React.useState<AppState>('lobby');
  const [errorMsg, setErrorMsg] = React.useState('');
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [threeSetup, setThreeSetup] = React.useState<ThreeSetup | null>(null);
  const initialized = React.useRef(false);

  React.useEffect(() => {
    return () => {
      if (threeSetup) {
        threeSetup.dispose();
        initialized.current = false;
      }
    };
  }, [threeSetup]);

  const startGame = React.useCallback(async (adapter: INetworkAdapter, isSpectator: boolean = false) => {
    const canvas = canvasRef.current;
    if (!canvas || initialized.current) return;
    initialized.current = true;

    const setup = setupThree(canvas, adapter);
    setThreeSetup(setup);
    setAppState(isSpectator ? 'spectating' : 'playing');

    // Online mode: when another player joins later, add them to the local model + scene.
    if (adapter instanceof ColyseusAdapter) {
      const room = adapter.getRoom();
      adapter.onPlayerJoined((playerId: string) => {
        const sp = room.state.players.get(playerId);
        if (sp) setup.addPlayer(playerId, sp.nodeId, sp.color);
      });
    }
  }, []);

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

  const handleSpectate = React.useCallback(async (serverUrl: string) => {
    setAppState('connecting');
    setErrorMsg('');
    try {
      const adapter = new ColyseusAdapter(serverUrl);
      await adapter.connect(undefined, true);
      startGame(adapter, true);
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : '観戦接続に失敗しました');
      setAppState('lobby');
    }
  }, [startGame]);

  const inGame = appState === 'playing' || appState === 'spectating';

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{ display: inGame ? 'block' : 'none' }}
      />
      {inGame && <GameHUD threeSetup={threeSetup} isSpectator={appState === 'spectating'} />}
      {inGame && <ConsoleLogger />}
      {!inGame && (
        <LobbyUI
          connecting={appState === 'connecting'}
          errorMsg={errorMsg}
          onOffline={handleOffline}
          onOnline={handleOnline}
          onSpectate={handleSpectate}
        />
      )}
    </div>
  );
};

export default GRF_main;
