import { SystemProps } from '../../system';
import { Level } from '../Level';

type NavBarProps = SystemProps;

export const NavBar = (props: NavBarProps) => {
  const { children, ...rest } = props;
  return <Level {...rest}>{children}</Level>;
};
