import { posts } from '@/lib/writing';
import { PostCard } from './card';

export function PostList() {
  return (
    <div className="flex flex-col gap-6 mt-4">
      {posts.filter(x => !x.hidden).map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
