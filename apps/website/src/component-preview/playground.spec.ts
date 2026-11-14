import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import ts from 'typescript';
import {
  initialState,
  parseState,
  usage,
} from '../../lib/component-preview/playground';

const buttonSource = readFileSync(
  resolve(__dirname, '../../lib/component-preview/examples/button.tsx'),
  'utf8',
);
const selectSource = readFileSync(
  resolve(__dirname, '../../lib/component-preview/examples/select.tsx'),
  'utf8',
);

describe('playground state and usage', () => {
  it('rejects wrong kinds, invalid values and malformed data at the frame boundary', () => {
    expect(parseState('button', null)).toBeNull();
    expect(
      parseState('button', {
        ...initialState('button'),
        label: 'x'.repeat(121),
      }),
    ).toBeNull();
    expect(
      parseState('select', { ...initialState('select'), value: '__proto__' }),
    ).toBeNull();
    expect(
      parseState('select', { ...initialState('select'), disabled: 'false' }),
    ).toBeNull();
    expect(parseState('select', initialState('button'))).toBeNull();
    expect(parseState('avatar', {})).toBeNull();
  });

  it('serializes validated state as valid JSX with escaped text and controlled Select', () => {
    const button = parseState('button', {
      ...initialState('button'),
      label: '"<&{\n',
      size: 'lg',
      disabled: true,
    });
    const select = parseState('select', {
      ...initialState('select'),
      value: 'serif',
      size: 'sm',
      disabled: true,
    });
    expect(button?.kind).toBe('button');
    expect(select?.kind).toBe('select');
    if (!button || !select) throw new Error('valid state rejected');
    const code = usage(button, buttonSource);
    expect(code).toContain(JSON.stringify('"<&{\n'));
    expect(code).toContain('variant="primary"');
    expect(code).toContain('onClick={() => setSaved(true)}');
    expect(
      usage(button, buttonSource.replace('Ready to save.', 'Edited example.')),
    ).toContain('Edited example.');
    expect(() => usage(button, 'missing markers')).toThrow();
    expect(() =>
      usage(button, buttonSource + '/* playground:setup:start */'),
    ).toThrow();
    const selectCode = usage(select, selectSource);
    expect(selectCode).toContain('>("serif")');
    expect(selectCode).toContain('onValueChange=');
    expect(selectCode).toContain('size: "sm", disabled: true');
    for (const source of [code, selectCode]) {
      const result = ts.transpileModule(source, {
        compilerOptions: { jsx: ts.JsxEmit.ReactJSX },
        reportDiagnostics: true,
      });
      expect(
        result.diagnostics?.filter(
          (d) => d.category === ts.DiagnosticCategory.Error,
        ),
      ).toEqual([]);
    }
  });
});
