import { create } from "zustand";

export const useResultsStore = create((set) => ({
  results: [],

  addResult: (result) =>
    set((state) => ({
      results: [
        ...state.results,
        {
          id: Date.now(),
          date: new Date().toLocaleString(),
          ...result
        }
      ]
    })),

  clearResults: () => set({ results: [] })
}));
