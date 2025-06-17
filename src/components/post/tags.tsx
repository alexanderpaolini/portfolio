interface Props {
  tags?: string[];
}

export function PostTags({ tags }: Props) {
  return tags && (
    <span>{tags.join(', ')}</span>
  );
}
