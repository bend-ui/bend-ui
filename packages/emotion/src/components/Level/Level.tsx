import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { Box } from '../Box';
import useStyles from './Level.styles';
import type { DefaultComponentProps } from '../../types';

export type LevelProps = DefaultComponentProps & { children?: React.ReactNode };

const Level = forwardRef<LevelProps, 'div'>((props, ref) => {
  const { children, as = 'div', ...rest } = useDefaultProps('Level', props);

  const { styles } = useStyles({}, { name: 'Level' });

  return (
    <Box as={as} ref={ref} className={styles.root} {...rest}>
      {children}
    </Box>
  );
});

export default createComponent(Level);
