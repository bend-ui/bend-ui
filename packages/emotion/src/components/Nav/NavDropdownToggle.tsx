import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { Box } from '../Box';
import useStyles from './Nav.styles';
import type { DefaultComponentProps } from '../../types';

export type NavDropdownToggleProps = DefaultComponentProps & {
  icon?: React.ReactNode;
};

export const NavDropdownToggle = forwardRef<NavDropdownToggleProps, 'a'>(
  (props, ref) => {
    const { children, as = 'a', className, icon, ...rest } = props;
    const { styles } = useStyles({});
    return (
      <Box ref={ref} className={clsx(styles.link, className)} {...rest}>
        {icon}
        {children}
      </Box>
    );
  }
);
