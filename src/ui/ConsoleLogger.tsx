import React, { useState, useEffect } from 'react';

interface LogEntry {
  id: number;
  message: string;
  timestamp: string;
  type: 'log' | 'info' | 'warn' | 'error';
}

const ConsoleLogger: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const nextIdRef = React.useRef(0);

  // Override global console methods
  useEffect(() => {
    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;
    const originalInfo = console.info;

    const addLog = (message: string, type: 'log' | 'info' | 'warn' | 'error') => {
      const timestamp = new Date().toLocaleTimeString();
      const currentId = nextIdRef.current;
      nextIdRef.current += 1;

      setLogs(prev => {
        const updated = [
          ...prev,
          {
            id: currentId,
            message: String(message),
            timestamp,
            type
          }
        ];
        // Keep only the latest 10 entries
        return updated.slice(-10);
      });
    };

    console.log = (...args: any[]) => {
      addLog(args.join(' '), 'log');
      originalLog(...args);
    };

    console.info = (...args: any[]) => {
      addLog(args.join(' '), 'info');
      originalInfo(...args);
    };

    console.warn = (...args: any[]) => {
      addLog(args.join(' '), 'warn');
      originalWarn(...args);
    };

    console.error = (...args: any[]) => {
      addLog(args.join(' '), 'error');
      originalError(...args);
    };

    return () => {
      console.log = originalLog;
      console.warn = originalWarn;
      console.error = originalError;
      console.info = originalInfo;
    };
  }, []); // Empty dependency array - only run once on mount

  const getLogColor = (type: string) => {
    switch (type) {
      case 'error': return '#ff6b6b';
      case 'warn': return '#ffd93d';
      case 'info': return '#6bcf7f';
      default: return '#ffffff';
    }
  };

  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    width: '400px',
    maxHeight: '300px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    border: '1px solid #444',
    borderRadius: '5px',
    padding: '10px',
    fontSize: '12px',
    fontFamily: 'monospace',
    color: '#fff',
    overflowY: 'auto',
    zIndex: 999,
    pointerEvents: 'none', // Allow click-through to canvas
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#aaa',
    borderBottom: '1px solid #444',
    paddingBottom: '5px',
  };

  const logEntryStyle: React.CSSProperties = {
    marginBottom: '5px',
    paddingBottom: '5px',
    borderBottom: '1px solid #333',
  };

  const timestampStyle: React.CSSProperties = {
    color: '#888',
    marginRight: '8px',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        Console Log (Latest 10)
      </div>
      {logs.length === 0 ? (
        <div style={{ color: '#666', fontStyle: 'italic' }}>
          No logs yet...
        </div>
      ) : (
        logs.map(log => (
          <div key={log.id} style={logEntryStyle}>
            <span style={timestampStyle}>[{log.timestamp}]</span>
            <span style={{ color: getLogColor(log.type) }}>
              {log.message}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default ConsoleLogger;
