import Link from "next/link";
import { ActiveLink } from "./components/ActiveLink";

export default function Home() {
  return (
    <div className="grid  items-center justify-items-center  p-8 font-[family-name:var(--font-geist-sans)]">
      <ActiveLink href="/fast">Fast</ActiveLink>
      <Link href="/slow">Slow</Link>
    </div>
  );
}
