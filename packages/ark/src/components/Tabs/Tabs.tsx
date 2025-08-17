import { Tabs as TabsPrimitive } from '@ark-ui/react';
import { tabs, type TabsVariantProps } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';
import type { JsxStyleProps } from '@particles/styled-system/types';
import { withRecipe } from '../../utils';
import type { Assign } from '@ark-ui/react';

export interface TabsRootProps
  extends Assign<JsxStyleProps, TabsPrimitive.RootProps>,
    TabsVariantProps {}

const Root = withRecipe<TabsPrimitive.RootProps>(
  TabsPrimitive.Root,
  tabs,
  'root',
);

const Content = TabsPrimitive.Content;

const List = TabsPrimitive.List;

const Trigger = TabsPrimitive.Trigger;

export {
  TabsContext as Context,
  type TabsContextProps as ContextProps,
} from '@ark-ui/react';

const Component = forwardRef<HTMLDivElement, TabsRootProps>((props, ref) => (
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
));

Component.displayName = 'Tabs';

export const Tabs = Object.assign(Component, {
  Root,
  Content,
  List,
  Trigger,
});
