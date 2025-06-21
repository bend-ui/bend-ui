import { Meta, StoryObj } from '@storybook/react-vite';
import { Field } from './Field';

const meta: Meta<typeof Field> = {
  title: 'Field',
  component: Field,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
