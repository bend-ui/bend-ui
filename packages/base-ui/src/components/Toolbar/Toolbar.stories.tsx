import { Toolbar } from './Toolbar';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Toolbar> = {
  title: 'Toolbar',
  component: Toolbar,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
