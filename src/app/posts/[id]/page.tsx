import { executeServerAction } from "@/app/actions/postActions";

export default function Post({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div>
      <h2>Post {params.id}</h2>
      <form action={executeServerAction}>
        <button>submit server action</button>
      </form>
    </div>
  );
}
