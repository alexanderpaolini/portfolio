import { WritingPageFooterNav } from "@/components/footer";
import { PostBody } from "@/components/post/body";
import { PostHeader } from "@/components/post/header";
import { getPostBySlug } from "@/lib/writing";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const slug = (await params).slug;
  const project = getPostBySlug(slug);

  if (!project) {
    return {
      title: "Post Not Found",
      description: "The requested post does not exist.",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      url: `/writing/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary",
    },
  };
}

export default async function WritingPage(props: Params) {
  const slug = (await props.params).slug;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <main>
      <PostHeader
        title={post.title}
        date={post.date.modified || post.date.published}
      />
      <PostBody content={post.content} />
      <WritingPageFooterNav />
    </main>
  );
}
