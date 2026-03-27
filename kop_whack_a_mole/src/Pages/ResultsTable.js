import React from "react";
import "../PagesStyle/ResultPage.css";
import Button from "../Components/Button";
import "../Components/Button.css";

function ResultPage({ score, timeLeft, onRestart, onNewGame }) {
  const getPerformanceComment = (score) => {
    if (score >= 50) return "Вражаюче! Ти справжній експерт! 🏆";
    if (score >= 30) return "Чудово! Майже професіонал! ⭐";
    if (score >= 20) return "Добре! Продовжуй тренування 👍";
    if (score >= 10) return "Непогано! Є прогрес 💪";
    return "Початок покладено! 🐹";
  };

  const calculateStars = (score) => {
    if (score >= 40) return 5;
    if (score >= 30) return 4;
    if (score >= 20) return 3;
    if (score >= 10) return 2;
    return 1;
  };

  const stars = calculateStars(score);

  return (
    <div id="ResultPageDiv">
      <div className="result-background">
        <div className="floating-mole">🐹</div>
        <div className="floating-mole">🕳️</div>
        <div className="floating-mole">⭐</div>
      </div>

      <div className="result-block">
        <div className="result-header">
          <h1>Результати гри</h1>

          <div className="stars-rating">
            {"⭐".repeat(stars)}
            {"☆".repeat(5 - stars)}
          </div>
        </div>

        <div className="score-section">
          <div className="final-score">
            <span className="score-label">Фінальний рахунок:</span>
            <span className="score-number">{score}</span>
          </div>

          <div className="time-info">
            <span className="time-label">Час, що залишився:</span>
            <span className="time-value">{timeLeft} сек</span>
          </div>
        </div>

        <p className="performance-comment">
          {getPerformanceComment(score)}
        </p>

        <div className="result-actions">
          <Button
            className="buttColor restart-button"
            onClick={onRestart}
            color="#8FBC8F"
            hoverColor="#6B8E23"
          >
            🔄 Грати знову
          </Button>

          <Button
            className="buttColor newgame-button"
            onClick={onNewGame}
            color="#4ECDC4"
            hoverColor="#26A69A"
          >
            🏠 Нова гра
          </Button>
        </div>

        <div className="result-footer">
          <p>Дякуємо за гру! 🎮</p>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
