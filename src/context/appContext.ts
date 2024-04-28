import { create } from "zustand";

interface AppStore {
  signedIn: boolean;
  toggleSignedIn: () => void;
  tagFilter: string;
  setTagFilter: (tag: string) => void;
}

const useAppStore = create<AppStore>()((set) => ({
  signedIn: false,
  toggleSignedIn: () => set((state) => ({ signedIn: !state.signedIn })),
  tagFilter: '',
  setTagFilter: (tag: string) => set({ tagFilter: tag }),
}));  

export default useAppStore;
