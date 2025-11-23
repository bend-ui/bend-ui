import { definePreset } from '@pandacss/dev';
import patterns from './patterns';
import { recipes, slotRecipes } from './recipes';
import { conditions } from './conditions';

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
    extend: conditions,
  },
});

export * from './recipes';
