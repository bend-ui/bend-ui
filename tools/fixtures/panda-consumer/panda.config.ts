import { defineConfig, definePreset } from '@pandacss/dev';

const consumerBrand = definePreset({
  name: 'consumer-brand',
  theme: {
    extend: { tokens: { colors: { consumer: { value: '#6d28d9' } } } },
  },
});

export default defineConfig({
  designSystem: '@bend-ui/base-ui',
  presets: [consumerBrand],
  include: ['./src/**/*.{ts,tsx}'],
  outdir: 'styled-system',
  jsxFramework: 'react',
  preflight: true,
  theme: {
    extend: {
      tokens: {
        radii: { md: { value: '19px' } },
      },
      semanticTokens: {
        colors: {
          fill: { primary: { DEFAULT: { value: '{colors.consumer}' } } },
        },
      },
    },
  },
});
