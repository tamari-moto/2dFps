import React from 'react';
import type { ThreeSetup } from './threeSetup';
import { downloadObstaclesJSON } from '../MODEL/ObstacleExporter';

interface ExportMenuProps {
  threeSetup: ThreeSetup | null;
}

const ExportMenu: React.FC<ExportMenuProps> = ({ threeSetup }) => {
  const handleExportObstacles = () => {
    if (threeSetup) {
      const model = threeSetup.getModel();
      const obstacles = model.getObstacles();
      downloadObstaclesJSON(obstacles);
    }
  };

  const handleRandomizeObstacles = () => {
    if (threeSetup) {
      threeSetup.regenerateObstacles();
    }
  };

  const buttonStyle: React.CSSProperties = {
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
    zIndex: 1000,
  };

  const randomButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    top: '60px',
    backgroundColor: '#FF9800',
  };

  return (
    <>
      <button
        onClick={handleExportObstacles}
        style={buttonStyle}
        aria-label="障害物をエクスポート"
      >
        障害物をエクスポート
      </button>
      <button
        onClick={handleRandomizeObstacles}
        style={randomButtonStyle}
        aria-label="障害物をランダム生成"
      >
        障害物をランダム生成
      </button>
    </>
  );
};

export default ExportMenu;
