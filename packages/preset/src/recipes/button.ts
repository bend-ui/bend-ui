import { defineSlotRecipe } from '@pandacss/dev';

export const buttonRecipe = defineSlotRecipe({
  description: 'Button styles',
  className: 'button',
  slots: ['root', 'label'],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      rounded: 'md',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'transparent',
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
          colorPalette: 'bg.primary',
        },
      },
      danger: {
        root: {
          colorPalette: 'bg.danger',
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
        },
      },
      outline: {
        root: {},
      },
    },
    size: {
      md: {
        root: {
          py: 'sm',
          px: 'sm',
        },
        label: {
          px: 'sm',
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
