import { forwardRef } from '@particles/primitives';
import clsx from 'clsx';
import { SXProp } from '../../styles';
import { Box } from '../Box';
import useStyles from './Group.styles';

export type GroupProps = {
  orientation?: 'vertical' | 'horizontal';
  align?: 'start' | 'center' | 'end';
} & SXProp;

export const Group = forwardRef<GroupProps, 'div'>((props, ref) => {
  const {
    children,
    orientation = 'horizontal',
    align = 'start',
    className,
    ...rest
  } = props;
  const { styles } = useStyles({ orientation, align });
  return (
    <Box ref={ref} className={clsx(styles['root'], className)} {...rest}>
      {children}
    </Box>
  );
});
