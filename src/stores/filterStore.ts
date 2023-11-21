import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { SkillName } from "../entities/Skill";

interface FilterStore {
  currParams: SkillName[];
  addParam: (param: SkillName) => void;
  removeParam: (param: SkillName) => void;
  resetParams: () => void;
}

const useFilterStore = create<FilterStore>((set) => ({
  currParams: [],
  addParam: (param: SkillName) =>
    set((state) => ({ currParams: [...state.currParams, param] })),
  removeParam: (param: SkillName) =>
    set((state) => ({
      currParams: state.currParams.filter((p) => p !== param),
    })),
  resetParams: () => set(() => ({ currParams: [] })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Filter Store", useFilterStore);

export default useFilterStore;
