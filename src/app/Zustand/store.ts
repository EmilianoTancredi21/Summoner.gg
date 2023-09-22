import {create} from 'zustand';
import {Ichamps} from "../../types/champs.types";

export interface AppState {
  champs: Ichamps[];
  favorites: Ichamps[];
  setChamps: (champs: Ichamps[]) => void;
}

export const useAppStore = create<AppState>((set) => ({
  champs: [],
  favorites: [],
  setChamps: (champs) => set({ champs }),
}));
