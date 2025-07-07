import Image from "next/image";
import ThemeButton from "./components/ThemeButton";
import Contacts from "./components/Contacts";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <hr></hr>
      <ThemeButton />
      <Contacts />
    </>
  );
}
