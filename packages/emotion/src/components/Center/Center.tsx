import clsx from 'clsx';
import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { DefaultComponentProps } from '../../types';
import { Box } from '../Box';
import useStyles from './Center.styles';

export type CenterProps = DefaultComponentProps;

const Center = forwardRef<CenterProps, 'div'>((props, ref) => {
  const { children, as = 'div', ...rest } = useDefaultProps('Center', props);
  const { styles } = useStyles({}, { name: 'Center' });

  return (
    <Box as={as} ref={ref} className={clsx(styles.root)} {...rest}>
      {children}
    </Box>
  );
});

Center.displayName = 'Center';

export default createComponent(Center);
