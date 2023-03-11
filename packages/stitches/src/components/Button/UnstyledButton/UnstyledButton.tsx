import clsx from 'clsx';
import { createComponent, forwardRef } from '@particles/primitives';
import { Box } from '../../Box';
import useStyles from './UnstyledButton.styles';
import type { DefaultComponentProps } from '../../../styles';

export type UnstyledButtonProps = DefaultComponentProps;

const UnstyledButton = forwardRef<UnstyledButtonProps, 'button'>(
  (props, ref) => {
    const { children, as = 'button', className, ...rest } = props;
    const { styles } = useStyles();
    return (
      <Box as={as} ref={ref} className={clsx(styles.root, className)} {...rest}>
        {children}
      </Box>
    );
  }
);

UnstyledButton.displayName = 'UnstyledButton';

export default createComponent(UnstyledButton);
