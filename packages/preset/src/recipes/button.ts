import { defineSlotRecipe } from '@pandacss/dev';

export const buttonRecipe = defineSlotRecipe({
  description: 'Button styles',
  className: 'button',
  slots: ['root', 'label'],
  base: {
    root: {
      display: 'inline-flex',
      placeItems: 'center',
      placeContent: 'center',
      rounded: 'md',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'transparent',
    },
    label: {
      textAlign: 'center',
    },
  },
  variants: {
    palette: {
      default: {
        root: {
          backgroundColor: 'bg.surface',
          borderColor: { base: 'shark.200', _dark: 'shark.700' },
          _hover: {
            backgroundColor: { base: 'shark.200', _dark: 'shark.700' },
          },
        },
      },
      primary: {
        root: {
          colorPalette: 'primary',
        },
      },
      danger: {
        root: {
          colorPalette: 'danger',
        },
      },
    },
    variant: {
      solid: {
        root: {
          color: 'colorPalette.fg',
          backgroundColor: 'colorPalette',
          _hover: {
            backgroundColor: 'colorPalette.hover',
          },
          _disabled: {
            color: 'colorPalette.disabled',
            backgroundColor: 'colorPalette.disabled',
            _hover: {
              color: 'colorPalette.disabled',
              backgroundColor: 'colorPalette.disabled',
            },
          },
        },
      },
      outline: {
        root: {
          color: 'colorPalette.text',
          backgroundColor: 'transparent',
          borderColor: 'colorPalette.border',
          _hover: {
            backgroundColor: 'colorPalette.border.hover',
          },
          _disabled: {
            color: 'colorPalette.disabled',
            borderColor: 'colorPalette.disabled',
            _hover: {
              color: 'colorPalette.disabled',
              borderColor: 'colorPalette.disabled',
            },
          },
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
