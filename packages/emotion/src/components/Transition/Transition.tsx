import { CSSProperties } from 'react';
import { useTransition } from 'transition-hook';
import { createComponent } from '@particles/primitives';
import { getTransitionStyles } from './getTransitionStyles';
import type { ParticlesTransition } from './transitions';

export type TransitionProps = {
  children?: (styles: CSSProperties) => React.ReactNode;
  isMounted: boolean;
  duration?: number;
  transition?: ParticlesTransition;
};

const Transition = (props: TransitionProps) => {
  const { children, isMounted, duration = 300, transition = 'fade' } = props;
  const { stage, shouldMount } = useTransition(isMounted, duration);
  return (
    shouldMount && (
      <>{children(getTransitionStyles(transition, stage, duration))}</>
    )
  );
};

export default createComponent(Transition);
