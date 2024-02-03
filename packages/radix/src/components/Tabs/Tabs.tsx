import * as TabsPrimitive from '@radix-ui/react-tabs';
import { tabs } from '@particles/styled-system/recipes';

import { createStyleContext } from '../../utils';

const { withProvider, withContext } = createStyleContext(tabs);

const Root = withProvider(TabsPrimitive.Root, 'root');

const List = withContext(TabsPrimitive.List, 'tablist');

const Tab = withContext(TabsPrimitive.Trigger, 'tab');

const Pane = withContext(TabsPrimitive.Content, 'pane');

export const Tabs = Object.assign(Root, { List, Tab, Pane });

export default Tabs;
