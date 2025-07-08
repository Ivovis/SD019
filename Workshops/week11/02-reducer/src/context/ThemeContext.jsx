// import context tools

import { createContext, useContext } from "react";
import { useReducer } from "react";

function themeReducer(state, action) {
  switch (action.type) {
    case "light":
      return { ...state, theme: (state.theme = "light") };
    case "dark":
      return { ...state, theme: (state.theme = "dark") };
    case "colourblind":
      return { ...state, theme: (state.theme = "colourblind") };
    case "dyslexia":
      return { ...state, theme: (state.theme = "dyslexia") };
    default:
      return { ...state, theme: (state.theme = "light") };
  }
}

const ThemeContext = createContext("light");

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { theme: "" });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
