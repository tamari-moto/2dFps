import * as React from 'react';

/**
 * FPS 観戦モード中のオーバーレイ UI。
 * 中央に十字、上端に操作ガイドを表示する。
 */
const FPSOverlay: React.FC = () => {
  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    pointerEvents: 'none',
    zIndex: 10,
  };

  const crosshairBase: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    background: 'rgba(255, 255, 255, 0.7)',
    transform: 'translate(-50%, -50%)',
  };

  const guideStyle: React.CSSProperties = {
    position: 'absolute',
    top: 16,
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '6px 14px',
    background: 'rgba(0, 0, 0, 0.55)',
    color: '#fff',
    fontFamily: 'monospace',
    fontSize: 13,
    letterSpacing: 0.5,
    borderRadius: 4,
  };

  return (
    <div style={overlayStyle}>
      {/* horizontal */}
      <div style={{ ...crosshairBase, width: 14, height: 2 }} />
      {/* vertical */}
      <div style={{ ...crosshairBase, width: 2, height: 14 }} />
      <div style={guideStyle}>
        観戦モード | WASD: 移動 / Space-Ctrl: 上下 / Shift: 加速 / Mouse: 視点 / F: ダンス / T or ESC: 退出
      </div>
    </div>
  );
};

export default FPSOverlay;
