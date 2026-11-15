import { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    trigger: 'Framework',
    children: (
      <>
        <Menu.Item value="react">React</Menu.Item>
        <Menu.Item value="solid">Solid</Menu.Item>
        <Menu.Item value="vue">Vue</Menu.Item>
      </>
    ),
  },
};
