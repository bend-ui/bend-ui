import { Button } from '@particles/react';
import { AlertDialog } from './AlertDialog';
import type { Meta, StoryObj } from '@storybook/react-vite';

export default { component: AlertDialog } as Meta<typeof AlertDialog>;

type Story = StoryObj<typeof AlertDialog>;

export const Composition: Story = {
  render: (args) => (
    <AlertDialog.Root {...args}>
      <AlertDialog.Trigger asChild>
        <Button>Open</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
            <AlertDialog.Description>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.Action>Continue</AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ),
};
