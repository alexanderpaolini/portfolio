import { join } from 'path';
import { readFolder } from './markdown';

const WRITING_FOLDER = join(process.cwd(), 'src', 'writing');

interface Post {
    title: string;
    description: string;
    content: string;
    slug: string;
    date: {
        published: string;
        modified?: string;
    }
    hidden?: boolean;
    tags?: string[];
}

export function readPosts(): Post[] {
    const posts = readFolder(WRITING_FOLDER);

    return posts
        .map((post) => {
            return {
                title: post.data.title,
                description: post.data.description,
                content: post.content,
                slug: post.data.slug,
                date: {
                    published: post.data.published,
                    modified: post.data.modified
                },
                tags: post.data.tags || [],
                hidden: post.data.hidden || false
            } as Post;
        })
        .sort((a, b) => {
            const aDate = a.date.modified || a.date.published;
            const bDate = b.date.modified || b.date.published;
            if (aDate && bDate) {
                return new Date(bDate).getTime() - new Date(aDate).getTime();
            }
            return 0;
        });
}

export const posts = readPosts()

export function getPostBySlug(slug?: string): Post | undefined {
    if (!slug) return undefined;
    return posts.find(post => post.slug === slug);
}