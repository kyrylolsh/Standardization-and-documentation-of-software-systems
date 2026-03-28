import React, { useState } from "react";
import CookieConsent from "react-cookie-consent";
import { Routes, Route, useNavigate } from "react-router-dom";

import StartPage from "./Pages/StartPage";
import GamePage from "./Pages/GamePage";
import ResultPage from "./Pages/ResultPage";

function App() {
  const navigate = useNavigate();

  const [gameResult, setGameResult] = useState({
    score: 0,
    timeLeft: 0
  });

  const handleGameFinish = (score, timeLeft) => {
    setGameResult({
      score: score,
      timeLeft: timeLeft
    });

    navigate("/result");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <StartPage
              onStart={() => navigate("/game")}
            />
          }
        />

        <Route
          path="/game"
          element={
            <GamePage
              onFinish={handleGameFinish}
            />
          }
        />

        <Route
          path="/result"
          element={
            <ResultPage
              score={gameResult.score}
              timeLeft={gameResult.timeLeft}
              onRestart={() => navigate("/game")}
              onNewGame={() => navigate("/")}
            />
          }
        />
      </Routes>

      <CookieConsent
        location="bottom"
        buttonText="Прийняти"
        cookieName="whackAMoleConsent"
        style={{ background: "#2B373B", fontSize: "14px" }}
        buttonStyle={{
          color: "#4e503b",
          fontSize: "13px",
          background: "#f1d600",
          borderRadius: "5px",
          padding: "10px 20px"
        }}
        expires={150}
      >
        Цей сайт використовує файли cookie для покращення ігрового досвіду згідно з вимогами GDPR.
        Продовжуючи гру, ви погоджуєтеся з нашою{" "}
        <a href="/PRIVACY_POLICY.md" style={{ color: "#f1d600" }}>
          політикою конфіденційності
        </a>.
      </CookieConsent>
    </>
  );
}

export default App;