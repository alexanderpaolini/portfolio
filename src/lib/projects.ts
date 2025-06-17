import { Project } from '@/types';
import { join } from 'path';
import { readFolder } from './markdown';

const PROJECTS_FOLDER = join(process.cwd(), 'src', 'projects');

export function readProjects(): Project[] {
  const projects = readFolder(PROJECTS_FOLDER);
  return projects
    .map((project) => {
      return {
        title: project.data.title,
        description: project.data.description,
        content: project.content,
        slug: project.data.slug,
        hidden: project.data.hidden || false,
        date: {
          published: project.data.published,
          modified: project.data.modified
        },
        tags: project.data.tags || [],
        icon: project.data.icon || undefined
      } as Project;
    })
    .sort((a, b) => {
      if (a.favor !== b.favor) {
        return b.favor - a.favor;
      }
      if (a.date.modified && b.date.modified) {
        return new Date(b.date.modified).getTime() - new Date(a.date.modified).getTime();
      }
      return new Date(b.date.published).getTime() - new Date(a.date.published).getTime();
    });
}

export const projects = readProjects();

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}
