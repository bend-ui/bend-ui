'use client';

import { particles, HTMLParticlesProps } from '../factory';

export type DividerProps = HTMLParticlesProps<'div'>;

const Divider = (props: DividerProps) => {
  const { ref, ...rest } = props;
  return <particles.div ref={ref} {...rest} />;
};

export { Divider };
