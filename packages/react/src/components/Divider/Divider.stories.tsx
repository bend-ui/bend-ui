import { SatelliteIcon } from 'lucide-react';
import { Divider } from './Divider';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Divider> = {
  title: 'Components/Layout/Divider',
  component: Divider,
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Base: Story = {};

export const WithContent: Story = {
  args: {
    children: 'Hello, world!',
  },
};

export const WithIconContent: Story = {
  args: {
    children: <SatelliteIcon />,
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
};

export const VerticalWithContent: Story = {
  args: {
    children: 'Hello, world!',
    orientation: 'vertical',
  },
};
