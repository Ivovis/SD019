import { Outlet, useParams, Link } from "react-router";

export default function UserPage() {
  let { username } = useParams();
  return (
    <>
      <h2>User: {username}</h2>
      <Link to={`/users/${username}`}>Users profile</Link>
      <Link to={`/users/${username}/posts`}>Users posts</Link>
      <Link to={`/users/${username}/likes`}>Users likes</Link>
      <Outlet />
    </>
  );
}
