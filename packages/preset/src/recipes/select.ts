import { defineSlotRecipe } from '@pandacss/dev';

export const selectRecipe = defineSlotRecipe({
  description: '',
  className: 'Select',
  slots: [
    'root',
    'control',
    'trigger',
    'value',
    'indicator',
    'clear',
    'content',
    'group',
    'content',
    'item',
    'label',
  ],
  base: {
    control: {
      display: 'flex',
      alignItems: 'center',
      gap: 'sm',
      rounded: 'md',
      backgroundColor: 'surface',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: { base: 'shark.200', _dark: 'shark.700' },
      py: 'sm',
      px: 'md',
      _hover: {
        backgroundColor: { base: 'shark.200', _dark: 'shark.700' },
      },
    },
    trigger: {
      flex: '1 1 auto',
      display: 'flex',
      alignItems: 'center',
      justifyItems: 'space-between',
      gap: 'sm',
    },
    value: {},
    indicator: {
      marginLeft: 'auto',
    },
    clear: {
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
      closed: {
        animation: 'panel.out',
      },
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      gap: 'sm',
      _hover: {
        backgroundColor: 'bg.input.hover',
      },
    },
  },
});
