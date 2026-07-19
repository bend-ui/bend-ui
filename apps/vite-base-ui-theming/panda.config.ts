import basePreset from '@bend-ui/preset-base';
import { defineConfig } from '@pandacss/dev';
import path from 'path';
import { customDesignPreset } from './custom-design-preset';

export default defineConfig({
  cwd: path.resolve(__dirname),
  outdir: 'styled-system',
  preflight: true,
  jsxFramework: 'react',
  importMap: '@bend-ui/styled-system',
  lightningcss: true,
  presets: [basePreset, customDesignPreset],
  include: [
    path.resolve(__dirname, './src/**/*.{js,jsx,ts,tsx}'),
    path.resolve(__dirname, '../../packages/base-ui/src/**/*.{js,jsx,ts,tsx}'),
  ],
  staticCss: { recipes: '*' },
});
