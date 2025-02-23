import { forwardRef } from 'react';
import { Tabs as TabsPrimitive } from '@base-ui-components/react/tabs';
import { tabs } from '@particles/styled-system/recipes';

const Root = TabsPrimitive.Root;
const List = TabsPrimitive.List;
const Tab = TabsPrimitive.Tab;
const Indicator = TabsPrimitive.Indicator;
const Panel = TabsPrimitive.Panel;

export type TabsProps = React.ComponentPropsWithoutRef<typeof Root>;

const Component = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const Tabs = Object.assign(Component, {
  Root,
  List,
  Tab,
  Indicator,
  Panel,
});
