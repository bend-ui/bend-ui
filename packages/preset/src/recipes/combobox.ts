import { defineSlotRecipe } from '@pandacss/dev';

export const comboboxRecipe = defineSlotRecipe({
  slots: [
    'root',
    'label',
    'positioner',
    'content',
    'item',
    'itemText',
    'itemIndicator',
    'clearTrigger',
  ],
  className: 'Combobox',
  description: 'A combobox style',
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'sm',
      width: 'full',
    },
    label: {
      color: 'text.strong',
      fontWeight: 'medium',
      textStyle: 'sm',
    },
    positioner: {
      zIndex: 'dropdown',
    },
    content: {
      layerStyle: 'surface.overlay',
      maxHeight: '64',
      overflow: 'auto',
      _hidden: {
        display: 'none',
      },
    },
    item: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingX: 'sm',
      height: 'control.md',
      _hover: {
        bg: 'fill.hover',
      },
      _highlighted: {
        bg: 'fill.hover',
      },
      _disabled: {
        opacity: 'state.disabled',
        cursor: 'not-allowed',
      },
      _selected: {
        bg: 'fill.selected',
      },
    },
    itemText: {
      textStyle: 'sm',
    },
    itemIndicator: {
      color: 'icon.strong',
    },
    clearTrigger: {},
  },
  variants: {
    size: {
      sm: {
        item: { height: 'control.sm', fontSize: 'sm' },
      },
      md: {
        item: { height: 'control.md', fontSize: 'md' },
      },
      lg: {
        item: { height: 'control.lg', fontSize: 'lg' },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
