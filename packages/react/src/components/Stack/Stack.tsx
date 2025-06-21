import { stack, StackProperties } from '@particles/styled-system/patterns';
import { particles, HTMLParticlesProps } from '../factory';
import { forwardRef } from 'react';
import { cx } from '@particles/styled-system/css';
import { Assign } from '@ark-ui/react';

export interface StackProps
  extends Assign<HTMLParticlesProps<'div'>, StackProperties> {
  children: React.ReactNode;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const {
    children,
    className,
    align,
    justify,
    direction,
    gap = 'md',
    ...rest
  } = props;
  return (
    <particles.div
      className={cx(stack({ align, justify, direction, gap }), className)}
      ref={ref}
      {...rest}
    >
      {children}
    </particles.div>
  );
});
