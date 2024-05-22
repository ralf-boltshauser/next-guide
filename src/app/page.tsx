import Link from "next/link";

export default function Home() {
  console.log("root page, rendered on the server");
  return (
    <div>
      <h2 className="mb-2">root page</h2>
      <Link className="border-2 p-1" href="/posts">
        View Posts
      </Link>
    </div>
  );
}
