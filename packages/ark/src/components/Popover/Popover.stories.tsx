import { Button } from '@particles/react';
import { ChevronRightIcon, XIcon } from 'lucide-react';
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

export const Basic: Story = {
  args: {
    trigger: 'Click Me',
    title: 'Title',
    description: 'Description',
    children: 'Content',
  },
};

export const WithIndicator: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          iconEnd={
            <Popover.Indicator>
              <ChevronRightIcon />
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

export const WithCloseButton: Story = {
  args: {
    trigger: 'Click Me',
    title: 'Title',
    description: 'Description',
    children: 'Content',
    showCloseButton: true,
  },
};

export const WithArrow: Story = {
  args: {
    trigger: 'Click Me',
    title: 'Title',
    description: 'Description',
    children: 'Content',
    showArrow: true,
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Popover
        trigger="Small"
        title="Small Popover"
        description="This is a small popover"
        size="sm"
      >
        <p>Small content</p>
      </Popover>

      <Popover
        trigger="Medium"
        title="Medium Popover"
        description="This is a medium popover"
        size="md"
      >
        <p>Medium content</p>
      </Popover>

      <Popover
        trigger="Large"
        title="Large Popover"
        description="This is a large popover"
        size="lg"
      >
        <p>Large content</p>
      </Popover>
    </div>
  ),
};

export const WithCustomTrigger: Story = {
  render: () => (
    <Popover
      trigger={<Button variant="outline">Custom Trigger</Button>}
      title="Custom Trigger"
      description="This popover uses a custom trigger component"
    >
      <p>The trigger can be any React element.</p>
    </Popover>
  ),
};
