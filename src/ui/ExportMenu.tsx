import React from 'react';
import type { ThreeSetup } from '../rendering/threeSetup';
import { exportObstaclesToJSON } from '../model/ObstacleExporter';

interface ExportMenuProps {
  threeSetup: ThreeSetup | null;
}

const ExportMenu: React.FC<ExportMenuProps> = ({ threeSetup }) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [currentSeed, setCurrentSeed] = React.useState<string>('');
  const [seedInput, setSeedInput] = React.useState<string>('');

  React.useEffect(() => {
    if (threeSetup) {
      const s = threeSetup.getModel().getLastSeed();
      setCurrentSeed(s);
      setSeedInput(s);
    }
  }, [threeSetup]);

  const handleExportObstacles = () => {
    if (!threeSetup) return;
    const obstacles = threeSetup.getModel().getObstacles();
    const jsonData = exportObstaclesToJSON(obstacles);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'obstacles.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleRandomizeObstacles = () => {
    if (threeSetup) {
      const usedSeed = threeSetup.regenerateObstacles();
      setCurrentSeed(usedSeed);
      setSeedInput(usedSeed);
    }
  };

  const handleComplexMap = () => {
    if (threeSetup) {
      const usedSeed = threeSetup.generateComplexMap();
      setCurrentSeed(usedSeed);
      setSeedInput(usedSeed);
    }
  };

  const handleSeedRegenerate = () => {
    if (!threeSetup || !seedInput.trim()) return;
    const usedSeed = threeSetup.regenerateObstacles(seedInput.trim());
    setCurrentSeed(usedSeed);
  };

  const handleComplexMapWithSeed = () => {
    if (!threeSetup || !seedInput.trim()) return;
    const usedSeed = threeSetup.generateComplexMap(seedInput.trim());
    setCurrentSeed(usedSeed);
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
      <div style={{
        position: 'absolute',
        top: '210px',
        right: '10px',
        backgroundColor: 'rgba(0,0,0,0.75)',
        color: 'white',
        padding: '8px',
        borderRadius: '5px',
        zIndex: 1000,
        width: '170px',
        fontSize: '12px',
      }}>
        <div style={{ marginBottom: '4px', wordBreak: 'break-all' }}>
          シード: {currentSeed || '未生成'}
        </div>
        <input
          type="text"
          value={seedInput}
          onChange={(e) => setSeedInput(e.target.value)}
          placeholder="シード文字列を入力"
          style={{ width: '100%', padding: '3px', fontSize: '12px', boxSizing: 'border-box' }}
        />
        <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
          <button
            onClick={handleSeedRegenerate}
            style={{ flex: 1, padding: '4px', fontSize: '11px', cursor: 'pointer' }}
          >
            ランダム
          </button>
          <button
            onClick={handleComplexMapWithSeed}
            style={{ flex: 1, padding: '4px', fontSize: '11px', cursor: 'pointer' }}
          >
            複雑
          </button>
        </div>
      </div>
    </>
  );
};

export default ExportMenu;
