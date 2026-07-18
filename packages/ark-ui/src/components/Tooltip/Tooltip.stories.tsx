import { Tooltip } from './Tooltip';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Tooltip',
  component: Tooltip,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
