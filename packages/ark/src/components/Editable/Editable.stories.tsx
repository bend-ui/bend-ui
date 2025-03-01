import { Meta, StoryObj } from '@storybook/react';
import { Editable } from './Editable';

const meta: Meta<typeof Editable> = {
  title: 'Editable',
  component: Editable,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
