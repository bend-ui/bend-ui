'use client';

import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { particles, HTMLParticlesProps } from '../factory';

export type BoxProps = HTMLParticlesProps<'div'>;

const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <particles.div ref={ref} {...props} />;
});

export { Box };
