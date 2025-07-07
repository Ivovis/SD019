"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={theme}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      Toggle Theme
    </button>
  );
}
