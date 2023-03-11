import { getTransitionStyles } from './getTransitionStyles';
import { useTransition } from './useTransition';
import type { CSSProperties } from 'react';
import type { TransitionStates } from './getTransitionStyles';
import type { Transitions } from './transitions';
import type { UseTransitionProps } from './useTransition';

export type TransitionProps<T extends string> = UseTransitionProps & {
  children(
    styles: CSSProperties | Record<T, CSSProperties>
  ): React.ReactElement;
  transition?: Transitions | Record<T, Transitions>;
};

const Transition = <T extends string>(props: TransitionProps<T>) => {
  const { children, transition = 'fade', duration = 300, isMounted } = props;
  const { transitionState } = useTransition({
    duration,
    isMounted,
  });

  let transitionStyles = {};

  if (typeof transition === 'object') {
    transitionStyles = Object.keys(transition).reduce((acc, item) => {
      acc[item] = getTransitionStyles({
        transition: transition[item],
        duration,
        state: transitionState as TransitionStates,
      });
      return acc;
    }, {});
  } else if (typeof transition === 'string') {
    transitionStyles = getTransitionStyles({
      transition,
      duration,
      state: transitionState as TransitionStates,
    });
  }

  return transitionState === 'exited' ? null : children(transitionStyles);
};

export default Transition;
