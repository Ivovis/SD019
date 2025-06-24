import { resolve } from "styled-jsx/css";

async function delay(howlong) {
  return new Promise((resolve) => {
    setTimeout(resolve, howlong);
  });
}

export async function SlowComponent() {
  await delay(3000);

  return (
    <>
      <p className="text-green-400">
        I&apos;m very slow to load, but here I am at last!
      </p>
    </>
  );
}
