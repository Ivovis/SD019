export default async function PostPage({ params }) {
  const slug = await params;
  console.log(slug);
  return <h1>Post Page ID:{slug.id} </h1>;
}
