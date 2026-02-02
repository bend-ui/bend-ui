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
      color: 'red.500',
    },
  },
  variants: {
    isStriped: {
      true: {
        row: {
          _odd: {
            '&:has(td)': {
              backgroundColor: 'red.500',
            },
          },
        },
      },
    },
    isBordered: {},
    witTableBorder: {
      true: {
        root: {
          border: '1px solid',
          borderColor: 'stroke',
        },
      },
    },
    withColumnBorder: {
      true: {
        head: {
          borderRight: '1px solid',
          borderColor: 'stroke',
        },
        cell: {
          borderRight: '1px solid',
          borderColor: 'stroke',
        },
      },
    },
    withRowBorder: {
      true: {
        head: {
          borderBottom: '1px solid',
          borderColor: 'stroke',
        },
        cell: {
          borderBottom: '1px solid',
          borderColor: 'stroke',
        },
      },
    },
  },
});
