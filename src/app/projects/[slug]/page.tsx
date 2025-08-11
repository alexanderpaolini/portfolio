import { ProjectPageFooterNav } from "@/components/footer";
import { ProjectBody } from "@/components/project/body";
import { ProjectHeader } from "@/components/project/header";
import { getProjectBySlug } from "@/lib/projects";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const slug = (await params).slug;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project does not exist.",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      url: `/projects/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectPage(props: Params) {
  const slug = (await props.params).slug;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <main>
      <ProjectHeader
        icon={project.icon}
        title={project.title}
        date={project.date.modified || project.date.published}
      />
      <ProjectBody content={project.content} />
      <ProjectPageFooterNav />
    </main>
  );
}
