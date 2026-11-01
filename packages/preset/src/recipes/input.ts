import { defineSlotRecipe } from '@pandacss/dev';

export const inputRecipe = defineSlotRecipe({
  slots: ['root', 'wrapper', 'input', 'icon', 'element', 'addon'],
  description: 'Input styles',
  className: 'Input',
  base: {
    root: {
      rounded: 'lg',
      color: 'text',
      border: 'strong',
      transitionProperty: 'border-color, background-color',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-in-out',
      divideX: '1px',
      // The upstream primitive owns state on the input, not the layout root.
      '&:not(:has(input:is(:disabled, [data-disabled], [aria-disabled="true"], :read-only, :invalid, [aria-invalid="true"], [data-invalid])))':
        {
          _notDisabled: {
            _hover: {
              '@media (hover: hover)': {
                borderColor: 'stroke.focus',
                cursor: 'text',
              },
            },
          },
        },
      _focusWithin: {
        layerStyle: 'focus',
      },
      _invalid: {
        border: 'danger',
      },
      _disabled: {
        opacity: 'state.disabled',
        cursor: 'disabled',
      },
      '&:has(input:is(:disabled, [data-disabled], [aria-disabled="true"]))': {
        opacity: 'state.disabled',
        cursor: 'disabled',
      },
      '&:has(input:is(:invalid, [aria-invalid="true"], [data-invalid]))': {
        border: 'danger',
      },
    },
    wrapper: {
      '&[type="text"]': {
        cursor: 'text',
      },
    },
    input: {
      outline: 'none',
      color: 'inherit',
      _disabled: { cursor: 'disabled' },
      // Standalone Input.Control has no surrounding recipe root to draw focus.
      '&:not(.Input__root *)': {
        _focusVisible: { layerStyle: 'focus' },
      },
    },
    icon: {
      width: '1lh',
      height: '1lh',
      '& > svg': {
        width: '100%',
        height: '100%',
      },
    },
  },
  variants: {
    size: {
      sm: {
        input: {
          height: '8',
        },
        wrapper: {
          paddingInline: '2',
          gap: '1',
        },
      },
      md: {
        input: {
          height: '10',
        },
        wrapper: {
          paddingInline: '3',
          gap: '2',
        },
        icon: {
          width: '5',
          height: '5',
        },
        element: {},
        addon: {
          paddingInline: '3',
        },
      },
      lg: {
        input: {
          height: '12',
        },
        wrapper: {
          paddingInline: '4',
          gap: '3',
        },
      },
    },
    variant: {
      solid: {
        root: {
          backgroundColor: 'fill',
        },
      },
      outline: {
        root: {
          backgroundColor: 'fill',
          divideColor: 'stroke.weak',
          shadow: 'xs',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});
