import { definePreset } from '@pandacss/dev';
import patterns from './patterns';
import { slotRecipes } from './recipes';

export default definePreset({
  presets: ['@pandacss/dev/presets'],

  patterns,

  theme: {
    extend: {
      slotRecipes,
    },
  },
});
