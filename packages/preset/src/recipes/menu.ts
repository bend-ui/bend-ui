import { defineSlotRecipe } from '@pandacss/dev';

export const menuRecipe = defineSlotRecipe({
  slots: [
    'root',
    'trigger',
    'positioner',
    'content',
    'arrow',
    'arrowTip',
    'checkboxItem',
    'indicator',
    'itemGroupLabel',
    'itemGroup',
    'itemIndicator',
    'item',
    'itemText',
    'radioGroup',
    'separator',
  ],
  className: 'Menu',
  base: {
    root: {
      padding: 'sm',
      layerStyle: 'surface.overlay',
      color: 'text',
      maxWidth: 'var(--available-width, calc(100vw - 1rem))',
      maxHeight: 'var(--available-height, calc(100vh - 1rem))',
      overflowY: 'auto',
    },
    item: {
      padding: 'sm',
      borderRadius: 'sm',
      cursor: 'pointer',
      color: 'text',
      _highlighted: {
        backgroundColor: 'bg.page',
      },
      _disabled: { opacity: 'state.disabled', cursor: 'disabled' },
    },
    checkboxItem: {
      padding: 'sm',
      borderRadius: 'sm',
      color: 'text',
      _highlighted: {
        backgroundColor: 'bg.page',
      },
      _disabled: { opacity: 'state.disabled', cursor: 'disabled' },
    },
    separator: { height: '1px', backgroundColor: 'stroke.focus', my: '1' },
  },
});
