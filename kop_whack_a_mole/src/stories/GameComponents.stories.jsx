import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import StartPage from '../Pages/StartPage';
import GamePage from '../Pages/GamePage';
import ResultPage from '../Pages/ResultPage';

export default {
  title: 'WhackAMole/GameFlow',
  component: StartPage,
  decorators: [(Story) => <BrowserRouter><Story /></BrowserRouter>],
};

// --- 1. ПРОСТИЙ КОМПОНЕНТ (Стартова сторінка) ---
export const WelcomeScreen = () => <StartPage onStart={() => alert('Гра починається!')} />;
WelcomeScreen.storyName = "1. Простий: Стартовий екран";

// --- 2. СКЛАДНИЙ КОМПОНЕНТ (Ігрове поле) ---
export const GameplayActive = () => <GamePage onFinish={(s, t) => console.log(s, t)} />;
GameplayActive.storyName = "2. Складний: Активна гра";

// --- 3. ВАРІАЦІЯ (Екран результатів) ---
export const ResultsView = () => (
  <ResultPage
    score={400}
    timeLeft={0}
    onRestart={() => alert('Рестарт')}
    onNewGame={() => alert('На головну')}
  />
);
ResultsView.storyName = "3. Варіація: Результати (Score 400)";