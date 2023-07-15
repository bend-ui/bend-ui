import { defineGlobalStyles, definePreset } from '@pandacss/dev';
import { theme } from '@particles/theme';
import { level, scrollable } from './patterns';

const globalCss = defineGlobalStyles({
  'html, body': {
    color: 'fg.onCanvas',
    bg: 'canvas',
  },
});

export const particlesPreset = definePreset({
  conditions: {
    extend: {
      light: '[data-color-mode=light] &',
      dark: '[data-color-mode=dark] &',
    },
  },
  patterns: {
    extend: {
      scrollable,
      level,
    },
  },
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          fg: {
            onCanvas: {
              value: {
                base: theme.colors['on-canvas'],
                _dark: theme.colors.white,
              },
            },
            onSurface: {
              value: {
                base: theme.colors['on-surface'],
                _dark: theme.colors.white,
              },
            },
            onPrimary: {
              value: theme.colors['on-primary'],
            },
          },
          canvas: {
            DEFAULT: {
              value: {
                base: theme.colors.shark50,
                _dark: theme.colors.shark900,
              },
            },
          },
          surface: {
            DEFAULT: {
              value: {
                base: theme.colors.shark100,
                _dark: theme.colors.shark800,
              },
            },
          },
          primary: {
            DEFAULT: {
              value: theme.colors.primary,
            },
            subtle: {
              value: theme.colors['primary-subtle'],
            },
            hover: {
              value: theme.colors['primary-hover'],
            },
          },
          secondary: {
            DEFAULT: {
              value: theme.colors.amber500,
            },
          },
        },
      },
    },
  },
  globalCss,
});
