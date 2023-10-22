import * as TabsPrimitive from '@radix-ui/react-tabs';
import { tabs } from '@particles/panda-system/recipes';

import { createStyleContext } from '../../utils';

const { withProvider, withContext } = createStyleContext(tabs);

const Root = withProvider(TabsPrimitive.Root, 'root');

const List = withContext(TabsPrimitive.List, 'tablist');

const Tab = withContext(TabsPrimitive.Trigger, 'tab');

const Pane = withContext(TabsPrimitive.Content, 'pane');

export default Object.assign(Root, { List, Tab, Pane });
