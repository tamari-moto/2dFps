import React from 'react';

interface LobbyUIProps {
  connecting: boolean;
  errorMsg: string;
  onOffline: (usePrimitive: boolean) => void;
  onOnline: (serverUrl: string, usePrimitive: boolean) => void;
}

const LobbyUI: React.FC<LobbyUIProps> = ({ connecting, errorMsg, onOffline, onOnline }) => {
  const [serverUrl, setServerUrl] = React.useState('ws://localhost:2567');
  const [usePrimitive, setUsePrimitive] = React.useState(false);

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
    color: '#eee',
    fontFamily: 'monospace',
    gap: '16px',
    zIndex: 2000,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '48px',
    fontWeight: 'bold',
    letterSpacing: '4px',
    marginBottom: '8px',
    color: '#fff',
  };

  const buttonBase: React.CSSProperties = {
    padding: '12px 28px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: connecting ? 'not-allowed' : 'pointer',
    opacity: connecting ? 0.6 : 1,
  };

  const offlineButtonStyle: React.CSSProperties = {
    ...buttonBase,
    backgroundColor: '#4CAF50',
    color: '#fff',
  };

  const onlineButtonStyle: React.CSSProperties = {
    ...buttonBase,
    backgroundColor: '#2196F3',
    color: '#fff',
    minWidth: '160px',
  };

  const toggleButtonStyle: React.CSSProperties = {
    padding: '8px 18px',
    fontSize: '13px',
    fontWeight: 'bold',
    border: '1px solid #555',
    borderRadius: '6px',
    cursor: 'pointer',
    backgroundColor: usePrimitive ? '#6a3fa3' : '#1a5276',
    color: '#fff',
  };

  const inputStyle: React.CSSProperties = {
    padding: '10px 14px',
    fontSize: '14px',
    borderRadius: '6px',
    border: '1px solid #444',
    backgroundColor: '#222',
    color: '#eee',
    width: '260px',
    fontFamily: 'monospace',
  };

  const rowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  };

  const errorStyle: React.CSSProperties = {
    color: '#f44336',
    fontSize: '14px',
    maxWidth: '400px',
    textAlign: 'center',
  };

  const dividerStyle: React.CSSProperties = {
    color: '#555',
    fontSize: '12px',
    letterSpacing: '2px',
  };

  return (
    <div style={overlayStyle}>
      <h1 style={titleStyle}>2D FPS</h1>

      <button
        style={toggleButtonStyle}
        onClick={() => setUsePrimitive(v => !v)}
        disabled={connecting}
      >
        キャラクター: {usePrimitive ? 'プリミティブ' : 'GLTF'}
      </button>

      <button
        style={offlineButtonStyle}
        onClick={() => onOffline(usePrimitive)}
        disabled={connecting}
      >
        オフラインで遊ぶ
      </button>

      <p style={dividerStyle}>── OR ──</p>

      <div style={rowStyle}>
        <input
          style={inputStyle}
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
          disabled={connecting}
          placeholder="ws://localhost:2567"
          spellCheck={false}
        />
        <button
          style={onlineButtonStyle}
          onClick={() => onOnline(serverUrl, usePrimitive)}
          disabled={connecting}
        >
          {connecting ? '接続中...' : 'オンライン接続'}
        </button>
      </div>

      {errorMsg && <p style={errorStyle}>{errorMsg}</p>}
    </div>
  );
};

export default LobbyUI;
