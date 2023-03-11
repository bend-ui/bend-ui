import clsx from 'clsx';
import { createComponent, forwardRef } from '@particles/primitives';
import { NavContext } from './NavContext';
import { NavDropdownItem } from './NavDropdownItem';
import { NavDropdownToggle } from './NavDropdownToggle';
import { NavDropdown } from './NavDropdown';
import { NavLink } from './NavLink';
import useStyles from './Nav.styles';
import type { DefaultComponentProps } from '../../types';

export type NavProps = DefaultComponentProps & {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'underline' | 'tab' | 'pill' | 'subtle';
  isFull?: boolean;
};

const Nav = forwardRef<NavProps, 'div'>((props, ref) => {
  const {
    children,
    as: Component = 'div',
    className,
    orientation = 'horizontal',
    variant = 'underline',
    isFull,
    ...rest
  } = props;
  const { styles } = useStyles(
    { orientation, variant, isFull },
    { name: 'Nav' }
  );
  return (
    <NavContext.Provider value={{ orientation, variant, isFull }}>
      <Component ref={ref} className={clsx(styles.root, className)} {...rest}>
        {children}
      </Component>
    </NavContext.Provider>
  );
});

Nav.displayName = 'Nav';

export default createComponent(Nav, {
  Link: NavLink,
  Dropdown: NavDropdown,
  DropdownToggle: NavDropdownToggle,
  DropdownItem: NavDropdownItem,
});
