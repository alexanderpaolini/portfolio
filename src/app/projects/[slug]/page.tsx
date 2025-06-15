import { ProjectBody } from "@/components/project-body";
import { getProjectBySlug } from "@/lib/projects";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Params {
  params: Promise<{
    slug: string;
  }>;
};

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
      type: "article"
    },
    twitter: {
      card: "summary",
      title: project.title,
      description: project.description
    },
  };
}

export default async function ProjectPage(props: Params) {
  const slug = (await props.params).slug;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <main>
      <div className="flex flex-row">
        {project.icon && (
          <div className="flex-shrink-0 flex items-center justify-center w-18 h-18 my-auto">
            <Image
              src={project.icon}
              alt={project.title}
              width={1024}
              height={1024}
              loading="lazy"
              className="w-14 h-14 object-contain" />
          </div>
        )}
        <div className="items-center my-auto">
          <h1>{project.title}</h1>
          <span>{project.date.modified || project.date.published}</span>
        </div>
      </div>
      <ProjectBody content={project.content} />
    </main>
  );
}
