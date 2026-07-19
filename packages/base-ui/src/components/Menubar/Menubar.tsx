import { Menubar as MenubarPrimitive } from '@base-ui/react/menubar';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { menubar } from '@bend-ui/styled-system/recipes';
import { Menu } from '../Menu';
import { ChevronRightIcon } from 'lucide-react';

const { withProvider } = createStyleContext(menubar);

const MenubarRoot = withProvider(MenubarPrimitive, 'root');

const Component = () => {
  return (
    <MenubarRoot>
      <Menu.Root>
        <Menu.Trigger>File</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner sideOffset={6} alignOffset={-2}>
            <Menu.Popup>
              <Menu.Item>New</Menu.Item>
              <Menu.Item>Open</Menu.Item>
              <Menu.Item>Save</Menu.Item>

              <Menu.Root>
                <Menu.SubmenuTrigger>
                  Export
                  <ChevronRightIcon />
                </Menu.SubmenuTrigger>
                <Menu.Portal>
                  <Menu.Positioner alignOffset={-4}>
                    <Menu.Popup>
                      <Menu.Item>PDF</Menu.Item>
                      <Menu.Item>PNG</Menu.Item>
                      <Menu.Item>SVG</Menu.Item>
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.Root>

              <Menu.Separator />
              <Menu.Item>Print</Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger>Edit</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner sideOffset={6}>
            <Menu.Popup>
              <Menu.Item>Cut</Menu.Item>
              <Menu.Item>Copy</Menu.Item>
              <Menu.Item>Paste</Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger>View</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner sideOffset={6}>
            <Menu.Popup>
              <Menu.Item>Zoom In</Menu.Item>
              <Menu.Item>Zoom Out</Menu.Item>

              <Menu.Root>
                <Menu.SubmenuTrigger>
                  Layout
                  <ChevronRightIcon />
                </Menu.SubmenuTrigger>
                <Menu.Portal>
                  <Menu.Positioner alignOffset={-4}>
                    <Menu.Popup>
                      <Menu.Item>Single Page</Menu.Item>
                      <Menu.Item>Two Pages</Menu.Item>
                      <Menu.Item>Continuous</Menu.Item>
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.Root>

              <Menu.Separator />
              <Menu.Item>Full Screen</Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      <Menu.Root disabled>
        <Menu.Trigger>Help</Menu.Trigger>
      </Menu.Root>
    </MenubarRoot>
  );
};

export const Menubar = Object.assign(Component, {
  Root: MenubarRoot,
});
