import { transitions } from './transitions';
import type { CSSProperties } from 'react';
import type { Transitions } from './transitions';

export const transitionStates = {
  entering: 'in',
  entered: 'in',
  exiting: 'out',
  exited: 'out',
  'pre-entering': 'out',
  'pre-exiting': 'out',
} as const;

export type TransitionStates = keyof typeof transitionStates;

export type GetTransitionStylesProps = {
  transition: Transitions;
  state: TransitionStates;
  duration: number;
};
export const getTransitionStyles = (
  props: GetTransitionStylesProps
): CSSProperties => {
  const { transition, duration, state } = props;

  const shared: CSSProperties = {
    transitionDuration: `${duration}ms`,
  };

  return {
    transitionProperty: transitions[transition].transitionProperty,
    ...shared,
    ...transitions[transition][transitionStates[state]],
  };
};
