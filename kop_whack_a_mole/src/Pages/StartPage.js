import React, { useState } from "react";
import "../PagesStyle/StartPage.css";
import Button from "../Components/Button";
import SettingsForm from "../Forms/SettingsForm";

function StartPage({ onStart, settings }) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div id="startPageDiv">
      {/* Фон */}
      <div className="start-background">
        <div className="floating-mole-start">🐹</div>
        <div className="floating-mole-start">🐹</div>
        <div className="floating-mole-start">🐹</div>

        <div className="floating-hole-start">🕳️</div>
        <div className="floating-hole-start">🕳️</div>
      </div>

      {/* Заголовок */}
      <h1>Whack-a-Mole</h1>

      {/* Кнопки */}
      <div className="start-page-buttons">
        <Button onClick={onStart}>
          ▶️ Почати гру
        </Button>

        <Button onClick={() => setShowSettings(true)}>
          ⚙️ Налаштування
        </Button>
      </div>

      {/* Поточні налаштування */}
      {settings && (
        <div className="current-settings">
          <h3>Поточні налаштування</h3>
          <p>Кількість кротів: {settings.moleCount}</p>
          <p>Швидкість: {settings.speed}</p>
          <p>Час гри: {settings.time} сек</p>
        </div>
      )}

      {/* Модалка налаштувань */}
      {showSettings && (
        <SettingsForm onClose={() => setShowSettings(false)} />
      )}
    </div>
  );
}

export default StartPage;
