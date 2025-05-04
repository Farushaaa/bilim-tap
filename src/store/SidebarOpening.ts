import { create } from "zustand";

interface IUseFilterSidebar {
  isOpen: boolean;
  handleSidebar: () => void;
}

export const useFilterSidebar = create<IUseFilterSidebar>()((set) => ({
  isOpen: true,
  handleSidebar: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
}));
