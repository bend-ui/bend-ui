import { useDisclosure } from '@particles/primitives';
import { Button } from '../Button';
import Modal from './Modal';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Overlay/Modal',
  component: Modal,
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export const Base: Story = {
  render: (args) => {
    const { isOpen } = useDisclosure();
    return (
      <>
        <Button>Open modal</Button>
        <Modal {...args} isOpen={isOpen} />
      </>
    );
  },
};
