import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <p>
        You have an error in your SQL syntax; check the manual that corresponds
        to your MySQL server version for the right syntax to use near
        &apos;\admin-modules\&apos; at line 1
      </p>
      <Link to={"/"}>Home</Link>
    </>
  );
}
