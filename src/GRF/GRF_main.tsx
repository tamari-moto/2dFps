import * as React from 'react';
import { setupThree } from './threeSetup';
import type { ThreeSetup } from './threeSetup';
import ExportMenu from './ExportMenu';

const GRF_main = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [threeSetup, setThreeSetup] = React.useState<ThreeSetup | null>(null);
  const once = React.useRef(true);

  React.useEffect(() => {
    if (!once.current) return;
    once.current = false;

    const canvas = canvasRef.current;
    if (canvas !== null) {
      const setup = setupThree(canvas);
      setThreeSetup(setup);
    }
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
      <ExportMenu threeSetup={threeSetup} />
    </div>
  );
};

export default GRF_main;