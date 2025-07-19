import { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
import { SearchIcon } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithIcon: Story = {
  args: {
    icon: <SearchIcon />,
  },
};
