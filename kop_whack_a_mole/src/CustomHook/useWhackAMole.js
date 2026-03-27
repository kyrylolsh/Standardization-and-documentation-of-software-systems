import { useEffect, useState } from "react";

const useWhackAMole = (moleCount = 9, speed = 800) => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isGamePaused, setIsGamePaused] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);
  const [moles, setMoles] = useState([]);

  useEffect(() => {
    setMoles(new Array(moleCount).fill(false));
  }, [moleCount]);

  useEffect(() => {
    if (!isGameActive || isGamePaused) return;
    if (timeLeft <= 0) {
      setIsGameActive(false);
      setShowGameOver(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isGameActive, isGamePaused]);

  useEffect(() => {
    if (!isGameActive || isGamePaused) return;

    const interval = setInterval(() => {
      setMoles((prev) => {
        const next = new Array(moleCount).fill(false);
        const index = Math.floor(Math.random() * moleCount);
        next[index] = true;
        return next;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [isGameActive, isGamePaused, moleCount, speed]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsGameActive(true);
    setIsGamePaused(false);
    setShowGameOver(false);
  };

  const togglePause = () => {
    setIsGamePaused((p) => !p);
  };

  const hitMole = (index) => {
    if (!moles[index]) return false;

    setScore((s) => s + 1);
    setMoles((prev) => {
      const next = [...prev];
      next[index] = false;
      return next;
    });

    return true;
  };

  return {
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
  };
};

export default useWhackAMole;
