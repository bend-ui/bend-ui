import { defineConfig } from '@pandacss/dev';
import { createBendPreset } from '@bend-ui/preset';

export default defineConfig({
  preflight: true,

  jsxFramework: 'react',

  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ark-ui/src/**/*.{js,jsx,ts,tsx}',
  ],

  exclude: [],

  presets: [
    '@pandacss/preset-base',
    '@pandacss/preset-panda',
    createBendPreset(),
  ],

  importMap: '@bend-ui/styled-system',

  staticCss: {
    themes: ['*'],
    recipes: '*',
  },
});
