import { useState } from 'react';
import { Button, ButtonGroup, Input } from '../';
import { Modal } from './Modal';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Overlays/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Base: Story = {};

export const Composed: Story = {
  render: (args) => (
    <Modal.Root {...args}>
      <Modal.Trigger asChild>
        <Button>Open modal</Button>
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Backdrop />
        <Modal.Positioner>
          <Modal.Content>
            <Modal.Title>Add payment method</Modal.Title>
            <Modal.CloseTrigger>Close</Modal.CloseTrigger>
            <Input />
            <Input />
            <Input />
            <ButtonGroup>
              <Button>Cancel</Button>
              <Button>Save</Button>
            </ButtonGroup>
          </Modal.Content>
        </Modal.Positioner>
      </Modal.Portal>
    </Modal.Root>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open modal</Button>
        <Modal.Root onExitComplete={() => setIsOpen(false)} open={isOpen}>
          <Modal.Portal>
            <Modal.Backdrop />
            <Modal.Positioner>
              <Modal.Content>
                <Modal.Title>Dialog Title</Modal.Title>
                <Modal.Description>Dialog Description</Modal.Description>
                <Modal.CloseTrigger>Close</Modal.CloseTrigger>
              </Modal.Content>
            </Modal.Positioner>
          </Modal.Portal>
        </Modal.Root>
      </>
    );
  },
};
