import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import { navbar } from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createSlotRecipeContext(navbar);

const NavigationMenuRoot = withProvider(NavigationMenuPrimitive.Root, 'root');
const NavigationMenuList = withContext(NavigationMenuPrimitive.List, 'list');
const NavigationMenuItem = withContext(NavigationMenuPrimitive.Item, 'item');

const NavigationMenuTrigger = withContext(
  NavigationMenuPrimitive.Trigger,
  'trigger',
);

const NavigationMenuContent = withContext(
  NavigationMenuPrimitive.Content,
  'content',
);

const NavigationMenuIcon = withContext(NavigationMenuPrimitive.Icon, 'icon');
const NavigationMenuPortal = withContext(
  NavigationMenuPrimitive.Portal,
  'portal',
);

const NavigationMenuPositioner = withContext(
  NavigationMenuPrimitive.Positioner,
  'positioner',
);

const NavigationMenuPopup = withContext(NavigationMenuPrimitive.Popup, 'popup');
const NavigationMenuArrow = withContext(NavigationMenuPrimitive.Arrow, 'arrow');
const NavigationMenuViewport = withContext(
  NavigationMenuPrimitive.Viewport,
  'viewport',
);

const NavigationMenuLink = withContext(NavigationMenuPrimitive.Link, 'link');

const Component = NavigationMenuRoot;

export const NavigationMenu = Object.assign(Component, {
  Root: NavigationMenuRoot,
  List: NavigationMenuList,
  Item: NavigationMenuItem,
  Trigger: NavigationMenuTrigger,
  Content: NavigationMenuContent,
  Icon: NavigationMenuIcon,
  Portal: NavigationMenuPortal,
  Positioner: NavigationMenuPositioner,
  Popup: NavigationMenuPopup,
  Arrow: NavigationMenuArrow,
  Viewport: NavigationMenuViewport,
  Link: NavigationMenuLink,
});
