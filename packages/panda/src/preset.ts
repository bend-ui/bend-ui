import { defineGlobalStyles, definePreset } from '@pandacss/dev';
import { theme } from '@particles/theme';
import * as patterns from './patterns';

const globalCss = defineGlobalStyles({
  'html, body': {
    color: 'fg.onCanvas',
    bg: 'canvas',
  },
});

export const particlesPreset = definePreset({
  conditions: {
    extend: {
      light: '[data-color-mode=light] &, .light &',
      dark: '[data-color-mode=dark] &, .dark &',
    },
  },
  patterns: {
    extend: patterns,
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
            base: {
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
            base: {
              value: theme.colors.amber500,
            },
            subtle: {
              value: theme.colors.amber300,
            },
            hover: {
              value: theme.colors.amber700,
            },
          },
          neutral: {
            DEFAULT: {
              value: theme.colors.neutral,
            },
            base: {
              value: theme.colors.neutral,
            },
            subtle: {
              value: theme.colors['neutral-subtle'],
            },
            hover: {
              value: theme.colors['neutral-hover'],
            },
          },
        },
        spacing: {
          sm: { value: '{spacing.2}' },
          md: { value: '{spacing.3}' },
          lg: { value: '{spacing.5}' },
        },
      },
    },
  },
  globalCss,
});
