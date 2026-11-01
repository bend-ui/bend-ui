import { defineSlotRecipe } from '@pandacss/dev';
import { controlSizes } from './control-sizes';

export const inputRecipe = defineSlotRecipe({
  slots: ['root', 'wrapper', 'input', 'icon', 'element', 'addon'],
  description: 'Input styles',
  className: 'Input',
  base: {
    root: {
      rounded: 'control',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      divideX: '1px',
      _hover: {
        cursor: 'text',
      },
      _focusWithin: {
        layerStyle: 'focus',
      },
      _invalid: {
        border: 'danger',
      },
      _disabled: {
        opacity: 'state.disabled',
      },
    },
    wrapper: {
      '&[type="text"]': {
        cursor: 'text',
      },
    },
    input: {
      outline: 'none',
      minWidth: '0',
      alignSelf: 'stretch',
      font: 'inherit',
      fontSize: '1rem',
      paddingBlock: '0',
    },
    icon: {
      width: '1lh',
      height: '1lh',
      '& > svg': {
        width: '100%',
        height: '100%',
      },
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          minHeight: controlSizes.sm.minHeight,
          textStyle: controlSizes.sm.textStyle,
        },
        input: { minHeight: 'calc({sizes.control.sm} - 2px)' },
        wrapper: {
          paddingInline: controlSizes.sm.paddingInline,
          gap: controlSizes.sm.gap,
        },
        addon: { paddingInline: controlSizes.sm.paddingInline },
      },
      md: {
        root: {
          minHeight: controlSizes.md.minHeight,
          textStyle: controlSizes.md.textStyle,
        },
        input: { minHeight: 'calc({sizes.control} - 2px)' },
        wrapper: {
          paddingInline: controlSizes.md.paddingInline,
          gap: controlSizes.md.gap,
        },
        addon: { paddingInline: controlSizes.md.paddingInline },
      },
      lg: {
        root: {
          minHeight: controlSizes.lg.minHeight,
          textStyle: controlSizes.lg.textStyle,
        },
        input: { minHeight: 'calc({sizes.control.lg} - 2px)' },
        wrapper: {
          paddingInline: controlSizes.lg.paddingInline,
          gap: controlSizes.lg.gap,
        },
        addon: { paddingInline: controlSizes.lg.paddingInline },
      },
    },
    variant: {
      solid: {
        root: {
          backgroundColor: 'fill',
        },
      },
      outline: {
        root: {
          backgroundColor: 'fill',
          border: 'weak',
          divideColor: 'stroke.weak',
          shadow: 'xs',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});
