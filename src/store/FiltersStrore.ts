import { create } from "zustand";

interface FilterGroup {
  id: number;
  filterTitle: string;
  isCurrent: boolean;
}

interface IUseFilters {
  filtersArr: FilterGroup[];
  handleCurrentFilter: (itemId: number) => void;
  currentFilter: string;
}

export const useFilters = create<IUseFilters>()((set) => ({
  filtersArr: [
    {
      id: 1,
      filterTitle: "С наивысшим рейтингом",
      isCurrent: false,
    },
    {
      id: 2,
      filterTitle: "С наивысшим количеством участников",
      isCurrent: false,
    },
    {
      id: 4,
      filterTitle: "Все курсы",
      isCurrent: false,
    },
  ],
  handleCurrentFilter: (itemId) =>
    set((state) => ({
      filtersArr: state.filtersArr.map((filterItem) =>
        filterItem.id === itemId
          ? { ...filterItem, isCurrent: true }
          : { ...filterItem, isCurrent: false }
      ),
    })),
  currentFilter: "Самые новые",
}));
