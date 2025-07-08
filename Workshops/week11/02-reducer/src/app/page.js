import Image from "next/image";
import ThemeButton from "@/components/ThemeButton";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <hr></hr>
      <div className="flex gap-2 m-2">
        <ThemeButton />
      </div>
      <div className="m-10">
        <Contacts />
      </div>
    </>
  );
}
