import { SlowComponent } from "../components/SlowComponent";

export default function Slow() {
  return (
    <div className="grid  items-center justify-items-center  p-8 font-[family-name:var(--font-geist-sans)]">
      <h1>The Slow Page</h1>
      <SlowComponent />
    </div>
  );
}
