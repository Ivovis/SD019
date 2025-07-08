"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Contacts() {
  const { state } = useTheme();
  return (
    <div className={state.theme}>
      <h2>The Cool Dude</h2>
      <p>Instructor</p>
    </div>
  );
}
