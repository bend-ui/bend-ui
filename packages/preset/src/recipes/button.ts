import { defineSlotRecipe } from '@pandacss/dev';

export const buttonRecipe = defineSlotRecipe({
  description: 'Button styles',
  className: 'Button',
  slots: ['root', 'label'],
  base: {
    root: {
      rounded: 'md',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      fontWeight: 'medium',
      position: 'relative',
      overflow: 'hidden',
      _hover: {
        _after: {
          content: '""',
          position: 'absolute',
          inset: 0,
          bgColor: 'black',
          opacity: '0.1',
        },
      },
    },
    label: {
      textAlign: 'center',
    },
  },
  variants: {
    palette: {
      default: {
        root: {
          colorPalette: 'neutral',
          _soft: {
            boxShadow: 'interaction.neutral',
          },
        },
      },
      primary: {
        root: {
          colorPalette: 'primary',
          _soft: {
            boxShadow: 'interaction.primary',
          },
        },
      },
      error: {
        root: {
          colorPalette: 'error',
          _soft: {
            boxShadow: 'interaction.error',
          },
        },
      },
    },
    variant: {
      solid: {
        root: {
          color: 'colorPalette.text.inverse',
          backgroundColor: 'colorPalette.fill',
          borderColor: 'colorPalette.stroke',
          _hover: {
            backgroundColor: 'colorPalette.fill.hover',
          },
          _disabled: {
            color: 'colorPalette.text.disabled',
            backgroundColor: 'colorPalette.fill.disabled',
            _hover: {
              color: 'colorPalette.text.disabled',
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
      },
      outline: {
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
      },
      subtle: {
        root: {
          color: 'colorPalette.text',
          backgroundColor: 'colorPalette.fill.weak',
        },
        _hover: {
          backgroundColor: 'colorPalette.fill.hover',
        },
        _disabled: {
          color: 'colorPalette.text.disabled',
          backgroundColor: 'colorPalette.fill.disabled',
        },
      },
      ghost: {
        root: {
          color: 'colorPalette.text',
          backgroundColor: 'transparent',
        },
        _hover: {
          backgroundColor: 'colorPalette.fill.hover',
        },
        _disabled: {
          color: 'colorPalette.text.disabled',
          backgroundColor: 'colorPalette.fill.disabled',
        },
      },
    },
    size: {
      sm: {
        root: {
          py: 'xs',
          px: 'xs',
          fontSize: 'sm',
        },
        label: {
          px: 'xs',
        },
      },
      md: {
        root: {
          py: 'sm',
          px: 'sm',
          fontSize: 'md',
        },
        label: {
          px: 'sm',
        },
      },
      lg: {
        root: {
          py: 'md',
          px: 'lg',
          fontSize: 'lg',
        },
        label: {
          px: 'lg',
        },
      },
    },
    isRounded: {
      true: {
        root: {
          rounded: 'full',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    palette: 'default',
    size: 'md',
  },
});
