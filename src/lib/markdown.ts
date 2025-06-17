import { readdirSync, readFileSync } from 'fs';
import matter, { GrayMatterFile } from 'gray-matter';
import MarkdownIt from 'markdown-it';
import markdownItFootnote from 'markdown-it-footnote';
import { join } from 'path';

const md = new MarkdownIt().use(markdownItFootnote);

export function readFolder(path: string): GrayMatterFile<string>[] {
  const files = readdirSync(path, { withFileTypes: true });

  return files
    .filter(file => file.isFile() && file.name.endsWith('.md'))
    .map((file) => {
      const filePath = join(path, file.name);
      return readMarkdownFile(filePath);
    });
}

export function readMarkdownFile(filePath: string): GrayMatterFile<string> {
  const fileContent = readFileSync(filePath, 'utf-8');
  const parsed = matter(fileContent);

  parsed.content = md.render(parsed.content);

  return parsed;
}
