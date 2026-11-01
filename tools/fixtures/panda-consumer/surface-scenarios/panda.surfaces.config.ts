import { defineConfig } from '@pandacss/dev';
import base from './panda.config';

export default defineConfig({
  ...base,
  staticCss: { themes: ['surface-proof'] },
  themes: {
    'surface-proof': {
      semanticTokens: {
        colors: {
          proof: {
            page: {
              value: { _light: 'oklch(0.98 0 0)', _dark: 'oklch(0.15 0 0)' },
            },
            raised: {
              value: { _light: 'oklch(0.92 0 0)', _dark: 'oklch(0.22 0 0)' },
            },
            overlay: {
              value: { _light: 'oklch(0.86 0 0)', _dark: 'oklch(0.29 0 0)' },
            },
            text: {
              value: { _light: 'oklch(0.15 0 0)', _dark: 'oklch(0.98 0 0)' },
            },
            stroke: {
              value: { _light: 'oklch(0.5 0 0)', _dark: 'oklch(0.65 0 0)' },
            },
          },
        },
      },
    },
  },
});
