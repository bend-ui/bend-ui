/* Every internal docs link in the MDX content must point at a page that exists. */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const contentRoot = path.resolve(__dirname, '../content/docs');
const docsLink = /\]\((\/docs(?:\/[^)\s#?]*)?)(?:[#?][^)\s]*)?\)/g;

const mdxFiles = (directory: string): string[] =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return mdxFiles(file);
    return entry.name.endsWith('.mdx') ? [file] : [];
  });

const resolvesToPage = (href: string) => {
  const slug = href.replace(/^\/docs\/?/, '').replace(/\/$/, '');
  const base = slug ? path.join(contentRoot, slug) : contentRoot;
  return (
    (slug !== '' && existsSync(`${base}.mdx`)) ||
    existsSync(path.join(base, 'index.mdx'))
  );
};

describe('docs links', () => {
  it('only links to docs pages that exist', () => {
    const broken: string[] = [];

    for (const file of mdxFiles(contentRoot)) {
      const source = readFileSync(file, 'utf8');
      for (const match of source.matchAll(docsLink)) {
        if (resolvesToPage(match[1])) continue;
        const line = source.slice(0, match.index).split('\n').length;
        broken.push(
          `${path.relative(contentRoot, file)}:${line} -> ${match[1]}`,
        );
      }
    }

    expect(broken).toEqual([]);
  });
});
