export const transitions = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: 'opacity',
  },
  'slide-up': {
    in: { opacity: 1, transform: 'translateY(0)', transformOrigin: 'bottom' },
    out: { opacity: 0, transform: 'translateY(100%)', transformOrigin: 'bottom' },
    transitionProperty: 'transform, opacity',
  },
};

export type Transitions = keyof typeof transitions;
