import Link from "next/link";
import PostItem from "../components/PostItem";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const dynamic = "force-dynamic";

export default async function Posts() {
  const posts = await getData();
  // only take 3 posts
  posts.splice(3);
  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts.map((post: any) => (
          <PostItem
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
      <Link href={"/"}>Back to home</Link>
    </div>
  );
}
