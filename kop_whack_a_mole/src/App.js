ximport React, { useState } from "react";
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
  );
}

export default App;
