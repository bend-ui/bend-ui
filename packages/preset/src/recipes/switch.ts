import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  control: { selector: '& [data-part="control"]' },
  thumb: { selector: '& [data-part="thumb"]' },
  label: { selector: '& [data-part="label"]' },
});

export const switchRecipe = defineRecipe({
  className: 'Switch',
  jsx: ['Switch', /Switch\.+/],
  base: parts({
    root: {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
    },
    control: {
      display: 'flex',
      p: '1',
      backgroundColor: 'surface',
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
  }),
  variants: {
    size: {
      sm: parts({
        control: {
          w: '8',
        },
        thumb: {
          w: '3',
          h: '3',
        },
      }),
      md: parts({
        control: {
          w: '10',
        },
        thumb: {
          w: '4',
          h: '4',
        },
      }),
      lg: parts({
        control: {
          w: '12',
        },
        thumb: {
          w: '5',
          h: '5',
        },
      }),
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
