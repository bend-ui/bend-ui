import path from 'path';
import { defineConfig } from '@pandacss/dev';
import { particlesPreset } from './packages/panda/src/preset';

export default defineConfig({
  preflight: true,

  include: [
    path.resolve(
      __dirname,
      './apps/playground-panda/pages/**/*.{js,jsx,ts,tsx}',
    ),
    path.resolve(__dirname, './packages/panda/src/**/*.{js,jsx,ts,tsx}'),
  ],

  exclude: [],

  presets: ['@pandacss/dev/presets', particlesPreset],

  emitPackage: true,
  outdir: '@particles/panda-system',
});
