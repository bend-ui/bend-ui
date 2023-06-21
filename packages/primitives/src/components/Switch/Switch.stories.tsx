import { useState } from 'react';
import { Switch } from './';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Switch',
  component: Switch,
} as Meta<typeof Switch>;

type Story = StoryFn<typeof Switch>;

export const Base: Story = {
  render: (args) => (
    <Switch.Root {...args}>
      <Switch.Track>
        <Switch.Thumb />
      </Switch.Track>
    </Switch.Root>
  ),
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<boolean>();
    return (
      <Switch.Root
        isChecked={value}
        onCheckedChange={(checked) => setValue(!checked)}
        {...args}
      >
        <Switch.Track>
          <Switch.Thumb />
        </Switch.Track>
      </Switch.Root>
    );
  },
};

export const Tailwind: Story = {
  render: (args) => (
    <Switch.Root {...args}>
      <Switch.Track className="relative inline-flex items-center w-11 h-6 bg-slate-400 rounded-full">
        <Switch.Thumb className="absolute w-5 h-5 bg-slate-600 rounded-full left-1 data-[state=checked]:left-[calc(100%_-_1.5rem)] transition-[left]" />
      </Switch.Track>
    </Switch.Root>
  ),
};
