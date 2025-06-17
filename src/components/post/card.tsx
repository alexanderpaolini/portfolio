import { Post } from "@/types";
import Link from "next/link";
import { PostDescription } from "./description";
import { PostTags } from "./tags";

interface Props {
  post: Post;
}

export function PostCard({ post }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex-shrink-0 flex block items-start gap-2 h-auto w-auto">
        <div>
          <span>
            {post.date.modified ?? post.date.published}
          </span>
          <h2>
            <Link href={`/writing/${post.slug}`} className="link">
              {post.title}
            </Link>
          </h2>
          <PostTags tags={post.tags} />
        </div>
      </div>
      {post.description && (
        <PostDescription description={post.description} />
      )}
    </div>
  );
}