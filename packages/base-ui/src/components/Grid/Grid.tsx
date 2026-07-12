import { cx } from '@bend-ui/styled-system/css';
import { styled } from '@bend-ui/styled-system/jsx';
import {
  grid,
  gridItem,
  type GridItemStyles,
  type GridStyles,
} from '@bend-ui/styled-system/patterns';
import type { Assign, HTMLStyledProps } from '@bend-ui/styled-system/types';

export type GridProps = Assign<HTMLStyledProps<'div'>, GridStyles>;
export type GridItemProps = Assign<HTMLStyledProps<'div'>, GridItemStyles>;

const Root = (props: GridProps) => {
  const {
    columns,
    gap,
    rowGap,
    columnGap,
    minChildWidth,
    className,
    ...rest
  } = props;
  return (
    <styled.div
      className={cx(
        grid({ columns, gap, rowGap, columnGap, minChildWidth }),
        className,
      )}
      {...rest}
    />
  );
};

const Item = (props: GridItemProps) => {
  const {
    colSpan,
    rowSpan,
    colStart,
    rowStart,
    colEnd,
    rowEnd,
    className,
    ...rest
  } = props;
  return (
    <styled.div
      className={cx(
        gridItem({ colSpan, rowSpan, colStart, rowStart, colEnd, rowEnd }),
        className,
      )}
      {...rest}
    />
  );
};

export const Grid = Object.assign(Root, { Root, Item });
