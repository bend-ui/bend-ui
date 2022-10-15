import clsx from 'clsx';
import { createComponent, forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../types';
import { Box } from '../Box';
import { useDefaultProps } from '../../theme';
import useStyles from './Breadcrumb.styles';

export type BreadcrumbProps = DefaultComponentProps;

const Breadcrumb = forwardRef<BreadcrumbProps, 'div'>((props, ref) => {
  const {
    children,
    as = 'div',
    ...rest
  } = useDefaultProps('Breadcrumb', props);
  const { styles } = useStyles();
  return (
    <Box as={as} ref={ref} className={clsx(styles.root)} {...rest}>
      {children}
    </Box>
  );
});

Breadcrumb.displayName = 'Breadcrumb';

export default createComponent(Breadcrumb);
