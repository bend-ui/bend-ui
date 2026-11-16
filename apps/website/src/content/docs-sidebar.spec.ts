import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const docsRoot = path.resolve(__dirname, '../../content/docs');

const readMeta = (folder: string): { title: string; pages: string[] } =>
  JSON.parse(readFileSync(path.join(docsRoot, folder, 'meta.json'), 'utf8'));

const frontmatterTitle = (folder: string, page: string) =>
  /^title:\s*(.+)$/m
    .exec(readFileSync(path.join(docsRoot, folder, `${page}.mdx`), 'utf8'))?.[1]
    .trim() ?? '';

const sections = [
  'getting-started',
  'foundation',
  'components',
  'reference',
  'contributing',
];

describe('docs sidebar', () => {
  it('lists the sections in reader order', () => {
    expect(readMeta('.').pages).toEqual([
      'index',
      'about',
      ...sections,
    ]);
  });

  it('lists every page of each section exactly once', () => {
    for (const folder of sections) {
      const files = readdirSync(path.join(docsRoot, folder))
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => file.replace(/\.mdx$/, ''))
        .sort();

      expect([...readMeta(folder).pages].sort()).toEqual(files);
    }
  });

  it('lists the overview first, then components alphabetised by title', () => {
    const [first, ...components] = readMeta('components').pages;
    const titles = components.map((page) => frontmatterTitle('components', page));

    expect(first).toBe('overview');
    expect(components).not.toContain('component-preview');
    expect(components).not.toContain('generated-reference');
    expect(titles).toEqual([...titles].sort((a, b) => a.localeCompare(b, 'en')));
  });

  it('keeps contributor guides and generated tooling out of reader sections', () => {
    expect(readMeta('foundation').pages).not.toContain('creating-a-theme');
    expect(readMeta('reference').pages).toEqual(['generated-reference']);
    expect(readMeta('contributing').pages).toEqual([
      'creating-a-theme',
      'component-preview',
    ]);
  });

  it('lists foundation pages from concepts to customization', () => {
    expect(readMeta('foundation').pages).toEqual([
      'design-tokens',
      'colors',
      'typography',
      'spacing',
      'themes',
      'recipe-customization',
    ]);
  });
});
