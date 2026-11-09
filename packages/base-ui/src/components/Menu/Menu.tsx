import * as React from 'react';
import {
  contextualSurfaceProps,
  SurfaceScopeProvider,
  useSurfaceScope,
  type SurfaceLevel,
} from '../SurfaceContext/SurfaceContext';
import { Menu as MenuPrimitive } from '@base-ui/react/menu';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import { menu } from '@bend-ui/styled-system/recipes';
import { Button } from '../Button';

const { withRootProvider, withContext } = createSlotRecipeContext(menu);
const MenuRoot = withRootProvider(MenuPrimitive.Root) as <Payload>(
  props: MenuPrimitive.Root.Props<Payload>,
) => React.ReactElement;

export type MenuTriggerProps<Payload = unknown> =
  MenuPrimitive.Trigger.Props<Payload>;

const MenuTrigger = React.forwardRef<HTMLButtonElement, MenuTriggerProps>(
  function MenuTrigger({ render, ...props }, ref) {
    return (
      <MenuPrimitive.Trigger
        render={render ?? <Button />}
        {...props}
        ref={ref}
      />
    );
  },
) as <Payload>(
  props: MenuTriggerProps<Payload> & React.RefAttributes<HTMLElement>,
) => React.ReactElement;

const MenuPortal = MenuPrimitive.Portal;
const MenuPositioner = withContext(MenuPrimitive.Positioner, 'positioner');
const MenuBackdrop = MenuPrimitive.Backdrop;
export type MenuPopupProps = MenuPrimitive.Popup.Props & {
  surfaceLevel?: SurfaceLevel;
};
const MenuPopupBridge = React.forwardRef<
  HTMLDivElement,
  MenuPrimitive.Popup.Props & {
    surfaceClassName?: MenuPrimitive.Popup.Props['className'];
    surfaceStyle?: MenuPrimitive.Popup.Props['style'];
  }
>(function MenuPopupBridge(
  { surfaceClassName, surfaceStyle, className, ...props },
  ref,
) {
  return (
    <MenuPrimitive.Popup
      {...props}
      ref={ref}
      className={
        typeof surfaceClassName === 'function'
          ? (state) =>
              [
                typeof className === 'function' ? className(state) : className,
                surfaceClassName(state),
              ]
                .filter(Boolean)
                .join(' ')
          : className
      }
      style={surfaceStyle ?? props.style}
    />
  );
});
const StyledMenuPopup = withContext(MenuPopupBridge, 'root');
const MenuPopup = React.forwardRef<HTMLDivElement, MenuPopupProps>(
  function MenuPopup({ surfaceLevel, ...props }, ref) {
    const scope = useSurfaceScope(surfaceLevel);
    const merged = {
      ...props,
      ...contextualSurfaceProps<MenuPrimitive.Popup.State>(scope, props),
    };
    return (
      <SurfaceScopeProvider scope={scope}>
        <StyledMenuPopup
          {...merged}
          className={
            typeof merged.className === 'function'
              ? undefined
              : merged.className
          }
          style={typeof merged.style === 'function' ? undefined : merged.style}
          surfaceClassName={
            typeof merged.className === 'function'
              ? merged.className
              : undefined
          }
          surfaceStyle={
            typeof merged.style === 'function' ? merged.style : undefined
          }
          ref={ref}
        />
      </SurfaceScopeProvider>
    );
  },
);
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

export type MenuContentProps = MenuPopupProps;
const MenuContent = React.forwardRef<HTMLDivElement, MenuContentProps>(
  function MenuContent({ children, ...props }, ref) {
    return (
      <MenuPortal>
        <MenuPositioner sideOffset={8}>
          <MenuPopup {...props} ref={ref}>
            {children}
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    );
  },
);

export type MenuProps<Payload = unknown> = MenuPrimitive.Root.Props<Payload>;

const Component = MenuRoot;

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
