interface Props {
  tags?: string[];
}

export function PostTags({ tags }: Props) {
  if (!tags) return <></>
  return (
    <span>{tags.join(', ')}</span>
  );
}
