import { defineSlotRecipe } from '@pandacss/dev';

export const radioGroupRecipe = defineSlotRecipe({
  className: 'RadioGroup',
  slots: [
    'root',
    'indicator',
    'itemControl',
    'item',
    'itemText',
    'itemHiddenInput',
    'label',
  ],
  base: {
    root: {
      colorPalette: 'primary',
    },
    itemControl: {
      background: 'transparent',
      borderColor: 'border',
      borderRadius: 'full',
      borderWidth: '1px',
      transitionDuration: 'normal',
      transitionProperty: 'background',
      transitionTimingFunction: 'default',
      _hover: {
        background: 'bg.subtle',
      },
      _checked: {
        background: 'colorPalette',
        borderColor: 'colorPalette',
        outlineColor: 'bg.default',
        outlineStyle: 'solid',
        _hover: {
          background: 'colorPalette.hover',
        },
      },
      _disabled: {
        borderColor: 'border.disabled',
        color: 'fg.disabled',
        _hover: {
          bg: 'initial',
          color: 'fg.disabled',
        },
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
      color: 'fg.default',
      fontWeight: 'medium',
      _disabled: {
        color: 'fg.disabled',
      },
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          gap: {
            _vertical: '3',
            _horizontal: '4',
          },
        },
        item: {
          gap: '2',
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
            _vertical: '4',
            _horizontal: '6',
          },
        },
        item: {
          gap: '3',
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
            _vertical: '5',
            _horizontal: '8',
          },
        },
        item: {
          gap: '4',
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
