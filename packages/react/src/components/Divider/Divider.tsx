'use client';

import { forwardRef } from 'react';
import { particles, HTMLParticlesProps } from '../factory';

export type DividerProps = HTMLParticlesProps<'div'>;

const Divider = forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  return <particles.div ref={ref} {...props} />;
});

export { Divider };
