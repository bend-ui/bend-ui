import { Meta, StoryObj } from '@storybook/react-vite';
import { Form } from './Form';

const meta: Meta<typeof Form> = {
  title: 'Form',
  component: Form,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
