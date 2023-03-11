import {
  createComponent,
  forwardRef,
  TabsProvider,
} from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { TabsList } from './TabsList';
import { TabsPane } from './TabsPane';
import { TabsTab } from './TabsTab';
import type { DefaultComponentProps } from '../../types';
import type { Dispatch, SetStateAction } from 'react';

export type TabsProps = DefaultComponentProps & {
  activeTab?: any;
  onTabChange?: Dispatch<SetStateAction<any>>;
};

const Tabs = forwardRef<TabsProps, 'div'>((props, ref) => {
  const { children, activeTab, onTabChange, ...rest } = useDefaultProps(
    'Tabs',
    props
  );

  const context = { activeTab, setActiveTab: onTabChange };

  return (
    <TabsProvider value={context}>
      <div ref={ref} {...rest}>
        {children}
      </div>
    </TabsProvider>
  );
});

export default createComponent(Tabs, {
  List: TabsList,
  Tab: TabsTab,
  Pane: TabsPane,
});
