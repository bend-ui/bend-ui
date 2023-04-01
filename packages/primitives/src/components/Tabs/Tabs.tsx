import { createComponent } from '../../utils';
import { forwardRef } from '../../utils/forwardRef';
import {
  TabsProvider,
  useTab,
  useTabList,
  useTabPanel,
  useTabs,
} from './useTabs';
import type React from 'react';
import type { UseTabsProps } from './useTabs';

export type TabsListProps = {
  children?: React.ReactNode;
};

const List = forwardRef<TabsListProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { getTablistProps } = useTabList();
  return (
    <div ref={ref} {...getTablistProps()} {...rest}>
      {children}
    </div>
  );
});

export type TabsTabProps = {
  children?: React.ReactNode;
  value: string;
};

const Tab = forwardRef<TabsTabProps, 'button'>((props, ref) => {
  const { children, value, ...rest } = props;
  const { getTabProps } = useTab(value);
  return (
    <button ref={ref} {...getTabProps()} {...rest}>
      {children}
    </button>
  );
});

export type TabsPanelProps = {
  children?: React.ReactNode;
  value: string;
};

const Panel = forwardRef<TabsPanelProps, 'div'>((props, ref) => {
  const { children, value, ...rest } = props;
  const { getTabpanelProps } = useTabPanel(value);
  return (
    <div ref={ref} {...getTabpanelProps()} {...rest}>
      {children}
    </div>
  );
});

export type TabsProps = UseTabsProps & {
  children?: React.ReactNode;
};

const Root = forwardRef<TabsProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const context = useTabs(props);
  return (
    <TabsProvider value={context}>
      <div ref={ref} {...rest}>
        {children}
      </div>
    </TabsProvider>
  );
});

export default createComponent(Root, { Root, List, Tab, Panel }, 'Tabs');
