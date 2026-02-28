import React from 'react';
import type { ThreeSetup } from '../rendering/threeSetup';
import { downloadObstaclesJSON } from '../model/ObstacleExporter';

interface ExportMenuProps {
  threeSetup: ThreeSetup | null;
}

const ExportMenu: React.FC<ExportMenuProps> = ({ threeSetup }) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

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

  const handleComplexMap = () => {
    if (threeSetup) {
      threeSetup.generateComplexMap();
    }
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !threeSetup) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const data = JSON.parse(content);

        if (data.obstacles && Array.isArray(data.obstacles)) {
          threeSetup.importObstacles(data.obstacles);
        } else {
          alert('無効なJSONファイル形式です。');
        }
      } catch (error) {
        alert('JSONファイルの読み込みに失敗しました。');
        console.error('Import error:', error);
      }
    };
    reader.readAsText(file);

    // Reset input value to allow re-importing the same file
    event.target.value = '';
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

  const importButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    top: '110px',
    backgroundColor: '#2196F3',
  };

  const complexMapButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    top: '160px',
    backgroundColor: '#9C27B0',
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
      <button
        onClick={handleComplexMap}
        style={complexMapButtonStyle}
        aria-label="複雑なマップ生成"
      >
        複雑なマップ生成
      </button>
      <button
        onClick={handleImportClick}
        style={importButtonStyle}
        aria-label="障害物をインポート"
      >
        障害物をインポート
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </>
  );
};

export default ExportMenu;
