import { defineLayerStyles } from '@pandacss/dev';

export const layerStyles = defineLayerStyles({
  container: {
    description: 'Container styles',
    value: {
      backgroundColor: 'bg.weak',
    },
  },
  surface: {
    DEFAULT: {
      value: {
        backgroundColor: 'fill',
        border: 'base',
        borderRadius: 'surface',
        boxShadow: 'surface',
        _focus: {},
        _focusVisible: {
          boxShadow: 'inner',
        },
      },
    },
    raised: {
      value: {
        backgroundColor: 'fill.strong',
        border: 'base',
        borderRadius: 'surface',
        boxShadow: 'raised',
        _focus: {},
        _focusVisible: {
          boxShadow: 'inner',
        },
      },
    },
    overlay: {
      value: {
        backgroundColor: 'bg.overlay',
        border: 'base',
        borderRadius: 'overlay',
        boxShadow: 'overlay',
      },
    },
    sunken: {
      value: {
        backgroundColor: 'fill.weak',
        border: 'base',
        borderRadius: 'surface',
        boxShadow: 'surface',
      },
    },
  },
  focus: {
    DEFAULT: {
      value: {
        boxShadow: 'focusRing',
        outlineOffset: '2px',
        outlineWidth: '4px',
        outlineStyle: 'solid',
        outlineColor: 'stroke.primary/32',
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
      borderRadius: 'surface',
      backgroundColor: 'bg.raised',
      boxShadow: 'raised',
    },
  },
  overlay: {
    value: {
      border: 'weak',
      borderRadius: 'overlay',
      backgroundColor: 'bg.overlay',
      boxShadow: 'overlay',
    },
  },
  panel: {
    value: {
      border: 'weak',
      borderRadius: 'surface',
      backgroundColor: 'bg.raised',
      boxShadow: 'surface',
    },
  },
});
