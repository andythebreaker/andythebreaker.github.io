import {create} from 'zustand';

// Define and export the Zustand store
export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  setBearNumber: (number) => set({ bears: number }), // New function to set bear number
}));

