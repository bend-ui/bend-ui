import { defineSlotRecipe } from '@pandacss/dev';

export const dropdownMenuRecipe = defineSlotRecipe({
  className: 'dropdownMenu',
  slots: [
    'root',
    'trigger',
    'group',
    'portal',
    'sub',
    'radioGroup',
    'subTrigger',
    'subContent',
    'content',
    'item',
    'itemIndicator',
    'checkboxItem',
    'radioItem',
    'label',
    'separator',
    'shortcut',
  ],
  base: {
    content: {
      padding: 'md',
      layerStyle: 'panelRaised',
      _open: {
        animation: 'panel.in',
      },
      _closed: {
        animation: 'panel.out',
      },
    },
  },
});
