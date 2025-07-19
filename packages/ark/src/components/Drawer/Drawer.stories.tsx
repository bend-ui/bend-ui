import { Button } from '@particles/react';
import { drawer } from '@particles/styled-system/recipes';
import { Stack } from '@particles/styled-system/jsx';
import { Drawer } from './Drawer';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Drawer',
  component: Drawer,

  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placement: {
      control: 'select',
      options: drawer.variantMap.placement,
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Base: Story = {
  render: (args) => <Drawer {...args} />,
  args: {
    trigger: 'Open drawer',
    title: 'Drawer Title',
    description: 'Drawer Description',
    children: 'Drawer Content',
  },
};

export const Composed: Story = {
  render: (args) => (
    <Drawer.Root {...args}>
      <Drawer.Trigger asChild>
        <Button>Open drawer</Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Title>Dialog Title</Drawer.Title>
            <Drawer.Description>Dialog Description</Drawer.Description>
            <Drawer.CloseTrigger>Close</Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Portal>
    </Drawer.Root>
  ),
};

export const Placements: Story = {
  render: (args) => {
    const placements = drawer.variantMap.placement;
    return (
      <Stack gap="md">
        {placements.map((placement) => (
          <Drawer.Root key={placement} {...args} placement={placement}>
            <Drawer.Trigger asChild>
              <Button>Open drawer {placement}</Button>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Title>Dialog Title</Drawer.Title>
                  <Drawer.Description>Dialog Description</Drawer.Description>
                  <Drawer.CloseTrigger>Close</Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Drawer.Portal>
          </Drawer.Root>
        ))}
      </Stack>
    );
  },
};
