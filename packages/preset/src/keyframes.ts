import { defineKeyframes } from '@pandacss/dev';

export const keyframes = defineKeyframes({
  fadeIn: {
    from: { opacity: '0' },
    to: { opacity: '1' },
  },
  fadeOut: {
    from: { opacity: '1' },
    to: { opacity: '0' },
  },
  overlayIn: {
    from: { opacity: '0' },
    to: { opacity: '0.8' },
  },
  overlayOut: {
    from: { opacity: '0.8' },
    to: { opacity: '0' },
  },
});
