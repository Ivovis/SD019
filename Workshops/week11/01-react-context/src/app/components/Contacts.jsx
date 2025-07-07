"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Contacts() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <h2>The Cool Dude</h2>
      <p>Instructor</p>
    </div>
  );
}
