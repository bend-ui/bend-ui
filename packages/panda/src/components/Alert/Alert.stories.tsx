import { Alert } from './Alert';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Alert> = {
  title: 'Components/Feedback/Alert',
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Base: Story = {
  args: {
    children: 'Alert message',
  },
};
