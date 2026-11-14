import { defineSlotRecipe } from '@pandacss/dev';
import { controlSizes } from './control-sizes';

export const checkboxRecipe = defineSlotRecipe({
  slots: ['root', 'label', 'control', 'indicator'],
  description: 'Styles for the Checkbox component',
  className: 'Checkbox',
  base: {
    root: { color: 'text' },
    label: {
      color: 'text.strong',
    },
    control: {
      rounded: 'sm',
      border: '1px solid {colors.stroke.focus}',
      backgroundColor: 'bg.raised',
      '&:is([data-invalid], [aria-invalid="true"])': {
        borderColor: 'stroke.danger.strong',
        _dark: { borderColor: 'stroke.danger' },
      },
      _focusVisible: {
        layerStyle: 'focus',
        outlineColor: 'stroke.primary',
      },
      _disabled: {
        opacity: 'state.disabled',
      },
      _indeterminate: {
        backgroundColor: 'fill.primary',
        borderColor: 'stroke.primary',
      },
      _checked: {
        color: 'text.primary.inverse.strong',
        bgColor: 'fill.primary',
        borderColor: 'stroke.primary',
      },
    },
    indicator: { _indeterminate: { color: 'text.primary.inverse.strong' } },
  },
  variants: {
    size: {
      sm: {
        root: {
          minHeight: controlSizes.sm.minHeight,
          textStyle: controlSizes.sm.textStyle,
        },
        control: {
          h: '4',
          w: '4',
        },
      },
      md: {
        root: {
          minHeight: controlSizes.md.minHeight,
          textStyle: controlSizes.md.textStyle,
        },
        control: {
          h: '5',
          w: '5',
        },
      },
      lg: {
        root: {
          minHeight: controlSizes.lg.minHeight,
          textStyle: controlSizes.lg.textStyle,
        },
        control: {
          h: '6',
          w: '6',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
