import clsx from 'clsx';
import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { Box } from '../Box';
import useStyles from './Heading.styles';
import type { DefaultComponentProps } from '../../types';

export type HeadingProps = DefaultComponentProps & {
  variant?: 'display' | 'title' | 'subtitle';
};

const Heading = forwardRef<HeadingProps, 'h2'>((props, ref) => {
  const {
    children,
    as = 'h2',
    className,
    variant = 'title',
    ...rest
  } = useDefaultProps('Heading', props);

  const { styles } = useStyles({ variant }, { name: 'Heading' });

  return (
    <Box as={as} ref={ref} className={clsx(styles.root, className)} {...rest}>
      {children}
    </Box>
  );
});

Heading.displayName = 'Heading';

export default createComponent(Heading);
