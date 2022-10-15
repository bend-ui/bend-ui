import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../types';
import useStyles from './Nav.styles';

export type NavDropdownItemProps = DefaultComponentProps;

export const NavDropdownItem = forwardRef<NavDropdownItemProps, 'a'>(
  (props, ref) => {
    const { children, as: Component = 'a', className, ...rest } = props;
    const { styles } = useStyles({});
    return (
      <Component ref={ref} className={clsx(styles.link, className)} {...rest}>
        {children}
      </Component>
    );
  }
);
