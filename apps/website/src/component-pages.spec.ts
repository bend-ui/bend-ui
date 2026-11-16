/* Guards the component pages: snippets stay pasteable and prose stays current. */
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const componentsDir = path.resolve(__dirname, '../content/docs/components');

// Tooling pages document the docs site itself, not a component.
const excluded = new Set(['component-preview.mdx', 'generated-reference.mdx']);

const pages = readdirSync(componentsDir)
  .filter((name) => name.endsWith('.mdx') && !excluded.has(name))
  .sort()
  .map((name) => ({
    name,
    source: readFileSync(path.join(componentsDir, name), 'utf8'),
  }));

const codeBlocks = (source: string): { line: number; code: string }[] => {
  const blocks: { line: number; code: string }[] = [];
  const fence = /^```(?:tsx|jsx)\b[^\n]*\n([\s\S]*?)^```\s*$/gm;
  for (const match of source.matchAll(fence)) {
    const line = source.slice(0, match.index).split('\n').length;
    blocks.push({ line, code: match[1] });
  }
  return blocks;
};

// Prose with its code blocks removed.
const prose = (source: string): string =>
  source.replace(/^```[\s\S]*?^```\s*$/gm, '');

const historyPhrasing = [
  /\bformer(ly)?\b/i,
  /\bno longer\b/i,
  /\bpreviously\b/i,
  /\bv0 reference contract\b/i,
  /\bdemo default\b/i,
  /\bit now\b/i,
  /\bnow (aliases|forwards|renders|accepts)\b/i,
  /\bis removed\b/i,
];

describe('component pages', () => {
  it('finds component pages to check', () => {
    expect(pages.length).toBeGreaterThan(10);
  });

  it.each(pages)(
    '$name: every snippet using a component imports it',
    ({ source }) => {
      const missing = codeBlocks(source)
        .filter(({ code }) => /<[A-Z]/.test(code) && !/^import\s/m.test(code))
        .map(({ line }) => `code block at line ${line}`);
      expect(missing).toEqual([]);
    },
  );

  it.each(pages)(
    '$name: prose describes current behavior only',
    ({ source }) => {
      const text = prose(source);
      const hits = historyPhrasing
        .filter((pattern) => pattern.test(text))
        .map(String);
      expect(hits).toEqual([]);
    },
  );
});
