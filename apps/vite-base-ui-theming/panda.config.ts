import basePreset from '@bend-ui/preset-base';
import { defineConfig } from '@pandacss/dev';
import { customDesignPreset } from './custom-design-preset';

export default defineConfig({
  outdir: 'styled-system',
  preflight: true,
  jsxFramework: 'react',
  importMap: '@bend-ui/styled-system',
  presets: [basePreset, customDesignPreset],
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../packages/base-ui/src/**/*.{js,jsx,ts,tsx}',
  ],
  staticCss: { recipes: '*' },
});
