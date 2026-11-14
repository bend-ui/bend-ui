import { defineSlotRecipe } from '@pandacss/dev';
import { controlSizes } from './control-sizes';
import { switchRecipe as baseSwitchRecipe } from '@bend-ui/preset-base';

export const switchRecipe = defineSlotRecipe({
  className: 'Switch',
  slots: baseSwitchRecipe.slots,
  jsx: ['Switch', /Switch\.+/],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
    },
    control: {
      display: 'flex',
      flexShrink: 0,
      p: '1',
      backgroundColor: 'stroke.focus',
      border: '1px solid {colors.stroke.focus}',
      _focusVisible: { layerStyle: 'focus', outlineColor: 'stroke.primary' },
      _disabled: { opacity: 'state.disabled', cursor: 'disabled' },
      _invalid: {
        borderColor: 'stroke.danger.strong',
        _dark: { borderColor: 'stroke.danger' },
      },
      rounded: 'full',
      transition: 'background {durations.normal} {easings.default}',
      _checked: {
        backgroundColor: 'fill.primary',
        borderColor: 'stroke.primary',
      },
    },
    thumb: {
      backgroundColor: 'bg.page',
      rounded: 'full',
      transition: 'transform {durations.normal} {easings.default}',
      _checked: {
        transform: 'translateX(calc(100% - 2px))',
        _rtl: { transform: 'translateX(calc(-100% + 2px))' },
      },
    },
    label: { color: 'text' },
  },
  variants: {
    size: {
      sm: {
        root: {
          minHeight: controlSizes.sm.minHeight,
          textStyle: controlSizes.sm.textStyle,
        },
        control: {
          w: '8',
        },
        thumb: {
          w: '3',
          h: '3',
        },
      },
      md: {
        root: {
          minHeight: controlSizes.md.minHeight,
          textStyle: controlSizes.md.textStyle,
        },
        control: {
          w: '10',
        },
        thumb: {
          w: '4',
          h: '4',
        },
      },
      lg: {
        root: {
          minHeight: controlSizes.lg.minHeight,
          textStyle: controlSizes.lg.textStyle,
        },
        control: {
          w: '12',
        },
        thumb: {
          w: '5',
          h: '5',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
