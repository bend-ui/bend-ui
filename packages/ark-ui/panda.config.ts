import path from 'path';
import { defineConfig } from '@pandacss/dev';
import { createBendPreset } from '@bend-ui/preset';

export default defineConfig({
  cwd: path.resolve(__dirname),

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: ['./src/**/*.spec.{js,jsx,ts,tsx}'],

  presets: [createBendPreset()],

  importMap: '@bend-ui/styled-system',

  jsxFramework: 'react',

  lightningcss: true,

  staticCss: {
    recipes: '*',
    themes: ['*'],
  },
});
