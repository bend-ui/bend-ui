import { Meta, StoryObj } from '@storybook/react';
import { NumberField } from './NumberField';

const meta: Meta<typeof NumberField> = {
  title: 'NumberField',
  component: NumberField,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
