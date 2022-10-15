export const transitions = {
  fade: {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    transitionProperty: 'opacity',
  },
  'slide-up': {
    from: { opacity: 0, transform: 'translateY(100%)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(100%)' },
    common: { transformOrigin: 'bottom' },
    transitionProperty: 'transform, opacity',
  },
};

export type ParticlesTransition = keyof typeof transitions;
