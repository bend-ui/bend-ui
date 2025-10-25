import { forwardRef } from 'react';
import { HTMLParticlesProps, particles } from '../factory';

export type CodeProps = HTMLParticlesProps<'code'>;

export const Code = forwardRef<HTMLElement, CodeProps>((props, ref) => {
  return <particles.code {...props} ref={ref} />;
});
