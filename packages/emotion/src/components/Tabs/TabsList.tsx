import { forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { DefaultComponentProps } from '../../types';
import { Nav } from '../Nav';

export type TabsListProps = DefaultComponentProps;
export const TabsList = forwardRef<TabsListProps, 'div'>((props, ref) => {
  const { children, ...rest } = useDefaultProps('TabsList', props);
  return (
    <Nav ref={ref} {...rest}>
      {children}
    </Nav>
  );
});
