import { defineSlotRecipe } from '@pandacss/dev';
import { controlSizes } from './control-sizes';

const groupedTrigger = ':where(.Select__control) &';

// Size variants live in a later cascade layer than base styles, so the grouped
// reset must be repeated here or the trigger keeps its standalone min-height
// and the Control's border makes the group taller than sibling controls.
const triggerSize = (size: keyof typeof controlSizes) => ({
  minHeight: controlSizes[size].minHeight,
  textStyle: controlSizes[size].textStyle,
  paddingInline: controlSizes[size].paddingInline,
  gap: controlSizes[size].gap,
  [groupedTrigger]: { minHeight: 'auto' },
});

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
      [groupedTrigger]: {
        backgroundColor: 'transparent',
        border: '0',
        rounded: 'inherit',
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
        trigger: triggerSize('sm'),
      },
      md: {
        control: {
          minHeight: controlSizes.md.minHeight,
          textStyle: controlSizes.md.textStyle,
        },
        trigger: triggerSize('md'),
      },
      lg: {
        control: {
          minHeight: controlSizes.lg.minHeight,
          textStyle: controlSizes.lg.textStyle,
        },
        trigger: triggerSize('lg'),
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
