"use server";

export async function executeServerAction(formData: FormData) {
  const id = formData.get("id");
  console.log("server action id:", id);
}
