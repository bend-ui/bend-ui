import { defineLayerStyles } from '@pandacss/dev';

export const layerStyles = defineLayerStyles({
  container: {
    description: 'Container styles',
    value: {
      backgroundColor: 'surface.subtle',
    },
  },
  surface: {
    DEFAULT: {
      value: {
        backgroundColor: 'surface',
        border: 'base',
        _focus: {},
        _focusVisible: {
          boxShadow: 'inner',
        },
      },
    },
    raised: {
      value: {
        backgroundColor: 'surface.strong',
        border: 'base',
        borderRadius: 'md',
        boxShadow: 'md',
        _focus: {},
        _focusVisible: {
          boxShadow: 'inner',
        },
      },
    },
    overlay: {
      value: {
        backgroundColor: 'surface.overlay',
        border: 'base',
        borderRadius: 'md',
        boxShadow: 'md',
      },
    },
    sunken: {
      value: {
        backgroundColor: 'surface.sunken',
        border: 'base',
        borderRadius: 'md',
        boxShadow: 'md',
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
  // interaction: {
  //   neutral: {
  //     value: {
  //       color: 'neutral.fg',
  //       bgGradient: 'neutral',
  //       borderColor: 'neutral.200',
  //       borderWidth: '1px',
  //       borderStyle: 'solid',
  //       _hover: {
  //         bgGradient: 'to-b',
  //         gradientFrom: 'neutral.50',
  //         gradientTo: 'white',
  //       },
  //     },
  //   },
  //   primary: {
  //     value: {
  //       color: 'primary.fg',
  //       bgGradient: 'primary',
  //       borderColor: 'primary.500',
  //       borderWidth: '1px',
  //       borderStyle: 'solid',
  //       _hover: {
  //         bgGradient: 'to-b',
  //         gradientFrom: 'primary.600',
  //         gradientTo: 'primary.500',
  //       },
  //     },
  //   },
  // },
  raised: {
    value: {
      border: 'subtle',
      backgroundColor: 'bg.raised',
      boxShadow: 'raised',
    },
  },
  overlay: {
    value: {
      border: 'subtle',
      backgroundColor: 'bg.overlay',
      boxShadow: 'overlay',
    },
  },
});
