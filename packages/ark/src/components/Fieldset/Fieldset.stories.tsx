import { Meta, StoryObj } from '@storybook/react';
import { Fieldset } from './Fieldset';

const meta: Meta<typeof Fieldset> = {
  title: 'Fieldset',
  component: Fieldset,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
