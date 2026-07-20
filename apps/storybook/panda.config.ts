import { defineConfig } from '@pandacss/dev';
import { createBendPreset } from '@bend-ui/preset';
import path from 'path';

export default defineConfig({
  cwd: path.resolve(__dirname),
  preflight: true,
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ariakit/src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ark-ui/src/**/*.{js,jsx,ts,tsx}',
    '../../packages/base-ui/src/**/*.{js,jsx,ts,tsx}',
    '../../packages/react-aria/src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [createBendPreset()],
  staticCss: {
    css: [{ properties: { colorPalette: ['*'] } }],
    recipes: '*',
    themes: ['default', 'stratus', 'solstice', 'volt', 'nebula', 'canopy', 'aster'],
  },
  importMap: '@bend-ui/styled-system',
  jsxFramework: 'react',
});
