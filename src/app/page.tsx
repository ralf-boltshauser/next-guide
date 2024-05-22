import Link from "next/link";

export default function Home() {
  console.log("root page, rendered on the server");
  return (
    <div>
      <h2>root page</h2>
      <Link href="/posts">View Posts</Link>
    </div>
  );
}
