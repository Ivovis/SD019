"use client";

import { motion } from "motion/react";

export default function MyComponent() {
  const path = [
    { x: 0, y: 0 },
    { x: 600, y: 0 },
    { x: 300, y: 100 },
    { x: "50%", y: "50%" },
  ];

  return (
    <>
      <section>
        <motion.div
          initial={{ scale: 0.1, x: 0, y: 0 }}
          animate={{ x: "50%", y: "50%", scale: 1 }}
          motionpath={path}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <h1>Hello world</h1>
        </motion.div>
      </section>
    </>
  );
}
