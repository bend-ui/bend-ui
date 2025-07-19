import { Button } from '@particles/react';
import { LuChevronRight } from 'react-icons/lu';
import { Popover } from './Popover';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Popover',
  component: Popover,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof Popover>;

export const Base: Story = {
  args: {
    trigger: 'Click Me',
    title: 'Title',
    description: 'Description',
    children: 'Content',
  },
};

export const Composed: Story = {
  render: (args) => (
    <Popover.Root {...args}>
      <Popover.Trigger asChild>
        <Button
          iconEnd={
            <Popover.Indicator>
              <LuChevronRight />
            </Popover.Indicator>
          }
        >
          Click Me
        </Button>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Title>Title</Popover.Title>
          <Popover.Description>Description</Popover.Description>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  ),
};
