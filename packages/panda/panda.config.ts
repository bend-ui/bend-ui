import path from 'path';
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [path.resolve(__dirname, './src/**/*.{js,jsx,ts,tsx}')],

  // Files to exclude
  exclude: [],

  // presets: [path.resolve(__dirname, './src/panda.preset.ts')],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  emitPackage: true,

  // The output directory for your css system
  outdir: 'styled-system',
});
