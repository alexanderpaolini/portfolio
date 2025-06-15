import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

export default async function Projects() {
  return (
    <main>
      <h1 className="border-b">Projects</h1>
      <div className="space-y-8 mt-8">
        {projects.filter(x => !x.hidden).map((project) => (
          <div key={project.slug} className="flex flex-col gap-4">
            <div className="flex-shrink-0 flex block items-start gap-2 h-auto w-auto">
              {project.icon && (
                <div className="flex items-center justify-center w-14 h-14 my-auto">
                  <Image
                    src={project.icon}
                    alt={project.title}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="w-12 h-12 object-contain"
                  />
                </div>
              )}
              <div className="">
                <span >
                  {project.date.modified ?? project.date.published}
                </span>
                <h2>
                  <Link href={`/projects/${project.slug}`} className="link">
                    {project.title}
                  </Link>
                </h2>
                {project.tags && (
                  <span>{project.tags.join(', ')}</span>
                )}
              </div>
            </div>
            <div className="space-y-4">
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
