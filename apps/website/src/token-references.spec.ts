/* Scans the sources Panda compiles for this site, including shared recipes. */
/* eslint-disable @nx/enforce-module-boundaries */
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { token } from '@bend-ui/styled-system/tokens';

// Panda writes an unknown token name into the CSS as-is, and the browser drops
// the declaration. `strictTokens` would catch it, but the token union exceeds
// TypeScript's limits, so this test guards the color and border tokens instead.
const roots = [
  '../app',
  '../lib',
  '../src',
  '../../../packages/preset/src/recipes',
  '../../../packages/base-ui/src/components',
].map((root) => path.resolve(__dirname, root));

const colorLiteral =
  /['"`]((?:bg|fg|text|fill|stroke|icon)(?:\.[a-z][\w-]*)+)(?:\/\d+)?['"`]/g;
const borderShorthand =
  /\bborder(?:Top|Bottom|Left|Right|Inline|Block|InlineStart|InlineEnd|BlockStart|BlockEnd)?\s*[:=]\s*\{?\s*['"]([a-z][\w.-]*)['"]/g;

const sourceFiles = (directory: string): string[] =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(file);
    return /\.tsx?$/.test(entry.name) && !/\.(spec|test)\.tsx?$/.test(entry.name)
      ? [file]
      : [];
  });

describe('token references', () => {
  it('only names color and border tokens the preset defines', () => {
    const missing: string[] = [];

    for (const file of roots.flatMap(sourceFiles)) {
      const source = readFileSync(file, 'utf8');
      const where = (index: number) =>
        `${path.relative(path.resolve(__dirname, '../../..'), file)}:${
          source.slice(0, index).split('\n').length
        }`;

      for (const match of source.matchAll(colorLiteral)) {
        if (token(`colors.${match[1]}` as never) === undefined) {
          missing.push(`${where(match.index)} colors.${match[1]}`);
        }
      }
      for (const match of source.matchAll(borderShorthand)) {
        if (token(`borders.${match[1]}` as never) === undefined) {
          missing.push(`${where(match.index)} borders.${match[1]}`);
        }
      }
    }

    expect(missing).toEqual([]);
  });
});
