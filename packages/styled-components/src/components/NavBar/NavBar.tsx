import { Level } from '../Level';
import type { SystemProps } from '../../system';

type NavBarProps = SystemProps;

export const NavBar = (props: NavBarProps) => {
  const { children, ...rest } = props;
  return <Level {...rest}>{children}</Level>;
};
