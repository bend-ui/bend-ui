import { defineSlotRecipe } from '@pandacss/dev';

export const buttonRecipe = defineSlotRecipe({
  description: 'Button styles',
  className: 'button',
  slots: ['root'],
  base: {
    root: {
      display: 'inline-flex',
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
          backgroundColor: 'surface',
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
    },
    variant: {
      solid: {
        root: {
          color: 'colorPalette.fg',
          backgroundColor: 'colorPalette.base',
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
          px: 'md',
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
