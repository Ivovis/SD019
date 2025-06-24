import { SlowComponent } from "../components/SlowComponent";
import { Suspense } from "react";


export default function Fast() {
  return (
    <div className="grid  items-center justify-items-center  p-8 font-[family-name:var(--font-geist-sans)]">
      <h1>The Fast Page</h1>
      <Suspense fallback={<p className="text-orange-500">Loading...</p>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
