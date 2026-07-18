import { defineConfig } from '@pandacss/dev';
import { createBendPreset } from '@bend-ui/preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    '../../packages/react/src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ark-ui/src/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{tsx,ts,jsx}',
    './pages/**/*.{jsx,tsx}',
    './app/**/*.{jsx,tsx}',
    './theme.config.tsx',
  ],

  // Files to exclude
  exclude: [],

  presets: [createBendPreset()],

  importMap: '@bend-ui/styled-system',

  jsxFramework: 'react',
});
