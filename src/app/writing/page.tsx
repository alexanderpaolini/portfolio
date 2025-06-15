import { posts } from "@/lib/writing";
import Link from "next/link";

export default async function Posts() {
  return (
    <main>
      <h1 className="border-b">Posts</h1>
      <div className="space-y-8 mt-8">
        {posts.filter(x => !x.hidden).map((post) => (
          <div key={post.slug} className="flex flex-col gap-4">
            <div className="flex-shrink-0 flex block items-start gap-2 h-auto w-auto">
              <div className="">
                <span >
                  {post.date.modified ?? post.date.published}
                </span>
                <h2>
                  <Link href={`/writing/${post.slug}`} className="link">
                    {post.title}
                  </Link>
                </h2>
                {post.tags && (
                  <span>{post.tags.join(', ')}</span>
                )}
              </div>
            </div>
            {post.description && (
              <div className="space-y-4">
                <p>{post.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
