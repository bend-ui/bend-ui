import { defineSlotRecipe } from '@pandacss/dev';

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
      rounded: 'md',
      backgroundColor: 'fill',
      border: 'base',
    },
    trigger: {
      flex: '1 1 auto',
      display: 'flex',
      alignItems: 'center',
      py: 'sm',
      px: 'md',
      gap: 'sm',
    },
    valueText: {
      textAlign: 'left',
    },
    indicator: {
      marginLeft: 'auto',
    },
    clearTrigger: {
      flex: 'none',
    },
  },
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
      rounded: 'md',
      layerStyle: 'overlay',
      py: 'sm',
      px: 'md',
      _open: {
        animation: 'overlay.in',
      },
      _closed: {
        animation: 'overlay.out',
      },
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'sm',
      _hover: {
        backgroundColor: 'fill.hover',
      },
    },
  },
});
