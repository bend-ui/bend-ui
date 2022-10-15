import { cx } from '@emotion/css';
import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { TilesProps } from './types';
import useStyles from './Tiles.styles';
import { Col } from './Col';

const Tiles = forwardRef<TilesProps, 'div'>((props, ref) => {
  const {
    children,
    as: Component = 'div',
    columns = 3,
    ...rest
  } = useDefaultProps('Tiles', props);

  const { styles } = useStyles({ columns }, { name: 'Tiles' });

  return (
    <Component ref={ref} className={cx(styles.root)} {...rest}>
      {children}
    </Component>
  );
});

Tiles.displayName = 'Tiles';

export default createComponent(Tiles, { Col });
