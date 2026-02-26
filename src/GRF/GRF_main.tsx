import * as React from 'react';
import { setupThree } from './threeSetup';
import type { ThreeSetup } from './threeSetup';
import ExportMenu from './ExportMenu';
import ConsoleLogger from './ConsoleLogger';
import LobbyUI from './LobbyUI';
import { LocalAdapter } from '../network/LocalAdapter';
import { ColyseusAdapter } from '../network/ColyseusAdapter';
import type { INetworkAdapter } from '../network/INetworkAdapter';

type AppState = 'lobby' | 'connecting' | 'playing';

const GRF_main = () => {
  const [appState, setAppState] = React.useState<AppState>('lobby');
  const [errorMsg, setErrorMsg] = React.useState('');
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [threeSetup, setThreeSetup] = React.useState<ThreeSetup | null>(null);
  const initialized = React.useRef(false);

  const startGame = React.useCallback((adapter: INetworkAdapter) => {
    const canvas = canvasRef.current;
    if (!canvas || initialized.current) return;
    initialized.current = true;
    const setup = setupThree(canvas, adapter);
    setThreeSetup(setup);
    setAppState('playing');
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

  return (
    <div>
      <ConsoleLogger />
      <canvas
        ref={canvasRef}
        style={{ display: appState === 'playing' ? 'block' : 'none' }}
      />
      {appState === 'playing' && <ExportMenu threeSetup={threeSetup} />}
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