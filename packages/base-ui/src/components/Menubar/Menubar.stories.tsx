import { Menubar } from './Menubar';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Menubar> = {
  title: 'Menubar',
  component: Menubar,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
