import { cx } from '@emotion/css';
import { createComponent } from '@particles/primitives';
import { GridColProps, GridProps } from './types';
import * as styles from './Grid.styles';

const Col: React.FC<GridColProps> = (props) => {
  const { children, span = 1, offset = 0 } = props;
  return <div className={cx(styles.col({ span, offset }))}>{children}</div>;
};

Col.displayName = 'Grid.Col';

const Root: React.FC<GridProps> = (props) => {
  const { children } = props;
  return <div className={cx(styles.root)}>{children}</div>;
};

Root.displayName = 'Grid';

export const Grid = createComponent(Root, { Col });
