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
    },
    label: {
      textAlign: 'center',
    },
  }),
  variants: {
    palette: {
      default: parts({
        root: {
          colorPalette: 'neutral',
          _soft: {
            boxShadow: 'interaction.neutral',
          },
        },
      }),
      primary: parts({
        root: {
          colorPalette: 'primary',
          _soft: {
            boxShadow: 'interaction.primary',
          },
        },
      }),
      danger: parts({
        root: {
          colorPalette: 'error',
          _soft: {
            boxShadow: 'interaction.error',
          },
        },
      }),
      warning: parts({
        root: {
          colorPalette: 'warning',
          _soft: {
            boxShadow: 'interaction.warning',
          },
        },
      }),
      success: parts({
        root: {
          colorPalette: 'success',
          _soft: {
            boxShadow: 'interaction.success',
          },
        },
      }),
      info: parts({
        root: {
          colorPalette: 'info',
          _soft: {
            boxShadow: 'interaction.info',
          },
        },
      }),
    },
    variant: {
      primary: parts({
        root: {
          color: 'colorPalette.text.inverse',
          backgroundColor: 'colorPalette.fill',
          borderColor: 'colorPalette.stroke',
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
          _soft: {
            _before: {
              content: '""',
              position: 'absolute',
              inset: 0,
              bgGradient: 'to-b',
              gradientFrom: 'white/16',
              gradientTo: 'transparent',
            },
          },
        },
      }),
      secondary: parts({
        root: {
          color: 'colorPalette.text',
          backgroundColor: 'transparent',
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
          backgroundColor: 'colorPalette.fill.weak',

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
          px: 'xs',
          gap: 'xs',
          fontSize: 'sm',
        },
      }),
      md: parts({
        root: {
          py: 'sm',
          px: 'md',
          gap: 'sm',
          fontSize: 'md',
        },
      }),
      lg: parts({
        root: {
          py: 'md',
          px: 'lg',
          gap: 'lg',
          fontSize: 'lg',
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
