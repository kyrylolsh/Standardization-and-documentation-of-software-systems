import React, { useState } from "react";
import "../PagesStyle/GamePage.css";
import "../Components/Button.css";
import Button from "../Components/Button";
import useWhackAMole from "../CustomHook/useWhackAMole";
import { useSettingsStore } from "../Store/SettingsStore";
import GameOverModal from "../Modals/GameOverModal";

function GamePage({ onFinish }) {
  const { moleCount, speed } = useSettingsStore();
  const [scorePopups, setScorePopups] = useState([]);

  const {
    score,
    timeLeft,
    isGameActive,
    isGamePaused,
    moles,
    hitMole,
    startGame,
    togglePause,
    showGameOver,
    setShowGameOver
  } = useWhackAMole(moleCount, speed);

  const handleHitMole = (index, event) => {
    if (hitMole(index)) {
      const rect = event.currentTarget.getBoundingClientRect();
      setScorePopups((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: rect.left + rect.width / 2,
          y: rect.top
        }
      ]);

      setTimeout(() => {
        setScorePopups((prev) =>
          prev.filter((popup) => popup.id !== Date.now())
        );
      }, 1000);
    }
  };

  const getGameStatusText = () => {
    if (!isGameActive) return "⏸️ Гра не активна";
    if (isGamePaused) return "⏸️ Гра на паузі";
    return "🎯 Гра активна - Бийте кротів!";
  };

  return (
    <div className="game-page">
      <div className="mole-decoration">🐹</div>
      <div className="mole-decoration">🕳️</div>

      <div className="game-header">
        <h2>Рахунок: {score}</h2>

        <div className="game-controls">
          <Button
            onClick={startGame}
            disabled={isGameActive && !isGamePaused}
            color="#8FBC8F"
            hoverColor="#6B8E23"
          >
            {isGameActive ? "Гра йде..." : "Запустити гру"}
          </Button>

          {isGameActive && (
            <Button
              onClick={togglePause}
              color={isGamePaused ? "#4ECDC4" : "#FFD700"}
              hoverColor={isGamePaused ? "#26A69A" : "#FFA500"}
            >
              {isGamePaused ? "▶️ Продовжити" : "⏸️ Пауза"}
            </Button>
          )}

          <Button
            onClick={() => onFinish(score, timeLeft)}
            color="#FF6B6B"
            hoverColor="#FF5252"
          >
            Завершити гру
          </Button>
        </div>
      </div>

      <p className={`game-status ${isGamePaused ? "game-paused" : ""}`}>
        {getGameStatusText()}
      </p>

      <div className="moles-container">
        <div
          className="moles-grid"
          style={{
            gridTemplateColumns: `repeat(${Math.ceil(
              Math.sqrt(moles.length)
            )}, 1fr)`
          }}
        >
          {moles.map((mole, index) => (
            <div
              key={index}
              className={`mole-hole ${
                mole ? "mole-active" : ""
              } ${isGamePaused ? "mole-paused" : ""}`}
              onClick={(e) =>
                !isGamePaused && handleHitMole(index, e)
              }
            >
              {mole ? "🐹" : "🕳️"}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`time-display ${
          timeLeft <= 10 && !isGamePaused ? "time-warning" : ""
        } ${isGamePaused ? "time-paused" : ""}`}
      >
        <p>Залишилось часу: {timeLeft} сек</p>
        {isGamePaused && <div className="paused-indicator">⏸️ ПАУЗА</div>}
      </div>

      {scorePopups.map((popup) => (
        <div
          key={popup.id}
          className="score-popup"
          style={{
            left: popup.x,
            top: popup.y,
            position: "fixed"
          }}
        >
          +1!
        </div>
      ))}

      <GameOverModal
        score={score}
        isOpen={showGameOver}
        onClose={() => setShowGameOver(false)}
        onFinish={() => onFinish(score, 0)}
      />
    </div>
  );
}

export default GamePage;
