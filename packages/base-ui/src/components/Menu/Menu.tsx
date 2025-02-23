import { forwardRef } from 'react';
import { Menu as MenuPrimitive } from '@base-ui-components/react/menu';
import { menu } from '@particles/styled-system/recipes';

const Root = MenuPrimitive.Root;
const Trigger = MenuPrimitive.Trigger;
const Positioner = MenuPrimitive.Positioner;
const Popup = MenuPrimitive.Popup;
const Arrow = MenuPrimitive.Arrow;
const Item = MenuPrimitive.Item;
const Group = MenuPrimitive.Group;
const GroupLabel = MenuPrimitive.GroupLabel;
const RadioGroup = MenuPrimitive.RadioGroup;
const RadioItem = MenuPrimitive.RadioItem;
const RadioItemIndicator = MenuPrimitive.RadioItemIndicator;
const CheckboxItem = MenuPrimitive.CheckboxItem;
const CheckboxItemIndicator = MenuPrimitive.CheckboxItemIndicator;
const SubmenuTrigger = MenuPrimitive.SubmenuTrigger;
const Separator = MenuPrimitive.Separator;

export type MenuProps = React.ComponentPropsWithoutRef<typeof Root>;

const Component = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const Menu = Object.assign(Component, {
  Root,
  Trigger,
  Positioner,
  Popup,
  Arrow,
  Item,
  Group,
  GroupLabel,
  RadioGroup,
  RadioItem,
  RadioItemIndicator,
  CheckboxItem,
  CheckboxItemIndicator,
  SubmenuTrigger,
  Separator,
});
