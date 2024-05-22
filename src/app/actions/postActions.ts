"use server";

export async function executeServerAction(formData: FormData) {
  const id = formData.get("id");
  console.log("server action id:", id);
}

export async function executeServerActionFromClient({
  title,
}: {
  title: string;
}) {
  console.log("server action from client, id:", title);
}
