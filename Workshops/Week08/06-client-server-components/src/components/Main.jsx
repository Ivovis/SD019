import Button from "./Button";
import Search from "./Search";
import "./Main.css";

export default function Main() {
  return (
    <>
      <div className="NavBar">
        <nav>
          <Search />
        </nav>
      </div>
      <div className="mainContent">
        <h1>Content</h1>
        <div>
          <h1>Content 1</h1>
          <p>Content text</p>
          <Button />
        </div>
        <div>
          <h1>Content 2</h1>
          <p>Content text</p>
          <Button />
        </div>
        <div>
          <h1>Content 3</h1>
          <p>Content text</p>
          <Button />
        </div>
      </div>
    </>
  );
}
