import type { Meta, StoryObj } from '@storybook/react-vite';
import { PasswordInput } from './PasswordInput';

const meta = {
  component: PasswordInput,
  tags: ['ai-generated'],
  args: {
    placeholder: 'Enter password',
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: 'secret123',
  },
};

export const ToggleVisibility: Story = {
  args: {
    placeholder: 'Password',
  },
};
