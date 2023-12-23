import { Indicator } from './Indicator';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Indicator> = {
  title: 'Components/Data/Indicator',
  component: Indicator,
};

export default meta;

type Story = StoryObj<typeof Indicator>;

export const Base: Story = {};

export const Primary: Story = {
  args: { palette: 'primary' },
};

export const Size: Story = {
  args: { size: 'md' },
};
