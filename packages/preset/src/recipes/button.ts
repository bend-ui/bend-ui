import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  label: { selector: '& [data-part="label"]' },
  icon: { selector: '& [data-part="icon"]' },
});

export const buttonRecipe = defineRecipe({
  description: 'Button styles',
  className: 'Button',
  base: parts({
    root: {
      rounded: 'md',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      fontWeight: 'medium',
      position: 'relative',
      overflow: 'hidden',
      _focusVisible: {
        layerStyle: 'focus',
      },
      _disabled: {
        opacity: 'state.disabled',
        cursor: 'disabled',
      },
    },
    label: {
      textAlign: 'center',
    },
    icon: {
      width: '1lh',
      height: '1lh',
      '& > svg': {
        width: '100%',
        height: '100%',
      },
    },
  }),
  variants: {
    variant: {
      primary: parts({
        root: {
          color: 'text.primary.inverse.strong',
          backgroundColor: 'fill.primary',
          borderColor: 'stroke.primary',
          boxShadow: 'xs',
          _notDisabled: {
            _hover: {
              backgroundColor: 'fill.primary.fill.hover',
            },
            _active: {
              backgroundColor: 'fill.primary.active',
            },
            _focusVisible: {
              backgroundColor: 'fill.primary.focus',
            },
          },
        },
      }),
      secondary: parts({
        root: {
          color: 'text',
          backgroundColor: 'fill.weak',
          borderColor: 'stroke.weak',
          boxShadow: 'revert',
          _notDisabled: {
            _hover: {
              backgroundColor: 'fill.weak.hover',
            },
          },
        },
      }),
      tertiary: parts({
        root: {
          color: 'text',
          backgroundColor: 'transparent',
          _hover: {
            backgroundColor: 'fill.weak.hover',
          },
        },
      }),
      danger: parts({
        root: {
          color: 'text.danger',
          backgroundColor: 'fill.danger',
          _notDisabled: {
            _hover: {
              backgroundColor: 'fill.danger.hover',
            },
          },
        },
      }),
      inverse: parts({
        root: {
          color: 'text.inverse.strong',
          backgroundColor: 'fill.inverse.strong',
          borderColor: 'stroke.inverse.strong',
        },
      }),
    },
    size: {
      sm: parts({
        root: {
          py: 'xs',
          px: 'sm',
          gap: '1',
          fontSize: 'xs',
        },
        label: {
          px: '1',
        },
      }),
      md: parts({
        root: {
          py: 'sm',
          px: 'md',
          gap: '1',
          fontSize: 'sm',
        },
        label: {
          px: 'xs',
        },
      }),
      lg: parts({
        root: {
          py: 'md',
          px: 'lg',
          gap: '1',
          fontSize: 'lg',
        },
        label: {
          px: 'xs',
        },
      }),
    },
    isRounded: {
      true: parts({
        root: {
          rounded: 'full',
        },
      }),
    },
  },
  defaultVariants: {
    variant: 'secondary',
    size: 'md',
  },
});
