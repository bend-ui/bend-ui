import { defineSemanticTokens } from '@pandacss/dev';
import { Token } from '@pandacss/types';
import merge from 'deepmerge';
import { ColorRamp, createColorScale } from './create-color-scale';

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export interface DefineToneTokens {
  fill?: Partial<
    Record<'default' | 'hover' | 'active' | 'disabled', Token<'color'>>
  >;
  text?: Partial<Record<'default' | 'inverse' | 'disabled', Token<'color'>>>;
  stroke?: Partial<Record<'default' | 'subtle', Token<'color'>>>;
  icon?: Partial<Record<'default' | 'inverse', Token<'color'>>>;
}

export interface DefineToneOptions {
  scale: string;
  baseShade?: ColorRamp;
  overrides?: DeepPartial<DefineToneTokens>;
}

const generateDefaultTokens = (tone: string) =>
  defineSemanticTokens.colors({
    fill: {
      DEFAULT: {
        value: `{colors.${tone}.500}`,
      },
      strong: {
        value: `{colors.${tone}.600}`,
      },
      weak: {
        value: `{colors.${tone}.700}`,
      },
      weaker: {
        value: `{colors.${tone}.800}`,
      },
      hover: {
        value: `{colors.${tone}.600}`,
      },
      press: {
        value: `{colors.${tone}.700}`,
      },
      focus: {
        value: `{colors.${tone}.800}`,
      },
      disabled: {
        value: `{colors.${tone}.400}`,
      },
      selected: {
        value: `{colors.${tone}.500}`,
      },
    },
    text: {
      DEFAULT: {
        value: `{colors.${tone}.900}`,
      },
      strong: {
        value: `{colors.${tone}.900}`,
      },
      weak: {
        value: `{colors.${tone}.800}`,
      },
      weaker: {
        value: `{colors.${tone}.700}`,
      },
      inverse: {
        value: `{colors.${tone}.900}`,
      },
      disabled: {
        value: `{colors.${tone}.400}`,
      },
      selected: {
        value: `{colors.${tone}.500}`,
      },
    },
    stroke: {
      DEFAULT: {
        value: `{colors.${tone}.500}`,
      },
      strong: {
        value: `{colors.${tone}.600}`,
      },
      weak: {
        value: `{colors.${tone}.700}`,
      },
      weaker: {
        value: `{colors.${tone}.800}`,
      },
      disabled: {
        value: `{colors.${tone}.400}`,
      },
      focus: {
        value: `{colors.${tone}.800}`,
      },
      selected: {
        value: `{colors.${tone}.500}`,
      },
      inverse: {
        value: `{colors.${tone}.900}`,
      },
    },
    icon: {
      DEFAULT: {
        value: `{colors.${tone}.950}`,
      },
      inverse: {
        value: `{colors.${tone}.50}`,
      },
    },
  });

type ToneTokens = ReturnType<typeof generateDefaultTokens>;

export function defineTone(name: string, options: DefineToneOptions) {
  const { scale, baseShade = '500', overrides = {} } = options;

  const toneRamp = createColorScale(scale, baseShade);

  const defaultTokens = generateDefaultTokens(name);

  const mergedTokens = merge(defaultTokens, overrides, {
    // Stop merging when we hit a 'value' property (leaf nodes)
    isMergeableObject: (value: unknown) =>
      typeof value === 'object' &&
      value !== null &&
      !('value' in value) &&
      !Array.isArray(value),
  }) as ToneTokens;

  return defineSemanticTokens.colors({
    ...toneRamp,
    DEFAULT: {
      value: `{colors.${name}.${baseShade}}`,
    },
    ...mergedTokens,
  });
}
