import { projects } from '@/lib/projects';
import { ProjectCard } from './card';

export function ProjectList() {
  return (
    <div className="space-y-8 mt-8">
      {projects.filter(x => !x.hidden).map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}