import Image from 'next/image';

interface Props {
  src?: string;
  alt?: string;
}

export function ProjectCardIcon({ src, alt }: Props) {
  if (!src || !alt) return <></>
  return (
    <div className="flex items-center justify-center w-14 h-14 my-auto">
      <Image
        src={src}
        alt={alt}
        width={1024}
        height={1024}
        loading="lazy"
        className="w-12 h-12 object-contain"
      />
    </div>
  );
}
