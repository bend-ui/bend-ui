import { defineSemanticTokens } from '@pandacss/dev';
import { SemanticToken } from '@pandacss/types';
import merge from 'deepmerge';
import { ColorRamp, createColorScale } from './create-color-scale';

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export interface DefineToneTokens {
  fill?: Partial<Record<string, SemanticToken>>;
  text?: Partial<Record<string, SemanticToken>>;
  stroke?: Partial<Record<string, SemanticToken>>;
  icon?: Partial<Record<string, SemanticToken>>;
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
        value: `{colors.${tone}.400}`,
      },
      weak: {
        DEFAULT: {
          value: `{colors.${tone}.300}`,
        },
        hover: {
          value: `{colors.${tone}.400}`,
        },
      },
      weaker: {
        value: `{colors.${tone}.200}`,
      },
      hover: {
        value: `{colors.${tone}.300}`,
      },
      active: {
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
      inverse: {
        strong: {
          value: `{colors.${tone}.50}`,
        },
        weak: {
          value: `{colors.${tone}.100}`,
        },
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
        strong: {
          value: `{colors.${tone}.50}`,
        },
        weak: {
          value: `{colors.${tone}.100}`,
        },
        disabled: {
          value: `{colors.${tone}.200}`,
        },
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
        value: `{colors.${tone}.200}`,
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
        strong: {
          value: `{colors.${tone}.900}`,
        },
        weak: {
          value: `{colors.${tone}.800}`,
        },
        disabled: {
          value: `{colors.${tone}.400}`,
        },
      },
    },
    icon: {
      DEFAULT: {
        value: `{colors.${tone}.950}`,
      },
      disabled: {
        value: `{colors.${tone}.400}`,
      },
      inverse: {
        strong: {
          value: `{colors.${tone}.50}`,
        },
        weak: {
          value: `{colors.${tone}.100}`,
        },
        disabled: {
          value: `{colors.${tone}.200}`,
        },
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
    ...mergedTokens,
  });
}
