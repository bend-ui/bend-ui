import { Children } from 'react';
import { createComponent, forwardRef, useDivider } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { Box } from '../Box';
import useStyles from './Divider.styles';
import type { DefaultComponentProps } from '../../types';

type DividerProps = DefaultComponentProps & {
  labelPosition?: 'start' | 'center' | 'end';
};

const Divider = forwardRef<DividerProps, 'div'>((props, ref) => {
  const {
    children,
    labelPosition = 'center',
    ...rest
  } = useDefaultProps('Divider', props);
  const { getDividerProps } = useDivider();
  const withContent = Children.toArray(children).length > 0;
  const { styles } = useStyles(
    { withContent, labelPosition },
    { name: 'Divider' }
  );
  return (
    <Box ref={ref} className={styles.root} {...getDividerProps()} {...rest}>
      {children}
    </Box>
  );
});

export default createComponent(Divider);
