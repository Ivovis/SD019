"use client";

import { ThemeProvider } from "./context/ThemeContext";

export function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

// Just a note here I accedently spelt children with a capitol C
// and got a body not found error
