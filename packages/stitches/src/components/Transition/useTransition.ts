import { useEffect, useRef, useState } from 'react';

export interface UseTransitionProps {
  isMounted: boolean;
  duration?: number;
}

type TransitionState =
  | 'entering'
  | 'entered'
  | 'exiting'
  | 'exited'
  | 'pre-entering'
  | 'pre-exiting';

export const useTransition = (props: UseTransitionProps) => {
  const { duration, isMounted } = props;
  const timer = useRef(-1);

  const [transitionState, setTransitionState] = useState<TransitionState>(
    isMounted ? 'entered' : 'exited'
  );

  useEffect(() => {
    setTransitionState(isMounted ? 'pre-entering' : 'pre-exiting');
    window.clearTimeout(timer.current);

    const preStateTimeout = window.setTimeout(() => {
      setTransitionState(isMounted ? 'entering' : 'exiting');
    }, 10);

    timer.current = window.setTimeout(() => {
      window.clearTimeout(preStateTimeout);
      setTransitionState(isMounted ? 'entered' : 'exited');
    }, duration);

    return () => {
      window.clearTimeout(timer.current);
    };
  }, [isMounted, duration]);

  return { transitionState };
};
