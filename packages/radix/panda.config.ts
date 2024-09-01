import path from 'path';
import { defineConfig } from '@pandacss/dev';
import { preset } from '@particles/preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [path.resolve(__dirname, './src/**/*.{js,jsx,ts,tsx}')],

  // Files to exclude
  exclude: [],

  presets: ['@pandacss/dev/presets', preset],

  staticCss: {
    recipes: '*',
  },

  importMap: '@particles/styled-system',

  jsxFramework: 'react',
});
