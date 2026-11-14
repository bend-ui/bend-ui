import { defineSlotRecipe } from '@pandacss/dev';
import { controlSizes } from './control-sizes';

export const textareaRecipe = defineSlotRecipe({
  className: 'Textarea',
  slots: ['root', 'field'],
  base: {
    root: {
      rounded: 'control',
      border: '1px solid {colors.stroke.focus}',
      minWidth: '0',
      '&:has(:focus-visible)': {
        layerStyle: 'focus',
        outlineColor: 'stroke.primary',
      },
      '&:has([data-invalid], [aria-invalid="true"])': {
        borderColor: 'stroke.danger.strong',
        _dark: { borderColor: 'stroke.danger' },
      },
      '&:has(:disabled, [data-disabled])': { opacity: 'state.disabled' },
    },
    field: {
      color: 'text',
      font: 'inherit',
      resize: 'vertical',
      minWidth: '0',
      _readOnly: { cursor: 'default' },
    },
  },
  variants: {
    size: {
      sm: {
        field: {
          minHeight: 'control.sm',
          paddingInline: controlSizes.sm.paddingInline,
          paddingBlock: 'xs',
          textStyle: controlSizes.sm.textStyle,
        },
      },
      md: {
        field: {
          minHeight: 'control',
          paddingInline: controlSizes.md.paddingInline,
          paddingBlock: 'sm',
          textStyle: controlSizes.md.textStyle,
        },
      },
      lg: {
        field: {
          minHeight: 'control.lg',
          paddingInline: controlSizes.lg.paddingInline,
          paddingBlock: 'md',
          textStyle: controlSizes.lg.textStyle,
        },
      },
    },
    variant: {
      solid: {
        root: {
          backgroundColor: 'bg.raised',
          borderColor: 'transparent',
          '&:has([data-invalid], [aria-invalid="true"])': {
            borderColor: 'stroke.danger.strong',
            _dark: { borderColor: 'stroke.danger' },
          },
        },
      },
      outline: { root: { backgroundColor: 'bg.raised' } },
    },
  },
  defaultVariants: { size: 'md', variant: 'outline' },
});
