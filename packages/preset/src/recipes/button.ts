import { defineSlotRecipe } from '@pandacss/dev';
import { controlSizes } from './control-sizes';

export const buttonRecipe = defineSlotRecipe({
  description: 'Button styles',
  className: 'Button',
  slots: ['root', 'label', 'icon', 'spinner'],
  base: {
    root: {
      rounded: 'control',
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
    spinner: {
      width: '1lh',
      height: '1lh',
    },
  },
  variants: {
    variant: {
      primary: {
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
      },
      secondary: {
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
      },
      tertiary: {
        root: {
          color: 'text',
          backgroundColor: 'transparent',
          _hover: {
            backgroundColor: 'fill.weak.hover',
          },
        },
      },
      danger: {
        root: {
          color: 'text.danger',
          backgroundColor: 'fill.danger',
          _notDisabled: {
            _hover: {
              backgroundColor: 'fill.danger.hover',
            },
          },
        },
      },
      inverse: {
        root: {
          color: 'text.inverse.strong',
          backgroundColor: 'fill.inverse.strong',
          borderColor: 'stroke.inverse.strong',
        },
      },
    },
    size: {
      sm: { root: controlSizes.sm },
      md: { root: controlSizes.md },
      lg: { root: controlSizes.lg },
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
    variant: 'secondary',
    size: 'md',
  },
});
