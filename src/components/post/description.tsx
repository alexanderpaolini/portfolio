interface Props {
  description: string;
}

export function PostDescription({ description }: Props) {
  if (!description) return <></>
  return (
    <div className="space-y-4">
      <p>{description}</p>
    </div>
  );
}