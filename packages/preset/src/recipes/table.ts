import { defineSlotRecipe } from '@pandacss/dev';

export const tableRecipe = defineSlotRecipe({
  className: 'Table',
  slots: ['root', 'caption', 'row', 'cell', 'header', 'footer', 'body', 'head'],
  base: {
    root: {
      captionSide: 'bottom',
    },
    head: {
      padding: 'md',
    },
    cell: {
      padding: 'md',
    },
    caption: {
      color: 'text.weak',
    },
  },
  variants: {
    isStriped: {
      true: {
        row: {
          _odd: {
            '&:has(td)': {
              backgroundColor: 'bg.alternate',
            },
          },
        },
      },
    },
    isBordered: {},
    witTableBorder: {
      true: {
        root: {
          border: 'weak',
        },
      },
    },
    withColumnBorder: {
      true: {
        head: {
          borderRight: 'weak',
        },
        cell: {
          borderRight: 'weak',
        },
      },
    },
    withRowBorder: {
      true: {
        head: {
          borderBottom: 'weak',
        },
        cell: {
          borderBottom: 'weak',
        },
      },
    },
  },
});
