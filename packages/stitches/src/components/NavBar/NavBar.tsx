import { forwardRef } from '@particles/primitives';
import { SXProp } from '../../styles';
import { Level } from '../Level';

export type NavBarProps = SXProp;

const NavBar = forwardRef<NavBarProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Level ref={ref} {...rest}>
      {children}
    </Level>
  );
});

export default Object.assign(NavBar, {});
