import { cx } from '@emotion/css';
import { createComponent } from '@particles/primitives';
import * as styles from './Grid.styles';
import type { GridColProps, GridProps } from './types';

const Col = (props: GridColProps) => {
  const { children, span = 1, offset = 0 } = props;
  return <div className={cx(styles.col({ span, offset }))}>{children}</div>;
};

const Root = (props: GridProps) => {
  const { children } = props;
  return <div className={cx(styles.root)}>{children}</div>;
};

export const Grid = createComponent(Root, { Col }, 'Grid');
