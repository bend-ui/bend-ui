import { Tabs as TabsPrimitive } from '@base-ui/react/tabs';
import { tabs } from '@particles/styled-system/recipes';
import { createStyleContext } from '@particles/styled-system/jsx';

const { withProvider, withContext } = createStyleContext(tabs);

const TabsRoot = withProvider(TabsPrimitive.Root, 'root');

const TabsList = withContext(TabsPrimitive.List, 'list');

const TabsTab = withContext(TabsPrimitive.Tab, 'trigger');

const TabsPanel = withContext(TabsPrimitive.Panel, 'content');

const TabsIndicator = withContext(TabsPrimitive.Indicator, 'indicator');

const Component = TabsRoot;

export const Tabs = Object.assign(Component, {
  Root: TabsRoot,
  List: TabsList,
  Tab: TabsTab,
  Indicator: TabsIndicator,
  Panel: TabsPanel,
});
