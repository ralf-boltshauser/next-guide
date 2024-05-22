import { executeServerAction } from "@/app/actions/postActions";
import PostItem from "../../components/PostItem";

async function getData(id: string) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Post({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const post = await getData(params.id);
  return (
    <div>
      <h2>Post {params.id}</h2>
      <form action={executeServerAction}>
        <input type="hidden" name="id" value={params.id} />
        <button>submit server action</button>
      </form>
      <PostItem id={post.id} title={post.title} body={post.body} />
    </div>
  );
}
