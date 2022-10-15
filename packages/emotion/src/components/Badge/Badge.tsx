import { createComponent, forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../types';
import { useDefaultProps } from '../../theme';
import { Box } from '../Box';
import useStyles from './Badge.styles';

export type BadgeProps = DefaultComponentProps & {
  variant?: 'solid' | 'outline' | 'subtle';
  palette?: 'primary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
};

const Badge = forwardRef<BadgeProps, 'div'>((props, ref) => {
  const {
    children,
    as = 'span',
    palette = 'primary',
    size = 'md',
    ...rest
  } = useDefaultProps('Badge', props);
  const { styles } = useStyles({ palette, size }, { name: 'Badge' });
  return (
    <Box as={as} ref={ref} className={styles.root} {...rest}>
      {children}
    </Box>
  );
});

Badge.displayName = 'Badge';

export default createComponent(Badge);
