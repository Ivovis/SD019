import Image from "next/image";
import myImage from "@/../public/notadog.png";

export default function Home() {
  return (
    <>
      <div>
        <h1>The Home Page</h1>
        <Image
          src={myImage}
          alt="the most beautiful image you have every seen"
          placeholder="blur"
          width="100"
        />
      </div>
    </>
  );
}
