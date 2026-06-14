import { HTMLBendUIProps, bend } from '../factory';

export type CodeProps = HTMLBendUIProps<'code'>;

export const Code = (props: CodeProps) => {
  const { ref, ...rest } = props;
  return <bend.code {...rest} ref={ref} />;
};
