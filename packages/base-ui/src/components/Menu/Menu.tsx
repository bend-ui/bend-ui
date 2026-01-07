import { Menu as MenuPrimitive } from '@base-ui/react/menu';
import { ArrowDownIcon, ChevronDownIcon } from 'lucide-react';

const MenuRoot = MenuPrimitive.Root;
const MenuTrigger = MenuPrimitive.Trigger;
const MenuPositioner = MenuPrimitive.Positioner;
const MenuPortal = MenuPrimitive.Portal;
const MenuBackdrop = MenuPrimitive.Backdrop;
const MenuPopup = MenuPrimitive.Popup;
const MenuArrow = MenuPrimitive.Arrow;
const MenuItem = MenuPrimitive.Item;
const MenuGroup = MenuPrimitive.Group;
const MenuGroupLabel = MenuPrimitive.GroupLabel;
const MenuRadioGroup = MenuPrimitive.RadioGroup;
const MenuRadioItem = MenuPrimitive.RadioItem;
const MenuRadioItemIndicator = MenuPrimitive.RadioItemIndicator;
const MenuCheckboxItem = MenuPrimitive.CheckboxItem;
const MenuCheckboxItemIndicator = MenuPrimitive.CheckboxItemIndicator;
const MenuSubmenuTrigger = MenuPrimitive.SubmenuTrigger;
const MenuSeparator = MenuPrimitive.Separator;

const Component = () => {
  return (
    <MenuRoot>
      <MenuTrigger>
        Song <ChevronDownIcon />
      </MenuTrigger>
      <MenuPortal>
        <MenuPositioner sideOffset={8}>
          <MenuPopup>
            <MenuArrow>
              <ArrowDownIcon />
            </MenuArrow>
            <MenuItem>Add to Library</MenuItem>
            <MenuItem>Add to Playlist</MenuItem>
            <MenuSeparator />
            <MenuItem>Play Next</MenuItem>
            <MenuItem>Play Last</MenuItem>
            <MenuSeparator />
            <MenuItem>Favorite</MenuItem>
            <MenuItem>Share</MenuItem>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </MenuRoot>
  );
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
});
