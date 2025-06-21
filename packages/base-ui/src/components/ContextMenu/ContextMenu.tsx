import { ContextMenu as ContextMenuPrimitive } from '@base-ui-components/react/context-menu';

const ContextMenuRoot = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuBackdrop = ContextMenuPrimitive.Backdrop;
const ContextMenuPositioner = ContextMenuPrimitive.Positioner;
const ContextMenuPopup = ContextMenuPrimitive.Popup;
const ContextMenuArrow = ContextMenuPrimitive.Arrow;
const ContextMenuItem = ContextMenuPrimitive.Item;
const ContextMenuGroup = ContextMenuPrimitive.Group;
const ContextMenuGroupLabel = ContextMenuPrimitive.GroupLabel;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
const ContextMenuRadioItem = ContextMenuPrimitive.RadioItem;
const ContextMenuCheckboxItem = ContextMenuPrimitive.CheckboxItem;
const ContextMenuSeparator = ContextMenuPrimitive.Separator;

const Component = () => {
  return (
    <ContextMenuRoot>
      <ContextMenuTrigger>Right click here</ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuBackdrop />
        <ContextMenuPositioner>
          <ContextMenuPopup>
            <ContextMenuItem>Add to Library</ContextMenuItem>
            <ContextMenuItem>Add to Playlist</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Play Next</ContextMenuItem>
            <ContextMenuItem>Play Last</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Favorite</ContextMenuItem>
            <ContextMenuItem>Share</ContextMenuItem>
            <ContextMenuRadioGroup>
              <ContextMenuRadioItem value="1" />
            </ContextMenuRadioGroup>
            <ContextMenuCheckboxItem />
          </ContextMenuPopup>
        </ContextMenuPositioner>
      </ContextMenuPortal>
    </ContextMenuRoot>
  );
};

export const ContextMenu = Object.assign(Component, {
  Root: ContextMenuRoot,
  Trigger: ContextMenuTrigger,
  Portal: ContextMenuPortal,
  Backdrop: ContextMenuBackdrop,
  Positioner: ContextMenuPositioner,
  Popup: ContextMenuPopup,
  Arrow: ContextMenuArrow,
  Item: ContextMenuItem,
  Group: ContextMenuGroup,
  GroupLabel: ContextMenuGroupLabel,
  RadioGroup: ContextMenuRadioGroup,
  RadioItem: ContextMenuRadioItem,
  CheckboxItem: ContextMenuCheckboxItem,
  Separator: ContextMenuSeparator,
});
