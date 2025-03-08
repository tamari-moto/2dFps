import React from 'react';

interface CrossKeypadProps {
  onDirectionClick: (direction: number) => void;
}

const CrossKeypad: React.FC<CrossKeypadProps> = ({ onDirectionClick }) => {
  const buttonStyle: React.CSSProperties = {
    width: '50px',
    height: '50px',
    fontSize: '24px',
    border: '1px solid #ccc',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
  };

  const containerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '5px',
    width: '160px',
    margin: '20px auto',
  };

  return (
    <div style={containerStyle}>
      <div style={{ gridColumn: '2' }}>
        <button
          style={buttonStyle}
          onClick={() => onDirectionClick(1)}
          aria-label="上"
        >
          ▲
        </button>
      </div>
      <div style={{ gridColumn: '1', gridRow: '2' }}>
        <button
          style={buttonStyle}
          onClick={() => onDirectionClick(2)}
          aria-label="左"
        >
          ◀
        </button>
      </div>
      <div style={{ gridColumn: '2', gridRow: '2' }}>
        <button
          style={buttonStyle}
          onClick={() => onDirectionClick(0)}
          aria-label="中央"
        >
          OK
        </button>
      </div>
      <div style={{ gridColumn: '3', gridRow: '2' }}>
        <button
          style={buttonStyle}
          onClick={() => onDirectionClick(3)}
          aria-label="右"
        >
          ▶
        </button>
      </div>
      <div style={{ gridColumn: '2', gridRow: '3' }}>
        <button
          style={buttonStyle}
          onClick={() => onDirectionClick(4)}
          aria-label="下"
        >
          ▼
        </button>
      </div>
    </div>
  );
};

export default CrossKeypad;