import React from 'react';
import ReactDOM from 'react-dom';
import './GameOverModal.css';
import Button from '../Components/Button';

const GameOverModal = ({ score, onRestart, onNextLevel, isOpen, onClose, onFinish }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>🎮 Гра завершена! 🎮</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <div className="score-summary">
          <div className="score-display">
            <span className="score-label">Ваш рахунок:</span>
            <span className="score-value">{score}</span>
          </div>
        </div>

        <div className="modal-actions">
          <Button
            onClick={onRestart}
            color="#8FBC8F"
            hoverColor="#6B8E23"
            className="action-button"
          >
            🔄 Грати знову
          </Button>
          <Button
            onClick={onNextLevel}
            color="#4ECDC4"
            hoverColor="#26A69A"
            className="action-button"
          >
            ⭐ Наступний рівень
          </Button>
          <Button
            onClick={onFinish}
            color="#FFD700"
            hoverColor="#FFA500"
            className="action-button"
          >
            📊 До результатів
          </Button>
        </div>

        <div className="modal-footer">
          <p>Обери наступну дію:</p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default GameOverModal;