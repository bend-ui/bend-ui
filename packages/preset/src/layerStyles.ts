import { defineLayerStyles } from '@pandacss/dev';

const focus = {
  outlineOffset: '2px',
  outlineWidth: '2px',
  outlineStyle: 'solid',
  outlineColor: 'stroke.focus',
} as const;

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
        backgroundColor: 'bg.page',
        border: 'weak',
        _focusVisible: focus,
      },
    },
    raised: {
      value: {
        backgroundColor: 'bg.raised',
        border: 'weak',
        borderRadius: 'md',
        boxShadow: 'raised',
        _focusVisible: focus,
      },
    },
    overlay: {
      value: {
        backgroundColor: 'bg.overlay',
        border: 'weak',
        borderRadius: 'md',
        boxShadow: 'overlay',
      },
    },
    translucent: {
      description:
        'Alpha fill over a known readable surface; content stays opaque.',
      value: {
        backgroundColor: 'fill.translucent',
        color: 'text',
        border: 'weak',
        borderRadius: 'md',
      },
    },
    sunken: {
      value: {
        backgroundColor: 'bg.sunken',
        border: 'base',
        borderRadius: 'md',
        boxShadow: 'none',
      },
    },
  },
  focus: {
    DEFAULT: {
      value: focus,
    },
  },
  raised: {
    value: {
      border: 'weak',
      backgroundColor: 'bg.raised',
      boxShadow: 'raised',
    },
  },
  overlay: {
    value: {
      border: 'weak',
      backgroundColor: 'bg.overlay',
      boxShadow: 'overlay',
    },
  },
  panel: {
    value: {
      border: 'weak',
      backgroundColor: 'bg.raised',
    },
  },
});
