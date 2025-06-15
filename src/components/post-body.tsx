interface Props {
    content: string;
}

export function PostBody({ content }: Props) {
    return (
        <div className="prose prose-stone dark:invert max-w-4xl mt-8">
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}
