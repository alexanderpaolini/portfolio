import { FooterNav } from "@/components/footer";
import { PostList } from "@/components/post/list";

export default async function Posts() {
  return (
    <main>
      <h1 className="border-b-4">Posts</h1>
      <PostList />
      <FooterNav />
    </main>
  );
}
