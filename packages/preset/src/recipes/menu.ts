import { defineSlotRecipe } from '@pandacss/dev';

const pressed = { backgroundColor: 'fill.translucent.active' } as const;
const selection = {
  backgroundColor: 'fill.translucent.selected',
  _hover: {
    '@media (hover: hover)': {
      '&:not(:active)': { backgroundColor: 'fill.translucent.selected' },
    },
  },
  _highlighted: {
    backgroundColor: 'fill.translucent.selected',
    _active: pressed,
    _pressed: pressed,
  },
  _active: pressed,
  _pressed: pressed,
} as const;

// All selectable item kinds share one treatment; upstream state stays native.
const item = {
  padding: 'sm',
  borderRadius: 'sm',
  color: 'text',
  cursor: 'pointer',
  _notDisabled: {
    _hover: {
      '@media (hover: hover)': {
        '&:not(:active)': { backgroundColor: 'fill.translucent.hover' },
      },
    },
    _highlighted: { backgroundColor: 'fill.translucent.hover' },
    _selected: selection,
    _checked: selection,
    _active: { backgroundColor: 'fill.translucent.active' },
    _pressed: { backgroundColor: 'fill.translucent.active' },
  },
  // Native Menu disabled items remain arrow-key focusable for discoverability.
  _focusVisible: { layerStyle: 'focus', outlineOffset: '-2px' },
  _disabled: { color: 'text.disabled', cursor: 'disabled' },
} as const;

export const menuRecipe = defineSlotRecipe({
  slots: [
    'root',
    'arrow',
    'arrowTip',
    'checkboxItem',
    'indicator',
    'itemGroupLabel',
    'itemGroup',
    'itemIndicator',
    'item',
    'itemText',
  ],
  className: 'Menu',
  base: {
    root: {
      padding: 'md',
      layerStyle: 'surface.overlay',
      color: 'text',
    },
    item,
    checkboxItem: item,
  },
});
