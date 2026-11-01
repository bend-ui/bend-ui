import { defineConfig } from '@pandacss/dev';
import base from './panda.config';

// Defaults < global consumer extension < selected Theme scope.
export default defineConfig({
  ...base,
  staticCss: { themes: ['consumer-proof'] },
  themes: {
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
