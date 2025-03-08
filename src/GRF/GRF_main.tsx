import * as React from 'react';
import { setupThree } from './threeSetup';

const GRF_main = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const once = React.useRef(true);

  React.useEffect(() => {
    if (!once.current) return;
    once.current = false;

    const canvas = canvasRef.current;
    if (canvas !== null) {
      setupThree(canvas);
    }
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default GRF_main;