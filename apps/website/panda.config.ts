import { defineConfig } from '@pandacss/dev';
import { createBendPreset } from '@bend-ui/preset';

export default defineConfig({
  outExtension: 'mjs',
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

  // Adapter wrappers own recipe calls, so include their public variants.
  staticCss: {
    // Compound adapter contexts are not discoverable from the JSX call sites.
    recipes: {
      backdrop: ['*'],
      popover: ['*'],
      tooltip: ['*'],
      menu: ['*'],
      tabs: ['*'],
      card: ['*'],
      scrollArea: ['*'],
      navbar: ['*'],
      surface: ['*'],
      input: ['*'],
      textarea: ['*'],
      checkbox: ['*'],
      radioGroup: ['*'],
      switchRecipe: ['*'],
      formField: ['*'],
      badge: ['*'],
      separator: ['*'],
      select: ['*'],
      selectDropdown: ['*'],
    },
    themes: [
      'default',
      'stratus',
      'solstice',
      'volt',
      'nebula',
      'canopy',
      'aster',
    ],
  },

  importMap: '@bend-ui/styled-system',

  jsxFramework: 'react',
});
