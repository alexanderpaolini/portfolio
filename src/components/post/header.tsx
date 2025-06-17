interface Props {
  title: string;
  date?: string;
}

export function PostHeader({ title, date }: Props) {
  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
    </>
  );
}