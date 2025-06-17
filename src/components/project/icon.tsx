import Image from 'next/image';

interface Props {
  icon?: string;
  title?: string;
}

export function ProjectIcon({ icon, title }: Props) {
  return icon && title && (
    <div className="flex-shrink-0 flex items-center justify-center w-18 h-18 my-auto">
      <Image
        src={icon}
        alt={title}
        width={1024}
        height={1024}
        loading="lazy"
        className="w-14 h-14 object-contain" />
    </div>
  );
}