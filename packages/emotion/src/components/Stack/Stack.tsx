import clsx from 'clsx';
import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { DefaultComponentProps } from '../../types';
import { Box } from '../Box';
import useStyles from './Stack.styles';

const COMPONENT_NAME = 'Stack';

type StackProps = DefaultComponentProps & {
  align?: 'start' | 'center' | 'end' | 'stretch';
};

const Stack = forwardRef<StackProps, 'div'>((props, ref) => {
  const {
    children,
    as = 'div',
    align = 'start',
    ...rest
  } = useDefaultProps(COMPONENT_NAME, props);
  const { styles } = useStyles({ align }, { name: COMPONENT_NAME });

  return (
    <Box as={as} ref={ref} className={clsx(styles.root)} {...rest}>
      {children}
    </Box>
  );
});

Stack.displayName = COMPONENT_NAME;

export default createComponent(Stack);
