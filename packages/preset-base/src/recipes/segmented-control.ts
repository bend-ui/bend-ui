import { defineSlotRecipe } from '@pandacss/dev';

export const segmentedControl = defineSlotRecipe({
  className: 'SegmentedControl',
  slots: ['root', 'list', 'item', 'indicator'],
  base: {
    root: {
      display: 'inline-flex',
    },
    list: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '1',
      padding: '1',
      backgroundColor: 'bg.subtle',
      border: 'border.weak',
      borderRadius: '8px',
    },
    item: {
      minH: '8',
      paddingX: '3',
      borderRadius: '6px',
      color: 'fg.muted',
      fontSize: 'sm',
      fontWeight: 'medium',
      transition: 'background-color 120ms ease, color 120ms ease',
      _hover: {
        color: 'fg.default',
      },
      _checked: {
        backgroundColor: 'bg.raised',
        color: 'fg.default',
        boxShadow: 'xs',
      },
    },
  },
  variants: {
    size: {
      sm: {
        item: {
          minH: '7',
          paddingX: '2',
          fontSize: 'xs',
        },
      },
      md: {
        item: {
          minH: '8',
          paddingX: '3',
          fontSize: 'sm',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
