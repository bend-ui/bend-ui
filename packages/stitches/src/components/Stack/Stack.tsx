import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../styles';
import { Box } from '../Box';
import useStyles from './Stack.styles';

export type StackProps = {
  align?: 'start' | 'center' | 'end';
} & DefaultComponentProps;

export const Stack = forwardRef<StackProps, 'div'>((props, ref) => {
  const { children, align = 'start', ...rest } = props;
  const { styles } = useStyles({ align });
  return (
    <Box ref={ref} className={clsx(styles['root'])} {...rest}>
      {children}
    </Box>
  );
});
