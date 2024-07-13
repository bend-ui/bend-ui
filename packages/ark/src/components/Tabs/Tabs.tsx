import { Tabs as TabsPrimitive } from '@ark-ui/react';
import { tabs, type TabsVariantProps } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';
import type { JsxStyleProps } from '@particles/styled-system/types';
import { createStyleContext } from '../../utils';
import type { Assign } from '@ark-ui/react';

const { withProvider, withContext } = createStyleContext(tabs);

export interface RootProps
  extends Assign<JsxStyleProps, TabsPrimitive.RootProps>,
    TabsVariantProps {}

const Root = withProvider<HTMLDivElement, RootProps>(
  TabsPrimitive.Root,
  'root',
);

const Content = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, TabsPrimitive.ContentProps>
>(TabsPrimitive.Content, 'pane');

const Indicator = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, TabsPrimitive.IndicatorProps>
>(TabsPrimitive.Indicator, 'indicator');

const List = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, TabsPrimitive.ListProps>
>(TabsPrimitive.List, 'tablist');

const Trigger = withContext<
  HTMLButtonElement,
  Assign<JsxStyleProps, TabsPrimitive.TriggerProps>
>(TabsPrimitive.Trigger, 'tab');

export {
  TabsContext as Context,
  type TabsContextProps as ContextProps,
} from '@ark-ui/react';

const Component = forwardRef<HTMLDivElement, RootProps>((props, ref) => (
  <Tabs.Root ref={ref} {...props}>
    <Tabs.List>
      <Tabs.Trigger value="react">React</Tabs.Trigger>
      <Tabs.Trigger value="vue">Vue</Tabs.Trigger>
      <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
      <Tabs.Indicator />
    </Tabs.List>
    <Tabs.Content value="react">React Content</Tabs.Content>
    <Tabs.Content value="vue">Vue Content</Tabs.Content>
    <Tabs.Content value="solid">Solid Content</Tabs.Content>
  </Tabs.Root>
));

Component.displayName = 'Tabs';

export const Tabs = Object.assign(Component, {
  Root,
  Content,
  Indicator,
  List,
  Trigger,
});
