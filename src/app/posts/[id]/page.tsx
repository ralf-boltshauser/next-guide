export default function Post({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return <div>Post {params.id}</div>;
}
