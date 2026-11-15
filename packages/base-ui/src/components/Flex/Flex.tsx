import { cx } from '@bend-ui/styled-system/css';
import { styled } from '@bend-ui/styled-system/jsx';
import { flex, type FlexProperties } from '@bend-ui/styled-system/patterns';
import type { Assign, HTMLStyledProps } from '@bend-ui/styled-system/types';

export type FlexProps = Assign<HTMLStyledProps<'div'>, FlexProperties>;

export const Flex = (props: FlexProps) => {
  const {
    align,
    justify,
    direction,
    wrap,
    basis,
    grow,
    shrink,
    className,
    ...rest
  } = props;
  return (
    <styled.div
      className={cx(
        flex({ align, justify, direction, wrap, basis, grow, shrink }),
        className,
      )}
      {...rest}
    />
  );
};
