import { ContextMenu } from './ContextMenu';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ContextMenu> = {
  title: 'ContextMenu',
  component: ContextMenu,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
