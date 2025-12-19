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
    palette: {
      default: parts({
        root: {
          colorPalette: 'neutral',
          color: 'colorPalette.text',
        },
      }),
      primary: parts({
        root: {
          colorPalette: 'primary',
        },
      }),
      danger: parts({
        root: {
          colorPalette: 'error',
        },
      }),
      warning: parts({
        root: {
          colorPalette: 'warning',
        },
      }),
      success: parts({
        root: {
          colorPalette: 'success',
        },
      }),
      info: parts({
        root: {
          colorPalette: 'info',
        },
      }),
    },
    variant: {
      primary: parts({
        root: {
          color: 'colorPalette.text.inverse.strong',
          backgroundColor: 'colorPalette.fill',
          borderColor: 'colorPalette.stroke',
          boxShadow: 'xs',
          _hover: {
            backgroundColor: 'colorPalette.fill.hover',
          },
          _active: {
            backgroundColor: 'colorPalette.fill.press',
          },
          _focusVisible: {
            backgroundColor: 'colorPalette.fill.focus',
          },
          _disabled: {
            color: 'colorPalette.text.inverse.disabled',
            backgroundColor: 'colorPalette.fill.disabled',
            _hover: {
              color: 'colorPalette.text.inverse.disabled',
              backgroundColor: 'colorPalette.fill.disabled',
            },
          },
        },
      }),
      secondary: parts({
        root: {
          color: 'colorPalette.text',
          backgroundColor: 'colorPalette.fill/20',
          borderColor: 'colorPalette.stroke',
          boxShadow: 'revert',
          _hover: {
            backgroundColor: 'colorPalette.fill.hover',
          },
          _disabled: {
            color: 'colorPalette.text.disabled',
            borderColor: 'colorPalette.stroke.disabled',
            _hover: {
              color: 'colorPalette.text.disabled',
              borderColor: 'colorPalette.stroke.disabled',
            },
          },
        },
      }),
      tertiary: parts({
        root: {
          color: 'colorPalette.text',
          backgroundColor: 'transparent',
          _hover: {
            backgroundColor: 'colorPalette.fill.weak.hover',
          },
          _disabled: {
            color: 'colorPalette.text.disabled',
            backgroundColor: 'colorPalette.fill.disabled',
            _hover: {
              backgroundColor: 'colorPalette.fill.disabled',
            },
          },
        },
      }),
    },
    size: {
      sm: parts({
        root: {
          py: 'xs',
          px: 'sm',
          gap: '1',
          fontSize: 'sm',
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
          fontSize: 'md',
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
    variant: 'primary',
    palette: 'default',
    size: 'md',
  },
});
