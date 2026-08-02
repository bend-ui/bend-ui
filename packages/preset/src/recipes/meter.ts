import { defineSlotRecipe } from '@pandacss/dev';

export const meter = defineSlotRecipe({
  className: 'Meter',
  slots: ['root', 'label', 'value', 'track', 'indicator'],
  description:
    'A meter component that displays a single value within a known range.',
  base: {
    root: {
      gridRowGap: 'sm',
    },
    label: {
      fontSize: 'sm',
      color: 'text',
      fontWeight: 'medium',
    },
    value: {
      fontSize: 'xs',
      color: 'text.weak',
      textAlign: 'right',
    },
    track: {
      bg: 'fill.weak',
      borderRadius: 'full',
      height: '2',
    },
    indicator: {
      bg: 'fill.primary',
      borderRadius: 'full',
      transitionProperty: 'width',
      transitionDuration: 'slow',
      transitionTimingFunction: 'default',
    },
  },
});
