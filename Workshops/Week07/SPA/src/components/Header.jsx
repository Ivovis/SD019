import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <h1>Header</h1>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        {/*   <a href="/contact">Contact with anchor</a> */}
        {/* an anchor tag seems to work, but not recommend it */}
      </nav>
    </>
  );
}
