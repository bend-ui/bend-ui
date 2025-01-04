import { Accordion as AccordionPrimitive } from '@base-ui-components/react';
import { accordion } from '@particles/styled-system/recipes';
import { withRecipe } from '../../utils/with-recipe';

const Root = withRecipe(AccordionPrimitive.Root, accordion, 'root');
const Item = withRecipe(AccordionPrimitive.Item, accordion, 'item');
const Header = withRecipe(AccordionPrimitive.Header, accordion, 'header');
const Trigger = withRecipe(AccordionPrimitive.Trigger, accordion, 'trigger');
const Panel = withRecipe(AccordionPrimitive.Panel, accordion, 'panel');

const Component = (props) => <Root {...props} />;

export const Accordion = Object.assign(Component, {
  Root,
  Item,
  Header,
  Trigger,
  Panel,
});
