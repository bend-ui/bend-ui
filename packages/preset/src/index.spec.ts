import { describe, it, expect } from 'vitest';
import { definePreset } from '@pandacss/dev';
import basePreset from '@bend-ui/preset-base';
import { createBendPreset, conditions } from './index';

/**
 * Seam B — preset builder unit tests.
 *
 * These assert the library-agnostic state-attribute contract (ADR-0002) at the
 * builder interface: a single union conditions set that covers every supported
 * adapter library, and `createBendPreset()` composing the structural + design
 * presets while merging consumer extensions.
 */

type Library = 'base-ui' | 'ark-ui' | 'react-aria';

/**
 * For each semantic condition, the native attribute form emitted by every
 * supported library that expresses that state (`null` when a library has no
 * discrete attribute for it). Verified against the pinned upstream versions.
 */
const STATE_CONTRACT: Record<string, Record<Library, string | null>> = {
  open: { 'base-ui': '[data-open]', 'ark-ui': '[data-state="open"]', 'react-aria': '[data-open]' },
  closed: { 'base-ui': '[data-closed]', 'ark-ui': '[data-state="closed"]', 'react-aria': null },
  expanded: { 'base-ui': '[data-expanded]', 'ark-ui': '[data-expanded]', 'react-aria': '[data-expanded]' },
  checked: { 'base-ui': '[data-checked]', 'ark-ui': '[data-state="checked"]', 'react-aria': null },
  unchecked: { 'base-ui': '[data-unchecked]', 'ark-ui': '[data-state="unchecked"]', 'react-aria': null },
  selected: { 'base-ui': '[data-selected]', 'ark-ui': '[data-selected]', 'react-aria': '[data-selected]' },
  disabled: { 'base-ui': '[data-disabled]', 'ark-ui': '[data-disabled]', 'react-aria': '[data-disabled]' },
  invalid: { 'base-ui': '[data-invalid]', 'ark-ui': '[data-invalid]', 'react-aria': '[data-invalid]' },
  readonly: { 'base-ui': '[data-readonly]', 'ark-ui': '[data-readonly]', 'react-aria': '[data-readonly]' },
  required: { 'base-ui': '[data-required]', 'ark-ui': '[data-required]', 'react-aria': '[data-required]' },
  highlighted: { 'base-ui': '[data-highlighted]', 'ark-ui': '[data-highlighted]', 'react-aria': null },
  pressed: { 'base-ui': null, 'ark-ui': '[data-pressed]', 'react-aria': '[data-pressed]' },
  hover: { 'base-ui': null, 'ark-ui': '[data-hover]', 'react-aria': '[data-hovered]' },
  focus: { 'base-ui': '[data-focused]', 'ark-ui': '[data-focus]', 'react-aria': '[data-focused]' },
  focusVisible: {
    'base-ui': '[data-focus-visible]',
    'ark-ui': '[data-focus-visible]',
    'react-aria': '[data-focus-visible]',
  },
  entering: {
    'base-ui': '[data-starting-style]',
    'ark-ui': '[data-state="entering"]',
    'react-aria': '[data-entering]',
  },
  exiting: {
    'base-ui': '[data-ending-style]',
    'ark-ui': '[data-state="exiting"]',
    'react-aria': '[data-exiting]',
  },
};

describe('canonical conditions set', () => {
  it('is a single flat set of string selectors (no per-library variants)', () => {
    for (const [name, selector] of Object.entries(conditions)) {
      expect(typeof selector, `condition "${name}"`).toBe('string');
    }
  });

  it.each(Object.entries(STATE_CONTRACT))(
    'condition "%s" selector covers every supported library',
    (name, byLibrary) => {
      const selector = conditions[name];
      expect(selector, `missing condition "${name}"`).toBeDefined();

      for (const [library, attribute] of Object.entries(byLibrary)) {
        if (attribute === null) continue;
        expect(
          selector as string,
          `condition "${name}" must match ${library}'s ${attribute}`,
        ).toContain(attribute);
      }
    },
  );

  it('matches native CSS pseudo-classes for interaction and availability', () => {
    expect(conditions['disabled'] as string).toContain(':disabled');
    expect(conditions['focusVisible'] as string).toContain(':focus-visible');
    expect(conditions['hover'] as string).toContain(':hover');
    expect(conditions['focus'] as string).toContain(':focus');
  });
});

describe('createBendPreset', () => {
  it('composes the structural (preset-base) and design presets', () => {
    const preset = createBendPreset();

    expect(preset.name).toBe('bend-ui');
    expect(preset.presets).toContain(basePreset);
    expect(preset.conditions?.extend).toMatchObject(conditions);
    expect(preset.theme?.extend?.recipes).toBeDefined();
    expect(preset.theme?.extend?.tokens).toBeDefined();
    expect(preset.themes).toHaveProperty('default');
  });

  it('is callable with no arguments (no required library option)', () => {
    expect(() => createBendPreset()).not.toThrow();
    expect(createBendPreset().name).toBe('bend-ui');
  });

  it('merges consumer extensions on top without clobbering Bend defaults', () => {
    const extension = definePreset({
      name: 'consumer',
      theme: { extend: { tokens: { colors: { brand: { value: '#f00' } } } } },
    });

    const preset = createBendPreset(extension);

    expect(preset.presets).toContain(extension);
    expect(preset.presets?.some((p) => (p as { name?: string }).name === 'bend-ui')).toBe(true);
  });
});
