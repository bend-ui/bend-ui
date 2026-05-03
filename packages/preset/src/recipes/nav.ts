import { defineSlotRecipe } from '@pandacss/dev';

export const navRecipe = defineSlotRecipe({
  className: 'nav',
  description: 'A navigation component',
  slots: ['root', 'link'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'row',
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      gap: 'sm',
      py: 'sm',
      px: 'md',
      color: 'text.weak',
      textDecoration: 'none',
      rounded: 'md',
      _hover: {
        color: 'text.strong',
      },
      _current: {
        color: 'text.strong',
      },
    },
  },
  variants: {
    direction: {
      vertical: {
        root: {
          flexDirection: 'column',
        },
      },
    },
  },
});
