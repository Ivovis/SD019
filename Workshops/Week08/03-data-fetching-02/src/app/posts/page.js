import Link from "next/link";

export default async function PostPage({ searchParams }) {
  const query = await searchParams;
  console.log("searchparams:", query);

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  if (query.sort === "desc") {
    posts.reverse();
  }

  return (
    <div>
      <h2></h2>
      <Link href="/posts?sort=desc"> Sort desending </Link>
      <Link href="/posts?sort=asc"> Sort assending </Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id} {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
