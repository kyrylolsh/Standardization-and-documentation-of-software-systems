import React, { createContext, useContext, useState, useEffect } from 'react';

const GameSettingsContext = createContext();

export const useGameSettings = () => {
  const context = useContext(GameSettingsContext);
  if (!context) {
    throw new Error('useGameSettings must be used within a GameSettingsProvider');
  }
  return context;
};

export const GameSettingsProvider = ({ children }) => {
  const levelPresets = {
    easy: {
        difficulty: 'easy',
        moleCount: 6,
        gameSpeed: 2000,
        gameTime: 60
    },

    medium: {
        difficulty: 'medium',
        moleCount: 9,
        gameSpeed: 1500,
        gameTime: 60
    },

    hard: {
        difficulty: 'hard',
        moleCount: 12,
        gameSpeed: 1000,
        gameTime: 60
    }
  };

  const [settings, setSettings] = useState(levelPresets.medium);

  useEffect(() => {
    const savedSettings = localStorage.getItem('whackAMoleSettings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
      } catch (error) {
        console.error('Error loading settings from localStorage:', error);
        setSettings(levelPresets.easy);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('whackAMoleSettings', JSON.stringify(settings));
  }, [settings]);

  const updateSettings = (levelKey) => {
    setSettings(levelPresets[levelKey]);
  };


  return (
    <GameSettingsContext.Provider value={{
      settings,
      updateSettings,
      levelPresets
    }}>
      {children}
    </GameSettingsContext.Provider>
  );
};