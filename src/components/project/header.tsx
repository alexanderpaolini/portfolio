import Link from 'next/link';
import { ProjectIcon } from "./icon";

interface Props {
  icon?: string;
  title: string;
  date: string;
}

export function ProjectHeader({ icon, title, date }: Props) {
  return (
    <div className="flex flex-row border-b-4 border-gray-300">
      <ProjectIcon icon={icon} title={title} />
      <div className="items-center my-auto">
        <Link href="/projects" className="link">
          󰌍 Back
        </Link>
        <h1>{title}</h1>
        <span>{date}</span>
      </div>
    </div>
  );
}
