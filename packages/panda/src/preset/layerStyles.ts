import { defineLayerStyles } from '@pandacss/dev';

export const layerStyles = defineLayerStyles({
  container: {
    description: 'Container styles',
    value: {
      backgroundColor: 'surface',
    },
  },
  element: {
    value: {
      backgroundColor: 'surface',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: { base: 'shark.200', _dark: 'shark.700' },
      _focus: {},
      _focusVisible: {
        boxShadow: 'inner',
      },
    },
  },
});
