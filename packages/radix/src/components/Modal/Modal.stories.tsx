import { Stack } from '@particles/styled-system/jsx';
import { Button, Input } from '@particles/react';
import { Modal } from './Modal';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Base: Story = {
  render: () => (
    <Modal
      title="Sign in to your account"
      trigger={<Button>Open modal</Button>}
    >
      <Stack>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button>Sign in</Button>
      </Stack>
    </Modal>
  ),
};

export const Composition: Story = {
  render: () => (
    <Modal.Root>
      <Modal.Trigger asChild>
        <Button>Open modal</Button>
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Content>
          <h1>Sign in to your account</h1>
          <Stack>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button>Sign in</Button>
          </Stack>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  ),
};
