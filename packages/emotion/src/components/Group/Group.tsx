import clsx from 'clsx';
import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { DefaultComponentProps } from '../../types';
import { Box } from '../Box';
import useStyles from './Group.styles';

type GroupProps = DefaultComponentProps;

const Group = forwardRef<GroupProps, 'div'>((props, ref) => {
  const { children, as = 'div', ...rest } = useDefaultProps('Group', props);
  const { styles } = useStyles({}, { name: 'Group' });
  return (
    <Box as={as} ref={ref} className={clsx(styles.root)} {...rest}>
      {children}
    </Box>
  );
});

export default createComponent(Group);
