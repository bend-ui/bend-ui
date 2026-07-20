import { defineConfig } from '@pandacss/dev';
import { createBendPreset } from '@bend-ui/preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    '../../packages/base-ui/src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{tsx,ts,jsx}',
    './lib/**/*.{tsx,ts,jsx}',
    './pages/**/*.{jsx,tsx}',
    './app/**/*.{jsx,tsx}',
  ],

  // Files to exclude
  exclude: [],

  presets: [createBendPreset()],

  staticCss: {
    themes: ['default', 'stratus', 'solstice', 'volt', 'nebula', 'canopy', 'aster'],
  },

  importMap: '@bend-ui/styled-system',

  jsxFramework: 'react',
});
