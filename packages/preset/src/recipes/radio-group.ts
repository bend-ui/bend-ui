import { defineSlotRecipe } from '@pandacss/dev';
import { controlSizes } from './control-sizes';
export const radioGroupRecipe = defineSlotRecipe({
  slots: [
    'root',
    'indicator',
    'itemControl',
    'item',
    'itemText',
    'itemHiddenInput',
    'label',
  ],
  className: 'RadioGroup',
  base: {
    root: { flexDirection: 'column', gap: 'sm' },
    item: {
      display: 'flex',
      alignItems: 'center',
      gap: 'sm',
      cursor: 'pointer',
    },
    itemControl: {
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0,
      backgroundColor: 'bg.raised',
      border: '1px solid {colors.stroke.focus}',
      borderRadius: 'full',
      _checked: { borderColor: 'stroke.primary' },
      _focusVisible: { layerStyle: 'focus', outlineColor: 'stroke.primary' },
      _disabled: { opacity: 'state.disabled', cursor: 'disabled' },
      _invalid: {
        borderColor: 'stroke.danger.strong',
        _dark: { borderColor: 'stroke.danger' },
      },
    },
    indicator: {
      width: '50%',
      height: '50%',
      rounded: 'full',
      backgroundColor: 'text',
    },
    itemText: { color: 'text' },
  },
  variants: {
    size: {
      sm: {
        item: { minHeight: controlSizes.sm.minHeight },
        itemControl: { width: '4', height: '4' },
        itemText: { textStyle: 'control.sm' },
      },
      md: {
        item: { minHeight: controlSizes.md.minHeight },
        itemControl: { width: '5', height: '5' },
        itemText: { textStyle: 'control.md' },
      },
      lg: {
        item: { minHeight: controlSizes.lg.minHeight },
        itemControl: { width: '6', height: '6' },
        itemText: { textStyle: 'control.lg' },
      },
    },
  },
  defaultVariants: { size: 'md' },
});
