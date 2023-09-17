import { defineSemanticTokens } from '@pandacss/dev';
import { theme } from '@particles/theme';

export const semanticTokens = defineSemanticTokens({
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
          base: '{colors.shark.50}',
          _dark: '{colors.shark.900}',
        },
      },
    },
    surface: {
      DEFAULT: {
        value: {
          base: '{colors.shark.100}',
          _dark: '{colors.shark.800}',
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
      fg: {
        value: theme.colors['on-primary'],
      },
    },
    secondary: {
      DEFAULT: {
        value: '{colors.amber.500}',
      },
      base: {
        value: '{colors.amber.500}',
      },
      subtle: {
        value: '{colors.amber.300}',
      },
      hover: {
        value: '{colors.amber.700}',
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
    divider: {
      DEFAULT: {
        value: {
          base: '{colors.shark.100}',
          _dark: '{colors.shark.700}',
        },
      },
      subtle: {
        value: '{colors.shark.600}',
      },
    },
  },
  spacing: {
    sm: { value: '{spacing.2}' },
    md: { value: '{spacing.3}' },
    lg: { value: '{spacing.5}' },
  },
  fonts: {
    body: { value: '{fonts.sans}' },
    heading: { value: '{fonts.sans}' },
  },
});
