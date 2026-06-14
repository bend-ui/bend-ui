'use client';

import { stack, StackProperties } from '@bend-ui/styled-system/patterns';
import { bend, HTMLBendUIProps } from '../factory';
import { cx } from '@bend-ui/styled-system/css';
import { Assign } from '@ark-ui/react';

export interface StackProps
  extends Assign<HTMLBendUIProps<'div'>, StackProperties> {
  children: React.ReactNode;
}

export const Stack = (props: StackProps) => {
  const {
    ref,
    children,
    className,
    align,
    justify,
    direction,
    gap = 'md',
    ...rest
  } = props;
  return (
    <bend.div
      className={cx(stack({ align, justify, direction, gap }), className)}
      ref={ref}
      {...rest}
    >
      {children}
    </bend.div>
  );
};
