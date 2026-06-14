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
      color: 'fg.muted',
      paddingTop: '2',
      textAlign: 'left',
    },
    header: {
      backgroundColor: 'bg.subtle',
    },
    head: {
      color: 'fg.muted',
      fontWeight: 'semibold',
      textAlign: 'left',
    },
    headerCell: {
      color: 'fg.muted',
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
              backgroundColor: 'bg.subtle',
            },
          },
        },
      },
    },
    isBordered: {},
    withTableBorder: {
      true: {
        root: {
          border: 'border.weak',
          borderRadius: '8px',
        },
      },
    },
    withColumnBorder: {
      true: {
        head: {
          borderRight: 'border.weak',
        },
        headerCell: {
          borderRight: 'border.weak',
        },
        cell: {
          borderRight: 'border.weak',
        },
      },
    },
    withRowBorder: {
      true: {
        head: {
          borderBottom: 'border.weak',
        },
        headerCell: {
          borderBottom: 'border.weak',
        },
        cell: {
          borderBottom: 'border.weak',
        },
      },
    },
  },
  defaultVariants: {
    density: 'comfortable',
  },
});
