import * as React from 'react';
import { Tabs as TabsPrimitive } from '@base-ui-components/react/tabs';
import { withParts, withRecipe } from '../../utils/with-recipe';
import { tabs } from '@particles/styled-system/recipes';

const TabsRoot = withRecipe<TabsPrimitive.Root.Props>(
  TabsPrimitive.Root,
  tabs,
  'root',
);

const TabsList = withParts<TabsPrimitive.List.Props>(
  TabsPrimitive.List,
  'list',
);

const TabsTab = withParts<TabsPrimitive.Tab.Props>(
  TabsPrimitive.Tab,
  'trigger',
);

const TabsPanel = withParts<TabsPrimitive.Panel.Props>(
  TabsPrimitive.Panel,
  'panel',
);

const TabsIndicator = withParts<TabsPrimitive.Indicator.Props>(
  TabsPrimitive.Indicator,
  'indicator',
);

const Component = TabsRoot;

export const Tabs = Object.assign(Component, {
  Root: TabsRoot,
  List: TabsList,
  Tab: TabsTab,
  Panel: TabsPanel,
  Indicator: TabsIndicator,
});
