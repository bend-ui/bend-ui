'use client';

import { ComponentPropsWithoutRef } from 'react';
import { particles, HTMLParticlesProps } from '../factory';

export type BoxProps = HTMLParticlesProps<'div'>;

const Box = (props: BoxProps) => {
  const { ref, ...rest } = props;
  return <particles.div ref={ref} {...rest} />;
};

export { Box };
