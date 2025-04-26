import { Tooltip } from './Tooltip';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Overlays/Tooltip',
  component: Tooltip,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
