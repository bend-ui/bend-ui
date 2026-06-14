'use client';

import { bend, HTMLBendUIProps } from '../factory';

export type DividerProps = HTMLBendUIProps<'div'>;

const Divider = (props: DividerProps) => {
  const { ref, ...rest } = props;
  return <bend.div ref={ref} {...rest} />;
};

export { Divider };
