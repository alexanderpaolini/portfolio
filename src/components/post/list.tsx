import { posts } from '@/lib/writing';
import { PostCard } from './card';

export function PostList() {
  return (
    <div className="space-y-8 mt-8">
      {posts.filter(x => !x.hidden).map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
