import { defineSlotRecipe } from '@pandacss/dev';

export const buttonRecipe = defineSlotRecipe({
  description: 'Button styles',
  className: 'Button',
  slots: ['root', 'label', 'icon', 'spinner'],
  base: {
    root: {
      rounded: 'md',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      fontWeight: 'medium',
      position: 'relative',
      overflow: 'hidden',
      transitionProperty: 'transform',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-in-out',
      _focusVisible: {
        layerStyle: 'focus',
      },
      _disabled: {
        opacity: 'state.disabled',
        cursor: 'disabled',
      },
      _notDisabled: {
        _motionSafe: {
          _active: { transform: 'scale(0.96)' },
        },
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
              '@media (hover: hover)': {
                '&:not(:active)': { backgroundColor: 'fill.primary.hover' },
              },
            },
            _active: {
              backgroundColor: 'fill.primary.active',
            },
            _pressed: { backgroundColor: 'fill.primary.active' },
            _selected: { backgroundColor: 'fill.primary.selected' },
          },
        },
      },
      secondary: {
        root: {
          color: 'text',
          backgroundColor: 'fill',
          borderColor: 'stroke.weak',
          boxShadow: 'revert',
          _notDisabled: {
            _hover: {
              '@media (hover: hover)': {
                '&:not(:active)': { backgroundColor: 'fill.hover' },
              },
            },
            _active: { backgroundColor: 'fill.active' },
            _pressed: { backgroundColor: 'fill.active' },
            _selected: { backgroundColor: 'fill.selected' },
          },
        },
      },
      tertiary: {
        root: {
          color: 'text',
          backgroundColor: 'transparent',
          _notDisabled: {
            _hover: {
              '@media (hover: hover)': {
                '&:not(:active)': { backgroundColor: 'fill.translucent.hover' },
              },
            },
            _active: { backgroundColor: 'fill.translucent.active' },
            _pressed: { backgroundColor: 'fill.translucent.active' },
            _selected: { backgroundColor: 'fill.translucent.selected' },
          },
        },
      },
      danger: {
        root: {
          color: 'text.danger.inverse.strong',
          backgroundColor: 'fill.danger',
          _notDisabled: {
            _hover: {
              '@media (hover: hover)': {
                '&:not(:active)': { backgroundColor: 'fill.danger.hover' },
              },
            },
            _active: { backgroundColor: 'fill.danger.active' },
            _pressed: { backgroundColor: 'fill.danger.active' },
            _selected: { backgroundColor: 'fill.danger.selected' },
          },
        },
      },
      inverse: {
        root: {
          color: 'text',
          backgroundColor: 'fill.inverse.strong',
          borderColor: 'stroke.inverse.strong',
          _notDisabled: {
            _hover: {
              '@media (hover: hover)': {
                '&:not(:active)': { backgroundColor: 'fill.inverse.weak' },
              },
            },
            _active: { backgroundColor: 'fill.inverse.weak' },
            _pressed: { backgroundColor: 'fill.inverse.weak' },
            _selected: { backgroundColor: 'fill.inverse.weak' },
          },
        },
      },
    },
    size: {
      sm: {
        root: {
          py: 'xs',
          px: 'sm',
          gap: '1',
          fontSize: 'xs',
        },
        label: {
          px: '1',
        },
      },
      md: {
        root: {
          py: 'sm',
          px: 'md',
          gap: '1',
          fontSize: 'sm',
        },
        label: {
          px: 'xs',
        },
      },
      lg: {
        root: {
          py: 'md',
          px: 'lg',
          gap: '1',
          fontSize: 'lg',
        },
        label: {
          px: 'xs',
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
    variant: 'secondary',
    size: 'md',
  },
});
