import { definePreset } from '@pandacss/dev';
import patterns from './patterns';
import { slotRecipes } from './recipes';

export default definePreset({
  name: 'particles-base',
  presets: ['@pandacss/dev/presets'],

  patterns: {
    extend: patterns,
  },

  theme: {
    extend: {
      slotRecipes,
    },
  },
  conditions: {
    extend: {
      current: '&:is([aria-current], [data-current])',
      hidden: '&:is([hidden])',
      hover: [
        '@media (hover: hover) and (pointer: fine)',
        '&:is(:hover, [data-hover])',
      ],
    },
  },
});

export * from './recipes';
