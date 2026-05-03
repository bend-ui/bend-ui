import { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Menu {...args}>
      <Menu.Trigger>Song</Menu.Trigger>
      <Menu.Content>
        <Menu.Item>Add to Library</Menu.Item>
        <Menu.Item>Add to Playlist</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Play Next</Menu.Item>
        <Menu.Item>Play Last</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Favorite</Menu.Item>
        <Menu.Item>Share</Menu.Item>
      </Menu.Content>
    </Menu>
  ),
};
