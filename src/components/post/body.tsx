interface Props {
  content: string;
}

export function PostBody({ content }: Props) {
  return (
    <div className="prose prose-stone max-w-4xl mt-4 dark:prose-invert">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
