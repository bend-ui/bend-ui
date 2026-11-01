import { defineConfig } from '@pandacss/dev';
import { createTheme } from '@bend-ui/preset';
import base from './panda.config';

const errorTheme = createTheme({ errorColor: 'purple' });

// Defaults < global consumer extension < selected Theme scope.
export default defineConfig({
  ...base,
  staticCss: {
    themes: ['consumer-proof', 'error-proof', 'danger-default-proof'],
  },
  themes: {
    'error-proof': errorTheme,
    'danger-default-proof': {
      ...errorTheme,
      semanticTokens: {
        ...errorTheme.semanticTokens,
        colors: {
          ...errorTheme.semanticTokens?.colors,
          danger: {
            ...errorTheme.semanticTokens?.colors?.danger,
            DEFAULT: { value: '#123456' },
          },
        },
      },
    },
    'consumer-proof': {
      semanticTokens: {
        colors: {
          fill: {
            DEFAULT: { value: '#7c3aed' },
            primary: { DEFAULT: { value: '#7c3aed' } },
          },
        },
        radii: { md: { value: '23px' }, lg: { value: '23px' } },
      },
    },
  },
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          fill: {
            DEFAULT: { value: '#0f766e' },
            primary: { DEFAULT: { value: '#0f766e' } },
          },
        },
        radii: { md: { value: '19px' }, lg: { value: '19px' } },
      },
    },
  },
});
