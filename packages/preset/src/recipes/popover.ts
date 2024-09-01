import { defineSlotRecipe } from '@pandacss/dev';

export const popoverRecipe = defineSlotRecipe({
  className: 'popover',
  slots: [
    'root',
    'trigger',
    'indicator',
    'positioner',
    'content',
    'title',
    'description',
    'arrow',
    'close',
  ],
  base: {
    content: {
      padding: 'base',
      layerStyle: 'panelRaised',
      _open: {
        animation: 'panel.in',
      },
      _closed: {
        animation: 'panel.out',
      },
    },
    title: {
      textStyle: 'title',
    },
  },
});
