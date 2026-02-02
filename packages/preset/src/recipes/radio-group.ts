import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  indicator: { selector: '& [data-part="indicator"]' },
  itemControl: { selector: '& [data-part="itemControl"]' },
  item: { selector: '& [data-part="item"]' },
  itemText: { selector: '& [data-part="itemText"]' },
  itemHiddenInput: { selector: '& [data-part="itemHiddenInput"]' },
  label: { selector: '& [data-part="label"]' },
});

export const radioGroupRecipe = defineRecipe({
  className: 'RadioGroup',
  base: parts({
    root: {
      colorPalette: 'primary',
    },
    itemControl: {
      background: 'transparent',
      borderColor: 'red.500',
      borderRadius: 'full',
      borderWidth: '1px',
      transitionDuration: 'normal',
      transitionProperty: 'background',
      transitionTimingFunction: 'default',
      _hover: {
        background: 'red.500',
      },
      _checked: {
        background: 'colorPalette',
        borderColor: 'colorPalette',
        outlineColor: 'red.500',
        outlineStyle: 'solid',
        _hover: {
          background: 'colorPalette.hover',
        },
      },
      _disabled: {
        borderColor: 'red.500',
        color: 'red.500',
        _hover: {
          bg: 'initial',
          color: 'red.500',
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
      color: 'red.500',
      fontWeight: 'medium',
      _disabled: {
        color: 'red.500',
      },
    },
  }),
  variants: {
    size: {
      sm: parts({
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
      }),
      md: parts({
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
      }),
      lg: parts({
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
      }),
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
