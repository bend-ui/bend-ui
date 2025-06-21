import { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';
import { avatar } from '@particles/styled-system/recipes';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: 'select',
      options: avatar.variantMap.size,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div>
      <Avatar.Root {...args}>
        <Avatar.Image
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
          width="48"
          height="48"
        />
        <Avatar.Fallback>LT</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root {...args}>LT</Avatar.Root>
    </div>
  ),
  args: {},
};
