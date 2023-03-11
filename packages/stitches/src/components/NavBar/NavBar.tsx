import { forwardRef } from '@particles/primitives';
import { Level } from '../Level';
import type { DefaultComponentProps } from '../../styles';

export type NavBarProps = DefaultComponentProps;

const NavBar = forwardRef<NavBarProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Level ref={ref} {...rest}>
      {children}
    </Level>
  );
});

export default Object.assign(NavBar, {});
