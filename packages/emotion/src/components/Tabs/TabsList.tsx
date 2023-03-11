import { forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { Nav } from '../Nav';
import type { DefaultComponentProps } from '../../types';

export type TabsListProps = DefaultComponentProps;
export const TabsList = forwardRef<TabsListProps, 'div'>((props, ref) => {
  const { children, ...rest } = useDefaultProps('TabsList', props);
  return (
    <Nav ref={ref} {...rest}>
      {children}
    </Nav>
  );
});
