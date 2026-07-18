import { Menu as MenuPrimitive } from '@base-ui/react/menu';
import { withParts, withRecipe } from '@bend-ui/core';
import { menu } from '@bend-ui/styled-system/recipes';
import { Button } from '../Button';

const MenuRoot = MenuPrimitive.Root;

export type MenuTriggerProps = MenuPrimitive.Trigger.Props;

const MenuTrigger = (props: MenuTriggerProps) => {
  const { render, ...rest } = props;
  const renderProp = render || <Button />;
  return <MenuPrimitive.Trigger render={renderProp} {...rest} />;
};

const MenuPortal = MenuPrimitive.Portal;
const MenuPositioner = MenuPrimitive.Positioner;
const MenuBackdrop = MenuPrimitive.Backdrop;
const MenuPopup = withRecipe<MenuPrimitive.Popup.Props>(
  MenuPrimitive.Popup,
  menu,
  'root',
);
const MenuArrow = withParts(MenuPrimitive.Arrow, 'arrow');
const MenuItem = withParts(MenuPrimitive.Item, 'item');
const MenuGroup = withParts(MenuPrimitive.Group, 'group');
const MenuGroupLabel = withParts(MenuPrimitive.GroupLabel, 'groupLabel');
const MenuRadioGroup = withParts(MenuPrimitive.RadioGroup, 'radioGroup');
const MenuRadioItem = withParts(MenuPrimitive.RadioItem, 'radioItem');
const MenuRadioItemIndicator = withParts(
  MenuPrimitive.RadioItemIndicator,
  'radioItemIndicator',
);
const MenuCheckboxItem = withParts(MenuPrimitive.CheckboxItem, 'checkboxItem');
const MenuCheckboxItemIndicator = withParts(
  MenuPrimitive.CheckboxItemIndicator,
  'checkboxItemIndicator',
);
const MenuSubmenuTrigger = withParts(
  MenuPrimitive.SubmenuTrigger,
  'submenuTrigger',
);
const MenuSeparator = withParts(MenuPrimitive.Separator, 'separator');

export interface MenuContentProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode;
}

const MenuContent = (props: MenuContentProps) => {
  const { children, ...rest } = props;
  return (
    <MenuPortal>
      <MenuPositioner sideOffset={8}>
        <MenuPopup {...rest}>{children}</MenuPopup>
      </MenuPositioner>
    </MenuPortal>
  );
};

export interface MenuProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode;
}

const Component = (props: MenuProps) => {
  const { children, ...rest } = props;
  return <MenuRoot {...rest}>{children}</MenuRoot>;
};

export const Menu = Object.assign(Component, {
  Root: MenuRoot,
  Trigger: MenuTrigger,
  Positioner: MenuPositioner,
  Portal: MenuPortal,
  Backdrop: MenuBackdrop,
  Popup: MenuPopup,
  Arrow: MenuArrow,
  Item: MenuItem,
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  RadioGroup: MenuRadioGroup,
  RadioItem: MenuRadioItem,
  RadioItemIndicator: MenuRadioItemIndicator,
  CheckboxItem: MenuCheckboxItem,
  CheckboxItemIndicator: MenuCheckboxItemIndicator,
  SubmenuTrigger: MenuSubmenuTrigger,
  Separator: MenuSeparator,
  Content: MenuContent,
});
