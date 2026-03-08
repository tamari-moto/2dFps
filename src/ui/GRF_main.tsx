import * as React from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import type { GLTF } from 'three-stdlib';
import { setupThree } from '../rendering/threeSetup';
import type { ThreeSetup } from '../rendering/threeSetup';
import ExportMenu from './ExportMenu';
import GameHUD from './GameHUD';
import ConsoleLogger from './ConsoleLogger';
import LobbyUI from './LobbyUI';
import { LocalAdapter } from '../network/LocalAdapter';
import { ColyseusAdapter } from '../network/ColyseusAdapter';
import type { INetworkAdapter } from '../network/INetworkAdapter';

type AppState = 'lobby' | 'connecting' | 'playing';

const MODEL_URL = import.meta.env.BASE_URL + 'models/player.glb';

const GRF_main = () => {
  const [appState, setAppState] = React.useState<AppState>('lobby');
  const [errorMsg, setErrorMsg] = React.useState('');
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [threeSetup, setThreeSetup] = React.useState<ThreeSetup | null>(null);
  const initialized = React.useRef(false);

  const startGame = React.useCallback(async (adapter: INetworkAdapter, usePrimitive: boolean = false) => {
    const canvas = canvasRef.current;
    if (!canvas || initialized.current) return;
    initialized.current = true;

    // Preload GLTF player model unless primitive mode is selected
    let gltfTemplate: THREE.Group | undefined;
    if (!usePrimitive) {
      try {
        const loader = new GLTFLoader();
        const gltf = await new Promise<GLTF>((resolve, reject) =>
          loader.load(MODEL_URL, resolve, undefined, reject)
        );
        gltfTemplate = gltf.scene;
      } catch {
        console.warn('GLTF model not found, using fallback primitive');
      }
    }

    const setup = setupThree(canvas, adapter, gltfTemplate);
    setThreeSetup(setup);
    setAppState('playing');

    // Online mode: when another player joins later, add them to the local model + scene.
    if (adapter instanceof ColyseusAdapter) {
      const room = adapter.getRoom();
      adapter.onPlayerJoined((playerId: string) => {
        const sp = room.state.players.get(playerId);
        if (sp) setup.addPlayer(playerId, sp.nodeId, sp.color);
      });
    }
  }, []);

  const handleOffline = React.useCallback((usePrimitive: boolean) => {
    startGame(new LocalAdapter(), usePrimitive);
  }, [startGame]);

  const handleOnline = React.useCallback(async (serverUrl: string, usePrimitive: boolean) => {
    setAppState('connecting');
    setErrorMsg('');
    try {
      const adapter = new ColyseusAdapter(serverUrl);
      await adapter.connect();
      startGame(adapter, usePrimitive);
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
      {appState === 'playing' && <GameHUD threeSetup={threeSetup} />}
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
