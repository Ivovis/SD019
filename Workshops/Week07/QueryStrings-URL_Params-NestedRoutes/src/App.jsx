import "./App.css";
import { Routes, Route, Link } from "react-router";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";
import UserLikesPage from "./Pages/UserLikesPage";
import UserPostsPage from "./Pages/UserPostsPage";

export default function App() {
  return (
    <>
      <h1>Welcome to my website</h1>
      <nav>
        <Link to="/About">About</Link> | <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/About" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/users/:username" element={<UserPage />} />
        <Route path="posts" element={<UserPostsPage />} />
        <Route path="likes" element={<UserLikesPage />} />
      </Routes>
    </>
  );
}
