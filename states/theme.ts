import { create } from "zustand";

type Theme = "dark" | "light";

const key = "theme";

type ThemeState = {
  theme: Theme;
  loadTheme: () => void;
  toggleTheme: () => void;
};

export const useTheme = create<ThemeState>((set, get) => ({
  theme: "dark",

  loadTheme: () => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem(key) as Theme | null;
    const initialTheme =
      savedTheme && ["dark", "light"].includes(savedTheme)
        ? savedTheme
        : get().theme;

    requestAnimationFrame(() => {
      document.documentElement.setAttribute("data-theme", initialTheme);
    });

    if (get().theme !== initialTheme) {
      set({ theme: initialTheme });
    }
  },

  toggleTheme: () => {
    const current = get().theme;
    const nextTheme = current === "dark" ? "light" : "dark";

    requestAnimationFrame(() => {
      document.documentElement.setAttribute("data-theme", nextTheme);
    });

    localStorage.setItem(key, nextTheme);

    set({ theme: nextTheme });
  },
}));
