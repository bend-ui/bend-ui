import { defineSlotRecipe } from '@pandacss/dev';

export const switchRecipe = defineSlotRecipe({
  className: 'Switch',
  jsx: ['Switch', /Switch\.+/],
  slots: ['root', 'control', 'thumb', 'label'],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
    },
    control: {
      display: 'flex',
      p: '1',
      backgroundColor: 'bg.input',
      rounded: 'full',
      transition: 'background 200ms',
      _checked: {
        backgroundColor: 'primary',
      },
    },
    thumb: {
      backgroundColor: 'primary.fg',
      rounded: 'full',
      transition: 'transform 200ms',
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
