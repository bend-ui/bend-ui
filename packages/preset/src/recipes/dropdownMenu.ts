import { defineSlotRecipe } from '@pandacss/dev';

export const dropdownMenuRecipe = defineSlotRecipe({
  className: 'DropdownMenu',
  slots: [
    'root',
    'arrow',
    'arrowTip',
    'checkboxItem',
    'content',
    'indicator',
    'itemGroupLabel',
    'itemGroup',
    'itemIndicator',
    'item',
    'itemText',
    'positioner',
    'radioItemGroup',
    'radioItem',
    'separator',
    'triggerItem',
    'trigger',
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
