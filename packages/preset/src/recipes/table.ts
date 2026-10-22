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
      paddingTop: 'sm',
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
        head: { paddingX: 'sm', paddingY: 'sm' },
        headerCell: { paddingX: 'sm', paddingY: 'sm' },
        cell: { paddingX: 'sm', paddingY: 'sm' },
      },
      comfortable: {
        head: { paddingX: 'md', paddingY: 'md' },
        headerCell: { paddingX: 'md', paddingY: 'md' },
        cell: { paddingX: 'md', paddingY: 'md' },
      },
      spacious: {
        head: { paddingX: 'lg', paddingY: 'lg' },
        headerCell: { paddingX: 'lg', paddingY: 'lg' },
        cell: { paddingX: 'lg', paddingY: 'lg' },
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
          borderRadius: 'surface',
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
