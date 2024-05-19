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
