import { useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// TODO: Implement useTransition

export type TransitionStatus = 'entered' | 'exited' | 'entering' | 'exiting';

interface UseTransitionProps {
  duration: number;
  isMounted: boolean;
  onEnter?: () => void;
  onExit?: () => void;
}

export const useTransition = (props: UseTransitionProps) => {
  const { duration, isMounted } = props;

  const hasReducedMotion = useReducedMotion();
  const transitionDuration = hasReducedMotion ? 0 : duration;
  const [transitionStatus] = useState<TransitionStatus>(
    isMounted ? 'entered' : 'exited',
  );

  return {
    transitionDuration,
    transitionStatus,
  };
};
