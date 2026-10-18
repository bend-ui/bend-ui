import { readFileSync } from 'node:fs';
import postcss from 'postcss';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

// The test target prepares the consumer's actual Panda output before Vitest.
// Render-only checks cannot detect recipes registered in the wrong category.
describe('consumer design preset CSS', () => {
  it('emits the custom button, badge and input slot styles', () => {
    const css = readFileSync(
      resolve(
        dirname(fileURLToPath(import.meta.url)),
        '../../styled-system/styles.css',
      ),
      'utf8',
    );
    const stylesheet = postcss.parse(css);
    for (const selector of ['.Button__root', '.Badge__root', '.Input__root']) {
      const borders: string[] = [];
      stylesheet.walkRules(selector, (rule) => {
        rule.walkDecls('border', (declaration) => {
          borders.push(declaration.value);
        });
      });
      expect(borders, selector).toContain('2px solid #18181b');
    }
  });
});
