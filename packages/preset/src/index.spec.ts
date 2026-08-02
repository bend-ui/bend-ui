import { describe, it, expect } from 'vitest';
import { definePreset } from '@pandacss/dev';
import basePreset from '@bend-ui/preset-base';
import {
  createBendPreset,
  conditions,
  themePersonalities,
  themePersonalityIds,
} from './index';

const getAtPath = (value: unknown, path: readonly string[]) =>
  path.reduce<unknown>((current, segment) => {
    if (typeof current !== 'object' || current === null) return undefined;
    return (current as Record<string, unknown>)[segment];
  }, value);

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
  open: {
    'base-ui': '[data-open]',
    'ark-ui': '[data-state="open"]',
    'react-aria': '[data-open]',
  },
  closed: {
    'base-ui': '[data-closed]',
    'ark-ui': '[data-state="closed"]',
    'react-aria': null,
  },
  expanded: {
    'base-ui': '[data-expanded]',
    'ark-ui': '[data-expanded]',
    'react-aria': '[data-expanded]',
  },
  checked: {
    'base-ui': '[data-checked]',
    'ark-ui': '[data-state="checked"]',
    'react-aria': null,
  },
  unchecked: {
    'base-ui': '[data-unchecked]',
    'ark-ui': '[data-state="unchecked"]',
    'react-aria': null,
  },
  selected: {
    'base-ui': '[data-selected]',
    'ark-ui': '[data-selected]',
    'react-aria': '[data-selected]',
  },
  disabled: {
    'base-ui': '[data-disabled]',
    'ark-ui': '[data-disabled]',
    'react-aria': '[data-disabled]',
  },
  invalid: {
    'base-ui': '[data-invalid]',
    'ark-ui': '[data-invalid]',
    'react-aria': '[data-invalid]',
  },
  readonly: {
    'base-ui': '[data-readonly]',
    'ark-ui': '[data-readonly]',
    'react-aria': '[data-readonly]',
  },
  required: {
    'base-ui': '[data-required]',
    'ark-ui': '[data-required]',
    'react-aria': '[data-required]',
  },
  highlighted: {
    'base-ui': '[data-highlighted]',
    'ark-ui': '[data-highlighted]',
    'react-aria': null,
  },
  pressed: {
    'base-ui': null,
    'ark-ui': '[data-pressed]',
    'react-aria': '[data-pressed]',
  },
  hover: {
    'base-ui': null,
    'ark-ui': '[data-hover]',
    'react-aria': '[data-hovered]',
  },
  focus: {
    'base-ui': '[data-focused]',
    'ark-ui': '[data-focus]',
    'react-aria': '[data-focused]',
  },
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

const BASE_MIGRATED_SLOT_RECIPES = [
  'accordion',
  'alert',
  'appShell',
  'avatar',
  'badge',
  'button',
  'buttonGroup',
  'checkbox',
  'clipboard',
  'combobox',
  'command',
  'datePicker',
  'dialog',
  'drawer',
  'input',
  'menu',
  'pagination',
  'popover',
  'radioGroup',
  'select',
  'selectDropdown',
  'toast',
  'tooltip',
] as const;

const DESIGN_MIGRATED_SLOT_RECIPES = [
  'accordion',
  'alert',
  'alertDialog',
  'angleSlider',
  'appShell',
  'avatar',
  'badge',
  'buttonGroup',
  'checkbox',
  'clipboard',
  'combobox',
  'command',
  'datePicker',
  'dialog',
  'drawer',
  'formField',
  'input',
  'menu',
  'modal',
  'pagination',
  'popover',
  'radioGroup',
  'select',
  'selectDropdown',
  'toast',
  'tooltip',
] as const;

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

  it('keeps default as the exact Stratus theme object alias', () => {
    const themes = createBendPreset().themes;

    expect(Object.keys(themes ?? {})).toEqual([
      'default',
      'stratus',
      'solstice',
      'volt',
      'nebula',
      'canopy',
      'aster',
    ]);
    expect(themes?.default).toBe(themes?.stratus);
    expect(themes).not.toHaveProperty('proton');
    expect(themes).not.toHaveProperty('neutron');
    expect(themes).not.toHaveProperty('quark');
  });

  it('resolves all six personality axes through semantic theme roles', () => {
    const themes = createBendPreset().themes;
    const axes = [
      ['semanticTokens', 'fonts', 'heading', 'value'],
      ['semanticTokens', 'radii', 'control', 'value'],
      ['semanticTokens', 'shadows', 'raised', 'value'],
      ['semanticTokens', 'sizes', 'control', 'md', 'value'],
      ['semanticTokens', 'spacing', 'md', 'value'],
      ['semanticTokens', 'durations', 'normal', 'value'],
      ['semanticTokens', 'easings', 'default', 'value'],
    ] as const;

    for (const path of axes) {
      const values = themePersonalityIds.map((id) =>
        getAtPath(themes?.[id], path),
      );

      expect(
        new Set(values).size,
        `${path.join('.')} does not vary across personalities`,
      ).toBeGreaterThan(1);
    }
  });

  it('keeps every personality-sensitive recipe value behind a semantic role', () => {
    const theme = createBendPreset().theme?.extend;
    const recipeCollections = {
      recipes: theme?.recipes,
      slotRecipes: theme?.slotRecipes,
    };
    const allowedShapeValues = new Set([
      '0',
      '100%',
      '999px',
      'control',
      'full',
      'overlay',
      'surface',
      'var(--size)',
    ]);
    const durationValues = new Set(['fast', 'normal', 'slow']);
    const easingValues = new Set(['default', 'enter', 'exit']);
    const fontFamilyValues = new Set(['body', 'code', 'heading', 'inherit']);
    const elevationValues = new Set([
      'base',
      'focusRing',
      'none',
      'overlay',
      'raised',
      'revert',
      'surface',
    ]);
    const densityProperties =
      /^(?:gap|columnGap|rowGap|p|px|py|pt|pr|pb|pl|padding|paddingX|paddingY|paddingTop|paddingRight|paddingBottom|paddingLeft|m|mx|my|mt|mr|mb|ml|margin|marginX|marginY|marginTop|marginRight|marginBottom|marginLeft)$/;
    const primitiveLength = /^-?(?:\d*\.)?\d+(?:px|r?em)?$/;

    const audit = (value: unknown, path: string[] = []) => {
      if (typeof value !== 'object' || value === null) return;

      for (const [property, child] of Object.entries(value)) {
        const childPath = [...path, property];
        const location = childPath.join('.');

        if (
          typeof child === 'string' &&
          /^(borderRadius|rounded(?:Top|Bottom|Left|Right|TopLeft|TopRight|BottomLeft|BottomRight)?)$/.test(
            property,
          )
        ) {
          expect(
            allowedShapeValues.has(child),
            `${location} bypasses the personality shape roles`,
          ).toBe(true);
        }

        if (
          typeof child === 'string' &&
          /^(borderWidth|divideX)$/.test(property)
        ) {
          expect(
            child,
            `${location} bypasses the personality border width`,
          ).not.toBe('1px');
        }

        if (property === 'transitionDuration' && typeof child === 'string') {
          expect(
            durationValues.has(child),
            `${location} bypasses the personality duration roles`,
          ).toBe(true);
        }

        if (
          property === 'transitionTimingFunction' &&
          typeof child === 'string'
        ) {
          expect(
            easingValues.has(child),
            `${location} bypasses the personality easing roles`,
          ).toBe(true);
        }

        if (property === 'transition' && typeof child === 'string') {
          expect(child, `${location} needs a semantic duration`).toContain(
            '{durations.',
          );
          expect(child, `${location} needs a semantic easing`).toContain(
            '{easings.',
          );
        }

        if (property === 'fontFamily' && typeof child === 'string') {
          expect(
            fontFamilyValues.has(child),
            `${location} bypasses the personality typography roles`,
          ).toBe(true);
        }

        if (
          /^(?:boxShadow|shadow)$/.test(property) &&
          typeof child === 'string'
        ) {
          expect(
            elevationValues.has(child),
            `${location} bypasses the personality elevation roles`,
          ).toBe(true);
        }

        if (
          densityProperties.test(property) &&
          typeof child === 'string' &&
          child !== '0'
        ) {
          expect(
            primitiveLength.test(child),
            `${location} bypasses the personality density roles`,
          ).toBe(false);
        }

        audit(child, childPath);
      }
    };

    audit(recipeCollections);

    expect(
      getAtPath(theme?.slotRecipes, ['indicator', 'base', 'root', 'size']),
    ).toBe('indicator.xs');
    expect(
      getAtPath(theme?.slotRecipes, [
        'scrollArea',
        'base',
        'scrollbar',
        '_vertical',
        'width',
      ]),
    ).toBe('scrollbar');
  });

  it('resolves representative recipe roles differently by personality', () => {
    const preset = createBendPreset();
    const themes = preset.themes;
    const slotRecipes = preset.theme?.extend?.slotRecipes;
    const cases = [
      {
        recipePath: ['button', 'variants', 'size', 'md', 'root', 'minHeight'],
        semanticCategory: 'sizes',
      },
      {
        recipePath: ['indicator', 'variants', 'size', 'md', 'root', 'width'],
        semanticCategory: 'sizes',
      },
      {
        recipePath: ['card', 'base', 'root', 'rounded'],
        semanticCategory: 'radii',
      },
    ] as const;

    for (const { recipePath, semanticCategory } of cases) {
      const role = getAtPath(slotRecipes, recipePath);
      expect(typeof role).toBe('string');

      const values = themePersonalityIds.map((id) =>
        getAtPath(themes?.[id], [
          'semanticTokens',
          semanticCategory,
          ...(role as string).split('.'),
          'value',
        ]),
      );

      expect(
        values.every((value) => value !== undefined),
        `${recipePath.join('.')} does not resolve for every personality`,
      ).toBe(true);
      expect(
        new Set(values).size,
        `${recipePath.join('.')} does not vary by personality`,
      ).toBeGreaterThan(1);
    }
  });

  it('keeps Stratus base fallbacks sourced from the Stratus manifest', () => {
    const semanticTokens = createBendPreset().theme?.extend?.semanticTokens;
    const stratus = themePersonalities.stratus;

    expect(getAtPath(semanticTokens, ['fonts', 'body', 'value'])).toBe(
      stratus.typography.body,
    );
    expect(getAtPath(semanticTokens, ['radii', 'control', 'value'])).toBe(
      stratus.shape.control,
    );
    expect(getAtPath(semanticTokens, ['shadows', 'overlay', 'value'])).toBe(
      stratus.elevation.overlay,
    );
    expect(getAtPath(semanticTokens, ['sizes', 'control', 'md', 'value'])).toBe(
      stratus.density.controlHeights.md,
    );
    expect(getAtPath(semanticTokens, ['durations', 'normal', 'value'])).toBe(
      stratus.motion.duration.normal,
    );
    expect(
      getAtPath(semanticTokens, ['colors', 'primary', '500', 'value']),
    ).toBe('{colors.signal-blue.500}');
    expect(
      getAtPath(semanticTokens, [
        'colors',
        'text',
        'primary',
        'inverse',
        'strong',
        'value',
      ]),
    ).toBe('{colors.porcelain.50}');
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
    expect(
      preset.presets?.some((p) => (p as { name?: string }).name === 'bend-ui'),
    ).toBe(true);
  });

  it('registers every migrated selector recipe as a slot recipe', () => {
    const baseTheme = basePreset.theme?.extend;
    const designTheme = createBendPreset().theme?.extend;
    const baseSlotRecipeKeys = Object.keys(baseTheme?.slotRecipes ?? {});
    const baseRecipeKeys = Object.keys(baseTheme?.recipes ?? {});
    const designSlotRecipeKeys = Object.keys(designTheme?.slotRecipes ?? {});
    const designRecipeKeys = Object.keys(designTheme?.recipes ?? {});

    expect(baseSlotRecipeKeys).toEqual(
      expect.arrayContaining([...BASE_MIGRATED_SLOT_RECIPES]),
    );
    expect(baseRecipeKeys).not.toEqual(
      expect.arrayContaining([...BASE_MIGRATED_SLOT_RECIPES]),
    );
    expect(designSlotRecipeKeys).toEqual(
      expect.arrayContaining([...DESIGN_MIGRATED_SLOT_RECIPES]),
    );
    expect(designRecipeKeys).not.toEqual(
      expect.arrayContaining([...DESIGN_MIGRATED_SLOT_RECIPES]),
    );
  });

  it('preserves slot variants in their native slot-object shape', () => {
    const baseDrawer = basePreset.theme?.extend?.slotRecipes?.drawer;
    const designAccordion =
      createBendPreset().theme?.extend?.slotRecipes?.accordion;

    expect(baseDrawer?.slots).toEqual(['root', 'content']);
    expect(baseDrawer?.variants?.placement?.right).toMatchObject({
      content: { top: 0, right: 0, bottom: 0 },
    });
    expect(baseDrawer?.defaultVariants).toEqual({ placement: 'right' });

    expect(designAccordion?.slots).toEqual([
      'root',
      'item',
      'trigger',
      'indicator',
      'content',
    ]);
    expect(designAccordion?.variants?.attached?.true).toHaveProperty('item');
  });
});
