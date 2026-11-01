import { defineSlotRecipe } from '@pandacss/dev';
import { controlSizes } from './control-sizes';

export const selectRecipe = defineSlotRecipe({
  slots: [
    'root',
    'control',
    'trigger',
    'valueText',
    'clearTrigger',
    'content',
    'indicator',
    'itemGroupLabel',
    'itemGroup',
    'item',
    'itemText',
    'itemIndicator',
    'label',
    'positioner',
  ],
  description: '',
  className: 'Select',
  base: {
    control: {
      gap: 'sm',
      rounded: 'control',
      backgroundColor: 'fill',
      border: 'base',
      _focusWithin: { layerStyle: 'focus' },
    },
    trigger: {
      rounded: 'control',
      backgroundColor: 'fill',
      border: 'base',
      _focusVisible: {
        '&:not(:where(.Select__control *))': { layerStyle: 'focus' },
      },
      _disabled: { opacity: 'state.disabled', cursor: 'disabled' },
      flex: '1 1 auto',
      display: 'flex',
      alignItems: 'center',
      paddingBlock: '0',
      alignSelf: 'stretch',
      gap: 'sm',
      // Grouped adapters retain the surrounding Control's visual treatment.
      ':where(.Select__control) &': {
        backgroundColor: 'transparent',
        border: '0',
        rounded: 'inherit',
        minHeight: 'auto',
      },
    },
    valueText: {
      textAlign: 'start',
    },
    indicator: {
      marginLeft: 'auto',
    },
    clearTrigger: {
      flex: 'none',
    },
  },
  variants: {
    size: {
      sm: {
        control: {
          minHeight: controlSizes.sm.minHeight,
          textStyle: controlSizes.sm.textStyle,
        },
        trigger: {
          minHeight: controlSizes.sm.minHeight,
          textStyle: controlSizes.sm.textStyle,
          paddingInline: controlSizes.sm.paddingInline,
          gap: controlSizes.sm.gap,
        },
      },
      md: {
        control: {
          minHeight: controlSizes.md.minHeight,
          textStyle: controlSizes.md.textStyle,
        },
        trigger: {
          minHeight: controlSizes.md.minHeight,
          textStyle: controlSizes.md.textStyle,
          paddingInline: controlSizes.md.paddingInline,
          gap: controlSizes.md.gap,
        },
      },
      lg: {
        control: {
          minHeight: controlSizes.lg.minHeight,
          textStyle: controlSizes.lg.textStyle,
        },
        trigger: {
          minHeight: controlSizes.lg.minHeight,
          textStyle: controlSizes.lg.textStyle,
          paddingInline: controlSizes.lg.paddingInline,
          gap: controlSizes.lg.gap,
        },
      },
    },
  },
  defaultVariants: { size: 'md' },
});

export const selectDropdownRecipe = defineSlotRecipe({
  slots: [
    'root',
    'control',
    'trigger',
    'valueText',
    'clearTrigger',
    'content',
    'indicator',
    'itemGroupLabel',
    'itemGroup',
    'item',
    'itemText',
    'itemIndicator',
    'label',
    'positioner',
  ],
  className: 'SelectDropdown',
  base: {
    content: {
      rounded: 'overlay',
      layerStyle: 'overlay',
      maxHeight: 'min(20rem, var(--available-height, calc(100dvh - 2rem)))',
      maxWidth: 'var(--available-width, calc(100vw - 2rem))',
      overflowY: 'auto',
      py: 'sm',
      px: 'sm',
      _open: {
        animation: 'fade-in',
      },
      _closed: {
        animation: 'fade-out',
      },
    },
    item: {
      rounded: 'max(0px, calc({radii.overlay} - {spacing.sm}))',
      paddingInline: 'sm',
      paddingBlock: 'xs',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'sm',
      _notDisabled: {
        _hover: { backgroundColor: 'fill.hover' },
      },
      _highlighted: { backgroundColor: 'fill.hover' },
      _selected: { fontWeight: 'semibold' },
      _disabled: { opacity: 'state.disabled', cursor: 'disabled' },
    },
  },
});
