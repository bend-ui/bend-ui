import { Avatar } from '.';
import type { Meta, StoryObj } from '@storybook/react-vite';

export default { component: Avatar } as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Base: Story = {
  render: (args) => (
    <Avatar {...args}>
      <Avatar.Image alt="@nanopx" src="https://github.com/nanopx.png" />
      <Avatar.Fallback>NP</Avatar.Fallback>
    </Avatar>
  ),
};
