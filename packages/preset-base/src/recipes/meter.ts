import { defineSlotRecipe } from '@pandacss/dev';

export const meter = defineSlotRecipe({
  className: 'Meter',
  slots: ['root', 'label', 'value', 'track', 'indicator'],
  description:
    'A meter component that displays a single value within a known range.',
  base: {
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    },
    value: {
      gridColumnStart: '2',
    },
    track: {
      gridColumn: '1 / 3',
      overflow: 'hidden',
    },
    indicator: {},
  },
});
