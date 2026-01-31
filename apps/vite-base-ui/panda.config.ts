import { defineConfig } from '@pandacss/dev';
import { preset } from '@particles/preset';

export default defineConfig({
  preflight: true,

  jsxFramework: 'react',

  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../packages/react/src/**/*.{js,jsx,ts,tsx}',
    '../../packages/base-ui/src/**/*.{js,jsx,ts,tsx}',
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
