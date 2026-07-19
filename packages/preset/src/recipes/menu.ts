import { defineSlotRecipe } from '@pandacss/dev';

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
      // _open: {
      //   animation: 'dialog-in',
      // },
      // _closed: {
      //   animation: 'dialog-out',
      // },
    },
    item: {
      padding: 'sm',
      borderRadius: 'sm',
      cursor: 'pointer',
      _hover: {
        backgroundColor: 'fill.hover',
      },
    },
  },
});
