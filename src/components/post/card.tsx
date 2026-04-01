import { Post } from "@/types";
import Link from "@/components/link";
import { PostDescription } from "./description";
import { PostTags } from "./tags";

interface Props {
  post: Post;
}

export function PostCard({ post }: Props) {
  return (
    <div className="flex flex-col">
      <div className="shrink-0 block items-start gap-2 h-auto w-auto">
        <div>
          <span>
            {post.date.modified ?? post.date.published}
          </span>
          <h2>
            <Link href={`/writing/${post.slug}`} noUnderline>
              {post.title}
            </Link>
          </h2>
          <PostTags tags={post.tags} />
        </div>
      </div>
      <PostDescription description={post.description} />
    </div>
  );
}