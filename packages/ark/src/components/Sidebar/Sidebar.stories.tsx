import { Meta, StoryObj } from '@storybook/react-vite';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
