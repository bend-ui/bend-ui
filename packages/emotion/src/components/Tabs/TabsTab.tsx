import { forwardRef, useTab } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { DefaultComponentProps } from '../../types';
import { Nav } from '../Nav';

export type TabsTabProps = DefaultComponentProps & {
  value: string;
};

export const TabsTab = forwardRef<TabsTabProps, 'a'>((props, ref) => {
  const { children, value, ...rest } = useDefaultProps('TabsTab', props);

  const { getTabProps } = useTab(value);

  return (
    <Nav.Link ref={ref} {...getTabProps()} {...rest}>
      {children}
    </Nav.Link>
  );
});
