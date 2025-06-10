import { Routes, Route } from "react-router";

import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function app() {
  return (
    <>
      <h1>my app</h1>
      <Header />
      <Routes>
        <Route path={"/about"} element={<About />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/*"} element={<NotFound />} />
      </Routes>
    </>
  );
}
