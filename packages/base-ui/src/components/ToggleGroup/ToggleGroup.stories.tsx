import { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup } from './ToggleGroup';

const meta: Meta<typeof ToggleGroup> = {
  title: 'ToggleGroup',
  component: ToggleGroup,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
