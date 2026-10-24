import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadConfig } from '@pandacss/dev/node';
import {
  componentContracts,
  validateReplacementRecipe,
  type ComponentContract,
  type ReplacementRecipe,
} from '@bend-ui/preset-base';
import { conditions } from './index';

const directory = mkdtempSync(join(tmpdir(), 'bend-contracts-'));
let recipes: Record<string, ReplacementRecipe>;

beforeAll(async () => {
  const file = join(directory, 'panda.config.ts');
  const preset = fileURLToPath(new URL('./index.ts', import.meta.url));
  writeFileSync(
    file,
    `import { createBendPreset } from ${JSON.stringify(preset)};\nexport default { presets: [createBendPreset()] };\n`,
  );
  const snapshot = await loadConfig({ cwd: process.cwd(), file });
  recipes = {
    ...snapshot.config.theme?.recipes,
    ...snapshot.config.theme?.slotRecipes,
  };
});
afterAll(() => rmSync(directory, { recursive: true, force: true }));

const cases = [
  ['button', 'button'],
  ['select', 'select'],
  ['select', 'selectDropdown'],
  ['dialog', 'dialog'],
  ['dialog', 'backdrop'],
] as const;

const errors = (
  contract: ComponentContract,
  name: string,
  recipe: ReplacementRecipe,
) =>
  validateReplacementRecipe(contract, name, recipe).filter(
    (issue) => issue.severity === 'error',
  );

// Load the real composed preset: the structural Button contributes isFull,
// while the design preset contributes spinner, treatments, size and defaults.
describe('public component recipe contracts', () => {
  it.each(cases)('accepts the resolved %s/%s recipe', (component, recipe) => {
    expect(
      validateReplacementRecipe(
        componentContracts[component],
        recipe,
        recipes[recipe],
      ),
    ).toEqual([]);
  });

  it('classifies every resolved slot without leaking behavior-only parts into recipes', () => {
    for (const component of Object.values(componentContracts)) {
      expect(JSON.parse(JSON.stringify(component))).toEqual(component);
      for (const [name, contract] of Object.entries(component.recipes)) {
        const publicSlots = component.anatomy.flatMap((part) =>
          part.kind === 'slot' && part.recipe === name ? [part.slot] : [],
        );
        const privateSlots = Object.keys(contract.privateSlots);
        expect(
          publicSlots.filter((slot) => privateSlots.includes(slot)),
        ).toEqual([]);
        expect([...new Set([...publicSlots, ...privateSlots])].sort()).toEqual(
          [...new Set(recipes[name].slots ?? [])].sort(),
        );
        for (const state of contract.states) {
          if ('condition' in state) {
            expect(conditions[state.condition.slice(1)]).toContain(
              state.selector,
            );
          }
          for (const slot of state.slots) {
            expect([...publicSlots, ...privateSlots]).toContain(slot);
          }
        }
      }
    }
  });

  it('rejects a changed namespace, recipe kind, and defaults', () => {
    const contract = componentContracts.button;
    const button = recipes['button'];
    expect(
      errors(contract, 'button', { ...button, className: 'LocalButton' }),
    ).toContainEqual(
      expect.objectContaining({
        code: 'namespace-mismatch',
        path: 'button.className',
      }),
    );
    expect(
      errors(contract, 'button', { ...button, slots: undefined }),
    ).toContainEqual(expect.objectContaining({ code: 'kind-mismatch' }));
    expect(
      errors(contract, 'button', {
        ...button,
        defaultVariants: { size: 'lg', variant: 'primary' },
      }),
    ).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: 'default-mismatch',
          path: 'button.defaultVariants.size',
        }),
        expect.objectContaining({
          code: 'default-mismatch',
          path: 'button.defaultVariants.variant',
        }),
      ]),
    );
    expect(
      errors(componentContracts.dialog, 'backdrop', {
        ...recipes['backdrop'],
        slots: ['root'],
      }),
    ).toContainEqual(expect.objectContaining({ code: 'kind-mismatch' }));
  });

  it('requires public slots and private slots that the adapter renders', () => {
    expect(
      errors(componentContracts.button, 'button', {
        ...recipes['button'],
        slots: ['root', 'icon', 'spinner'],
      }),
    ).toContainEqual(
      expect.objectContaining({
        code: 'missing-slot',
        path: 'button.slots.label',
      }),
    );
    const minimal = {
      ...recipes['select'],
      slots: ['trigger', 'valueText', 'indicator', 'control'],
    };
    expect(errors(componentContracts.select, 'select', minimal)).toEqual([]);
    expect(
      errors(componentContracts.select, 'select', {
        ...minimal,
        slots: minimal.slots.filter((slot) => slot !== 'control'),
      }),
    ).toContainEqual(
      expect.objectContaining({
        code: 'missing-slot',
        path: 'select.slots.control',
      }),
    );
  });

  it('rejects removal of values still accepted by published props', () => {
    const button = recipes['button'];
    const remaining = { ...button.variants?.['variant'] };
    delete remaining['danger'];
    expect(
      errors(componentContracts.button, 'button', {
        ...button,
        variants: { ...button.variants, variant: remaining },
      }),
    ).toContainEqual(
      expect.objectContaining({
        code: 'missing-value',
        path: 'button.variants.variant.danger',
      }),
    );
    expect(
      errors(componentContracts.dialog, 'dialog', {
        ...recipes['dialog'],
        variants: {},
      }),
    ).toContainEqual(
      expect.objectContaining({
        code: 'missing-axis',
        path: 'dialog.variants.size',
      }),
    );
  });

  it('reports new values, axes and compounds as consumer-runtime warnings', () => {
    const button = recipes['button'];
    const result = validateReplacementRecipe(
      componentContracts.button,
      'button',
      {
        ...button,
        variants: {
          ...button.variants,
          size: { ...button.variants?.['size'], jumbo: {} },
          density: { compact: {} },
        },
        compoundVariants: [
          { size: 'jumbo', css: { root: { borderWidth: '5px' } } },
        ],
      },
    );
    expect(result.every((issue) => issue.severity === 'warning')).toBe(true);
    expect(result.map((issue) => issue.code)).toEqual([
      'added-value',
      'added-axis',
      'compound-runtime',
    ]);
  });

  it('reports unknown names without looking up inherited object properties', () => {
    for (const name of ['missing', 'toString', '__proto__']) {
      expect(
        validateReplacementRecipe(componentContracts.button, name, {}),
      ).toEqual([
        expect.objectContaining({ code: 'unknown-recipe', path: name }),
      ]);
    }
  });
});
