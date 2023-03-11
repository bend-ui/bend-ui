import { cx } from '@emotion/css';
import { forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import useStyles from './Col.styles';
import type { TilesColProps } from './types';

export const Col = forwardRef<TilesColProps, 'div'>((props, ref) => {
  const {
    children,
    as: Component = 'div',
    span = 1,
    offset = 0,
    ...rest
  } = useDefaultProps('Tiles.Col', props);
  const { styles } = useStyles({ span, offset }, { name: 'TilesCol' });

  return (
    <Component ref={ref} className={cx(styles.col)} {...rest}>
      {children}
    </Component>
  );
});

Col.displayName = 'Tiles.Col';
