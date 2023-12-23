import { Stack } from '@particles/panda-system/jsx';
import { Button, Input } from '@particles/panda';
import { Drawer } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Drawer> = {
  component: Drawer,
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Base: Story = {
  render: (args) => (
    <Drawer
      {...args}
      title="Sign in to your account"
      trigger={<Button>Open Drawer</Button>}
    >
      <Stack>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button>Sign in</Button>
      </Stack>
    </Drawer>
  ),
};

export const PlacementLeft: Story = {
  ...Base,
  args: {
    placement: 'left',
  },
};

export const Composition: Story = {
  render: (args) => (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button>Open Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content>
          <h1>Sign in to your account</h1>
          <Stack>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button>Sign in</Button>
          </Stack>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  ),
};
