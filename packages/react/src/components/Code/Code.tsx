import { HTMLParticlesProps, particles } from '../factory';

export type CodeProps = HTMLParticlesProps<'code'>;

export const Code = (props: CodeProps) => {
  const { ref, ...rest } = props;
  return <particles.code {...rest} ref={ref} />;
};
