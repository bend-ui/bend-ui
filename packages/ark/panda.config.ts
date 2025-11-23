import path from 'path';
import { defineConfig } from '@pandacss/dev';
import { preset } from '@particles/preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    path.resolve(__dirname, './src/**/*.{js,jsx,ts,tsx}'),
    path.resolve(__dirname, '../react/src/**/*.{js,jsx,ts,tsx}'),
  ],

  // Files to exclude
  exclude: [path.resolve(__dirname, './src/**/*.spec.{js,jsx,ts,tsx}')],

  presets: [preset({ library: 'ark-ui' })],

  importMap: '@particles/styled-system',

  jsxFramework: 'react',

  lightningcss: true,

  staticCss: {
    recipes: '*',
    themes: ['*'],
  },
});
