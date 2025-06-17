interface Props {
  description: string;
}

export function PostDescription({ description }: Props) {
  return (
    <div className="space-y-4">
      <p>{description}</p>
    </div>
  );
}