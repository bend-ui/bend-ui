import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Input } from '../Input';
import { FormField } from './FormField';

const meta = {
  component: FormField,
  tags: ['ai-generated'],
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <FormField>
      <FormField.Label htmlFor="email">Email</FormField.Label>
      <Input id="email" placeholder="you@example.com" />
      <FormField.Description>We never share your email.</FormField.Description>
    </FormField>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByPlaceholderText('you@example.com')).toBeVisible();
    await expect(
      canvas.getByText('We never share your email.'),
    ).toBeVisible();
  },
};

export const WithError: Story = {
  render: () => (
    <FormField>
      <FormField.Label htmlFor="username">Username</FormField.Label>
      <Input id="username" aria-invalid defaultValue="ab" />
      <FormField.Error>Username must be at least 3 characters.</FormField.Error>
    </FormField>
  ),
};

export const Required: Story = {
  render: () => (
    <FormField>
      <FormField.Label htmlFor="name">
        Full name <span aria-hidden="true">*</span>
      </FormField.Label>
      <Input id="name" required placeholder="Jane Doe" />
    </FormField>
  ),
};
