import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function NewPostPage() {
  async function hangleSavePost(formData) {
    "use server";
    console.log("saving post ...");

    const title = formData.get("title");
    const content = formData.get("content");

    // my typed in code
    // await db.query("INSERT INTO posts (title,content) VALUES ($1,$2", [
    //   formData.title,
    //   formData.content,
    // ]);

    // copy pasted from workshop
    await db.query(`INSERT INTO posts (title, content) VALUES ($1, $2)`, [
      title,
      content,
    ]);

    // I used the wrong var ! adding formData. to both the varibles used in the query

    console.log("post saved");

    revalidatePath("/posts");

    redirect("/posts");
  }

  return (
    <form action={hangleSavePost}>
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" />
      <label htmlFor="content">Content</label>
      <input id="content" name="content" type="text" />
      <button type="submit">Save</button>
    </form>
  );
}
