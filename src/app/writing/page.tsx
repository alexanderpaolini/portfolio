import { PostList } from '@/components/post/list';

export default async function Posts() {
  return (
    <main>
      <h1 className="border-b">Posts</h1>
      <PostList />
    </main>
  );
}
