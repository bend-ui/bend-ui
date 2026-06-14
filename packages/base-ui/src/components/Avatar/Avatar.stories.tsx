import { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';
import { avatar } from '@bend-ui/styled-system/recipes';
import { Stack } from '@bend-ui/react';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Media/Avatar',
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
    <Stack direction="row" gap="3" align="center">
      <Avatar
        {...args}
        alt="Lena Torres"
        fallback="LT"
        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
      />
      <Avatar {...args} alt="Ari Singh" fallback="AS" />
      <Avatar {...args} alt="Noah Patel" fallback="NP" shape="square" />
    </Stack>
  ),
  args: {},
};

export const AccessibleInitials: Story = {
  render: () => (
    <Stack direction="row" gap="3" align="center">
      {[
        ['Maya Chen', 'MC'],
        ['Owen Brooks', 'OB'],
        ['Priya Shah', 'PS'],
      ].map(([name, initials]) => (
        <Avatar key={name} alt={name} fallback={initials} size="sm" />
      ))}
    </Stack>
  ),
};
