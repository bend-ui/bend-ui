import path from 'path';
import { defineConfig } from '@pandacss/dev';
import { particlesPreset } from './src';

export default defineConfig({
  cwd: path.resolve(__dirname),

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [path.resolve(__dirname, './src/**/*.{js,jsx,ts,tsx}')],

  // Files to exclude
  exclude: [],

  presets: ['@pandacss/dev/presets', particlesPreset],

  emitPackage: true,
  outdir: '@particles/panda-system',
  jsxFramework: 'react',
});
