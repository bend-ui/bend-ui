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
      color: 'inherit',
      textDecoration: 'none',
      rounded: 'md',
      _hover: {
        backgroundColor: 'bg.hover',
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
