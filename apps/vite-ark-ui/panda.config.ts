import { defineConfig } from '@pandacss/dev';
import { createBendPreset } from '@bend-ui/preset';
import path from 'path';

export default defineConfig({
  preflight: true,

  cwd: path.resolve(__dirname),

  jsxFramework: 'react',

  include: [
    path.resolve(__dirname, './src/**/*.{js,jsx,ts,tsx}'),
    path.resolve(__dirname, '../../packages/ark-ui/src/**/*.{js,jsx,ts,tsx}'),
  ],

  exclude: [],

  presets: ['@pandacss/dev/presets', createBendPreset()],

  importMap: '@bend-ui/styled-system',

  lightningcss: true,

  staticCss: {
    themes: ['*'],
    recipes: '*',
  },
});
