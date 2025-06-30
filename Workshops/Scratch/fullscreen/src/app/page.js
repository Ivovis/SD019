import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="h-screen flex flex-col p-3 ">
      <Header />
      <div className="flex flex-grow m-3 p-3 bg-red-900 border-2 rounded-md ">
        Content
      </div>
      <Footer />
    </div>
  );
}
