import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface FrontMatter {
  [prop: string]: string;
}

export interface MarkdownDocument {
  frontMatter: FrontMatter;
  content: string;
}

export const getParsedFileContentBySlug = (
  slug: string,
  pagesPath: string
): MarkdownDocument => {
  const postFilePath = join(pagesPath, `${slug}.mdx`);
  const fileContents = fs.readFileSync(postFilePath);

  const { data, content } = matter(fileContents);

  return {
    frontMatter: data,
    content,
  };
};
