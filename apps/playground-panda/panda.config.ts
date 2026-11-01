import { createBendPreset } from '@bend-ui/preset';
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  outExtension: 'mjs',
  preflight: true,
  jsxFramework: 'react',
  importMap: '@bend-ui/styled-system',
  presets: [createBendPreset()],
  include: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    '../../packages/ark-ui/src/**/*.{ts,tsx}',
    '../../packages/base-ui/src/**/*.{ts,tsx}',
  ],
  staticCss: { recipes: '*', themes: ['*'] },
});
