import { db } from "@/utils/dbConnection";

export default async function PostPage() {
  const posts = (await db.query(`SELECT * from posts`)).rows;

  console.log("Posts:", posts);
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
