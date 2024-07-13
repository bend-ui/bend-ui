import { defineLayerStyles } from '@pandacss/dev';

export const layerStyles = defineLayerStyles({
  container: {
    description: 'Container styles',
    value: {
      backgroundColor: 'surface',
    },
  },
  panel: {
    value: {
      backgroundColor: 'bg.surface',
      border: 'base',
      _focus: {},
      _focusVisible: {
        boxShadow: 'inner',
      },
    },
  },
  panelRaised: {
    value: {
      backgroundColor: 'bg.surface.raise',
      border: 'base',
      borderRadius: 'md',
      _focus: {},
      _focusVisible: {
        boxShadow: 'inner',
      },
    },
  },
  focus: {
    DEFAULT: {
      value: {
        boxShadow: 'focusRing',
      },
    },
  },
});
