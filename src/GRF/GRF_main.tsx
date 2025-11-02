import * as React from 'react';
import { setupThree } from './threeSetup';
import type { ThreeSetup } from './threeSetup';
import ExportMenu from './ExportMenu';

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

  return (
    <div>
      <canvas ref={canvasRef} />
      <ExportMenu threeSetup={threeSetupRef.current} />
    </div>
  );
};

export default GRF_main;