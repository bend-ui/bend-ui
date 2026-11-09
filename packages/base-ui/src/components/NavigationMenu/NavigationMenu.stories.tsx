import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavigationMenu } from './NavigationMenu';

const meta: Meta<typeof NavigationMenu> = {
  title: 'NavigationMenu',
  component: NavigationMenu,
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: () => (
    <NavigationMenu aria-label="Project">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/overview">Overview</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/settings">Settings</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu>
  ),
};
