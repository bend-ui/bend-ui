import { defineSlotRecipe } from '@pandacss/dev';

export const selectRecipe = defineSlotRecipe({
  description: '',
  className: 'Select',
  slots: [
    'root',
    'clearTrigger',
    'content',
    'control',
    'indicator',
    'itemGroupLabel',
    'itemGroup',
    'itemIndicator',
    'item',
    'itemText',
    'label',
    'positioner',
    'trigger',
    'valueText',
  ],
  base: {
    control: {
      gap: 'sm',
      rounded: 'md',
      backgroundColor: 'bg.surface',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border.input',
    },
    trigger: {
      flex: '1 1 auto',
      display: 'flex',
      alignItems: 'center',
      justifyItems: 'space-between',
      py: 'sm',
      px: 'md',
      gap: 'sm',
    },
    valueText: {},
    indicator: {
      marginLeft: 'auto',
    },
    clearTrigger: {
      flex: 'none',
    },
    content: {
      rounded: 'md',
      layerStyle: 'panelRaised',
      py: 'sm',
      px: 'md',
      width: 'full',
      minW: '240px',
      _open: {
        animation: 'panel.in',
      },
      _closed: {
        animation: 'panel.out',
      },
    },
    item: {
      gap: 'sm',
      _hover: {
        backgroundColor: 'bg.input.hover',
      },
    },
  },
});
