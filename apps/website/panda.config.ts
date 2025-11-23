import { defineConfig } from '@pandacss/dev';
import { preset } from '@particles/preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    'node_modules/@particles/react/src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{tsx,ts,jsx}',
    './pages/**/*.{jsx,tsx}',
    './app/**/*.{jsx,tsx}',
    './theme.config.tsx',
  ],

  // Files to exclude
  exclude: ['node_modules/@particles/react/src/**/*.stories.{js,jsx,ts,tsx}'],

  presets: [preset()],

  importMap: '@particles/styled-system',

  jsxFramework: 'react',
});
