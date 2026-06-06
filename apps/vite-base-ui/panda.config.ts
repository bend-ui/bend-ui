import { defineConfig } from '@pandacss/dev';
import { preset } from '@particles/preset';
import path from 'path';

export default defineConfig({
  preflight: true,

  cwd: path.resolve(__dirname),

  jsxFramework: 'react',

  include: [
    path.resolve(__dirname, './src/**/*.{js,jsx,ts,tsx}'),
    path.resolve(__dirname, '../../packages/react/src/**/*.{js,jsx,ts,tsx}'),
    path.resolve(__dirname, '../../packages/base-ui/src/**/*.{js,jsx,ts,tsx}'),
  ],

  exclude: [],

  presets: ['@pandacss/dev/presets', preset({ library: 'base-ui' })],

  importMap: '@particles/styled-system',

  lightningcss: true,

  staticCss: {
    themes: ['*'],
    recipes: '*',
  },
});
