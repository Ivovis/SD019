"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeButton() {
  const { state, dispatch } = useTheme();
  return (
    <>
      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "light" });
        }}
      >
        Light
      </button>
      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "dark" });
        }}
      >
        Dark
      </button>
      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "colourblind" });
        }}
      >
        colourblind
      </button>
      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "dyslexia" });
        }}
      >
        dyslexia
      </button>
    </>
  );
}
