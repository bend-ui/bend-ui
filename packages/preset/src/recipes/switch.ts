import { defineSlotRecipe } from '@pandacss/dev';
import { switchRecipe as baseSwitchRecipe } from '@bend-ui/preset-base';

export const switchRecipe = defineSlotRecipe({
  className: 'Switch',
  slots: baseSwitchRecipe.slots,
  jsx: ['Switch', /Switch\.+/],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      gap: 'sm',
    },
    control: {
      display: 'flex',
      p: 'xs',
      backgroundColor: 'fill',
      rounded: 'full',
      transition: 'background-color {durations.fast} {easings.default}',
      _checked: {
        backgroundColor: 'primary',
      },
    },
    thumb: {
      backgroundColor: 'fill.white',
      rounded: 'full',
      transition: 'transform {durations.fast} {easings.default}',
      _checked: {
        transform: 'translateX(100%)',
      },
    },
    label: {},
  },
  variants: {
    size: {
      sm: {
        control: {
          w: '8',
        },
        thumb: {
          w: '3',
          h: '3',
        },
      },
      md: {
        control: {
          w: '10',
        },
        thumb: {
          w: '4',
          h: '4',
        },
      },
      lg: {
        control: {
          w: '12',
        },
        thumb: {
          w: '5',
          h: '5',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
