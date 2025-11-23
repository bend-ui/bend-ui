import { Tabs as TabsPrimitive } from '@ark-ui/react';
import { tabs, type TabsVariantProps } from '@particles/styled-system/recipes';
import type { JsxStyleProps } from '@particles/styled-system/types';
import type { Assign } from '@ark-ui/react';
import { withParts, withRecipe } from '@particles/react';

export interface TabsRootProps
  extends Assign<JsxStyleProps, TabsPrimitive.RootProps>,
    TabsVariantProps {}

const Root = withRecipe(TabsPrimitive.Root, tabs, 'root');

const Content = withParts(TabsPrimitive.Content, 'content');

const List = withParts(TabsPrimitive.List, 'list');

const Trigger = withParts(TabsPrimitive.Trigger, 'trigger');

export {
  TabsContext as Context,
  type TabsContextProps as ContextProps,
} from '@ark-ui/react';

const Component = (props: TabsRootProps) => (
  <Root {...props}>
    <List>
      <Trigger value="react">React</Trigger>
      <Trigger value="vue">Vue</Trigger>
      <Trigger value="solid">Solid</Trigger>
    </List>
    <Content value="react">React Content</Content>
    <Content value="vue">Vue Content</Content>
    <Content value="solid">Solid Content</Content>
  </Root>
);

Component.displayName = 'Tabs';

export const Tabs = Object.assign(Component, {
  Root,
  Content,
  List,
  Trigger,
});
