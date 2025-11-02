import * as React from 'react';
import { setupThree } from './threeSetup';
import type { ThreeSetup } from './threeSetup';
import { downloadObstaclesJSON } from '../MODEL/ObstacleExporter';

const GRF_main = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const threeSetupRef = React.useRef<ThreeSetup | null>(null);
  const once = React.useRef(true);

  React.useEffect(() => {
    if (!once.current) return;
    once.current = false;

    const canvas = canvasRef.current;
    if (canvas !== null) {
      threeSetupRef.current = setupThree(canvas);
    }
  }, []);

  const handleExportObstacles = () => {
    if (threeSetupRef.current) {
      const model = threeSetupRef.current.getModel();
      const obstacles = model.getObstacles();
      downloadObstaclesJSON(obstacles);
    }
  };

  return (
    <div>
      <canvas ref={canvasRef} />
      <button
        onClick={handleExportObstacles}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
          zIndex: 1000
        }}
      >
        障害物をエクスポート
      </button>
    </div>
  );
};

export default GRF_main;