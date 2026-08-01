import { defineSlotRecipe } from '@pandacss/dev';

export const radioGroupRecipe = defineSlotRecipe({
  slots: [
    'root',
    'indicator',
    'itemControl',
    'item',
    'itemText',
    'itemHiddenInput',
    'label',
  ],
  className: 'RadioGroup',
  base: {
    root: {
      colorPalette: 'primary',
    },
    itemControl: {
      background: 'fill.weak',
      border: 'strong',
      borderRadius: 'full',
      transitionDuration: 'normal',
      transitionProperty: 'background',
      transitionTimingFunction: 'default',
      _hover: {
        background: 'fill.weak.hover',
      },
      _checked: {
        background: 'fill.white',
      },
      _disabled: {
        opacity: 'state.disabled',
      },
    },
    item: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      _disabled: {
        cursor: 'not-allowed',
      },
    },
    itemText: {
      color: 'text',
      fontWeight: 'medium',
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          gap: {
            _vertical: 'md',
            _horizontal: 'lg',
          },
        },
        item: {
          gap: 'sm',
        },
        itemControl: {
          width: '4',
          height: '4',
          _checked: {
            outlineWidth: '3px',
            outlineOffset: '-4px',
          },
        },
        itemText: {
          textStyle: 'sm',
        },
      },
      md: {
        root: {
          gap: {
            _vertical: 'lg',
            _horizontal: 'lg',
          },
        },
        item: {
          gap: 'md',
        },
        itemControl: {
          width: '5',
          height: '5',
          _checked: {
            outlineWidth: '4px',
            outlineOffset: '-5px',
          },
        },
        itemText: {
          textStyle: 'md',
        },
      },
      lg: {
        root: {
          gap: {
            _vertical: 'lg',
            _horizontal: 'lg',
          },
        },
        item: {
          gap: 'lg',
        },
        itemControl: {
          width: '6',
          height: '6',
          _checked: {
            outlineWidth: '5px',
            outlineOffset: '-6px',
          },
        },
        itemText: {
          textStyle: 'lg',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
