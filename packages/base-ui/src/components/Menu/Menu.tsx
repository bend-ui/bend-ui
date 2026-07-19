import { Menu as MenuPrimitive } from '@base-ui/react/menu';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { menu } from '@bend-ui/styled-system/recipes';
import { Button } from '../Button';

const { withRootProvider, withContext } = createStyleContext(menu);
const MenuRoot = withRootProvider(MenuPrimitive.Root);

export type MenuTriggerProps = MenuPrimitive.Trigger.Props;

const MenuTrigger = (props: MenuTriggerProps) => {
  const { render, ...rest } = props;
  const renderProp = render || <Button />;
  return <MenuPrimitive.Trigger render={renderProp} {...rest} />;
};

const MenuPortal = MenuPrimitive.Portal;
const MenuPositioner = withContext(MenuPrimitive.Positioner, 'positioner');
const MenuBackdrop = MenuPrimitive.Backdrop;
const MenuPopup = withContext(MenuPrimitive.Popup, 'root');
const MenuArrow = withContext(MenuPrimitive.Arrow, 'arrow');
const MenuItem = withContext(MenuPrimitive.Item, 'item');
const MenuGroup = withContext(MenuPrimitive.Group, 'itemGroup');
const MenuGroupLabel = withContext(MenuPrimitive.GroupLabel, 'itemGroupLabel');
const MenuRadioGroup = withContext(MenuPrimitive.RadioGroup, 'radioGroup');
const MenuRadioItem = withContext(MenuPrimitive.RadioItem, 'item');
const MenuRadioItemIndicator = withContext(
  MenuPrimitive.RadioItemIndicator,
  'itemIndicator',
);
const MenuCheckboxItem = withContext(
  MenuPrimitive.CheckboxItem,
  'checkboxItem',
);
const MenuCheckboxItemIndicator = withContext(
  MenuPrimitive.CheckboxItemIndicator,
  'indicator',
);
const MenuSubmenuTrigger = withContext(MenuPrimitive.SubmenuTrigger, 'item');
const MenuSeparator = withContext(MenuPrimitive.Separator, 'separator');

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
