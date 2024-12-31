import { Accordion as AccordionPrimitive } from '@base-ui-components/react';

const Root = AccordionPrimitive.Root;
const Item = AccordionPrimitive.Item;
const Header = AccordionPrimitive.Header;
const Trigger = AccordionPrimitive.Trigger;
const Panel = AccordionPrimitive.Panel;

const Component = (props) => <Root {...props} />;

export const Accordion = Object.assign(Component, {
  Root,
  Item,
  Header,
  Trigger,
  Panel,
});
