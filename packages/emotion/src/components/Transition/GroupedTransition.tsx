import { useTransition } from 'transition-hook';
import { createComponent } from '@particles/primitives';
import { getTransitionStyles } from './getTransitionStyles';
import type { CSSProperties } from 'react';
import type { ParticlesTransition } from './transitions';

interface TransitionParams {
  duration?: number;
  transition?: ParticlesTransition;
}

interface GroupedTransitionsProps<T extends string = string> {
  transitions: Record<T, TransitionParams>;
}

export type TransitionProps<T extends string> = {
  children?: (styles: Record<T, CSSProperties>) => React.ReactNode;
  isMounted: boolean;
  duration?: number;
} & GroupedTransitionsProps<T>;

const GroupedTransition = <T extends string>(props: TransitionProps<T>) => {
  const { children, isMounted, transitions, duration = 300 } = props;
  const { stage, shouldMount } = useTransition(isMounted, duration);

  const transitionStyles = Object.keys(transitions).reduce(
    (acc, element) =>
      Object.assign(acc, {
        [element]: getTransitionStyles(
          transitions[element].transition || 'fade',
          stage,
          transitions[element].duration || 300
        ),
      }),
    {} as Record<T, CSSProperties>
  );

  return shouldMount && <>{children(transitionStyles)}</>;
};

export default createComponent(GroupedTransition);
