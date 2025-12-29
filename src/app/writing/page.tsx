import { FooterNav } from "@/components/footer";
import { PostList } from "@/components/post/list";
import Link from 'next/link';

export default async function Posts() {
  return (
    <main>
      <Link href="/" className="link">
        󰌍 Back
      </Link>
      <h1 className="border-b-4">Posts</h1>
      <PostList />
      <FooterNav />
    </main>
  );
}
