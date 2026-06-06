import { Tabs as TabsPrimitive } from '@ark-ui/react';
import { tabs, type TabsVariantProps } from '@particles/styled-system/recipes';
import type { JsxStyleProps } from '@particles/styled-system/types';
import type { Assign } from '@ark-ui/react';
import { createStyleContext } from '@particles/styled-system/jsx';

const { withProvider, withContext } = createStyleContext(tabs);

export interface TabsRootProps
  extends Assign<JsxStyleProps, TabsPrimitive.RootProps>,
    TabsVariantProps {}

const Root = withProvider(TabsPrimitive.Root, 'root');

const List = withContext(TabsPrimitive.List, 'list');

const Trigger = withContext(TabsPrimitive.Trigger, 'trigger');

const Indicator = withContext(TabsPrimitive.Indicator, 'indicator');

const Content = withContext(TabsPrimitive.Content, 'content');

export {
  TabsContext as Context,
  type TabsContextProps as ContextProps,
} from '@ark-ui/react';

export type TabsProps = TabsRootProps;

const Component = (props: TabsProps) => {
  const { children, ...rest } = props;
  return <Root {...rest}>{children}</Root>;
};

Component.displayName = 'Tabs';

export const Tabs = Object.assign(Component, {
  Root,
  List,
  Trigger,
  Indicator,
  Content,
});
