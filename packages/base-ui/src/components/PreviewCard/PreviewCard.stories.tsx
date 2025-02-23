import { Meta, StoryObj } from '@storybook/react';
import { PreviewCard } from './PreviewCard';

const meta: Meta<typeof PreviewCard> = {
  title: 'PreviewCard',
  component: PreviewCard,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
