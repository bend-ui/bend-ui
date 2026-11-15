import { defineSlotRecipe } from '@pandacss/dev';

export const tableRecipe = defineSlotRecipe({
  className: 'Table',
  slots: [
    'root',
    'caption',
    'row',
    'cell',
    'header',
    'footer',
    'body',
    'head',
    'headerCell',
  ],
  base: {
    root: {
      width: 'full',
      borderCollapse: 'collapse',
      captionSide: 'bottom',
      fontSize: 'sm',
    },
    caption: {
      color: 'text.weak',
      paddingTop: '2',
      textAlign: 'left',
    },
    header: {
      backgroundColor: 'bg.alternate',
    },
    head: {
      color: 'text.weak',
      fontWeight: 'semibold',
      textAlign: 'left',
    },
    headerCell: {
      color: 'text.weak',
      fontWeight: 'semibold',
      textAlign: 'left',
    },
    cell: {
      verticalAlign: 'middle',
    },
  },
  variants: {
    density: {
      compact: {
        head: { paddingX: '2', paddingY: '2' },
        headerCell: { paddingX: '2', paddingY: '2' },
        cell: { paddingX: '2', paddingY: '2' },
      },
      comfortable: {
        head: { paddingX: '3', paddingY: '3' },
        headerCell: { paddingX: '3', paddingY: '3' },
        cell: { paddingX: '3', paddingY: '3' },
      },
      spacious: {
        head: { paddingX: '4', paddingY: '4' },
        headerCell: { paddingX: '4', paddingY: '4' },
        cell: { paddingX: '4', paddingY: '4' },
      },
    },
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
    withTableBorder: {
      true: {
        root: {
          border: 'weak',
          borderRadius: '8px',
        },
      },
    },
    withColumnBorder: {
      true: {
        head: {
          borderRight: 'weak',
        },
        headerCell: {
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
        headerCell: {
          borderBottom: 'weak',
        },
        cell: {
          borderBottom: 'weak',
        },
      },
    },
  },
  defaultVariants: {
    density: 'comfortable',
  },
});
