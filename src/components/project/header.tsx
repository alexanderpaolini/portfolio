import { ProjectIcon } from './icon';

interface Props {
  icon?: string;
  title: string;
  date: string;
}

export function ProjectHeader({ icon, title, date }: Props) {
  return (
    <div className="flex flex-row">
      <ProjectIcon icon={icon} title={title} />
      <div className="items-center my-auto">
        <h1>{title}</h1>
        <span>{date}</span>
      </div>
    </div>
  );
}