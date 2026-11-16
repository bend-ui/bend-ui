/* Every internal docs link in the MDX content must point at a page that exists. */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const contentRoot = path.resolve(__dirname, '../content/docs');
// Destination, optional #hash or ?query, then an optional "title".
const docsLink =
  /\]\((\/docs(?:\/[^)\s#?]*)?)(?:[#?][^)\s]*)?(?:\s+"[^"]*")?\)/g;

const docsLinks = (source: string) =>
  Array.from(source.matchAll(docsLink), (match) => ({
    href: match[1],
    index: match.index,
  }));

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
  it('extracts links with and without a title', () => {
    expect(
      docsLinks(
        '[A](/docs/a) [B](/docs/b#part) [C](/docs/c "Title") [D](/docs "Home")',
      ).map((link) => link.href),
    ).toEqual(['/docs/a', '/docs/b', '/docs/c', '/docs']);
  });

  it('only links to docs pages that exist', () => {
    const broken: string[] = [];

    for (const file of mdxFiles(contentRoot)) {
      const source = readFileSync(file, 'utf8');
      for (const { href, index } of docsLinks(source)) {
        if (resolvesToPage(href)) continue;
        const line = source.slice(0, index).split('\n').length;
        broken.push(`${path.relative(contentRoot, file)}:${line} -> ${href}`);
      }
    }

    expect(broken).toEqual([]);
  });
});
