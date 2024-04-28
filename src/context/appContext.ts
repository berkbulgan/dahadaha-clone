import { create } from "zustand";

interface AppStore {
  signedIn: boolean;
  toggleSignedIn: () => void;
  tagFilter: string;
  setTagFilter: (tag: string) => void;
  promotionIDs: {
    id: number;
    type: string[];
  }[];
  pushPromotionID: (id: number, type: string[]) => void;
}

const useAppStore = create<AppStore>()((set) => ({
  signedIn: false,
  toggleSignedIn: () => set((state) => ({ signedIn: !state.signedIn })),
  tagFilter: '',
  setTagFilter: (tag: string) => set({ tagFilter: tag }),
  promotionIDs: [],
  pushPromotionID: (id: number, type: string[]) => set((state) => ({ promotionIDs: [...state.promotionIDs, { id, type }] })),
}));  

export default useAppStore;
