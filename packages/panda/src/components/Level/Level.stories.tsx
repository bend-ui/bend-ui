import { Level } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Level> = {
  title: 'Components/Layout/Level',
  component: Level,
};

export default meta;

type Story = StoryObj<typeof Level>;

export const Base: Story = {
  args: {
    children: (
      <>
        <div>Element</div>
        <div>Element</div>
      </>
    ),
  },
};
