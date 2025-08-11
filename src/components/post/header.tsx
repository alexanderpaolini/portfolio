interface Props {
  title: string;
  date?: string;
}

export function PostHeader({ title, date }: Props) {
  return (
    <div className="border-b border-gray-300">
      <h1>{title}</h1>
      <span>{date}</span>
    </div>
  );
}
