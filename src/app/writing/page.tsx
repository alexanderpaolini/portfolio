import { FooterNav } from "@/components/footer";
import { PostList } from "@/components/post/list";
import { BackLink } from '@/components/link';

export default async function Posts() {
  return (
    <>
      <main>
        <BackLink href="/" />
        <h1 className="border-b-4">Posts</h1>
        <PostList />
      </main>
      <FooterNav />
    </>
  );
}
