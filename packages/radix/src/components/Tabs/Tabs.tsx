import { Tabs as TabsPrimitive } from 'radix-ui';
import { tabs } from '@particles/styled-system/recipes';
import { createRecipeContext } from '../../utils/recipe-context';

const { withProvider, withPart } = createRecipeContext(tabs);

const Root = withProvider(TabsPrimitive.Root, 'root');

const List = withPart(TabsPrimitive.List, 'tablist');

const Tab = withPart(TabsPrimitive.Trigger, 'tab');

const Pane = withPart(TabsPrimitive.Content, 'pane');

export const Tabs = Object.assign(Root, { List, Tab, Pane });

export default Tabs;
