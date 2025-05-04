import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ITheme {
  isDark: boolean;
  handleTheme: () => void;
}

export const UseThemeStore = create<ITheme>()(
  persist(
    (set) => ({
      isDark: false,
      handleTheme: () =>
        set((state) => ({
          isDark: !state.isDark,
        })),
    }),
    {
      name: "theme-storage",
    }
  )
);
