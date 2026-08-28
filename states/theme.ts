import { create } from "zustand";

type Theme = "dark" | "light";

const key = "theme";

type ThemeState = {
  theme: Theme;
  loadTheme: () => void;
  toggleTheme: () => void;
};

export const useTheme = create<ThemeState>((set, get) => ({
  theme: "light",
  loadTheme: () => {
    const theme = localStorage.getItem(key);

    if (!theme || !["dark", "light"].includes(theme)) {
      return document.documentElement.setAttribute("data-theme", get().theme);
    }

    document.documentElement.setAttribute("data-theme", theme);

    set({ theme } as { theme: Theme });
  },
  toggleTheme: () => {
    const current = get().theme;
    const nextTheme = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);

    set({ theme: nextTheme });
  },
}));
