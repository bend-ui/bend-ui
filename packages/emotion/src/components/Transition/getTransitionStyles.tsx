import { CSSProperties } from 'react';
import { ParticlesTransition, transitions } from './transitions';

export const getTransitionStyles = (
  transition: ParticlesTransition,
  stage: 'from' | 'enter' | 'leave',
  duration: number
): CSSProperties => {
  const sharedStyles = {
    transition: `${duration}ms`,
  };

  return {
    transitionProperty: transitions[transition].transitionProperty,
    ...sharedStyles,
    ...transitions[transition]['common'],
    ...transitions[transition][stage],
  };
};
