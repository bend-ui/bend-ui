/* DocsPage renders the frontmatter title as the page h1, so MDX bodies must not add another. */
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const docsDir = path.resolve(__dirname, '../content/docs');

const listMdx = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return listMdx(full);
    return entry.name.endsWith('.mdx') ? [full] : [];
  });

/** Returns the 1-based line numbers of level-1 headings rendered by an MDX body. */
const findH1Lines = (source: string): number[] => {
  const lines = source.split('\n');
  const hits: number[] = [];
  let fence: string | null = null;
  let start = 0;

  if (lines[0]?.trim() === '---') {
    const end = lines.findIndex((line, i) => i > 0 && line.trim() === '---');
    start = end === -1 ? 0 : end + 1;
  }

  for (let i = start; i < lines.length; i++) {
    const line = lines[i];
    const marker = /^\s*(`{3,}|~{3,})/.exec(line)?.[1];

    if (fence) {
      if (marker && marker[0] === fence[0] && marker.length >= fence.length) {
        fence = null;
      }
      continue;
    }
    if (marker) {
      fence = marker;
      continue;
    }

    const isAtxH1 = /^ {0,3}#(\s|$)/.test(line);
    const isHtmlH1 = /<h1[\s>]/i.test(line) || /as=["']h1["']/.test(line);
    const isSetextH1 =
      /^ {0,3}=+\s*$/.test(line) && i > start && lines[i - 1].trim() !== '';

    if (isAtxH1 || isHtmlH1 || isSetextH1) hits.push(i + 1);
  }

  return hits;
};

describe('docs pages have a single h1', () => {
  it('flags level-1 headings in the MDX body', () => {
    expect(findH1Lines('---\ntitle: Button\n---\n\n# Button\n')).toEqual([5]);
    expect(findH1Lines('Intro\n<h1>Button</h1>\n')).toEqual([2]);
    expect(findH1Lines('<Heading as="h1">Button</Heading>\n')).toEqual([1]);
    expect(findH1Lines('Button\n======\n')).toEqual([2]);
  });

  it('ignores frontmatter, lower headings and fenced code', () => {
    const source = [
      '---',
      'title: Button',
      '---',
      '## Usage',
      '```tsx',
      '# not a heading',
      '<h1>Example</h1>',
      '```',
      '~~~',
      '<Heading as="h1">Example</Heading>',
      '~~~',
    ].join('\n');

    expect(findH1Lines(source)).toEqual([]);
  });

  it.each(listMdx(docsDir).map((file) => [path.relative(docsDir, file), file]))(
    '%s leaves the h1 to the layout title',
    (_name, file) => {
      expect(findH1Lines(readFileSync(file, 'utf8'))).toEqual([]);
    },
  );
});
