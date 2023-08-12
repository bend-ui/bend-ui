import { useDisclosure } from '@particles/primitives';
import { Button } from '../Button';
import { Input } from '../Input';
import { Modal } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Base: Story = {
  render: (args) => {
    const [isOpen, handlers] = useDisclosure();
    return (
      <>
        <Button onClick={handlers.open}>Open modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={handlers.close}>
          Edit payment method
          <Input />
          <Input />
          <Input />
          <Button>Cancel</Button>
          <Button>Save</Button>
        </Modal>
      </>
    );
  },
};
