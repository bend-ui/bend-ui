import { definePreset } from '@pandacss/dev';
import patterns from './patterns';
import { recipes, slotRecipes } from './recipes';

export default definePreset({
  name: 'particles-base',
  presets: ['@pandacss/dev/presets'],

  patterns: {
    extend: patterns,
  },

  theme: {
    extend: {
      recipes,
      slotRecipes,
    },
  },
  conditions: {
    extend: {
      notFirst: '&:not(:first-child)',
      notLast: '&:not(:last-child)',
    },
  },
});

export * from './recipes';
