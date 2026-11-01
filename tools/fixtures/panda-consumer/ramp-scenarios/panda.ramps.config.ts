import { defineConfig } from '@pandacss/dev';
import { createTheme } from '@bend-ui/preset';
import base from './panda.config';

const generated = (neutralTint?: { hue?: number; chroma?: number }) =>
  createTheme({
    generatedColors: {
      primary: { hue: 262, chroma: 0.2 },
      neutralTint,
    },
  });

export default defineConfig({
  ...base,
  staticCss: { themes: ['brand-neutral', 'independent-neutral'] },
  themes: {
    'brand-neutral': generated(),
    'independent-neutral': generated({ hue: 85, chroma: 0.012 }),
  },
  globalCss: {
    body: { backgroundColor: 'bg.page', color: 'text' },
    'input, button': { color: 'inherit' },
  },
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          fill: {
            DEFAULT: { value: '{colors.neutral.200}' },
            primary: {
              DEFAULT: { value: '{colors.primary.700}' },
              fill: { hover: { value: '{colors.primary.800}' } },
            },
          },
          text: {
            primary: {
              inverse: { strong: { value: 'oklch(0.98 0 0)' } },
            },
          },
          stroke: {
            DEFAULT: { value: '{colors.neutral.600}' },
            weak: { value: '{colors.neutral.600}' },
          },
        },
      },
    },
  },
});
