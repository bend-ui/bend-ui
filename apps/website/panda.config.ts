import { defineConfig } from '@pandacss/dev';
import { preset } from '@particles/preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    '../../packages/react/src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ark/src/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{tsx,ts,jsx}',
    './pages/**/*.{jsx,tsx}',
    './app/**/*.{jsx,tsx}',
    './theme.config.tsx',
  ],

  // Files to exclude
  exclude: [],

  presets: [preset({ library: 'ark-ui' })],

  importMap: '@particles/styled-system',

  jsxFramework: 'react',
});
