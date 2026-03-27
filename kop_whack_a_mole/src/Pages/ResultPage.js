import React from "react";
import "../PagesStyle/ResultPage.css";
import Button from "../Components/Button";

function ResultPage({ score, timeLeft, onRestart, onNewGame }) {
  const getStars = () => {
    if (score >= 50) return "⭐⭐⭐⭐⭐";
    if (score >= 40) return "⭐⭐⭐⭐";
    if (score >= 30) return "⭐⭐⭐";
    if (score >= 20) return "⭐⭐";
    return "⭐";
  };

  const getComment = () => {
    if (score >= 50) return "🔥 Неймовірний результат!";
    if (score >= 35) return "💪 Дуже круто!";
    if (score >= 20) return "🙂 Непогано!";
    return "😅 Спробуй ще раз!";
  };

  return (
    <div id="ResultPageDiv">
      {/* Фон */}
      <div className="result-background">
        <div className="floating-mole">🐹</div>
        <div className="floating-mole">🕳️</div>
        <div className="floating-mole">⭐</div>
      </div>

      <div className="result-block">
        <div className="result-header">
          <h1>Результат</h1>
        </div>

        <div className="stars-rating">{getStars()}</div>

        <div className="score-section">
          <div className="final-score">
            <span className="score-label">Очки</span>
            <span className="score-number">{score}</span>
          </div>

          <div className="time-info">
            <span className="time-label">Залишилось часу</span>
            <span className="time-value">{timeLeft} сек</span>
          </div>
        </div>

        <div className="performance-comment">
          {getComment()}
        </div>

        <div className="result-actions">
          <Button className="restart-button" onClick={onRestart}>
            🔄 Зіграти ще
          </Button>

          <Button className="newgame-button" onClick={onNewGame}>
            🏠 На головну
          </Button>
        </div>

        <div className="result-footer">
          <p>Дякуємо за гру ❤️</p>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
