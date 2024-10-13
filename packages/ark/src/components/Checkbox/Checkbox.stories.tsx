import { Checkbox } from './Checkbox';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Base: Story = {};

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
  },
};
