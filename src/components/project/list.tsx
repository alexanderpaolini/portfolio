import { projects } from "@/lib/projects";
import { ProjectCard } from "./card";

export function ProjectList() {
  return (
    <div className="flex flex-col gap-6 mt-4">
      {projects
        .filter((x) => !x.hidden)
        .map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
    </div>
  );
}
