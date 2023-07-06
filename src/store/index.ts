"use client";
import { create } from "zustand";

interface IStore {
  themeMode: "light" | "dark";
  toggleTheme: (newTheme: "light" | "dark") => void;
  i18n: "cn" | "en" | "jp";
  toggleI18n: (newI18n: "cn" | "en" | "jp") => void;
  hash: string;
  toggleHash: (newHash: string) => void;
}

export const useStore = create<IStore>((set) => ({
  themeMode: "light",
  toggleTheme: (newTheme) => set(() => ({ themeMode: newTheme })),
  i18n: "cn",
  toggleI18n: (newI18n) => set(() => ({ i18n: newI18n })),
  hash: "",
  toggleHash: (newHash) => set(() => ({ hash: newHash })),
}));
