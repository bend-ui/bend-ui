import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../types';
import useStyles from './Nav.styles';

export type NavDropdownProps = DefaultComponentProps;

export const NavDropdown = forwardRef<NavDropdownProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', className, ...rest } = props;
  const { styles } = useStyles({});

  return (
    <Component ref={ref} className={clsx(styles.dropdown, className)} {...rest}>
      {children}
    </Component>
  );
});
