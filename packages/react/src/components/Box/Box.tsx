'use client';

import { ComponentPropsWithoutRef } from 'react';
import { bend, HTMLBendUIProps } from '../factory';

export type BoxProps = HTMLBendUIProps<'div'>;

const Box = (props: BoxProps) => {
  const { ref, ...rest } = props;
  return <bend.div ref={ref} {...rest} />;
};

export { Box };
