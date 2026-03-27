import { create } from "zustand";

const levelPresets = {
  easy: { moleCount: 6, speed: 1400 },
  medium: { moleCount: 9, speed: 1000 },
  hard: { moleCount: 12, speed: 600 }
};

export const useSettingsStore = create((set) => ({
  level: "medium",
  moleCount: levelPresets.medium.moleCount,
  speed: levelPresets.medium.speed,

  setLevel: (level) =>
    set({
      level,
      moleCount: levelPresets[level].moleCount,
      speed: levelPresets[level].speed
    })
}));
