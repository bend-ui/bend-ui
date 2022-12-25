import { forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../styles';
import { Level } from '../Level';

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
