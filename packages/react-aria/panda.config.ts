import { defineConfig } from '@pandacss/dev';
import { createBendPreset } from '@bend-ui/preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  presets: [
    '@pandacss/preset-base',
    '@pandacss/preset-panda',
    createBendPreset(),
  ],

  staticCss: {
    recipes: '*',
  },

  importMap: '@bend-ui/styled-system',

  jsxFramework: 'react',
});
