import path from 'path';
import { defineConfig } from '@pandacss/dev';
import { preset } from '@particles/preset';

export default defineConfig({
  cwd: path.resolve(__dirname),

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [path.resolve(__dirname, './src/**/*.{js,jsx,ts,tsx}')],

  // Files to exclude
  exclude: [],

  presets: ['@pandacss/dev/presets', preset],

  staticCss: {
    recipes: {
      alert: ['*'],
      badge: ['*'],
      button: ['*'],
      card: ['*'],
      divider: ['*'],
      indicator: ['*'],
      input: ['*'],
    },
  },

  // outdir: '../styled-system',
  // importMap: {
  //   css: '@particles/panda-system/css',
  //   recipes: '@particles/panda-system/recipes',
  //   patterns: '@particles/panda-system/patterns',
  //   jsx: '@particles/panda-system/jsx',
  // },

  outdir: '@particles/panda-system',
  emitPackage: true,

  jsxFramework: 'react',
});
