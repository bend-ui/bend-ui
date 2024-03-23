import { Modal } from './Modal';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Modal',
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Base: Story = {
  args: {},
};
