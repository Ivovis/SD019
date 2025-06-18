"use client";

import { useState } from "react";

export default function Button() {
  const [likes, setLikes] = useState(0);

  function handleClicks() {
    setLikes(likes + 1);
  }

  return (
    <>
      <button onClick={handleClicks}>Like It?</button>
      <p>{likes}</p>
    </>
  );
}
