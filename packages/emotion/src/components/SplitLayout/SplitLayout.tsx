import clsx from 'clsx';
import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { Box } from '../Box';
import useStyles from './SplitLayout.styles';
import type { DefaultComponentProps } from '../../types';

export type SplitLayoutProps = DefaultComponentProps;

const SplitLayout = forwardRef<SplitLayoutProps, 'div'>((props, ref) => {
  const {
    children,
    as = 'div',
    ...rest
  } = useDefaultProps('SplitLayout', props);
  const { styles } = useStyles({}, { name: 'SplitLayout' });

  return (
    <Box as={as} ref={ref} className={clsx(styles.root)} {...rest}>
      {children}
    </Box>
  );
});

SplitLayout.displayName = 'SplitLayout';

export default createComponent(SplitLayout);
