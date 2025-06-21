import { Toast } from './Toast';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Toast> = {
  title: 'Toast',
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
