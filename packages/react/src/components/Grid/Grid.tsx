'use client';

import { bend, HTMLBendUIProps } from '../factory';
import {
  grid,
  gridItem,
  type GridStyles,
  type GridItemStyles,
} from '@bend-ui/styled-system/patterns';

interface GridProps extends HTMLBendUIProps<'div'> {
  columns?: GridStyles['columns'];
  gap?: GridStyles['gap'];
  rowGap?: GridStyles['rowGap'];
  columnGap?: GridStyles['columnGap'];
  minChildWidth?: GridStyles['minChildWidth'];
}

const Root = (props: GridProps) => {
  const { ref, columns, gap, rowGap, columnGap, minChildWidth, ...rest } = props;
  return (
    <bend.div
      ref={ref}
      className={grid({ columns, gap, rowGap, columnGap, minChildWidth })}
      {...rest}
    />
  );
};

interface GridItemProps extends HTMLBendUIProps<'div'> {
  colSpan?: GridItemStyles['colSpan'];
  rowSpan?: GridItemStyles['rowSpan'];
  colStart?: GridItemStyles['colStart'];
  rowStart?: GridItemStyles['rowStart'];
  colEnd?: GridItemStyles['colEnd'];
  rowEnd?: GridItemStyles['rowEnd'];
}

const Item = (props: GridItemProps) => {
  const { ref, colSpan, rowSpan, colStart, rowStart, colEnd, rowEnd, ...rest } =
    props;
  return (
    <bend.div
      ref={ref}
      className={gridItem({
        colSpan,
        rowSpan,
        colStart,
        rowStart,
        colEnd,
        rowEnd,
      })}
      {...rest}
    />
  );
};

export const Grid = Object.assign(Root, { Root, Item });
