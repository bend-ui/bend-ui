import { Level } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Level> = {
  component: Level,
};

export default meta;

type Story = StoryObj<typeof Level>;

export const Base: Story = {
  render: (args) => (
    <Level {...args}>
      <div>Element</div>
      <div>Element</div>
    </Level>
  ),
};
