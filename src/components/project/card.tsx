import { Project } from '@/types';
import { ProjectCardIcon } from './card-icon';
import { ProjectDescription } from './description';
import Link from 'next/link';
import { ProjectTags } from './tags';

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex-shrink-0 flex block items-start gap-2 h-auto w-auto">
        <ProjectCardIcon src={project.icon} alt={project.title} />
        <div>
          <span>
            {project.date.modified ?? project.date.published}
          </span>
          <h2>
            <Link href={`/projects/${project.slug}`} className="link">
              {project.title}
            </Link>
          </h2>
          <ProjectTags tags={project.tags} />
        </div>
      </div>
      <ProjectDescription description={project.description} />
    </div>
  );
}