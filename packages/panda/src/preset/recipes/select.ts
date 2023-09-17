import { defineSlotRecipe } from '@pandacss/dev';

export const selectRecipe = defineSlotRecipe({
  description: '',
  className: 'Select',
  slots: [
    'root',
    'trigger',
    'value',
    'content',
    'group',
    'content',
    'item',
    'label',
  ],
  base: {
    trigger: {
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
    content: {
      rounded: 'md',
      layerStyle: 'element',
      py: 'sm',
      px: 'md',
      minW: '240px',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      gap: 'sm',
    },
  },
});
