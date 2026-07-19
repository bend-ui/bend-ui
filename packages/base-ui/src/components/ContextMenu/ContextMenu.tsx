import { ContextMenu as ContextMenuPrimitive } from '@base-ui/react/context-menu';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { menu } from '@bend-ui/styled-system/recipes';

const { withRootProvider, withContext } = createStyleContext(menu);

const ContextMenuRoot = withRootProvider(ContextMenuPrimitive.Root);
const ContextMenuTrigger = withContext(ContextMenuPrimitive.Trigger, 'trigger');
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuBackdrop = ContextMenuPrimitive.Backdrop;
const ContextMenuPositioner = withContext(
  ContextMenuPrimitive.Positioner,
  'positioner',
);
const ContextMenuPopup = withContext(ContextMenuPrimitive.Popup, 'root');
const ContextMenuArrow = withContext(ContextMenuPrimitive.Arrow, 'arrow');
const ContextMenuItem = withContext(ContextMenuPrimitive.Item, 'item');
const ContextMenuGroup = withContext(ContextMenuPrimitive.Group, 'itemGroup');
const ContextMenuGroupLabel = withContext(
  ContextMenuPrimitive.GroupLabel,
  'itemGroupLabel',
);
const ContextMenuRadioGroup = withContext(
  ContextMenuPrimitive.RadioGroup,
  'radioGroup',
);
const ContextMenuRadioItem = withContext(
  ContextMenuPrimitive.RadioItem,
  'item',
);
const ContextMenuCheckboxItem = withContext(
  ContextMenuPrimitive.CheckboxItem,
  'checkboxItem',
);
const ContextMenuSeparator = withContext(
  ContextMenuPrimitive.Separator,
  'separator',
);

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
