import create from 'zustand';

// Define and export the Zustand store
export const usePathStore = create((set) => ({
    parent:'',
    child:[{Type:'dir',Name:'1',Child:[{Type:'Url',Name:'1',Url:'a'}]}],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

