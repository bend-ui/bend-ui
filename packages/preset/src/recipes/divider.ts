import { defineSlotRecipe } from '@pandacss/dev';

export const dividerRecipe = defineSlotRecipe({
  className: 'divider',
  slots: ['root', 'content'],
  base: {
    root: {},
  },
  variants: {
    orientation: {
      horizontal: {
        root: {
          width: 'full',
          height: '1px',
        },
      },
      vertical: {
        root: {
          height: 'full',
          width: '1px',
        },
      },
    },
    withContent: {
      true: {
        root: {
          display: 'flex',
          alignItems: 'center',
          gap: 'md',
          _before: {
            content: '""',
            flex: 1,
            borderBottom: 'divider',
          },
          _after: {
            content: '""',
            flex: 1,
            borderBottom: 'divider',
          },
        },
      },
      false: {
        root: { borderBottom: 'divider' },
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});
