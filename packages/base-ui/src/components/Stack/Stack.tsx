import { cx } from '@bend-ui/styled-system/css';
import { styled } from '@bend-ui/styled-system/jsx';
import { stack, type StackProperties } from '@bend-ui/styled-system/patterns';
import type { Assign, HTMLStyledProps } from '@bend-ui/styled-system/types';

export type StackProps = Assign<HTMLStyledProps<'div'>, StackProperties>;

export const Stack = (props: StackProps) => {
  const { align, justify, direction, gap = 'md', className, ...rest } = props;
  return (
    <styled.div
      className={cx(stack({ align, justify, direction, gap }), className)}
      {...rest}
    />
  );
};
