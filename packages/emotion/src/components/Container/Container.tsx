import clsx from 'clsx';
import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { DefaultComponentProps } from '../../types';
import { Box } from '../Box';
import useStyles from './Container.styles';

export type ContainerProps = DefaultComponentProps;

const Container = forwardRef<ContainerProps, 'div'>((props, ref) => {
  const {
    children,
    as = 'div',
    className,
    ...rest
  } = useDefaultProps('Container', props);

  const { styles } = useStyles({}, { name: 'Container' });
  return (
    <Box as={as} ref={ref} className={clsx(styles.root, className)} {...rest}>
      {children}
    </Box>
  );
});

Container.displayName = 'Container';

export default createComponent(Container);
