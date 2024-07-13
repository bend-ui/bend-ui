import { definePreset } from '@pandacss/dev';
import basePreset from '@particles/preset-base';
import * as patterns from './patterns';
import { tokens } from './tokens';
import { semanticTokens } from './semanticTokens';
import { recipes, slotRecipes } from './recipes';
import { textStyles } from './textStyles';
import { layerStyles } from './layerStyles';
import { keyframes } from './keyframes';
import { globalCss } from './globalCss';

export const preset = definePreset({
  presets: [basePreset],
  conditions: {
    extend: {
      light: '[data-color-mode=light] &, .light &',
      dark: '[data-color-mode=dark] &, .dark &',
      closed: '&:is([data-state=closed])',
      open: '&:is([open], [data-state=open])',
      selected: '&:is([data-selected], [data-state=selected])',
      active: '&:is(:active, [data-active], [data-state=active])',
      inactive: '&:is([data-inactive], [data-state=inactive])',
      hasIcon: '&:is([data-has-icon])',
      hasIconEnd: '&:is([data-has-icon-end])',
      hasAddonStart: '&:is([data-has-addon-start])',
      hasAddonEnd: '&:is([data-has-addon-end])',
    },
  },
  patterns: {
    extend: patterns,
  },
  theme: {
    extend: {
      tokens,
      semanticTokens,
      recipes,
      slotRecipes,
      textStyles,
      layerStyles,
      keyframes,
    },
  },
  globalCss,
  themes: {
    proton: {
      semanticTokens: {
        colors: {
          primary: {
            DEFAULT: {
              value: '{colors.green.500}',
            },
          },
        },
      },
    },
    neutron: {
      semanticTokens: {
        colors: {
          neutral: {
            DEFAULT: {
              value: '{colors.stone.500}',
            },
            50: {
              value: '{colors.stone.50}',
            },
            100: {
              value: '{colors.stone.100}',
            },
            200: {
              value: '{colors.stone.200}',
            },
            300: {
              value: '{colors.stone.300}',
            },
            400: {
              value: '{colors.stone.400}',
            },
            500: {
              value: '{colors.stone.500}',
            },
            600: {
              value: '{colors.stone.600}',
            },
            700: {
              value: '{colors.stone.700}',
            },
            800: {
              value: '{colors.stone.800}',
            },
            900: {
              value: '{colors.stone.900}',
            },
          },
          primary: {
            DEFAULT: {
              value: '{colors.yellow.500}',
            },
          },
        },
      },
    },
    quark: {
      semanticTokens: {
        colors: {
          neutral: {
            DEFAULT: {
              value: '{colors.slate.500}',
            },
            50: {
              value: '{colors.slate.50}',
            },
            100: {
              value: '{colors.slate.100}',
            },
            200: {
              value: '{colors.slate.200}',
            },
            300: {
              value: '{colors.slate.300}',
            },
            400: {
              value: '{colors.slate.400}',
            },
            500: {
              value: '{colors.slate.500}',
            },
            600: {
              value: '{colors.slate.600}',
            },
            700: {
              value: '{colors.slate.700}',
            },
            800: {
              value: '{colors.slate.800}',
            },
            900: {
              value: '{colors.slate.900}',
            },
          },
          primary: {
            DEFAULT: {
              value: '{colors.rose.500}',
            },
          },
        },
      },
    },
  },
});

export const arkPreset = definePreset({
  presets: [preset],
});
