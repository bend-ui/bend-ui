import * as React from 'react';
import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui-components/react/navigation-menu';
import { ArrowDownIcon, ChevronDownIcon } from 'lucide-react';

const NavigationMenuRoot = NavigationMenuPrimitive.Root;
const NavigationMenuList = NavigationMenuPrimitive.List;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuTrigger = NavigationMenuPrimitive.Trigger;
const NavigationMenuContent = NavigationMenuPrimitive.Content;
const NavigationMenuIcon = NavigationMenuPrimitive.Icon;
const NavigationMenuPortal = NavigationMenuPrimitive.Portal;
const NavigationMenuPositioner = NavigationMenuPrimitive.Positioner;
const NavigationMenuPopup = NavigationMenuPrimitive.Popup;
const NavigationMenuArrow = NavigationMenuPrimitive.Arrow;
const NavigationMenuViewport = NavigationMenuPrimitive.Viewport;
const NavigationMenuLink = NavigationMenuPrimitive.Link;

const Component = () => {
  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Overview
            <NavigationMenuIcon>
              <ChevronDownIcon />
            </NavigationMenuIcon>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              {overviewLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Handbook
            <NavigationMenuIcon>
              <ChevronDownIcon />
            </NavigationMenuIcon>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              {handbookLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="https://github.com/mui/base-ui">GitHub</Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuPortal>
        <NavigationMenuPositioner
          sideOffset={10}
          collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
        >
          <NavigationMenuPopup>
            <NavigationMenuArrow>
              <ArrowDownIcon />
            </NavigationMenuArrow>
            <NavigationMenuViewport />
          </NavigationMenuPopup>
        </NavigationMenuPositioner>
      </NavigationMenuPortal>
    </NavigationMenuRoot>
  );
};

function Link(
  props: React.ComponentPropsWithoutRef<typeof NavigationMenuLink>,
) {
  return (
    <NavigationMenuLink
      render={
        // Use the `render` prop to render your framework's Link component
        // for client-side routing.
        // e.g. `<NextLink href={props.href} />` instead of `<a />`.
        <a />
      }
      {...props}
    />
  );
}

const overviewLinks = [
  {
    href: '/react/overview/quick-start',
    title: 'Quick Start',
    description: 'Install and assemble your first component.',
  },
  {
    href: '/react/overview/accessibility',
    title: 'Accessibility',
    description: 'Learn how we build accessible components.',
  },
  {
    href: '/react/overview/releases',
    title: 'Releases',
    description: 'See what’s new in the latest Base UI versions.',
  },
  {
    href: '/react/overview/about',
    title: 'About',
    description: 'Learn more about Base UI and our mission.',
  },
] as const;

const handbookLinks = [
  {
    href: '/react/handbook/styling',
    title: 'Styling',
    description:
      'Base UI components can be styled with plain CSS, Tailwind CSS, CSS-in-JS, or CSS Modules.',
  },
  {
    href: '/react/handbook/animation',
    title: 'Animation',
    description:
      'Base UI components can be animated with CSS transitions, CSS animations, or JavaScript libraries.',
  },
  {
    href: '/react/handbook/composition',
    title: 'Composition',
    description:
      'Base UI components can be replaced and composed with your own existing components.',
  },
] as const;

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
